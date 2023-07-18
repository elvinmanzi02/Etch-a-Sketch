// Selecting elements

const clearBtn = document.querySelector(".clear");
const eraseBtn = document.querySelector(".erase");
const darkBtn = document.querySelector(".dark");
const colorPicker = document.querySelector(".color-picker");
const chooseColor = document.querySelector(".choose-color");
const myInput = document.querySelector("#sizeSlider");
const gridContainer = document.querySelector(".grid-container")

// declaration of variables

let size = 16;

let hasClickedMixedColor = false;
let hasClickedDark = false;
let hasClicked = false;

// function 1, making grids

function gridsFunc(size) {

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    gridContainer.innerHTML = "";

    for(let i = 0 ; i < size*size ; i++) {
        const cell = document.createElement("div");
        cell.classList.add("myCell");
        gridContainer.appendChild(cell);
    }
}


// function 2, makes random color

function randomColor(event) {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const  blue = Math.floor(Math.random()*256);
    const rgbcolor = `rgb(${red}, ${green}, ${blue})`;
    event.target.style.backgroundColor = rgbcolor;
}


// function 3, clears grids

function clear() {
    const cells = document.querySelectorAll(".myCell");
    cells.forEach((cell) => {
      cell.style.backgroundColor = "";
      cell.removeEventListener("mouseover", erase);
      cell.removeEventListener("click", randomColor);
      cell.removeEventListener("click", () => {
        hasClicked = true;
      });
    });
    hasClickedMixedColor = false;
    hasClickedDark = false;
  }

// function 4 , adds mixed color to grids

function mixedColor() {
    const cells = document.querySelectorAll(".myCell");
    cells.forEach((cell) => {
        cell.addEventListener("click", randomColor);
        cell.addEventListener("click", () => {
            hasClickedMixedColor = true;
        });
        cell.addEventListener("mouseover",(event) => {
            if(hasClickedMixedColor) {
                randomColor(event);
            }
        });
    });
}
// function 5, adds black color to grids

function dark() {
    const cells = document.querySelectorAll(".myCell");
    cells.forEach((cell) => {
        cell.addEventListener("click", () => {
            cell.style.backgroundColor = "black";
        });
        cell.addEventListener("click", () => {
            hasClickedDark = true;
        });
        cell.addEventListener("mouseover",() => {
            if(hasClickedDark) {
                cell.style.backgroundColor = "black";
            }
        });
    });
}

// function 5, that erase

function erase(event) {
    event.target.style.backgroundColor = "";
  }

  // function 6, add erase function

function addErase() {
    const cells = document.querySelectorAll(".myCell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", erase);
    });
  }

  // Finally phase, adding eventlistener to buttons

  eraseBtn.addEventListener("click", () => {
    addErase();
  });

  myInput.addEventListener("input", (event) => {
    size = event.target.value;
    document.getElementById("sizeValue").textContent = `${size} x ${size}`;
    gridsFunc(size);
  });

  
  // Set the default size on page load
  myInput.value = size;
  document.getElementById("sizeValue").textContent = `${size} x ${size}`;
  

gridsFunc(size);
addErase(); // Add this line to call the addErase() function initially
clearBtn.addEventListener("click", clear);
colorPicker.addEventListener("click", mixedColor);
darkBtn.addEventListener("click", dark);