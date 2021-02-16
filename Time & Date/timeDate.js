/**Amra jodi kuno time ba date print korte chai
 *  tahole Date() name a kuno object create kore seta ke
 *  .toDateString() diye cal korle amra present date ta peye jabo */

var td = new Date();

console.log(td.toDateString());

/**time khetre amra jodi object 
 * take .toTimeString() diye call kori tahle present time ta peye jabo */

console.log(td.toTimeString());

/**abar jodi amra chai past ba future ar kuno time date fixed kore rakhbo 
 * sekhetre amra Date() ar vitore time date diye dile seta pore call kole peye jabo */

var sj = new Date('1997-12-29 6:00 AM');

console.log("My Birth DAte : " + sj.toDateString());
console.log("My Birth Time : " + sj.toTimeString());