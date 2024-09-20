/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Button } from 'common/components';

import {
  useGetStoresQueryTest,
  useUpdateStoresQuery,
} from 'queries/modules/stores/useStoresQuery';
import get from 'lodash/get';

import ImageUpload from './components/ImageUpload';
import Category from './components/Category';
import OpeningHoursAndFees from './components/EditableItem';
import fonts from 'styles/font';
import colors from 'styles/color';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { storeSchema } from './schema';
import { useEffect } from 'react';

import type { UpdateStorePayload } from 'api/modules/stores/types';

const Store = ({ ...rest }) => {
  const { data } = useGetStoresQueryTest(1);
  const { mutate: updateStoreQuery } = useUpdateStoresQuery();

  const storeData = get(data, 'response');

  const methods = useForm({
    resolver: zodResolver(storeSchema),
    defaultValues: storeData || {},
  });

  const { name, address, addressDetail } = storeData;

  const onSubmit = (values: UpdateStorePayload) => {
    updateStoreQuery(
      { storeId: 1, payload: values },
      {
        onSuccess: () => {
          alert('성공적으로 수정되었습니다.');
        },
      },
    );
  };

  useEffect(() => {
    if (storeData?.address && storeData?.addressDetail) {
      methods.setValue(
        'address',
        `${storeData.address} ${storeData.addressDetail}`,
      );
    }
  }, [methods, storeData]);

  return (
    <FormProvider {...methods}>
      <div css={[_container]} {...rest}>
        <h3>{name}</h3>

        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div css={_contentsContainer}>
            <section css={_wrapperTxt}>
              <span css={[_titleText]}>기본 정보</span>
              <ImageUpload />
              <span css={[_titleText]}>영업 및 금액 정보</span>
              <OpeningHoursAndFees />
            </section>

            <section css={_bcontainer}>
              <Category address={address} addressDetail={addressDetail} />
            </section>
          </div>

          <div css={_btnStyleContainer}>
            <Button type="submit">저장</Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default Store;

const _container = css`
  display: flex;
  flex-direction: column;
`;

const _titleText = [
  css`
    color: ${colors.primary};
  `,
  fonts['24_800'],
];

const _bcontainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const _btnStyleContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const _contentsContainer = css`
  display: flex;
  gap: 10%;
`;

const _wrapperTxt = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
