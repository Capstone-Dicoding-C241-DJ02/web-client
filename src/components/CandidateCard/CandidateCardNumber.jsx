import Types from 'prop-types';
import clsx from 'clsx';

const CandidateCardNumber = ({number}) => {
  const options = {
    'bg-gold': number === 1,
    'bg-silver': number === 2,
    'bg-bronze': number === 3,
    'bg-black': number > 3,
  };
  return (
    <div
      className={clsx(
        'h-full w-[59px] rounded grid place-content-center',
        options
      )}
    >
      <span className="text-heading2 md:text-heading1 text-white">
        {number}
      </span>
    </div>
  );
};

CandidateCardNumber.propTypes = {
  number: Types.number.isRequired,
};

export default CandidateCardNumber;
