const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // generate a random value 5 times
  let hexColor = `#`;
  for (let i = 0; i <= 5; i++) {
    randomNumber = Math.floor(Math.random() * hex.length);
    let value = hex[randomNumber];

    hexColor = hexColor + value;
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
