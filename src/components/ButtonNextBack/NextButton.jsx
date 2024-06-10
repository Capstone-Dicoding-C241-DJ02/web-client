import PropTypes from "prop-types"; // Import prop-types

const NextButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mx-2 shadow-primary rounded py-2 px-4 ${
        disabled ? "bg-white" : "bg-primary-blue text-white"
      }`}
    >
      Next &gt;
    </button>
  );
};

// Prop types validation
NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default NextButton;
