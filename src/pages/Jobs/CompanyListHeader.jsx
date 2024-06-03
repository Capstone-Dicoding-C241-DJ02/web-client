import PropTypes from "prop-types";

const CompanyListHeader = ({
  imageUrl,
  jobTitle,
  category,
  businessSector,
}) => {
  return (
    <div className="flex items-center p-3 bg-white shadow-primary rounded-lg w-full max-w-full px-8">
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt="Company Logo"
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div className="ml-8">
        <h2 className="text-heading2 font-medium">{jobTitle}</h2>
        <p className="text-black">{category}</p>
        <p className="text-black">{businessSector}</p>
      </div>
    </div>
  );
};

CompanyListHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  businessSector: PropTypes.string.isRequired,
};

export default CompanyListHeader;
