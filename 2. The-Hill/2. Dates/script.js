let now = new Date() // Today's date
let heure_now = now.getHours();

let div_1 = document.querySelector(".div_1");

div_1.innerHTML = 
    "La date et l'heure de Bruxelles est la suivante: <br>"
     + now.toLocaleTimeString('fr-BE') +

     "<br><br> La date et l'heure de Anchorage est la suivante: <br>"
     + now.toLocaleTimeString('fr-BE', { timeZone: 'America/Anchorage' }) +

     "<br><br> La date et l'heure de Bruxelles est la suivante: <br>"
     + now.toLocaleTimeString('fr-BE', {timeZone: 'Europe/Moscow'})