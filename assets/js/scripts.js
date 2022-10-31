$(document).ready(function () {
    // Menu horizontal
    $(".menu ul li").hover(function () {
        $(this).find("ul").slideDown();
    }, function () {
        $(this).find("ul").slideUp();
    });

    // Slider con link a 5 fotos de la web
    $("#slider").slider({
        animate: true,
        value: 1,
        min: 1,
        max: 5,
        step: 1,
        slide: function (event, ui) {
            $("#sliderValue").html(ui.value);
            $("#sliderValue").attr("href", "https://picsum.photos/200/300?random=" + ui.value);
        }
    });

    // Formulario
    $("#form").submit(function (e) {
        e.preventDefault();
        const nombre = $("#nombre").val();
        const email = $("#email").val();
        const telefono = $("#telefono").val();
        const mensaje = $("#mensaje").val();
        $(".msg").text(
            "Nombre: " +
            nombre +
            " Email: " +
            email +
            " Telefono: " +
            telefono +
            " Mensaje: " +
            mensaje
        );
        $(".msg").slideDown();
    });

    // Tabs
    $("#tabs").tabs();

    // Accordion
    $("#accordion").accordion();

    // Datepicker
    $("#datepicker").datepicker();

    // Contactable
    $("#contactable").contactable({
        url: "contact.php",
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        submit: "Enviar",
        recivedMsg: "Gracias por contactar con nosotros",
        notRecivedMsg: "Lo sentimos, no se ha podido enviar el mensaje",
    });

    // Mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: new google.maps.LatLng(41.850033, -87.6500523),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    const infowindow = new google.maps.InfoWindow();

    let marker, i;

    const markers = [
        ["Barcelona", 41.850033, -87.6500523],
        ["Madrid", 40.4167754, -3.7037902],
        ["Valencia", 39.4699075, -0.3773866],
        ["Sevilla", 37.38264, -5.9962951],
        ["Zaragoza", 41.65606, -0.8773401],
    ];

    for (i = 0; i < markers.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][1], markers[i][2]),
            map: map,
        });

        google.maps.event.addListener(
            marker,
            "click",
            (function (marker, i) {
                return function () {
                    infowindow.setContent(markers[i][0]);
                    infowindow.open(map, marker);
                };
            })(marker, i)
        );
    }

    // Toggle
    $("#toggle").click(function () {
        $("body").toggleClass("dark");
    });

    // Parrafos desplegables
    $("#parrafos").accordion({
        collapsible: true,
        active: false,
    });

    // Botones de menu con efecto de movimiento
    $(".menu ul li a").hover(
        function () {
            $(this).animate({ marginLeft: "10px" }, 200);
        },
        function () {
            $(this).animate({ marginLeft: "0px" }, 200);
        }
    );   

    // Fotos random de paisajes de España
    const fotos = [
        "https://picsum.photos/200/300?random=1",
        "https://picsum.photos/200/300?random=2",
        "https://picsum.photos/200/300?random=3",
        "https://picsum.photos/200/300?random=4",
        "https://picsum.photos/200/300?random=5",
    ];

    const i = 0;
    setInterval(function () {
        $("#fotos").attr("src", fotos[i]);
        i++;
        if (i == fotos.length) {
            i = 0;
        }
    }, 5000);

    //12 - iconos a las redes sociales que lleven a la pagina principal de cada una de ellas.
    $("#facebook").click(function () {
        window.open("https://www.facebook.com/");
    });
    $("#twitter").click(function () {
        window.open("https://twitter.com/");
    });
    $("#instagram").click(function () {
        window.open("https://www.instagram.com/");
    });
    $("#youtube").click(function () {
        window.open("https://www.youtube.com/");
    });

    //13 - una galeria de videos de youtube de paisajes de españa.
    $("#youtube").click(function () {
        window.open("https://www.youtube.com/");
    });

    // Efecto de transicion de las fotos
    $("#fotos").click(function () {
        const efectos = [
            "blind",
            "bounce",
            "clip",
            "drop",
            "explode",
            "fold",
            "puff",
            "scale",
            "shake",
            "slide",
        ];
        const i = Math.floor(Math.random() * efectos.length);
        $("#fotos").effect(efectos[i], 1000);
    });
});