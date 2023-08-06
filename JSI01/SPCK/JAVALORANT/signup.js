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

// sign up
let signUp = document.getElementById("subBtn");
signUp.addEventListener("click", function () {
  let email = document.getElementById("mail").value;
  let password = document.getElementById("pass").value;

  let cfpassword = document.getElementById("cfpass").value;
  let cf = document.getElementById("cf").checked;

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let birth = document.getElementById("birth").value;
  let gender = document.getElementById("gender").value;
  let city = document.getElementById("city").value;
  let district = document.getElementById("district").value;
  let ward = document.getElementById("ward").value;
  let cuthe = document.getElementById("qcuthe").value;
  if (password != cfpassword) {
    alert("Passwords do not match!");
  } else if (cf == false) {
    alert("Please confirm the information!");
  } else if (password == cfpassword && cf == true) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        set(ref(database, "Users/" + user.uid), {
          email: email,
          password: password,
          name: name,
          phone: phone,
          birth: birth,
          gender: gender,
          city: city,
          district: district,
          ward: ward,
          cuthe: cuthe,
        });
        alert("User Created Successfully!\nLet's Login");
        setTimeout(() => {
          window.location.href = "/JSI01/SPCK/HTMLOL/login.html";
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
      });
    // window.location.href = "/JSI01/SPCK/HTMLOL/login.html";
  }
});
