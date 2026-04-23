import prisma from '~/utils/prisma';

export default defineEventHandler(async () => {
  try {
    const washTypes = await prisma.washType.findMany({
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        name: true,
        description: true,
        temperature: true,
        dryingSpin: true,
        isActive: true,
      },
    });
    washTypes.map((el) => (el.isNeed = false));
    return washTypes;
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Ошибка при загрузке типов стирок',
    });
  }
});
