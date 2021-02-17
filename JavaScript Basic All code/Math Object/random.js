
/**amra jodi compile theke kuno random number pete chai 
 * tahole Math.random use kore random number pete pari 
 *  r amra jodi kuno koto theke kotor modde random number chai seta bole na dei
 *  tahole seta (0 theke 1) ar vitore number print kore 
 * and joto bar print ba aktu edit korbo totobar alada alada numbe asbe*/

var random = Math.random();
console.log("The Random number is: " + random);
/**ai code a amra bole disi amra (0 theke 10 ) ar modde random chai
 *  tai aita 0 theke 10 ar modde random numbr print korbe */

var randomNum = Math.random()*10;
console.log("The Random number is: " + randomNum);

/**random number gula float number hoi 
 * tai amra round number paoar jonno round() use korsi */

console.log("The Random round number is: " + Math.round (randomNum));

/** aita 5 theke 15 ar modde random number paoar code ..
 *  and ami joto theke jotor modde random number chai
 *  tar bebodhan dara multiply korte hobe .. 
 * aikhane 5 r 15 ar modde bebodhan tai 10 dara gun korsi and
 *  jehetu valu ta 5 theke suru hobe and 5 ar chea boro hobe tai first a 5+ disi */

var randomNum1 = 5+Math.random()*10;
console.log("The Random number is: " + randomNum1);

/**random number gula float number hoi 
 * tai amra round number paoar jonno round() use korsi */

console.log("The Random round number is: " + Math.round(randomNum1));