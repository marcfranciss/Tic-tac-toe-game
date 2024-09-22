import imgO from "@images/icon-o.svg";
import imgX from "@images/icon-x.svg";
import "./UtilsStyle.sass";

interface PlayerIndicatorProps {
  currPlayer: string;
}

export const PlayerIndicator = ({ currPlayer }: PlayerIndicatorProps) => {
  return (
    <div className='player-indicator'>
      <img
        className='player-indicator__img'
        src={currPlayer === "o" ? imgO : imgX}
        alt='Current player'
      />
      <p className='player-indicator__para'>TURN</p>
    </div>
  );
};
