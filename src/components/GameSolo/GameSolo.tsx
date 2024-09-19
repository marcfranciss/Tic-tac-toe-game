import "./gameSolo.sass";
import oIcon from "@images/icon-o.svg";

type Props = {};

const GameSolo = (props: Props) => {
  return (
    <section id='gameMode-solo'>
      <div className='gameMode-solo__container'>
        <header className='gameMode-solo__header'></header>
        <div className='cells_container' data-curr-user='o'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((numIndex) => {
            return (
              <div className='cell' data-index={numIndex} key={numIndex}>
                {/* <img src={oIcon} alt='' /> */}
              </div>
            );
          })}
        </div>
        <footer className='gameMode-solo__footer'>
          <div className='gameMode-solo__scoreboard'></div>
        </footer>
      </div>
    </section>
  );
};

export default GameSolo;
