// let a = document.getElementById("a")

// let b = document.getElementsByClassName("b")

// let c = document.getElementsByTagName("li")

// let d = document.querySelector("li")
// // Chỉ in ra dòng đầu trong các dòng nếu nhiều
// // gọi tên giống trong style vd #a (id)

// // a.innerHTML: gọi ra content trong thẻ 
// // a.className hoặc a.id: đặt gtri mới cho thẻ 
// // a.style.backgroundColor ... : style thẻ *(phải viết thuộc tính gán trong "")

// let x = document.querySelector(".bt")
// x.style.fontSize = "50px"

// let y = document.querySelector("img")
// y.src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f7/12/caption.jpg?w=700&h=-1&s=1"

let t = document.createElement("p")
t.className = "tao"
t.innerHTML = "tao ra p"
document.body.appendChild(t)
