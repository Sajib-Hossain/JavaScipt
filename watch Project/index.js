var watch = document.querySelector(".result");

var setTime=function(){
    var d = new Date();

    watch.innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()} `;

}

setInterval(setTime,1000);