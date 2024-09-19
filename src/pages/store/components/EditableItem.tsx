/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

import type { EditableItemProps, OpeningHoursAndFeesProps } from '../types';
import colors from 'styles/color';
import fonts from 'styles/font';

import { formatToKoreanCurrency } from 'utils/formatTokoCurrency';

const EditableItem = ({
  label,
  value,
  type,
  onChange,
  width = '84px',
}: EditableItemProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div css={_itemContainerStyle}>
      <label css={[_labelStyle]}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        css={_inputStyle(width)}
      />
    </div>
  );
};

const OpeningHoursAndFees = ({
  open,
  close,
  minCost,
  delivery,
}: OpeningHoursAndFeesProps) => {
  const [openTime, setOpenTime] = useState<string>(open);
  const [closeTime, setCloseTime] = useState<string>(close);
  const [minOrder, setMinOrder] = useState<number>(minCost);
  const [deliveryFee, setDeliveryFee] = useState<string>(delivery);

  return (
    <div>
      <div>
        <h3 css={[_sectionTitleStyle]}>영업 시간</h3>
        <EditableItem
          label="Open"
          value={openTime}
          type="time"
          width="140px"
          onChange={setOpenTime}
        />
        <EditableItem
          label="Close"
          value={closeTime}
          width="140px"
          type="time"
          onChange={setCloseTime}
        />
      </div>

      <div>
        <h3 css={_sectionTitleStyle}>최소 주문 금액 및 배달료</h3>
        <div>
          <EditableItem
            label="최소 주문 금액"
            value={formatToKoreanCurrency(minOrder)}
            type="text"
            width="40%"
            onChange={(value) => setMinOrder(Number(value))}
          />
          <EditableItem
            label="배달료"
            value={deliveryFee}
            type="text"
            width="40%"
            onChange={(value) => setDeliveryFee(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default OpeningHoursAndFees;

// Emotion 스타일 정의
const _itemContainerStyle = css`
  display: flex;
  width: 320px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${colors.white};
`;

const _labelStyle = [
  css`
    color: ${colors.textPrimary};
  `,
  fonts['14_500'],
];

const _inputStyle = (width: string) => css`
  width: ${width};
  padding: 4px;
  text-align: right;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: ${colors.primary};
  }
`;

const _sectionTitleStyle = [
  css`
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${colors.textThird};
  `,
  fonts['16_500'],
];
