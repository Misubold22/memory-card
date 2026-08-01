import { motion } from "framer-motion";

export const EndGameModal = ({ onClose }) => {
  return (
    <motion.article
      className="game-intro"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
    >
      <section className="game-modal">
        <header className="game-over-modal__header">
          <div className="game-modal__title">Game Over</div>
        </header>
        <p className="game-over-modal__message">
          You clicked the same card twice!
        </p>
        <footer className="game-modal__actions">
          <button className="restart-game-btn" onClick={onClose}>
            Play Again
          </button>
        </footer>
      </section>
    </motion.article>
  );
};
