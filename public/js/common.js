/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://static.navystavke.ru/newassets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {'use strict';

	__webpack_require__(297);

	__webpack_require__(298);

	__webpack_require__(299);

	__webpack_require__(300);

	__webpack_require__(301);

	__webpack_require__(302);

	// require('foundation.scss')

	/*  STYLES  */

	__webpack_require__(303);

	/*  SCRIPTS  */
	var $ = __webpack_require__(2);
	__webpack_provided_window_dot_jQuery = $;
	window.$ = $;
	// require('foundation.util.triggers');
	// require('foundation.util.motion');

	// require('foundation.toggler');
	// require('foundation.sticky');

	// require('foundation.equalizer');

	var testvar = 'some ' + (10 + 20);

	$(function () {
	    $(document).foundation();
	    if ($('#nv-expo-top-bar')) {
	        $('#nv-expo-top-bar').sticky({
	            // topSpacing: '100px'
	            zIndex: 10
	        });
	    }

	    if ($('#ul-stick-filters-subjects')) {
	        $('#ul-stick-filters-subjects').sticky({
	            // getWidthFrom: 'nv-expo-filter-subjects',
	            responsiveWidth: true,
	            zIndex: 9
	        });
	    }
	    if ($('#ul-stick-filters-types')) {
	        $('#ul-stick-filters-types').sticky({
	            // getWidthFrom: 'nv-expo-filter-subjects',
	            responsiveWidth: true,
	            zIndex: 9
	        });
	    }
	    if ($('#ul-stick-filters-cities')) {
	        $('#ul-stick-filters-cities').sticky({
	            // getWidthFrom: 'nv-expo-filter-subjects',
	            responsiveWidth: true,
	            zIndex: 9
	        });
	    }

	    /* SUBJECT BUTTON */
	    if ($('#subject')) {
	        $('#subject').click(function () {
	            $('.nv-expo-filter-cities').hide();
	            $('.nv-expo-filter-types').hide();
	            $('#type').removeClass('active');
	            $('#city').removeClass('active');
	            $('#subject').toggleClass('active');
	            $('.nv-expo-filter-subjects').slideToggle();
	            $('#ul-stick-filters-subjects').sticky('update');
	        });
	    }
	    /* TYPE BUTTON */
	    if ($('#type')) {
	        $('#type').click(function () {
	            $('.nv-expo-filter-cities').hide();
	            $('.nv-expo-filter-subjects').hide();
	            $('#city').removeClass('active');
	            $('#subject').removeClass('active');
	            $('#type').toggleClass('active');
	            $('.nv-expo-filter-types').slideToggle({ direction: 'right' });
	            $('#ul-stick-filters-types').sticky('update');
	        });
	    }
	    /* CITY BUTTON */
	    if ($('#city')) {
	        $('#city').click(function () {
	            $('.nv-expo-filter-types').hide();
	            $('.nv-expo-filter-subjects').hide();
	            $('#type').removeClass('active');
	            $('#subject').removeClass('active');
	            $('#city').toggleClass('active');
	            $('.nv-expo-filter-cities').slideToggle();
	            $('#ul-stick-filters-cities').sticky('update');
	        });
	    }

	    /* STAND TABS INIT*/
	    var standTabs = $('#nv-stand-tabs');
	    // if(standTabs = $('.nv-stand-description')){
	    if (standTabs.length != 0) {
	        var stand_tabs = new Foundation.Tabs(standTabs, {
	            linkClass: 'nv-stand-description--tabs-tab',
	            panelClass: 'nv-stand-description--tabs-panel'
	        });
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function ($) {

	  "use strict";

	  var FOUNDATION_VERSION = '6.2.2';

	  // Global Foundation object
	  // This is attached to the window, or used as a module for AMD/Browserify
	  var Foundation = {
	    version: FOUNDATION_VERSION,

	    /**
	     * Stores initialized plugins.
	     */
	    _plugins: {},

	    /**
	     * Stores generated unique ids for plugin instances
	     */
	    _uuids: [],

	    /**
	     * Returns a boolean for RTL support
	     */
	    rtl: function rtl() {
	      return $('html').attr('dir') === 'rtl';
	    },
	    /**
	     * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
	     * @param {Object} plugin - The constructor of the plugin.
	     */
	    plugin: function plugin(_plugin, name) {
	      // Object key to use when adding to global Foundation object
	      // Examples: Foundation.Reveal, Foundation.OffCanvas
	      var className = name || functionName(_plugin);
	      // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
	      // Examples: data-reveal, data-off-canvas
	      var attrName = hyphenate(className);

	      // Add to the Foundation object and the plugins list (for reflowing)
	      this._plugins[attrName] = this[className] = _plugin;
	    },
	    /**
	     * @function
	     * Populates the _uuids array with pointers to each individual plugin instance.
	     * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
	     * Also fires the initialization event for each plugin, consolidating repetitive code.
	     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
	     * @param {String} name - the name of the plugin, passed as a camelCased string.
	     * @fires Plugin#init
	     */
	    registerPlugin: function registerPlugin(plugin, name) {
	      var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
	      plugin.uuid = this.GetYoDigits(6, pluginName);

	      if (!plugin.$element.attr('data-' + pluginName)) {
	        plugin.$element.attr('data-' + pluginName, plugin.uuid);
	      }
	      if (!plugin.$element.data('zfPlugin')) {
	        plugin.$element.data('zfPlugin', plugin);
	      }
	      /**
	       * Fires when the plugin has initialized.
	       * @event Plugin#init
	       */
	      plugin.$element.trigger('init.zf.' + pluginName);

	      this._uuids.push(plugin.uuid);

	      return;
	    },
	    /**
	     * @function
	     * Removes the plugins uuid from the _uuids array.
	     * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
	     * Also fires the destroyed event for the plugin, consolidating repetitive code.
	     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
	     * @fires Plugin#destroyed
	     */
	    unregisterPlugin: function unregisterPlugin(plugin) {
	      var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

	      this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
	      plugin.$element.removeAttr('data-' + pluginName).removeData('zfPlugin')
	      /**
	       * Fires when the plugin has been destroyed.
	       * @event Plugin#destroyed
	       */
	      .trigger('destroyed.zf.' + pluginName);
	      for (var prop in plugin) {
	        plugin[prop] = null; //clean up script to prep for garbage collection.
	      }
	      return;
	    },

	    /**
	     * @function
	     * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
	     * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
	     * @default If no argument is passed, reflow all currently active plugins.
	     */
	    reInit: function reInit(plugins) {
	      var isJQ = plugins instanceof $;
	      try {
	        if (isJQ) {
	          plugins.each(function () {
	            $(this).data('zfPlugin')._init();
	          });
	        } else {
	          var type = typeof plugins === 'undefined' ? 'undefined' : _typeof(plugins),
	              _this = this,
	              fns = {
	            'object': function object(plgs) {
	              plgs.forEach(function (p) {
	                p = hyphenate(p);
	                $('[data-' + p + ']').foundation('_init');
	              });
	            },
	            'string': function string() {
	              plugins = hyphenate(plugins);
	              $('[data-' + plugins + ']').foundation('_init');
	            },
	            'undefined': function undefined() {
	              this['object'](Object.keys(_this._plugins));
	            }
	          };
	          fns[type](plugins);
	        }
	      } catch (err) {
	        console.error(err);
	      } finally {
	        return plugins;
	      }
	    },

	    /**
	     * returns a random base-36 uid with namespacing
	     * @function
	     * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
	     * @param {String} namespace - name of plugin to be incorporated in uid, optional.
	     * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
	     * @returns {String} - unique id
	     */
	    GetYoDigits: function GetYoDigits(length, namespace) {
	      length = length || 6;
	      return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? '-' + namespace : '');
	    },
	    /**
	     * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
	     * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
	     * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
	     */
	    reflow: function reflow(elem, plugins) {

	      // If plugins is undefined, just grab everything
	      if (typeof plugins === 'undefined') {
	        plugins = Object.keys(this._plugins);
	      }
	      // If plugins is a string, convert it to an array with one item
	      else if (typeof plugins === 'string') {
	          plugins = [plugins];
	        }

	      var _this = this;

	      // Iterate through each plugin
	      $.each(plugins, function (i, name) {
	        // Get the current plugin
	        var plugin = _this._plugins[name];

	        // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
	        var $elem = $(elem).find('[data-' + name + ']').addBack('[data-' + name + ']');

	        // For each plugin found, initialize it
	        $elem.each(function () {
	          var $el = $(this),
	              opts = {};
	          // Don't double-dip on plugins
	          if ($el.data('zfPlugin')) {
	            console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
	            return;
	          }

	          if ($el.attr('data-options')) {
	            var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
	              var opt = e.split(':').map(function (el) {
	                return el.trim();
	              });
	              if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
	            });
	          }
	          try {
	            $el.data('zfPlugin', new plugin($(this), opts));
	          } catch (er) {
	            console.error(er);
	          } finally {
	            return;
	          }
	        });
	      });
	    },
	    getFnName: functionName,
	    transitionend: function transitionend($elem) {
	      var transitions = {
	        'transition': 'transitionend',
	        'WebkitTransition': 'webkitTransitionEnd',
	        'MozTransition': 'transitionend',
	        'OTransition': 'otransitionend'
	      };
	      var elem = document.createElement('div'),
	          end;

	      for (var t in transitions) {
	        if (typeof elem.style[t] !== 'undefined') {
	          end = transitions[t];
	        }
	      }
	      if (end) {
	        return end;
	      } else {
	        end = setTimeout(function () {
	          $elem.triggerHandler('transitionend', [$elem]);
	        }, 1);
	        return 'transitionend';
	      }
	    }
	  };

	  Foundation.util = {
	    /**
	     * Function for applying a debounce effect to a function call.
	     * @function
	     * @param {Function} func - Function to be called at end of timeout.
	     * @param {Number} delay - Time in ms to delay the call of `func`.
	     * @returns function
	     */
	    throttle: function throttle(func, delay) {
	      var timer = null;

	      return function () {
	        var context = this,
	            args = arguments;

	        if (timer === null) {
	          timer = setTimeout(function () {
	            func.apply(context, args);
	            timer = null;
	          }, delay);
	        }
	      };
	    }
	  };

	  // TODO: consider not making this a jQuery function
	  // TODO: need way to reflow vs. re-initialize
	  /**
	   * The Foundation jQuery method.
	   * @param {String|Array} method - An action to perform on the current jQuery object.
	   */
	  var foundation = function foundation(method) {
	    var type = typeof method === 'undefined' ? 'undefined' : _typeof(method),
	        $meta = $('meta.foundation-mq'),
	        $noJS = $('.no-js');

	    if (!$meta.length) {
	      $('<meta class="foundation-mq">').appendTo(document.head);
	    }
	    if ($noJS.length) {
	      $noJS.removeClass('no-js');
	    }

	    if (type === 'undefined') {
	      //needs to initialize the Foundation object, or an individual plugin.
	      Foundation.MediaQuery._init();
	      Foundation.reflow(this);
	    } else if (type === 'string') {
	      //an individual method to invoke on a plugin or group of plugins
	      var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary
	      var plugClass = this.data('zfPlugin'); //determine the class of plugin

	      if (plugClass !== undefined && plugClass[method] !== undefined) {
	        //make sure both the class and method exist
	        if (this.length === 1) {
	          //if there's only one, call it directly.
	          plugClass[method].apply(plugClass, args);
	        } else {
	          this.each(function (i, el) {
	            //otherwise loop through the jQuery collection and invoke the method on each
	            plugClass[method].apply($(el).data('zfPlugin'), args);
	          });
	        }
	      } else {
	        //error for no class or no method
	        throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
	      }
	    } else {
	      //error for invalid argument type
	      throw new TypeError('We\'re sorry, ' + type + ' is not a valid parameter. You must use a string representing the method you wish to invoke.');
	    }
	    return this;
	  };

	  window.Foundation = Foundation;
	  $.fn.foundation = foundation;

	  // Polyfill for requestAnimationFrame
	  (function () {
	    if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
	      return new Date().getTime();
	    };

	    var vendors = ['webkit', 'moz'];
	    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
	      var vp = vendors[i];
	      window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
	      window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
	    }
	    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
	      var lastTime = 0;
	      window.requestAnimationFrame = function (callback) {
	        var now = Date.now();
	        var nextTime = Math.max(lastTime + 16, now);
	        return setTimeout(function () {
	          callback(lastTime = nextTime);
	        }, nextTime - now);
	      };
	      window.cancelAnimationFrame = clearTimeout;
	    }
	    /**
	     * Polyfill for performance.now, required by rAF
	     */
	    if (!window.performance || !window.performance.now) {
	      window.performance = {
	        start: Date.now(),
	        now: function now() {
	          return Date.now() - this.start;
	        }
	      };
	    }
	  })();
	  if (!Function.prototype.bind) {
	    Function.prototype.bind = function (oThis) {
	      if (typeof this !== 'function') {
	        // closest thing possible to the ECMAScript 5
	        // internal IsCallable function
	        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	      }

	      var aArgs = Array.prototype.slice.call(arguments, 1),
	          fToBind = this,
	          fNOP = function fNOP() {},
	          fBound = function fBound() {
	        return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
	      };

	      if (this.prototype) {
	        // native functions don't have a prototype
	        fNOP.prototype = this.prototype;
	      }
	      fBound.prototype = new fNOP();

	      return fBound;
	    };
	  }
	  // Polyfill to get the name of a function in IE9
	  function functionName(fn) {
	    if (Function.prototype.name === undefined) {
	      var funcNameRegex = /function\s([^(]{1,})\(/;
	      var results = funcNameRegex.exec(fn.toString());
	      return results && results.length > 1 ? results[1].trim() : "";
	    } else if (fn.prototype === undefined) {
	      return fn.constructor.name;
	    } else {
	      return fn.prototype.constructor.name;
	    }
	  }
	  function parseValue(str) {
	    if (/true/.test(str)) return true;else if (/false/.test(str)) return false;else if (!isNaN(str * 1)) return parseFloat(str);
	    return str;
	  }
	  // Convert PascalCase to kebab-case
	  // Thank you: http://stackoverflow.com/a/8955580
	  function hyphenate(str) {
	    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	  }
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*******************************************
	 *                                         *
	 * This util was created by Marius Olbertz *
	 * Please thank Marius on GitHub /owlbertz *
	 * or the web http://www.mariusolbertz.de/ *
	 *                                         *
	 ******************************************/

	'use strict';

	!function ($) {

	  var keyCodes = {
	    9: 'TAB',
	    13: 'ENTER',
	    27: 'ESCAPE',
	    32: 'SPACE',
	    37: 'ARROW_LEFT',
	    38: 'ARROW_UP',
	    39: 'ARROW_RIGHT',
	    40: 'ARROW_DOWN'
	  };

	  var commands = {};

	  var Keyboard = {
	    keys: getKeyCodes(keyCodes),

	    /**
	     * Parses the (keyboard) event and returns a String that represents its key
	     * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
	     * @param {Event} event - the event generated by the event handler
	     * @return String key - String that represents the key pressed
	     */
	    parseKey: function parseKey(event) {
	      var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
	      if (event.shiftKey) key = 'SHIFT_' + key;
	      if (event.ctrlKey) key = 'CTRL_' + key;
	      if (event.altKey) key = 'ALT_' + key;
	      return key;
	    },


	    /**
	     * Handles the given (keyboard) event
	     * @param {Event} event - the event generated by the event handler
	     * @param {String} component - Foundation component's name, e.g. Slider or Reveal
	     * @param {Objects} functions - collection of functions that are to be executed
	     */
	    handleKey: function handleKey(event, component, functions) {
	      var commandList = commands[component],
	          keyCode = this.parseKey(event),
	          cmds,
	          command,
	          fn;

	      if (!commandList) return console.warn('Component not defined!');

	      if (typeof commandList.ltr === 'undefined') {
	        // this component does not differentiate between ltr and rtl
	        cmds = commandList; // use plain list
	      } else {
	          // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
	          if (Foundation.rtl()) cmds = $.extend({}, commandList.ltr, commandList.rtl);else cmds = $.extend({}, commandList.rtl, commandList.ltr);
	        }
	      command = cmds[keyCode];

	      fn = functions[command];
	      if (fn && typeof fn === 'function') {
	        // execute function  if exists
	        var returnValue = fn.apply();
	        if (functions.handled || typeof functions.handled === 'function') {
	          // execute function when event was handled
	          functions.handled(returnValue);
	        }
	      } else {
	        if (functions.unhandled || typeof functions.unhandled === 'function') {
	          // execute function when event was not handled
	          functions.unhandled();
	        }
	      }
	    },


	    /**
	     * Finds all focusable elements within the given `$element`
	     * @param {jQuery} $element - jQuery object to search within
	     * @return {jQuery} $focusable - all focusable elements within `$element`
	     */
	    findFocusable: function findFocusable($element) {
	      return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
	        if (!$(this).is(':visible') || $(this).attr('tabindex') < 0) {
	          return false;
	        } //only have visible elements and those that have a tabindex greater or equal 0
	        return true;
	      });
	    },


	    /**
	     * Returns the component name name
	     * @param {Object} component - Foundation component, e.g. Slider or Reveal
	     * @return String componentName
	     */

	    register: function register(componentName, cmds) {
	      commands[componentName] = cmds;
	    }
	  };

	  /*
	   * Constants for easier comparing.
	   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
	   */
	  function getKeyCodes(kcs) {
	    var k = {};
	    for (var kc in kcs) {
	      k[kcs[kc]] = kcs[kc];
	    }return k;
	  }

	  Foundation.Keyboard = Keyboard;
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	!function ($) {

	  function Timer(elem, options, cb) {
	    var _this = this,
	        duration = options.duration,
	        //options is an object for easily adding features later.
	    nameSpace = Object.keys(elem.data())[0] || 'timer',
	        remain = -1,
	        start,
	        timer;

	    this.isPaused = false;

	    this.restart = function () {
	      remain = -1;
	      clearTimeout(timer);
	      this.start();
	    };

	    this.start = function () {
	      this.isPaused = false;
	      // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
	      clearTimeout(timer);
	      remain = remain <= 0 ? duration : remain;
	      elem.data('paused', false);
	      start = Date.now();
	      timer = setTimeout(function () {
	        if (options.infinite) {
	          _this.restart(); //rerun the timer.
	        }
	        cb();
	      }, remain);
	      elem.trigger('timerstart.zf.' + nameSpace);
	    };

	    this.pause = function () {
	      this.isPaused = true;
	      //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
	      clearTimeout(timer);
	      elem.data('paused', true);
	      var end = Date.now();
	      remain = remain - (end - start);
	      elem.trigger('timerpaused.zf.' + nameSpace);
	    };
	  }

	  /**
	   * Runs a callback function when images are fully loaded.
	   * @param {Object} images - Image(s) to check if loaded.
	   * @param {Func} callback - Function to execute when image is fully loaded.
	   */
	  function onImagesLoaded(images, callback) {
	    var self = this,
	        unloaded = images.length;

	    if (unloaded === 0) {
	      callback();
	    }

	    images.each(function () {
	      if (this.complete) {
	        singleImageLoaded();
	      } else if (typeof this.naturalWidth !== 'undefined' && this.naturalWidth > 0) {
	        singleImageLoaded();
	      } else {
	        $(this).one('load', function () {
	          singleImageLoaded();
	        });
	      }
	    });

	    function singleImageLoaded() {
	      unloaded--;
	      if (unloaded === 0) {
	        callback();
	      }
	    }
	  }

	  Foundation.Timer = Timer;
	  Foundation.onImagesLoaded = onImagesLoaded;
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	!function ($) {

	  /**
	   * Tabs module.
	   * @module foundation.tabs
	   * @requires foundation.util.keyboard
	   * @requires foundation.util.timerAndImageLoader if tabs contain images
	   */

	  var Tabs = function () {
	    /**
	     * Creates a new instance of tabs.
	     * @class
	     * @fires Tabs#init
	     * @param {jQuery} element - jQuery object to make into tabs.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    function Tabs(element, options) {
	      _classCallCheck(this, Tabs);

	      this.$element = element;
	      this.options = $.extend({}, Tabs.defaults, this.$element.data(), options);

	      this._init();
	      Foundation.registerPlugin(this, 'Tabs');
	      Foundation.Keyboard.register('Tabs', {
	        'ENTER': 'open',
	        'SPACE': 'open',
	        'ARROW_RIGHT': 'next',
	        'ARROW_UP': 'previous',
	        'ARROW_DOWN': 'next',
	        'ARROW_LEFT': 'previous'
	        // 'TAB': 'next',
	        // 'SHIFT_TAB': 'previous'
	      });
	    }

	    /**
	     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
	     * @private
	     */


	    _createClass(Tabs, [{
	      key: '_init',
	      value: function _init() {
	        var _this = this;

	        this.$tabTitles = this.$element.find('.' + this.options.linkClass);
	        this.$tabContent = $('[data-tabs-content="' + this.$element[0].id + '"]');

	        this.$tabTitles.each(function () {
	          var $elem = $(this),
	              $link = $elem.find('a'),
	              isActive = $elem.hasClass('is-active'),
	              hash = $link[0].hash.slice(1),
	              linkId = $link[0].id ? $link[0].id : hash + '-label',
	              $tabContent = $('#' + hash);

	          $elem.attr({ 'role': 'presentation' });

	          $link.attr({
	            'role': 'tab',
	            'aria-controls': hash,
	            'aria-selected': isActive,
	            'id': linkId
	          });

	          $tabContent.attr({
	            'role': 'tabpanel',
	            'aria-hidden': !isActive,
	            'aria-labelledby': linkId
	          });

	          if (isActive && _this.options.autoFocus) {
	            $link.focus();
	          }
	        });

	        if (this.options.matchHeight) {
	          var $images = this.$tabContent.find('img');

	          if ($images.length) {
	            Foundation.onImagesLoaded($images, this._setHeight.bind(this));
	          } else {
	            this._setHeight();
	          }
	        }

	        this._events();
	      }

	      /**
	       * Adds event handlers for items within the tabs.
	       * @private
	       */

	    }, {
	      key: '_events',
	      value: function _events() {
	        this._addKeyHandler();
	        this._addClickHandler();
	        this._setHeightMqHandler = null;

	        if (this.options.matchHeight) {
	          this._setHeightMqHandler = this._setHeight.bind(this);

	          $(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
	        }
	      }

	      /**
	       * Adds click handlers for items within the tabs.
	       * @private
	       */

	    }, {
	      key: '_addClickHandler',
	      value: function _addClickHandler() {
	        var _this = this;

	        this.$element.off('click.zf.tabs').on('click.zf.tabs', '.' + this.options.linkClass, function (e) {
	          e.preventDefault();
	          e.stopPropagation();
	          if ($(this).hasClass('is-active')) {
	            return;
	          }
	          _this._handleTabChange($(this));
	        });
	      }

	      /**
	       * Adds keyboard event handlers for items within the tabs.
	       * @private
	       */

	    }, {
	      key: '_addKeyHandler',
	      value: function _addKeyHandler() {
	        var _this = this;
	        var $firstTab = _this.$element.find('li:first-of-type');
	        var $lastTab = _this.$element.find('li:last-of-type');

	        this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {
	          if (e.which === 9) return;

	          var $element = $(this),
	              $elements = $element.parent('ul').children('li'),
	              $prevElement,
	              $nextElement;

	          $elements.each(function (i) {
	            if ($(this).is($element)) {
	              if (_this.options.wrapOnKeys) {
	                $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
	                $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
	              } else {
	                $prevElement = $elements.eq(Math.max(0, i - 1));
	                $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
	              }
	              return;
	            }
	          });

	          // handle keyboard event with keyboard util
	          Foundation.Keyboard.handleKey(e, 'Tabs', {
	            open: function open() {
	              $element.find('[role="tab"]').focus();
	              _this._handleTabChange($element);
	            },
	            previous: function previous() {
	              $prevElement.find('[role="tab"]').focus();
	              _this._handleTabChange($prevElement);
	            },
	            next: function next() {
	              $nextElement.find('[role="tab"]').focus();
	              _this._handleTabChange($nextElement);
	            },
	            handled: function handled() {
	              e.stopPropagation();
	              e.preventDefault();
	            }
	          });
	        });
	      }

	      /**
	       * Opens the tab `$targetContent` defined by `$target`.
	       * @param {jQuery} $target - Tab to open.
	       * @fires Tabs#change
	       * @function
	       */

	    }, {
	      key: '_handleTabChange',
	      value: function _handleTabChange($target) {
	        var $tabLink = $target.find('[role="tab"]'),
	            hash = $tabLink[0].hash,
	            $targetContent = this.$tabContent.find(hash),
	            $oldTab = this.$element.find('.' + this.options.linkClass + '.is-active').removeClass('is-active').find('[role="tab"]').attr({ 'aria-selected': 'false' });

	        $('#' + $oldTab.attr('aria-controls')).removeClass('is-active').attr({ 'aria-hidden': 'true' });

	        $target.addClass('is-active');

	        $tabLink.attr({ 'aria-selected': 'true' });

	        $targetContent.addClass('is-active').attr({ 'aria-hidden': 'false' });

	        /**
	         * Fires when the plugin has successfully changed tabs.
	         * @event Tabs#change
	         */
	        this.$element.trigger('change.zf.tabs', [$target]);
	      }

	      /**
	       * Public method for selecting a content pane to display.
	       * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
	       * @function
	       */

	    }, {
	      key: 'selectTab',
	      value: function selectTab(elem) {
	        var idStr;

	        if ((typeof elem === 'undefined' ? 'undefined' : _typeof(elem)) === 'object') {
	          idStr = elem[0].id;
	        } else {
	          idStr = elem;
	        }

	        if (idStr.indexOf('#') < 0) {
	          idStr = '#' + idStr;
	        }

	        var $target = this.$tabTitles.find('[href="' + idStr + '"]').parent('.' + this.options.linkClass);

	        this._handleTabChange($target);
	      }
	    }, {
	      key: '_setHeight',

	      /**
	       * Sets the height of each panel to the height of the tallest panel.
	       * If enabled in options, gets called on media query change.
	       * If loading content via external source, can be called directly or with _reflow.
	       * @function
	       * @private
	       */
	      value: function _setHeight() {
	        var max = 0;
	        this.$tabContent.find('.' + this.options.panelClass).css('height', '').each(function () {
	          var panel = $(this),
	              isActive = panel.hasClass('is-active');

	          if (!isActive) {
	            panel.css({ 'visibility': 'hidden', 'display': 'block' });
	          }

	          var temp = this.getBoundingClientRect().height;

	          if (!isActive) {
	            panel.css({
	              'visibility': '',
	              'display': ''
	            });
	          }

	          max = temp > max ? temp : max;
	        }).css('height', max + 'px');
	      }

	      /**
	       * Destroys an instance of an tabs.
	       * @fires Tabs#destroyed
	       */

	    }, {
	      key: 'destroy',
	      value: function destroy() {
	        this.$element.find('.' + this.options.linkClass).off('.zf.tabs').hide().end().find('.' + this.options.panelClass).hide();

	        if (this.options.matchHeight) {
	          if (this._setHeightMqHandler != null) {
	            $(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
	          }
	        }

	        Foundation.unregisterPlugin(this);
	      }
	    }]);

	    return Tabs;
	  }();

	  Tabs.defaults = {
	    /**
	     * Allows the window to scroll to content of active pane on load if set to true.
	     * @option
	     * @example false
	     */
	    autoFocus: false,

	    /**
	     * Allows keyboard input to 'wrap' around the tab links.
	     * @option
	     * @example true
	     */
	    wrapOnKeys: true,

	    /**
	     * Allows the tab content panes to match heights if set to true.
	     * @option
	     * @example false
	     */
	    matchHeight: false,

	    /**
	     * Class applied to `li`'s in tab link list.
	     * @option
	     * @example 'tabs-title'
	     */
	    linkClass: 'tabs-title',

	    /**
	     * Class applied to the content containers.
	     * @option
	     * @example 'tabs-panel'
	     */
	    panelClass: 'tabs-panel'
	  };

	  function checkClass($elem) {
	    return $elem.hasClass('is-active');
	  }

	  // Window exports
	  Foundation.plugin(Tabs, 'Tabs');
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function ($) {

	  // Default set of media queries
	  var defaultQueries = {
	    'default': 'only screen',
	    landscape: 'only screen and (orientation: landscape)',
	    portrait: 'only screen and (orientation: portrait)',
	    retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
	  };

	  var MediaQuery = {
	    queries: [],

	    current: '',

	    /**
	     * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
	     * @function
	     * @private
	     */
	    _init: function _init() {
	      var self = this;
	      var extractedStyles = $('.foundation-mq').css('font-family');
	      var namedQueries;

	      namedQueries = parseStyleToObject(extractedStyles);

	      for (var key in namedQueries) {
	        if (namedQueries.hasOwnProperty(key)) {
	          self.queries.push({
	            name: key,
	            value: 'only screen and (min-width: ' + namedQueries[key] + ')'
	          });
	        }
	      }

	      this.current = this._getCurrentSize();

	      this._watcher();
	    },


	    /**
	     * Checks if the screen is at least as wide as a breakpoint.
	     * @function
	     * @param {String} size - Name of the breakpoint to check.
	     * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
	     */
	    atLeast: function atLeast(size) {
	      var query = this.get(size);

	      if (query) {
	        return window.matchMedia(query).matches;
	      }

	      return false;
	    },


	    /**
	     * Gets the media query of a breakpoint.
	     * @function
	     * @param {String} size - Name of the breakpoint to get.
	     * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
	     */
	    get: function get(size) {
	      for (var i in this.queries) {
	        if (this.queries.hasOwnProperty(i)) {
	          var query = this.queries[i];
	          if (size === query.name) return query.value;
	        }
	      }

	      return null;
	    },


	    /**
	     * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
	     * @function
	     * @private
	     * @returns {String} Name of the current breakpoint.
	     */
	    _getCurrentSize: function _getCurrentSize() {
	      var matched;

	      for (var i = 0; i < this.queries.length; i++) {
	        var query = this.queries[i];

	        if (window.matchMedia(query.value).matches) {
	          matched = query;
	        }
	      }

	      if ((typeof matched === 'undefined' ? 'undefined' : _typeof(matched)) === 'object') {
	        return matched.name;
	      } else {
	        return matched;
	      }
	    },


	    /**
	     * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
	     * @function
	     * @private
	     */
	    _watcher: function _watcher() {
	      var _this = this;

	      $(window).on('resize.zf.mediaquery', function () {
	        var newSize = _this._getCurrentSize(),
	            currentSize = _this.current;

	        if (newSize !== currentSize) {
	          // Change the current media query
	          _this.current = newSize;

	          // Broadcast the media query change on the window
	          $(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
	        }
	      });
	    }
	  };

	  Foundation.MediaQuery = MediaQuery;

	  // matchMedia() polyfill - Test a CSS media type/query in JS.
	  // Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
	  window.matchMedia || (window.matchMedia = function () {
	    'use strict';

	    // For browsers that support matchMedium api such as IE 9 and webkit

	    var styleMedia = window.styleMedia || window.media;

	    // For those that don't support matchMedium
	    if (!styleMedia) {
	      var style = document.createElement('style'),
	          script = document.getElementsByTagName('script')[0],
	          info = null;

	      style.type = 'text/css';
	      style.id = 'matchmediajs-test';

	      script.parentNode.insertBefore(style, script);

	      // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
	      info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;

	      styleMedia = {
	        matchMedium: function matchMedium(media) {
	          var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

	          // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
	          if (style.styleSheet) {
	            style.styleSheet.cssText = text;
	          } else {
	            style.textContent = text;
	          }

	          // Test if media query is true or false
	          return info.width === '1px';
	        }
	      };
	    }

	    return function (media) {
	      return {
	        matches: styleMedia.matchMedium(media || 'all'),
	        media: media || 'all'
	      };
	    };
	  }());

	  // Thank you: https://github.com/sindresorhus/query-string
	  function parseStyleToObject(str) {
	    var styleObject = {};

	    if (typeof str !== 'string') {
	      return styleObject;
	    }

	    str = str.trim().slice(1, -1); // browsers re-quote string style values

	    if (!str) {
	      return styleObject;
	    }

	    styleObject = str.split('&').reduce(function (ret, param) {
	      var parts = param.replace(/\+/g, ' ').split('=');
	      var key = parts[0];
	      var val = parts[1];
	      key = decodeURIComponent(key);

	      // missing `=` should be `null`:
	      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
	      val = val === undefined ? null : decodeURIComponent(val);

	      if (!ret.hasOwnProperty(key)) {
	        ret[key] = val;
	      } else if (Array.isArray(ret[key])) {
	        ret[key].push(val);
	      } else {
	        ret[key] = [ret[key], val];
	      }
	      return ret;
	    }, {});

	    return styleObject;
	  }

	  Foundation.MediaQuery = MediaQuery;
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Sticky Plugin v1.0.4 for jQuery
	// =============
	// Author: Anthony Garand
	// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
	// Improvements by Leonardo C. Daronco (daronco)
	// Created: 02/14/2011
	// Date: 07/20/2015
	// Website: http://stickyjs.com/
	// Description: Makes an element on the page stick on the screen as you scroll
	//              It will only set the 'top' and 'position' of your element, you
	//              might need to adjust the width in some cases.

	(function (factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && module.exports) {
	        // Node/CommonJS
	        module.exports = factory(require('jquery'));
	    } else {
	        // Browser globals
	        factory(jQuery);
	    }
	}(function ($) {
	    var slice = Array.prototype.slice; // save ref to original slice()
	    var splice = Array.prototype.splice; // save ref to original slice()

	  var defaults = {
	      topSpacing: 0,
	      bottomSpacing: 0,
	      className: 'is-sticky',
	      wrapperClassName: 'sticky-wrapper',
	      center: false,
	      getWidthFrom: '',
	      widthFromWrapper: true, // works only when .getWidthFrom is empty
	      responsiveWidth: false,
	      zIndex: 'auto'
	    },
	    $window = $(window),
	    $document = $(document),
	    sticked = [],
	    windowHeight = $window.height(),
	    scroller = function() {
	      var scrollTop = $window.scrollTop(),
	        documentHeight = $document.height(),
	        dwh = documentHeight - windowHeight,
	        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

	      for (var i = 0, l = sticked.length; i < l; i++) {
	        var s = sticked[i],
	          elementTop = s.stickyWrapper.offset().top,
	          etse = elementTop - s.topSpacing - extra;

	        //update height in case of dynamic content
	        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

	        if (scrollTop <= etse) {
	          if (s.currentTop !== null) {
	            s.stickyElement
	              .css({
	                'width': '',
	                'position': '',
	                'top': '',
	                'z-index': ''
	              });
	            s.stickyElement.parent().removeClass(s.className);
	            s.stickyElement.trigger('sticky-end', [s]);
	            s.currentTop = null;
	          }
	        }
	        else {
	          var newTop = documentHeight - s.stickyElement.outerHeight()
	            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
	          if (newTop < 0) {
	            newTop = newTop + s.topSpacing;
	          } else {
	            newTop = s.topSpacing;
	          }
	          if (s.currentTop !== newTop) {
	            var newWidth;
	            if (s.getWidthFrom) {
	                newWidth = $(s.getWidthFrom).width() || null;
	            } else if (s.widthFromWrapper) {
	                newWidth = s.stickyWrapper.width();
	            }
	            if (newWidth == null) {
	                newWidth = s.stickyElement.width();
	            }
	            s.stickyElement
	              .css('width', newWidth)
	              .css('position', 'fixed')
	              .css('top', newTop)
	              .css('z-index', s.zIndex);

	            s.stickyElement.parent().addClass(s.className);

	            if (s.currentTop === null) {
	              s.stickyElement.trigger('sticky-start', [s]);
	            } else {
	              // sticky is started but it have to be repositioned
	              s.stickyElement.trigger('sticky-update', [s]);
	            }

	            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
	              // just reached bottom || just started to stick but bottom is already reached
	              s.stickyElement.trigger('sticky-bottom-reached', [s]);
	            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
	              // sticky is started && sticked at topSpacing && overflowing from top just finished
	              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
	            }

	            s.currentTop = newTop;
	          }

	          // Check if sticky has reached end of container and stop sticking
	          var stickyWrapperContainer = s.stickyWrapper.parent();
	          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

	          if( unstick ) {
	            s.stickyElement
	              .css('position', 'absolute')
	              .css('top', '')
	              .css('bottom', 0)
	              .css('z-index', '');
	          } else {
	            s.stickyElement
	              .css('position', 'fixed')
	              .css('top', newTop)
	              .css('bottom', '')
	              .css('z-index', s.zIndex);
	          }
	        }
	      }
	    },
	    resizer = function() {
	      windowHeight = $window.height();

	      for (var i = 0, l = sticked.length; i < l; i++) {
	        var s = sticked[i];
	        var newWidth = null;
	        if (s.getWidthFrom) {
	            if (s.responsiveWidth) {
	                newWidth = $(s.getWidthFrom).width();
	            }
	        } else if(s.widthFromWrapper) {
	            newWidth = s.stickyWrapper.width();
	        }
	        if (newWidth != null) {
	            s.stickyElement.css('width', newWidth);
	        }
	      }
	    },
	    methods = {
	      init: function(options) {
	        var o = $.extend({}, defaults, options);
	        return this.each(function() {
	          var stickyElement = $(this);

	          var stickyId = stickyElement.attr('id');
	          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
	          var wrapper = $('<div></div>')
	            .attr('id', wrapperId)
	            .addClass(o.wrapperClassName);

	          stickyElement.wrapAll(wrapper);

	          var stickyWrapper = stickyElement.parent();

	          if (o.center) {
	            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
	          }

	          if (stickyElement.css("float") === "right") {
	            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
	          }

	          o.stickyElement = stickyElement;
	          o.stickyWrapper = stickyWrapper;
	          o.currentTop    = null;

	          sticked.push(o);

	          methods.setWrapperHeight(this);
	          methods.setupChangeListeners(this);
	        });
	      },

	      setWrapperHeight: function(stickyElement) {
	        var element = $(stickyElement);
	        var stickyWrapper = element.parent();
	        if (stickyWrapper) {
	          stickyWrapper.css('height', element.outerHeight());
	        }
	      },

	      setupChangeListeners: function(stickyElement) {
	        if (window.MutationObserver) {
	          var mutationObserver = new window.MutationObserver(function(mutations) {
	            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
	              methods.setWrapperHeight(stickyElement);
	            }
	          });
	          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
	        } else {
	          stickyElement.addEventListener('DOMNodeInserted', function() {
	            methods.setWrapperHeight(stickyElement);
	          }, false);
	          stickyElement.addEventListener('DOMNodeRemoved', function() {
	            methods.setWrapperHeight(stickyElement);
	          }, false);
	        }
	      },
	      update: scroller,
	      unstick: function(options) {
	        return this.each(function() {
	          var that = this;
	          var unstickyElement = $(that);

	          var removeIdx = -1;
	          var i = sticked.length;
	          while (i-- > 0) {
	            if (sticked[i].stickyElement.get(0) === that) {
	                splice.call(sticked,i,1);
	                removeIdx = i;
	            }
	          }
	          if(removeIdx !== -1) {
	            unstickyElement.unwrap();
	            unstickyElement
	              .css({
	                'width': '',
	                'position': '',
	                'top': '',
	                'float': '',
	                'z-index': ''
	              })
	            ;
	          }
	        });
	      }
	    };

	  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
	  if (window.addEventListener) {
	    window.addEventListener('scroll', scroller, false);
	    window.addEventListener('resize', resizer, false);
	  } else if (window.attachEvent) {
	    window.attachEvent('onscroll', scroller);
	    window.attachEvent('onresize', resizer);
	  }

	  $.fn.sticky = function(method) {
	    if (methods[method]) {
	      return methods[method].apply(this, slice.call(arguments, 1));
	    } else if (typeof method === 'object' || !method ) {
	      return methods.init.apply( this, arguments );
	    } else {
	      $.error('Method ' + method + ' does not exist on jQuery.sticky');
	    }
	  };

	  $.fn.unstick = function(method) {
	    if (methods[method]) {
	      return methods[method].apply(this, slice.call(arguments, 1));
	    } else if (typeof method === 'object' || !method ) {
	      return methods.unstick.apply( this, arguments );
	    } else {
	      $.error('Method ' + method + ' does not exist on jQuery.sticky');
	    }
	  };
	  $(function() {
	    setTimeout(scroller, 0);
	  });
	}));


/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(304);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(324)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?root=./css!./../node_modules/autoprefixer-loader/index.js?browsers=last 3 versions!./../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?root=./css!./../node_modules/autoprefixer-loader/index.js?browsers=last 3 versions!./../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(305)();
	// imports
	exports.i(__webpack_require__(306), "");
	exports.i(__webpack_require__(308), "");

	// module
	exports.push([module.id, "/* Dialog */\n.dialog-center {\n  width: inherit;\n  margin: 0px auto 20px auto; }\n\n.dialog-bigger-center {\n  width: 960px;\n  margin: 70px auto 20px auto; }\n\n.dialog-bigger-center p {\n  padding: 0.5em 0; }\n\n.dialog-column-left {\n  width: 50%;\n  padding-right: 20px;\n  float: left; }\n\n.dialog-column-right {\n  width: 50%;\n  padding-left: 20px;\n  float: left; }\n\n.dialog-center h1 {\n  font-size: 20px;\n  color: #767676;\n  padding-bottom: 0.2em; }\n\n.dialog-column-left form {\n  padding-top: 15px; }\n\n.dialog-column-left input {\n  font-size: 20px;\n  margin-bottom: 11px;\n  float: left;\n  clear: left;\n  width: 90%; }\n\n.dialog-column-left input[type=\"checkbox\"] {\n  width: auto; }\n\n.dialog-column-left label {\n  float: left;\n  margin-top: 3px;\n  margin-right: 30px;\n  padding-left: 3px; }\n\n.dialog-column-left a {\n  float: left;\n  margin-right: 75px;\n  margin-top: 2px; }\n\n.dialog-column-left .button {\n  float: left;\n  margin-top: 1px; }\n\n.twibutton {\n  -moz-border-radius: 14px;\n  -khtml-border-radius: 14px;\n  -webkit-border-radius: 14px;\n  -wekbit-box-shadow: 0 1px 0 #F8F8F8;\n  box-shadow: 0 1px 0 #F8F8F8;\n  background: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../images/btnbg.gif\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") repeat-x scroll 0 0 #ddb554;\n  border-color: #BBBBBB #BBBBBB #999999;\n  border-style: solid;\n  border-width: 1px;\n  color: #333333 !important;\n  cursor: pointer;\n  display: inline-block;\n  font: 12px/15px Helvetica Neue, Arial, \"Lucida Grande\", Sans-serif;\n  margin: 0;\n  overflow: hidden;\n  padding: 5px 29px;\n  text-shadow: 0 1px #F0F0F0; }\n\n.twibutton strong {\n  font-weight: 700; }\n\n.twibutton:active {\n  background-image: none;\n  outline: medium none;\n  text-shadow: none; }\n\n.twibutton:hover, .button:focus {\n  background-position: 0 -6px;\n  border-color: #999999 #999999 #666666;\n  color: #000000;\n  text-decoration: none; }\n\n.__nv-text-blue {\n  color: #89c1ec; }\n\n.__nv-text-white {\n  color: #fff; }\n\n.__nv-text-size-5rem {\n  font-size: 0.5rem; }\n\n.__nv-text-size-6rem {\n  font-size: 0.6rem; }\n\n.__nv-text-size-7rem {\n  font-size: 0.7rem; }\n\n.__nv-text-size-8rem {\n  font-size: 0.8rem; }\n\n.__nv-text-size-9rem {\n  font-size: 0.9rem; }\n\n.__nv-text-size-10rem {\n  font-size: 1rem; }\n\n.__nv-text-size-11rem {\n  font-size: 1.1rem; }\n\n.__nv-text-size-12rem {\n  font-size: 1.2rem; }\n\n.__nv-text-size-13rem {\n  font-size: 1.3rem; }\n\n.__nv-text-size-14rem {\n  font-size: 1.4rem; }\n\n.__nv-text-size-15rem {\n  font-size: 1.5rem; }\n\n.__nv-text-size-16rem {\n  font-size: 1.6rem; }\n\n.__nv-text-size-17rem {\n  font-size: 1.7rem; }\n\n.__nv-text-size-18rem {\n  font-size: 1.8rem; }\n\n.__nv-text-size-19rem {\n  font-size: 1.9rem; }\n\n.__nv-text-size-20rem {\n  font-size: 2rem; }\n\n/**\n * Foundation for Sites by ZURB\n * Version 6.2.3\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.mCSB_scrollTools {\n  /* contains scrollbar markup (draggable element, dragger rail, buttons etc.) */\n  position: absolute;\n  width: 30px;\n  height: 85%;\n  left: auto;\n  top: 10px;\n  right: 0;\n  bottom: 10px; }\n  @media screen and (max-width: 63.9375em) {\n    .mCSB_scrollTools {\n      bottom: 25px; } }\n\n.mCSB_scrollTools .mCSB_draggerContainer {\n  /* contains the draggable element and dragger rail markup */\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: auto; }\n\n.mCS-rounded.mCSB_scrollTools .mCSB_draggerRail {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.15); }\n\n.mCS-rounded.mCSB_scrollTools .mCSB_dragger,\n.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger,\n.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger,\n.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger {\n  height: 22px; }\n\n.mCS-rounded.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,\n.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,\n.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,\n.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {\n  width: 22px;\n  margin: 0 auto;\n  box-shadow: 1px 1px 6px 2px rgba(128, 128, 128, 0.5); }\n\n.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger,\n.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger,\n.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger,\n.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger {\n  width: 14px; }\n\n.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,\n.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,\n.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,\n.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {\n  height: 22px;\n  margin: 1px 0; }\n\n.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,\n.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar,\n.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,\n.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar {\n  width: 22px;\n  /* auto-expanded scrollbar */\n  height: 22px;\n  margin: -1px 0; }\n\n.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,\n.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,\n.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,\n.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {\n  width: 4px;\n  /* auto-expanded scrollbar */ }\n\n.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,\n.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar,\n.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,\n.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar {\n  height: 16px;\n  /* auto-expanded scrollbar */\n  width: 16px;\n  margin: 0 -1px; }\n\n.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,\n.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,\n.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,\n.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {\n  height: 4px;\n  /* auto-expanded scrollbar */\n  margin: 6px 0; }\n\n.mCS-rounded.mCSB_scrollTools .mCSB_buttonUp {\n  background-position: 0 -72px; }\n\n.mCS-rounded.mCSB_scrollTools .mCSB_buttonDown {\n  background-position: 0 -92px; }\n\n.mCS-rounded.mCSB_scrollTools .mCSB_buttonLeft {\n  background-position: 0 -112px; }\n\n.mCS-rounded.mCSB_scrollTools .mCSB_buttonRight {\n  background-position: 0 -128px; }\n\n.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail, .mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAABNHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTYtMDYtMjhUMTI6MzY6MjgrMDM6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE2LTA2LTI4VDEyOjM2OjI4KzAzOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNi0wNi0yOFQxMjozNjoyOCswMzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6Y2UzOTUwMGItMTQzOS0wYzQzLWE3ODEtMjI0NTU0MGY3NWU2PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YWUyMWEzYTUtM2QxMy0xMWU2LTlkYmMtOTY5MzcyMTM1ZTE2PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6YjIyZGFmM2EtNzIyYi0wOTRjLTk4ODQtOTgwOWRkMjk5ZjYwPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmIyMmRhZjNhLTcyMmItMDk0Yy05ODg0LTk4MDlkZDI5OWY2MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNi0wNi0yOFQxMjozNjoyOCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpjZTM5NTAwYi0xNDM5LTBjNDMtYTc4MS0yMjQ1NTQwZjc1ZTY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTYtMDYtMjhUMTI6MzY6MjgrMDM6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT4wMDNDNzQ3MjA0MjIyRDg1QkU0ODE4REJEMEMxQzQ3NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjAyMkMyODE1OEZDREQ1RjkxNUE3RDIwQjczQzE5NzRFPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+MEUzMUNCMjYxN0I3OUMzQkY5MUUwMDNEMEI2QjM5QkY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT4zMjNGMzhBQTc3OTNFQjJGMUEzM0M4Nzk4MzhEMkM4NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjNFN0IzNzcxQzgzNTJEMTEyMDc2OUY5OEMzNTIzMTFFPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+M0Y2Q0FDNEIyQTdBMzJEQUQ5OENBNDc2REZBMzJCRkI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT40NzgyNzQ0ODk3NzQ5QkI0MEQxRTM1MkM3RTk4QzMyOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjRBRjYwMjI1QjIxRkMwRDVENzFDQjFFOUE4NTBFMkYxPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+NEZGNTQ5RjVCQjk2MEVFOEYyMjIwNzUzNEIxNUM5OUU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT41QTFBRDUzMUM1Njg4NEFCRDRDNzdCQTVEQzJFRTY3OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjY1NzY2NDU4QkQyQTg4NkU0OTIwNkIwM0ZDMEU2RkE1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+N0E5RjcyNDUyRTgwOTM3RDJFNjk5RTgyQjA3NjUxNDc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT43QUFGOENEMkZCOUMxMUJGOUEzRjI5REVBOTAzQ0Q0QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjg1MjQxMzc3NUIwQjcwMzNGM0E1NTZEMUFCRDFGMjREPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+OEU3NTVGNzg3N0RDRDA3NjEwMkE5OUFDREQxNjBFNTQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT45QjAyNkMwRjQ1MkUyMTgxNUNFMDZEMDc3MURCRUYzRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjlGOTZGQTdDMjdGMjg0QkZDRDg3RjczNzQwNUMyQzI0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+QTZBM0FCRUE0NTk5RDgwNzY0NTJFNkZGRUM4NUI2MUE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BOEZBN0JCQUU4MDdFNEZGMzJFNzNDNzg0QThFODAyMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkE5NUVBQzE2QUU3QzQ1RkRGMkIzNTc2N0E0RDQ2RjhBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+QTlFNEZCMzRDNTcxMkU5MDcwQTdCOURCOUExRjI0MTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BRkE0MDc4QjkxQjcwOEY1RDQ2RDc4Qjk3NDY0ODE1MDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkIyMEY4QjQyMTlDMDg5MTE1NjM0RjkyQkJBMjFFRDgwPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+QjI1MUU2QkYwNTlDRDIyNzU1Mzg2RkEwQUI3OTAzMUQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5CNzg1MzFENUZFMTVDMTgyRUUyRjMzNzI0MzU1MjY4NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkMzQjcyM0ZCQTlDNzdBMjUwQjQzQjkzRTI4OTFBOEU0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+RDE2NzM1RDFDQ0QyRTlEQjc5REVGQ0ZEMkFCNjRCM0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5ERTdCNEFGRERBQjBGNTk3RkIyQUMwMTRCQ0JFMUQzMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkU1ODREMzY5RUZEMzI1MjJDQzM4RDlEQkE0RDE0MTlEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+RThGNzA0M0I0M0REODMzOUQ3OUJFQUQyNzc1OEEyRDg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5FQ0I5NEQyM0QyRTA1QTE1MjRBNkEzRjczNkYwNkI3NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkYwRUI3N0E4ODU5OEU4MTBFMEUzRTc1MTYzMzc1NEJBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+RjIzRDE5RTlGREU5MDUxMDc5RkY1QzExRTNEQzE2QjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5GNDczMzVERjNGRUVDNjlENTRDMjEzOTdFNDY3RDhGQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkZCQUEyRUY5M0FFQTI5REVBMEZCRERBRjkyODcxQTRCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+RkMxNjFDODdDRkY0NEZDRDdGOTIzQUIzNjJGRTBBNzY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjYwNTlDODBBQkYxRUUyMTFCNEFDRUQ3NTBFMUVERjZFPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDo3NEI2MTdDRUVGMjNERTExOTQ5NDg0NzJENUVBNDUzQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDExMzY0MTktY2JjZS1mOTQyLThhN2ItNmIyZTFlN2NlMDY3PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDowNDFhZTJjOC1jODQ5LTQ1NDktYmRjZC04YWVhZWZjYjI2YzI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA5RkE3NkY4MEI2M0UwMTE5MDVFQzcwNjdEN0I3Mjk0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDowQzZDNTc0QTI4REQxMUUzQUIwQUI2MEY1MUQ1MDQzNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MGIyYTAyNTgtMjA5ZC1lYTQwLTk4YzMtNTRmYTY1ZTQwOGFmPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoyMGNhNzk2ZC0yZjM5LTQ5NGItOTFiOC0xYWNmMzA5ZWMzYTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjM0MEU4REJBMEI3MTExRTQ4QkYxQjMyOEQyRERCNDAzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo0ODExMDYwMi1kZjQyLTBlNDctYjIzNC00NmMyNWE0MTMxNWQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQ4NjUyMzg0OTMyMUU2MTFCRjE3RTcyQ0Q3QzMxQjNBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo1MEMyQTQ5QzQ0MjZFNjExQjY4MkI2NDM3NEE3MTQxQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NUFGMzc1MzY4MjIxRTYxMUJGMTdFNzJDRDdDMzFCM0E8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjVDNEQ0NkEyREYyRUU2MTFBNTdCOUJGMDZEMUQ3RkMyPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo2NTc0Q0Y3RkVENjdFMjExQkQ1MERCRjcyRUYzRDkzRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NjY0N0Q2QjQzRDI2RTYxMUI2ODJCNjQzNzRBNzE0MUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjcyNTJGRjM0Q0EzRDExRTQ4ODgyQ0IwREI5MkVDQ0M0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3MzhGMzdGMTA3MURFNjExODc0MUVEMUYzOEE4QzdEMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N2M2NjZhMWEtY2M2Yy01ZjQwLWFlMTEtMzU5MTQxN2U5ZTViPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4RkMyODJDNjc3MkRFNjExQTEwM0MyMjE0REJDMDhFMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OTA4ZmRiMjAtNmE2Ny1iNDQ0LTk2MzctMzQ3MTczODllZDgzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5MTk5OGQ2Yi1lMTFkLTk1NDMtOGVkZS0wMTk0YjNhNDZiYWU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjk4MTY1OWUzLWU4NTQtYWE0Mi1hZDk5LTRmOGNiM2JkNWRjNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OWZjNjhlYjQtYTQ0MC03ZDQ5LTlkZWUtMzQzMzMzZDE0NmU1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpCMzc2NzgzNEIzMkJFNjExQTNDNDlBMzU2RkQ2ODQ4QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Q0JFRUZEQkVFNjJBMTFFNEI2RDRBOTVEQjhEM0Q1NzE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkNFOEExNEQzRDMyMEU2MTE4OUU1QkJGNzQzQUZCMkE0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpERjc2NjFDODEzOTIxMUU1OEREQ0JFRUM3QUIyRUUyNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTM4QTU2RTIzOTI2RTYxMUI2ODJCNjQzNzRBNzE0MUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOmI2MTAyNDYwLTNmYzYtMjk0Yy04YjBkLTJhZjZkYTM2ZTIzZjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ZDJiN2E2MDAtZjk2NC0wMDQ4LWFiZWYtMzYwOWYyODRjZmFlPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpmNzVjZDk1Zi00YmRlLTI5NDgtOWUxMi1kOTcwYmExM2NiNGI8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6QmFnPgogICAgICAgICA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+ODwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj44PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4q7snPAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAmSURBVHjaYvj//z8DDF+98+z/pp0H/yOLMTEQAMNDAQAAAP//AwDv2xi+kmiAYAAAAABJRU5ErkJggg==\");\n  background-repeat: repeat-y;\n  opacity: 0.3;\n  filter: \"alpha(opacity=30)\";\n  -ms-filter: \"alpha(opacity=30)\"; }\n\n.nv-hidden-wrapper {\n  overflow: hidden; }\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n   * 1. Set default font family to sans-serif.\n   * 2. Prevent iOS and IE text size adjust after device orientation change,\n   *    without disabling user zoom.\n   */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n   * Remove default margin.\n   */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n     ========================================================================== */\n/**\n   * Correct `block` display not defined for any HTML5 element in IE 8/9.\n   * Correct `block` display not defined for `details` or `summary` in IE 10/11\n   * and Firefox.\n   * Correct `block` display not defined for `main` in IE 11.\n   */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n   * 1. Correct `inline-block` display not defined in IE 8/9.\n   * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n   */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n   * Prevent modern browsers from displaying `audio` without controls.\n   * Remove excess height in iOS 5 devices.\n   */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n   * Address `[hidden]` styling not present in IE 8/9/10.\n   * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n   */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n     ========================================================================== */\n/**\n   * Remove the gray background color from active links in IE 10.\n   */\na {\n  background-color: transparent; }\n\n/**\n   * Improve readability of focused elements when they are also in an\n   * active/hover state.\n   */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n   */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n   */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n   * Address styling not present in Safari and Chrome.\n   */\ndfn {\n  font-style: italic; }\n\n/**\n   * Address variable `h1` font-size and margin within `section` and `article`\n   * contexts in Firefox 4+, Safari, and Chrome.\n   */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n   * Address styling not present in IE 8/9.\n   */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n   * Address inconsistent and variable font size in all browsers.\n   */\nsmall {\n  font-size: 80%; }\n\n/**\n   * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n   */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove border when inside `a` element in IE 8/9/10.\n   */\nimg {\n  border: 0; }\n\n/**\n   * Correct overflow not hidden in IE 9/10/11.\n   */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * Address margin not present in IE 8/9 and Safari.\n   */\nfigure {\n  margin: 1em 40px; }\n\n/**\n   * Address differences between Firefox and other browsers.\n   */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n   * Contain overflow in all browsers.\n   */\npre {\n  overflow: auto; }\n\n/**\n   * Address odd `em`-unit font size rendering in all browsers.\n   */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n     ========================================================================== */\n/**\n   * Known limitation: by default, Chrome and Safari on OS X allow very limited\n   * styling of `select`, unless a `border` property is set.\n   */\n/**\n   * 1. Correct color not being inherited.\n   *    Known issue: affects color of disabled elements.\n   * 2. Correct font properties not being inherited.\n   * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n   * Address `overflow` set to `hidden` in IE 8/9/10/11.\n   */\nbutton {\n  overflow: visible; }\n\n/**\n   * Address inconsistent `text-transform` inheritance for `button` and `select`.\n   * All other form control elements do not inherit `text-transform` values.\n   * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n   * Correct `select` style inheritance in Firefox.\n   */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n   *    and `video` controls.\n   * 2. Correct inability to style clickable `input` types in iOS.\n   * 3. Improve usability and consistency of cursor style between image-type\n   *    `input` and others.\n   */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n   * Re-set default cursor for disabled elements.\n   */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: not-allowed; }\n\n/**\n   * Remove inner padding and border in Firefox 4+.\n   */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n   * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n   * the UA stylesheet.\n   */\ninput {\n  line-height: normal; }\n\n/**\n   * It's recommended that you don't attempt to style these elements.\n   * Firefox's implementation doesn't respect box-sizing, padding, or width.\n   *\n   * 1. Address box sizing set to `content-box` in IE 8/9/10.\n   * 2. Remove excess padding in IE 8/9/10.\n   */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n   * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n   * `font-size` values of the `input`, it causes the cursor style of the\n   * decrement button to change from `default` to `text`.\n   */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n   * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n   * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n   */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\n   * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n   * Safari (but not Chrome) clips the cancel button when the search input has\n   * padding (and `textfield` appearance).\n   */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n   * Define consistent border, margin, and padding.\n   * [NOTE] We don't enable this ruleset in Foundation, because we want the <fieldset> element to have plain styling.\n   */\n/* fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n  } */\n/**\n   * 1. Correct `color` not being inherited in IE 8/9/10/11.\n   * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n   */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n   * Remove default vertical scrollbar in IE 8/9/10/11.\n   */\ntextarea {\n  overflow: auto; }\n\n/**\n   * Don't inherit the `font-weight` (applied by a rule above).\n   * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n   */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n     ========================================================================== */\n/**\n   * Remove most spacing between table cells.\n   */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n.foundation-mq {\n  font-family: \"small=0em&mini=39.9375em&medium=40em&large=64em&xlarge=75em&xxlarge=90em\"; }\n\nhtml {\n  font-size: 100%;\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: Tahoma, \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #0a0a0a;\n  background: #fefefe;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nimg {\n  max-width: 100%;\n  height: auto;\n  -ms-interpolation-mode: bicubic;\n  display: inline-block;\n  vertical-align: middle; }\n\ntextarea {\n  height: auto;\n  min-height: 50px;\n  border-radius: 0; }\n\nselect {\n  width: 100%;\n  border-radius: 0; }\n\n#map_canvas img,\n#map_canvas embed,\n#map_canvas object,\n.map_canvas img,\n.map_canvas embed,\n.map_canvas object,\n.mqa-display img,\n.mqa-display embed,\n.mqa-display object {\n  max-width: none !important; }\n\nbutton {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  line-height: 1; }\n  [data-whatinput='mouse'] button {\n    outline: 0; }\n\n.is-visible {\n  display: block !important; }\n\n.is-hidden {\n  display: none !important; }\n\n.row {\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto; }\n  .row::before, .row::after {\n    content: ' ';\n    display: table; }\n  .row::after {\n    clear: both; }\n  .row.collapse > .column, .row.collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row .row {\n    max-width: none;\n    margin-left: -0.625rem;\n    margin-right: -0.625rem; }\n    @media screen and (min-width: 40em) {\n      .row .row {\n        margin-left: -0.9375rem;\n        margin-right: -0.9375rem; } }\n    .row .row.collapse {\n      margin-left: 0;\n      margin-right: 0; }\n  .row.expanded {\n    max-width: none; }\n    .row.expanded .row {\n      margin-left: auto;\n      margin-right: auto; }\n\n.column, .columns {\n  width: 100%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  @media screen and (min-width: 40em) {\n    .column, .columns {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .column:last-child:not(:first-child), .columns:last-child:not(:first-child) {\n    float: right; }\n  .column.end:last-child:last-child, .end.columns:last-child:last-child {\n    float: left; }\n\n.column.row.row, .row.row.columns {\n  float: none; }\n  .row .column.row.row, .row .row.row.columns {\n    padding-left: 0;\n    padding-right: 0;\n    margin-left: 0;\n    margin-right: 0; }\n\n.small-1 {\n  width: 8.33333%; }\n\n.small-push-1 {\n  position: relative;\n  left: 8.33333%; }\n\n.small-pull-1 {\n  position: relative;\n  left: -8.33333%; }\n\n.small-offset-0 {\n  margin-left: 0%; }\n\n.small-2 {\n  width: 16.66667%; }\n\n.small-push-2 {\n  position: relative;\n  left: 16.66667%; }\n\n.small-pull-2 {\n  position: relative;\n  left: -16.66667%; }\n\n.small-offset-1 {\n  margin-left: 8.33333%; }\n\n.small-3 {\n  width: 25%; }\n\n.small-push-3 {\n  position: relative;\n  left: 25%; }\n\n.small-pull-3 {\n  position: relative;\n  left: -25%; }\n\n.small-offset-2 {\n  margin-left: 16.66667%; }\n\n.small-4 {\n  width: 33.33333%; }\n\n.small-push-4 {\n  position: relative;\n  left: 33.33333%; }\n\n.small-pull-4 {\n  position: relative;\n  left: -33.33333%; }\n\n.small-offset-3 {\n  margin-left: 25%; }\n\n.small-5 {\n  width: 41.66667%; }\n\n.small-push-5 {\n  position: relative;\n  left: 41.66667%; }\n\n.small-pull-5 {\n  position: relative;\n  left: -41.66667%; }\n\n.small-offset-4 {\n  margin-left: 33.33333%; }\n\n.small-6 {\n  width: 50%; }\n\n.small-push-6 {\n  position: relative;\n  left: 50%; }\n\n.small-pull-6 {\n  position: relative;\n  left: -50%; }\n\n.small-offset-5 {\n  margin-left: 41.66667%; }\n\n.small-7 {\n  width: 58.33333%; }\n\n.small-push-7 {\n  position: relative;\n  left: 58.33333%; }\n\n.small-pull-7 {\n  position: relative;\n  left: -58.33333%; }\n\n.small-offset-6 {\n  margin-left: 50%; }\n\n.small-8 {\n  width: 66.66667%; }\n\n.small-push-8 {\n  position: relative;\n  left: 66.66667%; }\n\n.small-pull-8 {\n  position: relative;\n  left: -66.66667%; }\n\n.small-offset-7 {\n  margin-left: 58.33333%; }\n\n.small-9 {\n  width: 75%; }\n\n.small-push-9 {\n  position: relative;\n  left: 75%; }\n\n.small-pull-9 {\n  position: relative;\n  left: -75%; }\n\n.small-offset-8 {\n  margin-left: 66.66667%; }\n\n.small-10 {\n  width: 83.33333%; }\n\n.small-push-10 {\n  position: relative;\n  left: 83.33333%; }\n\n.small-pull-10 {\n  position: relative;\n  left: -83.33333%; }\n\n.small-offset-9 {\n  margin-left: 75%; }\n\n.small-11 {\n  width: 91.66667%; }\n\n.small-push-11 {\n  position: relative;\n  left: 91.66667%; }\n\n.small-pull-11 {\n  position: relative;\n  left: -91.66667%; }\n\n.small-offset-10 {\n  margin-left: 83.33333%; }\n\n.small-12 {\n  width: 100%; }\n\n.small-offset-11 {\n  margin-left: 91.66667%; }\n\n.small-up-1 > .column, .small-up-1 > .columns {\n  width: 100%;\n  float: left; }\n  .small-up-1 > .column:nth-of-type(1n), .small-up-1 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-1 > .column:nth-of-type(1n+1), .small-up-1 > .columns:nth-of-type(1n+1) {\n    clear: both; }\n  .small-up-1 > .column:last-child, .small-up-1 > .columns:last-child {\n    float: left; }\n\n.small-up-2 > .column, .small-up-2 > .columns {\n  width: 50%;\n  float: left; }\n  .small-up-2 > .column:nth-of-type(1n), .small-up-2 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-2 > .column:nth-of-type(2n+1), .small-up-2 > .columns:nth-of-type(2n+1) {\n    clear: both; }\n  .small-up-2 > .column:last-child, .small-up-2 > .columns:last-child {\n    float: left; }\n\n.small-up-3 > .column, .small-up-3 > .columns {\n  width: 33.33333%;\n  float: left; }\n  .small-up-3 > .column:nth-of-type(1n), .small-up-3 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-3 > .column:nth-of-type(3n+1), .small-up-3 > .columns:nth-of-type(3n+1) {\n    clear: both; }\n  .small-up-3 > .column:last-child, .small-up-3 > .columns:last-child {\n    float: left; }\n\n.small-up-4 > .column, .small-up-4 > .columns {\n  width: 25%;\n  float: left; }\n  .small-up-4 > .column:nth-of-type(1n), .small-up-4 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-4 > .column:nth-of-type(4n+1), .small-up-4 > .columns:nth-of-type(4n+1) {\n    clear: both; }\n  .small-up-4 > .column:last-child, .small-up-4 > .columns:last-child {\n    float: left; }\n\n.small-up-5 > .column, .small-up-5 > .columns {\n  width: 20%;\n  float: left; }\n  .small-up-5 > .column:nth-of-type(1n), .small-up-5 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-5 > .column:nth-of-type(5n+1), .small-up-5 > .columns:nth-of-type(5n+1) {\n    clear: both; }\n  .small-up-5 > .column:last-child, .small-up-5 > .columns:last-child {\n    float: left; }\n\n.small-up-6 > .column, .small-up-6 > .columns {\n  width: 16.66667%;\n  float: left; }\n  .small-up-6 > .column:nth-of-type(1n), .small-up-6 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-6 > .column:nth-of-type(6n+1), .small-up-6 > .columns:nth-of-type(6n+1) {\n    clear: both; }\n  .small-up-6 > .column:last-child, .small-up-6 > .columns:last-child {\n    float: left; }\n\n.small-up-7 > .column, .small-up-7 > .columns {\n  width: 14.28571%;\n  float: left; }\n  .small-up-7 > .column:nth-of-type(1n), .small-up-7 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-7 > .column:nth-of-type(7n+1), .small-up-7 > .columns:nth-of-type(7n+1) {\n    clear: both; }\n  .small-up-7 > .column:last-child, .small-up-7 > .columns:last-child {\n    float: left; }\n\n.small-up-8 > .column, .small-up-8 > .columns {\n  width: 12.5%;\n  float: left; }\n  .small-up-8 > .column:nth-of-type(1n), .small-up-8 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-8 > .column:nth-of-type(8n+1), .small-up-8 > .columns:nth-of-type(8n+1) {\n    clear: both; }\n  .small-up-8 > .column:last-child, .small-up-8 > .columns:last-child {\n    float: left; }\n\n.small-collapse > .column, .small-collapse > .columns {\n  padding-left: 0;\n  padding-right: 0; }\n\n.small-collapse .row,\n.expanded.row .small-collapse.row {\n  margin-left: 0;\n  margin-right: 0; }\n\n.small-uncollapse > .column, .small-uncollapse > .columns {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n\n.small-centered {\n  float: none;\n  margin-left: auto;\n  margin-right: auto; }\n\n.small-uncentered,\n.small-push-0,\n.small-pull-0 {\n  position: static;\n  margin-left: 0;\n  margin-right: 0;\n  float: left; }\n\n@media screen and (min-width: 40em) {\n  .medium-1 {\n    width: 8.33333%; }\n  .medium-push-1 {\n    position: relative;\n    left: 8.33333%; }\n  .medium-pull-1 {\n    position: relative;\n    left: -8.33333%; }\n  .medium-offset-0 {\n    margin-left: 0%; }\n  .medium-2 {\n    width: 16.66667%; }\n  .medium-push-2 {\n    position: relative;\n    left: 16.66667%; }\n  .medium-pull-2 {\n    position: relative;\n    left: -16.66667%; }\n  .medium-offset-1 {\n    margin-left: 8.33333%; }\n  .medium-3 {\n    width: 25%; }\n  .medium-push-3 {\n    position: relative;\n    left: 25%; }\n  .medium-pull-3 {\n    position: relative;\n    left: -25%; }\n  .medium-offset-2 {\n    margin-left: 16.66667%; }\n  .medium-4 {\n    width: 33.33333%; }\n  .medium-push-4 {\n    position: relative;\n    left: 33.33333%; }\n  .medium-pull-4 {\n    position: relative;\n    left: -33.33333%; }\n  .medium-offset-3 {\n    margin-left: 25%; }\n  .medium-5 {\n    width: 41.66667%; }\n  .medium-push-5 {\n    position: relative;\n    left: 41.66667%; }\n  .medium-pull-5 {\n    position: relative;\n    left: -41.66667%; }\n  .medium-offset-4 {\n    margin-left: 33.33333%; }\n  .medium-6 {\n    width: 50%; }\n  .medium-push-6 {\n    position: relative;\n    left: 50%; }\n  .medium-pull-6 {\n    position: relative;\n    left: -50%; }\n  .medium-offset-5 {\n    margin-left: 41.66667%; }\n  .medium-7 {\n    width: 58.33333%; }\n  .medium-push-7 {\n    position: relative;\n    left: 58.33333%; }\n  .medium-pull-7 {\n    position: relative;\n    left: -58.33333%; }\n  .medium-offset-6 {\n    margin-left: 50%; }\n  .medium-8 {\n    width: 66.66667%; }\n  .medium-push-8 {\n    position: relative;\n    left: 66.66667%; }\n  .medium-pull-8 {\n    position: relative;\n    left: -66.66667%; }\n  .medium-offset-7 {\n    margin-left: 58.33333%; }\n  .medium-9 {\n    width: 75%; }\n  .medium-push-9 {\n    position: relative;\n    left: 75%; }\n  .medium-pull-9 {\n    position: relative;\n    left: -75%; }\n  .medium-offset-8 {\n    margin-left: 66.66667%; }\n  .medium-10 {\n    width: 83.33333%; }\n  .medium-push-10 {\n    position: relative;\n    left: 83.33333%; }\n  .medium-pull-10 {\n    position: relative;\n    left: -83.33333%; }\n  .medium-offset-9 {\n    margin-left: 75%; }\n  .medium-11 {\n    width: 91.66667%; }\n  .medium-push-11 {\n    position: relative;\n    left: 91.66667%; }\n  .medium-pull-11 {\n    position: relative;\n    left: -91.66667%; }\n  .medium-offset-10 {\n    margin-left: 83.33333%; }\n  .medium-12 {\n    width: 100%; }\n  .medium-offset-11 {\n    margin-left: 91.66667%; }\n  .medium-up-1 > .column, .medium-up-1 > .columns {\n    width: 100%;\n    float: left; }\n    .medium-up-1 > .column:nth-of-type(1n), .medium-up-1 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-1 > .column:nth-of-type(1n+1), .medium-up-1 > .columns:nth-of-type(1n+1) {\n      clear: both; }\n    .medium-up-1 > .column:last-child, .medium-up-1 > .columns:last-child {\n      float: left; }\n  .medium-up-2 > .column, .medium-up-2 > .columns {\n    width: 50%;\n    float: left; }\n    .medium-up-2 > .column:nth-of-type(1n), .medium-up-2 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-2 > .column:nth-of-type(2n+1), .medium-up-2 > .columns:nth-of-type(2n+1) {\n      clear: both; }\n    .medium-up-2 > .column:last-child, .medium-up-2 > .columns:last-child {\n      float: left; }\n  .medium-up-3 > .column, .medium-up-3 > .columns {\n    width: 33.33333%;\n    float: left; }\n    .medium-up-3 > .column:nth-of-type(1n), .medium-up-3 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-3 > .column:nth-of-type(3n+1), .medium-up-3 > .columns:nth-of-type(3n+1) {\n      clear: both; }\n    .medium-up-3 > .column:last-child, .medium-up-3 > .columns:last-child {\n      float: left; }\n  .medium-up-4 > .column, .medium-up-4 > .columns {\n    width: 25%;\n    float: left; }\n    .medium-up-4 > .column:nth-of-type(1n), .medium-up-4 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-4 > .column:nth-of-type(4n+1), .medium-up-4 > .columns:nth-of-type(4n+1) {\n      clear: both; }\n    .medium-up-4 > .column:last-child, .medium-up-4 > .columns:last-child {\n      float: left; }\n  .medium-up-5 > .column, .medium-up-5 > .columns {\n    width: 20%;\n    float: left; }\n    .medium-up-5 > .column:nth-of-type(1n), .medium-up-5 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-5 > .column:nth-of-type(5n+1), .medium-up-5 > .columns:nth-of-type(5n+1) {\n      clear: both; }\n    .medium-up-5 > .column:last-child, .medium-up-5 > .columns:last-child {\n      float: left; }\n  .medium-up-6 > .column, .medium-up-6 > .columns {\n    width: 16.66667%;\n    float: left; }\n    .medium-up-6 > .column:nth-of-type(1n), .medium-up-6 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-6 > .column:nth-of-type(6n+1), .medium-up-6 > .columns:nth-of-type(6n+1) {\n      clear: both; }\n    .medium-up-6 > .column:last-child, .medium-up-6 > .columns:last-child {\n      float: left; }\n  .medium-up-7 > .column, .medium-up-7 > .columns {\n    width: 14.28571%;\n    float: left; }\n    .medium-up-7 > .column:nth-of-type(1n), .medium-up-7 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-7 > .column:nth-of-type(7n+1), .medium-up-7 > .columns:nth-of-type(7n+1) {\n      clear: both; }\n    .medium-up-7 > .column:last-child, .medium-up-7 > .columns:last-child {\n      float: left; }\n  .medium-up-8 > .column, .medium-up-8 > .columns {\n    width: 12.5%;\n    float: left; }\n    .medium-up-8 > .column:nth-of-type(1n), .medium-up-8 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-8 > .column:nth-of-type(8n+1), .medium-up-8 > .columns:nth-of-type(8n+1) {\n      clear: both; }\n    .medium-up-8 > .column:last-child, .medium-up-8 > .columns:last-child {\n      float: left; }\n  .medium-collapse > .column, .medium-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .medium-collapse .row,\n  .expanded.row .medium-collapse.row {\n    margin-left: 0;\n    margin-right: 0; }\n  .medium-uncollapse > .column, .medium-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem; }\n  .medium-centered {\n    float: none;\n    margin-left: auto;\n    margin-right: auto; }\n  .medium-uncentered,\n  .medium-push-0,\n  .medium-pull-0 {\n    position: static;\n    margin-left: 0;\n    margin-right: 0;\n    float: left; } }\n\n@media screen and (min-width: 64em) {\n  .large-1 {\n    width: 8.33333%; }\n  .large-push-1 {\n    position: relative;\n    left: 8.33333%; }\n  .large-pull-1 {\n    position: relative;\n    left: -8.33333%; }\n  .large-offset-0 {\n    margin-left: 0%; }\n  .large-2 {\n    width: 16.66667%; }\n  .large-push-2 {\n    position: relative;\n    left: 16.66667%; }\n  .large-pull-2 {\n    position: relative;\n    left: -16.66667%; }\n  .large-offset-1 {\n    margin-left: 8.33333%; }\n  .large-3 {\n    width: 25%; }\n  .large-push-3 {\n    position: relative;\n    left: 25%; }\n  .large-pull-3 {\n    position: relative;\n    left: -25%; }\n  .large-offset-2 {\n    margin-left: 16.66667%; }\n  .large-4 {\n    width: 33.33333%; }\n  .large-push-4 {\n    position: relative;\n    left: 33.33333%; }\n  .large-pull-4 {\n    position: relative;\n    left: -33.33333%; }\n  .large-offset-3 {\n    margin-left: 25%; }\n  .large-5 {\n    width: 41.66667%; }\n  .large-push-5 {\n    position: relative;\n    left: 41.66667%; }\n  .large-pull-5 {\n    position: relative;\n    left: -41.66667%; }\n  .large-offset-4 {\n    margin-left: 33.33333%; }\n  .large-6 {\n    width: 50%; }\n  .large-push-6 {\n    position: relative;\n    left: 50%; }\n  .large-pull-6 {\n    position: relative;\n    left: -50%; }\n  .large-offset-5 {\n    margin-left: 41.66667%; }\n  .large-7 {\n    width: 58.33333%; }\n  .large-push-7 {\n    position: relative;\n    left: 58.33333%; }\n  .large-pull-7 {\n    position: relative;\n    left: -58.33333%; }\n  .large-offset-6 {\n    margin-left: 50%; }\n  .large-8 {\n    width: 66.66667%; }\n  .large-push-8 {\n    position: relative;\n    left: 66.66667%; }\n  .large-pull-8 {\n    position: relative;\n    left: -66.66667%; }\n  .large-offset-7 {\n    margin-left: 58.33333%; }\n  .large-9 {\n    width: 75%; }\n  .large-push-9 {\n    position: relative;\n    left: 75%; }\n  .large-pull-9 {\n    position: relative;\n    left: -75%; }\n  .large-offset-8 {\n    margin-left: 66.66667%; }\n  .large-10 {\n    width: 83.33333%; }\n  .large-push-10 {\n    position: relative;\n    left: 83.33333%; }\n  .large-pull-10 {\n    position: relative;\n    left: -83.33333%; }\n  .large-offset-9 {\n    margin-left: 75%; }\n  .large-11 {\n    width: 91.66667%; }\n  .large-push-11 {\n    position: relative;\n    left: 91.66667%; }\n  .large-pull-11 {\n    position: relative;\n    left: -91.66667%; }\n  .large-offset-10 {\n    margin-left: 83.33333%; }\n  .large-12 {\n    width: 100%; }\n  .large-offset-11 {\n    margin-left: 91.66667%; }\n  .large-up-1 > .column, .large-up-1 > .columns {\n    width: 100%;\n    float: left; }\n    .large-up-1 > .column:nth-of-type(1n), .large-up-1 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-1 > .column:nth-of-type(1n+1), .large-up-1 > .columns:nth-of-type(1n+1) {\n      clear: both; }\n    .large-up-1 > .column:last-child, .large-up-1 > .columns:last-child {\n      float: left; }\n  .large-up-2 > .column, .large-up-2 > .columns {\n    width: 50%;\n    float: left; }\n    .large-up-2 > .column:nth-of-type(1n), .large-up-2 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-2 > .column:nth-of-type(2n+1), .large-up-2 > .columns:nth-of-type(2n+1) {\n      clear: both; }\n    .large-up-2 > .column:last-child, .large-up-2 > .columns:last-child {\n      float: left; }\n  .large-up-3 > .column, .large-up-3 > .columns {\n    width: 33.33333%;\n    float: left; }\n    .large-up-3 > .column:nth-of-type(1n), .large-up-3 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-3 > .column:nth-of-type(3n+1), .large-up-3 > .columns:nth-of-type(3n+1) {\n      clear: both; }\n    .large-up-3 > .column:last-child, .large-up-3 > .columns:last-child {\n      float: left; }\n  .large-up-4 > .column, .large-up-4 > .columns {\n    width: 25%;\n    float: left; }\n    .large-up-4 > .column:nth-of-type(1n), .large-up-4 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-4 > .column:nth-of-type(4n+1), .large-up-4 > .columns:nth-of-type(4n+1) {\n      clear: both; }\n    .large-up-4 > .column:last-child, .large-up-4 > .columns:last-child {\n      float: left; }\n  .large-up-5 > .column, .large-up-5 > .columns {\n    width: 20%;\n    float: left; }\n    .large-up-5 > .column:nth-of-type(1n), .large-up-5 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-5 > .column:nth-of-type(5n+1), .large-up-5 > .columns:nth-of-type(5n+1) {\n      clear: both; }\n    .large-up-5 > .column:last-child, .large-up-5 > .columns:last-child {\n      float: left; }\n  .large-up-6 > .column, .large-up-6 > .columns {\n    width: 16.66667%;\n    float: left; }\n    .large-up-6 > .column:nth-of-type(1n), .large-up-6 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-6 > .column:nth-of-type(6n+1), .large-up-6 > .columns:nth-of-type(6n+1) {\n      clear: both; }\n    .large-up-6 > .column:last-child, .large-up-6 > .columns:last-child {\n      float: left; }\n  .large-up-7 > .column, .large-up-7 > .columns {\n    width: 14.28571%;\n    float: left; }\n    .large-up-7 > .column:nth-of-type(1n), .large-up-7 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-7 > .column:nth-of-type(7n+1), .large-up-7 > .columns:nth-of-type(7n+1) {\n      clear: both; }\n    .large-up-7 > .column:last-child, .large-up-7 > .columns:last-child {\n      float: left; }\n  .large-up-8 > .column, .large-up-8 > .columns {\n    width: 12.5%;\n    float: left; }\n    .large-up-8 > .column:nth-of-type(1n), .large-up-8 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-8 > .column:nth-of-type(8n+1), .large-up-8 > .columns:nth-of-type(8n+1) {\n      clear: both; }\n    .large-up-8 > .column:last-child, .large-up-8 > .columns:last-child {\n      float: left; }\n  .large-collapse > .column, .large-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .large-collapse .row,\n  .expanded.row .large-collapse.row {\n    margin-left: 0;\n    margin-right: 0; }\n  .large-uncollapse > .column, .large-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem; }\n  .large-centered {\n    float: none;\n    margin-left: auto;\n    margin-right: auto; }\n  .large-uncentered,\n  .large-push-0,\n  .large-pull-0 {\n    position: static;\n    margin-left: 0;\n    margin-right: 0;\n    float: left; } }\n\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\np,\nblockquote,\nth,\ntd {\n  margin: 0;\n  padding: 0; }\n\np {\n  font-size: inherit;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n  text-rendering: optimizeLegibility; }\n\nem,\ni {\n  font-style: italic;\n  line-height: inherit; }\n\nstrong,\nb {\n  font-weight: bold;\n  line-height: inherit; }\n\nsmall {\n  font-size: 80%;\n  line-height: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: Tahoma, \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  color: inherit;\n  text-rendering: optimizeLegibility;\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  line-height: 1.4; }\n  h1 small,\n  h2 small,\n  h3 small,\n  h4 small,\n  h5 small,\n  h6 small {\n    color: #cacaca;\n    line-height: 0; }\n\nh1 {\n  font-size: 1.5rem; }\n\nh2 {\n  font-size: 1.25rem; }\n\nh3 {\n  font-size: 1.1875rem; }\n\nh4 {\n  font-size: 1.125rem; }\n\nh5 {\n  font-size: 1.0625rem; }\n\nh6 {\n  font-size: 1rem; }\n\n@media screen and (min-width: 40em) {\n  h1 {\n    font-size: 3rem; }\n  h2 {\n    font-size: 2.5rem; }\n  h3 {\n    font-size: 1.9375rem; }\n  h4 {\n    font-size: 1.5625rem; }\n  h5 {\n    font-size: 1.25rem; }\n  h6 {\n    font-size: 1rem; } }\n\na {\n  color: #2199e8;\n  text-decoration: none;\n  line-height: inherit;\n  cursor: pointer; }\n  a:hover, a:focus {\n    color: #1585cf; }\n  a img {\n    border: 0; }\n\nhr {\n  max-width: 75rem;\n  height: 0;\n  border-right: 0;\n  border-top: 0;\n  border-bottom: 1px solid #cacaca;\n  border-left: 0;\n  margin: 1.25rem auto;\n  clear: both; }\n\nul,\nol,\ndl {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n  list-style-position: outside; }\n\nli {\n  font-size: inherit; }\n\nul {\n  list-style-type: disc;\n  margin-left: 1.25rem; }\n\nol {\n  margin-left: 1.25rem; }\n\nul ul, ol ul, ul ol, ol ol {\n  margin-left: 1.25rem;\n  margin-bottom: 0; }\n\ndl {\n  margin-bottom: 1rem; }\n  dl dt {\n    margin-bottom: 0.3rem;\n    font-weight: bold; }\n\nblockquote {\n  margin: 0 0 1rem;\n  padding: 0.5625rem 1.25rem 0 1.1875rem;\n  border-left: 1px solid #cacaca; }\n  blockquote, blockquote p {\n    line-height: 1.6;\n    color: #8a8a8a; }\n\ncite {\n  display: block;\n  font-size: 0.8125rem;\n  color: #8a8a8a; }\n  cite:before {\n    content: '\\2014    '; }\n\nabbr {\n  color: #0a0a0a;\n  cursor: help;\n  border-bottom: 1px dotted #0a0a0a; }\n\ncode {\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n  font-weight: normal;\n  color: #0a0a0a;\n  background-color: #e6e6e6;\n  border: 1px solid #cacaca;\n  padding: 0.125rem 0.3125rem 0.0625rem; }\n\nkbd {\n  padding: 0.125rem 0.25rem 0;\n  margin: 0;\n  background-color: #e6e6e6;\n  color: #0a0a0a;\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace; }\n\n.subheader {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n  line-height: 1.4;\n  color: #8a8a8a; }\n\n.lead {\n  font-size: 125%;\n  line-height: 1.6; }\n\n.stat {\n  font-size: 2.5rem;\n  line-height: 1; }\n  p + .stat {\n    margin-top: -1rem; }\n\n.no-bullet {\n  margin-left: 0;\n  list-style: none; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n@media screen and (min-width: 40em) {\n  .medium-text-left {\n    text-align: left; }\n  .medium-text-right {\n    text-align: right; }\n  .medium-text-center {\n    text-align: center; }\n  .medium-text-justify {\n    text-align: justify; } }\n\n@media screen and (min-width: 64em) {\n  .large-text-left {\n    text-align: left; }\n  .large-text-right {\n    text-align: right; }\n  .large-text-center {\n    text-align: center; }\n  .large-text-justify {\n    text-align: justify; } }\n\n.show-for-print {\n  display: none !important; }\n\n@media print {\n  * {\n    background: transparent !important;\n    color: black !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  .show-for-print {\n    display: block !important; }\n  .hide-for-print {\n    display: none !important; }\n  table.show-for-print {\n    display: table !important; }\n  thead.show-for-print {\n    display: table-header-group !important; }\n  tbody.show-for-print {\n    display: table-row-group !important; }\n  tr.show-for-print {\n    display: table-row !important; }\n  td.show-for-print {\n    display: table-cell !important; }\n  th.show-for-print {\n    display: table-cell !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  .ir a:after,\n  a[href^='javascript:']:after,\n  a[href^='#']:after {\n    content: ''; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  pre,\n  blockquote {\n    border: 1px solid #8a8a8a;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  @page {\n    margin: 0.5cm; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; } }\n\n[type='text'], [type='password'], [type='date'], [type='datetime'], [type='datetime-local'], [type='month'], [type='week'], [type='email'], [type='number'], [type='search'], [type='tel'], [type='time'], [type='url'], [type='color'],\ntextarea {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 2.4375rem;\n  padding: 0.5rem;\n  border: 1px solid #cacaca;\n  margin: 0 0 1rem;\n  font-family: inherit;\n  font-size: 1rem;\n  color: #0a0a0a;\n  background-color: #fefefe;\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  border-radius: 0;\n  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n  [type='text']:focus, [type='password']:focus, [type='date']:focus, [type='datetime']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='week']:focus, [type='email']:focus, [type='number']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='url']:focus, [type='color']:focus,\n  textarea:focus {\n    border: 1px solid #8a8a8a;\n    background-color: #fefefe;\n    outline: none;\n    box-shadow: 0 0 5px #cacaca;\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\n\ntextarea {\n  max-width: 100%; }\n  textarea[rows] {\n    height: auto; }\n\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: #cacaca; }\n\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: #cacaca; }\n\ninput:-ms-input-placeholder,\ntextarea:-ms-input-placeholder {\n  color: #cacaca; }\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #cacaca; }\n\ninput:disabled, input[readonly],\ntextarea:disabled,\ntextarea[readonly] {\n  background-color: #e6e6e6;\n  cursor: not-allowed; }\n\n[type='submit'],\n[type='button'] {\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\ninput[type='search'] {\n  box-sizing: border-box; }\n\n[type='file'],\n[type='checkbox'],\n[type='radio'] {\n  margin: 0 0 1rem; }\n\n[type='checkbox'] + label,\n[type='radio'] + label {\n  display: inline-block;\n  margin-left: 0.5rem;\n  margin-right: 1rem;\n  margin-bottom: 0;\n  vertical-align: baseline; }\n  [type='checkbox'] + label[for],\n  [type='radio'] + label[for] {\n    cursor: pointer; }\n\nlabel > [type='checkbox'],\nlabel > [type='radio'] {\n  margin-right: 0.5rem; }\n\n[type='file'] {\n  width: 100%; }\n\nlabel {\n  display: block;\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: normal;\n  line-height: 1.8;\n  color: #0a0a0a; }\n  label.middle {\n    margin: 0 0 1rem;\n    padding: 0.5625rem 0; }\n\n.help-text {\n  margin-top: -0.5rem;\n  font-size: 0.8125rem;\n  font-style: italic;\n  color: #0a0a0a; }\n\n.input-group {\n  display: table;\n  width: 100%;\n  margin-bottom: 1rem; }\n  .input-group > :first-child {\n    border-radius: 0 0 0 0; }\n  .input-group > :last-child > * {\n    border-radius: 0 0 0 0; }\n\n.input-group-label, .input-group-field, .input-group-button {\n  margin: 0;\n  white-space: nowrap;\n  display: table-cell;\n  vertical-align: middle; }\n\n.input-group-label {\n  text-align: center;\n  padding: 0 1rem;\n  background: #e6e6e6;\n  color: #0a0a0a;\n  border: 1px solid #cacaca;\n  white-space: nowrap;\n  width: 1%;\n  height: 100%; }\n  .input-group-label:first-child {\n    border-right: 0; }\n  .input-group-label:last-child {\n    border-left: 0; }\n\n.input-group-field {\n  border-radius: 0;\n  height: 2.5rem; }\n\n.input-group-button {\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: center;\n  height: 100%;\n  width: 1%; }\n  .input-group-button a,\n  .input-group-button input,\n  .input-group-button button {\n    margin: 0; }\n\n.input-group .input-group-button {\n  display: table-cell; }\n\nfieldset {\n  border: 0;\n  padding: 0;\n  margin: 0; }\n\nlegend {\n  margin-bottom: 0.5rem;\n  max-width: 100%; }\n\n.fieldset {\n  border: 1px solid #cacaca;\n  padding: 1.25rem;\n  margin: 1.125rem 0; }\n  .fieldset legend {\n    background: #fefefe;\n    padding: 0 0.1875rem;\n    margin: 0;\n    margin-left: -0.1875rem; }\n\nselect {\n  height: 2.4375rem;\n  padding: 0.5rem;\n  border: 1px solid #cacaca;\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-family: inherit;\n  line-height: normal;\n  color: #0a0a0a;\n  background-color: #fefefe;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>\");\n  background-size: 9px 6px;\n  background-position: right -1rem center;\n  background-origin: content-box;\n  background-repeat: no-repeat;\n  padding-right: 1.5rem; }\n  @media screen and (min-width: 0\\0) {\n    select {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIpJREFUeNrEkckNgDAMBBfRkEt0ObRBBdsGXUDgmQfK4XhH2m8czQAAy27R3tsw4Qfe2x8uOO6oYLb6GlOor3GF+swURAOmUJ+RwtEJs9WvTGEYxBXqI1MQAZhCfUQKRzDMVj+TwrAIV6jvSUEkYAr1LSkcyTBb/V+KYfX7xAeusq3sLDtGH3kEGACPWIflNZfhRQAAAABJRU5ErkJggg==\"); } }\n  select:disabled {\n    background-color: #e6e6e6;\n    cursor: not-allowed; }\n  select::-ms-expand {\n    display: none; }\n  select[multiple] {\n    height: auto;\n    background-image: none; }\n\n.is-invalid-input:not(:focus) {\n  background-color: rgba(236, 88, 64, 0.1);\n  border-color: #ec5840; }\n\n.is-invalid-label {\n  color: #ec5840; }\n\n.form-error {\n  display: none;\n  margin-top: -0.5rem;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: #ec5840; }\n  .form-error.is-visible {\n    display: block; }\n\n.button {\n  display: inline-block;\n  text-align: center;\n  line-height: 1;\n  cursor: pointer;\n  -webkit-appearance: none;\n  transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  border-radius: 0;\n  padding: 0.85em 1em;\n  margin: 0 0 1rem 0;\n  font-size: 0.9rem;\n  background-color: #2199e8;\n  color: #fefefe; }\n  [data-whatinput='mouse'] .button {\n    outline: 0; }\n  .button:hover, .button:focus {\n    background-color: #1583cc;\n    color: #fefefe; }\n  .button.tiny {\n    font-size: 0.6rem; }\n  .button.small {\n    font-size: 0.75rem; }\n  .button.large {\n    font-size: 1.25rem; }\n  .button.expanded {\n    display: block;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0; }\n  .button.primary {\n    background-color: #2199e8;\n    color: #fefefe; }\n    .button.primary:hover, .button.primary:focus {\n      background-color: #147cc0;\n      color: #fefefe; }\n  .button.secondary {\n    background-color: #777;\n    color: #fefefe; }\n    .button.secondary:hover, .button.secondary:focus {\n      background-color: #5f5f5f;\n      color: #fefefe; }\n  .button.success {\n    background-color: #3adb76;\n    color: #fefefe; }\n    .button.success:hover, .button.success:focus {\n      background-color: #22bb5b;\n      color: #fefefe; }\n  .button.warning {\n    background-color: #ffae00;\n    color: #fefefe; }\n    .button.warning:hover, .button.warning:focus {\n      background-color: #cc8b00;\n      color: #fefefe; }\n  .button.alert {\n    background-color: #ec5840;\n    color: #fefefe; }\n    .button.alert:hover, .button.alert:focus {\n      background-color: #da3116;\n      color: #fefefe; }\n  .button.hollow {\n    border: 1px solid #2199e8;\n    color: #2199e8; }\n    .button.hollow, .button.hollow:hover, .button.hollow:focus {\n      background-color: transparent; }\n    .button.hollow:hover, .button.hollow:focus {\n      border-color: #0c4d78;\n      color: #0c4d78; }\n    .button.hollow.primary {\n      border: 1px solid #2199e8;\n      color: #2199e8; }\n      .button.hollow.primary:hover, .button.hollow.primary:focus {\n        border-color: #0c4d78;\n        color: #0c4d78; }\n    .button.hollow.secondary {\n      border: 1px solid #777;\n      color: #777; }\n      .button.hollow.secondary:hover, .button.hollow.secondary:focus {\n        border-color: #3c3c3c;\n        color: #3c3c3c; }\n    .button.hollow.success {\n      border: 1px solid #3adb76;\n      color: #3adb76; }\n      .button.hollow.success:hover, .button.hollow.success:focus {\n        border-color: #157539;\n        color: #157539; }\n    .button.hollow.warning {\n      border: 1px solid #ffae00;\n      color: #ffae00; }\n      .button.hollow.warning:hover, .button.hollow.warning:focus {\n        border-color: #805700;\n        color: #805700; }\n    .button.hollow.alert {\n      border: 1px solid #ec5840;\n      color: #ec5840; }\n      .button.hollow.alert:hover, .button.hollow.alert:focus {\n        border-color: #881f0e;\n        color: #881f0e; }\n  .button.disabled, .button[disabled] {\n    opacity: 0.25;\n    cursor: not-allowed; }\n    .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {\n      background-color: #2199e8;\n      color: #fefefe; }\n  .button.dropdown::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.4em;\n    border-color: #fefefe transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    position: relative;\n    top: 0.4em;\n    float: right;\n    margin-left: 1em;\n    display: inline-block; }\n  .button.arrow-only::after {\n    margin-left: 0;\n    float: none;\n    top: -0.1em; }\n\n.tabs {\n  margin: 0;\n  list-style-type: none;\n  background: #fefefe;\n  border: 1px solid #e6e6e6; }\n  .tabs::before, .tabs::after {\n    content: ' ';\n    display: table; }\n  .tabs::after {\n    clear: both; }\n\n.tabs.vertical > li {\n  width: auto;\n  float: none;\n  display: block; }\n\n.tabs.simple > li > a {\n  padding: 0; }\n  .tabs.simple > li > a:hover {\n    background: transparent; }\n\n.tabs.primary {\n  background: #2199e8; }\n  .tabs.primary > li > a {\n    color: #fefefe; }\n    .tabs.primary > li > a:hover, .tabs.primary > li > a:focus {\n      background: #1893e4; }\n\n.tabs-title {\n  float: left; }\n  .tabs-title > a {\n    display: block;\n    padding: 1.25rem 1.5rem;\n    line-height: 1;\n    font-size: 0.75rem; }\n    .tabs-title > a:hover {\n      background: #fefefe; }\n    .tabs-title > a:focus, .tabs-title > a[aria-selected='true'] {\n      background: #e6e6e6; }\n\n.tabs-content {\n  background: #fefefe;\n  transition: all 0.5s ease;\n  border: 1px solid #e6e6e6;\n  border-top: 0; }\n\n.tabs-content.vertical {\n  border: 1px solid #e6e6e6;\n  border-left: 0; }\n\n.tabs-panel {\n  display: none;\n  padding: 1rem; }\n  .tabs-panel.is-active {\n    display: block; }\n\n.sticky-container {\n  position: relative; }\n\n.sticky {\n  position: absolute;\n  z-index: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n.sticky.is-stuck {\n  position: fixed;\n  z-index: 5; }\n  .sticky.is-stuck.is-at-top {\n    top: 0; }\n  .sticky.is-stuck.is-at-bottom {\n    bottom: 0; }\n\n.sticky.is-anchored {\n  position: absolute;\n  left: auto;\n  right: auto; }\n  .sticky.is-anchored.is-at-bottom {\n    bottom: 0; }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.clearfix::before, .clearfix::after {\n  content: ' ';\n  display: table; }\n\n.clearfix::after {\n  clear: both; }\n\nbody {\n  color: black;\n  color: gray; }\n\n/* NAVYSTAVKE BASE STYLES */\n.nv-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  margin-top: 40px; }\n  @media screen and (min-width: 39.9375em) {\n    .nv-container {\n      margin-left: 70px; } }\n  @media screen and (min-width: 79.375em) {\n    .nv-container {\n      margin-left: auto;\n      margin-right: auto; } }\n\n.nv-container__shadow {\n  box-shadow: 0px 0px 25px 8px rgba(138, 138, 138, 0.3); }\n\n.nv-header {\n  height: 125px;\n  background-color: #8eb3ce;\n  text-align: center; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-header {\n      height: 100px; } }\n\n.nv-header__expo-info {\n  height: inherit;\n  position: relative;\n  z-index: 3; }\n\n.nv-header--logo-link {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.nv-header--logo {\n  max-width: 570px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  @media screen and (max-width: 63.9375em) {\n    .nv-header--logo {\n      max-width: 300px; } }\n\n/* NAVYSTAVKE NAVIGATION */\n.nv-nav {\n  height: 215px; }\n  .nv-nav.nv-nav__expo-info {\n    margin-top: -70px; }\n\n.nv-nav--button {\n  height: 215px;\n  width: 20%;\n  float: left;\n  background-repeat: no-repeat;\n  position: relative;\n  display: block; }\n  .nv-nav--button:last-child:not(:first-child) {\n    float: right; }\n  .nv-nav--button:after {\n    position: absolute;\n    content: '. . .';\n    color: red;\n    text-align: center;\n    width: 100%;\n    height: 10px;\n    left: 0;\n    bottom: 33px;\n    font-size: 1rem;\n    letter-spacing: -0.1rem; }\n\n.nv-nav--button-text {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%);\n  text-transform: uppercase; }\n\n.nv-nav--button-text__top-offset {\n  margin-top: 100px; }\n\n.nv-nav--button-title {\n  text-align: center;\n  font-size: 1.35rem;\n  color: #2e2e2e; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-nav--button-title {\n      font-size: 1.2rem; } }\n  @media screen and (max-width: 39.875em) {\n    .nv-nav--button-title {\n      font-size: 0.75rem; } }\n\n.nv-nav--button-info {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  color: #777; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-nav--button-info {\n      font-size: .65rem; } }\n  @media screen and (max-width: 39.875em) {\n    .nv-nav--button-info {\n      font-size: 0.55rem; } }\n\n.nv-nav--mini-header {\n  height: 45px;\n  background-color: #566a83;\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n  border-top: 2px solid white;\n  vertical-align: middle;\n  display: inline-block;\n  width: 100%;\n  font-size: 1.8rem;\n  letter-spacing: 0.7rem;\n  position: relative;\n  z-index: 2; }\n  .nv-nav--mini-header span {\n    width: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  @media screen and (max-width: 63.9375em) {\n    .nv-nav--mini-header {\n      vertical-align: middle;\n      font-size: 0.9rem; } }\n\n.nv-nav--button__no-picture:nth-child(1) {\n  background-color: #ededf7; }\n\n.nv-nav--button__no-picture:nth-child(2) {\n  background-color: #f0f0f8; }\n\n.nv-nav--button__no-picture:nth-child(3) {\n  background-color: #f3f3fb; }\n\n.nv-nav--button__no-picture:nth-child(4) {\n  background-color: #f7f6fc; }\n\n.nv-nav--button__no-picture:nth-child(5) {\n  background-color: #f7f6fc; }\n\n.nv-nav--button__with-picture-1 {\n  background-image: url(" + __webpack_require__(310) + ");\n  background-color: #ededf7; }\n\n.nv-nav--button__with-picture-2 {\n  background-image: url(" + __webpack_require__(311) + ");\n  background-color: #f0f0f8; }\n\n.nv-nav--button__with-picture-3 {\n  background-image: url(" + __webpack_require__(312) + ");\n  background-color: #f3f3fb; }\n\n.nv-nav--button__with-picture-4 {\n  background-image: url(" + __webpack_require__(313) + ");\n  background-color: #f7f6fc; }\n\n.nv-nav--button__with-picture-5 {\n  background-image: url(" + __webpack_require__(314) + ");\n  background-color: #f7f6fc; }\n\n.nv-nav--button__search {\n  height: 30px;\n  width: 145px;\n  border: none; }\n\n.nv-nav--button__active {\n  z-index: 1;\n  position: relative;\n  background-color: #e9e9f5; }\n  .nv-nav--button__active:before {\n    position: absolute;\n    content: '';\n    bottom: 0px;\n    left: -10px;\n    right: -10px;\n    height: 151px;\n    background-image: linear-gradient(to right, transparent, rgba(51, 51, 51, 0.3) 10px, transparent 10px, transparent 250px, rgba(51, 51, 51, 0.3) 250px, transparent 260px); }\n\n.nv-nav-back-arrow {\n  margin-top: -20px;\n  transition: 0.2s; }\n  .nv-nav-back-arrow:hover {\n    transition: 0.2s;\n    -webkit-transform: translateX(-10px);\n        -ms-transform: translateX(-10px);\n            transform: translateX(-10px); }\n\n/* MAIN BLOCK */\n.nv-main {\n  height: 625px;\n  overflow: hidden;\n  position: relative;\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto; }\n  .nv-main::before, .nv-main::after {\n    content: ' ';\n    display: table; }\n  .nv-main::after {\n    clear: both; }\n\n.nv-calendar {\n  width: 20%;\n  float: left;\n  padding-left: 1.5625rem;\n  padding-right: 1.5625rem;\n  height: 625px;\n  background-color: #8cb1cc; }\n  .nv-calendar:last-child:not(:first-child) {\n    float: right; }\n\n.nv-main-content {\n  width: 60%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  height: 625px;\n  background-color: #dde4ee; }\n  @media screen and (min-width: 40em) {\n    .nv-main-content {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-main-content:last-child:not(:first-child) {\n    float: right; }\n\n.nv-participants {\n  width: 20%;\n  float: left;\n  height: 625px;\n  background-color: #8cb1cc;\n  position: relative; }\n  .nv-participants:last-child:not(:first-child) {\n    float: right; }\n\n/* NAVYSTAVKE CALENDAR*/\n.nv-calendar {\n  padding-top: 30px; }\n\n.nv-calendar--info {\n  padding-right: 50px;\n  position: relative;\n  display: block; }\n\n.nv-calendar--info--title {\n  font-size: 1.6rem;\n  color: #52697b;\n  text-transform: uppercase;\n  line-height: 0.85; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-calendar--info--title {\n      font-size: 0.9rem;\n      line-height: 0.5; } }\n\n.nv-calendar--info--arrow {\n  background-image: url(" + __webpack_require__(315) + ");\n  background-repeat: no-repeat;\n  opacity: .7;\n  height: 33px;\n  width: 20px;\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n.nv-calendar--info--desc {\n  font-size: 0.9rem;\n  line-height: 1.1;\n  text-transform: lowercase;\n  color: #52697b; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-calendar--info--desc {\n      font-size: 0.7rem;\n      line-height: 0.5; } }\n\n.nv-calendar--city--input {\n  margin-top: 15px;\n  border: none; }\n\n.nv-calendar--date {\n  margin-top: 30px; }\n\n.nv-calendar--date--day-and-month {\n  text-align: center; }\n\n.nv-calendar--date--day-and-month--day {\n  font-size: 3.1rem;\n  color: #d57883;\n  line-height: 0.8; }\n\n.nv-calendar--date--day-and-month--month {\n  font-size: 2rem;\n  color: #52697b;\n  text-transform: lowercase;\n  line-height: 0.9; }\n\n.nv-calendar--date--weekday-and-time {\n  text-align: center;\n  padding-top: 15px; }\n\n.nv-calendar--date--weekday-and-time--weekday {\n  font-size: 1.5rem;\n  color: #688499;\n  line-height: 0.5; }\n\n.nv-calendar--date--weekday-and-time--time {\n  font-size: 2rem;\n  color: white; }\n\n.nv-calendar-container {\n  height: 100%;\n  width: 80%;\n  float: left;\n  position: relative;\n  left: 20%;\n  position: absolute !important;\n  overflow: hidden; }\n  .nv-calendar-container:last-child:not(:first-child) {\n    float: right; }\n\n.nv-calendar-events {\n  position: relative;\n  pointer-events: all;\n  height: 100%;\n  width: 100%;\n  z-index: 100;\n  left: -95%;\n  overflow: hidden; }\n\n.nv-calendar-events-row {\n  background-color: white;\n  white-space: nowrap;\n  z-index: 10; }\n  .nv-calendar-events-row:nth-child(even) {\n    background-color: #fcfcfc; }\n\n.nv-calendar-events-row--event {\n  display: inline-block;\n  overflow-y: hidden;\n  position: absolute;\n  height: 40px; }\n  .nv-calendar-events-row--event:nth-child(even) .nv-calendar-events-row--event-header {\n    background-color: #9fbed5; }\n  .nv-calendar-events-row--event .nv-calendar-events-row--event-header {\n    background-color: #8db2cd;\n    display: block;\n    overflow: hidden;\n    width: 100%;\n    height: 40px;\n    vertical-align: middle;\n    text-align: left;\n    color: white;\n    padding-top: 7px;\n    padding-left: 10px; }\n  .nv-calendar-events-row--event .nv-calendar-events-row--event-body--dates {\n    font-size: 0.85rem;\n    text-align: center; }\n  .nv-calendar-events-row--event .nv-calendar-events-row--event-body {\n    white-space: normal;\n    margin-top: 10px;\n    padding: 10px;\n    font-size: 0.8rem;\n    background-color: white;\n    z-index: 100;\n    position: relative;\n    width: 300px;\n    border: 1px solid rgba(0, 0, 0, 0.1); }\n    .nv-calendar-events-row--event .nv-calendar-events-row--event-body > a {\n      word-break: break-all; }\n\n.nv-calendar-events--column {\n  height: 100%;\n  border-right: 1px solid darkgray;\n  border-left: 1px solid darkgray;\n  z-index: 5; }\n  .nv-calendar-events--column:first-child {\n    border-left: none; }\n  .nv-calendar-events--column:last-child {\n    border-right: none; }\n\n.nv-calendar-events--months {\n  white-space: nowrap; }\n\n.nv-calendar-events--month {\n  height: 50px;\n  color: white;\n  font-size: 1.2rem;\n  padding-top: 0.5rem;\n  padding-left: 0.5rem;\n  display: inline-block;\n  text-transform: uppercase;\n  background-image: linear-gradient(to right, #8db2cd, #7597b0); }\n  .nv-calendar-events--month:last-child {\n    clear: both;\n    float: none; }\n\n.nv-calendar-events--days {\n  height: 60px;\n  white-space: nowrap; }\n\n.nv-calendar-events--day {\n  display: inline-block;\n  height: 100%;\n  background-color: #f1f2f6;\n  text-align: center;\n  position: relative; }\n  .nv-calendar-events--day:after {\n    position: absolute;\n    content: \"\";\n    height: 650px;\n    width: 3px;\n    top: 0;\n    right: -3px;\n    z-index: 0;\n    background-color: #ededed; }\n\n.nv-calendar-events--day-number {\n  color: black;\n  font-size: 1.4rem;\n  width: 100%;\n  display: block; }\n\n.nv-calendar-events--day-weekday {\n  color: darkgray;\n  font-size: 0.8rem;\n  width: 100%;\n  display: block; }\n\n.nv-calendar-events-scroll {\n  position: relative;\n  left: 0;\n  height: 100%;\n  cursor: all-scroll; }\n\n.nv-calendar-events--move-left {\n  position: absolute;\n  left: 0;\n  width: 100px;\n  height: 100%; }\n\n.nv-calendar-events--move-right {\n  position: absolute;\n  right: 0;\n  width: 100px;\n  height: 100%; }\n\n/* VISITORS SEARCH LEFT BLOCK*/\n.nv-participants-search {\n  height: 120px;\n  padding-top: 32px;\n  padding-left: 30px;\n  padding-right: 30px; }\n\n.nv-participants-search--input {\n  border: none;\n  text-align: center;\n  height: 35px; }\n\n.nv-participants-found--item {\n  height: 60px;\n  overflow: hidden;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 10px; }\n  .nv-participants-found--item:nth-child(odd) {\n    background-color: #729fc0; }\n\n.nv-participants-found--item--name {\n  color: white;\n  font-size: 0.8rem;\n  width: 35%;\n  overflow: hidden; }\n\n.nv-participants-found--item--company {\n  color: #5d7181;\n  font-size: 0.7rem;\n  padding: 0 5px;\n  width: 45%;\n  overflow: hidden; }\n\n.nv-participants-found--item--photo {\n  width: 60px;\n  height: 60px;\n  -webkit-flex: 0 0 60px;\n      -ms-flex: 0 0 60px;\n          flex: 0 0 60px;\n  overflow: hidden; }\n\n.nv-visitors-list {\n  background-color: #f6f6ff; }\n\n.nv-visitors-list--top {\n  height: 75px; }\n\n.nv-visitors-list--top--desc {\n  background-image: linear-gradient(to bottom, #c3c3c3 0%, #f8f9f9 26%, #ffffff);\n  width: 42%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  font-size: 1.25rem;\n  height: 75px;\n  position: relative; }\n  @media screen and (min-width: 40em) {\n    .nv-visitors-list--top--desc {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-visitors-list--top--desc:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-visitors-list--top--desc {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem;\n      font-size: 1rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-visitors-list--top--desc {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-visitors-list--top--desc:last-child:not(:first-child) {\n        float: right; } }\n  .nv-visitors-list--top--desc > * {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    white-space: nowrap; }\n\n.nv-visitors-list--top--became-visitor {\n  width: 29%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  background-color: #e6b942;\n  height: 75px;\n  transition: 0.2s;\n  position: relative; }\n  @media screen and (min-width: 40em) {\n    .nv-visitors-list--top--became-visitor {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-visitors-list--top--became-visitor:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-visitors-list--top--became-visitor {\n      width: 50%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem;\n      font-size: 1rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-visitors-list--top--became-visitor {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-visitors-list--top--became-visitor:last-child:not(:first-child) {\n        float: right; } }\n  .nv-visitors-list--top--became-visitor > * {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    white-space: nowrap; }\n    .nv-visitors-list--top--became-visitor > * a {\n      text-decoration: none;\n      color: black;\n      display: block; }\n  .nv-visitors-list--top--became-visitor:hover {\n    background-color: #e9c159;\n    transition: 0.2s; }\n\n.nv-visitors-list--top--became-participant {\n  width: 29%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  color: white;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  background-color: #6997b9;\n  height: 75px;\n  transition: 0.2s;\n  position: relative; }\n  @media screen and (min-width: 40em) {\n    .nv-visitors-list--top--became-participant {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-visitors-list--top--became-participant:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-visitors-list--top--became-participant {\n      width: 50%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem;\n      font-size: 1rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-visitors-list--top--became-participant {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-visitors-list--top--became-participant:last-child:not(:first-child) {\n        float: right; } }\n  .nv-visitors-list--top--became-participant > * {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    white-space: nowrap; }\n    .nv-visitors-list--top--became-participant > * a {\n      text-decoration: none;\n      color: black;\n      display: block; }\n  .nv-visitors-list--top--became-participant:hover {\n    background-color: #7aa3c1;\n    transition: 0.2s; }\n\n.nv-visitors-list--people {\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto;\n  margin: 10px;\n  margin-top: 0;\n  margin-bottom: 0; }\n  .nv-visitors-list--people::before, .nv-visitors-list--people::after {\n    content: ' ';\n    display: table; }\n  .nv-visitors-list--people::after {\n    clear: both; }\n\n.nv-visitors-list--people--person {\n  width: 5%;\n  float: left;\n  padding-left: 0.1875rem;\n  padding-right: 0.1875rem;\n  margin-bottom: 6px;\n  display: block; }\n  .nv-visitors-list--people--person:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-visitors-list--people--person {\n      width: 10%;\n      float: left;\n      padding-left: 0.09375rem;\n      padding-right: 0.09375rem; }\n      .nv-visitors-list--people--person:last-child:not(:first-child) {\n        float: right; } }\n\n.nv-sponsors {\n  height: 152px;\n  padding-top: 36px;\n  padding-bottom: 36px;\n  position: relative;\n  background-image: linear-gradient(to right, #8db2cd, #d2d6d7); }\n  .nv-sponsors:before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    background-image: linear-gradient(to bottom, rgba(51, 51, 51, 0.4), rgba(255, 255, 255, 0) 50%); }\n\n.nv-sponsors--arrow-left {\n  display: block;\n  position: relative;\n  z-index: 2;\n  width: 8.33333%;\n  float: left;\n  text-align: center;\n  max-width: none; }\n  .nv-sponsors--arrow-left:last-child:not(:first-child) {\n    float: right; }\n\n.nv-sponsors--arrow-right {\n  display: block;\n  position: relative;\n  z-index: 2;\n  width: 8.33333%;\n  float: left;\n  text-align: center;\n  max-width: none; }\n  .nv-sponsors--arrow-right:last-child:not(:first-child) {\n    float: right; }\n\n.owl-carousel__nv-sponsors {\n  width: 83.33333%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  @media screen and (min-width: 40em) {\n    .owl-carousel__nv-sponsors {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .owl-carousel__nv-sponsors:last-child:not(:first-child) {\n    float: right; }\n\n.nv-sponsors--sponsor > img {\n  height: 80px !important;\n  width: auto !important;\n  margin: 0 auto; }\n\n.nv-footer {\n  height: 225px;\n  clear: both;\n  background-color: #58788f; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-footer {\n      height: 365px; } }\n\n.nv-footer--icons {\n  width: 19.5%;\n  float: left;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%);\n  height: 125px; }\n  .nv-footer--icons:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 74.9375em) {\n    .nv-footer--icons {\n      width: 100%;\n      float: left; }\n      .nv-footer--icons:last-child:not(:first-child) {\n        float: right; } }\n\n.nv-footer--icons-icon {\n  width: 33.33333%;\n  float: left;\n  position: relative;\n  height: 100%; }\n  .nv-footer--icons-icon:last-child:not(:first-child) {\n    float: right; }\n  .nv-footer--icons-icon > a {\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n    .nv-footer--icons-icon > a > img {\n      width: 60px;\n      max-width: none; }\n\n.nv-footer--icons-div {\n  height: 125px; }\n\n.nv-footer--contacts {\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 80px;\n  position: relative; }\n  .nv-footer--contacts::before, .nv-footer--contacts::after {\n    content: ' ';\n    display: table; }\n  .nv-footer--contacts::after {\n    clear: both; }\n  .nv-footer--contacts > a.nv-footer-logo {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\n.nv-footer--contacts--logo {\n  width: 33.33333%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  min-height: 80px;\n  position: relative; }\n  @media screen and (min-width: 40em) {\n    .nv-footer--contacts--logo {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-footer--contacts--logo:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-footer--contacts--logo {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem;\n      min-height: 35px;\n      margin-bottom: 10px; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-footer--contacts--logo {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-footer--contacts--logo:last-child:not(:first-child) {\n        float: right; } }\n  .nv-footer--contacts--logo > a.nv-footer-logo {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\n.nv-footer--contacts--address {\n  width: 33.33333%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  min-height: 80px;\n  position: relative;\n  text-align: center;\n  color: #f5f6f7; }\n  @media screen and (min-width: 40em) {\n    .nv-footer--contacts--address {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-footer--contacts--address:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-footer--contacts--address {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem;\n      margin-bottom: 15px; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-footer--contacts--address {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-footer--contacts--address:last-child:not(:first-child) {\n        float: right; } }\n  .nv-footer--contacts--address > a.nv-footer-logo {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\n.nv-footer--contacts--brb-logo {\n  width: 33.33333%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  min-height: 80px;\n  position: relative; }\n  @media screen and (min-width: 40em) {\n    .nv-footer--contacts--brb-logo {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-footer--contacts--brb-logo:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-footer--contacts--brb-logo {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem;\n      margin-bottom: 10px; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-footer--contacts--brb-logo {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-footer--contacts--brb-logo:last-child:not(:first-child) {\n        float: right; } }\n  .nv-footer--contacts--brb-logo > a.nv-footer-logo {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\n.nv-expo-reviews {\n  width: 100%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  position: relative;\n  z-index: 0;\n  max-height: 600px;\n  margin-top: -80px;\n  margin-top: 0px;\n  padding-top: 90px;\n  padding-top: 0px;\n  padding-right: 0 !important;\n  -webkit-transform: translateX(10px);\n      -ms-transform: translateX(10px);\n          transform: translateX(10px); }\n  @media screen and (min-width: 40em) {\n    .nv-expo-reviews {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-expo-reviews:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-expo-reviews {\n      width: 100%;\n      float: left; }\n      .nv-expo-reviews:last-child:not(:first-child) {\n        float: right; } }\n\n.nv-expo-reviews--header {\n  text-transform: uppercase;\n  margin-right: 40px;\n  margin-left: 0.9rem;\n  position: relative;\n  padding: 25px 25px 15px 25px;\n  font-size: 1.3rem; }\n  .nv-expo-reviews--header > a {\n    color: gray; }\n    .nv-expo-reviews--header > a:hover {\n      color: #881f0e; }\n  .nv-expo-reviews--header:before {\n    content: \"\";\n    position: absolute;\n    pointer-events: none;\n    background-image: linear-gradient(to bottom, #dde4ee, rgba(221, 228, 238, 0));\n    left: 0;\n    width: 100%;\n    height: 30px;\n    bottom: -30px;\n    z-index: 10;\n    pointer-events: none; }\n\n.nv-expo-reviews--review {\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto;\n  padding-bottom: 20px; }\n  .nv-expo-reviews--review::before, .nv-expo-reviews--review::after {\n    content: ' ';\n    display: table; }\n  .nv-expo-reviews--review::after {\n    clear: both; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-expo-reviews--review:nth-child(odd) {\n      max-width: 75rem;\n      margin-left: auto;\n      margin-right: auto;\n      background-color: #e7ecf3; }\n      .nv-expo-reviews--review:nth-child(odd)::before, .nv-expo-reviews--review:nth-child(odd)::after {\n        content: ' ';\n        display: table; }\n      .nv-expo-reviews--review:nth-child(odd)::after {\n        clear: both; } }\n  .nv-expo-reviews--review:first-child {\n    margin-top: 20px; }\n  .nv-expo-reviews--review:last-child {\n    margin-bottom: 70px; }\n\n.nv-expo-reviews--review--link {\n  width: 10%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  @media screen and (min-width: 40em) {\n    .nv-expo-reviews--review--link {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-expo-reviews--review--link:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-expo-reviews--review--link {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-expo-reviews--review--link {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-expo-reviews--review--link:last-child:not(:first-child) {\n        float: right; } }\n  .nv-expo-reviews--review--link > a {\n    color: #cd4f21; }\n\n.nv-expo-reviews--review--content {\n  width: 60%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  font-size: 0.8rem;\n  margin-bottom: 20px; }\n  @media screen and (min-width: 40em) {\n    .nv-expo-reviews--review--content {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-expo-reviews--review--content:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-expo-reviews--review--content {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-expo-reviews--review--content {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-expo-reviews--review--content:last-child:not(:first-child) {\n        float: right; } }\n\n.nv-expo-reviews--review--image {\n  width: 30%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  text-align: center; }\n  @media screen and (min-width: 40em) {\n    .nv-expo-reviews--review--image {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-expo-reviews--review--image:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-expo-reviews--review--image {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-expo-reviews--review--image {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-expo-reviews--review--image:last-child:not(:first-child) {\n        float: right; } }\n  .nv-expo-reviews--review--image > a {\n    display: block; }\n\n.nv-expo-reviews--review--title {\n  font-size: 1.2rem;\n  color: #404040; }\n\n.nv-expo-reviews--review--theme {\n  color: #303030; }\n\n.nv-expo-reviews--review--location {\n  color: #303030; }\n\n.nv-expo-reviews--review--ticket-link {\n  padding: 6px 10px;\n  margin: 5px;\n  color: #97a8b4;\n  border: 1px solid #b9c7d3;\n  background-color: #caddea;\n  display: inline-block !important;\n  text-transform: uppercase;\n  padding: 2px 10px;\n  margin-top: 15px; }\n\n.nv-main__page-expos {\n  background-color: #dce8f1;\n  height: inherit;\n  padding-bottom: 20px; }\n\n.nv-expos {\n  margin-top: 30px;\n  padding-left: 50px;\n  padding-right: 50px; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-expos {\n      padding-left: 0;\n      padding-right: 0; } }\n  .nv-expos .nv-expo {\n    padding-top: 7px;\n    padding-bottom: 7px;\n    width: 25%;\n    float: left;\n    padding-left: 1.09375rem;\n    padding-right: 1.09375rem; }\n    .nv-expos .nv-expo:last-child:not(:first-child) {\n      float: right; }\n    .nv-expos .nv-expo .nv-expo-item {\n      display: block;\n      height: 170px;\n      background-color: #dce8f1;\n      border-radius: 10px 10px 20px 20px;\n      position: relative;\n      transition: 0.2s; }\n      .nv-expos .nv-expo .nv-expo-item .title {\n        text-transform: uppercase;\n        position: absolute;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n            -ms-transform: translateX(-50%);\n                transform: translateX(-50%);\n        bottom: 55px;\n        color: black;\n        white-space: nowrap;\n        font-size: 0.95rem; }\n        @media screen and (max-width: 63.9375em) {\n          .nv-expos .nv-expo .nv-expo-item .title {\n            text-align: center;\n            font-size: 0.8rem;\n            bottom: 2px;\n            white-space: normal; } }\n      .nv-expos .nv-expo .nv-expo-item .title span:nth-child(1) {\n        color: #2370c1; }\n      .nv-expos .nv-expo .nv-expo-item .title span:nth-child(2) {\n        color: #E33B21; }\n      .nv-expos .nv-expo .nv-expo-item .title span:nth-child(3) {\n        color: #E6B500; }\n      .nv-expos .nv-expo .nv-expo-item .title span:nth-child(4) {\n        color: #4BCE54; }\n      .nv-expos .nv-expo .nv-expo-item .title span:nth-child(5) {\n        color: #e018e3; }\n      .nv-expos .nv-expo .nv-expo-item .title span:nth-child(6) {\n        color: black;\n        /* font-style: italic;*/ }\n      .nv-expos .nv-expo .nv-expo-item .title_enter {\n        position: absolute;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n            -ms-transform: translateX(-50%);\n                transform: translateX(-50%);\n        bottom: 9px;\n        color: white;\n        background-color: #8ebbd4;\n        padding: 5px;\n        white-space: nowrap;\n        font-size: 0.95rem;\n        border-radius: 10px 10px 10px 10px; }\n      .nv-expos .nv-expo .nv-expo-item .title_enter_all {\n        text-transform: uppercase;\n        position: absolute;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n            -ms-transform: translateX(-50%);\n                transform: translateX(-50%);\n        bottom: 3px;\n        width: 97%;\n        color: white;\n        background-color: darkred;\n        padding: 5px;\n        white-space: nowrap;\n        border-radius: 20px 20px 20px 20px; }\n      .nv-expos .nv-expo .nv-expo-item img {\n        margin-top: -15%;\n        position: relative;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n            -ms-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\n      .nv-expos .nv-expo .nv-expo-item:before {\n        position: absolute;\n        content: \"\";\n        width: 100%;\n        height: 77%;\n        top: 0;\n        left: 0;\n        pointer-events: none;\n        background-color: #dce8f1;\n        border-radius: 10px; }\n      .nv-expos .nv-expo .nv-expo-item:hover {\n        transition: 0.3s;\n        box-shadow: 0px 4px 7px 2px rgba(32, 28, 22, 0.3);\n        -webkit-transform: translateY(-5px);\n            -ms-transform: translateY(-5px);\n                transform: translateY(-5px);\n        z-index: 100;\n        color: white !important; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-expos .nv-expo {\n        width: 50%;\n        float: left;\n        padding-left: 0.78125rem;\n        padding-right: 0.78125rem; }\n        .nv-expos .nv-expo:last-child:not(:first-child) {\n          float: right; } }\n\n.nv-main__page-expo-info {\n  height: inherit; }\n\n#nv-expo-top-bar {\n  position: relative;\n  z-index: 10; }\n  #nv-expo-top-bar::after {\n    position: absolute;\n    content: '';\n    left: 0;\n    bottom: -20px;\n    height: 20px;\n    width: 100%;\n    background-image: linear-gradient(to bottom, rgba(74, 74, 74, 0.7), rgba(74, 74, 74, 0.3), transparent); }\n  .is-sticky #nv-expo-top-bar {\n    margin-top: 40px; }\n\n.nv-expo-top-bar--search {\n  background-color: #db9c24;\n  height: inherit;\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto; }\n  .nv-expo-top-bar--search::before {\n    position: absolute;\n    content: '';\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 20px;\n    background-image: linear-gradient(to bottom, rgba(74, 74, 74, 0.6), rgba(74, 74, 74, 0.3), transparent); }\n  .nv-expo-top-bar--search::before, .nv-expo-top-bar--search::after {\n    content: ' ';\n    display: table; }\n  .nv-expo-top-bar--search::after {\n    clear: both; }\n  .nv-expo-top-bar--search .nv-expo-top-bar--search-title {\n    height: 90px;\n    position: relative;\n    text-transform: uppercase;\n    font-size: 1.5rem;\n    color: black;\n    text-align: center;\n    width: 50%;\n    float: left;\n    padding-left: 0.625rem;\n    padding-right: 0.625rem; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-title {\n        height: 50px; } }\n    @media screen and (max-width: 39.9375em) {\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-title {\n        height: 35px; } }\n    @media screen and (max-width: 39.9375em) {\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-title {\n        font-size: 0.8rem; } }\n    @media screen and (min-width: 40em) {\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-title {\n        padding-left: 0.9375rem;\n        padding-right: 0.9375rem; } }\n    .nv-expo-top-bar--search .nv-expo-top-bar--search-title:last-child:not(:first-child) {\n      float: right; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-title {\n        width: 100%;\n        float: left;\n        padding-left: 0.625rem;\n        padding-right: 0.625rem;\n        font-size: 1rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-expo-top-bar--search .nv-expo-top-bar--search-title {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n    @media screen and (max-width: 63.9375em) {\n        .nv-expo-top-bar--search .nv-expo-top-bar--search-title:last-child:not(:first-child) {\n          float: right; } }\n    .nv-expo-top-bar--search .nv-expo-top-bar--search-title span {\n      width: 100%;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n          -ms-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n  .nv-expo-top-bar--search .nv-expo-top-bar--search-input {\n    height: 90px;\n    width: 50%;\n    float: left;\n    padding-left: 0.625rem;\n    padding-right: 0.625rem;\n    position: relative;\n    text-align: center; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-input {\n        height: 50px; } }\n    @media screen and (max-width: 39.9375em) {\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-input {\n        height: 35px; } }\n    @media screen and (min-width: 40em) {\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-input {\n        padding-left: 0.9375rem;\n        padding-right: 0.9375rem; } }\n    .nv-expo-top-bar--search .nv-expo-top-bar--search-input:last-child:not(:first-child) {\n      float: right; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-input {\n        width: 100%;\n        float: left;\n        padding-left: 0.625rem;\n        padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-expo-top-bar--search .nv-expo-top-bar--search-input {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n    @media screen and (max-width: 63.9375em) {\n        .nv-expo-top-bar--search .nv-expo-top-bar--search-input:last-child:not(:first-child) {\n          float: right; } }\n    .nv-expo-top-bar--search .nv-expo-top-bar--search-input span {\n      margin: 0 auto;\n      padding: 0 5%;\n      display: inline-block;\n      width: 80%;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n          -ms-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n    .nv-expo-top-bar--search .nv-expo-top-bar--search-input input {\n      position: relative;\n      border-radius: 5px;\n      font-size: 1.2rem;\n      border: none;\n      margin: 0;\n      vertical-align: middle;\n      display: inline-block;\n      width: 80%; }\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-input input::-webkit-input-placeholder {\n        text-transform: uppercase; }\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-input input::-moz-placeholder {\n        text-transform: uppercase; }\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-input input:-ms-input-placeholder {\n        text-transform: uppercase; }\n      .nv-expo-top-bar--search .nv-expo-top-bar--search-input input::placeholder {\n        text-transform: uppercase; }\n      @media screen and (max-width: 63.9375em) {\n        .nv-expo-top-bar--search .nv-expo-top-bar--search-input input {\n          height: 35px;\n          font-size: 1rem; } }\n      @media screen and (max-width: 39.9375em) {\n        .nv-expo-top-bar--search .nv-expo-top-bar--search-input input {\n          height: 30px;\n          font-size: 0.8rem; } }\n    .nv-expo-top-bar--search .nv-expo-top-bar--search-input input + label {\n      position: relative;\n      display: inline-block !important;\n      vertical-align: middle; }\n    .nv-expo-top-bar--search .nv-expo-top-bar--search-input input + label::before {\n      position: absolute;\n      content: '';\n      right: 0;\n      top: -8px;\n      width: 36px;\n      bottom: -8px;\n      background-image: url(" + __webpack_require__(316) + ");\n      /* background-size: 100%; */\n      background-repeat: no-repeat;\n      background-position: 0px 6px; }\n\n.nv-expo-top-bar--filters {\n  background-color: #7f91a7;\n  padding: 0 50px;\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto; }\n  .nv-expo-top-bar--filters::before, .nv-expo-top-bar--filters::after {\n    content: ' ';\n    display: table; }\n  .nv-expo-top-bar--filters::after {\n    clear: both; }\n\n.nv-expo-top-bar--filters-column {\n  text-align: center;\n  position: relative;\n  height: 90px;\n  width: 33.33333%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-expo-top-bar--filters-column {\n      height: 50px; } }\n  @media screen and (max-width: 39.9375em) {\n    .nv-expo-top-bar--filters-column {\n      height: 35px; } }\n  @media screen and (min-width: 40em) {\n    .nv-expo-top-bar--filters-column {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-expo-top-bar--filters-column:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 39.9375em) {\n    .nv-expo-top-bar--filters-column {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 39.9375em) and (min-width: 40em) {\n    .nv-expo-top-bar--filters-column {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 39.9375em) {\n      .nv-expo-top-bar--filters-column:last-child:not(:first-child) {\n        float: right; } }\n  .nv-expo-top-bar--filters-column a {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    text-transform: uppercase;\n    display: inline-block;\n    color: white;\n    background-color: #7f91a7;\n    padding: 5px 40px;\n    border: 1px solid white;\n    width: 90%; }\n    .nv-expo-top-bar--filters-column a.active {\n      background-color: #566a83; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-expo-top-bar--filters-column a {\n        font-size: 0.7rem; } }\n\n/*LEFT SIDEBAR FILTERS*/\n#nv-expo-filters {\n  padding-top: 180px; }\n\n#ul-stick-filters-subjects, #ul-stick-filters-types, #ul-stick-filters-cities {\n  position: relative;\n  padding-top: 200px;\n  margin: 0;\n  padding-left: 20px;\n  margin-left: -20px;\n  background-color: #606c7f; }\n  @media screen and (max-width: 39.9375em) {\n    #ul-stick-filters-subjects, #ul-stick-filters-types, #ul-stick-filters-cities {\n      width: 80% !important; } }\n  .is-sticky #ul-stick-filters-subjects, .is-sticky #ul-stick-filters-types, .is-sticky #ul-stick-filters-cities {\n    padding-top: 240px; }\n  #ul-stick-filters-subjects li a, #ul-stick-filters-types li a, #ul-stick-filters-cities li a {\n    padding: 10px;\n    font-size: 0.8rem; }\n    #ul-stick-filters-subjects li a.active, #ul-stick-filters-types li a.active, #ul-stick-filters-cities li a.active {\n      background-color: #8490a3; }\n    #ul-stick-filters-subjects li a:hover, #ul-stick-filters-types li a:hover, #ul-stick-filters-cities li a:hover {\n      background-color: #8490a3; }\n\n.nv-expo-filter-subjects, .nv-expo-filter-types, .nv-expo-filter-cities {\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 30%;\n  background-color: #606c80;\n  color: white;\n  padding: 20px 20px; }\n  @media screen and (max-width: 39.9375em) {\n    .nv-expo-filter-subjects, .nv-expo-filter-types, .nv-expo-filter-cities {\n      width: 80%; } }\n  .nv-expo-filter-subjects ul > li, .nv-expo-filter-types ul > li, .nv-expo-filter-cities ul > li {\n    padding: 5px 0; }\n    .nv-expo-filter-subjects ul > li a, .nv-expo-filter-types ul > li a, .nv-expo-filter-cities ul > li a {\n      color: white;\n      letter-spacing: 0.8px; }\n\n/* LIST OF STANDS*/\n.nv-expo-grid {\n  padding: 35px 140px;\n  min-height: 700px;\n  background-color: #ebebf8; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-expo-grid {\n      padding: 20px 50px; } }\n\n.nv-expo-grid--row {\n  width: 100%;\n  border-top: 1px solid #c8d2dd;\n  display: inline-block; }\n  .nv-expo-grid--row:last-child {\n    border-bottom: 1px solid #c8d2dd; }\n\n.nv-expo-grid--cell {\n  display: block;\n  padding-top: 30px;\n  height: 190px;\n  text-align: center;\n  width: 33.33333%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  border-left: 1px solid #c8d2dd;\n  border-bottom: 1px solid #c8d2dd;\n  background-color: white;\n  transition: 0.2s; }\n  @media screen and (min-width: 40em) {\n    .nv-expo-grid--cell {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-expo-grid--cell:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (min-width: 39.9375em) {\n    .nv-expo-grid--cell:nth-child(3n) {\n      border-right: 1px solid #c8d2dd; }\n    .nv-expo-grid--cell:nth-last-child(-n+3) {\n      border-bottom: none; } }\n  @media screen and (max-width: 39.9375em) {\n    .nv-expo-grid--cell {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem;\n      border-right: 1px solid #c8d2dd; } }\n  @media screen and (max-width: 39.9375em) and (min-width: 40em) {\n    .nv-expo-grid--cell {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 39.9375em) {\n      .nv-expo-grid--cell:last-child:not(:first-child) {\n        float: right; }\n      .nv-expo-grid--cell:nth-last-child(1) {\n        border-bottom: none; }\n      .nv-expo-grid--cell:nth-last-child(1) {\n        float: left  !important; } }\n  .nv-expo-grid--cell:hover {\n    background-color: white;\n    transition: 0.2s;\n    -webkit-transform: scale(1.1);\n        -ms-transform: scale(1.1);\n            transform: scale(1.1);\n    box-shadow: 0px 0px 5px 5px rgba(166, 166, 175, 0.32); }\n\n.nv-expo-grid--cell-title {\n  font-size: 1rem;\n  color: grey; }\n\n.nv-main__page-for-visitors {\n  background-color: #8cb1cc;\n  height: inherit;\n  padding: 50px 20px;\n  position: relative; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-main__page-for-visitors {\n      height: 750px; } }\n\n.for-visitors--descr {\n  width: 70%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  color: white; }\n  @media screen and (min-width: 40em) {\n    .for-visitors--descr {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .for-visitors--descr:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .for-visitors--descr {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .for-visitors--descr {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .for-visitors--descr:last-child:not(:first-child) {\n        float: right; } }\n  .for-visitors--descr .for-visitors--descr-title {\n    text-transform: uppercase; }\n  .for-visitors--descr .for-visitors--descr-text {\n    margin-top: 20px;\n    font-size: 1.1rem;\n    line-height: 1.3;\n    color: #58788f;\n    font-weight: 600; }\n\n.for-visitors--main-image {\n  width: 100%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  margin-top: -50px;\n  text-align: center; }\n  @media screen and (min-width: 40em) {\n    .for-visitors--main-image {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .for-visitors--main-image:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .for-visitors--main-image {\n      margin-top: 0; } }\n  .for-visitors--main-image img {\n    width: 90%; }\n\n.for-visitors--main-cloud-left {\n  position: absolute;\n  left: 4%;\n  bottom: 60px;\n  width: 19%; }\n\n.for-visitors--main-cloud-right {\n  position: absolute;\n  bottom: 50px;\n  right: 0;\n  width: 22%; }\n\n.for-visitors--socials {\n  position: absolute;\n  left: 50px;\n  bottom: 10px;\n  width: 25%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  text-align: center; }\n  @media screen and (min-width: 40em) {\n    .for-visitors--socials {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .for-visitors--socials:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .for-visitors--socials {\n      left: 0;\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem;\n      float: none;\n      margin-left: auto;\n      margin-right: auto; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .for-visitors--socials {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .for-visitors--socials:last-child:not(:first-child) {\n        float: right; } }\n  .for-visitors--socials a {\n    display: inline-block;\n    transition: 0.3s; }\n    .for-visitors--socials a:hover {\n      transition: 0.2s;\n      -webkit-transform: translateY(-5px);\n          -ms-transform: translateY(-5px);\n              transform: translateY(-5px); }\n    @media screen and (max-width: 63.9375em) {\n      .for-visitors--socials a {\n        -webkit-transform: scale(1.3);\n            -ms-transform: scale(1.3);\n                transform: scale(1.3);\n        margin-left: 10px;\n        margin-right: 10px; } }\n\n.nv-visitors-list--top--desc__for-visitors {\n  font-size: 1.43rem; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-visitors-list--top--desc__for-visitors {\n      font-size: 1.2rem; } }\n\n.nv-facilities {\n  background-color: white;\n  padding-top: 35px;\n  padding-bottom: 35px;\n  width: 100%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  @media screen and (min-width: 40em) {\n    .nv-facilities {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-facilities:last-child:not(:first-child) {\n    float: right; }\n  .nv-facilities .nv-facilities-row {\n    max-width: 75rem;\n    margin-left: auto;\n    margin-right: auto; }\n    .nv-facilities .nv-facilities-row::before, .nv-facilities .nv-facilities-row::after {\n      content: ' ';\n      display: table; }\n    .nv-facilities .nv-facilities-row::after {\n      clear: both; }\n    .nv-facilities .nv-facilities-row .nv-facilities--item {\n      padding-top: 10px;\n      padding-bottom: 10px;\n      width: 33.33333%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; }\n      @media screen and (min-width: 40em) {\n        .nv-facilities .nv-facilities-row .nv-facilities--item {\n          padding-left: 0.9375rem;\n          padding-right: 0.9375rem; } }\n      .nv-facilities .nv-facilities-row .nv-facilities--item:last-child:not(:first-child) {\n        float: right; }\n      @media screen and (max-width: 63.9375em) {\n        .nv-facilities .nv-facilities-row .nv-facilities--item {\n          width: 100%;\n          float: left;\n          padding-left: 0.625rem;\n          padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-facilities .nv-facilities-row .nv-facilities--item {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n      @media screen and (max-width: 63.9375em) {\n          .nv-facilities .nv-facilities-row .nv-facilities--item:last-child:not(:first-child) {\n            float: right; } }\n      .nv-facilities .nv-facilities-row .nv-facilities--item .nv-facilities--item-image {\n        text-align: center;\n        width: 25%;\n        float: left;\n        padding-left: 0.625rem;\n        padding-right: 0.625rem; }\n        @media screen and (min-width: 40em) {\n          .nv-facilities .nv-facilities-row .nv-facilities--item .nv-facilities--item-image {\n            padding-left: 0.9375rem;\n            padding-right: 0.9375rem; } }\n        .nv-facilities .nv-facilities-row .nv-facilities--item .nv-facilities--item-image:last-child:not(:first-child) {\n          float: right; }\n        .nv-facilities .nv-facilities-row .nv-facilities--item .nv-facilities--item-image img {\n          max-height: 65px; }\n      .nv-facilities .nv-facilities-row .nv-facilities--item .nv-facilities--item-text {\n        width: 75%;\n        float: left;\n        padding-left: 0.625rem;\n        padding-right: 0.625rem; }\n        @media screen and (min-width: 40em) {\n          .nv-facilities .nv-facilities-row .nv-facilities--item .nv-facilities--item-text {\n            padding-left: 0.9375rem;\n            padding-right: 0.9375rem; } }\n        .nv-facilities .nv-facilities-row .nv-facilities--item .nv-facilities--item-text:last-child:not(:first-child) {\n          float: right; }\n\n.nv-main__page-for-participants {\n  height: inherit;\n  padding: 50px 30px;\n  background-color: #8cb1cc; }\n\n.nv-for-participants-facilities .nv-for-participants-facilities-row {\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto; }\n  .nv-for-participants-facilities .nv-for-participants-facilities-row::before, .nv-for-participants-facilities .nv-for-participants-facilities-row::after {\n    content: ' ';\n    display: table; }\n  .nv-for-participants-facilities .nv-for-participants-facilities-row::after {\n    clear: both; }\n  .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item {\n    width: 50%;\n    float: left;\n    padding-left: 0.625rem;\n    padding-right: 0.625rem; }\n    @media screen and (min-width: 40em) {\n      .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item {\n        padding-left: 0.9375rem;\n        padding-right: 0.9375rem; } }\n    .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item:last-child:not(:first-child) {\n      float: right; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item {\n        width: 100%;\n        float: left;\n        padding-left: 0.625rem;\n        padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n    @media screen and (max-width: 63.9375em) {\n        .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item:last-child:not(:first-child) {\n          float: right; } }\n    .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item img {\n      width: 40%;\n      float: left; }\n      .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item img:last-child:not(:first-child) {\n        float: right; }\n      @media screen and (max-width: 40em) {\n        .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item img {\n          width: 100%;\n          float: left; }\n          .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item img:last-child:not(:first-child) {\n            float: right; } }\n    .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item .nv-for-participants-facilities--item--descr {\n      width: 60%;\n      float: left;\n      text-align: right;\n      position: relative; }\n      .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item .nv-for-participants-facilities--item--descr:last-child:not(:first-child) {\n        float: right; }\n      @media screen and (max-width: 40em) {\n        .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item .nv-for-participants-facilities--item--descr {\n          width: 100%;\n          float: left;\n          text-align: center; }\n          .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item .nv-for-participants-facilities--item--descr:last-child:not(:first-child) {\n            float: right; } }\n      .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item .nv-for-participants-facilities--item--descr h5 {\n        font-size: 1rem;\n        color: white;\n        position: absolute;\n        width: 150%;\n        right: 0;\n        top: 0; }\n        @media screen and (max-width: 40em) {\n          .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item .nv-for-participants-facilities--item--descr h5 {\n            width: 100%;\n            float: left;\n            text-align: center;\n            position: relative;\n            width: 100%; }\n            .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item .nv-for-participants-facilities--item--descr h5:last-child:not(:first-child) {\n              float: right; } }\n      .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item .nv-for-participants-facilities--item--descr ul {\n        margin-top: 30px; }\n        .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item .nv-for-participants-facilities--item--descr ul li {\n          list-style: none;\n          color: white;\n          margin-right: 20px;\n          font-size: 0.9rem;\n          line-height: 1.1;\n          margin-bottom: 10px;\n          position: relative;\n          margin-left: 0; }\n          @media screen and (max-width: 40em) {\n            .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item .nv-for-participants-facilities--item--descr ul li {\n              text-align: right;\n              margin-left: 0 !important;\n              float: none !important;\n              position: relative;\n              right: 30px; } }\n          .nv-for-participants-facilities .nv-for-participants-facilities-row .nv-for-participants-facilities--item .nv-for-participants-facilities--item--descr ul li:after {\n            content: '';\n            position: absolute;\n            right: -35px;\n            top: 5%;\n            background-image: url(" + __webpack_require__(317) + ");\n            width: 25px;\n            height: 20px;\n            background-size: 25px 20px;\n            background-repeat: no-repeat; }\n\n.nv-for-participants-section-title {\n  text-align: center;\n  font-size: 1.5rem;\n  color: black;\n  background-color: #d9e0ea;\n  text-transform: uppercase;\n  padding: 20px; }\n\n.nv-conditions {\n  background-color: #e6b942;\n  padding: 20px 5px; }\n  .nv-conditions .nv-conditions-descr {\n    max-width: 75rem;\n    margin-left: auto;\n    margin-right: auto; }\n    .nv-conditions .nv-conditions-descr::before, .nv-conditions .nv-conditions-descr::after {\n      content: ' ';\n      display: table; }\n    .nv-conditions .nv-conditions-descr::after {\n      clear: both; }\n    .nv-conditions .nv-conditions-descr .nv-conditions-descr--item {\n      text-align: center;\n      width: 28%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; }\n      .nv-conditions .nv-conditions-descr .nv-conditions-descr--item img {\n        height: 200px; }\n        @media screen and (max-width: 63.9375em) {\n          .nv-conditions .nv-conditions-descr .nv-conditions-descr--item img {\n            height: 120px; } }\n        @media screen and (max-width: 40em) {\n          .nv-conditions .nv-conditions-descr .nv-conditions-descr--item img {\n            height: 200px;\n            margin-bottom: 20px; } }\n      @media screen and (min-width: 40em) {\n        .nv-conditions .nv-conditions-descr .nv-conditions-descr--item {\n          padding-left: 0.9375rem;\n          padding-right: 0.9375rem; } }\n      .nv-conditions .nv-conditions-descr .nv-conditions-descr--item:last-child:not(:first-child) {\n        float: right; }\n      .nv-conditions .nv-conditions-descr .nv-conditions-descr--item .nv-conditions-descr--item-text {\n        color: black;\n        font-size: 1.4rem;\n        text-transform: uppercase; }\n        @media screen and (max-width: 63.9375em) {\n          .nv-conditions .nv-conditions-descr .nv-conditions-descr--item .nv-conditions-descr--item-text {\n            font-size: 1.2rem; } }\n      @media screen and (max-width: 40em) {\n        .nv-conditions .nv-conditions-descr .nv-conditions-descr--item {\n          width: 100%;\n          float: left;\n          padding-left: 0.625rem;\n          padding-right: 0.625rem; } }\n  @media screen and (max-width: 40em) and (min-width: 40em) {\n    .nv-conditions .nv-conditions-descr .nv-conditions-descr--item {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n      @media screen and (max-width: 40em) {\n          .nv-conditions .nv-conditions-descr .nv-conditions-descr--item:last-child:not(:first-child) {\n            float: right; } }\n    .nv-conditions .nv-conditions-descr .nv-conditions-descr--arrow {\n      width: 8%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem;\n      position: relative;\n      padding-top: 50px;\n      text-align: center; }\n      @media screen and (min-width: 40em) {\n        .nv-conditions .nv-conditions-descr .nv-conditions-descr--arrow {\n          padding-left: 0.9375rem;\n          padding-right: 0.9375rem; } }\n      .nv-conditions .nv-conditions-descr .nv-conditions-descr--arrow:last-child:not(:first-child) {\n        float: right; }\n      @media screen and (max-width: 40em) {\n        .nv-conditions .nv-conditions-descr .nv-conditions-descr--arrow {\n          width: 100%;\n          float: left;\n          padding-left: 0.625rem;\n          padding-right: 0.625rem; } }\n  @media screen and (max-width: 40em) and (min-width: 40em) {\n    .nv-conditions .nv-conditions-descr .nv-conditions-descr--arrow {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n      @media screen and (max-width: 40em) {\n          .nv-conditions .nv-conditions-descr .nv-conditions-descr--arrow:last-child:not(:first-child) {\n            float: right; } }\n      .nv-conditions .nv-conditions-descr .nv-conditions-descr--arrow img {\n        display: inline-block;\n        vertical-align: middle;\n        -webkit-transform: scaleX(-1);\n            -ms-transform: scaleX(-1);\n                transform: scaleX(-1); }\n        @media screen and (max-width: 40em) {\n          .nv-conditions .nv-conditions-descr .nv-conditions-descr--arrow img {\n            -webkit-transform: scaleX(-1) rotateZ(-90deg);\n                -ms-transform: scaleX(-1) rotate(-90deg);\n                    transform: scaleX(-1) rotateZ(-90deg); } }\n\n.nv-steps {\n  padding: 50px;\n  padding-left: 130px;\n  padding-bottom: 20px; }\n  @media screen and (max-width: 40em) {\n    .nv-steps {\n      padding-left: 50px; } }\n  .nv-steps ol {\n    max-width: 75rem;\n    margin-left: auto;\n    margin-right: auto; }\n    .nv-steps ol::before, .nv-steps ol::after {\n      content: ' ';\n      display: table; }\n    .nv-steps ol::after {\n      clear: both; }\n    .nv-steps ol li {\n      width: 33.33333%;\n      float: left;\n      padding-bottom: 10px;\n      padding-right: 5rem !important;\n      padding-left: 0 !important;\n      color: #ee3638; }\n      .nv-steps ol li:last-child:not(:first-child) {\n        float: right; }\n      .nv-steps ol li span {\n        color: #777; }\n      @media screen and (max-width: 40em) {\n        .nv-steps ol li {\n          width: 100%;\n          float: left;\n          padding-left: 0.625rem;\n          padding-right: 0.625rem;\n          padding-right: 0 !important; } }\n  @media screen and (max-width: 40em) and (min-width: 40em) {\n    .nv-steps ol li {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n      @media screen and (max-width: 40em) {\n          .nv-steps ol li:last-child:not(:first-child) {\n            float: right; } }\n\n.nv-main__page-about {\n  height: inherit;\n  padding: 20px;\n  background-color: #8cb1cc; }\n\n.nv-about .nv-about-hands {\n  width: 45%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  margin: 20px auto;\n  text-align: center; }\n  @media screen and (min-width: 40em) {\n    .nv-about .nv-about-hands {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-about .nv-about-hands:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-about .nv-about-hands {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-about .nv-about-hands {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-about .nv-about-hands:last-child:not(:first-child) {\n        float: right; } }\n  .nv-about .nv-about-hands img {\n    margin: 0 auto;\n    margin-top: 30px; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-about .nv-about-hands img {\n        margin-left: 7px; } }\n  .nv-about .nv-about-hands .nv-about-hands--link {\n    background-color: #e6b942;\n    color: black;\n    text-align: center;\n    text-transform: uppercase;\n    display: inline-block;\n    padding: 5px 10px;\n    border-radius: 17px; }\n\n.nv-about .nv-about-descr {\n  width: 55%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  padding-top: 50px;\n  padding-bottom: 50px; }\n  @media screen and (min-width: 40em) {\n    .nv-about .nv-about-descr {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-about .nv-about-descr:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-about .nv-about-descr {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-about .nv-about-descr {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-about .nv-about-descr:last-child:not(:first-child) {\n        float: right; } }\n  .nv-about .nv-about-descr .nv-about-descr--line1 {\n    font-size: 1.2rem;\n    color: #5b7b94;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom: -30px; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-about .nv-about-descr .nv-about-descr--line1 {\n        text-align: center; } }\n    .nv-about .nv-about-descr .nv-about-descr--line1:after {\n      content: \"\";\n      width: 100%;\n      display: inline-block; }\n  .nv-about .nv-about-descr .nv-about-descr--line2 {\n    font-size: 2.5rem;\n    color: #436179;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom: -50px; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-about .nv-about-descr .nv-about-descr--line2 {\n        text-align: center; } }\n    .nv-about .nv-about-descr .nv-about-descr--line2:after {\n      content: \"\";\n      width: 100%;\n      display: inline-block; }\n  .nv-about .nv-about-descr .nv-about-descr--text {\n    color: white;\n    text-align: justify; }\n    .nv-about .nv-about-descr .nv-about-descr--text p {\n      line-height: 1.4; }\n  .nv-about .nv-about-descr .nv-about-descr--line3 {\n    font-size: 1.3rem;\n    color: #5b7b94;\n    margin-top: 3px;\n    text-transform: uppercase;\n    text-align: center;\n    margin-bottom: -30px; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-about .nv-about-descr .nv-about-descr--line3 {\n        text-align: center; } }\n    .nv-about .nv-about-descr .nv-about-descr--line3:after {\n      content: \"\";\n      width: 100%;\n      display: inline-block; }\n  .nv-about .nv-about-descr .nv-about-descr--directions {\n    margin-top: 23px; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-about .nv-about-descr .nv-about-descr--directions {\n        margin-left: -15px;\n        margin-right: -15px; } }\n    .nv-about .nv-about-descr .nv-about-descr--directions .nv-about-descr--direction {\n      width: 33.33333%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem;\n      padding-left: 0;\n      padding-right: 0; }\n      @media screen and (min-width: 40em) {\n        .nv-about .nv-about-descr .nv-about-descr--directions .nv-about-descr--direction {\n          padding-left: 0.9375rem;\n          padding-right: 0.9375rem; } }\n      .nv-about .nv-about-descr .nv-about-descr--directions .nv-about-descr--direction:last-child:not(:first-child) {\n        float: right; }\n      @media screen and (max-width: 63.9375em) {\n        .nv-about .nv-about-descr .nv-about-descr--directions .nv-about-descr--direction {\n          margin-bottom: 10px; } }\n      .nv-about .nv-about-descr .nv-about-descr--directions .nv-about-descr--direction img {\n        margin: 0 auto;\n        display: block; }\n      .nv-about .nv-about-descr .nv-about-descr--directions .nv-about-descr--direction .nv-about-descr--direction-text {\n        margin-top: 13px;\n        text-align: center;\n        line-height: 1;\n        font-size: 0.8rem;\n        display: inline-block; }\n\n.nv-main__page-review {\n  height: inherit;\n  background-color: #d4dbe4; }\n\n.nv-page-reviews {\n  height: inherit;\n  background-color: #d4dbe4;\n  min-height: 4800px; }\n\n.nv-page-review {\n  padding: 30px 10%; }\n\n.nv-page-review--header {\n  font-size: 1.8rem;\n  text-align: center;\n  color: #414040;\n  text-shadow: 1px 1px 1px #aaa; }\n\n.nv-page-review--dates {\n  font-size: 1.3rem;\n  color: red;\n  text-align: center; }\n\n.nv-page-review--descr-key {\n  color: #0a0a0a; }\n\n.nv-page-review--descr-value a {\n  color: red; }\n  .nv-page-review--descr-value a.nv-text-gray {\n    color: #777; }\n\n.nv-page-review--text {\n  padding-top: 30px; }\n  .nv-page-review--text img {\n    margin: 10px auto;\n    display: block;\n    margin-top: 30px; }\n  @media screen and (max-width: 40em) {\n    .nv-page-review--text figure {\n      margin-left: 20px;\n      margin-right: 20px; } }\n  .nv-page-review--text figcaption {\n    text-align: center; }\n\n.nv-review-rating {\n  text-align: center; }\n  .nv-review-rating img {\n    display: inline-block; }\n  .nv-review-rating .nv-review-rating--caption {\n    padding-top: 22px; }\n\n.nv-review-viewed {\n  background-color: #e99323;\n  width: 100%;\n  padding: 20px;\n  margin: 10px 0;\n  color: #0a0a0a;\n  font-size: 1.2rem;\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto; }\n  .nv-review-viewed::before, .nv-review-viewed::after {\n    content: ' ';\n    display: table; }\n  .nv-review-viewed::after {\n    clear: both; }\n  .nv-review-viewed .nv-review-viewed--who {\n    width: 80%;\n    float: left;\n    padding-left: 0.625rem;\n    padding-right: 0.625rem; }\n    @media screen and (min-width: 40em) {\n      .nv-review-viewed .nv-review-viewed--who {\n        padding-left: 0.9375rem;\n        padding-right: 0.9375rem; } }\n    .nv-review-viewed .nv-review-viewed--who:last-child:not(:first-child) {\n      float: right; }\n  .nv-review-viewed .nv-review-viewed--count {\n    width: 20%;\n    float: left;\n    padding-left: 0.625rem;\n    padding-right: 0.625rem;\n    text-align: right; }\n    @media screen and (min-width: 40em) {\n      .nv-review-viewed .nv-review-viewed--count {\n        padding-left: 0.9375rem;\n        padding-right: 0.9375rem; } }\n    .nv-review-viewed .nv-review-viewed--count:last-child:not(:first-child) {\n      float: right; }\n\n.rexpo_more_reviews {\n  float: right;\n  background: url(" + __webpack_require__(318) + ") no-repeat;\n  width: 174px;\n  height: 35px;\n  margin-right: 10px; }\n\n.rexpo_more_standalone a {\n  float: right;\n  background: url(" + __webpack_require__(319) + ") no-repeat;\n  width: 174px;\n  height: 35px;\n  margin-right: 10px; }\n\n.paging {\n  margin-top: 15px;\n  margin-bottom: 10px; }\n\n.paging ul {\n  list-style-type: none;\n  text-align: center; }\n\n.paging li {\n  display: inline;\n  background: 0 !important;\n  padding: 0 5px !important;\n  color: #515253;\n  text-align: center;\n  font-size: 11px !important; }\n\n.paging li a {\n  font-weight: bold;\n  color: #707070; }\n\n/* .paging li a:visited { color: #b3b2b2; } */\n.paging li.paging_title {\n  font-weight: bold;\n  text-align: left; }\n\n.paging li.paging_currentpage {\n  font-weight: bold;\n  color: #000000 !important; }\n\n.paging_next {\n  float: right;\n  padding: 7px 10px; }\n\n.paging_next a {\n  display: block;\n  width: 16px;\n  height: 32px;\n  background: url(" + __webpack_require__(320) + ") no-repeat; }\n\n.paging_next strong {\n  display: block;\n  width: 7px;\n  height: 7px;\n  background: url(" + __webpack_require__(321) + ") no-repeat; }\n\n.paging_next span {\n  display: none; }\n\n.paging_previous {\n  float: left;\n  padding: 7px 10px; }\n\n.paging_previous a {\n  display: block;\n  width: 16px;\n  height: 32px;\n  background: url(" + __webpack_require__(322) + ") no-repeat; }\n\n.paging_previous strong {\n  display: block;\n  width: 7px;\n  height: 7px;\n  background: url(" + __webpack_require__(323) + ") no-repeat; }\n\n.paging_previous span {\n  display: none; }\n\n.nv-main__page-contacts {\n  height: inherit;\n  padding: 0 20px 20px 20px;\n  background-color: #8cb1cc; }\n\n.nv-contacts-map {\n  width: 100%;\n  height: 610px;\n  margin-bottom: 50px;\n  padding: 0; }\n  .nv-contacts-map #map {\n    height: inherit;\n    margin: 0 -20px; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-contacts-map {\n      height: 300px; } }\n\n.nv-contacts {\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto; }\n  .nv-contacts::before, .nv-contacts::after {\n    content: ' ';\n    display: table; }\n  .nv-contacts::after {\n    clear: both; }\n\n.nv-contacts--address {\n  width: 60%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  @media screen and (min-width: 40em) {\n    .nv-contacts--address {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-contacts--address:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-contacts--address {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-contacts--address {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-contacts--address:last-child:not(:first-child) {\n        float: right; } }\n\n.nv-contacts--address-line {\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  position: relative; }\n  .nv-contacts--address-line::before, .nv-contacts--address-line::after {\n    content: ' ';\n    display: table; }\n  .nv-contacts--address-line::after {\n    clear: both; }\n\n.nv-contacts--address-line--image {\n  width: 12.5%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  @media screen and (min-width: 40em) {\n    .nv-contacts--address-line--image {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-contacts--address-line--image:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 37.5em) {\n    .nv-contacts--address-line--image {\n      width: 25%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 37.5em) and (min-width: 40em) {\n    .nv-contacts--address-line--image {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 37.5em) {\n      .nv-contacts--address-line--image:last-child:not(:first-child) {\n        float: right; } }\n\n.nv-contacts--address-line--text {\n  height: 100%;\n  font-size: 0.8rem;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: white;\n  width: 87.5%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  .nv-contacts--address-line--text a {\n    color: white;\n    transition: 0.3s; }\n    .nv-contacts--address-line--text a:hover {\n      transition: 0.2s;\n      color: #881f0e; }\n  @media screen and (min-width: 40em) {\n    .nv-contacts--address-line--text {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-contacts--address-line--text:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 37.5em) {\n    .nv-contacts--address-line--text {\n      width: 75%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 37.5em) and (min-width: 40em) {\n    .nv-contacts--address-line--text {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 37.5em) {\n      .nv-contacts--address-line--text:last-child:not(:first-child) {\n        float: right; } }\n\n.nv-contacts--feedback {\n  width: 40%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  @media screen and (min-width: 40em) {\n    .nv-contacts--feedback {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-contacts--feedback:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-contacts--feedback {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-contacts--feedback {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-contacts--feedback:last-child:not(:first-child) {\n        float: right; } }\n\n.nv-contacts--feedback--text {\n  font-size: 1.4rem;\n  text-transform: uppercase;\n  color: #667c95;\n  text-align: center;\n  line-height: 0.95; }\n  .nv-contacts--feedback--text:after {\n    content: \"\";\n    width: 100%;\n    display: inline-block; }\n\n.nv-contacts--feedback--submit {\n  display: inline-block;\n  text-align: center;\n  line-height: 1;\n  cursor: pointer;\n  -webkit-appearance: none;\n  transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  border-radius: 0;\n  padding: 0.85em 1em;\n  margin: 0 0 1rem 0;\n  font-size: 0.9rem;\n  background-color: #2199e8;\n  color: #fefefe;\n  display: block;\n  width: 100%;\n  margin-left: 0;\n  margin-right: 0;\n  background-color: #ddad46;\n  color: white;\n  color: black;\n  font-size: 1.3rem; }\n  [data-whatinput='mouse'] .nv-contacts--feedback--submit {\n    outline: 0; }\n  .nv-contacts--feedback--submit:hover, .nv-contacts--feedback--submit:focus {\n    background-color: #1583cc;\n    color: #fefefe; }\n\n.nv-main__page-stand {\n  height: inherit; }\n\n.nv-stand {\n  min-height: 600px;\n  position: relative;\n  background-color: #d18e36;\n  padding: 30px 20px 60px 20px;\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0 5px 25px 5px #b1b1b1;\n  /* margin-bottom: 20px; */\n  z-index: 10; }\n  .nv-stand::before, .nv-stand::after {\n    content: ' ';\n    display: table; }\n  .nv-stand::after {\n    clear: both; }\n\n.nv-stand-container {\n  display: inline-block;\n  width: 100%; }\n\n/* STAND INFO*/\n.nv-stand--info {\n  position: relative;\n  z-index: 10;\n  width: 33.33333%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  color: white; }\n  @media screen and (min-width: 40em) {\n    .nv-stand--info {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-stand--info:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-stand--info {\n      width: 50%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-stand--info {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-stand--info:last-child:not(:first-child) {\n        float: right; } }\n  @media screen and (max-width: 39.9375em) {\n    .nv-stand--info {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 39.9375em) and (min-width: 40em) {\n    .nv-stand--info {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 39.9375em) {\n      .nv-stand--info:last-child:not(:first-child) {\n        float: right; } }\n\n.nv-stand--info-title {\n  letter-spacing: 2.5px; }\n\n.nv-stand--info-descr {\n  letter-spacing: 1px; }\n\n.nv-stand--info-contacts {\n  margin-top: 30px;\n  letter-spacing: 1.5px;\n  color: white; }\n  .nv-stand--info-contacts strong {\n    color: black; }\n\n.nv-stand--info-contacts--phone {\n  margin: 5px 0; }\n  @media screen and (max-width: 39.9375em) {\n    .nv-stand--info-contacts--phone {\n      font-size: 0.8rem; } }\n\n.nv-stand--info-contacts--email {\n  margin-top: 20px;\n  color: white;\n  display: inline-block;\n  padding-right: 50px;\n  font-size: 0.9rem; }\n  @media screen and (max-width: 39.9375em) {\n    .nv-stand--info-contacts--email {\n      font-size: 0.8rem; } }\n\n.nv-stand--info-contacts--web {\n  color: white;\n  display: inline-block; }\n\n.nv-stand--info-contacts--address {\n  margin-top: 30px;\n  padding-right: 50px;\n  font-size: 0.9rem; }\n\n/* USER PROFILE */\n.nv-stand--user {\n  position: relative;\n  z-index: 10;\n  width: 16.66667%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  @media screen and (min-width: 40em) {\n    .nv-stand--user {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-stand--user:last-child:not(:first-child) {\n    float: right; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-stand--user {\n      width: 33.33333%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-stand--user {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 63.9375em) {\n      .nv-stand--user:last-child:not(:first-child) {\n        float: right; } }\n  @media screen and (max-width: 39.9375em) {\n    .nv-stand--user {\n      width: 100%;\n      float: left;\n      padding-left: 0.625rem;\n      padding-right: 0.625rem; } }\n  @media screen and (max-width: 39.9375em) and (min-width: 40em) {\n    .nv-stand--user {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  @media screen and (max-width: 39.9375em) {\n      .nv-stand--user:last-child:not(:first-child) {\n        float: right; } }\n\n.nv-stand--user-status {\n  color: white;\n  text-align: center; }\n\n.nv-stand--user-pic {\n  display: block;\n  text-align: center; }\n\n.nv-stand--user-name {\n  letter-spacing: 1.5px;\n  color: white;\n  text-align: center; }\n\n.nv-stand--user-position {\n  margin-top: 10px;\n  text-align: center;\n  color: white;\n  font-size: 0.8rem;\n  letter-spacing: 1.5px; }\n  .nv-stand--user-position strong {\n    color: black; }\n\n.nv-stand--user-icons {\n  margin-top: 20px; }\n\n.nv-stand--user-icons--icon {\n  width: 50%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n  text-align: center;\n  height: 50px;\n  margin-bottom: 30px;\n  position: relative; }\n  @media screen and (min-width: 40em) {\n    .nv-stand--user-icons--icon {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .nv-stand--user-icons--icon:last-child:not(:first-child) {\n    float: right; }\n  .nv-stand--user-icons--icon a {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n    .nv-stand--user-icons--icon a:hover {\n      -webkit-transform: translate(-50%, -50%) scale(1.15);\n          -ms-transform: translate(-50%, -50%) scale(1.15);\n              transform: translate(-50%, -50%) scale(1.15); }\n\n/* MAIN STAND BLOCK*/\n.nv-stand--main {\n  margin: -400px auto 50px 0;\n  position: relative;\n  height: 500px; }\n  @media screen and (max-width: 63.9375em) {\n    .nv-stand--main {\n      margin: 80px auto 50px auto; } }\n  @media screen and (max-width: 39.9375em) {\n    .nv-stand--main {\n      margin: 10px auto 50px auto; } }\n  @media screen and (max-width: 63.9375em) {\n    .nv-stand--main {\n      height: 1250px; } }\n\n.nv-stand--main-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n  @media screen and (max-width: 63.9375em) {\n    .nv-stand--main-container {\n      width: 100%; } }\n  .nv-stand--main-container img {\n    max-width: none; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-stand--main-container img {\n        width: 100%; } }\n  .nv-stand--main-container::after {\n    position: absolute;\n    content: '';\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    background-image: linear-gradient(to bottom, transparent, #d18e36); }\n\n.nv-stand--main-logo {\n  position: absolute;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain; }\n  .nv-stand--main__stand-1 .nv-stand--main-logo {\n    left: 27.2%;\n    top: 1%;\n    height: 27.5%;\n    width: 44.2%; }\n  .nv-stand--main__stand-0 .nv-stand--main-logo {\n    left: 28.1%;\n    top: 1.2%;\n    height: 27.2%;\n    width: 45.5%; }\n  .nv-stand--main__stand-2 .nv-stand--main-logo {\n    left: 26.9%;\n    top: 1.2%;\n    height: 27.2%;\n    width: 42.9%; }\n\n.nv-stand--main-users {\n  text-align: center;\n  margin-top: -30%; }\n  .nv-stand--main-users a {\n    display: inline-block;\n    border: 2px solid white;\n    margin: 0 2px;\n    width: 110px;\n    height: 110px; }\n    .nv-stand--main-users a img {\n      max-width: 100%; }\n\n.nv-stand--arrows {\n  position: relative;\n  z-index: 1; }\n  .nv-stand--arrows .nv-stand--arrows-left {\n    float: left;\n    width: 30%;\n    text-align: left; }\n  .nv-stand--arrows .nv-stand--arrows-right {\n    float: right;\n    width: 30%;\n    text-align: right; }\n\n.nv-stand--bottom {\n  position: absolute;\n  bottom: -100px;\n  width: 80%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n          transform: translateX(-50%); }\n  @media screen and (max-width: 63.9375em) {\n    .nv-stand--bottom {\n      bottom: -60px;\n      bottom: 80px; } }\n\n.nv-stand-description {\n  position: relative;\n  z-index: 5;\n  background-color: #fff; }\n  .nv-stand-description .nv-stand-description--tabs {\n    text-align: center;\n    margin: 0;\n    list-style-type: none;\n    background: #fefefe;\n    border: 1px solid #e6e6e6; }\n    .nv-stand-description .nv-stand-description--tabs::before, .nv-stand-description .nv-stand-description--tabs::after {\n      content: ' ';\n      display: table; }\n    .nv-stand-description .nv-stand-description--tabs::after {\n      clear: both; }\n    .nv-stand-description .nv-stand-description--tabs li.nv-stand-description--tabs-tab {\n      float: left;\n      text-transform: uppercase;\n      display: inline-block;\n      float: none;\n      clear: both; }\n      .nv-stand-description .nv-stand-description--tabs li.nv-stand-description--tabs-tab > a {\n        display: block;\n        padding: 1.25rem 1.5rem;\n        line-height: 1;\n        font-size: 0.75rem; }\n        .nv-stand-description .nv-stand-description--tabs li.nv-stand-description--tabs-tab > a:hover {\n          background: #fefefe; }\n        .nv-stand-description .nv-stand-description--tabs li.nv-stand-description--tabs-tab > a:focus, .nv-stand-description .nv-stand-description--tabs li.nv-stand-description--tabs-tab > a[aria-selected='true'] {\n          background: #e6e6e6; }\n      .nv-stand-description .nv-stand-description--tabs li.nv-stand-description--tabs-tab a {\n        color: #0a0a0a;\n        font-size: 1.2rem; }\n  .nv-stand-description .nv-stand-description--tabs-content {\n    background: #fefefe;\n    transition: all 0.5s ease;\n    border: 1px solid #e6e6e6;\n    border-top: 0; }\n    .nv-stand-description .nv-stand-description--tabs-content .nv-stand-description--tabs-panel {\n      display: none;\n      padding: 1rem;\n      padding: 50px 150px !important; }\n      .nv-stand-description .nv-stand-description--tabs-content .nv-stand-description--tabs-panel.is-active {\n        display: block; }\n      @media screen and (max-width: 63.9375em) {\n        .nv-stand-description .nv-stand-description--tabs-content .nv-stand-description--tabs-panel {\n          padding: 50px 45px !important; } }\n      @media screen and (max-width: 39.9375em) {\n        .nv-stand-description .nv-stand-description--tabs-content .nv-stand-description--tabs-panel {\n          padding: 50px 15px !important; } }\n\n.nv-stand-description--tabs-panel#standOffers .nv-stand-offer {\n  display: inline-block;\n  padding: 20px 0;\n  width: 100%; }\n  .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--image {\n    width: 20%;\n    float: left;\n    padding-left: 0.625rem;\n    padding-right: 0.625rem; }\n    @media screen and (min-width: 40em) {\n      .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--image {\n        padding-left: 0.9375rem;\n        padding-right: 0.9375rem; } }\n    .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--image:last-child:not(:first-child) {\n      float: right; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--image {\n        width: 30%;\n        float: left;\n        padding-left: 0.625rem;\n        padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--image {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n    @media screen and (max-width: 63.9375em) {\n        .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--image:last-child:not(:first-child) {\n          float: right; } }\n    @media screen and (max-width: 39.9375em) {\n      .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--image {\n        width: 100%;\n        float: left;\n        padding-left: 0.625rem;\n        padding-right: 0.625rem;\n        text-align: center; } }\n  @media screen and (max-width: 39.9375em) and (min-width: 40em) {\n    .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--image {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n    @media screen and (max-width: 39.9375em) {\n        .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--image:last-child:not(:first-child) {\n          float: right; } }\n    .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--image a {\n      display: inline-block; }\n  .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info {\n    width: 80%;\n    float: left;\n    padding-left: 0.625rem;\n    padding-right: 0.625rem; }\n    @media screen and (min-width: 40em) {\n      .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info {\n        padding-left: 0.9375rem;\n        padding-right: 0.9375rem; } }\n    .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info:last-child:not(:first-child) {\n      float: right; }\n    @media screen and (max-width: 63.9375em) {\n      .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info {\n        width: 70%;\n        float: left;\n        padding-left: 0.625rem;\n        padding-right: 0.625rem; } }\n  @media screen and (max-width: 63.9375em) and (min-width: 40em) {\n    .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n    @media screen and (max-width: 63.9375em) {\n        .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info:last-child:not(:first-child) {\n          float: right; } }\n    @media screen and (max-width: 39.9375em) {\n      .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info {\n        width: 100%;\n        float: left;\n        padding-left: 0.625rem;\n        padding-right: 0.625rem; } }\n  @media screen and (max-width: 39.9375em) and (min-width: 40em) {\n    .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n    @media screen and (max-width: 39.9375em) {\n        .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info:last-child:not(:first-child) {\n          float: right; } }\n    .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info a.nv-stand-offer--info-title {\n      color: orange;\n      text-decoration: underline; }\n    .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info a.nv-stand-offer--info-order {\n      display: inline-block;\n      margin-right: 30px;\n      color: white;\n      background-color: #b63c34;\n      padding: 4px 7px;\n      font-size: 0.9rem; }\n    .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info a.nv-stand-offer--info-link {\n      text-transform: lowercase;\n      display: inline-block;\n      font-size: 0.7rem;\n      color: #a9a9a9;\n      text-decoration: underline; }\n    .nv-stand-description--tabs-panel#standOffers .nv-stand-offer .nv-stand-offer--info .nv-stand-offer--info-price {\n      margin-top: 10px;\n      color: #1d6f96; }\n\n/* TOP SIDEBAR */\n.nv-menu-top-container {\n  position: fixed;\n  height: 40px;\n  width: 100%;\n  left: 0;\n  top: 0;\n  background-color: #b3b3b3;\n  z-index: 101; }\n\n.nv-menu-top {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding-top: 5px;\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto; }\n  .nv-menu-top::before, .nv-menu-top::after {\n    content: ' ';\n    display: table; }\n  .nv-menu-top::after {\n    clear: both; }\n  .nv-menu-top .nv-menu-top--left {\n    width: 33.33333%;\n    float: left;\n    padding-left: 0.46875rem;\n    padding-right: 0.46875rem; }\n    .nv-menu-top .nv-menu-top--left:last-child:not(:first-child) {\n      float: right; }\n    @media screen and (max-width: 39.9375em) {\n      .nv-menu-top .nv-menu-top--left {\n        width: 33.33333%;\n        float: left;\n        padding-left: 0.46875rem;\n        padding-right: 0.46875rem; }\n        .nv-menu-top .nv-menu-top--left:last-child:not(:first-child) {\n          float: right; } }\n  .nv-menu-top .nv-menu-top--search {\n    width: 33.33333%;\n    float: left;\n    padding-left: 0.46875rem;\n    padding-right: 0.46875rem;\n    margin-top: -5px; }\n    .nv-menu-top .nv-menu-top--search:last-child:not(:first-child) {\n      float: right; }\n    .nv-menu-top .nv-menu-top--search input {\n      background-color: #e0e0e0;\n      border: none;\n      text-align: center;\n      background-image: url(" + __webpack_require__(316) + ");\n      background-repeat: no-repeat;\n      background-position: 0px 6px; }\n    @media screen and (max-width: 39.9375em) {\n      .nv-menu-top .nv-menu-top--search {\n        width: 33.33333%;\n        float: left;\n        padding-left: 0.46875rem;\n        padding-right: 0.46875rem; }\n        .nv-menu-top .nv-menu-top--search:last-child:not(:first-child) {\n          float: right; } }\n  .nv-menu-top .nv-menu-top--right {\n    text-align: right;\n    width: 33.33333%;\n    float: left;\n    padding-left: 0.46875rem;\n    padding-right: 0.46875rem; }\n    .nv-menu-top .nv-menu-top--right:last-child:not(:first-child) {\n      float: right; }\n    @media screen and (max-width: 39.9375em) {\n      .nv-menu-top .nv-menu-top--right {\n        width: 33.33333%;\n        float: left;\n        padding-left: 0.46875rem;\n        padding-right: 0.46875rem; }\n        .nv-menu-top .nv-menu-top--right:last-child:not(:first-child) {\n          float: right; } }\n    .nv-menu-top .nv-menu-top--right .nv-menu-top--right-icon {\n      display: inline-block; }\n\n/* LEFT SIDEBAR */\n@-webkit-keyframes nav-toggle {\n  0% {\n    width: 300px; }\n  90% {\n    width: 300px; }\n  100% {\n    width: 70px; } }\n@keyframes nav-toggle {\n  0% {\n    width: 300px; }\n  90% {\n    width: 300px; }\n  100% {\n    width: 70px; } }\n\n.nv-sidebar-left {\n  position: fixed;\n  height: 100%;\n  width: 70px;\n  padding-top: 50px;\n  left: 0;\n  top: 0;\n  background-image: linear-gradient(to bottom, #b3b3b3 5%, #7c94a6);\n  z-index: 100;\n  transition: 0.3s; }\n  .nv-sidebar-left:before {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    top: 50px;\n    width: 70px;\n    height: 100%;\n    z-index: 11111; }\n  .nv-sidebar-left:hover:before {\n    left: -70px;\n    top: 50px;\n    -webkit-animation: nav-toggle 0.5s forwards ease;\n            animation: nav-toggle 0.5s forwards ease; }\n  @media screen and (max-width: 39.9375em) {\n    .nv-sidebar-left:after {\n      position: absolute;\n      content: \"\";\n      top: 100px;\n      right: -50px;\n      width: 50px;\n      height: 100px;\n      border-left: 50px solid #0c4d78;\n      border-right: 0px solid transparent;\n      border-top: 50px solid transparent;\n      border-bottom: 50px solid transparent;\n      opacity: 0.5;\n      z-index: 1111; } }\n  @media screen and (max-width: 39.9375em) {\n    .nv-sidebar-left {\n      left: -60px; } }\n  .nv-sidebar-left:hover {\n    transition: 0.2s;\n    width: 230px; }\n    @media screen and (max-width: 39.9375em) {\n      .nv-sidebar-left:hover {\n        left: 0px; } }\n\n.nv-sidebar-left--avatar {\n  width: 100%;\n  height: 100px; }\n\n.nv-sidebar-left--item {\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto;\n  white-space: nowrap;\n  display: block;\n  padding: 25px 0;\n  background-color: rgba(255, 255, 255, 0);\n  transition: 0.2s; }\n  .nv-sidebar-left--item::before, .nv-sidebar-left--item::after {\n    content: ' ';\n    display: table; }\n  .nv-sidebar-left--item::after {\n    clear: both; }\n  @media screen and (max-width: 43.75em) {\n    .nv-sidebar-left--item {\n      padding: 5px 0; } }\n  .nv-sidebar-left--item:hover {\n    transition: 0.2s;\n    background-color: rgba(255, 255, 255, 0.1); }\n\n.nv-sidebar-left--item_disabled {\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto;\n  white-space: nowrap;\n  display: block;\n  padding: 25px 0;\n  background-color: rgba(255, 255, 255, 0);\n  transition: 0.2s;\n  cursor: not-allowed; }\n  .nv-sidebar-left--item_disabled::before, .nv-sidebar-left--item_disabled::after {\n    content: ' ';\n    display: table; }\n  .nv-sidebar-left--item_disabled::after {\n    clear: both; }\n\n.nv-sidebar-left--item-icon {\n  padding: 0;\n  margin-left: 15px;\n  width: 40px;\n  display: inline-block; }\n  @media screen and (max-width: 43.75em) {\n    .nv-sidebar-left--item-icon {\n      margin-left: 20px;\n      width: 30px; } }\n\n.nv-sidebar-left--item-icon_disabled {\n  padding: 0;\n  margin-left: 15px;\n  width: 40px;\n  display: inline-block;\n  cursor: not-allowed;\n  opacity: 0.3; }\n\n.nv-sidebar-left--item-caption {\n  width: 130px;\n  padding: 5px 5px 5px 15px;\n  margin-right: 10px;\n  display: inline-block;\n  white-space: nowrap;\n  text-transform: uppercase;\n  color: white;\n  font-size: 0.92rem;\n  letter-spacing: 0.2rem; }\n\n.nv-sidebar-left--item-caption_disabled {\n  width: 130px;\n  padding: 5px 5px 5px 15px;\n  margin-right: 10px;\n  display: inline-block;\n  white-space: nowrap;\n  text-transform: lowercase;\n  color: #afbbc3;\n  font-size: 0.92rem;\n  letter-spacing: 0.2rem;\n  cursor: not-allowed; }\n", ""]);

	// exports


/***/ },

/***/ 305:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(305)();
	// imports


	// module
	exports.push([module.id, "/**\n * Owl Carousel v2.1.4\n * Copyright 2013-2016 David Deutsch\n * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)\n */\n/*\n *  Owl Carousel - Core\n */\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  /* position relative and z-index fix webkit rendering fonts issue */\n  position: relative;\n  z-index: 1; }\n  .owl-carousel .owl-stage {\n    position: relative;\n    -ms-touch-action: pan-Y; }\n  .owl-carousel .owl-stage:after {\n    content: \".\";\n    display: block;\n    clear: both;\n    visibility: hidden;\n    line-height: 0;\n    height: 0; }\n  .owl-carousel .owl-stage-outer {\n    position: relative;\n    overflow: hidden;\n    /* fix for flashing background */\n    -webkit-transform: translate3d(0px, 0px, 0px); }\n  .owl-carousel .owl-item {\n    position: relative;\n    min-height: 1px;\n    float: left;\n    -webkit-backface-visibility: hidden;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-touch-callout: none; }\n  .owl-carousel .owl-item img {\n    display: block;\n    width: 100%;\n    -webkit-transform-style: preserve-3d; }\n  .owl-carousel .owl-nav.disabled,\n  .owl-carousel .owl-dots.disabled {\n    display: none; }\n  .owl-carousel .owl-nav .owl-prev,\n  .owl-carousel .owl-nav .owl-next,\n  .owl-carousel .owl-dot {\n    cursor: pointer;\n    cursor: hand;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .owl-carousel.owl-loaded {\n    display: block; }\n  .owl-carousel.owl-loading {\n    opacity: 0;\n    display: block; }\n  .owl-carousel.owl-hidden {\n    opacity: 0; }\n  .owl-carousel.owl-refresh .owl-item {\n    display: none; }\n  .owl-carousel.owl-drag .owl-item {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .owl-carousel.owl-grab {\n    cursor: move;\n    cursor: grab; }\n  .owl-carousel.owl-rtl {\n    direction: rtl; }\n  .owl-carousel.owl-rtl .owl-item {\n    float: right; }\n\n/* No Js */\n.no-js .owl-carousel {\n  display: block; }\n\n/*\n *  Owl Carousel - Animate Plugin\n */\n.owl-carousel .animated {\n  animation-duration: 1000ms;\n  animation-fill-mode: both; }\n\n.owl-carousel .owl-animated-in {\n  z-index: 0; }\n\n.owl-carousel .owl-animated-out {\n  z-index: 1; }\n\n.owl-carousel .fadeOut {\n  animation-name: fadeOut; }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/*\n * \tOwl Carousel - Auto Height Plugin\n */\n.owl-height {\n  transition: height 500ms ease-in-out; }\n\n/*\n * \tOwl Carousel - Lazy Load Plugin\n */\n.owl-carousel .owl-item .owl-lazy {\n  opacity: 0;\n  transition: opacity 400ms ease; }\n\n.owl-carousel .owl-item img.owl-lazy {\n  transform-style: preserve-3d; }\n\n/*\n * \tOwl Carousel - Video Plugin\n */\n.owl-carousel .owl-video-wrapper {\n  position: relative;\n  height: 100%;\n  background: #000; }\n\n.owl-carousel .owl-video-play-icon {\n  position: absolute;\n  height: 80px;\n  width: 80px;\n  left: 50%;\n  top: 50%;\n  margin-left: -40px;\n  margin-top: -40px;\n  background: url(" + __webpack_require__(307) + ") no-repeat;\n  cursor: pointer;\n  z-index: 1;\n  -webkit-backface-visibility: hidden;\n  transition: transform 100ms ease; }\n\n.owl-carousel .owl-video-play-icon:hover {\n  -ms-transform: scale(1.3, 1.3);\n      transform: scale(1.3, 1.3); }\n\n.owl-carousel .owl-video-playing .owl-video-tn,\n.owl-carousel .owl-video-playing .owl-video-play-icon {\n  display: none; }\n\n.owl-carousel .owl-video-tn {\n  opacity: 0;\n  height: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: opacity 400ms ease; }\n\n.owl-carousel .owl-video-frame {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  width: 100%; }\n", ""]);

	// exports


/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "node_modules/owl.carousel/dist/assets/owl.video.play.png";

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(305)();
	// imports


	// module
	exports.push([module.id, "/*\r\n== malihu jquery custom scrollbar plugin ==\r\nPlugin URI: http://manos.malihu.gr/jquery-custom-content-scroller\r\n*/\r\n\r\n\r\n\r\n/*\r\nCONTENTS: \r\n\t1. BASIC STYLE - Plugin's basic/essential CSS properties (normally, should not be edited). \r\n\t2. VERTICAL SCROLLBAR - Positioning and dimensions of vertical scrollbar. \r\n\t3. HORIZONTAL SCROLLBAR - Positioning and dimensions of horizontal scrollbar.\r\n\t4. VERTICAL AND HORIZONTAL SCROLLBARS - Positioning and dimensions of 2-axis scrollbars. \r\n\t5. TRANSITIONS - CSS3 transitions for hover events, auto-expanded and auto-hidden scrollbars. \r\n\t6. SCROLLBAR COLORS, OPACITY AND BACKGROUNDS \r\n\t\t6.1 THEMES - Scrollbar colors, opacity, dimensions, backgrounds etc. via ready-to-use themes.\r\n*/\r\n\r\n\r\n\r\n/* \r\n------------------------------------------------------------------------------------------------------------------------\r\n1. BASIC STYLE  \r\n------------------------------------------------------------------------------------------------------------------------\r\n*/\r\n\r\n\t.mCustomScrollbar{ -ms-touch-action: pinch-zoom; touch-action: pinch-zoom; /* direct pointer events to js */ }\r\n\t.mCustomScrollbar.mCS_no_scrollbar, .mCustomScrollbar.mCS_touch_action{ -ms-touch-action: auto; touch-action: auto; }\r\n\t\r\n\t.mCustomScrollBox{ /* contains plugin's markup */\r\n\t\tposition: relative;\r\n\t\toverflow: hidden;\r\n\t\theight: 100%;\r\n\t\tmax-width: 100%;\r\n\t\toutline: none;\r\n\t\tdirection: ltr;\r\n\t}\r\n\r\n\t.mCSB_container{ /* contains the original content */\r\n\t\toverflow: hidden;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t}\r\n\r\n\r\n\r\n/* \r\n------------------------------------------------------------------------------------------------------------------------\r\n2. VERTICAL SCROLLBAR \r\ny-axis\r\n------------------------------------------------------------------------------------------------------------------------\r\n*/\r\n\r\n\t.mCSB_inside > .mCSB_container{ margin-right: 30px; }\r\n\r\n\t.mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden{ margin-right: 0; } /* non-visible scrollbar */\r\n\t\r\n\t.mCS-dir-rtl > .mCSB_inside > .mCSB_container{ /* RTL direction/left-side scrollbar */\r\n\t\tmargin-right: 0;\r\n\t\tmargin-left: 30px;\r\n\t}\r\n\t\r\n\t.mCS-dir-rtl > .mCSB_inside > .mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden{ margin-left: 0; } /* RTL direction/left-side scrollbar */\r\n\r\n\t.mCSB_scrollTools{ /* contains scrollbar markup (draggable element, dragger rail, buttons etc.) */\r\n\t\tposition: absolute;\r\n\t\twidth: 16px;\r\n\t\theight: auto;\r\n\t\tleft: auto;\r\n\t\ttop: 0;\r\n\t\tright: 0;\r\n\t\tbottom: 0;\r\n\t}\r\n\r\n\t.mCSB_outside + .mCSB_scrollTools{ right: -26px; } /* scrollbar position: outside */\r\n\t\r\n\t.mCS-dir-rtl > .mCSB_inside > .mCSB_scrollTools, \r\n\t.mCS-dir-rtl > .mCSB_outside + .mCSB_scrollTools{ /* RTL direction/left-side scrollbar */\r\n\t\tright: auto;\r\n\t\tleft: 0;\r\n\t}\r\n\t\r\n\t.mCS-dir-rtl > .mCSB_outside + .mCSB_scrollTools{ left: -26px; } /* RTL direction/left-side scrollbar (scrollbar position: outside) */\r\n\r\n\t.mCSB_scrollTools .mCSB_draggerContainer{ /* contains the draggable element and dragger rail markup */\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tbottom: 0;\r\n\t\tright: 0; \r\n\t\theight: auto;\r\n\t}\r\n\r\n\t.mCSB_scrollTools a + .mCSB_draggerContainer{ margin: 20px 0; }\r\n\r\n\t.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\twidth: 2px;\r\n\t\theight: 100%;\r\n\t\tmargin: 0 auto;\r\n\t\t-webkit-border-radius: 16px; -moz-border-radius: 16px; border-radius: 16px;\r\n\t}\r\n\r\n\t.mCSB_scrollTools .mCSB_dragger{ /* the draggable element */\r\n\t\tcursor: pointer;\r\n\t\twidth: 100%;\r\n\t\theight: 30px; /* minimum dragger height */\r\n\t\tz-index: 1;\r\n\t}\r\n\r\n\t.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ /* the dragger element */\r\n\t\tposition: relative;\r\n\t\twidth: 4px;\r\n\t\theight: 100%;\r\n\t\tmargin: 0 auto;\r\n\t\t-webkit-border-radius: 16px; -moz-border-radius: 16px; border-radius: 16px;\r\n\t\ttext-align: center;\r\n\t}\r\n\t\r\n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \r\n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{ width: 12px; /* auto-expanded scrollbar */ }\r\n\t\r\n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \r\n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{ width: 8px; /* auto-expanded scrollbar */ }\r\n\r\n\t.mCSB_scrollTools .mCSB_buttonUp,\r\n\t.mCSB_scrollTools .mCSB_buttonDown{\r\n\t\tdisplay: block;\r\n\t\tposition: absolute;\r\n\t\theight: 20px;\r\n\t\twidth: 100%;\r\n\t\toverflow: hidden;\r\n\t\tmargin: 0 auto;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.mCSB_scrollTools .mCSB_buttonDown{ bottom: 0; }\r\n\r\n\r\n\r\n/* \r\n------------------------------------------------------------------------------------------------------------------------\r\n3. HORIZONTAL SCROLLBAR \r\nx-axis\r\n------------------------------------------------------------------------------------------------------------------------\r\n*/\r\n\r\n\t.mCSB_horizontal.mCSB_inside > .mCSB_container{\r\n\t\tmargin-right: 0;\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t\r\n\t.mCSB_horizontal.mCSB_outside > .mCSB_container{ min-height: 100%; }\r\n\r\n\t.mCSB_horizontal > .mCSB_container.mCS_no_scrollbar_x.mCS_x_hidden{ margin-bottom: 0; } /* non-visible scrollbar */\r\n\r\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal{\r\n\t\twidth: auto;\r\n\t\theight: 16px;\r\n\t\ttop: auto;\r\n\t\tright: 0;\r\n\t\tbottom: 0;\r\n\t\tleft: 0;\r\n\t}\r\n\r\n\t.mCustomScrollBox + .mCSB_scrollTools.mCSB_scrollTools_horizontal,\r\n\t.mCustomScrollBox + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal{ bottom: -26px; } /* scrollbar position: outside */\r\n\r\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal a + .mCSB_draggerContainer{ margin: 0 20px; }\r\n\r\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_draggerRail{\r\n\t\twidth: 100%;\r\n\t\theight: 2px;\r\n\t\tmargin: 7px 0;\r\n\t}\r\n\r\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger{\r\n\t\twidth: 30px; /* minimum dragger width */\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t}\r\n\r\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\r\n\t\twidth: 100%;\r\n\t\theight: 4px;\r\n\t\tmargin: 6px auto;\r\n\t}\r\n\t\r\n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \r\n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{\r\n\t\theight: 12px; /* auto-expanded scrollbar */\r\n\t\tmargin: 2px auto;\r\n\t}\r\n\t\r\n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \r\n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{\r\n\t\theight: 8px; /* auto-expanded scrollbar */\r\n\t\tmargin: 4px 0;\r\n\t}\r\n\r\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft,\r\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight{\r\n\t\tdisplay: block;\r\n\t\tposition: absolute;\r\n\t\twidth: 20px;\r\n\t\theight: 100%;\r\n\t\toverflow: hidden;\r\n\t\tmargin: 0 auto;\r\n\t\tcursor: pointer;\r\n\t}\r\n\t\r\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft{ left: 0; }\r\n\r\n\t.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight{ right: 0; }\r\n\r\n\r\n\r\n/* \r\n------------------------------------------------------------------------------------------------------------------------\r\n4. VERTICAL AND HORIZONTAL SCROLLBARS \r\nyx-axis \r\n------------------------------------------------------------------------------------------------------------------------\r\n*/\r\n\r\n\t.mCSB_container_wrapper{\r\n\t\tposition: absolute;\r\n\t\theight: auto;\r\n\t\twidth: auto;\r\n\t\toverflow: hidden;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tright: 0;\r\n\t\tbottom: 0;\r\n\t\tmargin-right: 30px;\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t\r\n\t.mCSB_container_wrapper > .mCSB_container{\r\n\t\tpadding-right: 30px;\r\n\t\tpadding-bottom: 30px;\r\n\t\t-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;\r\n\t}\r\n\t\r\n\t.mCSB_vertical_horizontal > .mCSB_scrollTools.mCSB_scrollTools_vertical{ bottom: 20px; }\r\n\t\r\n\t.mCSB_vertical_horizontal > .mCSB_scrollTools.mCSB_scrollTools_horizontal{ right: 20px; }\r\n\t\r\n\t/* non-visible horizontal scrollbar */\r\n\t.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden + .mCSB_scrollTools.mCSB_scrollTools_vertical{ bottom: 0; }\r\n\t\r\n\t/* non-visible vertical scrollbar/RTL direction/left-side scrollbar */\r\n\t.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden + .mCSB_scrollTools ~ .mCSB_scrollTools.mCSB_scrollTools_horizontal, \r\n\t.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_scrollTools.mCSB_scrollTools_horizontal{ right: 0; }\r\n\t\r\n\t/* RTL direction/left-side scrollbar */\r\n\t.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_scrollTools.mCSB_scrollTools_horizontal{ left: 20px; }\r\n\t\r\n\t/* non-visible scrollbar/RTL direction/left-side scrollbar */\r\n\t.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden + .mCSB_scrollTools ~ .mCSB_scrollTools.mCSB_scrollTools_horizontal{ left: 0; }\r\n\t\r\n\t.mCS-dir-rtl > .mCSB_inside > .mCSB_container_wrapper{ /* RTL direction/left-side scrollbar */\r\n\t\tmargin-right: 0;\r\n\t\tmargin-left: 30px;\r\n\t}\r\n\t\r\n\t.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden > .mCSB_container{ padding-right: 0; }\r\n\t\r\n\t.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden > .mCSB_container{ padding-bottom: 0; }\r\n\t\r\n\t.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden{\r\n\t\tmargin-right: 0; /* non-visible scrollbar */\r\n\t\tmargin-left: 0;\r\n\t}\r\n\t\r\n\t/* non-visible horizontal scrollbar */\r\n\t.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden{ margin-bottom: 0; }\r\n\r\n\r\n\r\n/* \r\n------------------------------------------------------------------------------------------------------------------------\r\n5. TRANSITIONS  \r\n------------------------------------------------------------------------------------------------------------------------\r\n*/\r\n\r\n\t.mCSB_scrollTools, \r\n\t.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCSB_scrollTools .mCSB_buttonUp,\r\n\t.mCSB_scrollTools .mCSB_buttonDown,\r\n\t.mCSB_scrollTools .mCSB_buttonLeft,\r\n\t.mCSB_scrollTools .mCSB_buttonRight{\r\n\t\t-webkit-transition: opacity .2s ease-in-out, background-color .2s ease-in-out;\r\n\t\t-moz-transition: opacity .2s ease-in-out, background-color .2s ease-in-out;\r\n\t\t-o-transition: opacity .2s ease-in-out, background-color .2s ease-in-out;\r\n\t\ttransition: opacity .2s ease-in-out, background-color .2s ease-in-out;\r\n\t}\r\n\t\r\n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar, /* auto-expanded scrollbar */\r\n\t.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail, \r\n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar, \r\n\t.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail{\r\n\t\t-webkit-transition: width .2s ease-out .2s, height .2s ease-out .2s, \r\n\t\t\t\t\tmargin-left .2s ease-out .2s, margin-right .2s ease-out .2s, \r\n\t\t\t\t\tmargin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s,\r\n\t\t\t\t\topacity .2s ease-in-out, background-color .2s ease-in-out; \r\n\t\t-moz-transition: width .2s ease-out .2s, height .2s ease-out .2s, \r\n\t\t\t\t\tmargin-left .2s ease-out .2s, margin-right .2s ease-out .2s, \r\n\t\t\t\t\tmargin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s,\r\n\t\t\t\t\topacity .2s ease-in-out, background-color .2s ease-in-out; \r\n\t\t-o-transition: width .2s ease-out .2s, height .2s ease-out .2s, \r\n\t\t\t\t\tmargin-left .2s ease-out .2s, margin-right .2s ease-out .2s, \r\n\t\t\t\t\tmargin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s,\r\n\t\t\t\t\topacity .2s ease-in-out, background-color .2s ease-in-out; \r\n\t\ttransition: width .2s ease-out .2s, height .2s ease-out .2s, \r\n\t\t\t\t\tmargin-left .2s ease-out .2s, margin-right .2s ease-out .2s, \r\n\t\t\t\t\tmargin-top .2s ease-out .2s, margin-bottom .2s ease-out .2s,\r\n\t\t\t\t\topacity .2s ease-in-out, background-color .2s ease-in-out; \r\n\t}\r\n\r\n\r\n\r\n/* \r\n------------------------------------------------------------------------------------------------------------------------\r\n6. SCROLLBAR COLORS, OPACITY AND BACKGROUNDS  \r\n------------------------------------------------------------------------------------------------------------------------\r\n*/\r\n\r\n\t/* \r\n\t----------------------------------------\r\n\t6.1 THEMES \r\n\t----------------------------------------\r\n\t*/\r\n\t\r\n\t/* default theme (\"light\") */\r\n\r\n\t.mCSB_scrollTools{ opacity: 0.75; filter: \"alpha(opacity=75)\"; -ms-filter: \"alpha(opacity=75)\"; }\r\n\t\r\n\t.mCS-autoHide > .mCustomScrollBox > .mCSB_scrollTools,\r\n\t.mCS-autoHide > .mCustomScrollBox ~ .mCSB_scrollTools{ opacity: 0; filter: \"alpha(opacity=0)\"; -ms-filter: \"alpha(opacity=0)\"; }\r\n\t\r\n\t.mCustomScrollbar > .mCustomScrollBox > .mCSB_scrollTools.mCSB_scrollTools_onDrag,\r\n\t.mCustomScrollbar > .mCustomScrollBox ~ .mCSB_scrollTools.mCSB_scrollTools_onDrag,\r\n\t.mCustomScrollBox:hover > .mCSB_scrollTools,\r\n\t.mCustomScrollBox:hover ~ .mCSB_scrollTools,\r\n\t.mCS-autoHide:hover > .mCustomScrollBox > .mCSB_scrollTools,\r\n\t.mCS-autoHide:hover > .mCustomScrollBox ~ .mCSB_scrollTools{ opacity: 1; filter: \"alpha(opacity=100)\"; -ms-filter: \"alpha(opacity=100)\"; }\r\n\r\n\t.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.4);\r\n\t\tfilter: \"alpha(opacity=40)\"; -ms-filter: \"alpha(opacity=40)\"; \r\n\t}\r\n\r\n\t.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\r\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.75);\r\n\t\tfilter: \"alpha(opacity=75)\"; -ms-filter: \"alpha(opacity=75)\"; \r\n\t}\r\n\r\n\t.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{\r\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.85);\r\n\t\tfilter: \"alpha(opacity=85)\"; -ms-filter: \"alpha(opacity=85)\"; \r\n\t}\r\n\t.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{\r\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.9);\r\n\t\tfilter: \"alpha(opacity=90)\"; -ms-filter: \"alpha(opacity=90)\"; \r\n\t}\r\n\r\n\t.mCSB_scrollTools .mCSB_buttonUp,\r\n\t.mCSB_scrollTools .mCSB_buttonDown,\r\n\t.mCSB_scrollTools .mCSB_buttonLeft,\r\n\t.mCSB_scrollTools .mCSB_buttonRight{\r\n\t\tbackground-image: url(" + __webpack_require__(309) + "); /* css sprites */\r\n\t\tbackground-repeat: no-repeat;\r\n\t\topacity: 0.4; filter: \"alpha(opacity=40)\"; -ms-filter: \"alpha(opacity=40)\"; \r\n\t}\r\n\r\n\t.mCSB_scrollTools .mCSB_buttonUp{\r\n\t\tbackground-position: 0 0;\r\n\t\t/* \r\n\t\tsprites locations \r\n\t\tlight: 0 0, -16px 0, -32px 0, -48px 0, 0 -72px, -16px -72px, -32px -72px\r\n\t\tdark: -80px 0, -96px 0, -112px 0, -128px 0, -80px -72px, -96px -72px, -112px -72px\r\n\t\t*/\r\n\t}\r\n\r\n\t.mCSB_scrollTools .mCSB_buttonDown{\r\n\t\tbackground-position: 0 -20px;\r\n\t\t/* \r\n\t\tsprites locations\r\n\t\tlight: 0 -20px, -16px -20px, -32px -20px, -48px -20px, 0 -92px, -16px -92px, -32px -92px\r\n\t\tdark: -80px -20px, -96px -20px, -112px -20px, -128px -20px, -80px -92px, -96px -92px, -112 -92px\r\n\t\t*/\r\n\t}\r\n\r\n\t.mCSB_scrollTools .mCSB_buttonLeft{\r\n\t\tbackground-position: 0 -40px;\r\n\t\t/* \r\n\t\tsprites locations \r\n\t\tlight: 0 -40px, -20px -40px, -40px -40px, -60px -40px, 0 -112px, -20px -112px, -40px -112px\r\n\t\tdark: -80px -40px, -100px -40px, -120px -40px, -140px -40px, -80px -112px, -100px -112px, -120px -112px\r\n\t\t*/\r\n\t}\r\n\r\n\t.mCSB_scrollTools .mCSB_buttonRight{\r\n\t\tbackground-position: 0 -56px;\r\n\t\t/* \r\n\t\tsprites locations \r\n\t\tlight: 0 -56px, -20px -56px, -40px -56px, -60px -56px, 0 -128px, -20px -128px, -40px -128px\r\n\t\tdark: -80px -56px, -100px -56px, -120px -56px, -140px -56px, -80px -128px, -100px -128px, -120px -128px\r\n\t\t*/\r\n\t}\r\n\r\n\t.mCSB_scrollTools .mCSB_buttonUp:hover,\r\n\t.mCSB_scrollTools .mCSB_buttonDown:hover,\r\n\t.mCSB_scrollTools .mCSB_buttonLeft:hover,\r\n\t.mCSB_scrollTools .mCSB_buttonRight:hover{ opacity: 0.75; filter: \"alpha(opacity=75)\"; -ms-filter: \"alpha(opacity=75)\"; }\r\n\r\n\t.mCSB_scrollTools .mCSB_buttonUp:active,\r\n\t.mCSB_scrollTools .mCSB_buttonDown:active,\r\n\t.mCSB_scrollTools .mCSB_buttonLeft:active,\r\n\t.mCSB_scrollTools .mCSB_buttonRight:active{ opacity: 0.9; filter: \"alpha(opacity=90)\"; -ms-filter: \"alpha(opacity=90)\"; }\r\n\t\r\n\r\n\t/* theme: \"dark\" */\r\n\r\n\t.mCS-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.15); }\r\n\r\n\t.mCS-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\r\n\r\n\t.mCS-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: rgba(0,0,0,0.85); }\r\n\r\n\t.mCS-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: rgba(0,0,0,0.9); }\r\n\r\n\t.mCS-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -80px 0; }\r\n\r\n\t.mCS-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -80px -20px; }\r\n\r\n\t.mCS-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -80px -40px; }\r\n\r\n\t.mCS-dark.mCSB_scrollTools .mCSB_buttonRight{ background-position: -80px -56px; }\r\n\t\r\n\t/* ---------------------------------------- */\r\n\t\r\n\r\n\r\n\t/* theme: \"light-2\", \"dark-2\" */\r\n\r\n\t.mCS-light-2.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\twidth: 4px;\r\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.1);\r\n\t\t-webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px;\r\n\t}\r\n\r\n\t.mCS-light-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\r\n\t\twidth: 4px;\r\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.75);\r\n\t\t-webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px;\r\n\t}\r\n\r\n\t.mCS-light-2.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-light-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\r\n\t\twidth: 100%;\r\n\t\theight: 4px;\r\n\t\tmargin: 6px auto;\r\n\t}\r\n\r\n\t.mCS-light-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.85); }\r\n\r\n\t.mCS-light-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-light-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.9); }\r\n\r\n\t.mCS-light-2.mCSB_scrollTools .mCSB_buttonUp{ background-position: -32px 0; }\r\n\r\n\t.mCS-light-2.mCSB_scrollTools .mCSB_buttonDown{\tbackground-position: -32px -20px; }\r\n\r\n\t.mCS-light-2.mCSB_scrollTools .mCSB_buttonLeft{\tbackground-position: -40px -40px; }\r\n\r\n\t.mCS-light-2.mCSB_scrollTools .mCSB_buttonRight{ background-position: -40px -56px; }\r\n\t\r\n\t\r\n\t/* theme: \"dark-2\" */\r\n\r\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.1);\r\n\t\t-webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px;\r\n\t}\r\n\r\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.75);\r\n\t\t-webkit-border-radius: 1px; -moz-border-radius: 1px; border-radius: 1px;\r\n\t}\r\n\r\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\r\n\r\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\r\n\r\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_buttonUp{ background-position: -112px 0; }\r\n\r\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_buttonDown{ background-position: -112px -20px; }\r\n\r\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -120px -40px; }\r\n\r\n\t.mCS-dark-2.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -120px -56px; }\r\n\t\r\n\t/* ---------------------------------------- */\r\n\t\r\n\r\n\r\n\t/* theme: \"light-thick\", \"dark-thick\" */\r\n\r\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\twidth: 4px;\r\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.1);\r\n\t\t-webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;\r\n\t}\r\n\r\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\r\n\t\twidth: 6px;\r\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.75);\r\n\t\t-webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;\r\n\t}\r\n\r\n\t.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail{\r\n\t\twidth: 100%;\r\n\t\theight: 4px;\r\n\t\tmargin: 6px 0;\r\n\t}\r\n\r\n\t.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\r\n\t\twidth: 100%;\r\n\t\theight: 6px;\r\n\t\tmargin: 5px auto;\r\n\t}\r\n\r\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.85); }\r\n\r\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.9); }\r\n\r\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_buttonUp{ background-position: -16px 0; }\r\n\r\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_buttonDown{\tbackground-position: -16px -20px; }\r\n\r\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_buttonLeft{\tbackground-position: -20px -40px; }\r\n\r\n\t.mCS-light-thick.mCSB_scrollTools .mCSB_buttonRight{ background-position: -20px -56px; }\r\n\r\n\r\n\t/* theme: \"dark-thick\" */\r\n\t\r\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.1);\r\n\t\t-webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;\r\n\t}\r\n\r\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.75);\r\n\t\t-webkit-border-radius: 2px; -moz-border-radius: 2px; border-radius: 2px;\r\n\t}\r\n\r\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\r\n\r\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\r\n\r\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonUp{ background-position: -96px 0; }\r\n\r\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonDown{ background-position: -96px -20px; }\r\n\r\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -100px -40px; }\r\n\r\n\t.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -100px -56px; }\r\n\t\r\n\t/* ---------------------------------------- */\r\n\t\r\n\r\n\r\n\t/* theme: \"light-thin\", \"dark-thin\" */\r\n\t\r\n\t.mCS-light-thin.mCSB_scrollTools .mCSB_draggerRail{ background-color: #fff; background-color: rgba(255,255,255,0.1); }\r\n\r\n\t.mCS-light-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ width: 2px; }\r\n\r\n\t.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail{ width: 100%; }\r\n\r\n\t.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\r\n\t\twidth: 100%;\r\n\t\theight: 2px;\r\n\t\tmargin: 7px auto;\r\n\t}\r\n\r\n\r\n\t/* theme \"dark-thin\" */\r\n\t\r\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.15); }\r\n\r\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\r\n\t\r\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\r\n\t\r\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\r\n\t\r\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonUp{\tbackground-position: -80px 0; }\r\n\r\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonDown{ background-position: -80px -20px; }\r\n\r\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -80px -40px; }\r\n\r\n\t.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonRight{ background-position: -80px -56px; }\r\n\t\r\n\t/* ---------------------------------------- */\r\n\t\r\n\t\r\n\t\r\n\t/* theme \"rounded\", \"rounded-dark\", \"rounded-dots\", \"rounded-dots-dark\" */\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools .mCSB_draggerRail{ background-color: #fff; background-color: rgba(255,255,255,0.15); }\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools .mCSB_dragger, \r\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger, \r\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger{ height: 14px; }\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\r\n\t\twidth: 14px;\r\n\t\tmargin: 0 1px;\r\n\t}\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger, \r\n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger, \r\n\t.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger{ width: 14px; }\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\r\n\t\theight: 14px;\r\n\t\tmargin: 1px 0;\r\n\t}\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \r\n\t.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \r\n\t.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{\r\n\t\twidth: 16px; /* auto-expanded scrollbar */\r\n\t\theight: 16px;\r\n\t\tmargin: -1px 0;\r\n\t}\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \r\n\t.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, \r\n\t.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \r\n\t.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{ width: 4px; /* auto-expanded scrollbar */ }\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \r\n\t.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar, \r\n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar{\r\n\t\theight: 16px; /* auto-expanded scrollbar */\r\n\t\twidth: 16px;\r\n\t\tmargin: 0 -1px;\r\n\t}\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \r\n\t.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, \r\n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \r\n\t.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{\r\n\t\theight: 4px; /* auto-expanded scrollbar */\r\n\t\tmargin: 6px 0;\r\n\t}\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools .mCSB_buttonUp{ background-position: 0 -72px; }\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools .mCSB_buttonDown{ background-position: 0 -92px; }\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools .mCSB_buttonLeft{ background-position: 0 -112px; }\r\n\t\r\n\t.mCS-rounded.mCSB_scrollTools .mCSB_buttonRight{ background-position: 0 -128px; }\r\n\t\r\n\t\r\n\t/* theme \"rounded-dark\", \"rounded-dots-dark\" */\r\n\t\r\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\r\n\t\r\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.15); }\r\n\t\r\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\r\n\t\r\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\r\n\t\r\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -80px -72px; }\r\n\t\r\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -80px -92px; }\r\n\t\r\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -80px -112px; }\r\n\t\r\n\t.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonRight{ background-position: -80px -128px; }\r\n\t\r\n\t\r\n\t/* theme \"rounded-dots\", \"rounded-dots-dark\" */\r\n\t\r\n\t.mCS-rounded-dots.mCSB_scrollTools_vertical .mCSB_draggerRail, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools_vertical .mCSB_draggerRail{ width: 4px; }\r\n\t\r\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail{\r\n\t\tbackground-color: transparent;\r\n\t\tbackground-position: center;\r\n\t}\r\n\t\r\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\tbackground-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANElEQVQYV2NkIAAYiVbw//9/Y6DiM1ANJoyMjGdBbLgJQAX/kU0DKgDLkaQAvxW4HEvQFwCRcxIJK1XznAAAAABJRU5ErkJggg==\");\r\n\t\tbackground-repeat: repeat-y;\r\n\t\topacity: 0.3;\r\n\t\tfilter: \"alpha(opacity=30)\"; -ms-filter: \"alpha(opacity=30)\"; \r\n\t}\r\n\t\r\n\t.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail{\r\n\t\theight: 4px;\r\n\t\tmargin: 6px 0;\r\n\t\tbackground-repeat: repeat-x;\r\n\t}\r\n\t\r\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonUp{ background-position: -16px -72px; }\r\n\t\r\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonDown{ background-position: -16px -92px; }\r\n\t\r\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -20px -112px; }\r\n\t\r\n\t.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonRight{ background-position: -20px -128px; }\r\n\t\r\n\t\r\n\t/* theme \"rounded-dots-dark\" */\r\n\t\r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\tbackground-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALElEQVQYV2NkIAAYSVFgDFR8BqrBBEifBbGRTfiPZhpYjiQFBK3A6l6CvgAAE9kGCd1mvgEAAAAASUVORK5CYII=\");\r\n\t}\r\n\t\r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -96px -72px; }\r\n\t\r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -96px -92px; }\r\n\t\r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -100px -112px; }\r\n\t\r\n\t.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonRight{ background-position: -100px -128px; }\r\n\t\r\n\t/* ---------------------------------------- */\r\n\t\r\n\t\r\n\t\r\n\t/* theme \"3d\", \"3d-dark\", \"3d-thick\", \"3d-thick-dark\" */\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\r\n\t\tbackground-repeat: repeat-y;\r\n\t\tbackground-image: -moz-linear-gradient(left, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);\r\n\t\tbackground-image: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0.5)), color-stop(100%,rgba(255,255,255,0)));\r\n\t\tbackground-image: -webkit-linear-gradient(left, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\r\n\t\tbackground-image: -o-linear-gradient(left, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\r\n\t\tbackground-image: -ms-linear-gradient(left, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\r\n\t\tbackground-image: linear-gradient(to right, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\r\n\t}\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\r\n\t\tbackground-repeat: repeat-x;\r\n\t\tbackground-image: -moz-linear-gradient(top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%);\r\n\t\tbackground-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0.5)), color-stop(100%,rgba(255,255,255,0)));\r\n\t\tbackground-image: -webkit-linear-gradient(top, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\r\n\t\tbackground-image: -o-linear-gradient(top, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\r\n\t\tbackground-image: -ms-linear-gradient(top, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\r\n\t\tbackground-image: linear-gradient(to bottom, rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 100%);\r\n\t}\r\n\t\r\n\t\r\n\t/* theme \"3d\", \"3d-dark\" */\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools_vertical .mCSB_dragger, \r\n\t.mCS-3d-dark.mCSB_scrollTools_vertical .mCSB_dragger{ height: 70px; }\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger, \r\n\t.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger{ width: 70px; }\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools, \r\n\t.mCS-3d-dark.mCSB_scrollTools{\r\n\t\topacity: 1;\r\n\t\tfilter: \"alpha(opacity=30)\"; -ms-filter: \"alpha(opacity=30)\"; \r\n\t}\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ -webkit-border-radius: 16px; -moz-border-radius: 16px; border-radius: 16px; }\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\twidth: 8px;\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.2);\r\n\t\tbox-shadow: inset 1px 0 1px rgba(0,0,0,0.5), inset -1px 0 1px rgba(255,255,255,0.2);\r\n\t}\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \t \r\n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \r\n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, \r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #555; }\r\n\r\n\t.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ width: 8px; }\r\n\r\n\t.mCS-3d.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail{\r\n\t\twidth: 100%;\r\n\t\theight: 8px;\r\n\t\tmargin: 4px 0;\r\n\t\tbox-shadow: inset 0 1px 1px rgba(0,0,0,0.5), inset 0 -1px 1px rgba(255,255,255,0.2);\r\n\t}\r\n\r\n\t.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\r\n\t\twidth: 100%;\r\n\t\theight: 8px;\r\n\t\tmargin: 4px auto;\r\n\t}\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools .mCSB_buttonUp{ background-position: -32px -72px; }\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools .mCSB_buttonDown{ background-position: -32px -92px; }\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -40px -112px; }\r\n\t\r\n\t.mCS-3d.mCSB_scrollTools .mCSB_buttonRight{ background-position: -40px -128px; }\r\n\t\r\n\t\r\n\t/* theme \"3d-dark\" */\r\n\t\r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.1);\r\n\t\tbox-shadow: inset 1px 0 1px rgba(0,0,0,0.1);\r\n\t}\r\n\t\r\n\t.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail{ box-shadow: inset 0 1px 1px rgba(0,0,0,0.1); }\r\n\t\r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -112px -72px; }\r\n\r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -112px -92px; }\r\n\r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -120px -112px; }\r\n\r\n\t.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -120px -128px; }\r\n\t\r\n\t/* ---------------------------------------- */\r\n\t\r\n\t\r\n\t\r\n\t/* theme: \"3d-thick\", \"3d-thick-dark\" */\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools{\r\n\t\topacity: 1;\r\n\t\tfilter: \"alpha(opacity=30)\"; -ms-filter: \"alpha(opacity=30)\"; \r\n\t}\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools, \r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer{ -webkit-border-radius: 7px; -moz-border-radius: 7px; border-radius: 7px; }\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; }\r\n\t\r\n\t.mCSB_inside + .mCS-3d-thick.mCSB_scrollTools_vertical, \r\n\t.mCSB_inside + .mCS-3d-thick-dark.mCSB_scrollTools_vertical{ right: 1px; }\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools_vertical, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools_vertical{ box-shadow: inset 1px 0 1px rgba(0,0,0,0.1), inset 0 0 14px rgba(0,0,0,0.5); }\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools_horizontal, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal{\r\n\t\tbottom: 1px;\r\n\t\tbox-shadow: inset 0 1px 1px rgba(0,0,0,0.1), inset 0 0 14px rgba(0,0,0,0.5);\r\n\t}\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\r\n\t\tbox-shadow: inset 1px 0 0 rgba(255,255,255,0.4);\r\n\t\twidth: 12px;\r\n\t\tmargin: 2px;\r\n\t\tposition: absolute;\r\n\t\theight: auto;\r\n\t\ttop: 0;\r\n\t\tbottom: 0;\r\n\t\tleft: 0;\r\n\t\tright: 0;\r\n\t}\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{ box-shadow: inset 0 1px 0 rgba(255,255,255,0.4); }\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,  \r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #555; }\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\r\n\t\theight: 12px;\r\n\t\twidth: auto;\r\n\t}\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer{\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.05);\r\n\t\tbox-shadow: inset 1px 1px 16px rgba(0,0,0,0.1);\r\n\t}\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerRail{ background-color: transparent; }\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonUp{ background-position: -32px -72px; }\r\n\t\r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonDown{ background-position: -32px -92px; }\r\n\r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -40px -112px; }\r\n\r\n\t.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -40px -128px; }\r\n\t\r\n\t\r\n\t/* theme: \"3d-thick-dark\" */\r\n\t\r\n\t.mCS-3d-thick-dark.mCSB_scrollTools{ box-shadow: inset 0 0 14px rgba(0,0,0,0.2); }\r\n\t\r\n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal{ box-shadow: inset 0 1px 1px rgba(0,0,0,0.1), inset 0 0 14px rgba(0,0,0,0.2); }\r\n\t\r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ box-shadow: inset 1px 0 0 rgba(255,255,255,0.4), inset -1px 0 0 rgba(0,0,0,0.2); }\r\n\t \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{ box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.2); }\r\n\t\r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,  \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #777; }\r\n\t\r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer{\r\n\t\tbackground-color: #fff; background-color: rgba(0,0,0,0.05);\r\n\t\tbox-shadow: inset 1px 1px 16px rgba(0,0,0,0.1);\r\n\t}\r\n\t\r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: transparent; }\r\n\t\r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -112px -72px; }\r\n\t\r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -112px -92px; }\r\n\r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -120px -112px; }\r\n\r\n\t.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -120px -128px; }\r\n\t\r\n\t/* ---------------------------------------- */\r\n\t\r\n\t\r\n\t\r\n\t/* theme: \"minimal\", \"minimal-dark\" */\r\n\t\r\n\t.mCSB_outside + .mCS-minimal.mCSB_scrollTools_vertical, \r\n\t.mCSB_outside + .mCS-minimal-dark.mCSB_scrollTools_vertical{\r\n\t\tright: 0; \r\n\t\tmargin: 12px 0; \r\n\t}\r\n\t\r\n\t.mCustomScrollBox.mCS-minimal + .mCSB_scrollTools.mCSB_scrollTools_horizontal, \r\n\t.mCustomScrollBox.mCS-minimal + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal, \r\n\t.mCustomScrollBox.mCS-minimal-dark + .mCSB_scrollTools.mCSB_scrollTools_horizontal, \r\n\t.mCustomScrollBox.mCS-minimal-dark + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal{\r\n\t\tbottom: 0; \r\n\t\tmargin: 0 12px; \r\n\t}\r\n\t\r\n\t/* RTL direction/left-side scrollbar */\r\n\t.mCS-dir-rtl > .mCSB_outside + .mCS-minimal.mCSB_scrollTools_vertical, \r\n\t.mCS-dir-rtl > .mCSB_outside + .mCS-minimal-dark.mCSB_scrollTools_vertical{\r\n\t\tleft: 0; \r\n\t\tright: auto;\r\n\t}\r\n\t\r\n\t.mCS-minimal.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-minimal-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: transparent; }\r\n\t\r\n\t.mCS-minimal.mCSB_scrollTools_vertical .mCSB_dragger, \r\n\t.mCS-minimal-dark.mCSB_scrollTools_vertical .mCSB_dragger{ height: 50px; }\r\n\t\r\n\t.mCS-minimal.mCSB_scrollTools_horizontal .mCSB_dragger, \r\n\t.mCS-minimal-dark.mCSB_scrollTools_horizontal .mCSB_dragger{ width: 50px; }\r\n\t\r\n\t.mCS-minimal.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\r\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.2);\r\n\t\tfilter: \"alpha(opacity=20)\"; -ms-filter: \"alpha(opacity=20)\"; \r\n\t}\r\n\t\r\n\t.mCS-minimal.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-minimal.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{\r\n\t\tbackground-color: #fff; background-color: rgba(255,255,255,0.5);\r\n\t\tfilter: \"alpha(opacity=50)\"; -ms-filter: \"alpha(opacity=50)\"; \r\n\t}\r\n\t\r\n\t\r\n\t/* theme: \"minimal-dark\" */\r\n\t\r\n\t.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.2);\r\n\t\tfilter: \"alpha(opacity=20)\"; -ms-filter: \"alpha(opacity=20)\"; \r\n\t}\r\n\t\r\n\t.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.5);\r\n\t\tfilter: \"alpha(opacity=50)\"; -ms-filter: \"alpha(opacity=50)\"; \r\n\t}\r\n\t\r\n\t/* ---------------------------------------- */\r\n\t\r\n\t\r\n\t\r\n\t/* theme \"light-3\", \"dark-3\" */\r\n\t\r\n\t.mCS-light-3.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\twidth: 6px;\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.2);\r\n\t}\r\n\r\n\t.mCS-light-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ width: 6px; }\r\n\r\n\t.mCS-light-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-light-3.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_draggerRail{\r\n\t\twidth: 100%;\r\n\t\theight: 6px;\r\n\t\tmargin: 5px 0;\r\n\t}\r\n\t\r\n\t.mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \r\n\t.mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, \r\n\t.mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \r\n\t.mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{\r\n\t\twidth: 12px;\r\n\t}\r\n\t\r\n\t.mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \r\n\t.mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail, \r\n\t.mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail, \r\n\t.mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail{\r\n\t\theight: 12px;\r\n\t\tmargin: 2px 0;\r\n\t}\r\n\t\r\n\t.mCS-light-3.mCSB_scrollTools .mCSB_buttonUp{ background-position: -32px -72px; }\r\n\t\r\n\t.mCS-light-3.mCSB_scrollTools .mCSB_buttonDown{ background-position: -32px -92px; }\r\n\t\r\n\t.mCS-light-3.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -40px -112px; }\r\n\t\r\n\t.mCS-light-3.mCSB_scrollTools .mCSB_buttonRight{ background-position: -40px -128px; }\r\n\t\r\n\t\r\n\t/* theme \"dark-3\" */\r\n\t\r\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\r\n\r\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\r\n\r\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\r\n\t\r\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.1); }\r\n\t\r\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_buttonUp{ background-position: -112px -72px; }\r\n\r\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_buttonDown{ background-position: -112px -92px; }\r\n\r\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -120px -112px; }\r\n\r\n\t.mCS-dark-3.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -120px -128px; }\r\n\t\r\n\t/* ---------------------------------------- */\r\n\t\r\n\t\r\n\t\r\n\t/* theme \"inset\", \"inset-dark\", \"inset-2\", \"inset-2-dark\", \"inset-3\", \"inset-3-dark\" */\r\n\t\r\n\t.mCS-inset.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\twidth: 12px;\r\n\t\tbackground-color: #000; background-color: rgba(0,0,0,0.2);\r\n\t}\r\n\r\n\t.mCS-inset.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ \r\n\t\twidth: 6px;\r\n\t\tmargin: 3px 5px;\r\n\t\tposition: absolute;\r\n\t\theight: auto;\r\n\t\ttop: 0;\r\n\t\tbottom: 0;\r\n\t\tleft: 0;\r\n\t\tright: 0;\r\n\t}\r\n\r\n\t.mCS-inset.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar{\r\n\t\theight: 6px;\r\n\t\tmargin: 5px 3px;\r\n\t\tposition: absolute;\r\n\t\twidth: auto;\r\n\t\ttop: 0;\r\n\t\tbottom: 0;\r\n\t\tleft: 0;\r\n\t\tright: 0;\r\n\t}\r\n\t\r\n\t.mCS-inset.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_draggerRail, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail{\r\n\t\twidth: 100%;\r\n\t\theight: 12px;\r\n\t\tmargin: 2px 0;\r\n\t}\r\n\t\r\n\t.mCS-inset.mCSB_scrollTools .mCSB_buttonUp, \r\n\t.mCS-inset-2.mCSB_scrollTools .mCSB_buttonUp, \r\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_buttonUp{ background-position: -32px -72px; }\r\n\t\r\n\t.mCS-inset.mCSB_scrollTools .mCSB_buttonDown, \r\n\t.mCS-inset-2.mCSB_scrollTools .mCSB_buttonDown, \r\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_buttonDown{ background-position: -32px -92px; }\r\n\t\r\n\t.mCS-inset.mCSB_scrollTools .mCSB_buttonLeft, \r\n\t.mCS-inset-2.mCSB_scrollTools .mCSB_buttonLeft, \r\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -40px -112px; }\r\n\t\r\n\t.mCS-inset.mCSB_scrollTools .mCSB_buttonRight, \r\n\t.mCS-inset-2.mCSB_scrollTools .mCSB_buttonRight, \r\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_buttonRight{ background-position: -40px -128px; }\r\n\t\r\n\t\r\n\t/* theme \"inset-dark\", \"inset-2-dark\", \"inset-3-dark\" */\r\n\t\r\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\r\n\r\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\r\n\r\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\r\n\t\r\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.1); }\r\n\t\r\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonUp, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonUp, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonUp{ background-position: -112px -72px; }\r\n\r\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonDown, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonDown, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonDown{ background-position: -112px -92px; }\r\n\r\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonLeft, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonLeft, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonLeft{ background-position: -120px -112px; }\r\n\r\n\t.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonRight, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonRight, \r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonRight{\tbackground-position: -120px -128px; }\r\n\t\r\n\t\r\n\t/* theme \"inset-2\", \"inset-2-dark\" */\r\n\t\r\n\t.mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail, \r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail{\r\n\t\tbackground-color: transparent;\r\n\t\tborder-width: 1px;\r\n\t\tborder-style: solid;\r\n\t\tborder-color: #fff;\r\n\t\tborder-color: rgba(255,255,255,0.2);\r\n\t\t-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;\r\n\t}\r\n\t\r\n\t.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail{ border-color: #000; border-color: rgba(0,0,0,0.2); }\r\n\t\r\n\t\r\n\t/* theme \"inset-3\", \"inset-3-dark\" */\r\n\t\r\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail{ background-color: #fff; background-color: rgba(255,255,255,0.6); }\r\n\t\r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail{ background-color: #000; background-color: rgba(0,0,0,0.6); }\r\n\t\r\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.75); }\r\n\t\r\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.85); }\r\n\t\r\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-inset-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #000; background-color: rgba(0,0,0,0.9); }\r\n\t\r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.75); }\r\n\t\r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.85); }\r\n\t\r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,\r\n\t.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{ background-color: #fff; background-color: rgba(255,255,255,0.9); }\r\n\t\r\n\t/* ---------------------------------------- */\r\n", ""]);

	// exports


/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "node_modules/malihu-custom-scrollbar-plugin/mCSB_buttons.png";

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/buttons/1.png";

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/buttons/2.png";

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/buttons/3.png";

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/buttons/4.png";

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/buttons/5.png";

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/calendar/cal-arrow2.png";

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/icons/search.png";

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/icons/v.png";

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/nav/all_reviews.png";

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/nav/review_read.png";

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/nav/news_back.png";

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/nav/news_back_inactive.png";

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/nav/news_forward.png";

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "imgs/nav/news_forward_inactive.png";

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

/******/ });