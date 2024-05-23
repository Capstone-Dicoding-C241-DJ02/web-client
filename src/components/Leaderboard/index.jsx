import Types from 'prop-types';
import LeaderboardHeader from './LeaderboardHeader';

const Leaderboard = ({children}) => {
  return (
    <div className="shadow-primary md:min-w-[324px] md:h-[550px] rounded bg-white overflow-y-auto md:overflow-clip">
      <LeaderboardHeader />
      <div className="overflow-y-auto md:h-[700px] p-2 space-y-2 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

Leaderboard.propTypes = {
  children: Types.node,
};

export default Leaderboard;
