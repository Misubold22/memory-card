import { useState } from "react";
import { CardGrid } from "./components/CardGrid.jsx";
import { checkLoseCondition } from "./utils/checkLoseCondition.js";
import { shuffle } from "./utils/shuffle.js";

import { motion, AnimatePresence, MotionConfig } from "framer-motion";

function Scoreboard({ score, bestScore }) {
  return (
    <motion.section
      className="game-scoreboard"
      aria-label="Scoreboard"
      layout
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        layout: {
          duration: 0.45,
          ease: "easeInOut",
        },
      }}
    >
      <p className="score">
        Score:<strong>{score}</strong>
      </p>
      <p className="best-score">
        Best Score:<strong>{bestScore}</strong>
      </p>
    </motion.section>
  );
}

const GameIntro = ({ setIsOpen }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsOpen(true)}>
      {isPopupOpen && <StartGameModal onClose={() => setIsPopupOpen(false)} />}
    </AnimatePresence>
  );
};

const StartGameModal = ({ onClose }) => {
  return (
    <motion.article
      className="game-intro"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      <h1 className="game-title">Memory Card Game</h1>{" "}
      <section className="game-intro-card">
        <header className="game-intro-card__header">
          <div className="game-intro-card__title">How To Play</div>
        </header>
        <p className="game-intro-card__message">
          Click each card once. Repeat and lose!
        </p>
        <footer className="game-intro-card__actions">
          <button className="start-game-btn" onClick={onClose}>
            Start Game
          </button>
        </footer>
      </section>
    </motion.article>
  );
};

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
