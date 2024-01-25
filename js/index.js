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

apps.forEach(product =>{
    appsWrapper.innerHTML += getAppItem(product)
})

const btns = document.querySelectorAll('.magazins__btn')
const maps = document.querySelectorAll('.magazins__map')
let active = 0

function btnTab (){
    maps.forEach((el, i) =>{
        if(i == active){
            el.style.display = "block";
            btns[i].style.background = 'red'
        }else{
            el.style.display = "none";
            btns[i].style.background = 'yellow'
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
