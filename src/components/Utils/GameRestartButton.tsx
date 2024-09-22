import restartImg from "../../assets/images/icon-restart.svg";

export const GameRestartButton = () => {
  return (
    <button
      type='button'
      className='restart-button btn-silver'
      aria-controls='game-board'
      aria-label='Reset game'>
      <img className='restart-button__img' src={restartImg} alt='' />
    </button>
  );
};
