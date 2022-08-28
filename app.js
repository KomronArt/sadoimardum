const slider = document.querySelector(".img-slider")
const showImg = slider.querySelector('.showImg')
const sliderImages = slider.querySelector(".slider-images")
 
sliderImages.querySelector('.first').onclick = () => {
    const img = slider.querySelector(".show-slider-img")  
    img.src = "./img/first-slider-img.jpg";
}

sliderImages.querySelector('.second').onclick = () => {
    const img = slider.querySelector(".show-slider-img")
    img.src = "./img/second-slider-image.jpg";
}

sliderImages.querySelector('.third').onclick = () => {
    const img = slider.querySelector(".show-slider-img")
    img.src = "./img/third-slider-img.jpg";
}

sliderImages.querySelector('.fourth').onclick = () => {
    const img = slider.querySelector(".show-slider-img") 
    img.src = "./img/fourth-slider-img.jpg";
}

sliderImages.querySelector('.fives').onclick = () => {
    const img = slider.querySelector(".show-slider-img")
    img.src = "./img/fives-slider-img.jpg";
}