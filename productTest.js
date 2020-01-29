// ==========  Parse & Returns URL Parameters ============================
function getUrlVars(guitar) {
  const vars = {}
  const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  })
  return vars
}
// ------------ Append Clicked Image -------------------------------------
var guitar = parseInt(getUrlVars()["product"], 10)
// ========== Parse & Returns URL Parameters End =========================



// ========== Shopping Cart & Local Storage ==============================

// --------- Global Variables --------------------------------------------
let cart = []

// cart container
const cartContent = $(".cart-container__content")[0]
// Add to cart
const addToCartButton = $("#product-add-to-cart")[0]
// Add Item Input Field
const quantityInput = $("#quantity")[0]
// Input Field Value
let quantity = Number($("#quantity")[0].value)

// --------- Global Variables End ----------------------------------------

// ---------- Get Product ------------------------------------------------
class Products {
  async getProducts() {
    try {
      let result = await fetch("../../json/guitars.json")
      let data = await result.json()
      return data
    }  catch (error) {
      console.log(error)
    }
  }
}
// ---------- Get Products End -------------------------------------------

// ---------- Display Products -------------------------------------------
class UI {

  // -------- Display Product Page ---------------------------------------
  displayProduct(product) {
    const {img1, img2, img3, img4, alt} = product[guitar]
    const {title, brand, price, description, specs } = product[guitar]
    const {code, id} = product[guitar]
    const subtotal = price * quantity

    $('#clickImg').attr({src: `../${img1}`, alt: `${alt}`})
    $('#img1').attr({data_id: `${id}`, src: `../${img1}`, alt: `${alt}`})
    $('#img2').attr({data_id: `${id}`, src: `../${img2}`, alt: `${alt}`})
    $('#img3').attr({data_id: `${id}`, src: `../${img3}`, alt: `${alt}`})
    $('#img4').attr({data_id: `${id}`, src: `../${img4}`, alt: `${alt}`})

    $('#title').html(`${title}`)
    $('#brand').html(`${brand}`)
    $('#variant-sku').html(`${code}`)
    $('#price').html(`${price}`)
    $('#description').html(`${description}`)
    $('#specs').empty();

    specs.forEach(spec => {
      $("#specs"). append(`<li>${spec}</li>`)
    })

    $('#subtotal').append(subtotal.toFixed(2))
  }
  // -------- Display Product Page End -----------------------------------
  // -------- Cart Logic & Display ---------------------------------------
  addToCart(product) {
    const id = product[guitar].id
    const price = product[guitar].price
    let inCart = cart.find(item => item.id === id)

    if (inCart) {
      this.buttonStateAdded()
    }

    $(addToCartButton).click(e => {
      let updatedPrice = price * quantity

      this.buttonStateAdded()

      // get product from products
      let cartItem = {...Storage.getProduct(id), amount: `${quantity}`, updatedPrice: `${updatedPrice}`}
      // add product to cart
      cart = [...cart, cartItem]
      // save cart in local Storage
      Storage.saveCart(cart)
      // set cart values
      this.setCartValues(cart)
      // display cart item
      this.addCartItem(cartItem)
      // show the cart
      this.showHideCart()
    })
  }
  setCartValues(cart) {
    let tempTotal = 0
    let itemsTotal = 0

    cart.map(item => {
      itemsTotal += item.amount
      tempTotal += Number(item.price) * item.amount
    })
    $(".cart-container__total, .cart-button__total").text(parseFloat(tempTotal.toFixed(2)))
  }
  addCartItem(item) {
    let amount = item.amount
    let price = item.price
    let updatedPrice = item.updatedPrice
    const div = document.createElement("div")

    div.classList.add('cart__item')
    div.innerHTML = `<div class="d-flex align-items-center">
                       <div class="col-2">
                         <img src="../${item.img1}" alt="${item.alt}" class="cart__item__img">
                       </div>

                       <div class="cart__item__title col-5">
                         <span class="cart__item__title__name mb-0">${item.title}</span>
                       </div>

                       <div class="col-1 d-flex flex-column">
                         <ion-icon style="color:var(--site-orange)" class="cart__item__more" data-id="${item.id}" name="arrow-dropup"></ion-icon>
                         <span class="cart__item__quantity pl-1">${amount}</span>
                         <ion-icon style="color:var(--site-orange)" class="cart__item__less" data-id="${item.id}" name="arrow-dropdown"></ion-icon>
                       </div>

                       <div class="col-3 d-flex">
                         <span class="mr-2">$</span>
                         <span class="cart__item__price">${updatedPrice}</span>
                       </div>

                       <div class="col-1">
                         <a href="#" class="cart__item__remove">
                           <ion-icon class="cart__item__remove__icon" data-id="${item.id}" name="trash"></ion-icon>
                         </a>
                       </div>
                     </div>`

    $(".cart-container__content").append(div)
    this.characterLimiter()
  }
  showHideCart() {
    $("#shopping-cart").toggleClass("show-cart")
    $(".cart-overlay").toggleClass("transparentBcg")
  }
  setupAPP() {
    cart = Storage.getCart()
    this.setCartValues(cart)
    this.populateCart(cart)
    $(".cart-button, .cart-container__close, .cart-overlay").click(this.showHideCart)
  }
  populateCart(cart) {
    cart.forEach(item => this.addCartItem(item))
  }
  characterLimiter() {
    $(".cart-item-title").each(function(i) {
      var len=$(this).text().trim().length
        if(len>34) {
          $(this).text($(this).text().substr(0,34)+'...')
        }
    })
  }
  cartLogic() {
    // clear cart button
    $(".button-alt__clear").click(e => {
      this.clearCart()
      this.buttonStateRemoved()
    })

    // cart functionality
    $(cartContent).click(e => {
      if (e.target.classList.contains("cart__item__remove__icon")) {
        let removeItem = e.target
        let id = removeItem.getAttribute("data-id")

        $(removeItem).parent().parent().parent().parent().remove()
        this.removeItem(id)
        if (id == guitar) {
          this.buttonStateRemoved()
        }

      } else if (e.target.classList.contains("cart__item__more")) {
          let addAmount = e.target
          let id = addAmount.getAttribute("data-id")
          let tempItem = cart.find(item => item.id === id)


          // update amount
          tempItem.amount = Number(tempItem.amount) + 1
          tempItem.updatedPrice = Number(tempItem.updatedPrice) + Number(tempItem.price)

          // update storage
          Storage.saveCart(cart)
          // calculate totals
          this.setCartValues(cart)
          // update cart value
          $(addAmount).next().text(tempItem.amount)
          $(addAmount).parent().next().children(".cart__item__price").text(tempItem.updatedPrice)

      } else if (e.target.classList.contains("cart__item__less")) {
          let lowerAmount = e.target
          let id = lowerAmount.getAttribute("data-id")
          let tempItem = cart.find(item => item.id === id)

          tempItem.amount = Number(tempItem.amount) - 1
          tempItem.updatedPrice = Number(tempItem.updatedPrice) - Number(tempItem.price)
          if (tempItem.amount > 0) {
            Storage.saveCart(cart)
            this.setCartValues(cart)
            $(lowerAmount).prev().text(tempItem.amount)
            $(lowerAmount).parent().next().children(".cart__item__price").text(tempItem.updatedPrice)
          } else {
            $(lowerAmount).parent().parent().parent().remove()
            this.removeItem(id)
            if (id == guitar) {
              this.buttonStateRemoved()
            }
          }
        }
    })
  }
  clearCart() {
    let cartItems = cart.map(item => item.id)

    // remove from array
    cartItems.forEach(id => this.removeItem(id))
    // remove from DOM
    while (cartContent.children.length) {
      cartContent.removeChild(cartContent.children[0])
    }
    this.showHideCart()
  }
  removeItem(id) {
    cart = cart.filter(item => item.id !== id)
    this.setCartValues(cart)
    Storage.saveCart(cart)
  }
  buttonStateAdded(id) {

    addToCartButton.value = 'ITEM IN CART'
    addToCartButton.disabled = true
    quantityInput.value = 1
    quantityInput.disabled = true
  }
  buttonStateRemoved(id) {
    addToCartButton.value = 'ADD TO CART'
    addToCartButton.disabled = false
    quantityInput.disabled = false

  }

}
// -------- Cart Logic & Display End -------------------------------------

