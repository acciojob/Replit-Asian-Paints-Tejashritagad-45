const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

changeButton.addEventListener("click", () => {
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    // Make all grid cells transparent first
    const allCells = document.querySelectorAll(".grid-item");
    allCells.forEach(cell => {
        cell.style.backgroundColor = "transparent";
    });

    // Change the color of the selected block
    const selectedCell = document.getElementById(blockId);
    if (selectedCell) {
        selectedCell.style.backgroundColor = color;
    } else {
        alert("Invalid block id! Enter a number between 1 and 9.");
    }
});

// Reset button → make all cells transparent
resetButton.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".grid-item");
    allCells.forEach(cell => {
        cell.style.backgroundColor = "transparent";
    });
});

