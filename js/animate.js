document.addEventListener('DOMContentLoaded', () => {
  // ================= Hero / Navbar =============================================
  let $navMenu = $("#navbar__menu li")
  let $navPhone = $(".navbar__links")

  let $heroImage = $("#hero-img")
  let $heroTitle = $(".hero__caption__title h1")
  let $heroCaption = $(".hero__caption__phrase h5")
  let $heroButton = $(".hero__button")


  let timeline1 = gsap.timeline()

  if (window.innerWidth > 992) {
    timeline1.from($heroImage, 2, {opacity: 0, ease: Power2.easeInOut})
      .from($navMenu, 0.5, {
            opacity: 0,
            y: -200,
            rotation: -90,
            stagger: 0.08,
            ease: Power2.easeInOut
          },"-=.8")
      .from($navPhone, .8, {x: 500, opacity: 0, ease: Power2.easeInOut},"-=.3")
      .from($heroTitle, 2, {opacity: 0, ease: Power2.easeInOut},"-=.3")
      .from($heroCaption, 1, {x: 1000, ease: Power2.easeInOut},"-=1.2")
      .from($heroButton, 2.5, {y: -1000, ease: Bounce.easeInOut},"-=1.5")

      localStorage.setItem("visted",true)
  }

})
