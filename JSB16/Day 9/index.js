// let ul = document.createElement("ul")
// document.body.appendChild(ul)
// let ho = document.createElement("li")
// let dem = document.createElement("li")
// let ten = document.createElement("li")
// ho.innerHTML = "Họ"
// dem.innerHTML = "Tên đệm"
// ten.innerHTML = "Tên"
// ul.appendChild(ho)
// ul.appendChild(dem)
// ul.appendChild(ten)

// let b = document.getElementById("bt")

// function hello() {
//     // let a = document.getElementsByTagName("p")
//     // if (a[0].innerHTML === "Ten toi la") {
//     //     a[0].innerHTML = "Bao";
//     // } else {
//     //     a[0].innerHTML = "Ten toi la";
//     // }
//     let a = document.getElementsByClassName("container")
//     if (a[0].style.backgroundColor === "red") {
//         a[0].style.backgroundColor = "blue"
//     } else {
//         a[0].style.backgroundColor = "red"
//     }
// }
// b.addEventListener("click", hello)

let a = document.getElementById("bt")
function sub() {
    let b = document.getElementById("ip1");
    let c = document.getElementById("ip2");
    let d = Number(b.value) + Number(c.value);
    let e = document.createElement("p");
    e.innerHTML = d;
    document.body.appendChild(e)
}
a.addEventListener("click", sub)


