import JobHeader from './JobHeader';
import img from '../../assets/logo-company.png';
import JobsDesc from './JobDesc';

const JobsDetail = () => {
  return (
    <div className="w-full space-y-4">
      <JobHeader
        imageUrl={img}
        category="Fintech"
        jobTitle="ML Engineer"
        salary={2000000}
      />
      <JobsDesc />
    </div>
  );
};

export default JobsDetail;
