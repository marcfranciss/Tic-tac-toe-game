import { createContext, ReactNode, useContext, useState } from "react";

type GameModes = "solo" | "multiplayer" | undefined;
type Player = "O" | "X" | "";

interface AppContextProps {
  isPlayerSelection: boolean;
  setIsPlayerSelection: (value: boolean) => void;
  gameMode: GameModes;
  setGameMode: (value: GameModes) => void;
  playerPicked: Player;
  setPlayerPicked: (value: Player) => void;
  currentPlayer: Player;
  setCurrentPlayer: (value: Player) => void;
  gameWinner: Player;
  setGameWinner: (value: Player) => void;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  gameBoard: number[];
  setGameBoard: (value: number[]) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
  const [isPlayerSelection, setIsPlayerSelection] = useState<boolean>(true);
  const [gameMode, setGameMode] = useState<GameModes>(undefined);
  const [playerPicked, setPlayerPicked] = useState<Player>("O");
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [gameWinner, setGameWinner] = useState<Player>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [gameBoard, setGameBoard] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  return (
    <AppContext.Provider
      value={{
        isPlayerSelection,
        setIsPlayerSelection,
        gameMode,
        setGameMode,
        playerPicked,
        setPlayerPicked,
        currentPlayer,
        setCurrentPlayer,
        gameWinner,
        setGameWinner,
        openModal,
        setOpenModal,
        gameBoard,
        setGameBoard,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useAppContext must be used within a PasswordProvider`);
  }
  return context;
};
