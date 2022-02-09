type DateValue = string | number | Date;

/**
 * 동적으로 변하는 new Date()는 인수로 받아오는게 바람직하다.
 * @param target string | number | Date
 * @param now string | number | Date; default new Date()
 * @returns 1초 전, 1분 전, 1시간 전, 1일 전, 1년 전
 */
export const toTimeDuration = (
  target: DateValue,
  now: DateValue = new Date(),
) => {
  const second = Math.floor(
    (new Date(now).getTime() - new Date(target).getTime()) / 1000,
  );
  if (second < 60) return `${second}초 전`;

  const minute = Math.floor(second / 60);
  if (minute < 60) return `${minute}분 전`;

  const hour = Math.floor(second / 3600);
  if (hour < 24) return `${hour}시간 전`;

  const day = Math.floor(hour / 24);
  if (day < 365) return `${day}일 전`;

  return `${Math.floor(day / 365)}년 전`;
};
