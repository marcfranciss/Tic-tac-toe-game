import GameSolo from "./components/GameSolo/GameSolo";
import NewGameMenu from "./components/NewGameMenu/NewGameMenu";
import { StatusModal } from "./components/StatusModal/StatusModal";

const App = () => {
  return (
    <main>
      <StatusModal statusMsg={"YOU WON!"} />
      {/* <NewGameMenu /> */}
      <GameSolo />
    </main>
  );
};

export default App;
