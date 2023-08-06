var num1 = (Math.random())*6 + 1;
num1 = Math.floor(num1);
var num2 = (Math.random())*6 + 1;
num2 = Math.floor(num2);
var img1 = "images/dice"+num1+".png";
var img2 = "images/dice"+num2+".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src",img1);
var image2 = document.querySelector(".img2");
image2.setAttribute("src",img2);
if (num1>num2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(num2>num1){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Its a draw refresh again";
}