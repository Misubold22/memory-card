import { useState, useEffect } from "react";
import "./App.css";

function CardGrid() {
  const [cards, setCards] = useState([]);
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
  }, []); // Runs only once on component mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(cards);
  console.log(cards.cards);

  function handleClick(e) {
    console.log(e);
  }

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
  return (
    <>
      <div className="main">
        <h1>Memory Card Game</h1>
        <section className="card-deck" aria-label="Playing cards">
          <CardGrid />
        </section>
      </div>
    </>
  );
}

export default App;
