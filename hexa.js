// const hexa = ["#000000", "#FFFFFF", "#FF0000", "#FFFF00" ];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function(){
//   const randomNumber = getRandomNumber();

//   document.body.style.backgroundColor = hexa[randomNumber];
//   color.textContennt = hexa[randomNumber];
// });

// function getRandomNumber(){
//   return Math.floor(Math.random() * hexa.length);
// }






const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
} 