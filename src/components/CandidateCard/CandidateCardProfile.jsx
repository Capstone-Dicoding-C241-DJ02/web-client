import clsx from 'clsx';
import Types from 'prop-types';

const CandidateCardProfile = ({img, isActive}) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="rounded-full overflow-clip w-[60px]">
        <img src={img} alt="candidate-photo" className="w-full" />
      </div>
      <div>
        <h2
          className={clsx('text-body', {
            'text-white': isActive,
            'text-black': !isActive,
          })}
        >
          Kim Chaewon
        </h2>
        <span
          className={clsx('text-sm', {
            'text-white': isActive,
            'text-black': !isActive,
          })}
        >
          Cloud Engineer
        </span>
      </div>
    </div>
  );
};

CandidateCardProfile.propTypes = {
  isActive: Types.bool,
  img: Types.string,
};

export default CandidateCardProfile;
