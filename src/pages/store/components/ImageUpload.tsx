/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ImageLoader, useResizeImage } from '@pic-pik/react';
import { useState } from 'react';

import colors from 'styles/color';
import fonts from 'styles/font';

import type { ImageMetadata } from '@pic-pik/core';

export const ImageUpload = () => {
  const [originalImageMetadata, setOriginalImageMetadata] =
    useState<ImageMetadata | null>(null);

  const { metadata } = useResizeImage({
    metadata: originalImageMetadata,
    option: {
      mode: 'aspectRatio',
      ...(originalImageMetadata &&
      originalImageMetadata.width > originalImageMetadata.height
        ? { height: 352 }
        : { width: 352 }),
    },
  });

  return (
    <div css={_imageWrapper}>
      <ImageLoader onMetadataLoaded={setOriginalImageMetadata}>
        {originalImageMetadata && metadata ? (
          <div css={_imageLoader}>
            <img src={metadata.src} width={'100%'} />
          </div>
        ) : (
          <div css={_imageLoader}>Please upload a picture</div>
        )}
      </ImageLoader>
    </div>
  );
};

export default ImageUpload;

const _imageLoader = [
  css`
    width: 352px;
    height: 352px;
    background-color: ${colors.lightGray};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    color: ${colors.white};
  `,
  fonts['16_500'],
];

const _imageWrapper = css`
  position: relative;
  input {
    overflow: hidden !important;
    position: absolute;
  }
`;
