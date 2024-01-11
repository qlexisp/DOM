const ol = document.querySelector('ol');
const sleepwell = ol.children[0];
const fastandfurious = ol.children[4];
ol.insertBefore(fastandfurious, sleepwell);
// Consigne #1

// Nommer les sections une par une
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
section.id = `Section_${index + 1}`;
});

// Nommer les h2 un par un
const h2 = document.querySelectorAll("h2");
h2.forEach((h2s, index) => {
h2s.id = `h2_${index + 1}`;
});

// Sélectionner les h2 spécifiques
const h2_2 = document.getElementById("h2_2");
const h2_3 = document.getElementById("h2_3");

// Sélectionner les sections spécifiques
const section_2 = document.getElementById("Section_2");
const section_3 = document.getElementById("Section_3");

// Vérifier si les éléments existent avant de tenter de les manipuler
if (h2_2 && h2_3 && section_2 && section_3) {
    // Retirer h2_3 de sa position actuelle et l'ajouter avant le premier enfant de section_2
    section_2.insertBefore(h2_3, section_2.firstChild);

    // Retirer h2_2 de sa position actuelle et l'ajouter avant le premier enfant de section_3
    section_3.insertBefore(h2_2, section_3.firstChild);
}
// Consigne 2

// Sélectionner l'élément avec l'ID "Section_3"
const sectionToRemove = document.getElementById("Section_3");

// Vérifier si l'élément existe avant de le supprimer
if (sectionToRemove) {
    // Supprimer l'élément
    sectionToRemove.remove();
}