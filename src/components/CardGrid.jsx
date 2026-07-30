import { useState, useEffect } from "react";
import { shuffle } from "../utils/shuffle.js";
import { motion } from "framer-motion";

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

  if (loading) return <h2 className="loading-msg">Loading...</h2>;
  if (error) return <div>Error: {error}</div>;

  console.log(cards);
  console.log(cards.code);

  return cards.map((card) => (
    <motion.article
      layout
      key={card.code}
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
      className="playing-card"
    >
      <div className="card-illustration">
        <img
          src={card.image}
          id={card.code}
          onClick={(e) => onCardClick(e.target.id)}
        />
      </div>
    </motion.article>
  ));
}
