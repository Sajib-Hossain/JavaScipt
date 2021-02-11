
/**higher order function means jokhon kuno function ar vitoe akadik function thake
 * and akek function akek kaj kore pore tader call kore argument declear kora jai */

function makeFunction(type){
    if(type=== "plus"){
        return (a,b)=>a+b;
    }
    else if(type === "minas"){
        return (a,b)=> a-b;
    }
    else if(type === "multiply"){
        return (a,b) => a*b;
    }
    else if(type === "divition"){
        return (a,b) =>a/b;
    }
}

var x = makeFunction("plus");
var y = makeFunction("minas");
var z = makeFunction("multiply");
var m = makeFunction("divition");

console.log("The sum is: " + x(4 , 6));
console.log("The minas is: " + y(4 , 6));
console.log("The multiply is: " + z(4 , 6));
console.log("The divition is: " + m(4 , 6));