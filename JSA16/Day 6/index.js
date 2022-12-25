let box = document.getElementById("box");
function Color() {
  let color = document.getElementById("colorName");
  box.style.backgroundColor = color.value;
  color.value = "";
}
