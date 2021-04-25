let timerInput = document.getElementById("time");
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let timerShow = document.getElementById("timer");

buttonStart.addEventListener('click', function () {
    timeMinut = parseInt(timerInput.value) * 60;
});

buttonStop.addEventListener('click', function () {
    clearInterval(timer);
});

let timer = setInterval(function () {
    seconds = timeMinut % 60
    minutes = timeMinut / 60 % 60
    hour = timeMinut / 60 / 60 % 60
    if (timeMinut <= 0) {
        clearInterval(timer);
        // alert("Время закончилось");
        let sound = new Howl({
            src: ['media/must_have_alarm.mp3'],
            volume: 1,
        });
        sound.play();
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)