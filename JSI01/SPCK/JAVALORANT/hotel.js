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

// fetch

let search = document.getElementById("search");
let list = document.getElementById("list");
let openlist = document.getElementById("openlist");
fetch("https://provinces.open-api.vn/api/?depth=1")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    let cityArray = data;
    for (let i = 0; i < cityArray.length; i++) {
      let li = document.createElement("li");
      li.innerText = `${cityArray[i].name
        .substring(0, 1)
        .toUpperCase()}${cityArray[i].name.substring(
        1,
        cityArray[i].name.length
      )}`;
      li.id = `li${i}`;
      li.className = "listCity";
      list.appendChild(li);
      li.addEventListener("click", function () {
        search.value = li.innerText;
      });
    }
    console.log(data[0].name);
    for (let i = 0; i < cityArray.length; i++) {
      let star = 4;
      let price = 990000;
      let childCharge = 200000;
      let adultCharge = 350000;
      let p12 = 990000;
      let p21 = 990000;
      let p31 = 1700000;
      let p22 = 2500000;

      if (cityArray[i].division_type == "thành phố trung ương") {
        star = 5;
        price = 1700000;
        childCharge = 300000;
        adultCharge = 500000;
        p12 = 1700000;
        p21 = 1700000;
        p31 = 2500000;
        p22 = 3300000;
      }
      // up firebase
      update(ref(database, "Hotels/" + i), {
        name: cityArray[i].name,
        ratePoint: 10,
        rateGenaral: "Exceptional",
        star: star,
        price: price,
        childCharge: childCharge,
        adultCharge: adultCharge,
        p12: p12,
        p21: p21,
        p31: p31,
        p22: p22,
      });
    }
  });
