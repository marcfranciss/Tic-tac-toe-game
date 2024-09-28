import { useEffect, useState } from "react";
import { GameHeader } from "../../GameHeader/GameHeader";
import { ScoreCards } from "../../ScoreCards/ScoreCards";
import "./gameSolo.sass";
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

export const GameSolo = () => {
  const { currentPlayer, setIsGameDraw, setOpenModal, setGameWinner } =
    useAppContext();

  const [soloBoard, setSoloBoard] = useState<Player[]>(Array(9).fill(null));
  const [disabledCells, setDisabledCells] = useState<boolean[]>(
    Array(9).fill(false)
  );
  const [isCPUturn, setIsCPUturn] = useState<boolean>(true);
  const [gameScore, setGameScore] = useState<{
    X: number;
    O: number;
    draw: number;
  }>({ X: 0, O: 0, draw: 0 });

  const winner = checkGameWinner(soloBoard);

  // STEP 1: Checking who's turn and if there's a winner
  useEffect(() => {
    if (winner) {
      setOpenModal(true);
      setGameWinner(winner);
      setIsGameDraw(false);
      setGameScore(updateScores(winner, gameScore));
    } else if (checkGameDraw(soloBoard)) {
      setOpenModal(true);
      setIsGameDraw(true);
      setGameScore(updateScores(null, gameScore));
    } else if (!isCPUturn) {
      makeCPUMove();
    }
  }, [isCPUturn, winner, soloBoard]);

  const handleClick = (index: number) => {
    if (soloBoard[index] || winner) return;

    const newDisabledCells = disabledCells.slice();
    newDisabledCells[index] = true;
    setDisabledCells(newDisabledCells);

    const newBoard = soloBoard.slice();
    newBoard[index] = isCPUturn ? "X" : "O";
    setSoloBoard(newBoard);
    setIsCPUturn(!isCPUturn);
  };

  const makeCPUMove = () => {
    const bestMove = getBestMove(soloBoard);
    if (bestMove !== null) {
      handleClick(bestMove);
    }
  };

  const getBestMove = (board: Player[]): number | null => {
    let bestScore = -Infinity;
    let move: number | null = null;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = "O"; // CPU is 'O'
        const score = minimax(board, 0, false);
        board[i] = null; // Undo the move

        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  };

  const minimax = (
    board: Player[],
    depth: number,
    isMaximizing: boolean
  ): number => {
    const score = calculateScore(board);

    if (score === 10) return score - depth; // O (CPU) wins
    if (score === -10) return score + depth; // X (Player) wins
    if (checkGameDraw(board)) return 0; // Draw

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "O";
          bestScore = Math.max(bestScore, minimax(board, depth + 1, false));
          board[i] = null; // Undo the move
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "X";
          bestScore = Math.min(bestScore, minimax(board, depth + 1, true));
          board[i] = null; // Undo the move
        }
      }
      return bestScore;
    }
  };

  const calculateScore = (squares: Player[]): number => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a] === "O" ? 10 : -10;
      }
    }
    return 0;
  };

  const resetSoloGame = () => {
    setSoloBoard(Array(9).fill(null));
    setDisabledCells(Array(9).fill(false));
    setIsCPUturn(true);
  };

  return (
    <section id='gameMode-solo'>
      <div className='gameMode-solo__container'>
        <StatusModal statusMsg={`${winner} WON!`} onNextRound={resetSoloGame} />
        <RestartModal onRestart={resetSoloGame} />
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
          {soloBoard.map((cellNum, index: number) => {
            return (
              <button
                className='cell btn-blue'
                data-index={cellNum}
                data-player={soloBoard[index]}
                key={index}
                tabIndex={0}
                onClick={() => handleClick(index)}
                disabled={disabledCells[index]}>
                {soloBoard[index] === null ? (
                  ""
                ) : (
                  <img
                    src={
                      soloBoard[index] === "X"
                        ? xIcon
                        : soloBoard[index] === "O"
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
        {/* asdasdadasd */}
        {/* <GameBoard isGameRestarted={isGameRestarted} /> */}
        <footer className='gameMode-solo__footer'>
          <ScoreCards>
            <ScoreCard
              colorScheme={"blue"}
              header={"X (YOU)"}
              score={gameScore.X}
            />
            <ScoreCard
              colorScheme={"silver"}
              header={"TIES"}
              score={gameScore.draw}
            />
            <ScoreCard
              colorScheme={"yellow"}
              header={"O (CPU)"}
              score={gameScore.O}
            />
          </ScoreCards>
        </footer>
      </div>
    </section>
  );
};
