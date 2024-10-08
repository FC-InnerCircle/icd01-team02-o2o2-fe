/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import colors from "styles/color";
import type { OnOffButtonProps } from "./types";

const OnOffButton = ({ isOn, onToggle, ...rest }: OnOffButtonProps) => {
  return (
    <button
      css={_container}
      style={{
        backgroundColor: isOn ? colors.primary : colors.lightGray,
      }}
      onClick={onToggle}
      {...rest}
    >
      <span
        css={_round}
        style={{ left: isOn ? " calc(100% - 22px)" : "2px" }}
      />
    </button>
  );
};

export default OnOffButton;

const _container = css`
  width: 46px;
  height: 24px;
  border-radius: 18px;
  position: relative;
  transition: background-color 0.3s;
`;

const _round = css`
  position: absolute;
  top: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${colors.white};
  transition: left 0.3s;
`;
