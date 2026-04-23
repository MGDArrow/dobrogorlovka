import prisma from '~/utils/prisma';

// Вспомогательная функция для генерации 8-значного номера заказа
async function generateOrderNumber(): Promise<string> {
  while (true) {
    const num = Math.floor(100000 + Math.random() * 900000).toString();
    const existing = await prisma.order.findUnique({
      where: { orderNumber: num },
    });
    if (!existing) return num;
  }
}

// Проверка, что время находится в будущем
function isFutureDateTime(date: Date): boolean {
  return date > new Date();
}

// TODO Проверка, что время не занято другим заказом
async function isTimeSlotFree(date: Date): Promise<boolean> {
  const start = new Date(date);
  const end = new Date(start.getTime() + 60 * 60 * 1000); // часовой слот
  const conflictingOrder = await prisma.order.findFirst({
    where: {
      scheduledAt: {
        gte: start,
        lt: end,
      },
    },
  });
  return !conflictingOrder;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // 1. Валидация обязательных полей
  const { name, phone, colors, date, rulesConfirmed, comment } = body;
  if (!name || name.length < 2) {
    throw createError({
      statusCode: 400,
      message: 'ФИО должно содержать минимум 2 символа',
    });
  }
  if (!phone || phone.length !== 18) {
    throw createError({
      statusCode: 400,
      message: 'Некорректный номер телефона',
    });
  }
  if (!Array.isArray(colors) || colors.length === 0) {
    throw createError({
      statusCode: 400,
      message: 'Выберите хотя бы один тип стирки',
    });
  }
  if (!date) {
    throw createError({
      statusCode: 400,
      message: 'Не выбрана дата и время стирки',
    });
  }
  if (!rulesConfirmed) {
    throw createError({
      statusCode: 400,
      message: 'Необходимо подтвердить правила',
    });
  }

  const scheduledAt = new Date(date);
  if (isNaN(scheduledAt.getTime())) {
    throw createError({ statusCode: 400, message: 'Некорректный формат даты' });
  }

  // 2. Проверка, что время в будущем
  if (!isFutureDateTime(scheduledAt)) {
    throw createError({
      statusCode: 400,
      message: 'Нельзя забронировать время в прошлом',
    });
  }

  // 3. Проверка, что выбранные типы стирки существуют
  // const validWashTypes = await prisma.washType.findMany({
  //   where: { id: { in: colors }, isActive: true },
  // });
  // if (validWashTypes.length !== colors.length) {
  //   throw createError({
  //     statusCode: 400,
  //     message: 'Один или несколько выбранных типов стирки недействительны',
  //   });
  // }

  // 4. Проверка, что выбранный слот свободен (нет других заказов на это время)
  // const isFree = await isTimeSlotFree(scheduledAt);
  // if (!isFree) {
  //   throw createError({
  //     statusCode: 409,
  //     message: 'Выбранное время уже занято. Пожалуйста, выберите другое',
  //   });
  // }

  // 5. Генерация уникального номера заказа
  const orderNumber = await generateOrderNumber();

  // 6. Сохранение заказа в БД вместе со связями WashType
  try {
    const order = await prisma.order.create({
      data: {
        orderNumber,
        rulesConfirmed,
        customerName: name,
        customerPhone: phone,
        comment: comment || null,
        scheduledAt,
        washTypes: {
          create: colors.map((washTypeId: number) => ({
            washType: { connect: { id: washTypeId } },
          })),
        },
      },
      include: { washTypes: { include: { washType: true } } },
    });

    await $fetch(`${process.env.URL_ADMIN_PANEL}api/orders`, {
      method: 'POST',
      body: { ...order },
    });

    return {
      success: true,
      orderNumber: order.orderNumber,
      scheduledAt: order.scheduledAt.toISOString(),
      message: 'Заказ успешно забронирован',
    };
  } catch (error) {
    console.error('Ошибка при создании заказа:', error);
    throw createError({
      statusCode: 500,
      message: 'Внутренняя ошибка сервера',
    });
  }
});
