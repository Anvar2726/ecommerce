const products = [
    {
        id: 1,
        category: "",
        description: "Г/Ц Блинчики с мясом вес, Россия",
        discountPrice: 44.50,
        discountPriceText: "С картой",
        price: 55.50,
        priceText: "Обычная",
        rating: 2,
        discount: 50,
        image: "images/products/products1.png",
    },
    {
        id: 2,
        category: "Молоко, сыр, яйцо",
        description: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
        discountPrice: 44.50,
        discountPriceText: "С картой",
        price: 55.50,
        priceText: "Обычная",
        rating: 3,
        discount: 50,
        image: "images/products/products2.png",
    },
    {
        id: 3,
        category: "Мясо, птица, колбаса",
        description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
        discountPrice: 44.50,
        discountPriceText: "С картой",
        price: 55.50,
        priceText: "Обычная",
        rating: 5,
        discount: 50,
        image: "images/products/products3.png",
    },
    {
        id: 4,
        category: "Мясо, птица, колбаса",
        description: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
        discountPrice: 44.50,
        discountPriceText: "С картой",
        price: 55.50,
        priceText: "Обычная",
        rating: 4.5,
        discount: 50,
        image: "images/products/products4.png",
    },
    {
        id: 5,
        category: "Мясо, птица, колбаса",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        discountPrice: 0,
        discountPriceText: "",
        price: 599.9,
        priceText: "",
        rating: 2,
        discount: 0,
        image: "images/products/products5.png",
    },
    {
        id: 6,
        category: "Мясо, птица, колбаса",
        description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
        discountPrice: 0,
        discountPriceText: "",
        price: 44.50,
        priceText: "",
        rating: 5,
        discount: 0,
        image: "images/products/products3.png",
    },
    {
        id: 7,
        category: "Мясо, птица, колбаса",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        discountPrice: 0,
        discountPriceText: "",
        price: 159.99,
        priceText: "",
        rating: 2,
        discount: 0,
        image: "images/products/products4.png",
    },
    {
        id: 8,
        category: "Мясо, птица, колбаса",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        discountPrice: 0,
        discountPriceText: "",
        price: 49.39,
        priceText: "",
        rating: 2,
        discount: 0,
        image: "images/products/products2.png",
    },
    {
        id: 9,
        category: "Мясо, птица, колбаса",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        discountPrice: 0,
        discountPriceText: "",
        price: 77.99,
        priceText: "",
        rating: 2,
        discount: 0,
        image: "images/products/products6.png",
    },
    {
        id: 10,
        category: "Мясо, птица, колбаса",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        discountPrice: 0,
        discountPriceText: "",
        price: 159.99,
        priceText: "",
        rating: 2,
        discount: 0,
        image: "images/products/products4.png",
    },
    {
        id: 11,
        category: "Мясо, птица, колбаса",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        discountPrice: 0,
        discountPriceText: "",
        price: 599.99,
        priceText: "",
        rating: 2,
        discount: 0,
        image: "images/products/products5.png",
    },
    {
        id: 12,
        category: "Молоко, сыр, яйцо",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        discountPrice: 0,
        discountPriceText: "",
        price: 49.39,
        priceText: "",
        rating: 2,
        discount: 0,
        image: "images/products/products2.png",
    },
    {
        id: 13,
        category: "Молоко, сыр, яйцо",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        discountPrice: 0,
        discountPriceText: "",
        price: 139.99,
        priceText: "",
        rating: 2,
        discount: 0,
        image: "images/products/products7.png",
    },
    {
        id: 14,
        category: "Молоко, сыр, яйцо",
        description: "Молоко сгущенное РОГАЧЕВ Егорка, цельное с сахаром...",
        discountPrice: 77.99,
        discountPriceText: "С картой",
        price: 168.50,
        priceText: "Обычная",
        rating: 2.5,
        discount: 50,
        image: "images/products/products8.png",
    },
    {
        id: 15,
        category: "Молоко, сыр, яйцо",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        discountPrice: 0,
        discountPriceText: "",
        price: 192.99,
        priceText: "",
        rating: 2,
        discount: 0,
        image: "images/products/products9.png",
    },
    {
        id: 16,
        category: "Молоко, сыр, яйцо",
        description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        discountPrice: 0,
        discountPriceText: "",
        price: 29.99,
        priceText: "",
        rating: 2,
        discount: 0,
        image: "images/products/products10.png",
    },
]