const Slider = document.querySelector(".slider");
const BSlider = document.querySelector(".yearslider");
const SliderMax = parseInt(Slider.max);

function SliderYear(){
    let progress = (Slider.value / maxVal) * 100;
    BSlider.style.left = progress + "%";
    BSlider.innerHTML = "*" + Slider.value;
}

window.onload = function() {
    SliderYear();
}