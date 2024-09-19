export const formatToKoreanCurrency = (
  amount: number | string | undefined,
): string => {
  // 기본값 처리: amount가 undefined인 경우 "₩0" 반환
  if (amount === undefined) return '₩0';

  // 문자열을 숫자로 변환하는 로직
  const parsedAmount =
    typeof amount === 'string' ? parseFloat(amount.replace(/,/g, '')) : amount;

  // 유효하지 않은 숫자(NaN)인 경우 "₩0" 반환
  if (isNaN(parsedAmount)) return '₩0';

  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(parsedAmount);
};
