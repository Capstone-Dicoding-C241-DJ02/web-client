import PropTypes from 'prop-types'; // Import prop-types

const BackButton = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      className={'mx-2 shadow-primary rounded py-2 px-4'}
    >
      &lt; Back
    </button>
  );
};

// Prop types validation
BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackButton;
