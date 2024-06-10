import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CompanyHeader from "./CompanyListHeader";
import { getJobs } from "../../utils/api.js";
import SearchBar from "../../components/SearchBar/SearchBar";
import AddIcon from "../../icons/IconAdd";
import BackButton from "../../components/ButtonNextBack/BackButton";
import NextButton from "../../components/ButtonNextBack/NextButton";

const JobList = () => {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const jobsPerPage = 10;
  const location = useLocation();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobs();
        console.log("API Response:", response.data);

        const jobs = response.data.data.jobs;
        console.log("Jobs Data:", jobs);

        setJobList(jobs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [location]);

  useEffect(() => {
    console.log("Updated jobList:", jobList);
  }, [jobList]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(jobList) || jobList.length === 0) {
    return <div>No jobs found.</div>;
  }

  const filteredJobs = jobList.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className="p-4 pr-7 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl mb-2 flex items-center">
          Daftar Lowongan
          <span className="ml-2">
            <Link to="/createjobs">
              <AddIcon />{" "}
            </Link>
          </span>
        </h1>
      </div>
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="max-h-[500px] mt-4 overflow-y-scroll pr-4">
        {currentJobs.map((job) => (
          <div key={job.id} className="mb-4">
            <Link to={`/jobs/${job.id}`}>
              <CompanyHeader
                imageUrl={job.logo}
                jobTitle={job.title}
                category={job.city}
                businessSector={job.business_sector}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4 relative">
        <BackButton onClick={handlePreviousPage} disabled={currentPage === 1} />
        <NextButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        />
        <p className="absolute right-0 mt-2">
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default JobList;
