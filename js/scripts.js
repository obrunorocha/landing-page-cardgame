$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:10,
        autoWidth:false,
        nav: true,
        navText:[
            "<i class='fas fa-chevron-left' aria-hidden='true'></i>",
            "<i class='fas fa-chevron-right' aria-hidden='true'></i>"
        ],
        responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1200: {
              items: 3
            },
        }
    });
})