import { Routes, Route } from "react-router-dom";
import { JoinPage } from "./join/join";
import { JoinDetailsPage } from "./join/join-details";
import { WaitingPage } from "./waiting/waiting";
import { CreatePage } from "./create/create";
import { LandingPage } from "./join/landing";

const OnboardingRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/join" element={<JoinPage />} />
    <Route path="/join/details" element={<JoinDetailsPage />} />
    <Route path="/waiting" element={<WaitingPage />} />
    <Route path="/create" element={<CreatePage />} />
  </Routes>
);

export { OnboardingRoutes };
