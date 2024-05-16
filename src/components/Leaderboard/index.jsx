import Types from 'prop-types';
import LeaderboardHeader from './LeaderboardHeader';

const Leaderboard = ({children}) => {
  return (
    <div className="shadow-primary md:w-[324px] md:h-[500px] rounded bg-white overflow-clip">
      <LeaderboardHeader />
      <div className="overflow-y-auto h-full p-2 space-y-2">{children}</div>
    </div>
  );
};

Leaderboard.propTypes = {
  children: Types.node,
};

export default Leaderboard;
