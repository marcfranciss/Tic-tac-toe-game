import "./scoreCards.sass";
import { ReactNode } from "react";

interface ScoreCardsProps {
  children: ReactNode;
}
export const ScoreCards = ({ children }: ScoreCardsProps) => {
  return <div className='score-cards__container'>{children}</div>;
};
