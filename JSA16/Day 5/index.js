let btn = document.querySelector("button");
let kindOfStorage = document.getElementById("kindOfStorage");
let username = document.getElementById("username");
let password = document.getElementById("password");

btn.addEventListener("click", function () {
  let key = kindOfStorage.value;
  let inputUsername = username.value;
  let inputPassword = password.value;

  let listUser = [];
  let user = {
    name: inputUsername,
    password: inputPassword,
  };

  listUser.push(user);

  localStorage.setItem(key, JSON.stringify(listUser));
  console.log("123");
});
