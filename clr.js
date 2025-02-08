// const colors = ["red", "peach", "green", "blue","zinc","#f1f5f9"];

// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const colors = [ "#638C6D","#E7FBB4","#A28B55", "#E16A54"  ];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
} 
 



