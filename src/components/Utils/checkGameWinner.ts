type Player = "O" | "X" | null;

export const checkGameWinner = (cells: Player[]) => {
  const lines: [number, number, number][] = [
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
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
};

  export const checkGameDraw = (boardCell: Player[]): boolean => {
    return boardCell.flat().every((cell)=> cell !== null)
  }

interface TInitialScore {X: number, O: number, draw:number}
  export const updateScores = (winner: Player, intialScore: TInitialScore) => {
    // const intialScore = {X: 0, O: 0, draw:0}
    console.log(intialScore)
    const score = ((intialScore: any) => {
      if (winner === "X") {
        return { ...intialScore, X: intialScore.X + 1 };
      } else if (winner === "O") {
        return { ...intialScore, O: intialScore.O + 1 };
      } else {
        return { ...intialScore, draw: intialScore.draw + 1 };
      }
    });
    console.log(score(intialScore))
    return score(intialScore);
  };