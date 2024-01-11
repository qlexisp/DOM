const inputField = document.getElementById('firstname');
const displayFirstNameSpan = document.getElementById('display-firstname');

inputField.addEventListener('keyup', function(event) {
    let inputValue = inputField.value;
    displayFirstNameSpan.innerText = inputValue;
});

///////////////////////////////////////////////// Exercice 1

const sectionElement = document.getElementById('a-hard-truth'); // Séléction de la section contenant le contenu caché
const inputField_2 = document.getElementById('age'); // Séléction de la section où l'utilisateur écrit son âge

inputField_2.addEventListener('keyup', function(event) { // On met un keyup à l'endroit où l'utilisateur intéragit
    let inputValue_2 = inputField_2.value; // On stock la réponse de l'utilisateur dans une variable

    if (inputValue_2 >= 18) { // Si la réponse est supérieure ou égale à 18
        sectionElement.style.visibility = 'visible'; } // On donne l'accès 
    else if (intputValue_2 < 18) { 
        sectionElement.style.visibility = 'hidden'; }
});

///////////////////////////////////////////////// Exercice 2

const passwordfield_pwd = document.getElementById('pwd'); // Séléction de la section du premier mot de passe
const passwordfield_pwd_confirm = document.getElementById('pwd-confirm'); // Séléction de la section du deuxième mot de passe

passwordfield_pwd.addEventListener('keyup', function(event) { // Keyup de la réponse au premier mot de passe
    const inputValue_3 = passwordfield_pwd.value; // Stock de la réponse dans une variable

passwordfield_pwd_confirm.addEventListener('keyup', function(event) {
    const inputValue_4 = passwordfield_pwd_confirm.value; // Stock de la deuxième réponse dans une variable

    if (inputValue_3 != inputValue_4) { // Si le premier mdp est différent au deuxième
        passwordfield_pwd_confirm.style.border = '1px solid red'; // alors on met une bordure rouge
        document.body.appendChild(SpanPassword);
    }
    else {
        passwordfield_pwd_confirm.style.border = '1px solid green'; // Sinon le mdp est bon et on met une bordure verte
    }

})});