


let waves = document.getElementById("waves")

function finishLoad() {
    waves.remove()
}
setTimeout(finishLoad, 0)




// megamenue
let mega = document.getElementById("mega-menu")
let bodyMega = document.getElementById("body-mega")
let close = document.getElementById("close-menu")
mega.addEventListener("click", () => {

    bodyMega.style.right = "0"
})
close.addEventListener("click", () => {
    bodyMega.style.right = "-150%"
})
//go to top

let goTop = document.getElementById("go-to")

window.onscroll = function () {
    if (document.documentElement.scrollTop >= 250) {
        goTop.style.right = "20px"
    } else {
        goTop.style.right = "-46px"
    }
}
goTop.addEventListener("click", () => {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
})

// counter in mega menu cart
let quantity = document.getElementById("quantity-input")
let decrement = document.getElementById("dec")
let increment = document.getElementById("inc")
let counter = 1
function updateCounter() {
    quantity.value = counter;
    if (quantity.value < 0) {
        quantity.value = 0;
        quantity.style.color = "red"
    }
    else {
        quantity.style.color = "black"
    }
}
function incrementCounter() {
    counter++;
    updateCounter();
}
function decrementCounter() {
    counter--;
    updateCounter();
}

// delete product 
// let deleteProduct = document.getElementById("deleteProduct")
// let cardItem = document.getElementById("cardItem")
// function deleteProd() {
//     cardItem.remove(cardItem)
// }

// show img product

// let btnlargeImage = document.getElementById("largeImage") //btn to show modal
// let productImage = document.getElementById("product-image") //img modal
// let productDetailsModal = document.getElementById("productDetailsModal") //all modal
// let closeModal = document.getElementById("close-modal") //exit modal
// let modalImg = document.getElementById("modalImg") //img in modal


// btnlargeImage.addEventListener("click", () => {

//     productDetailsModal.style.display = "block"
//     modalImg.src = productImage.src
// })

// closeModal.addEventListener("click", () => {
//     productDetailsModal.style.display = "none"

// })




let productBox = document.getElementById("product-item")
let cartsProducts = document.getElementById("content")
let responsiveTable = document.getElementById("table-responsive")

let products = [
    {
        id: 1,
        title: "Black Grey Headset",
        imgUrl: "images/product-1-2.jpg",
        size: "XL",
        category: "headphone",
        discreption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
        price: "$9.00"

    },
    {
        id: 2,
        title: "Battery Charger",
        imgUrl: "images/product-2.jpg",
        size: "L",
        category: "powerBank",
        discreption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
        price: "$15.00"

    },
    {
        id: 3,
        title: "Brown Bag",
        imgUrl: "images/product-3-2.jpg",
        size: "M",
        category: "Bag",
        discreption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
        price: "$25.00"

    },
    {
        id: 4,
        title: "Casual Note Bag",
        imgUrl: "images/product-4-2.jpg",
        size: "2XL",
        category: "Hand Bag",
        discreption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
        price: "$30.00",

    },



]


localStorage.setItem("products", JSON.stringify(products))

let drawProductUi;
drawProductUi = function (product = []) {

    let productsUi = product.map((item) => {
        return `
        <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
				<div class="product-item bg-light mb-4">
					<div class="product-img position-relative overflow-hidden">
						<div class="agile-top">
							<img src="assets/images/products/tag.png" alt="">
						</div>
						<img class="img-fluid w-100 pro-img" src="${item.imgUrl}" id="product-image" alt="">
						<div class="product-action">
							<a class="btn btn-outline-dark btn-square onclick="addToFav(${item.id})" ><i class="far fa-heart"></i></a>
							<a class="btn btn-outline-dark btn-square" id="largeImage"><i
									class="fa-solid fa-magnifying-glass-plus"></i></a>
						</div>
					</div>
					<div class="mx-3 py-4">
                    <div class="category-list">
                      <a href="" class="product-category">category</a>
                    </div>
						<a class="h6 text-decoration-none text-truncate" href="">${item.title}</a>
						<div class="d-flex align-items-center mt-2">
							<h5>${item.price}</h5>
							<h6 class="text-muted ml-2"><del>$123.00</del></h6>
                           
						</div>
                        <div class="rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

					</div>
					
                        <button class="submit-btn addCard" onclick="addedToCard(${item.id})">
                        Add To Card
                       </button>
                    
				</div>
			</div>
                  `
    })
    productBox.innerHTML = productsUi
}
drawProductUi(JSON.parse(localStorage.getItem("products")))
let addedItem = localStorage.getItem("productsCart") ? JSON.parse(localStorage.getItem("productsCart")) : []

