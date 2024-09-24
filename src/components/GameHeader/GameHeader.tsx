import { ReactNode } from "react";
import "./gameHeader.sass";

interface GameHeaderProps {
  children: ReactNode;
}
export const GameHeader = ({ children }: GameHeaderProps) => {
  return <div className='game-header__container'>{children}</div>;
};
