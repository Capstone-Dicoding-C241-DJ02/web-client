import clsx from 'clsx';
import Types from 'prop-types';

const CandidateCardProfile = ({img, isActive, name, position}) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="rounded-full overflow-clip w-[60px] h-[60px]">
        <img src={img} alt="candidate-photo" className="w-full object-cover" />
      </div>
      <div>
        <h2
          className={clsx('text-body', {
            'text-white': isActive,
            'text-black': !isActive,
          })}
        >
          {name}
        </h2>
        <span
          className={clsx('text-sm', {
            'text-white': isActive,
            'text-black': !isActive,
          })}
        >
          {position}
        </span>
      </div>
    </div>
  );
};

CandidateCardProfile.propTypes = {
  isActive: Types.bool,
  img: Types.string.isRequired,
  name: Types.string.isRequired,
  position: Types.string.isRequired,
};

export default CandidateCardProfile;
