let operation = document.getElementsByClassName("operation")[0];
let result = document.getElementsByClassName("result")[0];
let left = "";
let leftcal = "";
let right = 0;

for (let i = 0; i < 10; i++) {
  document.getElementById(`b${i}`).addEventListener("click", function () {
    if (right !== "") {
      leftcal = "";
      left = "";
      right = "";
      result.innerHTML = right;
    }
    left += String(i);
    leftcal += String(i);
    operation.innerHTML = left;
  });
}
document.getElementById("bPlus").addEventListener("click", function () {
  if (right !== "") {
    leftcal = String(right);
    left = String(right);
    right = "";
    result.innerHTML = right;
  }
  left += " + ";
  leftcal += " + ";
  operation.innerHTML = left;
});
document.getElementById("bMinus").addEventListener("click", function () {
  if (right !== "") {
    leftcal = String(right);
    left = String(right);
    right = "";
    result.innerHTML = right;
  }
  left += " - ";
  leftcal += " - ";
  operation.innerHTML = left;
});
document.getElementById("bMultiple").addEventListener("click", function () {
  if (right !== "") {
    left = String(right);
    left = String(right);
    right = "";
    result.innerHTML = right;
  }
  left = `(${left}) x `;
  leftcal += " x ";
  operation.innerHTML = left;
});
document.getElementById("bDivide").addEventListener("click", function () {
  if (right !== "") {
    left = String(right);
    left = String(right);
    right = "";
    result.innerHTML = right;
  }
  left = `(${left}) / `;
  leftcal += " / ";
  operation.innerHTML = left;
});
document.getElementById("bDelete").addEventListener("click", function () {
  if (left.substring(left.length - 1, left.length) == " ") {
    left = left.substring(0, left.length - 3);
    leftcal = leftcal.substring(0, leftcal.length - 3);
  } else if (left.substring(left.length - 1, left.length) == ")") {
    left = left.substring(1, left.length - 3);
  } else {
    left = left.substring(0, left.length - 1);
    leftcal = leftcal.substring(0, leftcal.length - 1);
  }
  operation.innerHTML = left;
});

if (localStorage.getItem("PreAns") == null) {
  localStorage.setItem("PreAns", JSON.stringify([]));
  location.reload();
} else {
  var ansArray = JSON.parse(localStorage.getItem("PreAns"));
}

let list = document.getElementsByClassName("list")[0];
for (let i = 0; i < ansArray.length; i++) {
  let p = document.createElement("p");
  p.innerHTML = `${i + 1}. ${ansArray[i]}`;
  list.appendChild(p);
}

document.getElementById("bEqual").addEventListener("click", function () {
  let calArray = leftcal.split(" ");
  right = Number(calArray[0]);
  for (let i = 1; i < calArray.length; i += 2) {
    if (calArray[i] == "+") {
      right = right + Number(calArray[i + 1]);
    } else if (calArray[i] == "-") {
      right = right - Number(calArray[i + 1]);
    } else if (calArray[i] == "x") {
      right = right * Number(calArray[i + 1]);
    } else if (calArray[i] == "/") {
      right = right / Number(calArray[i + 1]);
    }
  }
  if (left != "") {
    ansArray.push(`${left} = ${right}`);
    localStorage.setItem("PreAns", JSON.stringify(ansArray));
    let p = document.createElement("p");
    p.innerHTML = `${ansArray.length}. ${ansArray[ansArray.length - 1]}`;
    list.appendChild(p);
  }
  result.innerHTML = right;
  console.log(leftcal);
  console.log(left);
});
