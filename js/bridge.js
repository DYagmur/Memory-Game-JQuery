// Delete all elements on the container
function removeChilds() {
    $("#game-board").empty(); //jQuery method for delete all children    // 
    //const container = document.getElementById("game-board");    
    //while (container.hasChildNodes()) {
    //    container.removeChild(container.firstChild);
    //}
}
// Gettin the level from the buttons on screen
function gameLevel(id) {
    const level = id;
    removeChilds();
    createPictures(level);
}

// Creating cards dynamically and put them on screen
function createCards(arr) {
    /*const timer = document.createElement("div");
    timer.id = "timer";
    timer.classList.add("timer");
    timer.innerHTML = "0";*/
    const timer = "<div id='timer' class='timer'>0</div>";
    //const boardGame = document.getElementById("game-board");
    /*const section = document.createElement("section");
    section.classList.add("game");*/
    const section = "<section class='game'></section>";
    $("#game-board").append(timer); // selecting the element with the id game-board. 
    $("#game-board").append(section);
    let card;
    for (const iterator of arr) {
        /*const div = document.createElement("div");
        const img1 = document.createElement("img");
        const img2 = document.createElement("img");
        div.classList.add("card");
        div.addEventListener("click", flipCard);
        div.setAttribute("card", iterator.id);
        img1.classList.add("back");
        img1.src = "./img/back.png";
        img2.classList.add("front");
        img2.src = iterator.url;
        div.appendChild(img1);
        div.appendChild(img2);*/
        card = `<div class='card rounded' card=${iterator.id} onclick='flipCard(this)'>
        <img src='./img/back.png' class='back'>
        <img src=${iterator.url} class='front'></div>`;
        //section.appendChild(div);
        $(".game").append(card);
    }
    //boardGame.appendChild(timer);
    //boardGame.appendChild(section);

    //window.scrollBy(0, window.innerHeight);
    $(document).scrollTop(500);
    start();
}

// Creating level cards and put them on screen
function reload() {
    removeChilds();
    let section2 =
        "<section class='level-container'><h1 class='level-text'>Choose difficulty</h1><div id='level' class='level'><div id='3' class='diff easy' onclick='gameLevel(this.id)'>Easy</div><div id='6' class='diff medium' onclick='gameLevel(this.id)'>Medium</div><div id='9' class='diff hard' onclick='gameLevel(this.id)'>Hard</div></div></section>";
    /*const boardGame = document.getElementById("game-board");
    const section = document.createElement("section");
    section.classList.add("level-container");
    const h1 = document.createElement("h1");
    const container = document.createElement("div");
    const easy = document.createElement("div");
    const medium = document.createElement("div");
    const hard = document.createElement("div");
    h1.classList.add("level-text");
    h1.innerHTML = "Choose difficulty";
    container.id = "level";
    container.classList.add("level");
    easy.id = "3";
    easy.classList.add("diff");
    easy.classList.add("easy");
    easy.innerHTML = "Easy";
    easy.addEventListener("click", gameLevel);
    medium.id = "6";
    medium.classList.add("diff");
    medium.classList.add("medium");
    medium.innerHTML = "Medium";
    medium.addEventListener("click", gameLevel);
    hard.id = "9";
    hard.classList.add("diff");
    hard.classList.add("hard");
    hard.innerHTML = "Hard";
    hard.addEventListener("click", gameLevel);
    container.appendChild(easy);
    container.appendChild(medium);
    container.appendChild(hard);
    section.appendChild(h1);
    section.appendChild(container);
    boardGame.appendChild(section);*/
    $("#game-board").append(section2);
    //window.scrollBy(0, window.innerHeight);
    $(document).scrollTop(500);
    stop();
}

// Functions for timer on screen
let timer;
function start() {
    timer = setInterval(() => {
        //let seconds = parseInt(document.getElementById("timer").innerHTML);
        let seconds = parseInt($("#timer").html());
        seconds += 1;
        //document.getElementById("timer").innerHTML = seconds;
        $("#timer").html(seconds);
    }, 1000);
}
function stop() {
    clearInterval(timer);
}

// Setting score on Local Storage
function setScore() {
    //const currentTime = document.getElementById("timer").innerHTML;
    const currentTime = $("#timer").html();
    let arrayScore = getScore();
    arrayScore.pop();
    arrayScore.unshift(parseInt(currentTime));
    arrayScore = JSON.stringify(arrayScore);
    localStorage.setItem("score", arrayScore);
    if (parseInt(currentTime) < parseInt(getBestScore())) {
        localStorage.setItem("bestScore", currentTime);
    }
}

// Getting Scores best and historical
function getScore() {
    if (localStorage.getItem("score")) {
        const arrayScore = JSON.parse(localStorage.getItem("score"));
        return arrayScore;
    }
}
function getBestScore() {
    if (localStorage.getItem("bestScore")) {
        return localStorage.getItem("bestScore");
    }
}

// Getting the current date
function today() {
    const today = new Date();
    return (
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear()
    );
}

// String management
function setTitle() {
    let title = "Memory....Game";
    title = title.split(".").join(" ");
    //document.getElementById("title").innerHTML = title;
    $("#title").html(title);
}

// Adding function when document is complety loaded
$(document).ready(() => {
    localStorage.setItem("score", "[0,0,0]");
    localStorage.setItem("bestScore", "100");
    //document.getElementById("reload").addEventListener("click", reload);
    $("#reload").click(reload);
    //document.getElementById("3").addEventListener("click", gameLevel);
    //$("#3").click(gameLevel);
    //document.getElementById("6").addEventListener("click", gameLevel);
    //$("#6").click(gameLevel);
    //document.getElementById("9").addEventListener("click", gameLevel);
    //$("#9").click(gameLevel);
    //document.getElementById("todaydate").innerHTML = today();
    $("#todaydate").html(today);
});
