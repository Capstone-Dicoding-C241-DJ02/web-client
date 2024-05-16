import Types from 'prop-types';

const CandidateHeaderProfile = ({img, name, position, yearExperience}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full overflow-clip w-[48px] h-[48px] md:w-[117px] md:h-[117px]">
        <img src={img} alt="candidate-photo" className="w-full object-cover" />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-black text-body md:text-heading2">{name}</h2>
        <div className="flex flex-col gap-1">
          <span className="text-black text-[.5rem] md:text-body">
            {position}
          </span>
          <span className="text-gray-500 text-[.5rem] md:text-body">
            {yearExperience} tahun pengalaman
          </span>
        </div>
      </div>
    </div>
  );
};

CandidateHeaderProfile.propTypes = {
  img: Types.string.isRequired,
  name: Types.string.isRequired,
  position: Types.string.isRequired,
  yearExperience: Types.number.isRequired,
};

export default CandidateHeaderProfile;
