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


// ========= Global Variables ============================================
// Add to cart
const addToCartButton = $("#product-add-to-cart")[0]
// Add Item Input Field
const quantityInput = $("#quantity")[0]
// Input Field Value
let quantity = Number($("#quantity")[0].value)
// ========= Global Variables End ========================================


// ========= Get Products ================================================
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
// ========= Get Products End ============================================


// ========= Instrument UI ===============================================
class InstrumentUI {
  // ---------- Display Products -----------------------------------------
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
  // -------- Add to cart ------------------------------------------------
  addToCart(product) {
    const id = product[guitar].id
    const price = product[guitar].price
    let inCart = cart.find(item => item.id === id)

    if (inCart) {
      InstrumentUI.buttonStateAdded()
    }

    $(addToCartButton).click(e => {
      let updatedPrice = price * quantity

      InstrumentUI.buttonStateAdded()

      // get product from products
      let cartItem = {...Storage.getProduct(id), amount: `${quantity}`, updatedPrice: `${updatedPrice}`}
      // add product to cart
      cart = [...cart, cartItem]
      // save cart in local Storage
      Storage.saveCart(cart)
      // set cart values
      CartUI.setCartValues(cart)
      // display cart item
      CartUI.addCartItem(cartItem)
      // show the cart
      CartUI.showHideCart()
    })
  }
  // -------- Add to cart button added -----------------------------------
  static buttonStateAdded(id) {
    addToCartButton.value = 'ITEM IN CART'
    addToCartButton.disabled = true
    quantityInput.value = 1
    quantityInput.disabled = true
  }
  // -------- Add to cart button removed ---------------------------------
  static buttonStateRemoved(id) {
    addToCartButton.value = 'ADD TO CART'
    addToCartButton.disabled = false
    quantityInput.disabled = false
  }
}
// ========= Instrument UI End ===========================================


// ========== Initialize =================================================
$(document).ready(() => {
  const instrumentUI = new InstrumentUI()
  const products = new Products()

  // get all products
  products.getProducts().then(product => {
    instrumentUI.displayProduct(product)
    instrumentUI.addToCart(product)
    Storage.saveProducts(product)
  }).then(() => {
    startOwl()
  })
})
// ========== Initialize End =============================================



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
