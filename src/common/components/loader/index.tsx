/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import colors from 'styles/color';
import fonts from 'styles/font';

interface ErrorOrLoaderMsgProps {
  type: 'loading' | 'error';
}

const ErrorOrLoaderMsg = ({ type }: ErrorOrLoaderMsgProps) => {
  return (
    <div css={_container}>
      {type === 'loading' ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Error />
          <div css={[_errMsg]}>
            에러가 발생했어요. 🥲 잠시후 다시 시도해주세요
          </div>
        </>
      )}
    </div>
  );
};

export const Loading = () => {
  return (
    <svg
      css={_iconLoading}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style type="text/css"></style>
      <g id="grid_system" />
      <g id="_icons">
        <g>
          <path d="M12,2c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1s1-0.4,1-1V3C13,2.4,12.6,2,12,2z" />
          <path d="M14.5,7.7c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.7-0.2,0.9-0.5l1.5-2.6c0.3-0.5,0.1-1.1-0.4-1.4c-0.5-0.3-1.1-0.1-1.4,0.4    l-1.5,2.6C13.9,6.8,14,7.4,14.5,7.7z" />
          <path d="M16.3,9.5c0.2,0.3,0.5,0.5,0.9,0.5c0.2,0,0.3,0,0.5-0.1l2.6-1.5c0.5-0.3,0.6-0.9,0.4-1.4c-0.3-0.5-0.9-0.6-1.4-0.4    l-2.6,1.5C16.2,8.4,16.1,9,16.3,9.5z" />
          <path d="M21,11l-3,0c0,0,0,0,0,0c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1l3,0c0,0,0,0,0,0c0.6,0,1-0.4,1-1C22,11.5,21.6,11,21,11z" />
          <path d="M20.3,15.7l-2.6-1.5c-0.5-0.3-1.1-0.1-1.4,0.4c-0.3,0.5-0.1,1.1,0.4,1.4l2.6,1.5c0.2,0.1,0.3,0.1,0.5,0.1    c0.3,0,0.7-0.2,0.9-0.5C20.9,16.5,20.8,15.9,20.3,15.7z" />
          <path d="M15.8,16.7c-0.3-0.5-0.9-0.6-1.4-0.4c-0.5,0.3-0.6,0.9-0.4,1.4l1.5,2.6c0.2,0.3,0.5,0.5,0.9,0.5c0.2,0,0.3,0,0.5-0.1    c0.5-0.3,0.6-0.9,0.4-1.4L15.8,16.7z" />
          <path d="M12,17c-0.5,0-1,0.4-1,1l0,3c0,0.6,0.4,1,1,1c0,0,0,0,0,0c0.5,0,1-0.4,1-1l0-3C13,17.5,12.5,17,12,17z" />
          <path d="M9.5,16.3C9,16,8.4,16.2,8.1,16.7l-1.5,2.6c-0.3,0.5-0.1,1.1,0.4,1.4c0.2,0.1,0.3,0.1,0.5,0.1c0.3,0,0.7-0.2,0.9-0.5    l1.5-2.6C10.1,17.2,10,16.6,9.5,16.3z" />
          <path d="M7.7,14.5c-0.3-0.5-0.9-0.6-1.4-0.4l-2.6,1.5c-0.5,0.3-0.6,0.9-0.4,1.4c0.2,0.3,0.5,0.5,0.9,0.5c0.2,0,0.3,0,0.5-0.1    l2.6-1.5C7.8,15.6,7.9,15,7.7,14.5z" />
          <path d="M6,13c0.5,0,1-0.4,1-1c0-0.6-0.4-1-1-1l-3,0c0,0,0,0,0,0c-0.5,0-1,0.4-1,1c0,0.6,0.4,1,1,1L6,13C6,13,6,13,6,13z" />
          <path d="M3.7,8.3l2.6,1.5C6.5,9.9,6.7,10,6.8,10c0.3,0,0.7-0.2,0.9-0.5C8,9,7.8,8.4,7.3,8.1L4.7,6.6C4.3,6.3,3.7,6.5,3.4,6.9    C3.1,7.4,3.3,8,3.7,8.3z" />
        </g>
      </g>
    </svg>
  );
};

export const Error = () => {
  return (
    <svg
      css={_iconErr}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9.5 15.05a3.5 3.5 0 0 1 5 0" />
    </svg>
  );
};

export default ErrorOrLoaderMsg;

const _container = css`
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// 회전 애니메이션 정의
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const _iconLoading = css`
  width: 48px;
  height: 48px;
  fill: ${colors.primary};
  animation: ${rotate} 2s linear infinite;
`;

const _errMsg = [
  css`
    text-align: center;
    font-size: 1rem;
  `,
  fonts['16_600'],
];

const _iconErr = css`
  width: 32px;
  height: 32px;
`;
