import { motion } from "framer-motion";

export function Scoreboard({ score, bestScore }) {
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
