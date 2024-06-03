import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CompanyHeader from "../../components/CompanyHeader/CompanyHeader";
import Leaderboard from "../../components/Leaderboard";
import logo from "../../assets/logo-company.png";
import CandidateHeader from "../../components/CandidateHeader";
import CvButtons from "../../components/CvButtons/CvButtons";
import CandidateCard from "../../components/CandidateCard";
import Tabs from "../../components/Tabs";
import cvAts from "../../assets/CV-ATS.pdf";
import { getJobById, getCandidatesByJobId } from "../../utils/api.js";

const CandidateList = () => {
  const { jobId } = useParams();
  const [activeTab, setActiveTab] = useState("summarize");
  const [candidates, setCandidates] = useState([]);
  const [job, setJob] = useState(null);
  const [activeCandidateId, setActiveCandidateId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobResponse = await getJobById(jobId);
        setJob(jobResponse.data);

        const candidatesResponse = await getCandidatesByJobId(jobId);
        setCandidates(candidatesResponse.data);
        // Set the first candidate as active by default
        if (candidatesResponse.data.length > 0) {
          setActiveCandidateId(candidatesResponse.data[0].id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [jobId]);

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };

  const handleCardClick = (candidateId) => {
    console.log(`Candidate ${candidateId} clicked`);

    setActiveCandidateId(candidateId);
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full gap-3 overflow-y-clip">
      <CompanyHeader
        imageUrl={job.Logo}
        jobTitle={job.title}
        salary="Rp. 20.000.000"
        category={job.business_sector}
      />
      <div className="flex flex-col md:flex-row gap-3 h-full">
        <Leaderboard>
          <div className="md:h-[485px] md:overflow-y-auto space-y-2">
            {candidates.length > 0 ? (
              candidates.map((candidate, index) => (
                <CandidateCard
                  key={candidate.id}
                  img={logo}
                  number={index + 1}
                  name={candidate.fullname}
                  position={candidate.title}
                  isActive={candidate.id === activeCandidateId} // Set isActive based on activeCandidateId
                  onClick={() => handleCardClick(candidate.id)}
                />
              ))
            ) : (
              <div className="text-center text-gray-500">
                Belum ada kandidat
              </div>
            )}
          </div>
        </Leaderboard>
        <div className="space-y-3 w-full overflow-y-scroll max-h-[600px]">
          <CandidateHeader
            img={logo}
            name="Silo"
            percentage={90}
            position="ML Engineer"
            yearExperience={2}
          />

          <CvButtons onChangeTab={handleChangeTab} />

          <Tabs tab={activeTab} originalCv={cvAts} />
        </div>
      </div>
    </div>
  );
};

export default CandidateList;
