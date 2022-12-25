// let t = Number(prompt("Nhập số: "));
// switch (t) {
//   case 1:
//     console.log("1. In ra sv(1)");
//     break;
//   case 2:
//     console.log("2. Tạo ra sv(2)");
//     break;
//   case 3:
//     console.log("3. Update(3)");
//     break;
//   case 4:
//     console.log("4. Xóa(4)");
//     break;
//   case 5:
//     console.log("5. Thoát ctrinh(5)");
//     break;

//   default:
//     console.log("Đầu vào sai!");
//     break;
// }

// Cau 1
let array = [2, 11, 16, 7];
let k = 9;
let kq = [];
// for (let a in array) {
//   let sum;
//   for (let b in array) {
//     sum = array[a] + array[b];
//     if (sum == k && a != b) {
//       kq[0] = a;
//       kq[1] = b;
//       console.log(kq);
//     } else {
//       console.log("no satisfaction value exists");
//     }
//   }
// }
for (let a = 0; a < array.length; a++) {
  for (let b = a + 1; b < array.length; b++) {
    sum = array[a] + array[b];
    if (sum == k && a != b) {
      kq[0] = a;
      kq[1] = b;
      console.log(kq);
    } else {
      console.log("no satisfaction value exists");
    }
  }
}

// Cau 2
let c1 = "abcba";
let c2 = "tjkjk";
let c1ngc = "";
let c2ngc = "";
for (let i = 0; i < c1.length; i++) {
  c1ngc += c1.charAt(c1.length - 1 - i);
  c2ngc += c2.charAt(c2.length - 1 - i);
}
if (c1 == c1ngc) {
  console.log("true");
} else {
  console.log("false");
}

if (c2 == c2ngc) {
  console.log("true");
} else {
  console.log("false");
}
