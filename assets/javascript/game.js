$(document).ready(function(){
    
var targetNumber = Math.floor(Math.random() * 101) + 19;
var counter = 0;
var skullImage 
var score 
var wins = 0;
var losses = 0;


$("#target-number").html(targetNumber);

for(var i = 0; i < 4; i++){

    var randomNumbers = Math.floor(Math.random() * 12) + 1;
    skullImage = $("<img>");
    skullImage.attr({
        "class": "skull agate black green red",
        "data-random": randomNumbers
    });

    $("#skulls").append(skullImage);

    $(".skull").on("click", function(){
        
        var skullValue = ($(this).attr("data-random"));
        skullValue = parseInt(skullValue);

        counter+= skullValue;
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
