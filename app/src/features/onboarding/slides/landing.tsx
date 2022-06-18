import { Button } from "@components";
import { Slide } from "./slide";

interface LandingSlideProps {
  nextSlide: () => void;
}

const LandingSlide = ({ nextSlide }: LandingSlideProps) => {
  return (
    <Slide>
      <Button w="20rem" onClick={nextSlide}>
        Join Friends
      </Button>
      <Button w="20rem" variant="secondary">
        Create Group
      </Button>
    </Slide>
  );
};

export { LandingSlide };
