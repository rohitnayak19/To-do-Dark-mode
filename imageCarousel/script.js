const carousel = document.querySelector('.carousel')
const images = document.querySelectorAll('.carousel img')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let index = 0;

let ci = setInterval(() => showImages(index + 1), 6000);

function showImages(i) {
    index = (i + images.length) % images.length
    carousel.style.transform = `translateX(-${index * 600}px)`
    clearInterval(ci)
    ci = setInterval(() => showImages(index + 1), 6000);
}

prevBtn.addEventListener('click', () => showImages(index - 1))
nextBtn.addEventListener('click', () => showImages(index + 1))




