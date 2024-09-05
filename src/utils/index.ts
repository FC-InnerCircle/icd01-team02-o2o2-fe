// Hex를 RGBA로 변환하는 함수
export const hexToRgba = (hex: string, opacity: number): string => {
  const [r, g, b] = hex
    .replace("#", "")
    .match(/.{1,2}/g)!
    .map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};