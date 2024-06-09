import PropTypes from "prop-types"; // Import prop-types

const BackButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mx-2 shadow-primary rounded py-2 px-4 ${
        disabled ? "bg-white" : "bg-primary-blue text-white"
      }`}
    >
      &lt; Back
    </button>
  );
};

// Prop types validation
BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default BackButton;
