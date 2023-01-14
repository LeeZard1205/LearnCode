let menu = ["rau xào", "thịt luộc", "gà rán"];
let check = 0;
if (localStorage.getItem("menu") == null) {
  localStorage.setItem("menu", JSON.stringify(menu));
  location.reload();
} else {
  menu = JSON.parse(localStorage.getItem("menu"));
}
let txtcr = document.getElementById("textC1");
let txtud1 = document.getElementById("textU1");
let txtud2 = document.getElementById("textU2");
let txtdl = document.getElementById("textD1");
let pcr = document.getElementById("checkC1");
let prd = document.getElementById("checkR1");
let pud1 = document.getElementById("checkU1");
let pud2 = document.getElementById("checkU2");
let pdl = document.getElementById("checkD1");
let c = document.getElementById("C");
let r = document.getElementById("R");
let u = document.getElementById("U");
let d = document.getElementById("D");
// Create
function Create() {
  c.style.display = "block";
  r.style.display = "none";
  u.style.display = "none";
  d.style.display = "none";
}
function checkC() {
  if (txtcr.value == "") {
    pcr.innerHTML = "Vui lòng nhập món ăn muốn thêm vào menu!";
  } else {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i] == txtcr.value) {
        pcr.innerHTML = "Món ăn đã tồn tại!";
      } else {
        check = 1;
      }
    }
    if (check == 1) {
      menu.push(txtcr.value);
      localStorage.setItem("menu", JSON.stringify(menu));
      pcr.innerHTML = "Thêm thành công";
    }
  }
}
// Read
function Read() {
  c.style.display = "none";
  r.style.display = "block";
  u.style.display = "none";
  d.style.display = "none";
  prd.innerHTML = menu.join(", ");
}
// Update
function Update() {
  c.style.display = "none";
  r.style.display = "none";
  u.style.display = "block";
  d.style.display = "none";
}
let i1 = 1000000;
function checkU1() {
  if (txtud1.value == "") {
    pud1.innerHTML = "Vui lòng nhập tên món ăn muốn update!";
  } else {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i] == txtud1.value) {
        check = 1;
      }
    }
    if (check == 1) {
      i1 = menu.indexOf(txtud1.value);
      pud1.innerHTML = `Món ăn bạn muốn cập nhật là: ${txtud1.value}`;
      check = 0;
    } else {
      pud1.innerHTML = "Món ăn không tồn tại!";
    }
  }
}
function checkU2() {
  if (txtud2.value == "") {
    pud2.innerHTML = "Vui lòng nhập tên món ăn mới!";
  } else {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i] == txtud2.value) {
        pud2.innerHTML = "Món ăn đã tồn tại!";
        check = 0;
      } else {
        check = 2;
      }
    }
    if (check == 2 && txtud1.value != "") {
      menu.splice(i1, 1, txtud2.value);
      localStorage.setItem("menu", JSON.stringify(menu));
      pud2.innerHTML = "Cập nhật thành công";
      txtud1.value = "";
      pud1.innerHTML = "";
      i1 = 1000000;
      check = 0;
    } else {
      txtud1.value = "";
      pud1.innerHTML = "";
      txtud2.value = "";
      pud2.innerHTML = "";
    }
  }
}
// Delete
function Delete() {
  c.style.display = "none";
  r.style.display = "none";
  u.style.display = "none";
  d.style.display = "block";
}
let i2 = 1000000;
function checkD1() {
  if (txtdl.value == "") {
    pdl.innerHTML = "Vui lòng nhập tên món ăn cần xóa!";
  } else {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i] == txtdl.value) {
        check = 3;
      }
    }
    if (check == 3) {
      i2 = menu.indexOf(txtdl.value);
      pdl.innerHTML = `Món ăn bạn muốn xóa là: ${txtdl.value}`;
      check = 0;
    } else {
      pdl.innerHTML = "Món ăn không tồn tại!";
    }
  }
}
function checkD2() {
  menu.splice(i2, 1);
  localStorage.setItem("menu", JSON.stringify(menu));
  pdl.innerHTML = "Xóa thành công";
  i2 = 1000000;
}
