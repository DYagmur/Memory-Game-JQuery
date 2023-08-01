const blur = document.getElementById("blur");
const popUp = document.getElementById("popup");
const score = document.getElementById("score");
const how = document.getElementById("how");
const scoreBoard = document.getElementById("scoreboard");

function popUpToggle() {
    popUp.classList.toggle("active");
    score.classList.remove("active");
    blur.classList.toggle("active");

    // if(blur.classList.contains('active')){
    //     blur.classList.remove('active');
    // }
    // else {
    //     blur.classList.add('active');
    // }
}

function scoreToggle() {
    score.classList.toggle("active");
    popUp.classList.remove("active");
    blur.classList.toggle("active");
    document.getElementById("best").innerHTML = getBestScore();
    let arrayScore = getScore();
    document.getElementById("score2").innerHTML = arrayScore[0];
    document.getElementById("score3").innerHTML = arrayScore[1];
    document.getElementById("score4").innerHTML = arrayScore[2];

    // if(blur.classList.contains('active')){
    //     blur.classList.remove('active');
    // }
    // else {
    //     blur.classList.add('active');
    // }
}

how.addEventListener("click", popUpToggle);

scoreBoard.addEventListener("click", scoreToggle);
