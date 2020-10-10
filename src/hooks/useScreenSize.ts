import useWindowSize from './useWindowSize';

export default function useScreenSize() {
  const {
    width: screenWidth = 1980,
    height = 1080,
  } = useWindowSize();
  const isMobile = screenWidth <= 600;

  return {
    width: isMobile ? screenWidth : 500,
    height,
  };
}
