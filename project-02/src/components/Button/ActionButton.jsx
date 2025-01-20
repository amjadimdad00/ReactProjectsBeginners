import PropTypes from "prop-types";
import Button2 from "./Button2";
import Button1 from "./Button1";

const ActionButtons = ({ setScore, setShowRules }) => {
  return (
    <div className="flex flex-col gap-6">
      <Button2
        title={"Reset Score"}
        onClick={() => setScore(0)}
        className="text-xs sm:text-sm md:text-lg 2xl:text-3xl"
      />
      <Button1
        title={"Show Rules"}
        onClick={() => setShowRules(true)}
        className="text-xs sm:text-sm md:text-lg !w-full max-xl:h-10 xl:h-14 2xl:text-3xl"
      />
    </div>
  );
};

ActionButtons.propTypes = {
  setScore: PropTypes.func.isRequired,
  setShowRules: PropTypes.func.isRequired,
};

export default ActionButtons;
