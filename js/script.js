let toggle = document.querySelector(".switch");
let delivery = document.querySelector(".delivery");

function changeColor() {
  toggle.classList.toggle("active");

  if (toggle.classList.contains("active")) {
    delivery.style.color = "#ee7839";
  } else {
    delivery.style.color = "white";
  }
}
