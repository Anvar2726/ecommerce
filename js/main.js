const catalog = document.querySelector('.header__catalog');
const catalogBtn = document.querySelector('.header__left-btn1');

const catalogOpen = () =>{
    catalog.classList.toggle('header__catalog-open')
}

catalogBtn.addEventListener('click', catalogOpen);