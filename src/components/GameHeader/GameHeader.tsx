import { GameRestartButton } from "../Utils/GameRestartButton";
import { PageLogo } from "../Utils/PageLogo";
import { PlayerIndicator } from "../Utils/PlayerIndicator";
import "./gameHeader.sass";

export const GameHeader = () => {
  return (
    <div className='game-header__container'>
      <PageLogo />
      <PlayerIndicator currPlayer={"o"} />
      <GameRestartButton />
    </div>
  );
};
