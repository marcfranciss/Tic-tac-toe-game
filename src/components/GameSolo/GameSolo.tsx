import { useState } from "react";
import { GameHeader } from "../GameHeader/GameHeader";
import { ScoreCards } from "../ScoreCards/ScoreCards";
import xIcon from "../../assets/images/icon-x.svg";
import oIcon from "../../assets/images/icon-o.svg";
import "./gameSolo.sass";
import { resetBoard } from "../Utils/resetGame";
import { checkGameWinner } from "../Utils/checkGameWinner";
import { StatusModal } from "../StatusModal/StatusModal";
import { useAppContext } from "../../context/AppContext";

// const gameBoardCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
type Player = "O" | "X" | "";

const GameSolo = () => {
  const {
    currentPlayer,
    setCurrentPlayer,
    gameWinner,
    setGameWinner,
    setOpenModal,
    gameBoard,
  } = useAppContext();
  const [disabledCells, setDisabledCells] = useState<boolean[]>(
    new Array(gameBoard.length).fill(false)
  );
  const [currCells, setCurrCells] = useState<Player[]>(
    new Array(gameBoard.length).fill("")
  );

  const handleDisableCell = (i: number) => {
    const newDisabledCells = [...disabledCells];
    newDisabledCells[i] = true;
    setDisabledCells(newDisabledCells);
    const newGameBoardCells = [...currCells];
    newGameBoardCells[i] = currentPlayer;
    setCurrCells(newGameBoardCells);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    if (checkGameWinner(newGameBoardCells, currentPlayer)) {
      setGameWinner(currentPlayer);
      setOpenModal(true);
    }
  };

  const handleResetGame = () => {
    const { releaseDisable, resetGameBoard, defaultPlayer } =
      resetBoard(gameBoard);
    setDisabledCells(releaseDisable);
    setCurrCells(resetGameBoard);
    console.log(currCells);
    setCurrentPlayer(defaultPlayer);
  };
  return (
    <section id='gameMode-solo'>
      <div className='gameMode-solo__container'>
        <StatusModal
          statusMsg={`${gameWinner} WON!`}
          onNextRound={handleResetGame}
        />
        <header className='gameMode-solo__header'>
          <GameHeader />
        </header>
        <button onClick={handleResetGame}>RESET</button>
        <div
          id='game-board'
          className='cells_container'
          data-curr-user={currentPlayer}>
          {gameBoard.map((cellNum: number, index: number) => {
            return (
              <button
                // role='button'
                className='cell btn-blue'
                data-index={cellNum}
                data-player={currCells[index]}
                key={cellNum}
                tabIndex={0}
                onClick={() => handleDisableCell(index)}
                disabled={disabledCells[index]}>
                {currCells[index] === "" ? (
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
        <footer className='gameMode-solo__footer'>
          <ScoreCards />
        </footer>
      </div>
    </section>
  );
};

export default GameSolo;
