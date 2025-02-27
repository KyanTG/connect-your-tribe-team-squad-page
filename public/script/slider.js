const slider = document.getElementById('sliderControl');

slider.addEventListener("input", function (){
  const year = slider.value;
  const elements = document.querySelectorAll(".hidden");

  elements.forEach(el => el.classList.remove("visible"));

  const activeElement = document.querySelector(`.y${year}`);
  if (activeElement) {
    activeElement.classList.add("visible");
  }
});
