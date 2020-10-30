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
  setLevel = Number(level);

  for (let i=0; i<level; i++) {
    let card = document.querySelector('.hidden-page .levels__item').cloneNode(true);

    card.addEventListener('click', function(event) {
      let setCollection = document.querySelectorAll('.game-page__levels .levels__item');
      let cardIndex = [ ...setCollection ].indexOf(this);
      let gameResult = checkGameResult(cardIndex, setLevel);

      if (gameResult === true) {
        card.classList.add('card__bug');
        card.addEventListener('click', menu);
      } else {
        card.classList.add('card__game-over');
        card.addEventListener('click', menu);
      }
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

function checkGameResult(cardIndex, level) {
  if (getGameData(level)[cardIndex] > 0) {
    return true;
  } else {
    return false;
  }
}

function menu() {
  location.reload();
}