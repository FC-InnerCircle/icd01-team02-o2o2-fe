/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import colors from "styles/color";
import { OnOffButtonProps } from "./types";

const OnOffButton = ({ isOn, onToggle, ...rest }: OnOffButtonProps) => {
  return (
    <button
      css={[_container]}
      style={{
        backgroundColor: isOn ? colors.primary : colors.lightGray,
      }}
      onClick={onToggle}
      {...rest}
    >
      <span
        css={_round}
        style={{ left: isOn ? " calc(100% - 34px)" : "2px" }}
      />
    </button>
  );
};

export default OnOffButton;

const _container = css`
  width: 72px;
  height: 36px;
  border-radius: 18px;
  position: relative;
`;

const _round = css`
  position: absolute;
  top: 2px;
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: ${colors.white};
`;
