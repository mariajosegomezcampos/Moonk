// Funcion Servicios 
$(".services-accordion-titulo").click(function () {

    var contenido = $(this).next(".services-accordion-content");

    if (contenido.css("display") == "none") { //open		
        contenido.slideDown(250);
        $(this).addClass("open");
    }
    else { //close		
        contenido.slideUp(250);
        $(this).removeClass("open");
    }

});


// Funcion Preguntas Frecuentes

$(document).ready(function () {
    $('.frequent-questions-tab-content:first').show();
    $('.frequent-questions-navegation li:first').addClass('active');

    $('.frequent-questions-navegation li').click(function (event) {
        index = $(this).index();
        $('.frequent-questions-navegation li').removeClass('active');
        $(this).addClass('active');
        $('.frequent-questions-tab-content').hide();
        $('.frequent-questions-tab-content').eq(index).show();
    });
});


//  Funcion menu hambuequesa

$('.btn-menu').on('click', function () {

    $('.menu').slideToggle();
    // console.log('ajaa')

});
