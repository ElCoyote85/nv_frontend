
import 'owl.carousel';

$(function () {
    var owl = $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        items: 2,
        margin: 70,
        loop: true,
        autoWidth: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 4
            }
        }
    });

    setTimeout(function () {
        $('.owl-carousel').css('display','none');
        // $('.owl-carousel').style.display = 'block';
    }, 1000);

    setTimeout(function () {
        // $('.owl-carousel').style.display =  'none';
        $('.owl-carousel').css('display','block');
    }, 1500);

    $('.nv-sponsors--arrow-left').click(function () {
        owl.trigger('prev.owl.carousel');
    });
    $('.nv-sponsors--arrow-right').click(function () {
        owl.trigger('next.owl.carousel');
    });
});

