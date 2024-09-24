import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import "./gameBoard.sass";
import { checkGameDraw, checkGameWinner } from "../Utils/checkGameWinner";
import xIcon from "../../assets/images/icon-x.svg";
import oIcon from "../../assets/images/icon-o.svg";
import { resetBoard } from "../Utils/resetGame";

type Player = "O" | "X" | "";

interface GameBoardProps {
  isGameRestarted: boolean;
}
export const GameBoard = ({ isGameRestarted }: GameBoardProps) => {
  const {
    currentPlayer,
    setCurrentPlayer,
    setGameWinner,
    setOpenModal,
    gameBoard,
    setIsGameDraw,
  } = useAppContext();

  const [disabledCells, setDisabledCells] = useState<boolean[]>(
    new Array(gameBoard.length).fill(false)
  );
  const [currCells, setCurrCells] = useState<Player[]>(
    new Array(gameBoard.length).fill("")
  );

  const handleDisableCell = (i: number) => {
    // create new array with updated disabled element(s)
    const newDisabledCells = [...disabledCells];
    newDisabledCells[i] = true;
    setDisabledCells(newDisabledCells);

    // create new array with updated filled board and
    // checks if there's a winner
    const newGameBoardCells = [...currCells];
    newGameBoardCells[i] = currentPlayer;
    setCurrCells(newGameBoardCells);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    if (checkGameWinner(newGameBoardCells, currentPlayer)) {
      setGameWinner(currentPlayer);
      setOpenModal(true);
    }
    if (checkGameDraw(newGameBoardCells)) {
      setIsGameDraw(true);
      setOpenModal(true);
    }
  };

  useEffect(() => {
    if (isGameRestarted) {
      const handleGameReset = () => {
        console.log(`Game will be restarted...`);
        const { releaseDisable, resetGameBoard, defaultPlayer } =
          resetBoard(gameBoard);
        setDisabledCells(releaseDisable);
        setCurrCells(resetGameBoard);
        setCurrentPlayer(defaultPlayer);
        console.log(`Game restarted...`);
      };
      handleGameReset();
    }
  }, [isGameRestarted]);

  return (
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
  );
};
