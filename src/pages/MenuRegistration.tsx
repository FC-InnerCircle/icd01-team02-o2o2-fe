/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const MenuRegistration = ({ ...rest }) => {
  return (
    <div css={[_container]} {...rest}>
      register
    </div>
  );
};

export default MenuRegistration;

const _container = css`
  padding: 40px;
  background-color: #f9f9f9;
  width: 100%;
`;
