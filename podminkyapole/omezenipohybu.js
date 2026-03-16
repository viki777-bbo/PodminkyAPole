const hrdina = document.getElementById("hrdina");

let x = 100;
let y = 100;

const krok = 10;
const velikost = 50;

document.addEventListener("keydown", function(event) {

    if (event.key === "w" || event.key === "W") y -= krok;
    if (event.key === "s" || event.key === "S") y += krok;
    if (event.key === "a" || event.key === "A") x -= krok;
    if (event.key === "d" || event.key === "D") x += krok;

    // omezení okraje
    if (x < 0) x = 0;
    if (y < 0) y = 0;

    if (x > window.innerWidth - velikost) {
        x = window.innerWidth - velikost;
    }

    if (y > window.innerHeight - velikost) {
        y = window.innerHeight - velikost;
    }

    hrdina.style.left = x + "px";
    hrdina.style.top = y + "px";
});