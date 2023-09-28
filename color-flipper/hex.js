const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

function randombitGen(arr){
    let randNum = Math.floor(Math.random() * arr.length);
    return `${arr[randNum]}`;
}

function hexCodeGen(arr){
    let hexcodeArr = ["#"];
    for(let i = 0; i < 6; i++){
        hexcodeArr.push(randombitGen(arr));
    }
    return hexcodeArr.join("");
}

function colorChange(hexArr){
    let main = document.querySelector("main");
    let hexColor = hexCodeGen(hexArr);
    let span = document.querySelector("span");
    span.innerText = hexColor;
    main.style.backgroundColor = hexColor;
}

let button = document.querySelector("btn");