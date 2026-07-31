import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { StartGameModal } from "../components/StartGameModal.jsx";

export const GameIntro = ({ setIsOpen }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsOpen(true)}>
      {isPopupOpen && <StartGameModal onClose={() => setIsPopupOpen(false)} />}
    </AnimatePresence>
  );
};
