const container = document.querySelector("#container");
let current_row_size = 16;

const onGridChangeClick = function (e) {
    current_row_size = prompt("Enter a new size", current_row_size);

    while (current_row_size > 100) {
        current_row_size = prompt("Sorry value too big, please enter another", current_row_size);
    }
    //first delete current grid
    deleteGrid();

    createGrid(current_row_size);
}

const onRefreshClick = function (e) {
    deleteGrid();
    createGrid(current_row_size);
}

const onDivMouseEnter = function (e) {
    e.target.style.backgroundColor = "rgb(62, 70, 78)";
}

const createGrid = function (row_size) {
    let total_div_count = row_size* row_size;
    let current_row = document.createElement("div");
    container.appendChild(current_row);

    for ( i = 1; i <= total_div_count; i++ ) {
        new_div = document.createElement("div");
        current_row.appendChild(new_div);
        new_div.addEventListener("mouseenter", onDivMouseEnter);

        if ( i % row_size === 0 && i != total_div_count ) {
            current_row = document.createElement("div");
            container.appendChild(current_row);
        }
    }
}

const deleteGrid = function () {
    rows = container.querySelectorAll("div");
    console.log(rows)

    for ( i = 0; i < rows.length - 1; i++ ) {
        rows[i].remove();
    }
}

createGrid(current_row_size);