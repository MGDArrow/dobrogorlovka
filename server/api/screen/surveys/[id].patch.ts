import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'));
  if (!Number.isInteger(id) || id <= 0) {
    throw createError({ statusCode: 400, statusMessage: 'Некорректный id' });
  }

  const exists = await prisma.screenSurvey.findUnique({
    where: { id },
    select: { id: true },
  });
  if (!exists)
    throw createError({ statusCode: 404, statusMessage: 'Опрос не найден' });

  const body = await readBody(event);
  const data: Record<string, unknown> = {};

  if (typeof body?.text === 'string') data.text = body.text.slice(0, 5000);
  if (Array.isArray(body?.help)) {
    data.help = body.help
      .filter((v): v is string => typeof v === 'string')
      .slice(0, 20);
  }
  if (typeof body?.isAnonymous === 'boolean')
    data.isAnonymous = body.isAnonymous;

  // персональные данные пишем только если не аноним
  if (data.isAnonymous === false) {
    if (typeof body?.name === 'string') data.name = body.name.slice(0, 200);
    if (typeof body?.sex === 'string') data.sex = body.sex;
    if (typeof body?.age === 'string') data.age = body.age;
    if (typeof body?.employment === 'string') data.employment = body.employment;
  }

  return prisma.screenSurvey.update({
    where: { id },
    data,
    select: { id: true, updatedAt: true },
  });
});
