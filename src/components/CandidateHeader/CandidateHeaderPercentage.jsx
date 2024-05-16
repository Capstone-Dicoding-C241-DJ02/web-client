import clsx from 'clsx';
import Types from 'prop-types';

const CandidateHeaderPercentage = ({percentage}) => {
  const options = {
    'bg-success': percentage >= 80,
    'bg-gold': percentage >= 50,
    'bg-danger': percentage <= 40,
  };

  return (
    <div
      className={clsx(
        'rounded-full grid place-content-center w-[37px] h-[21px] md:w-[90px] md:h-[50px]',
        options
      )}
    >
      <span className="text-white text-[.7rem] md:text-body">
        {percentage}%
      </span>
    </div>
  );
};

CandidateHeaderPercentage.propTypes = {
  percentage: Types.number.isRequired,
};

export default CandidateHeaderPercentage;
