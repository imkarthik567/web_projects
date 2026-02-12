var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;
function nextSequence()
{
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);

    var n=Math.random();
    n=n*4;
    var randomNumber= Math.floor(n);
    var randomChosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
 


}
$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

})

function playSound(name)
{
    var audio = new Audio("sounds/"+name+".mp3"); 
    audio.play();    
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    

    },100)

}

$(document).keydown(function(){
    if(!started)
    {
        nextSequence();
        started=true;

    }    
    

})

function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
    {
        if(gamePattern.length===userClickedPattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000)
        }    
    }
    else
    {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");

        },200)

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

    }         
}

function startOver(){
    started=false;
    level=0;
    gamePattern=[];


}