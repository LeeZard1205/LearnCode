// Đăng nhập
let unsignDiv = document.getElementById("unsign");
let signedDiv = document.getElementById("signed");
let acc = document.getElementById("acc");
let check = 0;
let a = 0;
if (localStorage.getItem("Accounts") == null) {
  localStorage.setItem("Accounts", JSON.stringify([]));
  location.reload();
} else {
  var listUser = JSON.parse(localStorage.getItem("Accounts"));
}

for (let i = 0; i < listUser.length; i++) {
  if (listUser[i].status == "signed") {
    acc.innerHTML = listUser[i].email.slice(
      0,
      listUser[i].email.search("@gmail.com")
    );
    unsignDiv.style.display = "none";
    signedDiv.style.display = "block";
    check = 1;
    a = i;
  }
}
function signOut() {
  for (let i = 0; i < listUser.length; i++) {
    if (listUser[i].status == "signed") {
      listUser[i].status = "unsign";
      localStorage.setItem("Accounts", JSON.stringify(listUser));
    }
  }
  location.reload();
}
// Wang gao
let slideIndex = 1;
showSlides(slideIndex);
function pushSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
let i = 1;
setInterval(function () {
  if (i <= 3) {
    currentSlide(i);
    i++;
  } else {
    i = 1;
  }
}, 2000);
// Product
let pros = [];
let proPic = document.getElementsByClassName("pic");
let proName = document.getElementsByClassName("proName");
let proPrice = document.getElementsByClassName("price");
for (let i = 0; i < proPic.length; i++) {
  pros[i] = {
    ppic: proPic[i].src,
    pname: proName[i].innerHTML,
    pprice: proPrice[i].innerHTML,
  };
  proPic[i].addEventListener("click", function () {
    localStorage.setItem("proClick", JSON.stringify(pros[i]));
  });
  proName[i].addEventListener("click", function () {
    localStorage.setItem("proClick", JSON.stringify(pros[i]));
  });
}
// Add to cart
let addBtn = document.getElementsByClassName("addBtn");
if (check == 1 && listUser[a].buyPro == null) {
  for (let i = 0; i < proPic.length; i++) {
    buyPro[i] = {
      ppic: proPic[i].src,
      pname: proName[i].innerHTML,
      pprice: proPrice[i].innerHTML,
      pnum: 0,
    };
  }
  listUser[a].buyPro = buyPro;
  localStorage.setItem("Accounts", JSON.stringify(listUser));
} else if (check == 1 && listUser[a].buyPro != null) {
  var buyPro = listUser[a].buyPro;
}
if (localStorage.getItem("buyPro") == null && check == 0) {
  for (let i = 0; i < proPic.length; i++) {
    buyPro[i] = {
      ppic: proPic[i].src,
      pname: proName[i].innerHTML,
      pprice: proPrice[i].innerHTML,
      pnum: 0,
    };
  }
  localStorage.setItem("buyPro", JSON.stringify(buyPro));
  location.reload();
} else {
  var buyPro = JSON.parse(localStorage.getItem("buyPro"));
}

for (let i = 0; i < proPic.length; i++) {
  addBtn[i].addEventListener("click", function () {
    let b = buyPro[i].pnum;
    console.log(b);
    buyPro[i].pnum = b + 1;
    if (check == 1) {
      listUser[a].buyPro = buyPro;
      localStorage.setItem("Accounts", JSON.stringify(listUser));
    } else if (check == 0) {
      localStorage.setItem("buyPro", JSON.stringify(buyPro));
    }
  });
}
