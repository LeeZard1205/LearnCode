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
// login
let login = document.getElementById("subBtn");
login.addEventListener("click", function () {
  let email = document.getElementById("mail").value;
  let password = document.getElementById("pass").value;

  let cf = document.getElementById("cf").checked;

  if (cf == false) {
    alert("Please confirm the information!");
  } else if (cf == true) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        let dt = new Date();
        const user = userCredential.user;
        update(ref(database, "Users/" + user.uid), {
          lastLogin: dt,
        });
        acc = {
          uid: user.uid,
          status: "Logged",
        };
        localStorage.setItem("Account", JSON.stringify(acc));
        onValue(ref(database, "Users/" + user.uid), function (data) {
          console.log(data.val());
          for (let i in data.val()) {
            let txt = i + ": " + data.val()[i].name;
          }
        });

        alert("User Login Success!\nLet's Explore");
        setTimeout(() => {
          window.location.href = "/JSI01/SPCK/HTMLOL/home.html";
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
});
