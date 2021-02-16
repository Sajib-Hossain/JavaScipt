var result = document.querySelector(".result");
var action = document.querySelector(".action");


action.onclick= function(){
    var dice=Math.ceil (Math.random()*6);
    result.innerHTML=dice;
}