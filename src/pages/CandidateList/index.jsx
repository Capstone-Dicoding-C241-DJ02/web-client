import CompanyHeader from '../../components/CompanyHeader/CompanyHeader';
import Leaderboard from '../../components/Leaderboard';
import logo from '../../assets/logo-company.png';
import CandidateHeader from '../../components/CandidateHeader';
import CvButtons from '../../components/CvButtons/CvButtons';
import CandidateCard from '../../components/CandidateCard';
import cvAts from '../../assets/CV-ATS.pdf';
import Tabs from '../../components/Tabs';
import {useState} from 'react';

function CandidateList() {
  const [activeTab, setActiveTab] = useState('summarize');

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col w-full md:gap-3 overflow-y-clip">
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
          <CandidateCard
            img={logo}
            number={4}
            name={'Silo'}
            position={'ML Engineer'}
          />
        </Leaderboard>
        <div className="space-y-3 w-full overflow-y-scroll max-h-[600px]">
          <CandidateHeader
            img={logo}
            name="Silo"
            percentage={90}
            position="Ml Engineer"
            yearExperience={2}
          />

          <CvButtons onChangeTab={handleChangeTab} />

          <Tabs tab={activeTab} originalCv={cvAts} />
        </div>
      </div>
    </div>
  );
}

export default CandidateList;
