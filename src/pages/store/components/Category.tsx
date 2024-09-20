/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import colors from 'styles/color';

import MultiSelect from './MultipleSelect';

import { CATEGORY_OPTION } from '../constants';
import KakaoMap from './KakaoMap';
import { useFormContext } from 'react-hook-form';
import { LabelInput } from 'pages/menu/components';

const Category = ({
  address,
  addressDetail,
}: {
  address: string;
  addressDetail: string;
}) => {
  const {
    getValues,
    register,
    formState: { errors },
  } = useFormContext();

  const { longitude, latitude } = getValues();

  const location = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <div css={_form}>
      <MultiSelect options={CATEGORY_OPTION} />
      <LabelInput {...register('contactNumber')} title="연락처" css={_input} />
      {errors.contactNumber && (
        <span css={_errorMsg}>
          {errors.contactNumber.message as React.ReactNode}
        </span>
      )}
      <LabelInput {...register('zipCode')} title="우편번호" css={_input} />
      {errors.zipCode && (
        <span css={_errorMsg}>{errors.zipCode.message as React.ReactNode}</span>
      )}

      <LabelInput
        value={`${address} ${addressDetail}`}
        readOnly
        title="현재 주소"
        css={_textarea}
      />

      <KakaoMap location={location} />
    </div>
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

const _errorMsg = css`
  color: ${colors.danger};
`;
