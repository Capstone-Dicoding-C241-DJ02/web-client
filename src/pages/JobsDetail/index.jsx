import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import JobHeader from './JobHeader';
import parse from 'html-react-parser';

import {getJobById} from '../../utils/api.js';

const JobsDetail = () => {
  const {id} = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await getJobById(id);
      console.log('API Response:', response.data);
      // Memastikan akses data dengan benar
      const jobData = response.data.data.job; // Perhatikan perbedaan di sini
      console.log('Job Data:', jobData);
      setJob(jobData);
    };

    fetchJob();
  }, [id]);

  return (
    <div className="w-full space-y-4">
      <JobHeader
        imageUrl={job?.logo}
        jobTitle={job?.title}
        category={job?.city}
        businessSector={job?.business_sector}
        jobId={parseInt(id, 10)}
      />
      <div className="p-4 bg-white shadow-primary rounded h-full">
        {parse(job?.desc ? job.desc : '')}
      </div>
    </div>
  );
};

export default JobsDetail;
