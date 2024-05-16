import CandidateHeaderPercentage from './CandidateHeaderPercentage';
import CandidateHeaderProfile from './CandidateHeaderProfile';

import Types from 'prop-types';

const CandidateHeader = ({img, name, position, yearExperience, percentage}) => {
  return (
    <div className="shadow-primary w-[258px] md:w-[625px] rounded flex items-center justify-between p-4">
      <CandidateHeaderProfile
        img={img}
        name={name}
        position={position}
        yearExperience={yearExperience}
      />
      <CandidateHeaderPercentage percentage={percentage} />
    </div>
  );
};

CandidateHeader.propTypes = {
  img: Types.string.isRequired,
  name: Types.string.isRequired,
  position: Types.string.isRequired,
  yearExperience: Types.number.isRequired,
  percentage: Types.number.isRequired,
};

export default CandidateHeader;
