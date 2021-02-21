
let contain = document.querySelector('.main');
let remove = document.querySelector('.rmv');



contain.innerHTML;


contain.innerHTML = contain.innerHTML+"<i>Hi this is add line</i>"
/*jodi amara kuno element remove korte chai tahole
sei classs ar object ar innerhtml k jodi faka cullon diye declear kori
tahole sei classs ar sob element delete hoye jabe*/

/*aikhon amra jodi ai romove line ta jodi comment a na rkhr run kori tahole amader paragraph ta remove hoye jave*/

//remove.innerHTML= "";



/*amra javascript use kore html a kuno tag arribute add othoba remove korte pari
 aikhane kuno tag add korte amra document.createElemnet use kori*/

let newel=document.createElement('div');

newel.innerHTML= "This is red";
newel.style.color="#f00"

/* amader notun make kora tag ta amra kuthai rakhbo seta declear korte appendChild use kori */
document.body.appendChild(newel);

document.querySelector('.main').appendChild(newel);

/* amader notun make kora tag ta amra kuthai rakharpor seta remove  korte removeChild use kori */
document.querySelector('.main').removeChild(newel);