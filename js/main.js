// ================= Load New Arrivals ===================================
$.getJSON("../json/guitars.json", function(data) {

  var guitar_data1 = '';
  var guitar_data2 = '';

  for(var i in data) {
    var image1 = data[i].img1
    var image2 = data[i].img2
    var image3 = data[i].img3
    var image4 = data[i].img4
    var alt = data[i].alt
    var title = data[i].title
    var price = data[i].price
    var id = data[i].id

    if (data[i].brand === "gibson" && data[i].justIn === "true") {

      guitar_data1 += '<div class="new-product text-center" data-aos="fade-in">'
      guitar_data1 += `<img class="more-info" data-id="${id}" src="${image1}" alt="${alt}">`
      guitar_data1 += `<h6>${title}</h6>`
      guitar_data1 += `<p><strong>${price}</strong></p>`
      guitar_data1 += '</div>'
    }
    if (data[i].brand == "fender" && data[i].justIn === "true") {

      guitar_data2 += '<div class="new-product text-center" data-aos="fade-in" data-aos-delay="50">'
      guitar_data2 += `<img class="more-info" data-id="${id}" src="${image1}" alt="${alt}">`
      guitar_data2 += `<h6>${title}</h6>`
      guitar_data2 += `<p><strong>${price}</strong></p>`
      guitar_data2 += '</div>'
    }
  }
  $('#owl-one').html(guitar_data1)
  $('#owl-two').html(guitar_data2)
})
// ================= Load New Arrivals End ===============================

$(document).ready(function () {
  // ======== Owl Carousels ==============================================
  $("#owl-one").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 60,
    nav:true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsiveClass: true,
    responsive: {
      0: {
          items: 1,
      },
      500: {
          items: 2,
      },
      770: {
          items: 3,
      },
      1000: {
          items: 4,
      }
    }
  })

  $("#owl-two").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 60,
    nav:true,
    navText: [$('.owl-navigation-two .owl-nav-prev'), $('.owl-navigation-two .owl-nav-next')],
    responsiveClass: true,
    responsive: {
      0: {
          items: 1,
      },
      500: {
          items: 2,
      },
      770: {
          items: 3,
      },
      1000: {
          items: 4,
      }
    }
  })
  // ======== Owl Carousels End ==========================================

  // ======== More Info ==================================================
  $(".more-info").on("click", function(e) {

    let product_id = $(e.target).attr('data-id')

    $.getJSON("../json/guitars.json", function(json) {
      for(let i in json) {
        if (product_id === json[i].id ) {
          window.location.href = "./pages/html/product.html?product=" + product_id
        }
      }
    })
  })
  // ======== More Info End ===============================================
})


$(document).ready(function () {
  // ================ Global =============================================
  // ------- Paragraph character limiter ---------------------------------
  $(".news-description p, .service-description p").each(function(i) {
    var len=$(this).text().trim().length
      if(len>100) {
        $(this).text($(this).text().substr(0,100)+'...')
      }
  });

  // ----------- Image Hover Dots  ---------------------------------------
  $(".dots-container").hover(function(e){
    $(this).find(".dot-1").toggleClass("active")
    $(this).find(".dot-2").toggleClass("active")
    $(this).find(".dot-3").toggleClass("active")
    $(this).find(".img-screen").toggleClass("active")
  })
  // ================ Global End =========================================

  // ================ Featured Services ==================================
  // ----- devices < 1000px width ----------------------------------------
  $(window).bind("chgOrder", function () {
    if ($(this).width() < 1000) {
      $('#image-1').addClass('order-2')
      $('#description-1').addClass('order-1')
    }
  }).trigger('chgOrder')

  // ----- Rezizing window -----------------------------------------------
  $(window).bind("resize", function () {
    if ($(this).width() < 1000) {
      $('#image-1').addClass('order-2')
      $('#description-1').addClass('order-1')
    } else if (($(this).width() > 999)){
      $('#image-1').removeClass('order-2')
      $('#description-1').removeClass('order-1')
    }
  })
  // ================ Featured Services End ==============================

  // ================ Services ===========================================
  // ------------ Circular Writing ---------------------------------------
  $('.circular').toArray().forEach(function(el) {
    var NS = "http://www.w3.org/2000/svg";
    var xlinkNS = "http://www.w3.org/1999/xlink";
    var svg = document.createElementNS(NS, "svg");
    var circle = document.createElementNS(NS, "path");
    var text = document.createElementNS(NS, "text");
    var textPath = document.createElementNS(NS, "textPath");

    svg.setAttribute("viewbox", "0 0 100 100");

    circle.setAttribute("d", "M0,50 a68,68 0 1,1 0,1z");
    circle.setAttribute("id", "circle");

    textPath.textContent = el.textContent;
    textPath.setAttributeNS(xlinkNS, "xlink:href", "#circle");

    text.appendChild(textPath);
    svg.appendChild(circle);
    svg.appendChild(text);
    el.textContent = '';
    el.appendChild(svg);
  })
  // ================ Services End =======================================

  // ================ Our Team  ==========================================
  $("#owl-team").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
          items: 1,
      },
      1200: {
          items: 2,
      }
    }
  })
  // ================ Our Team End =======================================
})
