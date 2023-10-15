reviews = [
   
    {
        "name": "Shinchan",
        "desc": "Mischievous though lovely",
        "review": "That mischievous but carefree childhood hero😍😎! He taught me to ignore the haters😝 and be my goofy self😁, My Only childhood role model! Let's be real, I was short on role models🙄! Blame him for my crazy laughter!",
        "image_src": "shinchan.jpg"
    },

    {
        "name": "Doraemon",
        "desc": "22nd-century cat",
        "review": "Doraemon's 22nd-century gadgets gave me future plans of time travel as a kid💃! And I need to admit it, was I a sadist kid😈 who laughed watching Nobita's struggles And what abt Gian's singing just like mine?? ",
        "image_src": "doraemon.png"
    },

    {
        "name": "Chota Bheem",
        "desc": "Does he need an intro",
        "review": "Bheem, Bheem, and the endless supply of ladoos! But let's be real,😒🙄 what kind of king was Indraverma, huh? Without Bheem, who'd rescue Dholakpur from Mangal Singh's mischief? Thank god now folks are elected😌!",
        "image_src": "Bheem.jpg"
    },

    {
        "name": "Thomas",
        "desc": "an ever overwrought cat",
        "review": "Oh, Tom and Jerry's endless chase 😿 and Tom's hilarious antics! Tom was such an ever irritated cat,😨🤯 why didn't Tom ever learn, Must've been like me🙄? Also lately I have been feeling so like Tom, and I get you dude.🤗 ",
        "image_src": "Tom.jpg"
    },

    {
        "name": "Oggy",
        "desc": "Just another ever anxious Cat",
        "review": "Well, The Hindi Dubbing is lit🔥!! Also for some reason I found Oggy really cool and god knows what for🤷‍♂️? Maybe because both of us are so alike.🤔",
        "image_src": "Oggy.jpg"
    },

    {
        "name": "Upasna Singh",
        "desc": "A struggling college student🙄😂",
        "review": "Hey there! Bet you know I'm all about taking life seriously, isn't it 😎😎! If you made it here, you've got time to spare, huh? Props to your commitment! Drop a comment if anything tickled you.😁",
        "image_src": "mypic.png"
    }
    
]


let forwardButton = document.querySelector(".fa-chevron-right");
let backButton = document.querySelector(".fa-chevron-left");
let surpriseButton = document.querySelector(".surprise-box");


class reviewCounter {
    constructor(){
        this._counter = 0;
    }

    get CounterValue() {
        return this._counter;
    }

    set CounterValue(value) {
        if (typeof(value) != "number" || !Number.isInteger(value)){
            throw new Error ("Number must be integer.")
        }

        if (value < 0){
            this._counter = (value % reviews.length == 0)? 0 : value % reviews.length + reviews.length; 
        }

        else{
            this._counter = value % reviews.length;}
    }
}

function changeReview(reviewNum) {
    let image = document.querySelector("img");
    let name = document.querySelector(".name-holder");
    let desc = document.querySelector(".desc-holder");
    let review = document.querySelector(".review-text-holder");
    image.src = reviews[reviewNum]["image_src"];
    name.innerHTML = reviews[reviewNum]["name"];
    desc.innerHTML = reviews[reviewNum]['desc'];
    review.innerHTML = reviews[reviewNum]['review'];
}

let counterStatus = new reviewCounter();

forwardButton.addEventListener("click", () => {
    counterStatus.CounterValue += 1;
    changeReview(counterStatus.CounterValue);
})

backButton.addEventListener('click', () => {
    counterStatus.CounterValue -= 1;
    changeReview(counterStatus.CounterValue);
    
}) 

surpriseButton.addEventListener('click', () => {
    num = counterStatus.CounterValue % reviews.length;
    while(num == counterStatus.CounterValue % reviews.length){
        num = Math.floor(Math.random() * reviews.length);     
    }
    counterStatus.CounterValue = num;
    changeReview(counterStatus.CounterValue);
    
})

window.addEventListener("DOMContentLoaded", function(){
    changeReview(0);
})









