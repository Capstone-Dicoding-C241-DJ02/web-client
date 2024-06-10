import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JobHeader from "./JobHeader";
import JobsDesc from "./JobDesc";
import { getJobById } from "../../utils/api.js";

const JobsDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await getJobById(id);
        console.log("API Response:", response.data);
        // Memastikan akses data dengan benar
        const jobData = response.data.data.job; // Perhatikan perbedaan di sini
        console.log("Job Data:", jobData);
        setJob(jobData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="w-full space-y-4">
      <JobHeader
        imageUrl={job.logo}
        jobTitle={job.title}
        category={job.city}
        businessSector={job.business_sector}
        jobId={parseInt(id, 10)}
      />
      <JobsDesc jobDesc={job.desc} />
    </div>
  );
};

export default JobsDetail;
