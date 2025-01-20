import PropTypes from "prop-types";
import Button from "../Button/Button1";

const StartGame = ({ setIsGameStarted }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center xl:px-32 2xl:px-auto">
        <img
          src="/images/dices.png"
          alt="Dices"
          className="w-[400px] lg:w-[500px] xl:w-[649px] 2xl:w-[1050px]"
        />
        <div className="w-[300px] lg:w-[396px] xl:w-[528px] 2xl:w-[880px] flex flex-col items-end">
          <h1 className="poppins font-bold text-[54px] lg:text-7xl xl:text-8xl 2xl:text-[10rem] uppercase">
            Dice Game
          </h1>
          <Button title="Play Now" onClick={() => setIsGameStarted(true)} />
        </div>
      </div>
    </div>
  );
};

StartGame.propTypes = {
  setIsGameStarted: PropTypes.func.isRequired,
};

export default StartGame;
