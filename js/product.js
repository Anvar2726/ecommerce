// products html uchun

const cards = document.querySelector('.products');
const search = document.querySelector('.header__left-search');
let searchEl = "";

function getProductCards({ description,discountPrice,discountPriceText,price,priceText,rating,discount,image}) {
    return `
    <li class="products__card">
        <img class="products__card-img" src=${image} alt=${description  }>
        <p class="products__card-discount">-${discount} %</p>
        <div class="products__card-discounts">
            <p class="products__card-discount-price">${discountPrice} ₽</p>
            <p class="products__card-discount-price2">
                ${price} ₽
            </p>
        </div>
        <div class="products__card-discounts">
            <p class="products__card-discounts-text">
                ${discountPriceText}
            </p>
            <p class="products__card-discounts-text">
                ${priceText}
            </p>
        </div>
        <p class="products__card-description">${description}</p>
        <p class="products__card-rating">${rating}</p>
        <button class="products__card-btn">В корзину</button>
    </li>
    `
}

// let searchProduct = products.filter((pr) =>{pr.description.includes(searchEl)})   // korsatish kk
// searchProduct.forEach(element => {
//     let card = getProductCards(element)
//     cards.innerHTML += card
// });
// function getProducts (){

    
// }

// getProducts()

// search.addEventListener('keyup', function(){
//     searchEl = this.value.toLowerCase().trim()
//     getProducts()
//     console.log(searchEl);
// })



products.forEach(element => {
    let card = getProductCards(element)
    cards.innerHTML += card
});
