const prekazky = [
    { x: 200, y: 150 },
    { x: 400, y: 300 },
    { x: 300, y: 200 }
];

const velikost = 50;

// vytvoření překážek
for (let i = 0; i < prekazky.length; i++) {

    let blok = document.createElement("div");

    blok.textContent = "🧱";
    blok.style.position = "absolute";
    blok.style.left = prekazky[i].x + "px";
    blok.style.top = prekazky[i].y + "px";
    blok.style.fontSize = "50px";

    document.body.appendChild(blok);
}

// kontrola kolize
document.addEventListener("keydown", function(event) {

    let novaX = x;
    let novaY = y;

    if (event.key === "w" || event.key === "W") novaY -= 10;
    if (event.key === "s" || event.key === "S") novaY += 10;
    if (event.key === "a" || event.key === "A") novaX -= 10;
    if (event.key === "d" || event.key === "D") novaX += 10;

    let koliduje = false;

    for (let i = 0; i < prekazky.length; i++) {

        if (
            novaX < prekazky[i].x + velikost &&
            novaX + velikost > prekazky[i].x &&
            novaY < prekazky[i].y + velikost &&
            novaY + velikost > prekazky[i].y
        ) {
            koliduje = true;
        }
    }

    if (koliduje) {
        event.preventDefault();
    }

});