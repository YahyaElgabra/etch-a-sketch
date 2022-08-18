const container = document.querySelector("#container");
const rowLabel = document.querySelector("#rowLabel");
const colLabel = document.querySelector("#colLabel");
const rowSlider = document.querySelector("#rowSlider");
const colSlider = document.querySelector("#colSlider");

rowSlider.onmousemove = () => updateRow();
colSlider.onmousemove = () => updateCol();
rowSlider.onchange = () => makeGrid();
colSlider.onchange = () => makeGrid();

function makeGrid() {  
    let rows = rowSlider.value;
    let columns = colSlider.value;  
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

function updateRow() {
    rowLabel.textContent = `${rowSlider.value} rows`;
  }

function updateCol() {
    colLabel.textContent = `${colSlider.value} columns`;
  }