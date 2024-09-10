/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useAuth from 'common/hooks/useAuth';

const Store = ({ ...rest }) => {
  const { AuthGuard } = useAuth(["admin"]);

  return (
    <AuthGuard>
      <div css={[_container]} {...rest}></div>
    </AuthGuard>
  )
};

export default Store;

const _container = css``;