// if (addedItem) {
//     addedItem.map((item) => {
//         cartsProducts.innerHTML += `<p>${item.imgUrl}</p>`
//         badge.style.display = "block"
//         badge.innerHTML = "1"
//     })
// }
function addedToCard(id) {

    if (localStorage.getItem("Name")) {
        let allItems = [];
        let choosenItem = products.find((item) => item.id === id)
        let item = allItems.find((i) => i.id === choosenItem.id)
        console.log(item)

        if (item) {
            choosenItem.quantity += 1

        } else {
            allItems.push(choosenItem)
            console.log(choosenItem)
        }
        addedItem = [...addedItem, choosenItem]
        localStorage.setItem("productsCart", JSON.stringify(addedItem))
    }
}

let contentMega = document.getElementById("content")

let drawProductUI;
drawProductUI = function (products = []) {

    let drawProductUI = products.map((item) => {
        return `   
        <li class="cart-item" id="cardItem">
					<div class="item-img">
						<a href=""><img src="${item.imgUrl}"> </a>
						<button class="close-btn" id="deleteProduct"  onclick="removeFromCard(${item.id})">
							<span class="delete-product"><i class="fa-solid fa-xmark"></i></span>
						</button>
					</div>
					<div class="item-content">
						<div class="product-rating">
							<span class="icon">
								<i class="fa-solid fa-star rate"></i>
								<i class="fa-solid fa-star rate"></i>
								<i class="fa-solid fa-star rate"></i>
								<i class="fa-solid fa-star rate"></i>
								<i class="fa-solid fa-star rate"></i>
							</span>
							<span class="rating-number">(25)</span>
						</div>
						<h3 class="item-title">
							<a href="">${item.title}</a>
						</h3>
						<div class="item-price">
							<span class="currency-symbol">${item.price}</span>
						</div>
						<div class="pro-qty item-quantity">
							<span class="dec qtybtn" onclick="decrementCounter()" id="dec">-</span>
							<input type="number" id="quantity-input" class="quantity-input" value="1">
							<span class="inc qtybtn" onclick="incrementCounter()" id="inc">+</span>
						</div>
					</div>
		</li>
    `

    })

    contentMega.innerHTML = drawProductUI
    let cardItem = document.getElementById("cardItem")
    badge.innerHTML = cardItem.length

}

drawProductUI(JSON.parse(localStorage.getItem("productsCart")))





function removeFromCard(id) {

    if (localStorage.getItem("productsCart")) {
        let productsInCart = localStorage.getItem("productsCart")
        let item = JSON.parse(productsInCart)
        let filteredItem = item.filter((item) => item.id !== id)
        localStorage.setItem("productsCart", JSON.stringify(filteredItem))
        drawProductUI(filteredItem)
    }

}



let addCard = document.querySelectorAll(".addCard")
if (localStorage.getItem("Name")) {
    console.log("yebbbbs");
}
else {
    window.location = "login.html"
}



//favourite product



// login

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});


// const toggleButton = document.getElementById('toggle-mode');
// let prefersDarkScheme = window.matchMedia('(prefers-color-scheme: light)');
// let cssUrl = 'assets/css/style.css';
// toggleButton.addEventListener('click', () => {
//     if (prefersDarkScheme) {
//         cssUrl = 'assets/css/style.css'
//         const linkElement = document.createElement('link');
//         linkElement.rel = 'stylesheet';
//         linkElement.href = cssUrl;

//         document.head.appendChild(linkElement);
//     }
//     else
//     {
//          prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
//         cssUrl = 'assets/css/styledark.css'
//     }

// });

