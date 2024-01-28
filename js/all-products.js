const allProducts = document.querySelector('.products');
const searchInput = document.querySelector('.header__left-search');
const info = document.querySelector('.products__info');
let search = '';

// let productsNav = document.querySelector('.products__nav');
let activePage = 1;

let pagination = document.querySelector('.products__pagination');

function getAllProductCards({ description, discountPrice, discountPriceText, price, priceText, rating, discount, image }) {
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
};

function getProducts() {
    let res = products.filter((el) => el.description.toLowerCase().includes(search));

    let pages = Math.ceil(res.length / LIMIT);

    pagination.innerHTML = `
    <li>
        <button onclick = "getPage('-')" class="products__pagination-prewious" ${activePage == 1 ? 'disabled' : ""}>
            Prewious
        </button>
    </li>
    `;

    for(let i = 1; i <= pages; i++){
        pagination.innerHTML += `
        <li>
            <button onclick = 'getPage(${i})' class="products__pagination-btn ${i === activePage? "products__pagination-active": ""}">
                ${i}
            </button>
        </li>
        `
    };

    pagination.innerHTML += `
    <li>
        <button onclick = "getPage('+')" class="products__pagination-next" ${activePage == pages ? 'disabled' : ''}>
            Next
        </button>
    </li>
    `;

    let start = (activePage - 1) * LIMIT;
    let end = activePage * LIMIT;

    allProducts.innerHTML = "";
    res.slice(start, end).forEach(element => {
        allProducts.innerHTML += getAllProductCards(element);
    });
    if(res.length == 0){
        allProducts.innerHTML = `
        <div class="products__info">
            <h1 >Mahsulot topilmadi</h1>
         </div>
        `
    };

}

function getPage(page){
    if(page === '+'){
        activePage++
    }else if(page === '-'){
        activePage--
    }else{
        activePage = page;
    }
    getProducts();
}

getProducts();

searchInput.addEventListener('keyup', function () {
    search = this.value.trim().toLowerCase();
    getProducts()
    activePage = 1
});


// function getProducts() {
//     let result = products.filter((el) => el.description.toLowerCase().includes(search))

//     let pages = Math.ceil(result.length / LIMIT)
//     if(pages > 1){
//         productsNav.innerHTML = `
//         <li>
//             <button ${activePage === 1 ? "disabled": ""}  onclick = "getPage('-')" class="products__nav-prewious">
//                 prewious
//             </button>
//         </li>
//         `
//         for (let i = 1; i <= pages; i++){
//             productsNav.innerHTML += `
//             <li>
//             <button onclick = "getPage(${i})" class="products__nav-btn ${i == activePage ? "products__nav-active": ""}">
//                 ${i}
//             </button>
//             </li>
//             `
//         }
//         productsNav.innerHTML += `
//         <li>
//             <button ${activePage === pages ? "disabled": ""}  onclick = "getPage('+')" class="products__nav-next">
//                 next
//             </button>
//         </li>
//         `
//     }else{
//         productsNav.innerHTML = ""
//     }

//     let start = (activePage - 1) * LIMIT
//     let end = activePage * LIMIT

//     allProducts.innerHTML = ''
//     result.slice(start, end).forEach(el => {
//         allProducts.innerHTML += getAllProductCards(el)
//     })
// }

// function getPage(page){
//     if(page === "+"){
//         activePage ++
//     }else if(page === "-"){
//         activePage--
//     }else{
//         activePage = page
//     }getProducts()
//     console.log(activePage);
// }

// getProducts()

// searchInput.addEventListener('keyup', function () {
//     search = this.value.trim().toLowerCase()
//     activePage = 1
//     getProducts()
// })