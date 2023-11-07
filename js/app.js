// create an array that contains colors
const colors = ["papayawhip", "red", "cadetblue", "#f15025"];
let colorsLength = colors.length;
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * colorsLength);
  let newColor = colors[randomNumber];
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
});
