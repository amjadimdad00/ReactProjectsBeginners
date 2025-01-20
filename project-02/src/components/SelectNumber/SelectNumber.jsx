import PropTypes from "prop-types";
import Button from "../Button/NumberButton";

const SelectNumber = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const handleButtonClick = (number) => {
    setSelectedNumber(number);
    setError(false);
  };

  return (
    <>
      <div className="flex flex-col items-end gap-2 2xl:gap-8">
        {error ? (
          <p className="poppins text-red-600 font-medium text-xs sm:text-base lg:text-lg xl:text-2xl 2xl:text-5xl">
            You haven&apos;t selected any number
          </p>
        ) : (
          ""
        )}
        <Button selectedNumber={selectedNumber} onClick={handleButtonClick} />
        <h1 className="poppins text-sm font-semibold sm:text-base lg:text-xl 2xl:text-5xl">
          Select Number
        </h1>
      </div>
    </>
  );
};

SelectNumber.propTypes = {
  error: PropTypes.bool.isRequired,
  setError: PropTypes.func.isRequired,
  selectedNumber: PropTypes.number,
  setSelectedNumber: PropTypes.func.isRequired,
};

export default SelectNumber;
