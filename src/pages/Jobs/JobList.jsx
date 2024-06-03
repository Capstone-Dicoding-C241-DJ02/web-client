import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CompanyHeader from "./CompanyListHeader";
import { getJobs } from "../../utils/api.js";

const JobList = () => {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobs();
        setJobList(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(jobList)) {
    return <div>No jobs found.</div>;
  }

  return (
    <div className="p-4 pr-7 w-full">
      <h1 className="text-2xl mb-4">Daftar Lowongan</h1>
      <div className="max-h-[590px] overflow-y-scroll pr-4">
        {jobList.map((job) => (
          <div key={job.id} className="mb-4">
            <Link to={`/jobs/${job.id}`}>
              <CompanyHeader
                imageUrl={job.Logo}
                jobTitle={job.title}
                category={job.city}
                businessSector={job.business_sector}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
