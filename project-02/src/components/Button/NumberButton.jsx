import PropTypes from "prop-types";

const NumberButton = ({
  onClick,
  className = "",
  selectedNumber,
  ...props
}) => {
  const buttonNumber = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex gap-2 xl:gap-6">
      {buttonNumber.map((number) => {
        const isSelected = selectedNumber === number;
        const buttonStyles = `border 2xl:border-4 border-black poppins font-semibold text-sm w-6 h-6 sm:text-base sm:w-9 sm:h-9 lg:text-lg lg:w-12 lg:h-12 xl:text-2xl 2xl:w-24 2xl:h-24 2xl:text-4xl ${
          isSelected ? "bg-black text-white" : "bg-white text-black"
        }`;

        return (
          <button
            key={number}
            onClick={() => onClick(number)}
            className={`${buttonStyles} ${className}`}
            {...props}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};

NumberButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  selectedNumber: PropTypes.number,
};

export default NumberButton;
