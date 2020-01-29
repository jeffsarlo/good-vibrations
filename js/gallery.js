$(document).ready(function() {
    $("#lightgallery").lightGallery();
    $('#responsive-images').lightGallery();
    $('#custom-easing').lightGallery({
      cssEasing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
    })
    $('#custom-transitions').lightGallery({
      mode: 'lg-fade'
    })
    $('#aniimated-thumbnials').lightGallery({
     thumbnail:true
    });

});

// ----------------- Main Gallery -----------------------
$('#i1').on('click', function() {

  $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
          'src': '../img/gallery/g-ea-2.jpg',
          'thumb': '../img/gallery/g-ea-2.jpg',
          'subHtml': '<h4>Image 0 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-ea-1.jpg',
          'thumb': '../img/gallery/g-ea-1.jpg',
          'subHtml': '<h4>Image 1 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-ea-3.jpg',
          'thumb': '../img/gallery/g-ea-3.jpg',
          'subHtml': "<h4>Image 2 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-ea-4.jpg',
          'thumb': '../img/gallery/g-ea-4.jpg',
          'subHtml': "<h4>Image 3 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-ea-5.jpg',
          'thumb': '../img/gallery/g-ea-5.jpg',
          'subHtml': "<h4>Image 4 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-ea-6.jpg',
          'thumb': '../img/gallery/g-ea-6.jpg',
          'subHtml': "<h4>Image 5 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-c-1.jpg',
          'thumb': '../img/gallery/g-c-1.jpg',
          'subHtml': '<h4>Image 6 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-c-2.jpg',
          'thumb': '../img/gallery/g-c-2.jpg',
          'subHtml': "<h4>Image 7 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-c-3.jpg',
          'thumb': '../img/gallery/g-c-3.jpg',
          'subHtml': "<h4>Image 8 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-c-4.jpg',
          'thumb': '../img/gallery/g-c-4.jpg',
          'subHtml': "<h4>Image 9 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-c-5.jpg',
          'thumb': '../img/gallery/g-c-5.jpg',
          'subHtml': "<h4>Image 10 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-c-6.jpg',
          'thumb': '../img/gallery/g-c-6.jpg',
          'subHtml': '<h4>Image 11 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-i-1.jpg',
          'thumb': '../img/gallery/g-i-1.jpg',
          'subHtml': "<h4>Image 12 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-i-2.jpg',
          'thumb': '../img/gallery/g-i-2.jpg',
          'subHtml': "<h4>Image 13 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-i-3.jpg',
          'thumb': '../img/gallery/g-i-3.jpg',
          'subHtml': "<h4>Image 14 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-i-4.jpg',
          'thumb': '../img/gallery/g-i-4.jpg',
          'subHtml': "<h4>Image 15 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-i-5.jpg',
          'thumb': '../img/gallery/g-i-5.jpg',
          'subHtml': '<h4>Image 16 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-i-6.jpg',
          'thumb': '../img/gallery/g-i-6.jpg',
          'subHtml': "<h4>Image 17 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-i-7.jpg',
          'thumb': '../img/gallery/g-i-7.jpg',
          'subHtml': "<h4>Image 18 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-om-1.jpg',
          'thumb': '../img/gallery/g-om-1.jpg',
          'subHtml': "<h4>Image 19 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-om-2.jpg',
          'thumb': '../img/gallery/g-om-2.jpg',
          'subHtml': "<h4>Image 20 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          "src": '../img/gallery/g-om-3.jpg',
          'thumb': '../img/gallery/g-om-3.jpg',
          'subHtml': '<h4>Image 21 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-om-4.jpg',
          'thumb': '../img/gallery/g-om-4.jpg',
          'subHtml': "<h4>Image 22 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-om-5.jpg',
          'thumb': '../img/gallery/g-om-5.jpg',
          'subHtml': "<h4>Image 23 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-om-6.jpg',
          'thumb': '../img/gallery/g-om-6.jpg',
          'subHtml': "<h4>Image 24 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-s-1.jpg',
          'thumb': '../img/gallery/g-s-1.jpg',
          'subHtml': "<h4>Image 25 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-s-2.jpg',
          'thumb': '../img/gallery/g-s-2.jpg',
          'subHtml': '<h4>Image 26 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-s-3.jpg',
          'thumb': '../img/gallery/g-s-3.jpg',
          'subHtml': "<h4>Image Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-s-4.jpg',
          'thumb': '../img/gallery/g-s-4.jpg',
          'subHtml': "<h4>Image 27 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-s-5.jpg',
          'thumb': '../img/gallery/g-s-5.jpg',
          'subHtml': "<h4>Image 28 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-s-6.jpg',
          'thumb': '../img/gallery/g-s-6.jpg',
          'subHtml': "<h4>Image 29 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-c-6.jpg',
          'thumb': '../img/gallery/g-c-6.jpg',
          'subHtml': "<h4>Image 30 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }]
  })
});

