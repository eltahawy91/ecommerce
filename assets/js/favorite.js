




let tableRes = document.getElementById("table-responsive")

function drawFavCartUi(allproducts = []) {

    let products = JSON.parse(localStorage.getItem("productsFavourite") || allproducts)
    let productUi = products.map((item) => {
        return `   
        <tr>
								<td class="product-remove">
									<a class="remove-wishlist" onclick="removeFromCard(${item.id})">
										<i class="fa-solid fa-xmark"></i>
									</a>
								</td>
								<td class="product-thumbnail">
									<a href="">
										<img src="${item.imgUrl}" alt="">
									</a>
								</td>
								<td class="product-title">
									<a href="">${item.title}</a>
								</td>
								<td class="product-price" data-title="price">
									<span class="">${item.price}</span>
								</td>
								<td class="product-stock-status" data-title="Status">
									In Stock
								</td>
								<td class="product-add-cart">
                                <button class="axil-btn btn-outline" onclick="addToCard(${item.id})">
                                Add To Card
                               </button>								</td>
							</tr>

        
        `

    })

    tableRes.innerHTML = productUi;
}

drawFavCartUi(JSON.parse(localStorage.getItem("productsFavourite")))

function removeFromCard(id) {

    if (localStorage.getItem("productsFavourite")) {
        let productsInCart = localStorage.getItem("productsFavourite")
        let item = JSON.parse(productsInCart)
        let filteredItem = item.filter((item) => item.id !== id)
        localStorage.setItem("productsFavourite", JSON.stringify(filteredItem))
        drawFavCartUi(filteredItem)
    }

}




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

let addedItem = localStorage.getItem("productsCart") ? JSON.parse(localStorage.getItem("productsCart")) : []
let allItems = [];
function addToCard(id) {
    let allItems = []
    if (localStorage.getItem("Name")) {
        let choosenItem = products.find((item) => item.id === id)
        let item = allItems.find((i) => i.id === choosenItem.id)
        console.log(item)

        allItems.push(choosenItem)
        console.log(allItems)

        addedItem = [...addedItem, choosenItem]
        localStorage.setItem("productsCart", JSON.stringify(addedItem))
    }
}
