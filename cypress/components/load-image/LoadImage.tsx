import { HTMLAttributes } from 'react';

import { type Limit } from '@pic-pik/core';
import { useImage } from '@pic-pik/react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  limit?: Limit;
}

const LoadImage = ({ limit }: Props) => {
  const { ref, metadata } = useImage({ limit });
  return (
    <div>
      <input type="file" ref={ref} />
      {metadata && (
        <div id="metadata">
          <p id="width">Width: {metadata.width}</p>
          <p id="height">Height: {metadata.height}</p>
          <p id="size">Size: {metadata.size}</p>
          <p id="name">Name: {metadata.name}</p>
          <p id="extension">Extension: {metadata.extension}</p>
        </div>
      )}
    </div>
  );
};

export default LoadImage;
