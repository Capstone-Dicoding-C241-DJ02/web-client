import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import { lazy, Suspense } from "react";

const CandidateList = lazy(() => import("./pages/CandidateList"));
const Jobs = lazy(() => import("./pages/Jobs/JobList"));
const JobsDetail = lazy(() => import("./pages/JobsDetail/index.jsx"));

const App = () => {
  return (
    <Router>
      <div className="flex md:gap-7 p-2 w-full h-screen">
        <SideBar />
        <div className="flex md:gap-7 p-2 w-full h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:id" element={<JobsDetail />} />
              <Route path="/candidates/:jobId" element={<CandidateList />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
