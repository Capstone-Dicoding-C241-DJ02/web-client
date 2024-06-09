import { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import { EditorProvider } from "react-simple-wysiwyg"; // Import EditorProvider

const CandidateList = lazy(() => import("./pages/CandidateList"));
const Jobs = lazy(() => import("./pages/Jobs/JobList"));
const JobsDetail = lazy(() => import("./pages/JobsDetail/index.jsx"));
const RecruiterLogin = lazy(() =>
  import("./pages/RecuiterLogin/RecuiterLogin.jsx")
);
const CreateJobs = lazy(() =>
  import("./pages/RecruiterCreateJobs/RecruiterCreateJobs.jsx")
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="flex md:gap-7 p-2 w-full h-screen bg-white">
        {isLoggedIn && <SideBar setIsLoggedIn={setIsLoggedIn} />}
        <div
          className={`flex md:gap-7 p-2 w-full bg-white h-screen ${
            isLoggedIn ? "" : "justify-center items-center"
          }`}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <EditorProvider>
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route
                  path="/login"
                  element={<RecruiterLogin setIsLoggedIn={handleLogin} />}
                />
                <Route
                  path="/jobs"
                  element={isLoggedIn ? <Jobs /> : <Navigate to="/login" />}
                />
                <Route
                  path="/jobs/:id"
                  element={
                    isLoggedIn ? <JobsDetail /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/candidates/:jobId"
                  element={
                    isLoggedIn ? <CandidateList /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/createjobs"
                  element={
                    isLoggedIn ? <CreateJobs /> : <Navigate to="/login" />
                  }
                />
              </Routes>
            </EditorProvider>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
