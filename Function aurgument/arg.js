function average(){
    answer = (arguments[0]+arguments[1])/2;
    return answer;
}
console.log("the average is : " + average(60,40));


/*amra jodi argument(a,b) diyeo dei 
r vitore jodi (arguments[0]+arguments[1]) dei 
tobu code run hobe bcz function ar vitore auto argument ceate kopa thake*/


function avg (a,b){
    ans= (arguments[0]+arguments[1])/2;
    return ans;
}
console.log("The avg Is : " + avg(50,40,30));

/*arrgument ar vitore extra number dile
 somossa nai aurgument a je koita number dor niye ne*/

 function sajib (a,b){
     if(!(a&&b)){
        return 0;
     }
     bangla= (arguments[0]+b)/2;
     return bangla;     /*aikhne aurgument r b ar same kaj  */
 }

 console.log("the average is : " + sajib(40));
 console.log("the average is : " + sajib(40 , 40));

 /**aikhane jodi akta numbe kom dei tahole prrint nibe na besi numbe rhole somossa nai */