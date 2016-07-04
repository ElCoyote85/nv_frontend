// require('foundation.scss')

/*  STYLES  */
import React from 'react';
import {render} from 'react-dom';

require('./scss/app.scss');


/*  SCRIPTS  */
var $ = require('jquery.js');
window.jQuery = $;

require('foundation.core');
require('foundation.util.triggers');
require('foundation.util.mediaQuery');
require('foundation.sticky');

require('owl.carousel');

require('jquery-mousewheel');
require('malihu-custom-scrollbar-plugin')($);

//
// var React = require('react');
// var render = require('react-dom');


require('calendar/CalendarAside.jsx');