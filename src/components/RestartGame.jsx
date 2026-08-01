import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { EndGameModal } from "../components/EndGameModal.jsx";

export const RestartGame = ({
  setIsEndGameMOdalOpen,
  setIsOpen,
  setIsScoreboardOpen,
  setScore,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  function onClose() {
    setIsPopupOpen(false);
    setIsOpen(true);
    setIsScoreboardOpen(false);
    setScore(0);
  }

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => setIsEndGameMOdalOpen(false)}
    >
      {isPopupOpen && <EndGameModal onClose={onClose} />}
    </AnimatePresence>
  );
};
