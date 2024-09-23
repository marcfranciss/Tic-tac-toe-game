import "./statusModal.sass";
import imgO from "../../assets/images/icon-o.svg";
import imgX from "../../assets/images/icon-x.svg";
import OptionButton from "../Buttons/OptionButton";
import { useAppContext } from "../../context/AppContext";

interface StatusModalProps {
  statusMsg: string;
  onNextRound: () => void;
}
export const StatusModal = ({ statusMsg, onNextRound }: StatusModalProps) => {
  const {
    gameWinner,
    openModal,
    setIsPlayerSelection,
    setOpenModal,
    setGameWinner,
  } = useAppContext();

  const handleQuitButton = () => {
    setIsPlayerSelection(true); // return to Player Selection
    setOpenModal(false); // close Modal
  };

  const handleNextRoundButton = () => {
    setGameWinner("");
    setOpenModal(false);
    onNextRound();
  };
  return (
    <dialog
      role='modal'
      open={openModal}
      aria-atomic='true'
      aria-live='assertive'
      aria-label='Game status'>
      <div className='status-selectors'>
        <h2 className='status-selector__header'>{statusMsg}</h2>
        <div className='status-selector__message'>
          <img
            className='message__img'
            src={gameWinner === "X" ? imgX : imgO}
            alt=''></img>
          <p className={`message__text ${gameWinner}-winner`}>
            TAKES THE ROUND
          </p>
        </div>
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
