import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'));
  if (!Number.isInteger(id) || id <= 0) {
    throw createError({ statusCode: 400, statusMessage: 'Некорректный id' });
  }

  const survey = await prisma.screenSurvey.findUnique({
    where: { id },
    select: {
      id: true,
      rating: true,
      text: true,
      help: true,
      isAnonymous: true,
      name: true,
      sex: true,
      age: true,
      employment: true,
    },
  });

  if (!survey)
    throw createError({ statusCode: 404, statusMessage: 'Опрос не найден' });
  return survey;
});
