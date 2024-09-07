/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Store = ({ ...rest }) => {
  return <div css={[_container]} {...rest}></div>;
};

export default Store;

const _container = css``;
