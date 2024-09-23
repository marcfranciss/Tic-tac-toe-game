import { useAppContext } from "../../context/AppContext";
import { GameRestartButton } from "../Utils/GameRestartButton";
import { PageLogo } from "../Utils/PageLogo";
import { PlayerIndicator } from "../Utils/PlayerIndicator";
import "./gameHeader.sass";

export const GameHeader = () => {
  const { currentPlayer } = useAppContext();
  return (
    <div className='game-header__container'>
      <PageLogo />
      <PlayerIndicator currPlayer={currentPlayer} />
      <GameRestartButton />
    </div>
  );
};
