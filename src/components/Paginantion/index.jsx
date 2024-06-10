import {useState} from 'react';
import BackButton from '../ButtonNextBack/BackButton';
import NextButton from '../ButtonNextBack/NextButton';
import PropTypes from 'prop-types';

const Pagination = ({onPageChange, totalData}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(totalData / 10);

  const handleNext = () => {
    setCurrentPage((prev) => {
      if (prev >= pages) return prev;
      const newPage = prev + 1;
      onPageChange(newPage);
      return newPage;
    });
  };
  const handleBack = () => {
    setCurrentPage((prev) => {
      if (prev === 1) return 1;
      const newPage = prev - 1;
      onPageChange(newPage);
      return newPage;
    });
  };

  return (
    <div className="flex justify-center gap-5 items-center">
      <div className="flex items-center gap-4">
        <BackButton onClick={handleBack} />
        <NextButton onClick={handleNext} />
      </div>
      <span>
        Page {currentPage} of {pages}
      </span>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalData: PropTypes.number.isRequired,
};

export default Pagination;
