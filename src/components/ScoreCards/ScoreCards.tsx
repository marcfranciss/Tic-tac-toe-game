import "./scoreCards.sass";
import { ScoreCard } from "./ScoreCard/ScoreCard";

export const ScoreCards = () => {
  return (
    <div className='score-cards__container'>
      <ScoreCard colorScheme={"blue"} header={"X (YOU)"} score={0} />
      <ScoreCard colorScheme={"silver"} header={"TIES"} score={0} />
      <ScoreCard colorScheme={"yellow"} header={"O (CPU)"} score={0} />
    </div>
  );
};
