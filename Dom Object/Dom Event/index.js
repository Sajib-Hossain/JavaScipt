
/* here at first i try to initialize class */
let input = document.querySelector(".textLine");
/*here i try to find the bold part*/

let boldPart = document.querySelector('p>b');
/*eventlistener ar kaj holo kuno akta key ar basis a funcion niye kaj kora*/

input.addEventListener('keyup', e => {
    console.log(e);
})

input.addEventListener('keyup',evt => {
    console.log(input.value);
})