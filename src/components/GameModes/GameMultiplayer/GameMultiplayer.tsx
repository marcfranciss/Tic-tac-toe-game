import { useState } from "react";
import { GameHeader } from "../../GameHeader/GameHeader";
import { ScoreCards } from "../../ScoreCards/ScoreCards";
import "./gameMultiplayer.sass";
import { StatusModal } from "../../StatusModal/StatusModal";
import { useAppContext } from "../../../context/AppContext";
import { GameBoard } from "../../GameBoard/GameBoard";
import { PageLogo } from "../../Utils/PageLogo";
import { PlayerIndicator } from "../../Utils/PlayerIndicator";
import { GameRestartButton } from "../../Utils/GameRestartButton";
import { RestartModal } from "../../RestartModal/RestartModal";
import { ScoreCard } from "../../Utils/ScoreCard/ScoreCard";

export const GameMultiplayer = () => {
  const { currentPlayer, gameWinner, playerPicked } = useAppContext();
  const [isGameRestarted, setIsGameRestarted] = useState<boolean>(false);

  const handleRestartGameProps = () => {
    setIsGameRestarted(true);
    setTimeout(() => {
      setIsGameRestarted(false);
    }, 1000);
  };
  return (
    <section id='gameMode-multiplayer'>
      <div className='gameMode-multiplayer__container'>
        <StatusModal
          statusMsg={`${gameWinner} WON!`}
          onNextRound={handleRestartGameProps}
        />
        <RestartModal onRestart={handleRestartGameProps} />
        <header className='gameMode-solo__header'>
          <GameHeader>
            <PageLogo />
            <PlayerIndicator currPlayer={currentPlayer} />
            <GameRestartButton />
          </GameHeader>
        </header>
        <GameBoard isGameRestarted={isGameRestarted} />
        <footer className='gameMode-solo__footer'>
          <ScoreCards>
            <ScoreCard
              colorScheme={"blue"}
              header={playerPicked === "X" ? "X (P1)" : "X (P2)"}
              score={0}
            />
            <ScoreCard colorScheme={"silver"} header={"TIES"} score={0} />
            <ScoreCard
              colorScheme={"yellow"}
              header={playerPicked === "O" ? "O (P1)" : "O (P2)"}
              score={0}
            />
          </ScoreCards>
        </footer>
      </div>
    </section>
  );
};
