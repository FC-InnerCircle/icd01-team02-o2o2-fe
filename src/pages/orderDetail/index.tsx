/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useAuth from 'common/hooks/useAuth';
import { useParams } from "react-router-dom";

const OrderDetail = ({ ...rest }) => {
  const { AuthGuard } = useAuth(["owner", "admin"]);

  const { id } = useParams();
  console.log(id);
  return (
    <AuthGuard>
      <div css={[_container]} {...rest}></div>
    </AuthGuard>
  )
};

export default OrderDetail;

const _container = css``;
