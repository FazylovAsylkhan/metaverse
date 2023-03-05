import { useEffect } from 'react';

export const useBlockingScreen = (): void => {
  const block = (): void => {
    document.body.style.overflow = 'hidden';
  };
  const removeBlocking = (): void => {
    document.body.style.overflow = 'auto';
  };

  useEffect((): (() => void) => {
    block();

    return removeBlocking;
  }, []);
};
