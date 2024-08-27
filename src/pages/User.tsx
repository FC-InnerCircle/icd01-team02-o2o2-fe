/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const User = ({ ...rest }) => {
  return <div css={[_container]} {...rest}></div>;
};

export default User;

const _container = css``;
