
daysEl=document.getElementById('days');
hoursEl=document.getElementById('hours');
minutesEl=document.getElementById('minutes');
secondEl=document.getElementById('second');


const newYear = "1 jan 2023";



function timer(){
const newYearDate = new Date(newYear);
const currentDate = new Date();

const totalsec = new Date(newYearDate - currentDate) /1000;

const days = Math.floor(totalsec/3600/24)
const hours = Math.floor(totalsec/3600)%24 ;
const minutes = Math.floor(totalsec/60)%60;
const second = Math.floor(totalsec%60);


daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minutesEl.innerHTML = minutes;
secondEl.innerHTML= second;

}

timer();

setInterval(timer,1000)