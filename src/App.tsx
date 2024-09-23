import GameSolo from "./components/GameSolo/GameSolo";
import NewGameMenu from "./components/NewGameMenu/NewGameMenu";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { gameMode, isPlayerSelection, setIsPlayerSelection } = useAppContext();
  return (
    <main>
      {/* <StatusModal statusMsg={"YOU WON!"} /> */}
      {isPlayerSelection ? (
        <NewGameMenu />
      ) : gameMode === "solo" || gameMode === "multiplayer" ? (
        <GameSolo />
      ) : (
        (console.error(`No selected game mode!`),
        setIsPlayerSelection(true),
        (<NewGameMenu />))
      )}
    </main>
  );
};

export default App;
