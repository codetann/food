import { OnboardingRoutes } from "@features";
import { Routes as Router, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Router location={location} key={location.pathname}>
        <Route path="/*" element={<OnboardingRoutes />} />
      </Router>
    </AnimatePresence>
  );
};

export { Routes };
