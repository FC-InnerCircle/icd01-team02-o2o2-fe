/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";

const OrderDetail = ({ ...rest }) => {
  const { id } = useParams();
  console.log(id);
  return <div css={[_container]} {...rest}></div>;
};

export default OrderDetail;

const _container = css``;
