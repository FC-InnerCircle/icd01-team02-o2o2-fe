/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom";
import colors from "styles/color";
import fonts from "styles/font";
import type { MenuCardProps } from "./types";

const MenuCard = ({ menu, ...rest }: MenuCardProps) => {
  const { storeId } = useParams<{ storeId: string }>();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${storeId}/menu/${menu.id}`);
  };
  return (
    <div css={[_container]} {...rest} onClick={handleClick}>
      <div css={_imgWrap}>
        <img src={menu.images[0].imageUrl} />
      </div>
      <p css={fonts["16_800"]}>{menu.name}</p>
      <p css={fonts["16_600"]}>₩ {menu.price.toLocaleString()}</p>
    </div>
  );
};

export default MenuCard;

const _container = css`
  width: 195px;
  padding: 12px;
  background-color: ${colors.white};
  border-radius: 12px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const _imgWrap = css`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;
`;
