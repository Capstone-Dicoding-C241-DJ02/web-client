import SideBar from './components/SideBar/SideBar';
import CompanyHeader from './components/CompanyHeader/CompanyHeader';
import Leaderboard from './components/Leaderboard';
import logo from './assets/logo-company.png';
import CandidateHeader from './components/CandidateHeader';
import CvButtons from './components/CvButtons/CvButtons';
import CandidateCard from './components/CandidateCard';
import cvAts from './assets/CV-ATS.pdf';

function App() {
  return (
    <div className="flex md:gap-7 p-2 w-full h-screen">
      <SideBar />

      <div className="flex flex-col gap-3 w-full">
        <CompanyHeader
          imageUrl={logo}
          jobTitle="ML Engineer"
          salary="Rp. 20.000.000"
          category="Fintech"
        />
        <div className="flex flex-col md:flex-row gap-3 h-full">
          <Leaderboard>
            <CandidateCard
              img={logo}
              number={1}
              name={'Silo'}
              position={'ML Engineer'}
              isActive={true}
            />
            <CandidateCard
              img={logo}
              number={2}
              name={'Silo'}
              position={'ML Engineer'}
            />
            <CandidateCard
              img={logo}
              number={3}
              name={'Silo'}
              position={'ML Engineer'}
            />
          </Leaderboard>
          <div className="space-y-3 w-full">
            <CandidateHeader
              img={logo}
              name="Silo"
              percentage={90}
              position="Ml Engineer"
              yearExperience={2}
            />

            <CvButtons />

            <div className="rounded bg-white shadow-primary w-full h-full">
              <iframe src={cvAts} className="w-full h-full"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
