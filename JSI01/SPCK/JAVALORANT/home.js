//
//
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6L3CNjy8_nhcQZ72gKbUiXg4NtAA_q4s",
  authDomain: "eniwhe-7494b.firebaseapp.com",
  databaseURL:
    "https://eniwhe-7494b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eniwhe-7494b",
  storageBucket: "eniwhe-7494b.appspot.com",
  messagingSenderId: "685171033685",
  appId: "1:685171033685:web:30c986ea93c887c43836dc",
  measurementId: "G-FL18NTGK5T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// local
if (localStorage.getItem("Account") == null) {
  localStorage.setItem("Account", JSON.stringify({}));
  location.reload();
} else {
  var acc = JSON.parse(localStorage.getItem("Account"));
}
//
// Account
//
let account = document.getElementById("account");
account.addEventListener("click", function () {
  window.location.href = "/JSI01/SPCK/HTMLOL/login.html";
});
let accLogin = document.getElementById("accLogin");
accLogin.addEventListener("click", function () {
  window.location.href = "/JSI01/SPCK/HTMLOL/login.html";
});
let accSignup = document.getElementById("accSignup");
accSignup.addEventListener("click", function () {
  window.location.href = "/JSI01/SPCK/HTMLOL/signup.html";
});
let accSetting = document.getElementById("accSetting");
accSetting.addEventListener("click", function () {
  window.location.href = "/JSI01/SPCK/HTMLOL/account.html";
});

// pull
onValue(ref(database, "Users/" + acc.uid), function (data) {
  let userData = data.val();
  // log
  if (acc.status == "Logged") {
    // ava
    let ava = document.getElementById("userImg");
    if (userData.gender == "Male") {
      ava.src = "/JSI01/SPCK/ICONIC/male.JPG";
    } else if (userData.gender == "Female") {
      ava.src = "/JSI01/SPCK/ICONIC/female.JPG";
    }
    // name
    let nameArray = userData.name.split(" ");
    let accName = document.getElementById("userName");
    if (nameArray.length >= 2) {
      accName.innerHTML = `${nameArray[nameArray.length - 2]}
    ${nameArray[nameArray.length - 1]}`;
    } else {
      accName.innerHTML = `${userData.name}`;
    }
    // feature
    let accUnlog = document.getElementById("accUnlog");
    let accLog = document.getElementById("accLog");
    accUnlog.style.display = "none";
    accLog.style.display = "block";
    // acc
    account.addEventListener("click", function () {
      window.location.href = "/JSI01/SPCK/HTMLOL/account.html";
    });
  }
});
// unlog
let accSignout = document.getElementById("accSignout");
accSignout.addEventListener("click", function () {
  acc.status = "Unlog";
  localStorage.setItem("Account", JSON.stringify(acc));
  location.reload();
});

//
// WangGao
//
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

function countdown() {
  var now = new Date();
  var eventDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );

  var currentTime = now.getTime();
  var eventTime = eventDate.getTime();

  var remTime = eventTime - currentTime;

  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("h").innerHTML = h;
  document.getElementById("m").innerHTML = m;
  document.getElementById("s").innerHTML = s;

  setTimeout(countdown, 1000);
}

countdown();

// Get today's date
let today = new Date();

// Add one day to today's date
let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

// Get the day and month
let day = tomorrow.getDate();
let month = tomorrow.getMonth() + 1; // JavaScript months are 0-11

// Display the day and month
document.getElementById("tmrDate").innerHTML = day + "/" + month;

let flTour = document.getElementsByClassName("flTour");
for (let i = 0; i < flTour.length; i++) {
  flTour[i].addEventListener("click", function () {
    window.location.href = "/JSI01/SPCK/HTMLOL/discount.html";
  });
}
document.getElementById("flMore").addEventListener("click", function () {
  window.location.href = "/JSI01/SPCK/HTMLOL/discount.html";
});
