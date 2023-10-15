function countIncrease(num) {
    return ++num;
}

function countDecrease(num) {
    return --num;
}

let count = document.getElementById("value");


let increase = document.querySelector(".increase");
increase.addEventListener('click', function(){
    let currCount = parseInt(count.innerText);
    count.innerText = countIncrease(currCount);
    
})


let decrease = document.querySelector(".decrease");
decrease.addEventListener('click', function(){
    let currCount = parseInt(count.innerText);
    count.innerText = countDecrease(currCount);
})

let reset = document.querySelector(".reset");
reset.addEventListener('click', function(){
    count.innerText = 0;
})


const observer = new MutationObserver(function(mutationsList, observer) {
    console.log(mutationsList);
    mutationsList.forEach(function(mutation) {
        if (parseInt(mutation.target.innerText) === -1) {
                handleTextContentChange("red");
            }
        else if(parseInt(mutation.target.innerText) == 0) {
            handleTextContentChange("#102A42");
        }
        else if(parseInt(mutation.target.innerText) == 1) {
            handleTextContentChange("green");
        }
        
    })});


// Configure the observer to watch for changes in character data (text content)
const config = {childList: true}; //this doesn't work with subtree though

// Start observing the target element
observer.observe(document.getElementById("value"), config);

// Callback function to handle the change
function handleTextContentChange(color) {
    count.style.color = color;
}
