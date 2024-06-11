import {Outlet} from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';

const Jobs = () => {
  return (
    <div className="flex items-center gap-5 p-4 h-screen">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Jobs;
