// FUNCTIONS Start
// Change Battery color function
function changeBatteryColor(value) {
  let className;
  if (value >= 75 && value <= 100) className = "bg-success";
  else if (value >= 50 && value <= 75) className = "bg-info";
  else if (value >= 25 && value <= 50) className = "bg-warning";
  else if (value >= 0 && value <= 25) className = "bg-danger";
  return className;
}

// function showDischargingTime(dischargingTime) {
//   let newTime = Math.floor(dischargingTime / 3600);
//   timeSpan.innerText = `${newTime} hours`;
// }

// Change Level function
function changeLevel(battery) {
  batteryLevel = `${battery.level * 100}%`;
  // console.log(battery.level * 100);
  // console.log(batteryLevel);
  progressBar.setAttribute("aria-valuenow", battery.level);
  progressBar.style.width = batteryLevel;
  progressBar.innerText = batteryLevel;
  // Change Battery color
  progressBar.classList.add(changeBatteryColor(battery.level * 100));
}
// Animate when charging function
const changeChargingAnimation = () => {
  progressBar.classList.toggle("progress-bar-animated", isCharging); // Display text "Charging..."
  chargingTextDisplay(isCharging);
};

const chargingTextDisplay = (isCharging) => {
  if (isCharging)
    document.getElementById("chargingText").style.display = "block";
  else document.getElementById("chargingText").style.display = "none";
};
// FUNCTIONS End