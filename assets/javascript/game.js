$(document).ready(function(){

    //targetNumber generates random number between 19 and 120 for player to math
    var targetNumber
    var skullImage
    var wins = 0;
    var losses = 0;
    var score = 0;
    
    //assigned DOM elements
    $(".wins").html("Wins: ");
    $(".losses").html("Losses: ");
    $(".win-or-loss").html("Wins and Losses");
    $(".skull-num").html("Your Score:")
    $("#rules").html("<p>You will be given a random target number at the beginning of the game.<br><br>Each skull holds a point value that will be revealed to you upon clicking and then added to your point score. These points will change when you start a new game.<br><br>To win the game match the random number. If your score goes above the random number you lose the game.</p>");
    
    
    //function initiates and resets the game(non-functional)
    startGame();
    function startGame(){
        $('item').keypress();
    }
    
    //targetNumber generates random number between 19 and 120 for player to match
    function targetNum() {
         targetNumber = Math.floor(Math.random() * 101) + 19;
         $("#target-number").html(targetNumber);
    }
    
    
    //starts new game
    function newGame(){
    for(var i = 0; i < 4; i++){

    
        //randomnly generates numbers used to reach target number
        var randomNumbers = Math.floor(Math.random() * 11) + 1;
        skullImage = $("<img>");
        skullImage.attr({
            "class": "skull agate",
            "data-random": randomNumbers
        });
        //can't get all four images up!!!!
        $("#skulls").append(skullImage);
        targetNum();
    }

    function win(){
        $(".wins").html("Wins: " + wins);
        $(".win-or-loss").html("You Win!!!");
        score = 0;
        $("#skulls").empty();
    }

    function loss(){
        $(".losses").html("Losses: " + losses);
        $(".win-or-loss").html("You Lose!!!");
        score = 0;
        $("#skulls").empty();
    }


    
    
    $(".skull").on("click", function(){
            
        var skullNum = parseInt($(this).attr("data-random"));
        score += skullNum;
        
        $(".skull-num").html("Your Score: " + score);
    
        //game logic (game won't reset!!!)
        if(score === targetNumber){
            wins++
            win();
            newGame();
        } else if (score > targetNumber){
            losses++
            loss();
            newGame();
        }
    })
    }
    
    newGame();
    
    });