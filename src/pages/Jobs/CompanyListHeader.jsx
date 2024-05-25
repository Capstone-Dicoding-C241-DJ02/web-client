import PropTypes from "prop-types";

const CompanyListHeader = ({ imageUrl, jobTitle, salary, category }) => {
  return (
    <div className="flex items-center p-4 bg-white shadow-primary rounded-lg w-full max-w-full px-4">
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt="Company Logo"
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div className="ml-4">
        <h2 className="text-heading2 font-medium">{jobTitle}</h2>
        <p className="text-black">Gaji Rp. {salary}</p>
        <p className="text-black">{category}</p>
      </div>
    </div>
  );
};

CompanyListHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CompanyListHeader;
