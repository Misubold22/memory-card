export function checkLoseCondition(clickedCards, clickedCard) {
  const loseCondition = clickedCards.filter(
    (card) => card.code === clickedCard,
  );

  if (loseCondition.length !== 0) {
    return true;
  }
}
