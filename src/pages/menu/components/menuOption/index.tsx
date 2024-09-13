/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Delete, Edit } from "common/components/icons";
import useClickOutside from "common/hooks/useClickOutside";
import { useState } from "react";
import colors from "styles/color";
import fonts from "styles/font";
import type { MenuOptionProps } from "./index.types";

const MenuOption = ({ option, onEdit, onDelete, ...rest }: MenuOptionProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { ref } = useClickOutside<HTMLDivElement>(() => setIsSelected(false));
  const selectOptionStatus = `${option.isRequired ? "필수" : "선택"} - ${option.isMultiple ? "다중 선택" : "단일 선택"}`;
  return (
    <div css={_option} ref={ref} {...rest} onClick={() => setIsSelected(true)}>
      <p css={_label}>
        {option.title} ( {selectOptionStatus} )
      </p>
      <ul
        css={_optionItemWrap}
        style={{
          border: isSelected
            ? `2px solid ${colors.primary}`
            : "2px solid transparent",
        }}
      >
        {option.details.map(({ name, price }, idx) => (
          <li css={_optionItem} key={`${option.title}_option_${name}_${idx}`}>
            <p>{name}</p>
            <p>+ ₩{price}</p>
          </li>
        ))}
      </ul>
      <div css={_buttonWrap} style={{ display: isSelected ? "flex" : "none" }}>
        <button css={_edit} onClick={onEdit}>
          <Edit width={24} height={24} fill="currentColor" />
        </button>
        <button css={_delete} onClick={onDelete}>
          <Delete width={22} height={22} stroke="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default MenuOption;

const _optionItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0px 24px;
  border-bottom: 1px solid ${colors.lightGray};
  cursor: pointer;
`;

const _option = css`
  margin-top: 16px;
  margin-bottom: 32px;
  position: relative;
`;

const _optionItemWrap = css`
  margin-top: 8px;
  width: 100%;
  border-radius: 10px;
  background-color: ${colors.white};
  height: fit-content;
  overflow: hidden;
  li:last-child {
    border-bottom: none;
  }
`;

const _label = [
  css`
    color: ${colors.textThird};
  `,
  fonts["16_600"],
];
const _buttonWrap = css`
  position: absolute;
  left: calc(100% + 24px);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 12px;
`;

const _button = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  transition: opacity 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

const _edit = [
  _button,
  css`
    background-color: ${colors.primary};
  `,
];

const _delete = [
  _button,
  css`
    background-color: ${colors.warning};
  `,
];
