$(document).ready(function(){
    
    var score = 0;
    var wins = 0;
    var losses = 0;
    var targetNumber = "";
    var computerOutput
    var agate = Math.floor(Math.random() * 12) + 1;
    var green = Math.floor(Math.random() * 12) + 1;
    var black = Math.floor(Math.random() * 12) + 1;
    var red = Math.floor(Math.random() * 12) + 1;
    
    //shows game instructions and default page
    function start(){
        $("#ran-num").html("<p>Skulls generate a number each game. Use skull buttons to try and match the randomly generated number. Push start to play.</p>")
        $("p").css("fontSize", "16px");
        $("#scorecard").html("");
    };

    //sets target number
    function target(){
        computerOutput = Math.floor(Math.random() * 101) + 19;
        $("#ran-num").html(computerOutput);
    }

    //sets new game
    function newGame(){
        score = 0;
        target();
    }

    //game functionality
    start();

    $(".btn").on("click", function(){
        target();
        $(".btn").hide();
        $("p").css("fontSize", "16px");
        $("#wins-losses").html("<p>wins and losses</p>" + "<p></p>" + "<p>wins:</p>" + wins + "<p></p>" + "<p>losses:</p>" + losses);
        $("#scorecard").html("<p>Your score is...</p>");

    });

     //skulls randomly select number between 1 and 12
     $(".agate").on("click", function(){
        $("#scorecard").html(agate);
        console.log(agate);
    });
    $(".green").on("click", function(){
        $("#scorecard").html(green);
        console.log(green);
    });
    $(".black").on("click", function(){
        $("#scorecard").html(black);
        console.log(black);
    });
    $(".red").on("click", function(){
        $("#scorecard").html(red);
        console.log(red);
    });

        //playerInput();

            if(score === targetNumber){
                wins++
                newGame();
            } else if (score > targetNumber){
                losses++
                newGame();
            }else {

            }
});


