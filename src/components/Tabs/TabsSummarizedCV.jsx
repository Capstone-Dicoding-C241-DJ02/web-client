import PropTypes from 'prop-types';

const TabsSummarizedCV = ({candidate}) => {
  return (
    <div className="text-black space-y-5 p-2 md:p-10">
      <h2 className="text-center">{candidate?.fullname}</h2>
      <div className="flex items-center justify-between mb-4">
        <span>{candidate?.phone}</span>
        <span>{candidate?.email}</span>
        <a href={candidate?.additional_link} target='_blank'>{candidate?.additional_link}</a>
      </div>
      <h2>Summary</h2>
      <p>{candidate?.cv_summary}</p>
    </div>
  );
};

TabsSummarizedCV.propTypes = {
  candidate: PropTypes.object,
};

export default TabsSummarizedCV;
