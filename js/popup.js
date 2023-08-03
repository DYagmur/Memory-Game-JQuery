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
    $("#best").html(getBestScore());

    let arrayScore = getScore();
    $("#score2").html(arrayScore[0]);
    $("#score3").html(arrayScore[1]);
    $("#score4").html(arrayScore[2]);
}

scoreBoard.addEventListener("click", scoreToggle);

// if(blur.classList.contains('active')){
//     blur.classList.remove('active');
// }
// else {
//     blur.classList.add('active');
// }

