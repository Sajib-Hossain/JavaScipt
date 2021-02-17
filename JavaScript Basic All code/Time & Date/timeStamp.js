/**Time stamp holo 1970 saler januaryr 1 tarikh theke akhon porjonto
 *  joto second par hoise sei sonkha k time stamp bole 
 * R time Stamp ber korte amader Date.now() object ta call korle
 *  akhon kar time stamp ta dekhabe aita poriti second a change hoi 
 * so aita protibar alada alada man dibe */

console.log(Date.now());


/** amra jodi kobe thaika ba koita somoy theke time stamp suru hoise seta jante chai
 *  tahole amar date object ar vitore(0) dilei seta peye jabo */
var ts = new Date(0);

console.log("The Time stamp start date is: " + ts.toDateString());
console.log("The Time stamp start time is: " + ts.toTimeString());