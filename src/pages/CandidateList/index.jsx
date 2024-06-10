import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CompanyHeader from "../../components/CompanyHeader/CompanyHeader";
import Leaderboard from "../../components/Leaderboard";
import logo from "../../assets/logo-company.png";
import CandidateHeader from "../../components/CandidateHeader";
import CvButtons from "../../components/CvButtons/CvButtons";
import CandidateCard from "../../components/CandidateCard";
import Tabs from "../../components/Tabs";
import CandidateMissing from "../../icons/IconMissingCandidate.jsx";
// import cvAts from "../../assets/CV-ATS.pdf";
import {
  getJobById,
  getCandidatesByJobId,
  getCandidateById,
  updateSummarizedCV,
} from "../../utils/api.js";

const CandidateList = () => {
  const { jobId } = useParams();
  const [activeTab, setActiveTab] = useState("summarize");
  const [candidates, setCandidates] = useState([]);
  const [job, setJob] = useState(null);
  const [activeCandidate, setActiveCandidate] = useState(null);
  const [summarizedCv, setSummarizedCv] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const jobResponse = await getJobById(jobId, token);
        setJob(jobResponse.data.data.job);

        const candidatesResponse = await getCandidatesByJobId(jobId, token);
        const sortedCandidates = candidatesResponse.data.data.candidates.sort(
          (a, b) => b.match_percentage - a.match_percentage
        );

        setCandidates(sortedCandidates);
        if (sortedCandidates.length > 0) {
          fetchCandidateDetails(sortedCandidates[0].id, token);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [jobId]);

  const fetchCandidateDetails = async (candidateId, token) => {
    try {
      const candidateResponse = await getCandidateById(candidateId, token);
      setActiveCandidate(candidateResponse.data.data.candidate);
    } catch (error) {
      console.error("Error fetching candidate details:", error);
    }
  };

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };

  const handleCardClick = (candidateId) => {
    console.log(`Candidate ${candidateId} clicked`);
    const token = localStorage.getItem("accessToken");
    fetchCandidateDetails(candidateId, token);
  };

  const handleSummarizedCvChange = (e) => {
    setSummarizedCv(e.target.value);
  };

  const handleSummarizedCvSubmit = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const cvName = activeCandidate ? activeCandidate.title : "";
      await updateSummarizedCV(cvName, summarizedCv, token);
      alert("Successfully added summarized CV");
    } catch (error) {
      console.error("Error updating summarized CV:", error);
    }
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full gap-3 overflow-y-clip">
      <CompanyHeader
        imageUrl={job.logo}
        jobTitle={job.title}
        city={job.city}
        category={job.business_sector}
      />
      <div className="flex flex-col md:flex-row gap-3 h-full">
        <Leaderboard>
          <div className="md:h-[485px] md:overflow-y-auto space-y-2">
            {candidates.length > 0 ? (
              candidates.map((candidate, index) => (
                <CandidateCard
                  key={candidate.id}
                  img={candidate.passphoto}
                  number={index + 1}
                  name={candidate.fullname}
                  position={candidate.title}
                  isActive={
                    activeCandidate && candidate.id === activeCandidate.id
                  } // Set isActive based on activeCandidate
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
        <div
          className={`space-y-3 w-full ${
            activeCandidate ? "overflow-y-scroll max-h-[600px]" : ""
          }`}
        >
          {activeCandidate ? (
            <>
              <CandidateHeader
                img={activeCandidate.passphoto || logo}
                name={activeCandidate.fullname}
                percentage={activeCandidate.match_percentage}
                position={activeCandidate.title}
              />

              <CvButtons onChangeTab={handleChangeTab} />

              <Tabs
                tab={activeTab}
                originalCv={activeCandidate.original_cv_url}
                cvSummary={activeCandidate.cv_summary}
              />

              <div className="mt-4">
                <textarea
                  value={summarizedCv}
                  onChange={handleSummarizedCvChange}
                  placeholder="Enter summarized CV"
                  className="w-full p-2 border rounded"
                />
                <button
                  onClick={handleSummarizedCvSubmit}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Submit Summarized CV
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center text-center text-gray-500 bg-white shadow h-[550px]">
              <CandidateMissing />
              <p>Belum ada kandidat yang dipilih</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandidateList;
