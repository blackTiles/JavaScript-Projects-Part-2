var countDownDate = new Date("Jan 1, 2022 00:00:01").getTime();


const timer = setInterval(function() {


  let now = new Date().getTime();
    
  let distance = countDownDate - now;
//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance< 0) {
    clearInterval(timer);
    document.querySelector('#hour').innerHTML="00";
    document.querySelector('#minute').innerHTML="00";
    document.querySelector('#second').innerHTML="00";
    document.querySelector('#auth').style.display="flex";
    setTimeout(function() {
      location.replace("page2.html");
    },5000);
    
  }
  else{
    document.querySelector('#hour').innerHTML=hours;
    document.querySelector('#minute').innerHTML=minutes;
    document.querySelector('#second').innerHTML=seconds;
  }
}, 1000);





