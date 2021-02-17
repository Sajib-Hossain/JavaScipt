/**for in loop ta shudu object ar nijesso property niye kaj kore 
 * aita akta object ar kuno infharite class ar property te kaj kore na */

var myself = {
    name :"Sajib",
    age : 23,
    gender : "male",
    homeTown : "Jamalpur"
}

for(let item in myself){
    console.log(` My ${item} is ${myself[item]}`);
}