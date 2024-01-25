// index html
const cards = document.querySelector('.discount__cards');
const novinkiCards = document.querySelector('.novinki__cards')
const bought = document.querySelector('.bought__cards')


function getProductCards({ description, discountPrice, discountPriceText, price, priceText, rating, discount, image }) {
    return `
        <li class="discount__card">
            <img class="discount__card-img" src=${image} alt=${description}>
            <p class="discount__card-discount">-${discount} %</p>
            <div class="discount__card-discounts">
                <p class="discount__card-discounts-price">${discountPrice} ₽</p>
                <p class="discount__card-discounts-price2">
                    ${price} ₽
                </p>
            </div>
            <div class="discount__card-discounts">
                <p class="discount__card-discounts-text">
                    ${discountPriceText}
                </p>
                <p class="discount__card-discounts-text">
                    ${priceText}
                </p>
            </div>
            <p class="discount__card-description">${description}</p>
            <p class="discount__card-rating">rating ${rating}</p>
            <button class="discount__card-btn">В корзину</button>
        </li>
    `
}
// aksiya
const discountProduct = products.filter(pr => pr.discount == 50).slice(0, 4);
discountProduct.forEach(pr => {
    cards.innerHTML += getProductCards(pr)
})


// novinki
const lastProducts = products.filter(pr => pr.discount == 0).slice(-4)
lastProducts.forEach(product => novinkiCards.innerHTML += getProductCards(product))


// bought
const highRating = products.sort((a, b) => a.rating - b.rating).reverse().slice(0, 4)
highRating.forEach(product => bought.innerHTML += getProductCards(product))