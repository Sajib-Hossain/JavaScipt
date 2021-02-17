/**reduce() function dara amra array sum,minas,multiply,divition korte pari */

var myArray = [3,2,5,8];
/**reduce funtion dara sum ar code */
var sumArray = myArray.reduce((a,b)=>{
    console.log(a,b);
    return a+b;
});

console.log("Array Sum is: " + sumArray);

/**reduce funtion dara Minas ar code */

var minasArray= myArray.reduce((a,b)=>{
    console.log(a,b);
    return a-b;
});

console.log("Array minas is: " + minasArray);

/**reduce funtion dara multiply ar code */

var mulArray = myArray.reduce((a,b)=>{
    console.log(a,b);
    return a*b;
});

console.log("Array multiply is: " + mulArray);

/**reduce funtion dara divition ar code */

var divArray = myArray.reduce((a,b)=>{
    console.log(a,b);
    return a/b;
});
console.log("array divition is: " + divArray);


