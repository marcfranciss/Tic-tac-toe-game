import "./selectionOptions.sass";
import oIcon from "@/assets/images/icon-o.svg";
import xIcon from "@/assets/images/icon-x.svg";
import { useAppContext } from "../../../../context/AppContext";

const SelectionOptions = () => {
  const { setPlayerPicked } = useAppContext();
  return (
    <div className='player-selection__options'>
      <label htmlFor='x-player' className='x-player__label'>
        <input
          type='radio'
          name='players'
          id='x-player'
          onClick={() => setPlayerPicked("X")}
        />
        <img className='player-img' src={xIcon} alt='Player X' />
      </label>
      <label htmlFor='o-player' className='o-player__label'>
        <input
          type='radio'
          name='players'
          id='o-player'
          defaultChecked
          onClick={() => setPlayerPicked("O")}
        />
        <img className='player-img' src={oIcon} alt='Player O' />
      </label>
    </div>
  );
};

export default SelectionOptions;
