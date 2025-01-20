import PropTypes from "prop-types";

const TotalScore = ({ score }) => {
  return (
    <div className="max-w-150 xl:max-w-[200px] 2xl:max-w-96 text-center">
      <h1 className="text-xl sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl poppins">
        {score}
      </h1>
      <p className="text-sm sm:text-xl lg:text-2xl 2xl:text-5xl font-medium">
        Total Score
      </p>
    </div>
  );
};

TotalScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default TotalScore;
