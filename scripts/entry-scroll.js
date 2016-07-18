

import 'jquery-mousewheel';
import malihu from  'malihu-custom-scrollbar-plugin';
malihu($);

$(function () {

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



