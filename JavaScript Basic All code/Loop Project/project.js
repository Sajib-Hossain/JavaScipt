var num = +process.argv[2];

if(!Number.isInteger(num)){
    console.log("The provide value is not a Number");
    process.exit();
}

console.log(`${num} X 1 = ${num*1}`);
console.log(`${num} X 2 = ${num*2}`);
console.log(`${num} X 3 = ${num*3}`);
console.log(`${num} X 4 = ${num*4}`);
console.log(`${num} X 5 = ${num*5}`);
console.log(`${num} X 6 = ${num*6}`);
console.log(`${num} X 7 = ${num*7}`);
console.log(`${num} X 8 = ${num*8}`);
console.log(`${num} X 9 = ${num*9}`);
console.log(`${num} X 10 = ${num*10}`);


console.log("areea mia ami for loop diyao namato korte pari dekhen:");

for(let i =1; i<=10; i++){
    console.log(`${num} X i = ${num*i}`);
}
