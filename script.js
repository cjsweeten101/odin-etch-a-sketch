const container = document.querySelector("#container");
let grid_size = 16;
let row_size = 4;

let current_row = document.createElement("div");
container.appendChild(current_row);
for ( i = 1; i <= grid_size; i++ ) {
    new_div = document.createElement("div");
    current_row.appendChild(new_div);
    if ( i % row_size === 0 && i != 0 ) {
        current_row = document.createElement("div");
        container.appendChild(current_row);
    }
}