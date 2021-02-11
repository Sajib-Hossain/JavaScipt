/**kuno boro Array k chuto korte amra slice()function use kori ..
 *  jemon amra jodi kuno boro array theke kiso array property niye arek ta array make korte hoi 
 * sekhetre amra splice() function ar maddome setake chuto kore nite pari...
 *  slice() ar breket ar biotre amadeder array ar index bole dite hoi 
 * jemon splice(1,5) ar mane holo
 *  array 1 no index theke 5 no. index ar ager value  porjonto property niye notun akta array make korte hobe */

var array1 = [1,2,3,4,5];

/**aikhane slice (1,3) holo
 * uprer array te a 1 no. index ar property holo 2 thke suru kore
 * 3 no index holo 4 so aita 4 r ager value pojonto (2,3)print hobe */

var sliceArray = array1.slice(1,3);

console.log("The Splice Array Is: "+ sliceArray);