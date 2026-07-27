import { useState, useEffect } from "react";

function shuffle(array) {
  // Fisher-Yates shuffle algorithm, which ensures truly uniform random distribution.
  if (Array.isArray(array) && array.length === 0) return;
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function ShuffledCardGrid({ handleClick, cards }) {
  if (cards != null) {
    console.log("nu i null");
    return cards.map((card) => (
      <article key={card.code} className="playing-card">
        <div className="card-illustration">
          <img
            src={card.image}
            id={card.code}
            onClick={(e) => handleClick(e.target.id)}
          />
        </div>
      </article>
    ));
  }
}

function CardGrid({ handleClick, cards, setCards }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://deckofcardsapi.com/api/deck/new/draw/?count=10",
        );
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        const data = await response.json();

        setCards(data.cards);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [setCards]); // Runs only once on component mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(cards);
  console.log(cards.cards);

  return cards.map((card) => (
    <article key={card.code} className="playing-card">
      <div className="card-illustration">
        <img
          src={card.image}
          id={card.code}
          onClick={(e) => handleClick(e.target.id)}
        />
      </div>
    </article>
  ));
}

function App() {
  const [cards, setCards] = useState([]);
  const [shcards, setshCards] = useState(null);

  function handleClick(e) {
    console.log(e);
    setshCards(shuffle(cards));
    setCards([]);
    console.log(shcards);
  }

  function handleShClick(e) {
    console.log(e);
    setshCards(shuffle(shcards));
    //setshCards((prev) => shuffle(prev));
  }

  console.log(shcards);
  return (
    <>
      <div className="main">
        <h1>Memory Card Game</h1>
        <section className="card-deck" aria-label="Playing cards">
          <CardGrid
            handleClick={handleClick}
            cards={cards}
            setCards={setCards}
          />
          <ShuffledCardGrid handleClick={handleShClick} cards={shcards} />
        </section>
      </div>
    </>
  );
}

export default App;
