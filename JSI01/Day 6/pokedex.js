let search = document.getElementById("search");
let list = document.getElementById("list");
let openlist = document.getElementById("openlist");
let aniArray = [];
fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    aniArray = data.results;
    for (let i = 0; i < aniArray.length; i++) {
      let li = document.createElement("li");
      li.innerText = aniArray[i].name;
      li.id = `li${i}`;
      li.className = "listEle";
      list.appendChild(li);
      li.addEventListener("click", function () {
        search.value = li.innerText;
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
//
search.addEventListener("keypress", function (event) {
  let test = 0;
  let li = list.getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
    txtValue = li[i].innerText;
    if (search.value.toUpperCase() == txtValue.toUpperCase()) {
      test = 1;
    }
  }
  if (event.key === "Enter" && test == 1) {
    event.preventDefault();
    list.style.display = "none";
    fetch(`https://pokeapi.co/api/v2/pokemon/${search.value}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        let name = document.getElementById("name");
        let ndex = document.getElementById("ndex");
        let weight = document.getElementById("weight");
        let height = document.getElementById("height");
        let type = document.getElementById("type");
        let img = document.getElementById("aniImg");

        name.innerText = `${data.name
          .substring(0, 1)
          .toUpperCase()}${data.name.substring(1, data.name.length)}`;
        weight.innerText = `${data.weight}lbs`;
        height.innerText = `${data.height / 10}m`;
        for (let i = 0; i < aniArray.length; i++) {
          if (aniArray[i].name.toUpperCase() == search.value.toUpperCase()) {
            var a = i + 1;
          }
        }
        if (a < 10) {
          ndex.innerText = `#000${a}`;
        } else if (a >= 10 && a < 100) {
          ndex.innerText = `#00${a}`;
        } else if (a >= 100 && a < 1000) {
          ndex.innerText = `#0${a}`;
        } else if (a >= 1000) {
          ndex.innerText = `#${a}`;
        }
        let typeArray = data.types;
        let string = `${typeArray[0].type.name
          .substring(0, 1)
          .toUpperCase()}${typeArray[0].type.name.substring(
          1,
          typeArray[0].type.name.length
        )}`;

        if (typeArray.length > 1) {
          for (let i = 1; i < typeArray.length; i++) {
            string =
              string +
              ", " +
              `${typeArray[i].type.name
                .substring(0, 1)
                .toUpperCase()}${typeArray[i].type.name.substring(
                1,
                typeArray[i].type.name.length
              )}`;
          }
        }
        type.innerText = string;
        img.src = data.sprites.front_default;
      });
  } else if (event.key === "Enter" && test == 0) {
    alert("Check your Animon name !!!");
  }
});
