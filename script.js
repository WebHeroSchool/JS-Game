for (let button of document.querySelectorAll('.choosing-list__item')) {
  button.addEventListener('click', function(event) {
    document.querySelector('.active').classList.remove('active');
    this.classList.add('active');
  });
}

document.querySelector('.first-part__button').addEventListener('click', function(event) {
  document.querySelector('.start-page').classList.add('off');
  document.querySelector('.game-page').classList.remove('off');
  document.querySelector('.game-page__levels').classList.remove('off');

  let level = document.querySelector('.active').dataset.level;
  console.log(level);

  for (let i=0; i<level; i++) {
    let card = document.querySelector('.hidden-page .levels__item').cloneNode(true);

    card.addEventListener('click', function(event) {
      console.log('Клик по карте!');
    });

    document.querySelector('.game-page__levels').append(card);
  };
})

function getCards(arrLength) {
  let arr = Array(arrLength).fill(0);
  let rand = Math.floor(Math.random() * arrLength);
  arr[rand] = 1;
  
  return arr;
}

function getGameData(level) {
  let gameData = getCards(level);

  return gameData;
}

function checkGameResult(cardIndex) {
  if (getGameData(level)[cardIndex] > 0) {
    return true;
  } else {
    return false;
  }
}