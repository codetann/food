import {
  JoinPage,
  LandingPage,
  JoinDetailsPage,
  WaitingPage,
  CreatePage,
} from "@features";
import { Routes as Router, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Router location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/join/details" element={<JoinDetailsPage />} />
        <Route path="/waiting" element={<WaitingPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Router>
    </AnimatePresence>
  );
};

export { Routes };
