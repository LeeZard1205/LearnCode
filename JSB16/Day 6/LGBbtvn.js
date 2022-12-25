// 1.
let fruits = [["Grapes",15],["Apples",13],["Tomamoes",10]];
fruits[2][0] = "Mangoes";
fruits.push(["Oranges",5])
console.log(fruits);
console.log("I have "+fruits[0][1]+" "+fruits[0][0]);

// 2.
// Cách 1:
let a=0;
while (a<4) {
    console.log(fruits[a][0]+":"+fruits[a][1]);
    a++;
};
// Cách 2:
let x=0;
while (x<4) {
    for (let y = 0; y < 2; y++) {
        console.log(fruits[x][y]);
    };
    x++;
};

//3.
var Husky = {
    "name": "Ngáo",
    "legs": 4,
    "friends": ["everything!"]
};
Husky["color"] = "Brown";
delete Husky.friends;
console.log(Husky);

// Bài 5: 
// Tạo 1 đối tượng tính toán: đối tượng là count
// Thuộc tính 2 số a,b; == giá trị gì đó 
// Method: các phép tính sau +, -, *, /

let count = {
    a: Number(prompt("Nhập số thứ nhất: ")),
    b: Number(prompt("Nhập số thứ hai: ")),
    Plus: function addition() {
        return this.a+this.b
    },
    Minus: function subtraction() {
        return this.a-this.b
    },
    Multiply: function multiplication() {
        return this.a*this.b
    },
    Divide: function division() {
        return this.a/this.b
    }
};
console.log(count);
console.log("Tổng số thứ nhất cộng số thứ hai là: "+count.Plus());
console.log("Hiệu số thứ nhất trừ số thứ hai là: "+count.Minus());
console.log("Tích số thứ nhất nhân số thứ hai là: "+count.Multiply());
console.log("Thương số thứ nhất chia số thứ hai là: "+count.Divide());


// console.log("a1*x+b1*y=c1");
// console.log("a2*x+b2*y=c2");
// let a1 = Number(prompt("Nhập a1: "));
// let b1 = Number(prompt("Nhập b1: "));
// let c1 = Number(prompt("Nhập c1: "));
// let a2 = Number(prompt("Nhập a2: "));
// let b2 = Number(prompt("Nhập b2: "));
// let c2 = Number(prompt("Nhập c2: "));
// let D = (a1*b2-a2*b1);
// let Dx = (b2*c1-b1*c2);
// let Dy = (c2*a1-c1*a2);
// let x = Dx/D;
// let y = Dy/D;
// if (D!=0) {  
//     console.log("Hệ có hai nghiệm là: ");
//     console.log("x = "+x);
//     console.log("y = "+y)
// } else if (D=0,Dx!=0) {  
//     console.log("Hệ vô nghiệm.")
// }  else if (D=0,Dy!=0) {  
//     console.log("Hệ vô nghiệm.")
// }  else {  
//     console.log("Hệ có vô số nghiệm.")
// }
