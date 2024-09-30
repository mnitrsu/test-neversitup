import { MutableRefObject, useEffect } from "react";

export const useClickOutside = (ref: MutableRefObject<HTMLDivElement | null>, onClickOutside: () => void) => {
  useEffect(() => {
    const handleOnClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleOnClick);
    return () => {
      document.removeEventListener("mousedown", handleOnClick);
    };
  }, [ref, onClickOutside]);
};
