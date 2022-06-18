import { useSlideController } from "./slide-controller";
import { Button, Page } from "@components";
import { LandingSlide } from "./slides/landing";
import { JoinSlide } from "./slides/join";
import { AnimatePresence } from "framer-motion";

const slides = [LandingSlide, JoinSlide];

const Onboarding = () => {
  const controller = useSlideController(slides);

  return (
    <Page>
      <AnimatePresence initial={false}>
        {controller.index > 0 && (
          <Button onClick={controller.prevSlide}>Back</Button>
        )}
        <controller.slide
          key={controller.index}
          nextSlide={controller.nextSlide}
        />
      </AnimatePresence>
    </Page>
  );
};

export { Onboarding };
