import { Route, Routes } from "react-router-dom";
import { JoinPage, WaitingPage, CreatePage, DetailsPage } from "../pages";

function OnboardingRoutes() {
  return (
    <Routes>
      <Route path="/join" element={<JoinPage />} />
      <Route path="/join/details" element={<DetailsPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/waiting" element={<WaitingPage />} />
    </Routes>
  );
}

export default OnboardingRoutes;
