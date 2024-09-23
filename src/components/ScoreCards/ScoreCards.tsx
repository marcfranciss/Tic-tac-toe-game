import "./scoreCards.sass";
import { useAppContext } from "../../context/AppContext";
import { ScoreCard } from "../Utils/ScoreCard/ScoreCard";

export const ScoreCards = () => {
  const { playerPicked } = useAppContext();

  return (
    <div className='score-cards__container'>
      <ScoreCard
        colorScheme={"blue"}
        header={playerPicked === "X" ? "X (YOU)" : "X (CPU)"}
        score={0}
      />
      <ScoreCard colorScheme={"silver"} header={"TIES"} score={0} />
      <ScoreCard
        colorScheme={"yellow"}
        header={playerPicked === "O" ? "O (YOU)" : "O (CPU)"}
        score={0}
      />
    </div>
  );
};
