console.log("normal function")
function add(a){
    return a+1;
}

console.log("Normal function ar sum : " + add(4));

console.log("oi normal function tai arrow function a aro chuto vabe likha jai");
// akta arugument ar jonno aivabe code likha hoi

var addd = a=>a+1;
console.log("The sum for akta argument ar : " + addd(5));


// argumennt(a,b) jodi akadik hoi tahole seta likhte hobe 

var sum =(a,b)=>{
    console.log(a);
    console.log(b);
    return a+b;
}
console.log("the sum is: " + sum(4,6));

