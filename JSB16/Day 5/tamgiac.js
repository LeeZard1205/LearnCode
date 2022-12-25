let a = prompt("Nhập cạnh a(cm):");
let b = prompt("Nhập cạnh b(cm):");
let c = prompt("Nhập cạnh c(cm):");
a = Number(a);
b = Number(b);
c = Number(c);
p = (a+b+c)/2;
console.log("Chu vi = "+ p*2 +"cm");
console.log("Diện tích bình phương = "+ p*(p-a)*(p-b)*(p-c));

