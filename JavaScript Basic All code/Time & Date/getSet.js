/**get() object ar works jokhon amra compiler theke kuno time or date 
 * ar exat (hours , minutes , second, month year) ber korte chai sekhetre amra get method apply kori    */


var sj = new Date();

/**time ar all element ber korte get code */
console.log(sj.toTimeString());

console.log("The time (minutes) is: " + sj.getMinutes());
console.log("The time (Hours) is: " + sj.getHours());
console.log("The time (second) is: " + sj.getSeconds());

/**time ar all element ber korte get code */

console.log(sj.toDateString());

/**aikhane getTear() likhle seta ulta palta year dibe
 *  sekhetre amader getfullYear() use kora lagbo */

console.log("The year is: " + sj.getYear());

console.log("The year is: " + sj.getFullYear());

/**month count ar khetre javascript o theke count kore
 *  mane 12 aser khetre(0-11) count kore mane january 0 and december is 11*/

console.log("The month number is: " + sj.getMonth());


/**set() object ar works jokhon amra compiler a kuno time or date 
 * ar exat (hours , minutes , second, month year) set korte chai 
 * sekhetre amra set() method apply kori    */

var s = new Date();

console.log(s.setDate(2));
/**set month ar ar khetre fullyear/year ar kuno
 *  bada dora niyom nei aita normali print hoi */
console.log("The year is: " + s.setYear(2020));
console.log("The month is: " + s.setMonth(5));

console.log(s.toDateString());


console.log("The time (hours) is: " + s.setHours(5));
console.log("The time (minutes) is: " + s.setMinutes(55));
console.log("The time (seconds) is: " + s.setSeconds(50));

console.log(s.toTimeString());


