function numberOneTriangle() {
  for (let i = 1; i <= 5; i++) {
    let l = "";
    for (let k = 1; k <= i; k++) {
      l += "1";
    }
    console.log(l);
  }
}
numberOneTriangle();
