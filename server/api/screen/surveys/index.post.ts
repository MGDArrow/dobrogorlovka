import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const rating = Number(body?.rating);

  if (!Number.isInteger(rating) || rating < 1 || rating > 10) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Некорректный рейтинг',
    });
  }

  return prisma.screenSurvey.create({
    data: { rating },
    select: { id: true, rating: true, createdAt: true },
  });
});
