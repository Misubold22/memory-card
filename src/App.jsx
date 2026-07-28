import { useState } from "react";
import { CardGrid } from "./components/CardGrid.jsx";
import { checkLoseCondition } from "./utils/checkLoseCondition.js";
import { shuffle } from "./utils/shuffle.js";

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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
    <>
      <div className="main">
        <h1>Memory Card Game</h1>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
        <section className="card-deck" aria-label="Playing cards">
          <CardGrid
            onCardClick={handleCardClick}
            cards={cards}
            setCards={setCards}
          />
        </section>
      </div>
    </>
  );
}

export default App;