//
window.addEventListener("click", function (e) {
  if (search.contains(e.target)) {
    list.style.display = "block";
  } else if (openlist.contains(e.target)) {
    if (list.style.display == "block") {
      list.style.display = "none";
    } else if ((list.style.display = "none")) {
      list.style.display = "block";
    }
  } else {
    list.style.display = "none";
  }
});
//
search.addEventListener("keyup", function (eve) {
  if (eve.key !== "Enter") {
    list.style.display = "block";
    let filter, li, txtValue;
    filter = search.value.toUpperCase();
    li = list.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
      txtValue = li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "block";
      } else {
        li[i].style.display = "none";
      }

      if (filter == txtValue.toUpperCase()) {
        test = 1;
      }
    }
  }
});
let room = document.getElementById("room");
let guest = document.getElementById("guest");
for (let i = 1; i < 101; i++) {
  let option = document.createElement("option");
  option.innerText = i;
  option.value = i;
  option.className = "grs";
  room.appendChild(option);
}
for (let i = 1; i < 101; i++) {
  let option = document.createElement("option");
  option.innerText = i;
  option.value = i;
  option.className = "grs";
  guest.appendChild(option);
}
//
onValue(ref(database, "Hotels/"), function (data) {
  let hotelData = data.val();
  console.log(hotelData);
  let roomCtn = document.getElementById("roomCtn");
  for (let i = 0; i < hotelData.length; i++) {
    let starString = "";
    for (let k = 0; k < hotelData[i].star; k++) {
      starString =
        starString + `<i class="fa-solid fa-star" style="color: #ffd43b"></i>`;
    }
    //
    let div = document.createElement("div");
    div.innerHTML = `<img src="/JSI01/SPCK/MAINPIC/hotel.JPG" alt="" class="hotelImg" />
      <div class="hotelRight">
        <div class="hotelInfo">
          <div class="hotelTag">
            <div class="tag" style="background-color: rgb(255, 188, 57)">
              Vị Trí Đẹp
            </div>
            <div class="tag" style="background-color: rgb(133, 71, 236)">
              Giá Cực Tốt
            </div>
          </div>
          <h4 class="hotelName">
            Khách sạn <span class="hotelCity"> ${hotelData[i].name} </span>
          </h4>
          <div class="hotelStar">
            ${starString}
          </div>
          <div class="hotelRate">
            <span class="rating">
              <b>
                <i class="fa-solid fa-medal"></i>
                <span class="ratePoint"> ${hotelData[i].ratePoint.toFixed(
                  1
                )} </span>
              </b>
            </span>
            <span class="rateGeneral"> ${hotelData[i].rateGenaral} </span>
          </div>
          <div class="freeW">
            <i class="fa-solid fa-wifi" style="color: #000000"></i>
            Free Wifi
          </div>
          <div class="freeB">
            <i class="fa-solid fa-utensils"></i>
            Free Breakfast
          </div>
          <div class="insCf">
            <i class="fa-solid fa-bolt"></i>
            Instant Confirmation
          </div>
          <div class="hotelPrice">
            <h4 class="priceTit">Hotel Price:</h4>
            <p class="hPrice">
              <b class="hp">
                ${String(hotelData[i].price).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  "."
                )}
                <span style="text-decoration: underline">đ</span>
              </b>
            </p>
          </div>
        </div>
      </div>`;
    div.addEventListener("click", function () {
      acc.clicked = i;
      localStorage.setItem("Account", JSON.stringify(acc));
      window.location.href = "/JSI01/SPCK/HTMLOL/room.html";
    });
    div.id = `hotel${i}`;
    div.className = "hotel";
    roomCtn.appendChild(div);
  }
});
onValue(ref(database, "Hotels/"), function (data) {
  let hotelData = data.val();
  let tr2 = document.getElementById("tr2");
  let tr1 = document.getElementById("tr1");
  let s5 = document.getElementById("s5");
  let s4 = document.getElementById("s4");
  let s3 = document.getElementById("s3");
  let s2 = document.getElementById("s2");
  let s1 = document.getElementById("s1");
  let c9 = document.getElementById("c9");
  let c8 = document.getElementById("c8");
  let c7 = document.getElementById("c7");
  tr2.addEventListener("click", function () {
    if (tr1.checked == false) {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        if (hotelData[i].star == 4) {
          hotel.style.display = "none";
        }
      }
    } else {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "flex";
      }
    }
  });
  tr1.addEventListener("click", function () {
    if (tr2.checked == false) {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        if (hotelData[i].star == 5) {
          hotel.style.display = "none";
        }
      }
    } else {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "flex";
      }
    }
  });
  s4.addEventListener("click", function () {
    if (s5.checked == false) {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "none";
      }
    } else {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "flex";
      }
    }
  });
  s3.addEventListener("click", function () {
    if (s5.checked == false) {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "none";
      }
    } else {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "flex";
      }
    }
  });
  s2.addEventListener("click", function () {
    if (s5.checked == false) {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "none";
      }
    } else {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "flex";
      }
    }
  });
  s1.addEventListener("click", function () {
    if (s5.checked == false) {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "none";
      }
    } else {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "flex";
      }
    }
  });
  s5.addEventListener("click", function () {
    for (let i = 0; i < hotelData.length; i++) {
      let hotel = document.getElementById(`hotel${i}`);
      hotel.style.display = "flex";
    }
  });
  c8.addEventListener("click", function () {
    if (c9.checked == false) {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "none";
      }
    } else {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "flex";
      }
    }
  });
  c7.addEventListener("click", function () {
    if (c9.checked == false) {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "none";
      }
    } else {
      for (let i = 0; i < hotelData.length; i++) {
        let hotel = document.getElementById(`hotel${i}`);
        hotel.style.display = "flex";
      }
    }
  });
  c9.addEventListener("click", function () {
    for (let i = 0; i < hotelData.length; i++) {
      let hotel = document.getElementById(`hotel${i}`);
      hotel.style.display = "flex";
    }
  });
});
//
onValue(ref(database, "Hotels/"), function (data) {
  let hotelData = data.val();
  let searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", function () {
    let search = document.getElementById("search");
    let room = document.getElementById("room");
    let guest = document.getElementById("guest");
    let checkDay = document.getElementById("checkDay");
    let checkIn = document.getElementById("checkIn");
    let checkOut = document.getElementById("checkOut");
    let cin = new Date(checkIn.value);
    let cout = new Date(checkOut.value);
    let date = new Date();
    var diffTime = Math.abs(cout - cin);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (
      checkIn.value == "" ||
      checkOut.value == "" ||
      cin > cout ||
      cin < date ||
      search.value == "" ||
      room.value == "default" ||
      guest.value == "default"
    ) {
      alert("Please check the information!");
    } else {
      checkDay.innerHTML = diffDays;
      for (let i = 0; i < hotelData.length; i++) {
        if (hotelData[i].name != search.value) {
          let hotel = document.getElementById(`hotel${i}`);
          hotel.style.display = "none";
        }
      }
    }
  });
});
let clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  location.reload();
});
