document.addEventListener('DOMContentLoaded', () => {
  const colors = ['#FF6347', '#3CB371', '#1E90FF', '#FFD700', '#DA70D6', '#FF4500', '#32CD32', '#8A2BE2', '#00CED1', '#FF1493', '#20B2AA', '#F4A460'];
  let shuffledColors = [];
  let openCards = [];
  let matchedPairs = 0;
  let moves = 0;
  let timerInterval;
  let gameTime = 0;
  let timerStarted = false;
  let currentRound = 1;
  let totalRounds = 1;
  let player1 = '';
  let player2 = '';
  let currentPlayer = 1;
  let player1Stats = { moves: 0, time: 0 };
  let player2Stats = { moves: 0, time: 0 };

  const gameBoard = document.getElementById('gameBoard');
  const restartButton = document.getElementById('restart');
  const startButton = document.getElementById('startGame');
  const resetSettingsButton = document.getElementById('resetSettings');
  const difficultySelect = document.getElementById('difficulty');
  const cardsSelect = document.getElementById('cards');
  const playersSelect = document.getElementById('players');
  const player1NameInput = document.getElementById('player1Name');
  const player2NameInput = document.getElementById('player2Name');
  const roundsInput = document.getElementById('rounds');
  const timerDisplay = document.getElementById('timer');
  const movesDisplay = document.getElementById('moves');
  const resultDisplay = document.getElementById('result');
  const winnerNameDisplay = document.getElementById('winnerName');
  const winnerStatsDisplay = document.getElementById('winnerStats');
  const nextRoundButton = document.getElementById('nextRound');

  // Створення дошки гри
  const createBoard = (size = 16) => {
    const pairs = size / 2;
    shuffledColors = shuffle(colors.slice(0, pairs).concat(colors.slice(0, pairs)));
    gameBoard.innerHTML = '';
    shuffledColors.forEach((color, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.value = color;
      card.dataset.index = index;

      const colorDiv = document.createElement('div');
      colorDiv.classList.add('color');
      colorDiv.style.backgroundColor = '#ccc'; // картки будуть сірими на початку

      card.appendChild(colorDiv);
      card.addEventListener('click', onCardClick);
      gameBoard.appendChild(card);
    });

    const gridSize = Math.sqrt(size);
    gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`;
  };

  // Перемішування масиву
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  // Обробник події для відкриття карток
  const onCardClick = (e) => {
    const card = e.target.closest('.card');
    if (card.classList.contains('flipped') || openCards.length === 2) return;

    // Відкриваємо картку
    card.classList.add('flipped');
    const colorDiv = card.querySelector('.color');
    colorDiv.style.backgroundColor = card.dataset.value; // відкриваємо картку і показуємо колір
    openCards.push(card);

    if (openCards.length === 2) {
      checkMatch();
    }
  };

  // Перевірка чи є збіг
  const checkMatch = () => {
    moves++;
    movesDisplay.innerText = `Кількість ходів: ${moves}`;
    const [card1, card2] = openCards;

    if (card1.dataset.value === card2.dataset.value) {
      matchedPairs++;
      if (matchedPairs === shuffledColors.length / 2) {
        clearInterval(timerInterval);
        setTimeout(() => {
          showResults();
        }, 100);
      }
      openCards = [];
    } else {
      setTimeout(() => {
        card1.querySelector('.color').style.backgroundColor = '#ccc'; // закриваємо картку назад
        card2.querySelector('.color').style.backgroundColor = '#ccc';
        card1.classList.remove('flipped'); // Видаляємо клас flipped
        card2.classList.remove('flipped'); // Видаляємо клас flipped
        openCards = [];
      }, 1000);
    }
  };

  // Функція для відображення результатів
  const showResults = () => {
    const gameTimeFormatted = formatTime(gameTime);
    if (currentPlayer === 1) {
      player1Stats.moves = moves;
      player1Stats.time = gameTime;
      winnerNameDisplay.innerText = `Переможець: ${player1}`;
      winnerStatsDisplay.innerText = `Кількість ходів: ${moves}, Час: ${gameTimeFormatted}`;
    } else {
      player2Stats.moves = moves;
      player2Stats.time = gameTime;
      winnerNameDisplay.innerText = `Переможець: ${player2}`;
      winnerStatsDisplay.innerText = `Кількість ходів: ${moves}, Час: ${gameTimeFormatted}`;
    }

    resultDisplay.classList.remove('hidden');
    nextRoundButton.classList.remove('hidden');
  };

  // Форматування часу
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Старт гри
  const startGame = () => {
    player1 = player1NameInput.value || 'Гравець 1';
    player2 = player2NameInput.value || 'Гравець 2';
    totalRounds = parseInt(roundsInput.value, 10);

    currentRound = 1;
    matchedPairs = 0;
    moves = 0;
    gameTime = 0;
    openCards = [];

    const cardCount = parseInt(cardsSelect.value);
    createBoard(cardCount);
    startTimer();
    timerDisplay.innerText = 'Час: 00:00';
    movesDisplay.innerText = 'Кількість ходів: 0';
    resetSettingsButton.disabled = true;
    startButton.disabled = true;
    restartButton.classList.remove('hidden');
  };

  // Функція для старту таймера
  const startTimer = () => {
    if (!timerStarted) {
      timerInterval = setInterval(() => {
        gameTime++;
        timerDisplay.innerText = `Час: ${formatTime(gameTime)}`;
      }, 1000);
      timerStarted = true;
    }
  };

  // Функція для перезапуску гри
  const restartGame = () => {
    startGame();
    resultDisplay.classList.add('hidden');
    nextRoundButton.classList.add('hidden');
    restartButton.classList.remove('hidden');
  };

  // Обробник події для кнопки "Розпочати гру"
  startButton.addEventListener('click', startGame);

  // Обробник події для кнопки "Рестарт"
  restartButton.addEventListener('click', restartGame);

  // Обробник події для кнопки "Скинути налаштування"
  resetSettingsButton.addEventListener('click', () => {
    location.reload();
  });
});
