let start_ms;
let step = 0;
let state;
let sound = new Audio("sounds/bell.mp3");
const msgArr = ["準備時間", "プレゼンタイム", "ディスカッションタイム"];
window.addEventListener("DOMContentLoaded", function() {
    state = document.getElementById("state");
    start_ms = new Date().getTime();
    timerId = setInterval(tick, 10);
})

function tick(){
    const limitTime = [60000 * 1, 60000 * 5, 60000 * 2];
    state.innerHTML = msgArr[step];
    let elapsed_ms = new Date().getTime() - start_ms;
    let display_ms = limitTime[step] - elapsed_ms;

    updateDisplay(display_ms);
    if (display_ms <= 0){
        start_ms = new Date().getTime();
        step = (step + 1) % 3;
        sound.play();
    }
}

function updateDisplay(display_ms){
    document.getElementById("disp-m").textContent = ("0" + (Math.floor(display_ms / 60000)) % 60).slice(-1);
    document.getElementById("disp-s").textContent = ("00" + (Math.floor(display_ms / 1000)) % 60).slice(-2);
    if (display_ms <= 30000){
        document.getElementById("time-disp").style.color = "red";
    }
    else {
        document.getElementById("time-disp").style.color = "black";
    }
}