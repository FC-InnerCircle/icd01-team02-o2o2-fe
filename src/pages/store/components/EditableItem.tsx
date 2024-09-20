/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import colors from 'styles/color';
import fonts from 'styles/font';
import { useFormContext } from 'react-hook-form';
import { forwardRef } from 'react';

import type { EditableItemProps } from '../types';

const EditableItem = forwardRef<HTMLInputElement, EditableItemProps>(
  ({ label, type, width = '84px', ...restProps }, ref) => {
    return (
      <div css={_itemContainerStyle}>
        <label css={[_labelStyle]}>{label}</label>
        <input type={type} css={_inputStyle(width)} ref={ref} {...restProps} />
      </div>
    );
  },
);

const OpeningHoursAndFees = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div>
        <h3 css={[_sectionTitleStyle]}>영업 시간</h3>

        <EditableItem
          {...register('openTime')}
          label="Open"
          type="time"
          width="140px"
        />
        {errors.zipCode && (
          <span css={_errorMsg}>
            {errors.zipCode.message as React.ReactNode}
          </span>
        )}

        <EditableItem
          {...register('closeTime')}
          label="Close"
          width="140px"
          type="time"
        />
      </div>

      <div>
        <h3 css={_sectionTitleStyle}>최소 주문 금액 및 배달료</h3>
        <div>
          <EditableItem
            {...register('minimumOrderAmount')}
            label="최소 주문 금액"
            type="text"
            width="40%"
          />
          {/* <EditableItem
            {...register('deliveryFee')}
            label="배달료"
            type="text"
            width="40%"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default OpeningHoursAndFees;

const _itemContainerStyle = css`
  display: flex;
  width: 352px;
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

const _errorMsg = css`
  color: ${colors.danger};
`;
