/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import colors from 'styles/color';
import { ArrowDown } from '../icons';

type FilterProps = {
  leftSlot?: ReactNode;
  backgroundColor: keyof typeof colors;
  placeholder?: string;
  options: { value: string; label: string }[];
} & ComponentPropsWithoutRef<'select'>;

export default function Filter({
  leftSlot,
  backgroundColor = 'lightBlue',
  placeholder,
  options,
  ...restProps
}: FilterProps) {
  return (
    <div css={_container}>
      {leftSlot && <span css={_leftSlot}>{leftSlot}</span>}
      <_Select
        leftSlot={leftSlot}
        backgroundColor={backgroundColor}
        {...restProps}
      >
        <option disabled hidden selected>
          {placeholder}
        </option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </_Select>
      <ArrowDown css={_arrowDownIcon} width={20} height={20} />
    </div>
  );
}

const _container = css`
  position: relative;
`;

const _leftSlot = css`
  position: absolute;
  height: 28px;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
`;

const _arrowDownIcon = css`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;

const _Select = styled.select<Omit<FilterProps, 'options'>>`
  min-width: 218px;
  height: 68px;
  text-align: center;
  background-size: 20px;
  padding: 5px 30px 5px 10px;
  background: url('https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png')
    calc(100% - 5px) center no-repeat;
  ${({ backgroundColor }) => css`
    background-color: ${colors[backgroundColor]};
  `}
  ${({ leftSlot }) =>
    leftSlot &&
    css`
      padding-left: 32px;
    `};
  border-radius: 12px;
  border: none;
  outline: 0 none;
`;
