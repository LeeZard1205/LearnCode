// localStorage.setItem("1", "D");
// localStorage.setItem("2", "C");
// localStorage.setItem("3", "B");
// localStorage.setItem("4", "A");
// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.getItem(localStorage.key(i)));
// }
let key = document.getElementById("setKey");
let value = document.getElementById("setValue");

function storage() {
  localStorage.setItem(key.value, value.value);
  key.value = "";
  value.value = "";
  document.body.appendChild(document.createElement("p"));
  for (let i = 0; i < localStorage.length; i++) {
    t[i].innerHTML = i + 1 + ": " + localStorage.getItem(`${i + 1}`);
  }
}
let t = document.getElementsByTagName("p");
