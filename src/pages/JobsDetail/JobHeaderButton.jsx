import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const JobHeaderButton = ({ jobId }) => {
  return (
    <Link to={`/candidates/${jobId}`}>
      <button className="rounded bg-primary-blue cursor-pointer py-4 px-6 text-center text-white">
        <span>Lihat Pelamar</span>
      </button>
    </Link>
  );
};

JobHeaderButton.propTypes = {
  jobId: PropTypes.number.isRequired,
};

export default JobHeaderButton;
