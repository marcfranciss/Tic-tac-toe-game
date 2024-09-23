import imgO from "@/assets/images/icon-o.svg";
import imgX from "@/assets/images/icon-x.svg";
import "./UtilsStyle.sass";

interface PlayerIndicatorProps {
  currPlayer: string;
}

export const PlayerIndicator = ({ currPlayer }: PlayerIndicatorProps) => {
  return (
    <div className='player-indicator'>
      <img
        className='player-indicator__img'
        src={currPlayer === "X" ? imgX : imgO}
        alt='Current player'
      />
      <p className='player-indicator__para'>TURN</p>
    </div>
  );
};
