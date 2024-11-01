/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ImageLoader } from '@pic-pik/react';
import { useState } from 'react';
import colors from 'styles/color';
import fonts from 'styles/font';
import {
  LabelInput,
  LabelTextarea,
  MenuOption,
  OptionModal,
} from 'pages/menu/components';
import type { CreateMenuOptionGroupReq } from 'api/modules/menu/types';
import type { MenuDetailInfo } from 'api/modules/stores/types';
import useMenuDetail from './hooks/useMenuDetail';
import useMenuOption from './hooks/useMenuOption';
import MenuPreviewModal from './components/menuPreviewModal';
import usePreviewModal from './models/usePreviewModal';
import { useGetStoresMenuDetailQuery } from 'queries/modules/stores/useStoresQuery';
import { useParams } from 'react-router-dom';

//TODO status 뭐로 추가하지?
const MenuDetail = ({ data }: { data: MenuDetailInfo }) => {
  const { options: originOptions } = data;
  const [isOptionModalOpen, setIsOptionModalOpen] = useState<boolean>(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false);
  const [selectedOptionToEdit, setSelectedOptionToEdit] = useState<{
    data: CreateMenuOptionGroupReq;
    index: number;
  } | null>(null);

  const { register, originalImage, imageMetadata, addImageFile, getValues } =
    useMenuDetail({ menu: data });
  const { addOption, deleteOption, updateOption, options } = useMenuOption({
    menuId: data.menuId,
    originOptions,
  });

  const menuPreviewModel = usePreviewModal({
    getData: getValues,
    isOpenPreview: isPreviewModalOpen,
  });

  const isSelectedOptionModalOpen = !!selectedOptionToEdit;
  const handleEditOption = (
    optionGroup: CreateMenuOptionGroupReq,
    index: number,
  ) => setSelectedOptionToEdit({ data: optionGroup, index });
  const handleCloseEditModal = () => setSelectedOptionToEdit(null);
  const handleOptionModalOpen = () => setIsOptionModalOpen((prev) => !prev);

  return (
    <>
      <div css={[_container]}>
        <div css={_titleWrap}>
          <h2>Menu</h2>
          <button css={_subButton} onClick={() => setIsPreviewModalOpen(true)}>
            미리보기
          </button>
        </div>
        <section css={_menuContainer}>
          <h3 css={_subtitle}>기본 정보</h3>
          <div css={_wrapper}>
            <div css={_imageWrapper}>
              <ImageLoader onMetadataLoaded={addImageFile}>
                <div css={_imageLoader}>
                  <img
                    src={imageMetadata ? imageMetadata.src : originalImage}
                    width={'100%'}
                  />
                </div>
              </ImageLoader>
            </div>
            <form css={_form}>
              <LabelInput
                title="메뉴 이름"
                css={_input}
                {...register('name')}
              />
              <LabelTextarea
                title="설명"
                css={_textarea}
                {...register('desc')}
              />
              <LabelInput
                title="가격"
                css={_input}
                prefix={'₩'}
                {...register('price')}
              />
            </form>
          </div>
          <button css={_submit}>저장</button>
        </section>
        <section>
          <p css={_optionNotice}>
            Notice : Option의 추가, 수정, 삭제시 Menu의 다른 정보와 별개로 바로
            반영됩니다
          </p>
          <div css={_optionContainer}>
            <div css={_titleWrap}>
              <h3 css={_subtitle}>메뉴 옵션</h3>
              <button css={_addButton} onClick={handleOptionModalOpen}>
                추가
              </button>
            </div>
            {options.map((field, index) => (
              <MenuOption
                key={`menu_option_${field.title}_${index}`}
                option={field}
                onEdit={() => handleEditOption(field, index)}
                onDelete={() => deleteOption(field.optionGroupId)}
              />
            ))}
            {options.length === 0 && (
              <div css={_empty}>
                메뉴의 옵션이 필요할 경우,
                <br />
                추가 버튼을 눌러 옵션을 등록하세요
              </div>
            )}
          </div>
        </section>
      </div>
      {isOptionModalOpen && (
        <OptionModal
          isOpen={isOptionModalOpen}
          onClose={handleOptionModalOpen}
          onSave={addOption}
        />
      )}
      {isSelectedOptionModalOpen && (
        <OptionModal
          isOpen={isSelectedOptionModalOpen}
          onClose={handleCloseEditModal}
          initialFormValues={selectedOptionToEdit.data}
          onSave={(optionGroup) => {
            updateOption({
              optionGroupId: selectedOptionToEdit.index,
              ...optionGroup,
            });
          }}
        />
      )}
      {isPreviewModalOpen && (
        <MenuPreviewModal
          onClose={() => setIsPreviewModalOpen(false)}
          {...menuPreviewModel}
        />
      )}
    </>
  );
};

const MenuDetailWrapper = () => {
  /* TODO API 연결 */
  const { storeId, menuId } = useParams<{ storeId: string; menuId: string }>();

  const { data } = useGetStoresMenuDetailQuery(
    storeId ? Number(storeId) : 1,
    menuId ? Number(menuId) : 1,
  );
  if (!data) return <></>;
  return <MenuDetail data={data.response} />;
};

export default MenuDetailWrapper;

const _container = css`
  padding: 44px;
  width: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const _menuContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const _titleWrap = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
  h3 {
    margin: 0;
  }
`;

const _wrapper = css`
  width: 100%;
  display: flex;
  gap: 50px;
`;

const _imageWrapper = css`
  position: relative;
  input {
    overflow: hidden !important;
    position: absolute;
  }
`;

const _imageLoader = css`
  width: 350px;
  height: 350px;
  background-color: ${colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
`;

const _form = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const _input = css`
  width: 100%;
`;

const _textarea = css`
  width: 100%;
  height: 100px;
`;

const _subtitle = [
  css`
    color: ${colors.primary};
    margin-bottom: 8px;
  `,
  fonts['24_600'],
];

const _subButton = [
  css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 24px;
    border-radius: 24px;
    background-color: ${colors.accent};
    color: ${colors.white};
    width: 112px;
    height: 36px;
    transition: opacity 0.3s;
    :hover {
      opacity: 0.7;
    }
  `,
  fonts['16_800'],
];

const _addButton = [
  _subButton,
  css`
    background-color: ${colors.primary};
    width: 86px;
  `,
];

const _submit = [
  css`
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 12px 36px;
    border-radius: 36px;
    margin: 64px auto;
    width: 240px;
    transition: opacity 0.3s;

    :hover {
      opacity: 0.7;
    }
  `,
  fonts['28_600'],
];

const _optionContainer = css`
  width: 350px;
  margin-top: 24px;
`;

const _empty = css`
  width: 100%;
  background-color: ${colors.white};
  padding: 40px;
  border-radius: 12px;
  margin: 24px 0;
  color: ${colors.textThird};
  text-align: center;
`;

const _optionNotice = css`
  width: 100%;
  background-color: ${colors.white};
  padding: 12px 18px;
  border-radius: 8px;
  color: ${colors.primary};
`;
