const hourE = document.getElementById("hour");
const minuteE = document.getElementById("minute");
const secondE = document.getElementById("second");

function updateClock(){
    const curentDate = new Date();
    //setTimeout(updateClock,1000);
    const hour = curentDate.getHours();
    const minute = curentDate.getMinutes();
    const second = curentDate.getSeconds();
    const hourDeg = (hour/12) * 360;
    hourE.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = (minute/60) * 360;
    minuteE.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = (second/60) * 360;
    secondE.style.transform = `rotate(${secondDeg}deg)`;

    console.log(hourE,minuteE,secondE);

    
}
//updateClock();
setInterval(updateClock,1000);