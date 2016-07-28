// require('foundation.scss')

/*  STYLES  */

require('../scss/app.scss');


/*  SCRIPTS  */
var $ = require('jquery');
window.jQuery = $;

require('foundation.core');
require('foundation.util.triggers');
// require('foundation.util.motion');
require('foundation.util.mediaQuery');
require('foundation.toggler');
require('foundation.sticky');

// require('foundation.equalizer');




$(function () {
    $(document).foundation();
    if($('#nv-expo-top-bar')) {

    }
});

$('#nv-expo-top-bar').load(function (e) {
    console.log(this);
});