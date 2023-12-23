const countdown = document.getElementById('countdown');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
    // Displays Day Date Year Time Time Zone
    const currentDate = new Date();
    // Resets Calender to new year and 00:00:00
    const newYearDate = new Date(currentDate.getFullYear()+1,0,1);
    // Calculates the time remaining in milliseconds
    const timeRemaining = newYearDate - currentDate;

    const days = Math.floor(timeRemaining/(1000*60*60*24));
    const hours = Math.floor((timeRemaining%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((timeRemaining%(1000*60*60))/(1000*60));
    const seconds = Math.floor((timeRemaining%(1000*60))/1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

updateCountdown();
// Calls updateCountdown() every 1000 milliseconds(1sec)
setInterval(updateCountdown, 1000);