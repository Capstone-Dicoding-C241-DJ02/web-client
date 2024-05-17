import CandidateCardNumber from './CandidateCardNumber';
import Types from 'prop-types';
import clsx from 'clsx';
import CandidateCardProfile from './CandidateCardProfile';

const CandidateCard = ({img, isActive, number, name, position}) => {
  return (
    <div
      className={clsx(
        'w-[300px] h-[80px] rounded overflow-clip flex items-center gap-4 shadow-primary cursor-pointer',
        {'bg-white': !isActive, 'bg-primary-blue': isActive}
      )}
    >
      <CandidateCardNumber number={number} />
      <CandidateCardProfile
        img={img}
        isActive={isActive}
        name={name}
        position={position}
      />
    </div>
  );
};

CandidateCard.propTypes = {
  isActive: Types.bool,
  img: Types.string,
  number: Types.number,
  name: Types.string,
  position: Types.string,
};

export default CandidateCard;
