import { useSlideController } from "./slide-controller";
import { Button, Page } from "@components";
import { LandingSlide } from "./slides/landing";
import { JoinSlide } from "./slides/join";
import { AnimatePresence } from "framer-motion";
import { NavBar } from "./navbar";

const slides = [LandingSlide, JoinSlide];

const Onboarding = () => {
  const controller = useSlideController(slides);

  return (
    <Page>
      <NavBar prevSlide={controller.prevSlide} show={controller.index > 0} />
      <AnimatePresence initial={false}>
        <controller.slide
          key={controller.index}
          nextSlide={controller.nextSlide}
        />
      </AnimatePresence>
    </Page>
  );
};

export { Onboarding };
