$(document).ready(function(){
    
    var score = 0;
    var wins = 0;
    var losses = 0;
    var targetNumber = "";
    var computerOutput
    var playerInput

    //console.log("ready!");

     //initiates game
     $(".btn").on("click", function(){
     //console.log("start");

    
        targetNumber = Math.floor(Math.random() * 101) + 19;
        console.log(targetNumber);
        $("#ran-num").html(targetNumber);

    
        
        $("#wins-losses").html("<p>wins:</p><p>losses:</p>");
        $("#wins-losses")
        
        

        if(playerInput === targetNumber){
            wins++
            newGame();
        } else {

        }


    });



    for (var i = 0; i < 4; i++){

        var skullNumber = Math.floor(Math.random() * 11) + 1;
    //    console.log(random);
    $("#skulls").append(skullNumber);

    

    }
    //randomly generates a number between 1 and 12
    /*$("#skull").on("click", function(){
        var Skull = Math.floor(Math.random() * 12) + 1;
        $("#scorecard").text(Skull);
    });

    $("#green-skull").on("click", function(){
        var greenSkull = Math.floor(Math.random() * 12) + 1;
        $("#scorecard").text(greenSkull);
    });

    $("#black-skull").on("click", function(){
        var blackSkull = Math.floor(Math.random() * 12) + 1;
        $("#scorecard").text(blackSkull);
    });

    $("#red-skull").on("click", function(){
        var redSkull = Math.floor(Math.random() * 12) + 1;
        $("#scorecard").text(redSkull);
    });*/


});