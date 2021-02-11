
/**javascript a prototype means inharitance  */

var a = {
    b:"Hi! this is Sajib Hossain",
    c:1997
}

var d = Object.create(a);
console.log(d.b);
//aikhane d jehetu a k inhaitance korse so d a kuno nijesso property nai tai aita false asbe
console.log(d.hasOwnProperty('b'));
//aikhane amra d ar property add korrlam tai akhon d.b print korle b ar notun value dekhabe 
d.b = 99;
console.log(d.b);

// a ar jehetu age theke nijessho property silo tai a.b print korle a mar ager value ddekhabe

console.log(a.b);