import {Link} from 'react-router-dom';

const JobHeaderButton = () => {
  return (
    <Link to={'/candidates/jobid'}>
      <button className="rounded bg-primary-blue cursor-pointer py-4 px-6 text-center text-white">
        <span>Lihat Pelamar</span>
      </button>
    </Link>
  );
};

export default JobHeaderButton;
