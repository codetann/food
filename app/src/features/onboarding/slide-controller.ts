import { useState } from "react";

const useSlideController = (slides: any[]) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex(index + 1);
  const prevSlide = () => setIndex(index - 1);

  const slide = slides[index];

  return {
    slide,
    nextSlide,
    prevSlide,
    index,
  };
};

export { useSlideController };
