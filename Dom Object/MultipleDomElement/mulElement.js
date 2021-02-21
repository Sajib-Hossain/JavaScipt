/*amra javascript a multipule element make korte pari
sekhetre amra for loop use kore amader joto khushi div banaiya nite pari*/

for (let i=0; i<10; i++){
    let divCol = document.createElement('div');
    divCol.innerHTML = `<b>Hi this is element ${i}</b>`;
    document.body.appendChild(divCol);
}

/*sov gula div k select korte amra querySelectorAll use kori*/

let newEl = document.querySelectorAll('div');

newEl.forEach(e=>e.style.color="#f00");

/*amra jodi multiple element k array akare print korte chai tahole nicher code ta likhe korte pari*/

let newArray= Array.prototype.slice.call(newEl);

/*mapping*/

let divArr = Array.prototype.map.call(newEl,e=>console.log(e));


