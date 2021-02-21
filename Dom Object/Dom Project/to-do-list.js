let input = document.querySelector('.textBar');
let list = document.querySelector('.listBer');

let taskList = [];


function render(elements){

    list.innerHTML="";
    elements.forEach(e=>{
        let newList = document.createElement('li');
        newList.innerHTML=e;
        list.appendChild(newList);
    })

}

input.addEventListener('keyup',e=>{
    if(e.which === 13 && input.value !==""){
        taskList.push(input.value);
        input.value="";
        render(taskList);
    }
})




