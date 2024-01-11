// Déclaration de la variable _initTime et initialisation avec le temps actuel
const _initTime = Date.now();

// Définition de la fonction getElapsedTime qui renvoie le temps écoulé depuis _initTime
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
}

// ------------------------------------------------------------------
// 3 manières de générer une couleur de fond aléatoire
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// Manière 1 (commentée car non utilisée dans le code)
/*
function randbckgrnd() {
  Math.floor(Math.random() * 255);
}
*/

// ------------------------------------------------------------------
// Manière 2
document.body.addEventListener('keydown', function (event) {
  const body = document.body;
  if (event.keyCode === 32) {
    function randomRGB() {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);

      return `rgb(${r}, ${g}, ${b})`;
    }

    // Appel de la fonction randomRGB et attribution de la couleur générée à la propriété de style
    body.style.backgroundColor = randomRGB();
  }
});

// ------------------------------------------------------------------
// Manière 3 (commentée car il y a une erreur de syntaxe)
/*
const randomColor = '#' + Math.floor(Math.random() * 256);
section.style.backgroundcolor = rgb(${randomColor()}, ${randomColor()}, ${randomColor()});
*/

// ------------------------------------------------------------------

// Sélection de l'élément 'ul'
const logList = document.querySelector('ul');
// Sélection de l'élément avec la classe 'displayedsquare-wrapper'
const actionSquareWrapper = document.querySelector('.displayedsquare-wrapper');

// Définition de la fonction duplicateButton qui crée un nouveau bouton avec la couleur spécifiée
function duplicateButton(color) {
  // Création d'un nouvel élément li avec le temps écoulé comme texte
  const newlog = document.createElement('li');
  newlog.innerText = getElapsedTime();
  // Ajout de l'élément li à la liste logList
  logList.appendChild(newlog);

  // Création d'un nouvel élément div avec la classe et la couleur spécifiées
  const newButton = document.createElement('div');
  newButton.classList.add('displayedsquare', color);
  // Ajout de l'élément div à actionSquareWrapper
  actionSquareWrapper.appendChild(newButton);
}

// Sélection de tous les éléments avec la classe 'actionsquare'
const actionSquares = document.querySelectorAll('.actionsquare');

// Ajout d'un écouteur d'événements 'click' à chaque carré d'action qui appelle la fonction duplicateButton
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', function (e) {
    // Récupération de la couleur du carré cliqué à partir de ses classes
    const color = e.target.classList[1];
    // Appel de la fonction duplicateButton avec la couleur spécifiée
    duplicateButton(color);
  });
}
