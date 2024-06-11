import IconMissingCandidate from '../../icons/IconMissingCandidate';

const NoCandidate = () => {
  return (
    <div className="bg-white rounded shadow-primary w-full h-full grid place-content-center">
      <div>
        <IconMissingCandidate />
        <h3 className="text-black">Belum ada Kandidat yang dipilih</h3>
      </div>
    </div>
  );
};

export default NoCandidate;
