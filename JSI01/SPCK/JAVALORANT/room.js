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
  let roomBar = document.getElementById("roomBar");
  let topMenu = document.querySelector(".topMenu");
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 80) {
    roomBar.style.display = "flex";
    topMenu.style.boxShadow = "none";
  } else {
    roomBar.style.display = "none";
    topMenu.style.boxShadow = "0 2px 5px 1px rgb(64 60 67 / 16%)";
  }
  let hig = document.getElementById("hig");
  let roo = document.getElementById("roo");
  let boo = document.getElementById("boo");
  let rev = document.getElementById("rev");
  let pro = document.getElementById("pro");
  let select = document.getElementById("select");
  select.addEventListener("click", function () {
    window.scrollTo(0, 3900);
  });

  hig.addEventListener("click", function () {
    window.scrollTo(0, 800);
  });
  roo.addEventListener("click", function () {
    window.scrollTo(0, 1800);
  });
  boo.addEventListener("click", function () {
    window.scrollTo(0, 3900);
  });
  rev.addEventListener("click", function () {
    window.scrollTo(0, 5700);
  });
  pro.addEventListener("click", function () {
    window.scrollTo(0, 6060);
  });
  let bookInfo = document.getElementById("bookin");
  if (window.pageYOffset >= 800 && window.pageYOffset <= 5380) {
    bookInfo.className = "bookIf";
  } else {
    bookInfo.className = "bookInfo";
  }
});
//
onValue(ref(database, "Hotels/"), function (data) {
  let hotelData = data.val();
  console.log(hotelData);
  let ovInfo = document.getElementById("ovInfo");

  let starString = "";
  for (let k = 0; k < hotelData[acc.clicked].star; k++) {
    starString =
      starString + `<i class="fa-solid fa-star" style="color: #ffd43b"></i>`;
  }
  //
  let div = document.createElement("div");
  div.innerHTML = `<div class="hotelInfo">
    <div class="hotelTag">
      <div class="tag" style="background-color: rgb(255, 188, 57)">
        Vị Trí Đẹp
      </div>
      <div class="tag" style="background-color: rgb(133, 71, 236)">
        Giá Cực Tốt
      </div>
    </div>
    <h4 class="hotelName">
      Khách sạn
      <span class="hotelCity"> ${hotelData[acc.clicked].name} </span>
    </h4>
    <div class="hotelStar">${starString}</div>
    <div class="hotelRate">
      <span class="rating">
        <b>
          <i class="fa-solid fa-medal"></i>
          <span class="ratePoint">
            ${hotelData[acc.clicked].ratePoint.toFixed(1)}
          </span>
        </b>
      </span>
      <span class="rateGeneral">
        ${hotelData[acc.clicked].rateGenaral}
      </span>
    </div>
    <div class="tagCtn">
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
    </div>
  </div>
  <div class="ovRCtn">
    <div class="priceCtn">
      <p>Price:</p>
      <h3>
        ${String(hotelData[acc.clicked].price).replace(
          /\B(?=(\d{3})+(?!\d))/g,
          "."
        )}
        <span style="text-decoration: underline">đ</span>
      </h3>
    </div>
    <button id="select">Select Room</button>
  </div>`;
  div.addEventListener("click", function () {
    acc.clicked = i;
    localStorage.setItem("Account", JSON.stringify(acc));
    window.location.href = "/JSI01/SPCK/HTMLOL/room.html";
  });
  ovInfo.appendChild(div);
});

