$(document).ready(function () {
  // Menu horizontal
  $('.menu ul li').hover(
    function () {
      $(this)
        .find('ul')
        .slideDown()
    },
    function () {
      $(this)
        .find('ul')
        .slideUp()
    }
  )
})

// Formulario
$(document).ready(function () {

  $('#form').submit(function (e) {
    e.preventDefault()
    const nombre = $('#nombre').val()
    const email = $('#email').val()
    const telefono = $('#telefono').val()
    const mensaje = $('#mensaje').val()
    $('.msg').text(
      'Nombre: ' +
      nombre +
      ' Email: ' +
      email +
      ' Telefono: ' +
      telefono +
      ' Mensaje: ' +
      mensaje
    )
    $('.msg').slideDown()
  })
})
// Tabs
$(document).ready(function () {

  $('#tabs').tabs()
})

// Accordion

$(document).ready(function () {
  $('#accordion').accordion()
})

// Datepicker
$(document).ready(function () {
  $('#datepicker').datepicker()

})

// Parrafos desplegables
$(document).ready(function () {

  $('#parrafos').accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content',
  })
})

// Crear efecto de movimiento zoom in and out when hovering en las imagenes
const images = document.querySelectorAll('.image-box');
const container = document.querySelector('.container');

images.forEach(image => {
  image.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 0;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 0;
    image.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  image.addEventListener('mouseenter', e => { // cuando el mouse entra a la imagen
    image.style.transition = "all 3.0s ease"; // tiempo de transicion
  });

  image.addEventListener('mouseleave', e => { // cuando el mouse sale de la imagen
    image.style.transition = "all 3.0s ease"; // tiempo de transicion

  });
});

// nav ul li a movement effect hover jquery

$(document).ready(function () {
  $(".navbar__menu").hover(function () {
    $(".mov").animate({
      width: "150%",

    }, 250);
  }, function () {
    $(".mov").animate({
      width: "100%",

    }, 250);
  });
});

// Photo carousel del index paina principal

$(document).ready(function () {
  let pauseInterval = false;
  // set an interval for the slide to run on
  let interval = window.setInterval(rotateSlides, 2000) // Duration until slide changes (3sec)
  function rotateSlides() {
    // Get the first slide and store it
    let $firstSlide = $('#carousel').find('div:first');
    // Get the width of the slide so we know how much to slide by
    let width = $firstSlide.width();
    // Animate the first slide to move to the left the length of the
    // width. Set 1000 (1sec) to be the length of the slide transition.
    $firstSlide.animate({ marginLeft: -width }, 1000, function () {
      // Reorder slides - move the $firstSlide after the last slide
      let $lastSlide = $('#carousel').find('div:last')
      $lastSlide.after($firstSlide);
      // Reset slide position to the end of the queue
      $firstSlide.css({ marginLeft: 0 })
    });
  }

  // Listen for click on arrows
  $('#left-arrow').click(previousSlide);
  $('#right-arrow').click(nextSlide);
  // Listen for click on slide image
  $('.slide-image').click(nextSlide);

  function previousSlide() {
    // Stop the interval from running
    window.clearInterval(interval);
    // Get the current slide
    let $currentSlide = $('#carousel').find('div:first');
    // Get the width of the slide so we know how much to slide by
    let width = $currentSlide.width();
    // Get the previous slide
    let $previousSlide = $('#carousel').find('div:last')
    // Move the previous slide's positition to the front of the queue
    $previousSlide.css({ marginLeft: -width })
    $currentSlide.before($previousSlide);
    // Animate to the previous slide
    $previousSlide.animate({ marginLeft: 0 }, 1000, function () {
      // Resume the interval
      interval = window.setInterval(rotateSlides, 2000);
    });
  }

  function nextSlide() {
    // Stop the interval from running
    window.clearInterval(interval);
    // Get the current slide
    let $currentSlide = $('#carousel').find('div:first');
    // Get the width of the slide so we know how much to slide by
    let width = $currentSlide.width();
    // Animate to the next slide
    $currentSlide.animate({ marginLeft: -width }, 1000, function () {
      // Reorder slides - move the $firstSlide after the last slide
      let $lastSlide = $('#carousel').find('div:last')
      $lastSlide.after($currentSlide);
      // Reset slide position to the end of the queue
      $currentSlide.css({ marginLeft: 0 })
      // Resume the interval
      interval = window.setInterval(rotateSlides, 2000);
    });
  }
});