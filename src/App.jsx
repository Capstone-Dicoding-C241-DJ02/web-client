import {lazy, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Jobs = lazy(() => import('./pages/Jobs'));
const CandidateList = lazy(() => import('./pages/CandidateList'));
const JobList = lazy(() => import('./pages/JobList/JobList.jsx'));
const JobsDetail = lazy(() => import('./pages/JobsDetail'));
const RecruiterLogin = lazy(() =>
  import('./pages/RecuiterLogin/RecuiterLogin.jsx')
);
const CreateJobs = lazy(() =>
  import('./pages/RecruiterCreateJobs/RecruiterCreateJobs.jsx')
);
const CandidateDetail = lazy(() => import('./pages/CandidateDetail'));

const App = () => {
  return (
    <Router>
      <ToastContainer position="top-right" />
      <Main />
    </Router>
  );
};

const Main = () => {
  return (
    <Suspense
      fallback={
        <div className="grid place-content-center w-full h-full">Memuat...</div>
      }
    >
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<RecruiterLogin />} />

        <Route path="/jobs" element={<Jobs />}>
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobsDetail />} />

          <Route path="/jobs/:id/leaderboard" element={<CandidateList />}>
            <Route
              path="/jobs/:id/leaderboard/:candidateId"
              element={<CandidateDetail />}
            />
          </Route>
          <Route path="/jobs/create" element={<CreateJobs />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
