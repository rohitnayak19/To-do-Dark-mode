const craousel = document.querySelector('.carousel')
const images = document.querySelectorAll('.carousel img')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

let index = 0;
let ci = setInterval(() => showImages(index + 1),3000)
function showImages(i){
    index = (i + images.length) % images.length;
    // console.log(index);
    console.log(craousel.style.transform = `translateX(-${index * 700}px)`);
    
    craousel.style.transform = `translateX(-${index * 700}px)`
    clearInterval(ci)
    ci = setInterval(() => showImages(index + 1), 3000)
}

prevBtn.addEventListener('click',() => showImages(index - 1 ))
nextBtn.addEventListener('click',() => showImages(index + 1 ))