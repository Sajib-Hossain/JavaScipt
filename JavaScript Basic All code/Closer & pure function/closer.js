
/**closer function means jokhon amra akta function ar scope kuno variable declear kori 
 * AND NEXT OI FUNCTION ar vitor arekti function crate kore sekhnae call kore pai
 *  seta ke closer function bole */

function myFunction(){
    var name = "sajib";
    function globalFunction(){
        console.log(name);

    }
    return globalFunction;
}
var myFun = myFunction();
myFun();