//
function ordinal(n) {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

//
let floorName = document.getElementsByClassName("floorName");
for (let i = 0; i < floorName.length; i++) {
  floorName[i].innerHTML = `${ordinal(i + 1)} Floor:`;
}
onValue(ref(database, "Hotels/"), function (data) {
  let hotelData = data.val();
  let floor = 9;
  let roomArr = [];
  for (let i = 1; i <= floor; i++) {
    for (let k = 0; k < 10; k++) {
      let bed;
      let price;
      if (k == 0 || k == 5) {
        bed = "2 Single Beds";
        price = hotelData[acc.clicked].p21;
      } else if (k == 4 || k == 9) {
        bed = "3 Single Beds";
        price = hotelData[acc.clicked].p31;
      } else if (k == 1 || k == 2 || k == 3) {
        bed = "1 Double Bed";
        price = hotelData[acc.clicked].p12;
      } else if (k == 6 || k == 7 || k == 8) {
        bed = "2 Double Beds";
        price = hotelData[acc.clicked].p22;
      }
      roomArr.push({
        number: Number(`${i}0${k}`),
        price: price,
        bed: bed,
      });
    }
  }
  update(ref(database, `Hotels/` + acc.clicked), {
    room: roomArr,
  });
});

onValue(ref(database, "Hotels/"), function (data) {
  let hotelData = data.val();
  let roomArr = hotelData[acc.clicked].room;
  let room = document.getElementsByClassName("room");
  for (let i = 0; i < room.length; i++) {
    room[i].innerHTML = `<h4 class="roomNum">${roomArr[i].number}</h4>
    <p class="roomType">${roomArr[i].bed}</p>`;
  }
});
let select = document.getElementById("searchBtn");
var ch = 0;

select.addEventListener("click", function () {
  let checkIn = document.getElementById("checkIn");
  let checkOut = document.getElementById("checkOut");
  let cin = new Date(checkIn.value);
  let cout = new Date(checkOut.value);
  let date = new Date();
  var diffTime = Math.abs(cout - cin);
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (checkIn.value == "" || checkOut.value == "") {
    alert("Please enter the date!");
  } else if (cin > cout || cin < date) {
    alert("Please check your date!");
  } else {
    ch = 1;
    let bookTime = document.getElementById("bookTime");
    let coa = checkOut.value.split("-");
    let cia = checkIn.value.split("-");
    bookTime.innerHTML = `${cia[2]}/${cia[1]}/${cia[0]} - ${coa[2]}/${coa[1]}/${coa[0]}`;
  }
});

let room = document.getElementsByClassName("room");
for (let i = 0; i < room.length; i++) {
  room[i].addEventListener("click", function () {
    if (ch == 1) {
      console.log(i);
      room[i].style.backgroundColor = "Green";
      onValue(ref(database, "Hotels/" + acc.clicked), function (data) {
        let hoData = data.val();
        let lastP = document.getElementById("lastP");
        let roomInCtn = document.getElementById("roomInCtn");

        let checkIn = document.getElementById("checkIn");
        let checkOut = document.getElementById("checkOut");
        let cin = new Date(checkIn.value);
        let cout = new Date(checkOut.value);
        let date = new Date();
        var diffTime = Math.abs(cout - cin);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let div = document.createElement("div");
        div.innerHTML = `<div class="roomin">
          <h4>Room ${hoData.room[i].number}</h4>
          <p>${hoData.room[i].bed}</p>
        </div>`;
        roomInCtn.appendChild(div);
        let finPrice;
        finPrice =
          (Number(localStorage.getItem("price")) + hoData.room[i].price) *
          diffDays;
        localStorage.setItem("price", finPrice);
        lastP.innerHTML = `${String(finPrice).replace(
          /\B(?=(\d{3})+(?!\d))/g,
          "."
        )}<span style="text-decoration: underline">đ</span>`;
      });
    } else {
      alert("Please select date!");
    }
  });
}
let bookBtn = document.getElementById("bookBtn");
bookBtn.addEventListener("click", function () {
  if (acc.status == "Unlog") {
    alert("You need to login to book!");
    window.location.href = "/JSI01/SPCK/HTMLOL/login.html";
  } else {
    let roomInCtn = document.getElementById("roomInCtn");
    if (roomInCtn.innerHTML != "") {
      alert("Book Success!");
      window.location.href = "/JSI01/SPCK/HTMLOL/home.html";
    }
  }
});
//
let rateRange = document.getElementById("rateRange");
rateRange.addEventListener("change", function () {
  let ratePoint = document.getElementById("ratePoint");
  ratePoint.innerText = rateRange.value;
});
let sentBtn = document.getElementById("sentBtn");
sentBtn.addEventListener("click", function () {
  let rateTit = document.getElementById("rateTit");
  let rateCmt = document.getElementById("rateCmt");

  if (acc.status == "Unlog") {
    alert("You need to login to rate!");
    window.location.href = "/JSI01/SPCK/HTMLOL/login.html";
  } else if (rateCmt.innerHTML == "" || rateTit.value == "") {
    alert("Please fill all the form!");
  } else {
    alert("Rate Success!");
    location.reload();
  }
});

//
let p12 = document.getElementById("p12");
let p21 = document.getElementById("p21");
let p31 = document.getElementById("p31");
let p22 = document.getElementById("p22");
let note = document.getElementsByClassName("note");
onValue(ref(database, "Hotels/"), function (data) {
  let hotelData = data.val();
  p12.innerHTML = `${String(hotelData[acc.clicked].p12).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  )}<span style="text-decoration: underline">đ</span>`;
  p21.innerHTML = `${String(hotelData[acc.clicked].p21).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  )}<span style="text-decoration: underline">đ</span>`;
  p31.innerHTML = `${String(hotelData[acc.clicked].p31).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  )}<span style="text-decoration: underline">đ</span>`;
  p22.innerHTML = `${String(hotelData[acc.clicked].p22).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  )}<span style="text-decoration: underline">đ</span>`;
  for (let i = 0; i < note.length; i++) {
    note[i].innerHTML = `*Note: 
    In case of going over the prescribed number of people,
    children under 5 years old are not charged, children from 6 to 10
    years old will be charged ${String(
      hotelData[acc.clicked].childCharge
    ).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} per person and children from 11
    years old and adults will be charged ${String(
      hotelData[acc.clicked].adultCharge
    ).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
    <span style="text-decoration: underline">đ</span>`;
  }
  let hotel = document.getElementById("hotel");
  hotel.innerHTML = hotelData[acc.clicked].name;
});
