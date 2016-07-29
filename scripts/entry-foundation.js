// require('foundation.scss')

/*  STYLES  */

require('../scss/app.scss');


/*  SCRIPTS  */
var $ = require('jquery');
window.jQuery = $;

require('foundation.core');
// require('foundation.util.triggers');
// require('foundation.util.motion');
require('foundation.util.mediaQuery');
// require('foundation.toggler');
// require('foundation.sticky');

// require('foundation.equalizer');

import 'jquery-sticky';


$(function () {
    $(document).foundation();
    if($('#nv-expo-top-bar')) {
        $('#nv-expo-top-bar').sticky({
            // topSpacing: '100px'
            zIndex: 10
        });
    }

    if($('#ul-stick-filters-subjects')) {
        $('#ul-stick-filters-subjects').sticky({
            // getWidthFrom: 'nv-expo-filter-subjects',
            responsiveWidth: true,
            zIndex: 9
        });
    }
    if($('#ul-stick-filters-types')) {
        $('#ul-stick-filters-types').sticky({
            // getWidthFrom: 'nv-expo-filter-subjects',
            responsiveWidth: true,
            zIndex: 9
        });
    }
    if($('#ul-stick-filters-cities')) {
        $('#ul-stick-filters-cities').sticky({
            // getWidthFrom: 'nv-expo-filter-subjects',
            responsiveWidth: true,
            zIndex: 9
        });
    }

    /* SUBJECT BUTTON */
    if($('#subject')) {
        $('#subject').click(function () {
            $('.nv-expo-filter-cities').hide();
            $('.nv-expo-filter-types').hide();
            $('#type').removeClass('active');
            $('#city').removeClass('active');
            $('#subject').toggleClass('active');
            $('.nv-expo-filter-subjects').slideToggle();
        });
    }
    /* TYPE BUTTON */
    if($('#type')) {
        $('#type').click(function () {
            $('.nv-expo-filter-cities').hide();
            $('.nv-expo-filter-subjects').hide();
            $('#city').removeClass('active');
            $('#subject').removeClass('active');
            $('#type').toggleClass('active');
            $('.nv-expo-filter-types').slideToggle({direction: 'right'});
        });
    }
    /* CITY BUTTON */
    if($('#city')) {
        $('#city').click(function () {
            $('.nv-expo-filter-types').hide();
            $('.nv-expo-filter-subjects').hide();
            $('#type').removeClass('active');
            $('#subject').removeClass('active');
            $('#city').toggleClass('active');
            $('.nv-expo-filter-cities').slideToggle();
        });
    }
});
