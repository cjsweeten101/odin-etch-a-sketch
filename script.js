const container = document.querySelector("#container");
let row_size = 16;
let grid_size = row_size * row_size;

let current_row = document.createElement("div");
container.appendChild(current_row);
for ( i = 1; i <= grid_size; i++ ) {
    new_div = document.createElement("div");
    current_row.appendChild(new_div);
    if ( i % row_size === 0 && i != grid_size ) {
        current_row = document.createElement("div");
        container.appendChild(current_row);
    }
}