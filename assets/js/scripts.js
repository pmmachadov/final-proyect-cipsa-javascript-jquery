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

// Slider con link a 5 fotos de la web
$(document).ready(function () {

  $('#slider').slider({
    animate: true,
    value: 1,
    min: 1,
    max: 5,
    step: 1,
    slide: function (event, ui) {
      $('#sliderValue').html(ui.value)
      $('#sliderValue').attr(
        'href',
        'https://picsum.photos/200/300?random=' + ui.value
      )
    }
  })
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

// Photo gallery


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



// Photo carousel del index paina principal

let slideIndex = 0; // 0 es el valor inicial
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // Selecciona todos los elementos con la clase mySlides
  for (i = 0; i < slides.length; i++) { // Recorre todos los elementos con la clase mySlides
    slides[i].style.display = "none"; // Oculta todos los elementos con la clase mySlides
  }
  slideIndex++; // Incrementa el valor de slideIndex en 1
  if (slideIndex > slides.length) { slideIndex = 1 } // Si slideIndex es mayor que el número de elementos con la clase mySlides, slideIndex vuelve a ser 1
  setTimeout(showSlides, 2000);
}

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
