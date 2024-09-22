import "./scoreCard.sass";

interface ScoreCardProps {
  colorScheme: "blue" | "yellow" | "silver";
  header: string;
  score: number;
}
export const ScoreCard = ({ colorScheme, header, score }: ScoreCardProps) => {
  return (
    <div className={`score-card ${colorScheme}`}>
      <h2 className='score-card__header'>{header}</h2>
      <p className='score-card__score'>{score}</p>
    </div>
  );
};
