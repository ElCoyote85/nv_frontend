// require('foundation.scss')

/*  STYLES  */

require('../scss/app.scss');


/*  SCRIPTS  */
var $ = require('jquery');
window.jQuery = $;

require('foundation.core');
require('foundation.util.triggers');
require('foundation.util.mediaQuery');
require('foundation.sticky');



$(function () {
    $(document).foundation();
});