// ----------------- Endorsing Artist Gallery -----------------------
$('#i2').on('click', function() {

  $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
          'src': '../img/gallery/g-ea-4.jpg',
          'thumb': '../img/gallery/g-ea-4.jpg',
          'subHtml': '<h4>Image 0 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-ea-1.jpg',
          'thumb': '../img/gallery/g-ea-1.jpg',
          'subHtml': '<h4>Image 1 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-ea-2.jpg',
          'thumb': '../img/gallery/g-ea-2.jpg',
          'subHtml': "<h4>Image 2 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-ea-3.jpg',
          'thumb': '../img/gallery/g-ea-3.jpg',
          'subHtml': "<h4>Image 3 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-ea-5.jpg',
          'thumb': '../img/gallery/g-ea-5.jpg',
          'subHtml': "<h4>Image 4 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-ea-6.jpg',
          'thumb': '../img/gallery/g-ea-6.jpg',
          'subHtml': "<h4>Image 5 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }]
  })
});

// ----------------- Open Mic Gallery -----------------------
$('#i3').on('click', function() {

  $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
          'src': '../img/gallery/g-om-1.jpg',
          'thumb': '../img/gallery/g-om-1.jpg',
          'subHtml': '<h4>Image 0 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-om-2.jpg',
          'thumb': '../img/gallery/g-om-2.jpg',
          'subHtml': '<h4>Image 1 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-om-3.jpg',
          'thumb': '../img/gallery/g-om-3.jpg',
          'subHtml': "<h4>Image 2 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-om-4.jpg',
          'thumb': '../img/gallery/g-om-4.jpg',
          'subHtml': "<h4>Image 3 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-om-5.jpg',
          'thumb': '../img/gallery/g-om-5.jpg',
          'subHtml': "<h4>Image 4 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-om-6.jpg',
          'thumb': '../img/gallery/g-om-6.jpg',
          'subHtml': "<h4>Image 5 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }]
  })
});

// ----------------- Instrument Gallery -----------------------
$('#i4').on('click', function() {

  $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
          'src': '../img/gallery/g-i-1.jpg',
          'thumb': '../img/gallery/g-i-1.jpg',
          'subHtml': '<h4>Image 0 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-i-2.jpg',
          'thumb': '../img/gallery/g-i-2.jpg',
          'subHtml': '<h4>Image 1 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-i-3.jpg',
          'thumb': '../img/gallery/g-i-3.jpg',
          'subHtml': "<h4>Image 2 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-i-4.jpg',
          'thumb': '../img/gallery/g-i-4.jpg',
          'subHtml': "<h4>Image 3 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-i-5.jpg',
          'thumb': '../img/gallery/g-i-5.jpg',
          'subHtml': "<h4>Image 4 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-i-6.jpg',
          'thumb': '../img/gallery/g-i-6.jpg',
          'subHtml': "<h4>Image 5 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-i-7.jpg',
          'thumb': '../img/gallery/g-i-7.jpg',
          'subHtml': "<h4>Image 5 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }]
  })
});

// ----------------- Studio Gallery -----------------------
$('#i5').on('click', function() {

  $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
          'src': '../img/gallery/g-s-3.jpg',
          'thumb': '../img/gallery/g-s-3.jpg',
          'subHtml': '<h4>Image 0 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-s-2.jpg',
          'thumb': '../img/gallery/g-s-2.jpg',
          'subHtml': '<h4>Image 1 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-s-1.jpg',
          'thumb': '../img/gallery/g-s-1.jpg',
          'subHtml': "<h4>Image 2 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-s-4.jpg',
          'thumb': '../img/gallery/g-s-4.jpg',
          'subHtml': "<h4>Image 3 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-s-5.jpg',
          'thumb': '../img/gallery/g-s-5.jpg',
          'subHtml': "<h4>Image 4 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-s-6.jpg',
          'thumb': '../img/gallery/g-s-6.jpg',
          'subHtml': "<h4>Image 5 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }]
  })
});

// ----------------- Client Gallery -----------------------
$('#i6').on('click', function() {

  $(this).lightGallery({
      dynamic: true,
      dynamicEl: [{
          'src': '../img/gallery/g-c-1.jpg',
          'thumb': '../img/gallery/g-c-1.jpg',
          'subHtml': '<h4>Image 0 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-c-2.jpg',
          'thumb': '../img/gallery/g-c-2.jpg',
          'subHtml': '<h4>Image 1 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>'
      }, {
          'src': '../img/gallery/g-c-3.jpg',
          'thumb': '../img/gallery/g-c-3.jpg',
          'subHtml': "<h4>Image 2 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-c-4.jpg',
          'thumb': '../img/gallery/g-c-4.jpg',
          'subHtml': "<h4>Image 3 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-c-5.jpg',
          'thumb': '../img/gallery/g-c-5.jpg',
          'subHtml': "<h4>Image 4 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }, {
          'src': '../img/gallery/g-c-6.jpg',
          'thumb': '../img/gallery/g-c-6.jpg',
          'subHtml': "<h4>Image 5 Title</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi enim saepe pariatur iste, dolor maxime ad quibusdam repellat mollitia.</p>"
      }]
  })
});
