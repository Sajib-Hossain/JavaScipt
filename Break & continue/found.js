var target = 21;
//var target2= 90;
var found= 0;

for(let a=2;!found;a++){
    let result=target%a;
    if(!result){
        found = a;
    }
}

console.log(found);