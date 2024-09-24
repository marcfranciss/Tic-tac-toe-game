import "./statusModal.sass";
import imgO from "../../assets/images/icon-o.svg";
import imgX from "../../assets/images/icon-x.svg";
import OptionButton from "../Buttons/OptionButton";
import { useAppContext } from "../../context/AppContext";

interface StatusModalProps {
  statusMsg: string;
  onNextRound: (value: boolean) => void;
}
export const StatusModal = ({ statusMsg, onNextRound }: StatusModalProps) => {
  const {
    gameWinner,
    openModal,
    setIsPlayerSelection,
    setOpenModal,
    setGameWinner,
    isGameDraw,
    setIsGameDraw,
  } = useAppContext();

  const handleQuitButton = () => {
    setIsPlayerSelection(true); // return to Player Selection
    setOpenModal(false); // close Modal
  };

  const handleNextRoundButton = () => {
    setGameWinner("");
    setOpenModal(false);
    setIsGameDraw(false);
    onNextRound(true);
  };
  return (
    <dialog
      role='modal'
      open={openModal}
      aria-atomic='true'
      aria-live='assertive'
      aria-label='Game status'>
      <div className='status-selectors'>
        {isGameDraw ? (
          <p className='draw__text'>ROUND TIED</p>
        ) : (
          <div className='winner__text'>
            <h2 className='status-selector__header'>{statusMsg}</h2>
            <div className='status-selector__message'>
              <img
                className='message__img'
                src={gameWinner === "X" ? imgX : imgO}
                alt=''
              />
              <p className={`message__text ${gameWinner}-winner`}>
                TAKES THE ROUND
              </p>
            </div>
          </div>
        )}
        <div className='status-selector__buttons'>
          <OptionButton
            colorScheme={"silver"}
            btnText={"QUIT"}
            onClick={handleQuitButton}
          />
          <OptionButton
            colorScheme={"yellow"}
            btnText={"NEXT ROUND"}
            onClick={handleNextRoundButton}
          />
        </div>
      </div>
    </dialog>
  );
};
