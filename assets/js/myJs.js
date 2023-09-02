//search
function search(title, array) {

    let arrProduct = array.filter((item) => item.title.indexOf(title) !== -1)
    drawProductUi(arrProduct)

}

let input = document.getElementById("search")
input.addEventListener("keyup", function (e) {

    search(e.target.value, JSON.parse(localStorage.getItem("products")))

    if (e.target.value.trim() == "") {
        drawProductUi(JSON.parse(localStorage.getItem("products")))
    }


})




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
        price: "$9.00",
        quantity: 1

    },
    {
        id: 2,
        title: "Battery Charger",
        imgUrl: "images/product-2.jpg",
        size: "L",
        category: "powerBank",
        discreption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
        price: "$15.00",
        quantity: 1


    },
    {
        id: 3,
        title: "Brown Bag",
        imgUrl: "images/product-3-2.jpg",
        size: "M",
        category: "Bag",
        discreption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
        price: "$25.00",
        quantity: 1


    },
    {
        id: 4,
        title: "Casual Note Bag",
        imgUrl: "images/product-4-2.jpg",
        size: "2XL",
        category: "Hand Bag",
        discreption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.",
        price: "$30.00",
        quantity: 1


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
							<a class="btn btn-outline-dark btn-square" onclick="addedToFav(${item.id})" ><i class="far fa-heart"></i></a>
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
    productBox.innerHTML = productsUi.join("")
}
drawProductUi(JSON.parse(localStorage.getItem("products")))
let addedItem = localStorage.getItem("productsCart") ? JSON.parse(localStorage.getItem("productsCart")) : []
let allItems = [];

function addedToCard(id) {

    if (localStorage.getItem("Name")) {
        let choosenItem = products.find((item) => item.id === id)
        let item = allItems.find((i) => i.id === choosenItem.id)
        console.log(item)

        if (item) {

            choosenItem.quantity += 1
            console.log(choosenItem);
            // console.log("added");
        } else {
            allItems.push(choosenItem)
            console.log(allItems)
        }
        addedItem = [...addedItem, choosenItem]
        localStorage.setItem("productsCart", JSON.stringify(addedItem))
    }
}



// counter in mega menu cart
// let quantity = document.getElementsByClassName("quantity-input") //innerhtml
// let decrement = document.getElementsByClassName("dec")
// let increment = document.getElementsByClassName("inc")
// let counter = 0
// function updateCounter() {
//     quantity.quantityInput.innerHTML = counter;
//     if (quantity.quantityInput.innerHTML < 0) {
//         quantity.quantityInput.innerHTML = 0;
//         quantity.quantityInput.style.color = "red"
//     }
//     else {
//         quantity.quantityInput.style.color = "black"
//     }
// }
// function incrementCounter() {
//     counter++;
//     updateCounter();
// }
// function decrementCounter() {
//     counter--;
//     updateCounter();
// }








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
							<span class="currency-symbol" id="currency-symbol">${item.price}</span>
						</div>
						<div class="pro-qty item-quantity">
                        <button class="btn1 btn-decrement">-</button>
                        <input type="text" id="quantity" class="btn-input" value="1">
                        <button class="btn1 btn-increment">+</button>
						</div>
					</div>
		</li>
        <div class="cart-footer">
            <h3 class="cart-subtotal">
              <span class="subtotal-title">Subtotal:</span>
              <span id="price"> ${item.price} </span>
            </h3>
            <div class="group-btn">
            <a href="cart.html" class="axil-btn btn-bg-primary viewcart-btn"> View Cart</a>
            <a href="checkout.html" class="axil-btn btn-bg-secondary checkout-btn"> Checkout</a>
            </div>
        </div>
    `

    })
    contentMega.innerHTML = drawProductUI
}

drawProductUI(JSON.parse(localStorage.getItem("productsCart")))



// NOW AM ADD FUNCTIONS TO BUTTONS INCREMENT AND DECREMENT TOTAL PRICE
// LETS START JS
let valueCount = 1.00;
let increment = document.querySelector(".btn-increment");
let prodPrice = document.querySelector("#currency-symbol");
let decrement = document.querySelector(".btn-decrement");
let count = document.querySelector("#quantity");
let totalcount = document.querySelector("#price");
//NOW AM CREATING A ARROW FUNCTION
increment.addEventListener("click", () => {
    let add = valueCount++;
    count.value = add;
    totalcount.innerHTML = add * 9.00;   //ADDING(INCREMENT) FUCTION IS COMPLETED
})
decrement.addEventListener("click", () => {
    //THIS IS DECREMENT FUNCTION  IN THIS AN GIVING A CONDITION TWO DISABLE THE (-)VALUES
    if (valueCount >= 2) {
        let sub = --valueCount;
        count.value = sub;
        totalcount.innerHTML = sub * 9.00;  //lets cheack yhe decrement is working or not 
        //DECREMENT FUNCTION IS ALSO COMPLETE
    }

})

//THIS IS THE SIMPLE INCREMENT AND DECREMENT AND RATE CALCUTATE 


//THANKS FOR WACTCHING VEDIO
// PLEASE SUBSCRIBE R AND R ZOOM CHANNEL

function removeFromCard(id) {

    if (localStorage.getItem("productsCart")) {
        let productsInCart = localStorage.getItem("productsCart")
        let item = JSON.parse(productsInCart)
        let filteredItem = item.filter((item) => item.id !== id)
        localStorage.setItem("productsCart", JSON.stringify(filteredItem))
        drawProductUI(filteredItem)
    }

}










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




//add to fav

function addedToFav(id) {
    let favoriteItem = localStorage.getItem("productsFavourite")
        ? JSON.parse(localStorage.getItem("productsFavourite"))
        : []
    if (localStorage.getItem("Name")) {
        let choosenItem = products.find((item) => item.id === id)
        favoriteItem = [...favoriteItem, choosenItem]
        localStorage.setItem("productsFavourite", JSON.stringify(favoriteItem))
    } else {
        window.location = "login.html"
    }
}




