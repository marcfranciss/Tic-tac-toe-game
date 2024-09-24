import restartImg from "../../assets/images/icon-restart.svg";
import { useAppContext } from "../../context/AppContext";

export const GameRestartButton = () => {
  const { setOpenRestartModal } = useAppContext();
  return (
    <button
      type='button'
      className='restart-button btn-silver'
      onClick={() => setOpenRestartModal(true)}
      aria-controls='game-board'
      aria-label='Reset game'>
      <img className='restart-button__img' src={restartImg} alt='' />
    </button>
  );
};
