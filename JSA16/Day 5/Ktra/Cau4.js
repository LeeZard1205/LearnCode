let dongho = document.getElementById("dongho");
let date = new Date();
let a = date.getHours();
let b = date.getMinutes();
let c = date.getSeconds();
setInterval(timer, 1000);
function timer() {
  if (c < 59) {
    c++;
  } else if (c == 59 && b < 59) {
    b++;
    c = 0;
  } else if (c == 59 && b == 59 && a < 23) {
    a++;
    b = 0;
    c = 0;
  } else if (c == 59 && b == 59 && a == 23) {
    a = 0;
    b = 0;
    c = 0;
  }
  dongho.innerHTML = `${a}:${b}:${c}`;
  if (b < 10 && c >= 10) {
    dongho.innerHTML = `${a}:0${b}:${c}`;
  } else if (c < 10 && b >= 10) {
    dongho.innerHTML = `${a}:${b}:0${c}`;
  } else if (b < 10 && c < 10) {
    dongho.innerHTML = `${a}:0${b}:0${c}`;
  }
}
