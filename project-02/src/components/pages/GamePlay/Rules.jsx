import PropTypes from "prop-types";
import Button1 from "../../Button/Button1";

const Rules = ({ showRules, setShowRules }) => {
  return (
    showRules && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="max-w-[800px] flex flex-col items-center mx-auto bg-[#fbf1f1] p-5 rounded-lg">
          <h2 className="text-2xl font-semibold text-center">
            How to play dice game
          </h2>
          <div className="mt-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Select any number.</li>
              <li>Click on the dice image to roll it.</li>
              <li>
                After clicking on the dice if the selected number is equal to
                the dice number
                <br /> you will get the same points as the dice.
              </li>
              <li>
                If you get the wrong guess, then 2 points will be deducted.
              </li>
              <li>The score doesn&apos;t goes below 0</li>
            </ul>
          </div>
          <Button1
            title={"Close"}
            className="mt-6 w-full max-w-[200px]"
            onClick={() => setShowRules(false)}
          />
        </div>
      </div>
    )
  );
};

Rules.propTypes = {
  showRules: PropTypes.bool.isRequired,
  setShowRules: PropTypes.func.isRequired,
};

export default Rules;