// ---------- Local Storage ----------------------------------------------
class Storage {
  static saveProducts(product) {
    localStorage.setItem("product", JSON.stringify(product))
  }
  static getProduct(id) {
    let product = JSON.parse(localStorage.getItem("product"))
    return product.find(item => item.id === id)
  }
  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart))
  }
  static getCart() {
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  }
}
// ---------- Local Storage  End -----------------------------------------

$(document).ready(() => {
  const ui = new UI()
  const products = new Products()

  // setup app
  ui.setupAPP()

  // get all products
  products.getProducts().then(product => {
    ui.displayProduct(product)
    ui.addToCart(product)
    Storage.saveProducts(product)
  }).then(() => {
    startOwl()
    ui.cartLogic()
  })
})
// ========== Shopping Cart & Local Storage End ==========================



// ========== Product Page Subtotal ======================================

  $("#quantity").change((e) => {
    quantity = e.target.value
    const subtotal = $("#subtotal")[0].innerText
    let updateSubtotal = quantity * subtotal

    $("#subtotal").text(updateSubtotal)
  })


// ========== Product Page Subtotal End ==================================


// ========== Next / Previous Arrows =====================================
$.getJSON("../../json/guitars.json", json => {
  const jsonLength = json.length
  $("#prev-btn, #next-btn").on("click", function(e) {

    if (e.target.name === 'arrow-dropleft' && guitar === 0) {
      new_id = jsonLength - 1
    } else if (e.target.name === 'arrow-dropleft') {
      new_id = guitar - 1
    }
    if (e.target.name === 'arrow-dropright' && guitar === jsonLength - 1) {
      new_id = 0
    } else if (e.target.name === 'arrow-dropright' ) {
      new_id = guitar + 1
    }
    window.location.href = "product.html?product=" + new_id
  })
})
// ========== Next / Previous Arrows End =================================


// ============= Owl Carousel ============================================
// ------------- Iniialize Carousel --------------------------------------
const startOwl = () => {
  $('#owl-focus').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsiveClass: true,
    responsive: {
      0: {
          items: 3,
      },
      1050: {
          items: 4,
      }
    }
  })
}
// ------------- Iniialize Carousel End ----------------------------------
// ------------- Owl Photo Selector --------------------------------------
$(".item").on("click", function(e) {
  var clickImg = `${e.target.src}`
  $('#clickImg').attr('src', `${clickImg}`);
})
// ------------- Owl Photo Selector End ----------------------------------
// ============= Owl Carousel End ========================================
