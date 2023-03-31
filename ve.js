//Infos cartes

const cardsArray = [
    {
    'name': 'shell',
    'img': 'blueshell.png',
  },
  {
    'name': 'star',
    'img': 'star.png',
  },
  {
    'name': 'bobomb',
    'img': 'bobomb.png',
  },
  {
    'name': 'mario',
    'img': 'mario.png',
  },
  {
    'name': 'luigi',
    'img': 'luigi.png',
  },
  {
    'name': 'peach',
    'img': 'peach.png',
  },
  {
    'name': '1up',
    'img': '1up.png',
  },
  {
    'name': 'mushroom',
    'img': 'mushroom.png',
  },
  {
    'name': 'thwomp',
    'img': 'thwomp.png',
  },
  {
    'name': 'bulletbill',
    'img': 'bulletbill.png',
  },
  {
    'name': 'coin',
    'img': 'coin.png',
  },
  {
    'name': 'goomba',
    'img': 'goomba.png',
  },
];

// Choisir la div avec un id root

const gameGrid = cardsArray
  .concat(cardsArray) //fusionner deux copies du tableau cardsArray
  .sort(() => 0.5 - Math.random()); //mélanger cartes de manière aléatoire avec fonction Math.random()

let firstGuess = ''; //variable initialisée comme chaîne vide
let secondGuess = ''; //idem firstGuess
let count = 0; //variable initialisée à 0 pour garder une trace du nombre de cartes séléctionnés
let previousTarget = null; //pour stocker la carte précédement sélectionnée
let delay = 1200; //définit durée animation lorsqu'une paire de cartes est sélectionnée

// Créer une section avec classe grid

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// Attacher la selection grid a la div game
game.appendChild(grid);

gameGrid.forEach(item => { //constante gameGrid utilise méthode forEach pour créer une carte pour chaque élément du tableau
  const { name, img } = item;

  const card = document.createElement('div'); //création carte ; card, classList, dataset : éléments repris dans CSS pour être configurés
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card); // grid= élément parent, card= élément enfant à ajouter à la liste des enfants de grid; utilisé ici pour les éléments enfants front et back
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => { //fonction match: sélectionne tous les éléments HTML ayant la classe "selected" et ajoute la classe "match" à chacun d'entre eux;
  const selected = document.querySelectorAll('.selected'); //méthode querySelectorAll renvoie une liste statique correspondant aux sélecteurs spécifiés; ici: renvoi aux éléments classe "selected"
  selected.forEach(card => { //fonction fléchée ajoute la classe "match" à chaque élément HTML séléctionné
    card.classList.add('match');
  });
};

const resetGuesses = () => { //fonction resetGuesses est appelée à chaque fois qu'il y a une correspondance entre les deux cartes sélectionnnées ou lorsque les deux cartes sélectionnées ne correspondent pas
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
  

});

