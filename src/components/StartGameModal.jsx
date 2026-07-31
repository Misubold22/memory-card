import { motion } from "framer-motion";

export const StartGameModal = ({ onClose }) => {
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
