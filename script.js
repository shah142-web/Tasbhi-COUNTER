let count = 0;
let time = 0;

setInterval(function() {
    time++;
    document.getElementById("time").innerText = time;
}, 1000);

function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

function reset() {
    count = 0;
    time = 0;
    document.getElementById("count").innerText = 0;
    document.getElementById("time").innerText = 0;
}