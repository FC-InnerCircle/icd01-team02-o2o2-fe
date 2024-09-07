import { useEffect, useRef } from "react";

/**
 * 지정된 요소 밖에서 클릭 또는 터치 이벤트가 발생하면 콜백을 실행하는 커스텀 훅입니다.
 *
 * @template T - ref가 적용될 HTMLElement의 타입입니다.
 * @param {() => void} onClickOutside - 참조된 요소 밖에서 클릭 또는 터치 이벤트가 발생할 때 실행되는 콜백 함수입니다.
 * @returns {{ ref: React.RefObject<T> }} `ref`를 포함한 객체를 반환하며, 이 ref는 타겟 요소에 연결되어야 합니다.
 *
 * @example
 * const Component = () => {
 *   const handleClickOutside = () => {
 *     console.log('요소 밖을 클릭했습니다.');
 *   };
 *   const { ref } = useClickOutside(handleClickOutside);
 *
 *   return <div ref={ref}>내용</div>;
 * };
 */
const useClickOutside = <T extends HTMLElement>(onClickOutside: () => void) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (ref?.current && e.target && !ref.current.contains(e.target as Node))
        onClickOutside();
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [onClickOutside, ref]);

  return { ref };
};

export default useClickOutside;
