export function shuffle(array) {
  // Fisher-Yates shuffle algorithm, which ensures truly uniform random distribution.
  if (Array.isArray(array) && array.length === 0) return;
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
