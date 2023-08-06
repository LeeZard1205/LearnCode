// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  child,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVxD6V_pXEUP5PgqMTrRSNOC2idX4Za8s",
  authDomain: "todoapp-92cf9.firebaseapp.com",
  databaseURL:
    "https://todoapp-92cf9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todoapp-92cf9",
  storageBucket: "todoapp-92cf9.appspot.com",
  messagingSenderId: "631045077650",
  appId: "1:631045077650:web:20d1df473665bee4b1444b",
  measurementId: "G-GPB2Y0CGY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Cre
let butonCr = document.getElementById("btnCr");
let lame = document.getElementById("inpName");
butonCr.addEventListener("click", () => {
  if (lame.value !== "") {
    // let randomKey = Math.floor(Math.random() * 100 + 1);
    const userId = push(child(ref(database), "User/")).key;
    set(ref(database, "User/" + `${userId}`), {
      name: lame.value,
    });
    lame.value = "";
    alert("Add Suck!!!");
  }
});

// Rd
let butonRd = document.getElementById("btnRd");
butonRd.addEventListener("click", () => {
  let dataref = ref(database, "User/");
  console.log(dataref);
  onValue(dataref, function (data) {
    console.log(data.val());
    for (let i in data.val()) {
      let txt = i + ": " + data.val()[i].name;
      let ngu = document.createElement("h1");
      ngu.className = "ngu";
      ngu.innerText = txt;
      document.body.appendChild(ngu);
    }
  });
});
