// Đăng nhập
let unsignDiv = document.getElementById("unsign");
let signedDiv = document.getElementById("signed");
let acc = document.getElementById("acc");
let check = 0;

if (localStorage.getItem("Accounts") == null) {
  localStorage.setItem("Accounts", JSON.stringify([]));
  location.reload();
  check = 1;
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
