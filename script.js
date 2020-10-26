let easyLvl = document.querySelector('.choosing-list__easy.active').dataset('level');
let midLvl = document.querySelector('.choosing-list__middle').dataset('level');
let hardLvl = document.querySelectore('.choosing-list__hard').dataset('level');
midLvl.addEventListener('click', () => {
  easyLvl.classList.remove('active');
  midLvl.classList.add('active');
});

function getCards(arrLength) {
  let arr = Array(arrLength).fill(0);
  let rand = Math.floor(Math.random() * arrLength);
  arr[rand] = 1;
  
  return arr;
}

function getGameData(level) {
  let gameData = {
    cards: getCards(level),
    level: level
  }
  
  return gameData;
}

function checkGameResult(cardIndex) {
  if (getGameData(level).cards[cardIndex] > 0) {
    return true;
  } else {
    return false;
  }
}