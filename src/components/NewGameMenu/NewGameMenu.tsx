import { useAppContext } from "../../context/AppContext";
import OptionButton from "../Buttons/OptionButton";
import { PageLogo } from "../Utils/PageLogo";
import "./newGameMenu.sass";
import SelectionOptions from "./PlayerSelection.tsx/SelectionOptions/SelectionOptions";

type GameModes = "solo" | "multiplayer" | undefined;

const NewGameMenu = () => {
  const { setIsPlayerSelection, setGameMode } = useAppContext();
  const handleGameModeSelector = (mode: GameModes) => {
    if (mode === "solo") {
      console.log(`solo mode selected`);
      setIsPlayerSelection(false);
      setGameMode(mode);
    } else if (mode === "multiplayer") {
      console.log(`multiplayer mode selected`);
      setIsPlayerSelection(false);
      setGameMode(mode);
    } else {
      setIsPlayerSelection(true);
      console.error(`No selected game mode!`);
    }
  };
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
          <OptionButton
            colorScheme={"yellow"}
            btnText={"NEW GAME (VS CPU)"}
            onClick={() => handleGameModeSelector("solo")}
          />
          <OptionButton
            colorScheme={"blue"}
            btnText={"NEW GAME (VS PLAYER)"}
            onClick={() => handleGameModeSelector("multiplayer")}
          />
        </div>
      </div>
    </section>
  );
};

export default NewGameMenu;
