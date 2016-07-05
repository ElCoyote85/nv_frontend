
$(function () {
    $(document).foundation();

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

    $('.nv-sponsors--arrow-left').click(function () {
        owl.trigger('prev.owl.carousel');
    })
    $('.nv-sponsors--arrow-right').click(function () {
        owl.trigger('next.owl.carousel');
    })


    /* CUSTOM SCROLLBAR */
    $('.nv-expo-reviews').mCustomScrollbar({
        theme: 'rounded-dots',
        mouseWheel: {
            enable: true,
            axis: 'y',
            scrollAmount: 60
        }
    });


});




/* CALLING CALENDAR */
// let calendarIsOpen = false;
// $('.nv-calendar--info').click(function (e) {
//     // if
//     render(<Calendar/>, $('.nv-calendar-container')[0]);
//     // render(<Calendar/>, $('.nv-calendar-container')[0]);
//     /**/
// });