import Leaderboard from './components/Leaderboard';
import CandidateCard from './components/CandidateCard';
import chaewon from './assets/chaewon.jpeg';

function App() {
  return (
    <div className="grid place-content-center h-screen">
      <Leaderboard>
        <CandidateCard img={chaewon} number={1} isActive={true} />
        <CandidateCard img={chaewon} number={2} />
        <CandidateCard img={chaewon} number={3} />
        <CandidateCard img={chaewon} number={4} />
        <CandidateCard img={chaewon} number={5} />
        <CandidateCard img={chaewon} number={6} />
        <CandidateCard img={chaewon} number={7} />
      </Leaderboard>
    </div>
  );
}


export default App;
