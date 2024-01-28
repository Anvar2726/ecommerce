const apps = [
    {
        id: 1,
        title:"Оформите карту «Северяночка»",
        text:"И получайте бонусы при покупке в магазинах и на сайте",
        image:"images/APP1.png",
    },
    {
        id: 2,
        title:"Покупайте акционные товары",
        text:"И получайте вдвое больше бонусов",
        image:"images/APP2.png",
    }
]

const appsWrapper = document.querySelector('.apps__wrapper');

const getAppItem = ({title, text, image}) =>{
    return `
        <div class="apps__item">
            <div>
                <h3 class="apps__item-title">${title}</h3>
                <p class="apps__item-text">${text}</p>
            </div>
            <img src=${image} alt=${title}>
        </div>
    `
}

apps.forEach(element =>{
    appsWrapper.innerHTML += getAppItem(element)
})

const btns = document.querySelectorAll('.magazins__btn')
const maps = document.querySelectorAll('.magazins__map')
let active = 0

function btnTab (){
    maps.forEach((el, i) =>{
        if(i == active){
            el.style.display = "block";
            btns[i].classList.add('magazins__btn-active') 
        }else{
            el.style.display = "none";
            btns[i].classList.remove('magazins__btn-active')
        }
    })
}

btnTab()

btns.forEach((el, i) =>{
    el.addEventListener('click', function(){
        active = i
        btnTab()
    })
})



// variables
const main = document.querySelector('.main')
const search = document.querySelector('.search__container');
const searchInpt = document.querySelector('.header__left-search');
let searchRes = "";
let searchContent = document.querySelector('.search')

function getSearchElement ({description, price, image}){
    return `
    <div class="search__card">
        <img class="search-img" src=${image} alt=${description}>
        <p class="search-title">${description}</p>
        <p class="search-price">${price} ₽</p>
    </div>
    `
};

function getSearchCard(){
    let result = products.filter((el) =>  el.description.toLowerCase().includes(searchRes) )
    
    search.innerHTML = ""
    result.forEach(el =>{
        search.innerHTML += getSearchElement(el)
    });

    if(result.length == 0){
        // alert("mahsulot topilmadi")
        search.innerHTML = `
        <div class="search__alert">
            <p class="search__alert-title">Topilmadi</p>
            <p class="search__alert-title"> 0 ₽</p>
        </div>
        `
    }
}



searchInpt.addEventListener('keyup', function(){
    searchRes = this.value.trim().toLowerCase()
    getSearchCard()
    console.log(searchRes);
})

searchInpt.addEventListener('click', function(){
    searchContent.style.display = "block"
    getSearchCard()
})

main.addEventListener('click', function(){
    searchContent.style.display = "none"
})


