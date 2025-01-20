import { useState } from "react";
import Rules from "./Rules";
import ActionButton from "../../Button/ActionButton";
import TotalScore from "../../TotalScore/TotalScore";
import DiceSection from "../../DiceSection/DiceSection";
import SelectNumber from "../../SelectNumber/SelectNumber";

import useDiceNumber from "../../../hooks/useDiceNumber";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [error, setError] = useState(false);

  const handleScoreChange = () => {
    if (score > 0) {
      setScore(score - 5);
    }
  };

  const { diceNumber, pickDiceNumber } = useDiceNumber(
    selectedNumber,
    setError,
    setScore,
    score,
    handleScoreChange
  );

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <div className="py-8 px-4 sm:px-10 lg:py-10 lg:px-16 xl:py-12 xl:px-20 flex justify-between items-center w-full">
        <TotalScore score={score} />
        <SelectNumber
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <div className="flex flex-col gap-9">
        <DiceSection
          onClick={pickDiceNumber}
          diceImage={`/images/dice/dice_${diceNumber ? diceNumber : 1}.png`}
          instruction="Click on Dice to roll"
        />
        <ActionButton setScore={setScore} setShowRules={setShowRules} />
        <Rules showRules={showRules} setShowRules={setShowRules} />
      </div>
    </div>
  );
};

export default GamePlay;
