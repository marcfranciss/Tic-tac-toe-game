Simple CPU Logic for 1D Tic-Tac-Toe
Game

**State Representation:**

```javascript
let board = ["", "", "", "", "", "", "", "", ""]; // 1D representation
```

**Check for Terminal States:**

```javascript
function checkWinner(board) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] === board[b] && board[a] === board[c] && board[a] !== "") {
      return board[a] === "X" ? 1 : -1;
    }
  }
  if (board.every((cell) => cell !== "")) {
    return 0; // Draw
  }
  return null; // Game not over
}
```

**_Simple CPU Move Function:_**

```javascript
function cpuMove(board) {
  // Check for winning move
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      board[i] = "X"; // Simulate move
      if (checkWinner(board) === 1) {
        return; // Win if possible
      }
      board[i] = ""; // Undo move
    }
  }

  // Check for blocking move
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      board[i] = "O"; // Simulate opponent's move
      if (checkWinner(board) === -1) {
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
}
```

**Example Game Loop:**

```javascript
while (true) {
  // Player move (implement your logic to get the index)
  // Example: board[index] = 'O';

  // CPU move
  cpuMove(board);

  // Check game status
  const winner = checkWinner(board);
  if (winner !== null) {
    console.log(
      `Game Over! Result: ${
        winner === 1 ? "CPU Wins!" : winner === -1 ? "Opponent Wins!" : "Draw"
      }`
    );
    break;
  }
}
```

**Summary**

This implementation simplifies the CPU's decision-making by focusing on:

- Checking for a winning move.
- Blocking the opponent from winning.
- Making a random available move if no immediate winning or blocking move is necessary.

This approach is straightforward and easy to understand while still providing a functional Tic-Tac-Toe experience. If you have any questions or want to make further adjustments, let me know!
