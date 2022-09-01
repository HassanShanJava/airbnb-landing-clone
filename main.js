const menu=document.querySelector('.mobile')
const navmenu=document.querySelector(".nav-menu")

const mobileMenu=()=>{
    menu.classList.toggle('active')
    navmenu.classList.toggle('active')    
};

const closeMenu=()=>{
    navmenu.classList.toggle('active')        
};