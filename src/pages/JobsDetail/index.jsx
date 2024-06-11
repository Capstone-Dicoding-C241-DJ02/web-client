import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import JobHeader from './JobHeader';
import parse from 'html-react-parser';
import api from '../../utils/api';

const JobsDetail = () => {
  const {id} = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await api().get(`/jobs/${id}`);

      const jobData = response.data.data.job;
      setJob(jobData);
    };

    fetchJob();
  }, [id]);

  return (
    <div className="w-full h-full space-y-4">
      <JobHeader
        imageUrl={job?.logo}
        jobTitle={job?.title}
        category={job?.city}
        businessSector={job?.business_sector}
        jobId={parseInt(id, 10)}
      />
      <div className="p-4 bg-white shadow-primary rounded max-h-[530px] overflow-y-auto">
        {parse(job?.desc ? job.desc : '')}
      </div>
    </div>
  );
};

export default JobsDetail;
