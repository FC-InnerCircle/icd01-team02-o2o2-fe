import colors from 'styles/color';

const TAG_COLORS = [
  colors.brightGreen,
  colors.icy,
  colors.accent,
  colors.brightOrange,
  colors.lightYellow,
  colors.warning,
  colors.brightRed,
];

/**
 * 백엔드 카테고리 구조 바꿔야함
 * {[key: string] : string[]}
 */

const CATEGORY_OPTION = {
  한식: ['분식', '돈까스'],
  중식: ['짜장면', '탕수육'],
};

export { TAG_COLORS, CATEGORY_OPTION };
