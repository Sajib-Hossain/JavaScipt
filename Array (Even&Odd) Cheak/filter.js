/**filter()function muloto akta array theke odd or even sorting kore
 *  odd or even ar jonno shudu odd number or shudu even numbe niye alada akta kore array make kore */
var myArray = [2,4,5,8,3,6,9];

/**filter() function use kore
 * uporer array theke even number sort kore alada array make korar code */

var evenNum = function(num){
    vagSesh = num%2;

    if(vagSesh===0) return true;
    return false;
}

console.log("from this array sorting all even element and provided array is: " + myArray.filter(evenNum));

/**filter() function use kore
 * uporer array theke even number sort kore alada array make korar code */

var myArray1 = [2,4,5,8,3,6,9];

var oddNum = function(num){
    vagSesh = num%2;

    if(vagSesh===0) return false;
    return true;
}

console.log("from this array sorting all odd element and provided array is: " + myArray.filter(oddNum));


