//elements
const utcTimeElement = document.getElementById("utcTime");
const currentDayElement = document.getElementById("currentDay");
const currentYearElement = document.getElementById("currentYear");

document.addEventListener("DOMContentLoaded", function () {
  // get and display current UTC time
  function updateUTCTime() {
    const now = new Date();
    utcTimeElement.textContent = now.toUTCString().split(" ")[4];
  }

  // get and display the current day
  function updateCurrentDay() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const now = new Date();
    currentDayElement.textContent = days[now.getUTCDay()];
  }

  function updateCurrentYear() {
    const currentYearNow = new Date().getFullYear();
    currentYearElement.textContent = currentYearNow;
  }

  // Initial update
  updateUTCTime();
  updateCurrentDay();
  updateCurrentYear();

  // Update every second
  setInterval(updateUTCTime, 1000);
});


