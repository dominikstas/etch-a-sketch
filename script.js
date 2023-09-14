let color = "black";

function create(size) {
    let content = document.querySelector(".content");
    let squares = content.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    content.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    content.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size*size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = "white";
        content.insertAdjacentElement("beforeend", square);
        square.addEventListener('mouseover', ()=> {
            square.style.backgroundColor = color}
            );
}}

create(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        create(input);
    }
    else {
        alert("Invalid number of squares");
    }
}

function changeColor(choice){
    color = choice;
}

