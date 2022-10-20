let menu = document.querySelector('#menu-bars');
let mavbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    mavbar.classList.toggle('active');

}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    mavbar.classList.remove('active');
    
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active')
}