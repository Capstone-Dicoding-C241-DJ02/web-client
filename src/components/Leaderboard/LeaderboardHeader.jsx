import IconRanking from '../../icons/IconRanking';
// import IconRefresh from '../../icons/IconRefresh';

const LeaderboardHeader = () => {
  return (
    <div className="flex items-center justify-evenly p-2">
      <div className="flex items-center gap-2">
        <IconRanking className={'fill-black'} />
        <h2 className="text-black">Leaderboard</h2>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
