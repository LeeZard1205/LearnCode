let mail = document.getElementById("email");
let mk = document.getElementById("mk");
let check = 0;

if (localStorage.getItem("personAccount") == null) {
  check = 1;
} else {
  var listUser = JSON.parse(localStorage.getItem("personAccount"));
}

function checkinf() {
  if (mail.value == "" || mk.value == "") {
    alert("Please fill in the information below!");
  } else if (check == 1) {
    alert("Please check your email and password and try again!");
  } else {
    for (let i = 0; i < listUser.length; i++) {
      if (listUser[i].email == mail.value && listUser[i].password == mk.value) {
        alert("Logged in successfully");
        mail.value = "";
        mk.value = "";
        break;
      } else {
        check = 1;
      }
    }
    if (check == 1) {
      alert("Please check your email and password and try again!");
    }
  }
}
