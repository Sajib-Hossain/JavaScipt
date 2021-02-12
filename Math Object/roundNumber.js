
/**amra normali kuno number ba float number print korte aivabe print kori */
var myNum = 20.45;
console.log("The number is: " + myNum);

/**amra kuno float number k Math.floor use kore seta ke round number a print korate pari.. 
 * sekhetre number ta nicher diker round value ta print kore 
 * jemon 20.44 aitate jodi Math.floor use kori tahole aita print korbe 20 ..
 * bcz aita lower diker round valure print kore */

var floorNum = Math.floor(myNum);
console.log("the Floor number is: " + floorNum);

/**amra kuno float number k Math.ceil use kore seta ke round number a print korate pari.. 
 * sekhetre number ta uporer diker round value ta print kore 
 * jemon 20.44 aitate jodi Math.floor use kori tahole aita print korbe 21 ..
 * bcz aita upper diker round valure print kore */

var ceilNum = Math.ceil(myNum);
console.log("The ceil number is: " + ceilNum);

/**amra kuno float number k Math.round use kore seta ke round number a print korate pari.. 
 * sekhetre number ta jodi(.0 theke.50) ar modde thake 
 * tahole seta nicher value  diker round value ta print kore
 *  jemon 2.44 akhetre aita 2 print korbe .
 *  abar number ta jodi(.51 theke .99) ar modde thake 
 * tahole sekhetre aita uporer value print korbe jemon 2.77 hole seta 3 print korbe*/


var roundNum = Math.round(myNum);
console.log("The round Nmber is: " + roundNum);

/**math.abs ar kaj holo se (+,-) jei valuei pak na kno se (+) e print kore */

var myNum1 = -55.22;
var absNum = Math.abs(myNum);
console.log("The absoled number is: " + absNum);