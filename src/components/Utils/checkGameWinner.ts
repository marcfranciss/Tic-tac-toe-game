type Player = "O" | "X" | "";

export function checkGameWinner(boardCell: Player[], player: string) {

    // setup winning combinations for the game
    const winningCombinations = [
      [0, 1, 2], //
      [3, 4, 5], //
      [6, 7, 8], // Rows
      [0, 3, 6], //
      [1, 4, 7], //
      [2, 5, 8], // Columns
      [0, 4, 8], //
      [2, 4, 6], // Diagonal
    ];

    /** 
        * will return true or false
        * .some() will compare the current array to each winning combination
        * .every() will check each index of the current array of there are a sequence of the same 'player'
    **/
   
    return winningCombinations.some((combination) =>
      combination.every((index) => boardCell[index] === player)
    );
  }

  export const checkGameDraw = (boardCell: Player[]) => {
    return boardCell.flat().every((cell)=> cell !== "")
  }