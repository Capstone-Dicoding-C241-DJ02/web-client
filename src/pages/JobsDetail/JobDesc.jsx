import PropTypes from "prop-types";
import DOMPurify from "dompurify";

const JobsDesc = ({ jobDesc }) => {
  const sanitizedJobDesc = DOMPurify.sanitize(jobDesc);

  return (
    <div className="w-full h-full max-h-[545px] overflow-y-auto bg-white rounded shadow-primary py-4 px-6 space-y-10 text-black">
      <div className="space-y-4">
        <h2>Deskripsi Pekerjaan</h2>
        <div dangerouslySetInnerHTML={{ __html: sanitizedJobDesc }} />
      </div>
      <div>
        <h2>Informasi Tambahan</h2>
        <div className="flex justify-between items-center">
          <div>
            <h3>Pengalaman Bekerja</h3>
          </div>
          <div>
            <h3>Kandidat Yang dibutuhkan</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

JobsDesc.propTypes = {
  jobDesc: PropTypes.string.isRequired, // Tentukan bahwa jobDesc adalah string dan diperlukan
};

export default JobsDesc;
