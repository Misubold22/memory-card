import { useState } from "react";
import { CardGrid } from "./components/CardGrid.jsx";
import { Scoreboard } from "./components/Scoreboard.jsx";
import { GameIntro } from "./components/GameIntro.jsx";
import { checkLoseCondition } from "./utils/checkLoseCondition.js";
import { shuffle } from "./utils/shuffle.js";

import { motion, AnimatePresence, MotionConfig } from "framer-motion";

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function endGame() {
    setClickedCards([]);
    setBestScore((prev) => Math.max(prev, score));
    setScore(0);
  }

  function updateGame(clickedCard) {
    setClickedCards((prev) => [...prev, { code: clickedCard }]);
    setScore((prev) => prev + 1);
    setCards((prev) => shuffle(prev));
  }

  function handleCardClick(clickedCard) {
    if (checkLoseCondition(clickedCards, clickedCard)) {
      endGame();
      return;
    }

    updateGame(clickedCard);
  }

  console.log(clickedCards);

  return (
    <main className="game-container">
      <header className="game-header">
        <AnimatePresence>
          {isOpen && <Scoreboard score={score} bestScore={bestScore} />}
        </AnimatePresence>
      </header>
      <GameIntro setIsOpen={setIsOpen} />
      <section className="card-deck" aria-label="Playing cards">
        <AnimatePresence>
          {isOpen && (
            <CardGrid
              onCardClick={handleCardClick}
              cards={cards}
              setCards={setCards}
            />
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default App;
