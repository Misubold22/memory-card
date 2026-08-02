# Memory Card Game

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

---

## Introduction

**Memory Card Game** is a single-page browser game built with React and Vite. Click a card to score a point, but click the same card twice and the game ends. The grid reshuffles after every click, so each round requires close attention.

**Live Demo**: [View Site](https://memory-card-game-coral.vercel.app/)

---

## Features

- **Single Page Application**: Game state and modals update instantly with no page refresh.
- **Live Card Data**: Card images are fetched from an external API on each new game.
- **Fisher-Yates Shuffle**: Ensures a uniformly random card order after every click.
- **Score Tracking**: Current score and best score are tracked across rounds.
- **Animated UI**: Card and modal transitions handled with Motion.
- **Component-Based Structure**: Game logic split into reusable React components and utility functions.

---

## Technologies Used

- **React 19**: Core UI library.
- **Vite**: Build tool and dev server.
- **Motion**: Animation library for transitions.
- **Fontsource Sora**: Typography.
- **Deck of Cards API**: Source of card data and images.
- **ESLint**: Code linting.
- **Prettier**: Code formatting.

---

## Project Structure

The file structure of the project is as follows:

```
memory-card/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── CardGrid.jsx        # Fetches cards and renders the grid
│   │   ├── Scoreboard.jsx      # Displays current and best score
│   │   ├── GameIntro.jsx       # Controls the intro modal
│   │   ├── StartGameModal.jsx  # Intro modal content
│   │   ├── RestartGame.jsx     # Controls the game-over modal
│   │   └── EndGameModal.jsx    # Game-over modal content
│   ├── utils/
│   │   ├── shuffle.js              # Fisher-Yates shuffle
│   │   └── checkLoseCondition.js   # Detects repeat clicks
│   ├── fonts/                  # Local font files
│   ├── App.jsx                 # Core game state and logic
│   └── main.jsx                # App entry point
├── package.json                # npm configuration
├── vite.config.js              # Vite configuration
├── index.html                  # Main HTML file
└── README.md                   # Project documentation
```

- **src/App.jsx**: Holds game state and score logic, and composes the components.
- **src/components/**: UI components for the grid, scoreboard, and modals.
- **src/utils/**: Shuffle and lose-condition helper functions.

---

## Usage

To set up and use the Memory Card Game, follow these steps:

```bash
git clone https://github.com/Misubold22/memory-card.git
cd memory-card
npm install
npm run dev
```

**Usage:**

- Start the game from the intro modal.
- Click a card to score a point.
- Avoid clicking the same card twice.
- Restart from the game-over modal to try to beat your best score.

## Credits

- **Card data and images**: https://deckofcardsapi.com/

---

## License

This project currently has no license specified.
