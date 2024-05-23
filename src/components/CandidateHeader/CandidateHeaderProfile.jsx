import Types from 'prop-types';

const CandidateHeaderProfile = ({img, name, position, yearExperience}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full overflow-clip w-[48px] h-[48px] md:w-[80px] md:h-[80px]">
        <img src={img} alt="candidate-photo" className="w-full object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-black text-body md:text-heading2">{name}</h2>
        <div className="flex flex-col gap-1">
          <span className="text-black text-[.5rem] md:text-[.8rem]">
            {position}
          </span>
          <span className="text-gray-500 text-[.5rem] md:text-[.8rem]">
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
