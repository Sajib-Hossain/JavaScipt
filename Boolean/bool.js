
//all valid number like positive or negative ,
//and string or expression like{},[] are boolean true

var a = Boolean("sajib"); 
var b = Boolean(1235,{},[]);
var c = Boolean({},[]);
console.log(a ,b , c);

// all undifined number and (0,null,nan,)
//faka sting are boolean false

var x = Boolean(null);
var y = Boolean("");
var z = Boolean(undefined);

console.log(x , y, z);