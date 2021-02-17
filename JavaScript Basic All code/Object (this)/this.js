var dog= {
    name:"thomas",
     bark(){
        console.log(`kire chup kor ${this.name}`);
    }
}
/**aikhane amra jodi object diye normali funcion tare call kori
 *  seta sohojei kaj korbe annd print korbe */
dog.bark();

/**aikhane amra object ar function tare kuno variable a rakhte pari 
 * sekhetre jodi amra variable tare print koraite chai tahole 
 * seta undifined dekhabe karon sekhetre j amader dog object ar name ta pabe na 
 * karon amra aikhane shudu bark function tare variable a rakhsi */

var x = dog.bark;
x();

/**aikhane jodi amra variable tare diya object tare call kori
 *  tahole seta normali print hobe */

 x.call(dog);
