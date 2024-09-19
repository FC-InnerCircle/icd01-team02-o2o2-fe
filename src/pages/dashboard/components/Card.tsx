/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import colors from 'styles/color';
import fonts from 'styles/font';

type CardProps = {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  total?: number | string; // 총 산출 - 추후 백엔드 요청
  due?: number; // 산출 기간 - 추후 백엔드 요청
  width?: number;
  height?: number;
  titleText?: boolean;
  border?: boolean;
};

const Card = ({
  icon: Icon,
  total,
  title,
  due,
  width = 339,
  height = 168,
  titleText = false,
  border = false,
}: CardProps) => {
  return (
    <div css={_container(width, height, border)}>
      {Icon && <Icon css={_icon} />}

      <div>
        <div css={_totalTxt}>{total ?? total}</div>
        <div css={[_titleTxt(titleText)]}>{title ?? title}</div>
        <div css={_dueTxt}>{due ? `(${due} days)` : null}</div>
      </div>
    </div>
  );
};

export default Card;

const _container = (width: number, height: number, border: boolean) => css`
  display: flex;
  align-items: center;
  width: ${width}px;
  height: ${height}px;
  background-color: ${colors.white};
  border-radius: 12px;
  border: ${border ? `1px solid ${colors.lightGray}` : null};
  padding: 32px;
  gap: 28px;
`;

const _icon = css`
  width: 84px;
  height: 84px;
`;

const _totalTxt = css`
  font-size: 32px;
  font-weight: 800;
`;

const _titleTxt = (titleText: boolean) => [
  css`
    color: ${titleText ? colors.textThird : null};
  `,
  fonts['14_500'],
];

const _dueTxt = [
  css`
    color: ${colors.textThird};
  `,
  fonts['12_400'],
];
