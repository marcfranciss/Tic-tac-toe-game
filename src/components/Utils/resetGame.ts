type Player = "O" | "X" | "";
export function resetBoard(gameBoard: number[]) {
    const releaseDisable: boolean[] = new Array(gameBoard.length).fill(false);
    const resetGameBoard: Player[] = new Array(gameBoard.length).fill("");
    const defaultPlayer: Player = "X";
    return { releaseDisable, resetGameBoard, defaultPlayer };
  }