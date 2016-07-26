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
require('foundation.toggler');
require('foundation.sticky');

// require('foundation.equalizer');




$(function () {
    $(document).foundation();
});