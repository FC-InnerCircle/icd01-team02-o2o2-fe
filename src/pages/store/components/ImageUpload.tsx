/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ImageLoader } from '@pic-pik/react';
import { useState } from 'react';

import colors from 'styles/color';
import fonts from 'styles/font';

const ImageUpload = () => {
  return <PicPickComponent />;
};

const PicPickComponent = () => {
  const [src, setSrc] = useState<string | null>(null);

  return (
    <ImageLoader
      accept=".jpg, .jpeg, .png .JPG"
      onMetadataLoaded={(data) => {
        setSrc(data.src);
      }}
      limit={{
        width: {
          max: 3000,
          onError: (error) => {
            console.log(error);
          },
        },
        height: 3000,
      }}
    >
      <div css={_container}>
        {src ? (
          <img css={_img} src={src} alt="이미지" />
        ) : (
          <div css={_text}>Please upload a picture</div>
        )}
      </div>
    </ImageLoader>
  );
};

export default ImageUpload;

const _container = css`
  width: 352px;
  height: 352px;
  background-color: #abaaaa;
  border-radius: 8px;
`;

const _text = [
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: ${colors.white};
  `,
  fonts['16_500'],
];

const _img = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
