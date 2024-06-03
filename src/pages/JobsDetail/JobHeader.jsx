import PropTypes from "prop-types";
import JobHeaderButton from "./JobHeaderButton";

const JobHeader = ({ imageUrl, jobTitle, businessSector, category, jobId }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-primary rounded w-full max-w-full px-4">
      <div className="flex gap-1">
        <div className="flex-shrink-0 space-y-2">
          <img
            src={imageUrl}
            alt="Company Logo"
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-heading2 font-medium">{jobTitle}</h2>
          <p className="text-black text-[.8rem]">{category}</p>
          <p className="text-black text-[.8rem]">{businessSector}</p>
        </div>
      </div>
      <div>
        <JobHeaderButton jobId={jobId} />
      </div>
    </div>
  );
};

JobHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  businessSector: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  jobId: PropTypes.number.isRequired,
};

export default JobHeader;
