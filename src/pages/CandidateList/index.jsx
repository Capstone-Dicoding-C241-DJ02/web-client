import {Outlet, useNavigate, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import CompanyHeader from '../../components/CompanyHeader/CompanyHeader';
import Leaderboard from '../../components/Leaderboard';
import CandidateCard from '../../components/CandidateCard';

import useAxiosPrivate from '../../hooks/useAxiosPrivate.jsx';
import NoCandidate from './NoCandidate.jsx';

const CandidateList = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const {id, candidateId} = useParams();

  const [job, setJob] = useState({});
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const getCandidates = async () => {
      const {data} = await axiosPrivate.get(`/jobs/${id}/leaderboard`, {
        signal: controller.signal,
      });

      setJob(data.data.job);
      setCandidates(data.data.candidates);
    };

    getCandidates();
    return () => {
      controller.abort();
    };
  }, [id, axiosPrivate]);

  return (
    <div className="flex flex-col w-full gap-3 overflow-y-clip">
      <CompanyHeader
        imageUrl={job?.logo}
        jobTitle={job?.title}
        city={job?.city}
        category={job?.business_sector}
      />
      <div className="flex flex-col md:flex-row gap-3 h-full">
        <Leaderboard>
          <div className="md:h-[450px] md:overflow-y-auto space-y-2">
            {candidates.length ? (
              candidates.map((candidate, index) => (
                <CandidateCard
                  key={candidate.id}
                  img={candidate.passphoto}
                  number={index + 1}
                  name={candidate.fullname}
                  position={candidate.title}
                  isActive={
                    candidateId ? Number(candidateId) === candidate.id : false
                  }
                  onClick={() =>
                    navigate(`/jobs/${id}/leaderboard/${candidate.id}`)
                  }
                />
              ))
            ) : (
              <div className="h-full grid place-content-center">
                Belum Ada kandidat pelamar
              </div>
            )}
          </div>
        </Leaderboard>
        <div className="w-full">
          {candidateId ? <Outlet /> : <NoCandidate />}
        </div>
      </div>
    </div>
  );
};

export default CandidateList;
