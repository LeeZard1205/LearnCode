function findEven(number) {
  let kq = "4";
  if (number < 6 && number > 4) {
    console.log(kq);
  } else if (number > 20 || number < 4) {
    alert("VUi lòng nhập số từ 4 đến 20");
  } else {
    for (let i = 6; i <= number; i += 2) {
      kq = kq + "," + String(i);
    }
    console.log(kq);
  }
}
let i = Number(prompt("Nhap so tu 4-20:"));
findEven(i);
