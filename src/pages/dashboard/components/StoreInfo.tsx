/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from 'common/components';

import { useNavigate } from 'react-router-dom';

import colors from 'styles/color';
import fonts from 'styles/font';
import CardList from './CardList';

import { StoreInfoProps } from '../types';
import { STORE_CARD_LIST_ARR } from '../constants';

import { isCurrentTimeWithinRange } from 'utils/isCurrentTimeWithinRange';
import OptionMenu from './OptionMenu';

import { useEffect, useRef, useState } from 'react'; // useState 추가

// StoreInfo 컴포넌트 내부 수정된 부분
const StoreInfo = ({
  openTime,
  closeTime,
  name,
  contactNumber,
}: StoreInfoProps) => {
  const [open, setOpen] = useState<boolean>(
    isCurrentTimeWithinRange(openTime, closeTime),
  ); // 현재 시간이 영업 시간인지 상태 관리
  const [isOptionMenuVisible, setOptionMenuVisible] = useState(false); // 모달 상태 관리
  const [isSelected, setIsSelected] = useState(false); // 옵션이 선택되었는지 상태 관리

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/store'); // 수정 페이지로 이동
  };

  const buttonRef = useRef<HTMLSpanElement>(null); // 버튼을 참조하기 위한 useRef

  useEffect(() => {
    if (isSelected) {
      setOptionMenuVisible(false); // 옵션이 선택되면 모달 닫기
      setIsSelected(false);
    }
  }, [isSelected]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) // 버튼이나 모달 바깥을 클릭한 경우
      ) {
        setOptionMenuVisible(false); // 모달 닫기
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [buttonRef]);

  const handleMouseEnter = () => setOptionMenuVisible(true);

  return (
    <div css={_container}>
      <div css={storeInfo}>
        <div>
          <div css={_mainTxt}>가게정보</div>
          <div>{name}</div>
          <div css={_contactNumber}>연락처 : {contactNumber}</div>
        </div>

        <span css={_buttonContainer} ref={buttonRef}>
          <Button css={btn(open)} onMouseEnter={handleMouseEnter}>
            {open ? 'Open' : 'Close'}
          </Button>
          {/* OptionMenu 모달 표시 제어 */}
          {isOptionMenuVisible && (
            <OptionMenu
              open={open}
              setOpen={setOpen}
              setIsSelected={setIsSelected}
            />
          )}
        </span>
      </div>

      <div css={_saleTime}>
        <span css={_saleTxt}>
          <span>{`${openTime} ~ ${closeTime}`}</span>
        </span>
        <span
          onClick={handleNavigate}
          css={_manageTxt}
        >{`Manage Store Info >`}</span>
      </div>

      <div>
        <CardList cardListArr={STORE_CARD_LIST_ARR} />
      </div>
    </div>
  );
};

export default StoreInfo;

const _container = css`
  display: flex;
  flex-direction: column;
  width: 717px;
  height: 384px;
  background-color: ${colors.white};
  padding: 2%;
  gap: 20px;
`;

const _mainTxt = [css``, fonts['16_600']];

const btn = (open: boolean) => css`
  background-color: ${open ? colors.green : colors.brightOrange};
`;

const storeInfo = css`
  display: flex;
  justify-content: space-between;
`;

const _saleTime = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.brightGreen};
  height: 18%;
  padding: 20px;
  border-radius: 12px;
`;

const _saleTxt = [
  css`
    display: flex;
    gap: 12px;
  `,
  fonts['14_600'],
];

const _manageTxt = [
  css`
    color: ${colors.primary};

    &:hover {
      cursor: pointer;
    }
  `,
  fonts['14_500'],
];

const _contactNumber = css`
  color: ${colors.textThird};
`;

const _buttonContainer = css`
  position: relative; /* 자식 요소가 절대 위치를 기준으로 배치될 수 있도록 함 */
  display: inline-block; /* 필요한 경우 inline-block으로 조정 */
`;
