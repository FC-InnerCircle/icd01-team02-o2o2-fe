/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useAuth from 'common/hooks/useAuth';

const Order = ({ ...rest }) => {
  const { AuthGuard } = useAuth(["owner", "admin"]);
  return (
    <AuthGuard>
      <div css={[_container]} {...rest}></div>
    </AuthGuard>
  )
};

export default Order;

const _container = css``;
