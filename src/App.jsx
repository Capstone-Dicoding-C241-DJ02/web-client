import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import {lazy} from 'react';

const CandidateList = lazy(() => import('./pages/CandidateList'));
const Jobs = lazy(() => import('./pages/Jobs'));
const JobsDetail = lazy(() => import('./pages/JobsDetail'));

const App = () => {
  return (
    <Router>
      <div className="flex md:gap-7 p-2 w-full h-screen">
        <SideBar />
        <Routes>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/jobs/:id" element={<JobsDetail />}></Route>
          <Route path="/candidates" element={<CandidateList />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
