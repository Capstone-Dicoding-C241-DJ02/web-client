import Types from 'prop-types';

const TabsOriginalCV = ({cv}) => {
  return <iframe src={cv} className="w-full h-[600px] rounded"></iframe>;
};

TabsOriginalCV.propTypes = {
  cv: Types.string.isRequired,
};

export default TabsOriginalCV;
