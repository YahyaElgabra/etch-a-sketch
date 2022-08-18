// important elements
const container = document.querySelector("#container");
const rowLabel = document.querySelector("#rowLabel");
const colLabel = document.querySelector("#colLabel");
const rowSlider = document.querySelector("#rowSlider");
const colSlider = document.querySelector("#colSlider");
const clear = document.querySelector("#clear");
const brushSlider = document.querySelector("#brushType");
const brushLabel = document.querySelector("#brushLabel");
const brush = document.querySelector("#brush");
const colorWheel = document.createElement("input");
colorWheel.type = "color";
colorWheel.id = "color";

// event listeners
rowSlider.onmousemove = () => updateRow();
colSlider.onmousemove = () => updateCol();
rowSlider.onchange = () => makeGrid();
colSlider.onchange = () => makeGrid();
brushSlider.onmousemove = () => {
    if (brushSlider.value == 1) {
        brushLabel.textContent = "black brush";
    } else if (brushSlider.value == 2) {
        brushLabel.textContent = "eraser";
    } else if (brushSlider.value == 3) {
        brushLabel.textContent = "rainbow";
    } else {
        brushLabel.textContent = "choose your color";
    }
}
brushSlider.onchange = () => {
    if (brushSlider.value == 4) {
        brush.appendChild(colorWheel);
    } else {
        while(brush.children.length > 3) {
            brush.removeChild(brush.lastChild);
        }
    }
}
clear.addEventListener("click", () => {
    makeGrid();
})


makeGrid(); // makes grid at the start 

// functions
function makeGrid() {   
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < rowSlider.value; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (j = 0; j < colSlider.value; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            color(cell);
            row.appendChild(cell);
        };
    }
}

function updateRow() {
    rowLabel.textContent = `${rowSlider.value} rows`;
  }

function updateCol() {
    colLabel.textContent = `${colSlider.value} columns`;
  }

// helper function for makeGrid
function color(cell) {
    cell.addEventListener("mouseover", e => {
        if (e.buttons == 1){
            if (brushSlider.value == 1) {
                cell.style.backgroundColor = "black";
            } else if (brushSlider.value == 2) {
                cell.style.backgroundColor = "white";
            } else if (brushSlider.value == 3) {
                let r = Math.floor(Math.random() * 256)
                let g = Math.floor(Math.random() * 256)
                let b = Math.floor(Math.random() * 256)
                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else if (brushSlider.value == 4) {
                cell.style.backgroundColor = colorWheel.value;
            }
        } 
    })
}