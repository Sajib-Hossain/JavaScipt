var target = 21;
var target2 = 90;
var found = 0;

for(let i = 2; target/2; i++){
    let result=target%i;
    if(result){
        continue;
    }

    let result2= target2%i;
    if(!result2){
        found=i
       break;
    }
    
}

console.log(found);