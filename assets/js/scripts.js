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
    let nombre = $('#nombre').val()
    let email = $('#email').val()
    let telefono = $('#telefono').val()
    let mensaje = $('#mensaje').val()
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

// Photo carousel del index paina principal


let currentSlide = 1;
let $slider = $('.slides');
let slideCount = $slider.children().length;
let slideTime = 2000;
let animationTime = 800;
console.log(slideCount);

setInterval (function () {
  $slider.animate({
    marginLeft: '-=900px'
  }, animationTime, function () {
    currentSlide++;
    if (currentSlide === slideCount) {
      currentSlide = 1;
      $(this).css('margin-left', "0px");
    }
  });
}, slideTime);