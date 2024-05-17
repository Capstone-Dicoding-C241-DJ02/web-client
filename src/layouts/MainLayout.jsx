import Types from 'prop-types';

const MainLayout = ({children}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-screen">
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: Types.node,
};

export default MainLayout;
