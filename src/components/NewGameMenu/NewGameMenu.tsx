import OptionButton from "../Buttons/OptionButton";
import { PageLogo } from "../Utils/PageLogo";
import "./newGameMenu.sass";
import SelectionOptions from "./PlayerSelection.tsx/SelectionOptions/SelectionOptions";

const NewGameMenu = () => {
  return (
    <section id='newGameMenu'>
      <div className='newgame-container'>
        <header>
          <PageLogo />
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
