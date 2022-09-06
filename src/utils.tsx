import { useEffect, useRef } from "react";

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function hit() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(hit, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
