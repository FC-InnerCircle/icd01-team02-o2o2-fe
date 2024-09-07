/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Delete, Edit } from "common/components/icons";
import useClickOutside from "common/hooks/useClickOutside";
import { HTMLAttributes, useState } from "react";
import colors from "styles/color";
import fonts from "styles/font";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  options: { name: string; price: number }[];
}

const MenuOption = ({ title, options, ...rest }: MenuProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { ref } = useClickOutside<HTMLDivElement>(() => setIsSelected(false));
  return (
    <div css={_option} ref={ref} {...rest} onClick={() => setIsSelected(true)}>
      <p css={_label}>{title}</p>
      <ul
        css={_optionItemWrap}
        style={{
          border: isSelected
            ? `2px solid ${colors.primary}`
            : "2px solid transparent",
        }}
      >
        {options.map(({ name, price }, idx) => (
          <li css={_optionItem} key={`${title}_option_${name}_${idx}`}>
            <p>{name}</p>
            <p>+ ₩{price}</p>
          </li>
        ))}
      </ul>
      <div
        css={css`
          position: absolute;
          left: calc(100% + 24px);
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 12px;
        `}
        style={{ display: isSelected ? "flex" : "none" }}
      >
        <button css={_edit}>
          <Edit width={24} height={24} fill="currentColor" />
        </button>
        <button css={_delete}>
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
