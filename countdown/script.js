
let countDownDate;
let currentState;
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function startCountDown() {
  document.querySelector('#loader').style.display = "none";
  document.querySelector('.finished').style.display = "none";

  let inputDate = document.querySelector('#datetime').value;

  let getMonth = month[parseInt(inputDate.substring(5, 7)) - 1];
  let getDate = inputDate.substring(8, 10);
  let getYear = inputDate.substring(0, 4);
  let getHours = inputDate.substring(11, 13);
  let getMinutes = inputDate.substring(14);

  countDownDate = new Date(`${getMonth} ${getDate}, ${getYear},${getHours}:${getMinutes}`).getTime();
  currentState = setInterval(timer, 1000);
}

function timer() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(currentState);
    document.querySelector('#hour').innerHTML = "00";
    document.querySelector('#minute').innerHTML = "00";
    document.querySelector('#second').innerHTML = "00";
    document.querySelector("#datetime").value = "";
    document.querySelector('#loader').style.display = "flex";
    setTimeout(function () {
      document.querySelector('#loader').style.display = "none";
      document.querySelector('.finished').style.display = "flex";
    }, 2000);
  }
  else {
    document.querySelector('#hour').innerHTML = `${hours < 10 ? "0" + hours : hours}`;
    document.querySelector('#minute').innerHTML = `${minutes < 10 ? "0" + minutes : minutes}`;
    document.querySelector('#second').innerHTML = `${seconds < 10 ? "0" + seconds : seconds}`;
    document.querySelector("#audio").src = "./beep.mpeg";
  }
}









