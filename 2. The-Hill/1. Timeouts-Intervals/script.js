let text = ["W", "i", "l", "s", "o", "n", "-", "3"];
  let div = document.querySelector(".typewriter");
  let index = 0;

  function addText() {
    intervalId = setInterval(() => {
      if (index < text.length) {
        div.textContent += text[index];
        index++;
      } else {
        clearInterval();
        setTimeout(() => {
          div.textContent = ""; // Efface le texte après l'intervalle
          if (div.textContent === "") {
          }
        }, 1000);
      }
    }, 500);
  }
  document.addEventListener("DOMContentLoaded", addText);

  ////

let second = 0;
let minute = 1;
let div2 = document.querySelector(".heure");
let div3 = document.querySelector(".minute");
let interval = setInterval(Heure, 1000);
function Heure() {
div2.textContent =`${second} seconde(s)`;
second++;
if (second > 60) {
    div3.textContent =`${minute} minute(s)`;
second = 0;
minute++;
}
}