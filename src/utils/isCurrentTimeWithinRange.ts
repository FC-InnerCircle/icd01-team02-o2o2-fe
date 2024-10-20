import { parse, isBefore, isAfter } from 'date-fns';

/**
 * 현재 시간이 openTime과 closeTime 사이에 있는지 확인하는 함수
 * @param {string} openTime - 오픈 시간 (예: '09:00')
 * @param {string} closeTime - 닫는 시간 (예: '18:00')
 * @returns {boolean} - 현재 시간이 openTime과 closeTime 사이에 있으면 true, 그렇지 않으면 false
 *
 * 예시 사용
 * const result = isCurrentTimeWithinRange('09:00', '18:00');
 * console.log(result); // 현재 시간이 09:00과 18:00 사이에 있으면 true, 그렇지 않으면 false
 */
export const isCurrentTimeWithinRange = (
  openTime: string,
  closeTime: string,
) => {
  // 현재 시간을 Date 객체로 구함
  const currentTime = new Date();

  // openTime과 closeTime 문자열을 'HH:mm' 형식의 Date 객체로 변환
  const openTimeDate = parse(openTime, 'HH:mm', new Date());
  const closeTimeDate = parse(closeTime, 'HH:mm', new Date());

  // 현재 시간이 openTime보다 이전이거나 closeTime보다 이후이면 false 반환
  if (
    isBefore(currentTime, openTimeDate) ||
    isAfter(currentTime, closeTimeDate)
  ) {
    return false;
  }

  return true;
};
