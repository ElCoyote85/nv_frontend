// require('foundation.scss')

/*  STYLES  */
require('./scss/app.scss');


/*  SCRIPTS  */
var $ = require('jquery.js');
window.jQuery = $;

// require('foundation.core');
import {foundation} from 'foundation.core';
foundation();
require('foundation.util.triggers');
require('foundation.util.mediaQuery');
require('foundation.sticky');

require('owl.carousel');

require('jquery-mousewheel');
require('malihu-custom-scrollbar-plugin')($);