import PropTypes from "prop-types";

const CompanyHeader = ({ imageUrl, jobTitle, salary, category }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-lg rounded-lg w-full max-w-full mx-auto my-4 px-4">
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt="Company Logo"
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div className="ml-4">
        <h2 className="text-xl font-semibold">{jobTitle}</h2>
        <p className="text-gray-500">Gaji Rp. {salary}</p>
        <p className="text-gray-400">{category}</p>
      </div>
    </div>
  );
};

CompanyHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CompanyHeader;
