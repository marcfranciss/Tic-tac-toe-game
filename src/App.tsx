import { GameMultiplayer } from "./components/GameModes/GameMultiplayer/GameMultiplayer";
import { GameSolo } from "./components/GameModes/GameSolo/GameSolo";
import NewGameMenu from "./components/NewGameMenu/NewGameMenu";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { gameMode, isPlayerSelection, setIsPlayerSelection } = useAppContext();
  return (
    <main>
      {isPlayerSelection ? (
        <NewGameMenu />
      ) : gameMode === "solo" ? (
        <GameSolo />
      ) : gameMode === "multiplayer" ? (
        <GameMultiplayer />
      ) : (
        (console.error(`No selected game mode!`),
        setIsPlayerSelection(true),
        (<NewGameMenu />))
      )}
    </main>
  );
};

export default App;
