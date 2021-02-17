/**settimeout() aita akta nirdisto function k take j time ta deoa hoi 
 * sei nirdistto time por kaj kore aikhane deoa time ta obooisi mili second a hote hobe
 *  aikhanw 5 second use kora hoise 5 sec = 5000 mili sec  */

setTimeout(()=>{
    console.log("Hi This is Sajib");
},5000);



var sto = setTimeout(()=>{
    console.log("hellow world");
},7000);

console.log(sto);

/** clearTimeout holo amra j fuction ar kajer jonno time ta diye thaki se sei time take clear kore de */
clearTimeout(sto);


/**setInterval() aita akta nirdisto function k take j time ta deoa hoi 
 * sei nirdistto time por por kaj korte thake jotokhon porjonto aitar time clear kora na hoi
 *  aikhane deoa time ta obooisi mili second a hote hobe
 *  aikhanw 5 second use kora hoise 5 sec = 5000 mili sec  */


var sto = setInterval(()=>{
    console.log("hellow world");
},7000);

console.log(sto);

/** clearInterval holo amra j fuction ar kajer jonno time ta diye thaki se sei time take clear kore de
 *  and aita clear na korle code ta nirdisto time por por var var print hobe 
 * akhon ai line ta jodi commemnt kore print kori tahole seta nirdistto timr por por bar bar print hote thakbe*/

clearInterval(sto);