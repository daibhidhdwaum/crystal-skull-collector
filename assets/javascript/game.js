$(document).ready(function(){
    
var targetNumber = Math.floor(Math.random() * 101) + 19;
var counter = 0;
var skullImage
var score 
var wins = 0;
var losses = 0;
var lastNum = 0;


$("#target-number").html(targetNumber);


for(var i = 0; i < 4; i++){

    var randomNumbers = Math.floor(Math.random() * 12) + 1;
    skullImage = $("<img>");
    skullImage.attr({
        "class": "skull agate green black red",
        "data-random": randomNumbers
        
    });

    $("#skulls").append(skullImage);

    $(".agate").on("click", function(){
        
        var skullNum = parseInt($(this).attr("data-random"));

        lastNum += skullNum;

        console.log(lastNum);

        if(lastNum === targetNumber){
            wins++
            $(".wins").html("Wins:" + wins);
            
        } else if (lastNum > targetNumber){
            losses++
            $(".losses").html("Losses:" + losses);

        }else {
            
        }

    });
}

    

    
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
