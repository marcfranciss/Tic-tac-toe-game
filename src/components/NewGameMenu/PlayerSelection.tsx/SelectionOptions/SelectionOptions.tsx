import "./selectionOptions.sass";
import oIcon from "@images/icon-o.svg";
import xIcon from "@images/icon-x.svg";

const SelectionOptions = () => {
  return (
    <div className='player-selection__options'>
      <label htmlFor='x-player' className='x-player__label'>
        <input type='radio' name='players' id='x-player' />
        <img className='player-img' src={xIcon} alt='Player X' />
      </label>
      <label htmlFor='o-player' className='o-player__label'>
        <input type='radio' name='players' id='o-player' defaultChecked />
        <img className='player-img' src={oIcon} alt='Player O' />
      </label>
    </div>
  );
};

export default SelectionOptions;
