$(document).ready(function(){
    
    var score = 0;
    var wins = 0;
    var losses = 0;
    var targetNumber = "";
    var computerOutput


    //shows game instructions and default page
    function start(){
        $("#ran-num").html("<p>Try to match the randomly generated number using the skulls. Push start to play.</p>")
        $("p").css("fontSize", "16px");
        $("#scorecard").html("");
    };

    //sets target number
    function target(){
        computerOutput = Math.floor(Math.random() * 101) + 19;
        $("#ran-num").html(computerOutput);
        //console.log(computerOutput);
    }

    //sets new game
    function newGame(){
        score = 0;
        target();
    }
    
    //game functionality
    start();

    $(".btn").on("click", function(){

        $(".btn").hide();
        computerOutput = Math.floor(Math.random() * 101) + 19;
        $("#ran-num").html(computerOutput);
        $("p").css("fontSize", "16px");
        $("#wins-losses").html("<p>wins and losses</p>" + "<p></p>" + "<p>wins:</p>" + wins + "<p></p>" + "<p>losses:</p>" + losses);
        $("#scorecard").html("<p>Your score is...</p>");
    

            if(score === targetNumber){
                wins++
                newGame();
            } else {

            }
});
    
    
    


    //randomly generates four numbers 


    function playerInput() {
        $("#skull").on("click",function(){
        for (var i = 0; i < 4; i++){
        var skull = Math.floor(Math.random() * 12) + 1;
          console.log(skull);
    $("#scorecard").text(skull);
        };
    });
    playerInput();
    console.log(playerInput);
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