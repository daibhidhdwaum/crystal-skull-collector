$(document).ready(function(){
    
var targetNumber = Math.floor(Math.random() * 101) + 19;
var counter = 0;
var skullImage
var score 
var wins = 0;
var losses = 0;
previous = 0;


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

        previous += skullNum;

        console.log(previous);
       
    })
}

    
        if(score === targetNumber){
            wins++
            newGame();
        } else if (score > targetNumber){
            losses++
            newGame();
        }else {
            
        }




/*for ( var i = 0; i < randomNumbers.length; i++) {
        skullImage = $("<img>");
        skullImage.addClass("skull");
        skullImage.attr("src", "../assets/images/red-skull.jpg");
        skullImage.attr("data-skullvalue", randomNumbers[i]);
        $("#skulls").append(skullImage);
    }*/

});
