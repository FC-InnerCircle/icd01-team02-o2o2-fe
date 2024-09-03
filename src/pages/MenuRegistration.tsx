/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ImageLoader, useResizeImage } from "@pic-pik/react";
import { useState } from "react";
import colors from "styles/color";
import { type ImageMetadata } from "@pic-pik/core";
import LabelInput from "components/common/LabelInput";
import LabelTextarea from "components/common/LabelTextarea";
import fonts from "styles/font";

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
          <div css={_option}>
            <p css={_label}>Pasta (Required - Single)</p>
            <ul css={_optionItemWrap}>
              <li css={_optionItem}>
                <p>Spaghetti</p>
                <p>+ ₩0</p>
              </li>
              <li css={_optionItem}>
                <p>Linguine</p>
                <p>+ ₩0</p>
              </li>
            </ul>
          </div>
          <div css={_option}>
            <p css={_label}>Noodle doneness (Required - Single)</p>
            <ul css={_optionItemWrap}>
              <li css={_optionItem}>
                <p>Well-cooked</p>
                <p>+ ₩0</p>
              </li>
              <li css={_optionItem}>
                <p>Al dente (Firm)</p>
                <p>+ ₩0</p>
              </li>
            </ul>
          </div>
          <div css={_option}>
            <p css={_label}>Extras (Optional - Multiple)</p>
            <ul css={_optionItemWrap}>
              <li css={_optionItem}>
                <p>Olives</p>
                <p>+ ₩1000</p>
              </li>
              <li css={_optionItem}>
                <p>Extra noodle</p>
                <p>+ ₩1000</p>
              </li>
            </ul>
          </div>
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

const _optionItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0px 24px;
  border-bottom: 1px solid ${colors.lightGray};
`;

const _option = css`
  margin-top: 16px;
  margin-bottom: 32px;
`;
const _optionItemWrap = css`
  margin-top: 8px;
  width: 100%;
  border-radius: 10px;
  background-color: ${colors.white};
  height: fit-content;
  overflow: hidden;
  li:last-child {
    border-bottom: none;
  }
`;

const _label = [
  css`
    color: ${colors.textThird};
  `,
  fonts["16_600"],
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
