import { useEffect, useRef } from 'react';

const useDebounce = (func: any, delay: any) => {
  const timeoutRef = useRef(null as any);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (...args: any) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default useDebounce;
