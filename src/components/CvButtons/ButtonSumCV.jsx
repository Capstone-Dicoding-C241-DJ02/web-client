import PropTypes from "prop-types";

const ButtonSumCV = ({ isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md shadow-primary ${
        isActive ? "bg-primary-blue text-white" : "bg-white text-black"
      }`}
      onClick={onClick}
    >
      Summarized CV
    </button>
  );
};

ButtonSumCV.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonSumCV;
