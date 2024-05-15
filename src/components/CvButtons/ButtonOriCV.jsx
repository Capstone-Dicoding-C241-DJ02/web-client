import PropTypes from "prop-types";

const ButtonOriCV = ({ isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md shadow-primary ${
        isActive ? "bg-primary-blue text-white" : "bg-white text-black"
      }`}
      onClick={onClick}
    >
      Cover Letter & CV
    </button>
  );
};

ButtonOriCV.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonOriCV;
