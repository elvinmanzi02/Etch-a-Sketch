const gridContainer = document.querySelector(".gridContainer");

function sixteenGrids() {
    let rows = [];
    for (let i = 1 ; i <= 16 ; i++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.setProperty("border", "1px solid black");
        row.style.setProperty("width", "15px");
        row.style.setProperty("height", "15px");
        for(let j = 1 ; j <= 16 ; j++) {
            let cell = document.createElement("div");
            cell.className = "ceil";
            cell.style.setProperty("border", "1px solid black");
            cell.style.setProperty("width", "15px");
            cell.style.setProperty("height", "15px");
            row.appendChild(cell);
        }
        rows.push(row);
        
    }
    gridContainer.appendChild(rows[i]);
  
}

sixteenGrids();



