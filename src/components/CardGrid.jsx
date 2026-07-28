import { useState, useEffect } from "react";
import { shuffle } from "../utils/shuffle.js";

export function CardGrid({ onCardClick, cards, setCards }) {
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
        //setCards(data.cards);
        setCards(shuffle(data.cards));
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
  console.log(cards.code);

  return cards.map((card) => (
    <article key={card.code} className="playing-card">
      <div className="card-illustration">
        <img
          src={card.image}
          id={card.code}
          onClick={(e) => onCardClick(e.target.id)}
        />
      </div>
    </article>
  ));
}
