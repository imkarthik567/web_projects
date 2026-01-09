var n1 = Math.random();
var n2 = Math.random();

n1=n1*6;
var RandomNumber1=Math.floor(n1)+1;

n2=n2*6;
var RandomNumber2=Math.floor(n2)+1;
if(RandomNumber1===1)
{
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(RandomNumber1===2)
{
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}    
else if(RandomNumber1===3)
{
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(RandomNumber1===4)
{
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if(RandomNumber1===5)
{
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
else
{
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    
}

if(RandomNumber2===1)
{
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(RandomNumber2===2)
{
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}    
else if(RandomNumber2===3)
{
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(RandomNumber2===4)
{
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if(RandomNumber2===5)
{
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
else
{
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    
}

if(RandomNumber1>RandomNumber2)
{
    document.querySelector("h1").textContent="Player 1 Wins";
}    
else if(RandomNumber1<RandomNumber2)
{
    document.querySelector("h1").textContent="Player 2 Wins";

}
else 
{
    document.querySelector("h1").textContent="Draw!";


}        
