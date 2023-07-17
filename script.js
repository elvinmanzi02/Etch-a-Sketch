// calling elements

const clearBtn = document.querySelector(".clear");
const eraseBtn = document.querySelector(".erase");
const darkBtn = document.querySelector(".dark");
const colorPicker = document.querySelector(".color-picker");
const chooseColor = document.querySelector(".choose-color");
const myInput = document.querySelector("#sizeSlider");
const gridContainer = document.querySelector(".grid-container")

size = 16;

let hasClicked = false;

// function to make grids

function gridsFuc(size) {

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0 ; i < size*size ; i++) {
        const cell = document.createElement("div");
        cell.classList.add("myCell");
        gridContainer.appendChild(cell);
    }
}


// function that make random color

function randomColor(event) {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const  blue = Math.floor(Math.random()*256);
    const rgbcolor = `rgb(${red}, ${green}, ${blue})`;
    event.target.style.backgroundColor = rgbcolor;
}


// function that clear 

function clear() {
    const cells = document.querySelectorAll(".myCell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "";
    });
}

// mixed color function

function mixedColor() {
    const cells = document.querySelectorAll(".myCell");
    cells.forEach((cell) => {
        cell.addEventListener("click", randomColor);
        cell.addEventListener("click", () => {
            hasClicked = true;
        });
        cell.addEventListener("mouseover",(event) => {
            if(hasClicked) {
                randomColor(event);
            }
        });
    });
}
// dark function

function dark() {
    const cells = document.querySelectorAll(".myCell");
    cells.forEach((cell) => {
        cell.addEventListener("click", () => {
            cell.style.backgroundColor = "black";
        });
        cell.addEventListener("click", () => {
            hasClicked = true;
        });
        cell.addEventListener("mouseover",() => {
            if(hasClicked) {
                cell.style.backgroundColor = "black";
            }
        });
    });
}

// function that erase
function erase(event) {
    event.target.style.backgroundColor = "";
  }

  // add erase function
function addErase() {
    const cells = document.querySelectorAll(".myCell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", erase);
    });
  }

  eraseBtn.addEventListener("click", () => {
    addErase();
  });

  addErase();

gridsFuc(size);
clearBtn.addEventListener("click", clear);
colorPicker.addEventListener("click", () => {
    mixedColor();
});
mixedColor();

darkBtn.addEventListener("click", () => {
    dark()
});
dark();
