const score = document.getElementById("score");
const scoreBoard = document.getElementById("scoreboard");

$("#how").click(function(){
    $("#popup").toggleClass("active");
    $("#blur").toggleClass("active");
    $("#score").removeClass("active");
});

$("#scoreboard").click(function(){
    $("#score").toggleClass("active");
    $("#blur").toggleClass("active");
    $("#popup").removeClass("active");
});

function scoreToggle() {
    document.getElementById("best").innerHTML = getBestScore();
    let arrayScore = getScore();
    document.getElementById("score2").innerHTML = arrayScore[0];
    document.getElementById("score3").innerHTML = arrayScore[1];
    document.getElementById("score4").innerHTML = arrayScore[2];

}

scoreBoard.addEventListener("click", scoreToggle);

// if(blur.classList.contains('active')){
//     blur.classList.remove('active');
// }
// else {
//     blur.classList.add('active');
// }

