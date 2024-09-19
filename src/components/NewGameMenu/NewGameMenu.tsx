import OptionButton from "../Buttons/OptionButton";
import "./newGameMenu.sass";
import pageLogo from "@images/logo.svg";
import SelectionOptions from "./PlayerSelection.tsx/SelectionOptions/SelectionOptions";

const NewGameMenu = () => {
  return (
    <section id='newGameMenu'>
      <div className='newgame-container'>
        <header>
          <a href='/'>
            <img src={pageLogo} alt='Page Logo - X and O' />
          </a>
        </header>
        <div className='player-selection'>
          <span className='player-selection__header'>PICK PLAYER 1’S MARK</span>
          <SelectionOptions />
          <span className='player-selection__reminder'>
            REMEMBER : X GOES FIRST
          </span>
        </div>
        <div className='newgame-selector'>
          <OptionButton colorScheme={"yellow"} btnText={"NEW GAME (VS CPU)"} />
          <OptionButton colorScheme={"blue"} btnText={"NEW GAME (VS PLAYER)"} />
        </div>
      </div>
    </section>
  );
};

export default NewGameMenu;
