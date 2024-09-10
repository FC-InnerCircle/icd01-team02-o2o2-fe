/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useAuth from 'common/hooks/useAuth';

const Menu = ({ ...rest }) => {
  const { AuthGuard } = useAuth(["owner", "admin"]);

  return (
    <AuthGuard>
      <div css={[_container]} {...rest}></div>
    </AuthGuard>
  );
};

export default Menu;

const _container = css``;
