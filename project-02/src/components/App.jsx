import StartGame from "./pages/StartGame";
import GamePlay from "./pages/GamePlay/GamePlay";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <div>
      {isGameStarted ? (
        <GamePlay />
      ) : (
        <StartGame setIsGameStarted={setIsGameStarted} />
      )}
    </div>
  );
}

export default App;
