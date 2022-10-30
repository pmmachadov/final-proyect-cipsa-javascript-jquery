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

  // Slider con link a 5 fotos de la web
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

  // Formulario
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

  // Tabs
  $('#tabs').tabs()

  // Accordion
  $('#accordion').accordion()

  // Datepicker
  $('#datepicker').datepicker()

 

 

 
  // Parrafos desplegables
  $('#parrafos').accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content',
  })

  // Responsive video gallery
  


  // Responsive video gallery

})