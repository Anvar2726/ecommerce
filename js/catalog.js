const catalogCards = document.querySelector('.catalog__cards');


function getCatalogCard ({name, image}){
    return `
    <div class="catalog__card">
        <img class="catalog__card-img" src=${image} alt=${name}>
        <p class="catalog__card-text">${name}</p>
        <div class="catalog__card-hover"></div>
    </div>
    `
}

categories.forEach(el =>{
    catalogCards.innerHTML += getCatalogCard(el)
})