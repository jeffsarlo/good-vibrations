$(document).ready(function () {

  // =============== Animate On Scroll ===================================
  AOS.init();
  // =============== Animate On Scroll End ===============================


  // ================ Scroll Page ========================================
  // ----- Fade Nav In ---------------------------------------------------
  $(document).scroll(function () {
    var $nav = $(".navbar")
    var $top = $("#move-up span")
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
    $top.toggleClass('scrolled', $(this).scrollTop() > $nav.height())
  })
  // ----- Fade Nav In End -----------------------------------------------

  // ------ To-Top Arow --------------------------------------------------
  $('#move-up span').click(function() {
    $('html, body').animate({
      scrollTop: 0
    },1000)
  })
  // ------ To Top Arow End ----------------------------------------------

  // ------------ Smooth Transition Between Sections ---------------------
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          event.preventDefault()
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            var $target = $(target)
            $target.focus()
            if ($target.is(":focus")) {
              return false
            } else {
              $target.attr('tabindex','-1');
              $target.focus();
            }
          })
        }
      }
    })
    // ------------ Smooth Transition Between Sections End ---------------
  // ================ Scroll Page End ====================================


  // ================ Mobile Navbar ======================================
  // ---- Toggle Menu ----------------------------------------------------
  $("#mobile-contact").click(function() {
    $("#mobile-contact").toggleClass("active")
  })
  // ---- Toggle Menu End ------------------------------------------------

  // ----- Open menu -----------------------------------------------------
  $("#toggle").click(function() {
    $(".mobile-nav").toggleClass("active")
  })
  // ----- Open menu End -------------------------------------------------

  // ----- Click link to close -------------------------------------------
  $(".mobile-nav ul li a").click(function() {
    $(".mobile-nav").toggleClass("active")
  })
  // ----- Click link to close End ---------------------------------------

  // ----- Click Button To Close -----------------------------------------
  $(".mobile-nav__close").click(function() {
    $(".mobile-nav").toggleClass("active")
  })
  // ----- Click Button To Close End--------------------------------------
  // ================ Mobile Navbar End ==================================
}) // end document.ready
