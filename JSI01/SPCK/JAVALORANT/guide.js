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
window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  let menu = document.getElementById("menu");
  if (window.pageYOffset >= 2170) {
    menu.style.position = "absolute";
  } else {
    menu.style.position = "sticky";
  }
});
