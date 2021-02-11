var a = {
    b:"Hi I am Sajib",
    c:1997,
    d:"Home Town Jmalpur"
}
console.log(a);
console.log(a.b);

/**object a kuno kisor man change delete or add kora jai */

a.b ="This is not sajib"

//aikhane b ar value change kora hoise so akhon jodi kiso print deoa hoi seikhane notun string ta dekhae

console.log( a);

delete a.b;      // object ar value delete korar code

console.log(a);

a.e ="aita object a value add korar code";
 console.log(a);
