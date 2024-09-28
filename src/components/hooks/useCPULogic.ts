let board = ["", "", "", "", "", "", "", "", ""];
// type Player = "O" | "X" | "";

export function checkGameWinner(boardCell: string[]) {

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
   
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (boardCell[a] === boardCell[b] && boardCell[a] === boardCell[c] && boardCell[a] !== "") {
          return boardCell[a] === "X" ? 1 : -1;
        }
      }
      if (boardCell.every((cell) => cell !== "")) {
        return 0; // Draw
      }
      return null; // Game not over
  }


export function cpuMove(board: string[]) {
  console.log(`cpuMove function working...`)
    // Check for winning move
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = "X"; // Simulate move
        if (checkGameWinner(board) === 1) {
          return; // Win if possible
        }
        board[i] = ""; // Undo move
      }
    }
  
    // Check for blocking move
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = "O"; // Simulate opponent's move
        if (checkGameWinner(board) === -1) {
          board[i] = "X"; // Block opponent's win
          return;
        }
        board[i] = ""; // Undo move
      }
    }
  
    // Choose a random available move
    let availableMoves = board
      .map((cell, index) => (cell === "" ? index : null))
      .filter((index) => index !== null);
    if (availableMoves.length > 0) {
      const randomMove =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
      board[randomMove] = "X"; // Make random move
    }

    while (true) {
      // Player move (implement your logic to get the index)
      // Example: board[index] = 'O';
    
      // CPU move
      cpuMove(board);
    
      // Check game status
      const winner = checkGameWinner(board);
      if (winner !== null) {
        console.log(
          `Game Over! Result: ${
            winner === 1 ? "CPU Wins!" : winner === -1 ? "Opponent Wins!" : "Draw"
          }`
        );
        break;
      }
    }
  }

  while (true) {
  // Player move (implement your logic to get the index)
  // Example: board[index] = 'O';

  // CPU move
  cpuMove(board);

  // Check game status
  const winner = checkGameWinner(board);
  if (winner !== null) {
    console.log(
      `Game Over! Result: ${
        winner === 1 ? "CPU Wins!" : winner === -1 ? "Opponent Wins!" : "Draw"
      }`
    );
    break;
  }
}