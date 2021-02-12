
/**kiso data theke max number ber korte amra Math.max use kori */
var maxNumber = Math.max(2,5,3,1,8,4,100,66);
console.log("The max number is: " + maxNumber);

/**but kuno array theke max number ber korte shudu math.max dile seta kaj korbe na
 *  array theke value sear korte amader full array ta call korte hoi 
 * and seta amra apply function dara call kori
 *   and apply(ar initial value jeta this oita null kore dite hoi) */

var myArray = [88,33,44,11,2,8,100,99,50];
var maxNumber1 = Math.max.apply(null,myArray);

console.log("The max Number Array is: " + maxNumber1);

/**kiso data theke min number ber korte amra Math.min use kori */

var minNumber = Math.min(2,5,3,1,8,4,100,66);
console.log("The min number is: " + minNumber);

/**but kuno array theke min number ber korte shudu math.min dile seta kaj korbe na
 *  array theke value sear korte amader full array ta call korte hoi 
 * and seta amra apply function dara call kori
 *   and apply(ar initial value jeta this oita null kore dite hoi) */

var myArray = [88,33,44,11,2,8,100,99,50];
var minNumber1 = Math.min.apply(null,myArray);

console.log("The min Number Array is: " + minNumber1);
