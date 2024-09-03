import { useEffect, useRef } from "react";

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
