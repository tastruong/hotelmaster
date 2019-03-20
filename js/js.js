
$(".icon-search").click(function () 
{
    $("#hidde").fadeToggle();
});

$( function() {
    $( "#datepicker" ).datepicker();
} );

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items:3,
    navText:[' <i class="fa fa-chevron-left"></i>' ,' <i class="fa fa-chevron-right"></i>'],
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('#Testimonial').owlCarousel({

   loop:true,
    nav:true,
    items:1,
    navText:[' <i class="fa fa-chevron-left"></i>' ,' <i class="fa fa-chevron-right"></i>'],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }

  
})

$('#datetimepicker').datepicker({
});

