/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { CheckCircle, XCircle } from 'common/components/icons';
import colors from 'styles/color';

import type { OptionMenuProps } from '../types';

const OptionMenu = ({
  successTxt = 'open',
  cancelTxt = 'close',
  open,
  setOpen,
  setIsSelected,
}: OptionMenuProps) => {
  const handleOpen = () => {
    setOpen(true);
    setIsSelected(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsSelected(true);
  };

  return (
    <div css={_container}>
      <div css={_icoTxt} onClick={handleOpen}>
        <CheckCircle />
        <span css={_txt(open)}>{successTxt}</span>
      </div>

      <div css={_icoTxt} onClick={handleClose}>
        <XCircle />
        <span css={_closeTxt(open)}>{cancelTxt}</span>
      </div>
    </div>
  );
};

export default OptionMenu;

const _container = css`
  display: flex;
  flex-direction: column;
  width: 212px;
  height: 120px;
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 24px;
  gap: 16px;

  position: absolute; /* position을 absolute로 설정 */
  left: 100%; /* 버튼의 오른쪽 외부에 배치 */
  bottom: 50%;
  z-index: 100; /* 다른 요소보다 위에 오도록 설정 */
  margin-inline-start: 16px; /* 왼쪽 여백 추가 */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
`;

const _icoTxt = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const _txt = (open: boolean) => css`
  color: ${open ? colors.primary : null};

  &:hover {
    cursor: pointer;
  }
`;

const _closeTxt = (open: boolean) => css`
  color: ${open ? null : colors.primary};

  &:hover {
    cursor: pointer;
  }
`;
