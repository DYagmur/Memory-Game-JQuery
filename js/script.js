//Items array
const items = [
    { id: "alien", url: "./img/alien1.png" },
    { id: "alien2", url: "./img/alien2.png" },
    { id: "asteroid", url: "./img/asteroid.png" },
    { id: "astronaut", url: "./img/astronaut.png" },
    { id: "earth", url: "./img/earth.png" },
    { id: "meteor", url: "./img/meteor.png" },
    { id: "galaxy", url: "./img/galaxy.png" },
    { id: "planet", url: "./img/planet.png" },
    { id: "rocket", url: "./img/rocket.png" },
    { id: "ufo", url: "./img/ufo.png" },
];

function createPictures(number) {
    let cards = [];
    let i = 0;
    while (i < number) {
        cards.push(items[i]);
        cards.push(items[i]);
        i++;
    }
    cards = shuffleArray(cards);
    createCards(cards);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let turn = 1;
let currentCard = "default"; // store the clicked card id. 
function isPair(att) {
    /* let open = document.querySelectorAll(`[card=${att}]`); */
    let open = $(`[card=${att}]`) // select html element with attribute card matching value of att. 
   /*  let current = document.querySelectorAll(`[card=${currentCard}]`); */
   let current = $(`[card=${currentCard}]`)  //  jQuery selects HTML elements with the attribute card matching the value of currentCard. 
    if (turn == 2) {
        turn = 1;
        if (currentCard === att) {  //thecards opened 2 times.
            currentCard = "default";
        } else {
            setTimeout(() => {
                for (let i = 0; i < 2; i++) {
                    open[i].classList.remove("flip");
                    /* open[i].removeClass("flip"); */
                    current[i].classList.remove("flip");
                    /* current[i].removeClass("flip"); */
                    currentCard = "default";
                }
            }, 500);
        }
    } else {   //if the opening first card.
        turn = 2;
        currentCard = att;
    }
    if (checkGameCompletion()) {
        stop();
        setScore();
    }
}

function checkGameCompletion() {
    /* let matchedCards = document.querySelectorAll(".card"); */
    let matchedCards = $(".card");  //selecting the elements with class card. get always the elements.   // creates a jQuery object that contaıns the HTML elements wıth the .card class
    /* console.log("matchedCards: " + matchedCards);
    console.log("typeof matchedCards: " + typeof(matchedCards)); // jQuery object
    console.log("matchedCards[0]: " + matchedCards[0]);
    console.log("typeof matchedCards[0]: " + typeof(matchedCards[0])); // HTML element 
    console.log("matchedCards[1]: " + matchedCards[1]);
    console.log("typeof matchedCards[1]: " + typeof(matchedCards[1])); // HTML element */
    let completed = true; //

   /*  console.log("matchedCards.length: " + matchedCards.length); // 6 (if you select Easy) */

    for (let i = 0; i < matchedCards.length; i++) {
        let jQueryObj =  $(matchedCards[i]); // creates a jQuery object that contains the HTML elemnt at index i of the matchedCards jQuery object
        /*  console.log("jQueryObj: " + jQueryObj); //
            console.log("typeof jQueryObj: " + typeof(jQueryObj)); // jQuery obj
            console.log("jQueryObj[0]: " + jQueryObj[0]);
            console.log("typeof jQueryObj[0]: " + typeof(jQueryObj[0])); // HTML element
             */
        if (jQueryObj.hasClass("flip")) {
           /*  console.log(`jQueryObj with flip class:` + jQueryObj); */
        }
        
        if (! jQueryObj.hasClass("flip")) {
            completed = false;
        }
    }
    return completed;
}
