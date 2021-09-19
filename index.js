var randomNumber1  = Math.floor(Math.random()*6)+1;
var diceRandomNumber1 = "dice" +randomNumber1 +".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src",diceRandomNumber1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceRandomNumber2 = "dice" +randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",diceRandomNumber2);

if (randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player1 wins🎈";
}
else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "🎈Player2 wins!";
}

else
{
    document.querySelector("h1").innerHTML ="Draw !";
}