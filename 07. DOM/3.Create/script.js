// Fonction pour générer une couleur aléatoire
function generateRandomColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 100);
    return `hsl(${h},${s}%,${l}% )`;
}

const seuilLuminosite = 50; // Seuil de luminosité stocké dans une variable

// Sélection de l'élément <article>
const articleElement = document.querySelector('article');

// Liste des noms des apprenants (à remplacer par votre liste réelle)
const learners = ['Learner1', 'Learner2', 'Learner3'];

// Création et ajout des sections dans l'article
learners.forEach(learner => { 
    // Création de la section
    const sectionElement = document.createElement('section');
    
    // Stock la couleur aléatoire dans une variable
    const randomcol = generateRandomColor();
    
    // Définition de la couleur de fond
    sectionElement.style.backgroundColor = randomcol;

    // Récupération de la luminosité de la couleur générée
    const luminosite = getLuminosite(randomcol);

    // Comparaison avec la luminosité
    if (luminosite < seuilLuminosite) {
        sectionElement.style.color = '#FFFFFF'; // Texte en blanc pour les couleurs sombres
    } else {
        sectionElement.style.color = '#000000'; // Texte en noir pour les couleurs claires
    }

    // Création du paragraphe
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = learner;

    // Ajout du paragraphe à la section
    sectionElement.appendChild(paragraphElement);

    // Ajout de la section à l'article
    articleElement.appendChild(sectionElement);
});

function getLuminosite(color) {
    // Extraire la valeur de luminosité (L) de la couleur
    const [, , l] = color.match(/(\d+)/g).map(Number);
    return l;
}