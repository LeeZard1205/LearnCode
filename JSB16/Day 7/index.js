// B1.In các số từ 1 - 20 trên 1 dòng 
let s = ""
for (let i = 1; i <= 20; i++) {
    s = s + " " + i
    
};
console.log(s);

// B2.Yêu cầu người dùng nhập 2 số a và v từ ngoài vào rồi in ra các số nằm trong khoảng đó.
let a = Number(prompt("Nhập số a: "));
let v = Number(prompt("Nhập số v: "));
let sum = 0;
while (a<v-1) {
    a++;
    console.log(a);
    sum += a
}

// B3.Tính tổng các số từ trong a -> b
console.log(sum);

// B4.Tính giai thừa của số 5
let n = 1
for (let i = 1; i <= 5; i++) {
    n = n*i
    
};
console.log(n);

// Đảo ngược thứ tự của mảng sau ("Hải", "Quý", "Quyết", "Minh", "Sơn", "Tín","An","Duy")
let mang = ["Hải", "Quý", "Quyết", "Minh", "Sơn", "Tín","An","Duy"]
let mangngc = []
for (let i = 0; i < mang.length; i++) {
    mangngc[i]=mang[mang.length-1-i];
}
console.log(mangngc);

// == ss bằng (Nhận diện thông tin vd 2=="2")
// != ss khác
// && đk và 
// || đk hoặc
// lệnh thêm 1 dâu "=" nhận diện bản chất như 2 khác 
// vd === hay !==

let score = Number(prompt("Nhập điểm của bạn: "));
if (score>9&&score<=10) {
    console.log("Điểm A+");
} else if (score>8&&score<=9) {
    console.log("Điểm A");
} else if (score>7&&score<=8) {
    console.log("Điểm B");
} else if (score>6&&score<=7) {
    console.log("Điểm C");
} else if (score>5&&score<=6) {
    console.log("Điểm D");
} else if (score>=0&&score<=5) {
    console.log("Điểm A");
} else {
    console.log("Nhập sai");
}

// xuất ra các số chia hết cho 2 hoặc 3 trong khoảng 1-20
