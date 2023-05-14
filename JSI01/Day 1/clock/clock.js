let indicator = document.getElementsByClassName("clockIndicator");
for (let i = 0; i < indicator.length; i++) {
  indicator[i].style.transform = `rotate(${i * 6}deg)`;
}

let hour = document.getElementById("clockHour");
let minute = document.getElementById("clockMinute");
let second = document.getElementById("clockSecond");
let date = new Date();

setInterval(function () {
  let date = new Date();
  second.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
}, 1000);
minute.animate(
  [
    // key frames
    {
      transform: `rotateZ(${
        (date.getMinutes() + date.getSeconds() / 60) * 6
      }deg)`,
    },
    {
      transform: `rotateZ(${
        (date.getMinutes() + date.getSeconds() / 60) * 6 + 360
      }deg)`,
    },
  ],
  {
    // sync options
    duration: 3600000,
    iterations: Infinity,
  }
);
hour.animate(
  [
    // key frames
    {
      transform: `rotateZ(${
        (date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600) *
        30
      }deg)`,
    },
    {
      transform: `rotateZ(${
        (date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600) *
          30 +
        360
      }deg)`,
    },
  ],
  {
    // sync options
    duration: 43200000,
    iterations: Infinity,
  }
);
