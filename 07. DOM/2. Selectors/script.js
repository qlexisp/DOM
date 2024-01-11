const elements = document.querySelectorAll("important");
elements.forEach(element => { 
element.setAttribute("Title", "This is an important element");
});

//--

const imgElements = document.querySelectorAll("img");

imgElements.forEach(img => {
     if (!img.classList.contains("important")) {
        img.style.display = "none";
     }
    });

    //--

    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => {
        console.log("Texte du paragraphe : ", p.textContent);
    
        if (p.classList.length > 0) {
            console.log("Nom de la classe : ", p.classList[0]);
        }
    });



    //--
    function generateRandomColor () { // On crée une fonction pour générer une couleur aléatoire
        const r = Math.floor(Math.random() * 257);
        const v = Math.floor(Math.random() * 257);
        const b = Math.floor(Math.random() * 257);
        return (`rgb(${r}, ${v}, ${b})`);
        }
        
            paragraphs.forEach(p => { // Pour chaque paragraphe
                if (p.classList.contains("important")) { // Si le paragraphe contient la class "important"
                    const randomColor = generateRandomColor(); // On fait appel à la fonction randomColor
                        p.style.color = randomColor; // On attribue une couleur random au paragraphe
                }
            });

            ///////////////////////////

            function generateRandomColor () { 
    const r = Math.floor(Math.random() * 257);
    const v = Math.floor(Math.random() * 257);
    const b = Math.floor(Math.random() * 257);
    return (`rgb(${r}, ${v}, ${b})`);

// Fonction pour générer une couleur aléatoire

const randomColor = generateRandomColor();
const = becode ["Eleve1", "Eleve2", "Eleve3"];

// Je stock la fonction dans la variable randomColor & je crée un Array contenant les élèves