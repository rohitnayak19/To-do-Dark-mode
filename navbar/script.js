const openMenu = document.getElementById('open')
const closeMenu = document.getElementById('close')
const ul = document.querySelector('ul');

openMenu.addEventListener('click' ,(e) =>{
    ul.style.left = '0'
    e.stopPropagation()
})

closeMenu.addEventListener('click' ,(e) =>{
    ul.style.left = '-305px'
    e.stopPropagation()
})

document.addEventListener('click',(e)=>{
    const isInsideNav = document.querySelector('nav').contains(e.target)
    console.log(isInsideNav);
    
    if(!isInsideNav){
        ul.style.left = '-305px'
    }
})