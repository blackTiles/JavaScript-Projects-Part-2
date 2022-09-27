function digitalClock(){
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var seconds = d.getSeconds();
    document.getElementById('hr').innerHTML=`${ hour < 10 ? '0'+hour : hour}`;
    document.getElementById('min').innerHTML=`${ minute < 10 ? '0'+minute : minute}`;
    document.getElementById('sec').innerHTML=`${ seconds < 10 ? '0'+seconds : seconds}`;
}
setInterval(digitalClock, 1000);