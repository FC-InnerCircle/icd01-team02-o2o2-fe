/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import type { CategoryProps } from '../types';

import colors from 'styles/color';

import LabelInput from 'common/components/labelInput';
import LabelTextarea from 'common/components/labelTextarea';

import MultiSelect from './MultipleSelect';

import { CATEGORY_OPTION } from '../constants';

const Category = ({
  contactNumber,
  zipCode,
  addressDetail,
  address,
  // categories,
}: CategoryProps) => {
  const defaultAddress = `${zipCode} ${address} ${addressDetail}`;

  return (
    <form css={_form}>
      <MultiSelect options={CATEGORY_OPTION} />
      <LabelInput defaultValue={contactNumber} title="연락처" css={_input} />
      <LabelTextarea
        defaultValue={defaultAddress}
        title="주소"
        css={_textarea}
      />
    </form>
  );
};

export default Category;

const _form = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const _input = css`
  width: 75%;
  color: ${colors.textThird};
`;

const _textarea = css`
  width: 75%;
  color: ${colors.textThird};
`;
