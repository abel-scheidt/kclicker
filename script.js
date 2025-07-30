// Increment score on cookie click
const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');

cookie.addEventListener('click', () => {
  state.score += state.clickValue;
  scoreDisplay.textContent = state.score;
});

// Keys and defaults
const STORAGE_KEY = 'clickerGameState';

let state = {
score: 0,
clickValue: 1,
};

// Load saved state if any
function loadGame() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
                const loaded = JSON.parse(raw);
                state = { ...state, ...loaded };
                scoreDisplay.textContent = state.score;
        }
}

// Save state to storage
function saveGame() {
localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

setInterval(saveGame, 5000);

// Also save before page unload
window.addEventListener('beforeunload', saveGame);

// Initialize on load
window.onload = loadGame;

