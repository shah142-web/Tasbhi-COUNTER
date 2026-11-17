let count = 0;
let time = 0;

function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
}
setInterval(function() {
    time++;
    document.getElementById("time").innerText = time;},1000)

Zoom out
Displaying index.html. 
