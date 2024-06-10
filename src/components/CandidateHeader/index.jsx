import CandidateHeaderPercentage from "./CandidateHeaderPercentage";
import CandidateHeaderProfile from "./CandidateHeaderProfile";

import Types from "prop-types";

const CandidateHeader = ({ img, name, position, percentage }) => {
  return (
    <div className="shadow-primary w-full h-[100px] rounded flex items-center justify-between p-4 bg-white">
      <CandidateHeaderProfile img={img} name={name} position={position} />
      <CandidateHeaderPercentage percentage={percentage} />
    </div>
  );
};

CandidateHeader.propTypes = {
  img: Types.string.isRequired,
  name: Types.string.isRequired,
  position: Types.string.isRequired,
  percentage: Types.number.isRequired,
};

export default CandidateHeader;
