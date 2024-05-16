import Types from 'prop-types';

const IconRefresh = ({className}) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M15 25C12.2083 25 9.84375 24.0312 7.90625 22.0938C5.96875 20.1562 5 17.7917 5 15C5 12.2083 5.96875 9.84375 7.90625 7.90625C9.84375 5.96875 12.2083 5 15 5C16.4375 5 17.8125 5.29667 19.125 5.89C20.4375 6.48333 21.5625 7.3325 22.5 8.4375V5H25V13.75H16.25V11.25H21.5C20.8333 10.0833 19.9221 9.16667 18.7662 8.5C17.6104 7.83333 16.355 7.5 15 7.5C12.9167 7.5 11.1458 8.22917 9.6875 9.6875C8.22917 11.1458 7.5 12.9167 7.5 15C7.5 17.0833 8.22917 18.8542 9.6875 20.3125C11.1458 21.7708 12.9167 22.5 15 22.5C16.6042 22.5 18.0521 22.0417 19.3438 21.125C20.6354 20.2083 21.5417 19 22.0625 17.5H24.6875C24.1042 19.7083 22.9167 21.5104 21.125 22.9062C19.3333 24.3021 17.2917 25 15 25Z" />
    </svg>
  );
};

IconRefresh.propTypes = {
  className: Types.string,
};

export default IconRefresh;
