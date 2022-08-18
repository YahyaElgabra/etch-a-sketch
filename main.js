const container = document.querySelector("#container");

function makeGrid(rows, columns) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < rows; i++) {
        let white = document.createElement("div");
        white.classList.add("row");
        container.appendChild(white);
        for (j = 0; j < columns; j++) {
            let black = document.createElement("div");
            black.classList.add("cell");
            white.appendChild(black);
        };
    }
}
