import { GameHeader } from "../GameHeader/GameHeader";
import { ScoreCards } from "../ScoreCards/ScoreCards";
import "./gameSolo.sass";

const GameSolo = () => {
  return (
    <section id='gameMode-solo'>
      <div className='gameMode-solo__container'>
        <header className='gameMode-solo__header'>
          <GameHeader />
        </header>
        <div id='game-board' className='cells_container' data-curr-user='o'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((numIndex) => {
            return (
              <div
                role='button'
                className='cell'
                data-index={numIndex}
                key={numIndex}
                tabIndex={0}>
                {/* <img src={oIcon} alt='' /> */}
              </div>
            );
          })}
        </div>
        <footer className='gameMode-solo__footer'>
          <ScoreCards />
        </footer>
      </div>
    </section>
  );
};

export default GameSolo;
