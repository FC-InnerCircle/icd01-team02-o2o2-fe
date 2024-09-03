/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ImageLoader, useResizeImage } from "@pic-pik/react";
import { useState } from "react";
import colors from "styles/color";
import { type ImageMetadata } from "@pic-pik/core";
import LabelInput from "components/common/LabelInput";
import LabelTextarea from "components/common/LabelTextarea";
import fonts from "styles/font";
import { MenuOption } from "components/menu";

const dummyOption = [
  {
    title: "Pasta (Required - Single)",
    options: [
      { name: "Spaghetti", price: 0 },
      { name: "Linguine", price: 0 },
    ],
  },
  {
    title: "Noodle doneness (Required - Single)",
    options: [
      { name: "Well-cooked", price: 0 },
      { name: "Al dente (Firm)", price: 0 },
    ],
  },
  {
    title: "Extras (Optional - Multiple)",
    options: [
      { name: "Olives", price: 1000 },
      { name: "Extra noodle", price: 1000 },
    ],
  },
];
const MenuRegistration = ({ ...rest }) => {
  const [originalMetadata, setMetadata] = useState<ImageMetadata>();
  const { metadata } = useResizeImage({
    metadata: originalMetadata,
    option: {
      mode: "aspectRatio",
      ...(originalMetadata && originalMetadata.width > originalMetadata.height
        ? { height: 350 }
        : { width: 350 }),
    },
  });

  return (
    <div css={[_container]} {...rest}>
      <div css={_titleWrap}>
        <h2>Menu</h2>
        <button css={_subButton}>Preview</button>
      </div>
      <section css={_menuContainer}>
        <h3 css={_subtitle}>Main info</h3>
        <div css={_wrapper}>
          <div css={_imageWrapper}>
            {originalMetadata && metadata ? (
              <ImageLoader onMetadataLoaded={setMetadata}>
                <div css={_imageLoader}>
                  <img src={metadata.src} width={"100%"} />
                </div>
              </ImageLoader>
            ) : (
              <ImageLoader onMetadataLoaded={setMetadata}>
                <div css={_imageLoader}>Please upload a picture</div>
              </ImageLoader>
            )}
          </div>
          <form css={_form}>
            <LabelInput title="Name" css={_input} />
            <LabelTextarea title="Description" css={_textarea} />
            <LabelInput title="Price" css={_input} />
          </form>
        </div>
      </section>
      <section
        css={css`
          width: 350px;
          margin-top: 50px;
        `}
      >
        <div css={_titleWrap}>
          <h3 css={_subtitle}>Options</h3>
          <button css={_addButton}>Add</button>
        </div>
        <div>
          {dummyOption.map((option, idx) => (
            <MenuOption
              key={`menu_option_${option.title}_${idx}`}
              title={option.title}
              options={option.options}
            />
          ))}
        </div>
      </section>
      <button css={_submit}>SAVE</button>
    </div>
  );
};

export default MenuRegistration;

const _container = css`
  padding: 44px;
  width: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const _menuContainer = css`
  width: 100%;
`;

const _titleWrap = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
  fonts["24_600"],
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
    min-width: 112px;
  `,
  fonts["16_800"],
];

const _addButton = [
  _subButton,
  css`
    background-color: ${colors.primary};
  `,
];

const _submit = [
  css`
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 12px 36px;
    border-radius: 36px;
    margin: 24px auto;
    width: 300px;
  `,
  fonts["28_600"],
];
