var str = "my name is Sajib";

console.log(str);

/**amra jodi kuno Sring k array formate a likhte chai 
 * tahole amra split() function use kori 
 * akhon splite (" ") ar vitoe jodi double culoon ar majhe
 *  jodi akta space dei taohle seta 
 * proti ta word alada alada hoye array formate a print hobe */

var dividedStr= str.split(" ");
console.log(dividedStr);

/**aikhane split("") ar vitore kuno space deoa hoi nai
 *  jar fole aita pura string potita alphabate a alada alada hoye
 *  array formate a print hobe */

var dividedWord = str.split("");

console.log(dividedWord);

/**kuno array k jodi amra revarse print korte chai tahole 
 * sekhane amra reverse() function use kori */

var reversedStr = dividedStr.reverse();
console.log(reversedStr);

/**jodi kuno array k amra splite()function dara vangi 
 * setake abar ager obosthai fire pete amra word/alphabet gulage join nkori
 *  seta joint()funchion use kore sohojei ager moto kore fela jai
 *  sekhetre amra split() function ar double culoon ar vitore jodi spece diye alada kore thaki
 *  tahole joint() function ao culoon ar vitore space use korte hobe   */

var jointWrd = dividedWord.join("");
console.log(jointWrd);