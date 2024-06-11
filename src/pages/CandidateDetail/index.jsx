import CandidateHeader from '../../components/CandidateHeader';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import Tabs from '../../components/Tabs';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import CvButtons from '../../components/CvButtons/CvButtons';

const CandidateDetail = () => {
  const {candidateId} = useParams();
  const axiosPrivate = useAxiosPrivate();
  const [candidate, setCandidate] = useState({});
  const [tab, setTab] = useState('summarized');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const getCandidateDetail = async () => {
      try {
        const {data} = await axiosPrivate.get(`/candidates/${candidateId}`, {
          signal: controller.signal,
        });
        setCandidate(data.data.candidate);
      } catch (err) {
        if (err.response.status === 403) {
          navigate('/login', {state: {from: location}, replace: true});
        }
      }
    };

    getCandidateDetail();
    return () => {
      controller.abort();
    };
  }, [candidateId, axiosPrivate, navigate, location]);

  return (
    <div className="flex flex-col gap-5 w-full">
      <CandidateHeader
        img={candidate?.passphoto}
        name={candidate?.fullname}
        percentage={candidate?.match_percentage}
        position={candidate?.title}
      />
      <CvButtons onChangeTab={(activeTab) => setTab(activeTab)} />
      <Tabs
        tab={tab}
        originalCv={candidate?.original_cv_url}
        candidate={candidate}
      />
    </div>
  );
};

export default CandidateDetail;
