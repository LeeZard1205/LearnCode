// Function
// 1.1 function ko có tham số đầu vào

function sayhello() {
    alert("locc")
    console.log("locc");
}
sayhello()

// 1.2 function có tham số đầu vào

function binhphuong(n, a) {
    let c = (10**n)-a;
    console.log(c);
}
// biến điền vào có thể có nhiều biến và có thể có cả dạng chuỗi...
binhphuong(2, 10)

// 1.3 Return Function

function sum(a,b) {
    // let c = a+b;
    // return c;
    return a+b;
}

// let d = sum(10,20);
// console.log(d);
console.log(sum(10,20));
// Thực hành:
function Shthang(a,b,h) {
    return (a+b)*h/2;
}

console.log("Diện tích hình thang là: " + Shthang(1,1,1))

function Ptamgiac(x,y,z) {
    return x+y+z;
}

console.log("Diện tích tam giác là: " + Ptamgiac(1,1,1));
// 2. Array (Mảng): 1 array dùng để lưu nhiều giá trị
// Để truy cập vào các phần tử trong mảng sẽ bđầu từ index 0
let arrayCar = ["toyota","mazda","BMW"]
//                  0       1       2
console.log(arrayCar[0]);
arrayCar[0] = "burgarti";
arrayCar.push("Vinfast")
console.log(arrayCar);

// Thực hành
function myinfo(d,e,f) {
    let info = [0,1,2];
    info[0] = d;
    info[1] = e;
    info[2] = f;
    console.log(info);
    console.log("Tên tôi là: " + info[0]);
    console.log("Học trường " + info[1]);
    console.log("Con số yêu thích của tôi là " + info[2]);
}

myinfo("Lý Gia Bảo","Hanoi-Amsterdam High school for the gifted","5")


// 3. Object(đối tượng): VD: con người, hs...
// Thuộc tính: dùng để ,mô tả tc đối tượng
// Chức năng: khả năng đối tượng làm được

let person = {
    perName: "Bảo",
    perAge: 17,
    perSchool: "Hanoi-Amsterdam High school for the gifted",
    food: function food() {
        console.log("Weed");
    },
    drink: function drink() {
        console.log("Coke");
    },
    sleep: function sleep() {
        console.log("4am to 12am");
    }
}
console.log(person);
console.log(person.perName);
console.log(person.perAge);
console.log(person.perSchool);
person.food();
person.drink();
person.sleep();

// 4. Vòng lặp
// Ndung: để có tác dụng thực hiện 1 cv nhiều lần
// For loop
// for(vtri bdau vg lặp; dkien để vg lặp chạy, bước nhảy vg lặp)

for(let i = 0; i<10; i+=8){
    console.log(i);
}

let a=0;
while (a<10) {
    console.log(a);
    a++;
}

let array = ["a","b","c","d","e","f","g","h"]
for(let l = 0; l<8; l++){
    console.log(array[l]);
}

for (let i in arrayCar) {
    console.log(i);
}
