import PropTypes from "prop-types";

const DiceSection = ({ diceImage, instruction, onClick }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div onClick={onClick}>
        <img
          src={diceImage}
          alt="dice"
          className="w-24 md:w-36 lg:w-40 xl:w-48 2xl:w-80"
        />
      </div>
      <p className="poppins font-medium text-base md:text-lg xl:text-3xl 2xl:text-5xl">
        {instruction}
      </p>
    </div>
  );
};

DiceSection.propTypes = {
  diceImage: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
};

export default DiceSection;
