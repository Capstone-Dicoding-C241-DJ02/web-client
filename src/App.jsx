import {useState, useEffect, lazy, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import SideBar from './components/SideBar/SideBar';
import {EditorProvider} from 'react-simple-wysiwyg';

const CandidateList = lazy(() => import('./pages/CandidateList'));
const Jobs = lazy(() => import('./pages/Jobs/JobList'));
const JobsDetail = lazy(() => import('./pages/JobsDetail/index.jsx'));
const RecruiterLogin = lazy(() =>
  import('./pages/RecuiterLogin/RecuiterLogin.jsx')
);
const CreateJobs = lazy(() =>
  import('./pages/RecruiterCreateJobs/RecruiterCreateJobs.jsx')
);

const CandidateDetail = lazy(() => import('./pages/CandidateDetail'));
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Main
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        handleLogin={handleLogin}
      />
    </Router>
  );
};

const Main = ({isLoggedIn, setIsLoggedIn, handleLogin}) => {
  const location = useLocation();

  return (
    <div className="flex md:gap-7 p-2 w-full h-screen overflow-clip">
      {isLoggedIn && location.pathname !== '/login' && (
        <SideBar setIsLoggedIn={setIsLoggedIn} />
      )}
      <div
        className={`flex md:gap-7 p-2 w-full h-[670px] ${
          isLoggedIn && location.pathname !== '/login'
            ? ''
            : 'justify-center items-center'
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
                element={isLoggedIn ? <JobsDetail /> : <Navigate to="/login" />}
              />
              <Route path="/jobs/:id/leaderboard" element={<CandidateList />}>
                <Route
                  path="/jobs/:id/leaderboard/:candidateId"
                  element={<CandidateDetail />}
                />
              </Route>
              <Route
                path="/createjobs"
                element={isLoggedIn ? <CreateJobs /> : <Navigate to="/login" />}
              />
            </Routes>
          </EditorProvider>
        </Suspense>
      </div>
    </div>
  );
};

Main.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default App;
