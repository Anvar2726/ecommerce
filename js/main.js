const catalog = document.querySelector('.header__catalog');
const catalogBtn = document.querySelector('.header__left-btn1');

function getCatalog({name}){
    return`
         <a class = "header__catalog-link" href="#">${name}</a>
    `
}

categories.forEach(element => {
    catalog.innerHTML += getCatalog(element)
});
console.log(catalog);

const catalogOpen = () =>{
    catalog.classList.toggle('header__catalog-open')
}

catalogBtn.addEventListener('click', catalogOpen);