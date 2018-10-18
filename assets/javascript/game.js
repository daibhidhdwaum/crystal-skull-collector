$(document).ready(function(){

//targetNumber generates random number between 19 and 120 for player to math
var targetNumber = Math.floor(Math.random() * 101) + 19;
var skullImage
var wins = 0;
var losses = 0;
var score = 0;

//assigned DOM elements
$("#target-number").html(targetNumber);
$(".wins").html("Wins: ");
$(".losses").html("Losses: ");
$(".win-or-loss").html("Wins and Losses");
$(".skull-num").html("Your Score:")
$("#rules").html("<p>You will be given a random target number at the beginning of the game.<br><br>Each skull holds a point value that will be revealed to you upon clicking and then added to your point score. These points will change when you start a new game.<br><br>To win the game match the random number. If your score goes above the random number you lose the game.<br><br>Press any key to start.</p>");



//function initiates and resets the game 
startGame();
function startGame(){
    $('item').keypress();
}

//starts new game
function newGame(){
for(var i = 0; i < 4; i++){

    //randomnly generates target number
    var randomNumbers = Math.floor(Math.random() * 11) + 1;
    skullImage = $("<img>");
    skullImage.attr({
        "class": "skull agate",
        "data-random": randomNumbers
    });

    $("#skulls").append(skullImage);
    var score = 0;
    console.log(randomNumbers);

}

$(".skull").on("click", function(){
        
    var skullNum = parseInt($(this).attr("data-random"));
    score += skullNum;

    $(".skull-num").append(score);

    //game logic
    if(score === targetNumber){
        wins++
        $(".wins").append(wins);
        $(".win-or-loss").html("You Win!!!");
        score = 0;
        newGame();
    } else if (score > targetNumber){
        losses++
        $(".losses").append(losses);
        $(".win-or-loss").html("You Lose!!!");
        score = 0;
        newGame();
    }
})
}

newGame();

});
