/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Textarea, Input } from 'common/components';
import type { CategoryProps } from '../types';

import colors from 'styles/color';

const Category = ({
  contactNumber,
  zipCode,
  addressDetail,
  address,
  // categories,
}: CategoryProps) => {
  const defaultAddress = `${zipCode} ${address} ${addressDetail}`;

  return (
    <div css={_container}>
      <div>
        <span css={_labelText}>카테고리</span>
        <select></select>
      </div>

      <div>
        <span css={_labelText}>연락처</span>
        <Input defaultValue={contactNumber} />
      </div>

      <div css={_addressContainer}>
        <span css={_labelText}>주소</span>
        <Textarea defaultValue={defaultAddress} />
      </div>
    </div>
  );
};

export default Category;

/**
 * 주소
 * 우편번호
 * 주소
 * 상세주소
 */

/**
 * 연락처
 * contactNumber
 */

const _container = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const _addressContainer = css`
  display: flex;
  flex-direction: column;
`;

const _labelText = css`
  color: ${colors.textThird};
`;
