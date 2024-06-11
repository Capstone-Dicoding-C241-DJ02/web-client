import PropTypes from 'prop-types'; // Import prop-types

const NextButton = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      className={
        'mx-2 shadow-primary text-black hover:bg-primary-blue bg-white hover:text-white rounded py-2 px-4'
      }
    >
      Next &gt;
    </button>
  );
};

// Prop types validation
NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NextButton;
