const COLOR = ["red", "orange", "blue", "purple", "brown", "#D2E0FB", "#D988B9"]

let changeColor = function(color) {
    const main = document.querySelector("main");
    main.style.backgroundColor = color;
}

function randomGen(arr) {
    let arrIndex = Math.floor(Math.random() * arr.length);
    return arrIndex;
}

function getRandomColor(arr) {
    return arr[randomGen(arr)]
}

function colornameDisplay(color) {
    const span = document.getElementsByClassName("color-display")[0].querySelector("span");
    span.innerText = color;
}

let button_click = document.getElementsByClassName("btn");
button_click[0].addEventListener("click", function() {
    let color = getRandomColor(COLOR);
    changeColor(color);
    colornameDisplay(color);
});



