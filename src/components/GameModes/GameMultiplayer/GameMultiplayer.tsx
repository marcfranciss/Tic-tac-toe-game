import { useEffect, useState } from "react";
import { GameHeader } from "../../GameHeader/GameHeader";
import { ScoreCards } from "../../ScoreCards/ScoreCards";
import "./gameMultiplayer.sass";
import { StatusModal } from "../../StatusModal/StatusModal";
import { useAppContext } from "../../../context/AppContext";
import { PageLogo } from "../../Utils/PageLogo";
import { PlayerIndicator } from "../../Utils/PlayerIndicator";
import { GameRestartButton } from "../../Utils/GameRestartButton";
import { RestartModal } from "../../RestartModal/RestartModal";
import { ScoreCard } from "../../Utils/ScoreCard/ScoreCard";

import xIcon from "../../../assets/images/icon-x.svg";
import oIcon from "../../../assets/images/icon-o.svg";
import {
  checkGameDraw,
  checkGameWinner,
  updateScores,
} from "../../Utils/checkGameWinner";

type Player = "X" | "O" | null;

export const GameMultiplayer = () => {
  const {
    currentPlayer,
    setCurrentPlayer,
    setOpenModal,
    playerPicked,
    setGameWinner,
    setIsGameDraw,
  } = useAppContext();

  const [disabledCells, setDisabledCells] = useState<boolean[]>(
    Array(9).fill(false)
  );
  const [currCells, setCurrCells] = useState<Player[]>(Array(9).fill(null));
  const [gameScore, setGameScore] = useState<{
    X: number;
    O: number;
    draw: number;
  }>({ X: 0, O: 0, draw: 0 });

  const winner = checkGameWinner(currCells);

  useEffect(() => {
    if (winner) {
      setOpenModal(true);
      setGameWinner(winner);
      setGameScore(updateScores(currentPlayer, gameScore));
    } else if (checkGameDraw(currCells)) {
      console.log(`game is draw`);
      setIsGameDraw(true);
      setOpenModal(true);
      setGameScore(updateScores(null, gameScore));
    }
  }, [currCells, winner]);

  const handleDisableCell = (i: number) => {
    // create new array with updated disabled element(s)
    const newDisabledCells = disabledCells.slice();
    newDisabledCells[i] = true;
    setDisabledCells(newDisabledCells);

    // create new array with updated filled board and
    // checks if there's a winner
    const newGameBoardCells = [...currCells];
    newGameBoardCells[i] = currentPlayer;
    setCurrCells(newGameBoardCells);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setCurrCells(Array(9).fill(null));
    setDisabledCells(Array(9).fill(false));
    setCurrentPlayer("X");
  };

  return (
    <section id='gameMode-multiplayer'>
      <div className='gameMode-multiplayer__container'>
        <StatusModal statusMsg={`${winner} WON!`} onNextRound={resetGame} />
        <RestartModal onRestart={resetGame} />
        <header className='gameMode-solo__header'>
          <GameHeader>
            <PageLogo />
            <PlayerIndicator currPlayer={currentPlayer} />
            <GameRestartButton />
          </GameHeader>
        </header>
        <div
          id='game-board'
          className='cells_container'
          data-curr-user={currentPlayer}>
          {currCells.map((cellNum, index: number) => {
            return (
              <button
                // role='button'
                className='cell btn-blue'
                data-index={cellNum}
                data-player={currCells[index]}
                key={index}
                tabIndex={0}
                onClick={() => handleDisableCell(index)}
                disabled={disabledCells[index]}>
                {currCells[index] === null ? (
                  ""
                ) : (
                  <img
                    src={
                      currCells[index] === "X"
                        ? xIcon
                        : currCells[index] === "O"
                        ? oIcon
                        : ""
                    }
                    alt=''
                  />
                )}
              </button>
            );
          })}
        </div>
        {/* <GameBoard
          isGameRestarted={isGameRestarted}
          onScoreUpdate={setGameScore}
        /> */}
        <footer className='gameMode-solo__footer'>
          <ScoreCards>
            <ScoreCard
              colorScheme={"blue"}
              header={playerPicked === "X" ? "X (P1)" : "X (P2)"}
              score={playerPicked === "X" ? gameScore.X : gameScore.O}
            />
            <ScoreCard
              colorScheme={"silver"}
              header={"TIES"}
              score={gameScore.draw}
            />
            <ScoreCard
              colorScheme={"yellow"}
              header={playerPicked === "O" ? "O (P1)" : "O (P2)"}
              score={playerPicked === "O" ? gameScore.X : gameScore.O}
            />
          </ScoreCards>
        </footer>
      </div>
    </section>
  );
};
