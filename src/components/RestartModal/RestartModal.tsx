import { useAppContext } from "../../context/AppContext";
import OptionButton from "../Buttons/OptionButton";

interface RestartModalProps {
  onRestart: (value: boolean) => void;
}
export const RestartModal = ({ onRestart }: RestartModalProps) => {
  const { openRestartModal, setOpenRestartModal } = useAppContext();

  const handleRestartButton = () => {
    onRestart(true);
    setOpenRestartModal(false);
  };
  return (
    <dialog
      role='modal'
      open={openRestartModal}
      aria-atomic='true'
      aria-live='assertive'
      aria-label='Game status'>
      <div className='status-selectors'>
        <p className='draw__text'>RESTART GAME?</p>
        <div className='status-selector__buttons'>
          <OptionButton
            colorScheme={"silver"}
            btnText={"NO, CANCEL"}
            onClick={() => setOpenRestartModal(false)}
          />
          <OptionButton
            colorScheme={"yellow"}
            btnText={"YES, RESTART"}
            onClick={handleRestartButton}
          />
        </div>
      </div>
    </dialog>
  );
};
