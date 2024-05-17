import Types from 'prop-types';

const Column = ({span, children, className}) => {
  return (
    <div className={`${span} outline outline-red-600 h-full ${className}`}>
      {children}
    </div>
  );
};

Column.propTypes = {
  span: Types.number,
  children: Types.node,
  className: Types.string,
};

export default Column;
