fetch("https://jsonplaceholder.typicode.com/photos")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    for (let i = 0; i < 10; i++) {
      let realGoat = document.getElementsByClassName("realGoat")[0];
      let container = document.createElement("div");
      container.className = "container";
      container.id = `id${i + 1}`;
      container.innerHTML = `<img src="${data[i].url}" alt="" />
        <hr>
        <h3>Id: <span>${data[i].id}</span></h3>
        <h2>Title: <span>${data[i].title}</span></h2>
        <button>Button</button>`;
      realGoat.appendChild(container);
    }
  })
  .catch(function (a) {
    console.log(a);
  });

//
