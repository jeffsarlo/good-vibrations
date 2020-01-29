// ========= Global Variables ============================================
let cart = []
// cart container
const cartContent = $(".cart-container__content")[0]
// ========= Global Variables End ========================================


// ========= Cart UI =====================================================
class CartUI {
  static setCartValues(cart) {
    let tempTotal = 0
    let itemsTotal = 0

    cart.map(item => {
      itemsTotal += item.amount
      tempTotal += Number(item.price) * item.amount
    })
    $(".cart-container__total, .cart-button__total").text(parseFloat(tempTotal.toFixed(2)))
  }
  // Load item info into cart
  static addCartItem(item) {
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
    CartUI.characterLimiter()
  }
  // Show or hide cart
  static showHideCart() {
    $("#shopping-cart").toggleClass("show-cart")
    $(".cart-overlay").toggleClass("transparentBcg")
  }
  // Initialize cart methods
  setupAPP() {
    cart = Storage.getCart()
    CartUI.setCartValues(cart)
    this.populateCart(cart)
    $(".cart-button, .cart-container__close, .cart-overlay").click(CartUI.showHideCart)
  }
  // Add items to cart
  populateCart(cart) {
    cart.forEach(item => CartUI.addCartItem(item))
  }
  // Limits chars in title
  static characterLimiter() {
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
      InstrumentUI.buttonStateRemoved()
    })

    // cart functionality
    $(cartContent).click(e => {
      if (e.target.classList.contains("cart__item__remove__icon")) {

        let removeItem = e.target
        let id = removeItem.getAttribute("data-id")

        $(removeItem).parent().parent().parent().parent().remove()
        this.removeItem(id)
        if (id == guitar) {
          InstrumentUI.buttonStateRemoved()
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
          CartUI.setCartValues(cart)
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
            CartUI.setCartValues(cart)
            $(lowerAmount).prev().text(tempItem.amount)
            $(lowerAmount).parent().next().children(".cart__item__price").text(tempItem.updatedPrice)
          } else {
            $(lowerAmount).parent().parent().parent().remove()
            this.removeItem(id)
            if (id == guitar) {
              InstrumentUI.buttonStateRemoved()
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
    CartUI.showHideCart()
  }
  removeItem(id) {
    cart = cart.filter(item => item.id !== id)
    CartUI.setCartValues(cart)
    Storage.saveCart(cart)
  }
}
// ========= Cart UI End =================================================




// =========== Local Storage =============================================
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
// =========== Local Storage End =========================================

$(document).ready(() => {
  const cartUI = new CartUI()

  cartUI.setupAPP()
  cartUI.cartLogic()
})
