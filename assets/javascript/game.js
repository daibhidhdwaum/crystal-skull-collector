$(document).ready(function(){

    //targetNumber generates random number between 19 and 120 for player to math
    var targetNumber
    var skullImage
    var wins = 0;
    var losses = 0;
    var score = 0;
    var skulls = ["assets/images/agate-skull.jpg",
                  "assets/images/green-skull.jpg",
                  "assets/images/black-skull.jpg",
                  "assets/images/red-skull.jpg"
                  ];
    
    //assigned DOM elements
    $(".wins").html("Wins:  ");
    $(".losses").html("Losses: ");
    $(".win-or-loss").html("Wins and Losses");
    $(".skull-num").html("Your Score:")
    $("#rules").html("<p>You will be given a random target number at the beginning of the game.<br><br>Each skull holds a point value that will be revealed to you upon clicking and then added to your point score. These points will change when you start a new game.<br><br>To win the game match the random number. If your score goes above the random number you lose the game.</p>");

    
    //function initiates game(non-functional)
    startGame();
    function startGame(){
        $('item').keypress();
        $('clickelement')
    }
    
    //targetNumber generates random number between 19 and 120 for player to match
    function targetNum() {
         targetNumber = Math.floor(Math.random() * 101) + 19;
         $("#target-number").html(targetNumber);
    }
    
    
    //starts new game
    function newGame(){
    for(var i = 0; i < 5; i++){

    
        //randomnly generates numbers used to reach target number
        var randomNumbers = Math.floor(Math.random() * 11) + 1;
        console.log(randomNumbers);
        skullImage = $("<img>");
        
        //indicates image source and appends to img tag
        skullImage.attr({
            "src": skulls[i],
            "class": "skull",
            "data-random": randomNumbers
        });

        $("#skulls").append(skullImage);
        targetNum();
    }

    //increments wins and details new game data
    function win(){
        $(".wins").html("Wins: " + wins);
        $(".win-or-loss").html("You Win!!!");
        $("#skulls").empty();
        $(".skull-num").html("Your Score: " + score);
    }
    
    //increments losses and details new game data
    function loss(){
        $(".losses").html("Losses: " + losses);
        $(".win-or-loss").html("You Lose!!!");
        $("#skulls").empty();
        $(".skull-num").html("Your Score: " + score);
    }

    //onclick event and game logic
    $(".skull").on("click", function(){
            
        var skullNum = parseInt($(this).attr("data-random"));
        score += skullNum;
        
        $(".skull-num").html("Your Score: " + score);
    
        
        if(score === targetNumber){
            wins++
            score = 0;
            win();
            newGame();
        } else if (score > targetNumber){
            losses++
            score = 0;
            loss();
            newGame();
        }
    })
    }
    
    newGame();
    
    });