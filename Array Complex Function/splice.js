/**splice() function ta kaj kore array ar vitor theke jekuno value delete kora or add kora niye.. 
 * splice () function use kore amra akta arry ar 
 * jekuno element delete or jekuno jaigai element add korte pari */

var array1 = [1,2,3,4,5,6,7,8,9];

/**aikhane splice() function dara 2 no. index theke 5 no. index porjonto element delete hoye jabe 
 * and sekhane notun amra j element ("sajib","dev") duita add korte chaisi sei duita print hobe
  */
 
array1.splice(2,5,"sajib","dev");
console.log("The splice array is: " + array1);

/*splice() diye element delete na koreo joto khusi element add kora jai 
 * sekhetre jemon splice(2 aita holo j jaiga the element delete or add hobe seta
 *  tarpor jodi amra shudu add korte chai tahole porer tate 0 dilei
 *  kuno element delete hobe nna shudu add hobe)
 *  because pore number ta kun element theke kun element delete hobe seta bujai */


var array2 = [10,20,30,40,50,60,70,80,90];

array2.splice(2,0,"dev","sajib");
console.log("The splice array is: " + array2);