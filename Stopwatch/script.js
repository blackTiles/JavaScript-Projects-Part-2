let setOrClearInterval;
let isPaused = true;
let currentFlagNumber = 1;

// start the watch 
function startWatch() {
    let msEl = parseInt(document.querySelector(".milliseconds").innerHTML); // milliseconds
    let secEl = parseInt(document.querySelector(".seconds").innerHTML);     // seconds
    let minEl = parseInt(document.querySelector(".minute").innerHTML);     // minute
    msEl += 1;
    if (msEl < 10) {
        document.querySelector(".milliseconds").innerHTML = `0${msEl}`;
    } else if (msEl == 99) {
        secEl += 1;
        document.querySelector(".milliseconds").innerHTML = `00`;
        if (secEl < 10) {
            document.querySelector(".seconds").innerHTML = `0${secEl}`;
        } else if (secEl == 60) {
            minEl += 1;
            document.querySelector(".seconds").innerHTML = `00`;
            if (minEl < 10) {
                document.querySelector(".minute").innerHTML = `0${minEl}`;
            } else {
                document.querySelector(".minute").innerHTML = minEl;
            }
        } else {
            document.querySelector(".seconds").innerHTML = secEl;
        }
    } else {
        document.querySelector(".milliseconds").innerHTML = msEl;
    }
}

// toggle button function and stop the watch
function toggle() {
    if (isPaused == true) {
        isPaused = false;
        setOrClearInterval = setInterval(startWatch, 10);
        document.querySelector("#start-btn").innerHTML = "| |";
    } else {
        isPaused = true;
        setOrClearInterval = clearInterval(setOrClearInterval);
        document.querySelector("#start-btn").innerHTML =
            '<i class="fa-solid fa-play"></i>';
    }
}

// reset the watch 
function reset() {
    setOrClearInterval = clearInterval(setOrClearInterval);
    document.querySelector(".milliseconds").innerHTML = "00";
    document.querySelector(".seconds").innerHTML = "00";
    document.querySelector(".minute").innerHTML = "00";
    isPaused = true;
    document.querySelector("#start-btn").innerHTML =
        '<i class="fa-solid fa-play"></i>';
    document.querySelector(".flag-container").innerHTML = "";
    currentFlagNumber = 1;
}

// record time function 
function recordTime() {
    let clockCurrentState = document.querySelector(".round").innerText; 
    let currentMillis = document.querySelector(".milliseconds").innerHTML;
    let currentSecond = document.querySelector(".seconds").innerHTML;
    let currentMin = document.querySelector(".minute").innerHTML;
    if (clockCurrentState == "00\n:\n00\n:\n00") {
        return;
    } else {
        let createDiv = document.createElement("div");
        createDiv.className = "flag";
        createDiv.innerHTML = `<span class="flag-number">${currentFlagNumber < 10 ? "0" + currentFlagNumber : currentFlagNumber}</span>
                               <span class="flag-time">${currentMin}:${currentSecond}:${currentMillis}</span>`;
        document.querySelector(".flag-container").prepend(createDiv);
        currentFlagNumber += 1;
    }
}
