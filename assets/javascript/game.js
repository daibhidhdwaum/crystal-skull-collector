$(document).ready(function(){
    
var targetNumber = Math.floor(Math.random() * 101) + 19;
var counter = 0;
var skullImage
var score 
var wins = 0;
var losses = 0;
var lastNum = 0;


$("#target-number").html(targetNumber);
$(".wins").html("Wins: ");
$(".losses").html("Losses: ");
$(".win-or-loss").html("Wins and Losses");
$(".skull-num").html("Your Score:")

function newGame(){
for(var i = 0; i < 4; i++){

    var randomNumbers = Math.floor(Math.random() * 11) + 1;
    skullImage = $("<img>");
    skullImage.attr({
        "class": "skull agate green black red",
        "data-random": randomNumbers
    });

    $("#skulls").append(skullImage);
    console.log(randomNumbers);
}


$(".agate").on("click", function(){
        
    var skullNum = parseInt($(this).attr("data-random"));
    lastNum += skullNum;

    $(".skull-num").append(lastNum);

    console.log(lastNum);

    if(lastNum === targetNumber){
        wins++
        $(".wins").append(wins);
        $(".win-or-loss").html("You Win!!!");
    } else if (lastNum > targetNumber){
        losses++
        $(".losses").append(losses);
        $(".win-or-loss").html("You Lose!!!");
    }else {
            
    }
});
}

newGame();

    

    
       /* if(score === targetNumber){
            wins++
            newGame();
        } else if (score > targetNumber){
            losses++
            newGame();
        }else {
            
        }*/




/*for ( var i = 0; i < randomNumbers.length; i++) {
        skullImage = $("<img>");
        skullImage.addClass("skull");
        skullImage.attr("src", "../assets/images/red-skull.jpg");
        skullImage.attr("data-skullvalue", randomNumbers[i]);
        $("#skulls").append(skullImage);
    }*/

});
