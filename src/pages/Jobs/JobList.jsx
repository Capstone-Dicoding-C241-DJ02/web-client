import { Link } from "react-router-dom";
import CompanyHeader from "./CompanyListHeader";
import companyLogo from "../../assets/logo-company.png";

// Example job data
const jobList = [
  {
    id: 1,
    imageUrl: companyLogo,
    jobTitle: "ML Engineer",
    salary: "1.000 - 100.000",
    category: "Jakarta - onsite",
  },
  {
    id: 2,
    imageUrl: companyLogo,
    jobTitle: "ML Engineer",
    salary: "1.000 - 100.000",
    category: "Jakarta - onsite",
  },
  {
    id: 3,
    imageUrl: companyLogo,
    jobTitle: "ML Engineer",
    salary: "1.000 - 100.000",
    category: "Jakarta - onsite",
  },
  {
    id: 4,
    imageUrl: companyLogo,
    jobTitle: "ML Engineer",
    salary: "1.000 - 100.000",
    category: "Jakarta - onsite",
  },
  {
    id: 5,
    imageUrl: companyLogo,
    jobTitle: "ML Engineer",
    salary: "1.000 - 100.000",
    category: "Jakarta - onsite",
  },
];

const JobList = () => {
  return (
    <div className="p-4 pr-7">
      <h1 className="text-2xl mb-4">Daftar Lowongan</h1>
      {jobList.map((job) => (
        <div key={job.id} className="mb-4">
          <Link to={`/jobs/${job.id}`}>
            <CompanyHeader
              imageUrl={job.imageUrl}
              jobTitle={job.jobTitle}
              salary={job.salary}
              category={job.category}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobList;
