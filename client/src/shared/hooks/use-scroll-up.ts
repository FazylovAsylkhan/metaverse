import { useEffect } from 'react';

let idTimeout: NodeJS.Timeout;

const scrollUp = (): void => {
  const currentCoordinateYOfScroll = document.documentElement.scrollTop;
  const top = Math.max(0, currentCoordinateYOfScroll);

  if (top > 0) {
    window.scrollBy(0, -100);
    idTimeout = setTimeout(() => scrollUp(), 20);
  } else clearTimeout(idTimeout);
};

export const useScrollUp = (): void => {
  useEffect(() => {
    scrollUp();
  }, []);
};
