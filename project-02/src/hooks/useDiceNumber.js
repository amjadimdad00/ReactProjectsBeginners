import { useState } from "react";

const useDiceNumber = (
  selectedNumber,
  setError,
  setScore,
  score,
  handleScoreChange
) => {
  const [diceNumber, setDiceNumber] = useState(null);

  const pickDiceNumber = () => {
    if (selectedNumber === null) {
      setError(true);
      return;
    }

    setError(false);

    const number = [1, 2, 3, 4, 5, 6];
    const randomIndex = Math.floor(Math.random() * number.length);
    const pickedNumber = number[randomIndex];
    setDiceNumber(pickedNumber);

    if (pickedNumber === selectedNumber) {
      setScore(score + 10);
    } else {
      handleScoreChange();
    }
  };

  return {
    diceNumber,
    pickDiceNumber,
  };
};

export default useDiceNumber;
