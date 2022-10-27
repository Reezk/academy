/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! uikit/dist/js/uikit */ "./node_modules/uikit/dist/js/uikit.js");

window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
jQuery(document).ready(function ($) {
  var $languageSwitcherForm = $('#language_switcher');
  var $languageSelect = $('#language');
  $languageSelect.on('change', function () {
    $languageSwitcherForm.submit();
  }); //alert('jquery working');
});

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

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
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

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

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
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
	if ( typeof target !== "object" && !isFunction( target ) ) {
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
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

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

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
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

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
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
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
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
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

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
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
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
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

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
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
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
		return ( cache[ key + " " ] = value );
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
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
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
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
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
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
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
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
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
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
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
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

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
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
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
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
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

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
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
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
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
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
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
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
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
		while ( ( elem = results[ i++ ] ) ) {
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
		while ( ( node = elem[ i++ ] ) ) {

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
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
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
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
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

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
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
								while ( ( node = node[ dir ] ) ) {
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
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

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
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

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
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
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
			return !Expr.pseudos[ "empty" ]( elem );
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
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

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
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
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
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
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
		if ( ( elem = unmatched[ i ] ) ) {
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
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

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
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
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
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
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
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
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
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
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
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
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
					if ( ( elem = !matcher && elem ) ) {
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
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
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
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

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
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

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
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




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



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
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

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
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
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

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
							if ( isFunction( this[ match ] ) ) {
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

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
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
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
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
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
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
	parentsUntil: function( elem, _i, until ) {
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
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
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
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
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
			locked = locked || options.once;

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
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

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
				if ( !memory && !firing ) {
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


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
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
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
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
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

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
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
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




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
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
				fn = function( elem, _key, value ) {
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

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

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
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

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

			return this.get( owner, key );
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
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
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

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
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

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
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
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
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
				if ( !queue || Array.isArray( data ) ) {
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

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
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


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
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
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
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
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
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

				// Support: Android <=4.0 only, PhantomJS 1 only
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

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
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


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
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

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
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
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
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
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
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

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

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

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

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
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
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

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

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

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
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

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
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

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

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
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
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

						// Support: Android <=4.0 only, PhantomJS 1 only
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

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
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
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
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

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
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

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

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

		// Support: IE <=9 - 11 only
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


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

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

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
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
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
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
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

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
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
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
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

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

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
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

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
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
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
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

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
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
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
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

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
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

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
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

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
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
				for ( ; index < length; index++ ) {
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

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
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
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
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
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
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
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

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
		if ( clearQueue ) {
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

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
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

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
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
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
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

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
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

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
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
					nodeName( elem, "input" ) ) {
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
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
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

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
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

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
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
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

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




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
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

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

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
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
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

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
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

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

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

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
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
			if ( Array.isArray( value ) ) {
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


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

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
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

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
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
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

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

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


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
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

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

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

	} else if ( !traditional && toType( obj ) === "object" ) {

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
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

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
	return s.join( "&" );
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
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
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
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

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
			"text json": JSON.parse,

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

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

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

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
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
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
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
		if ( completed ) {
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
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
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
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

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
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

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

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
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

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
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

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

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
		if ( isFunction( html ) ) {
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
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
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
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
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

									// Support: IE <=9 only
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
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
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




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
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

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

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
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
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
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
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
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
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


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

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




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




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

		if ( isFunction( options ) ) {

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

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
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

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

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

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
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
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
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
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
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

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
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
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/sass/app-ar.scss":
/*!************************************!*\
  !*** ./resources/sass/app-ar.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uikit/dist/js/uikit.js":
/*!*********************************************!*\
  !*** ./node_modules/uikit/dist/js/uikit.js ***!
  \*********************************************/
/***/ (function(module) {

/*! UIkit 3.15.1 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */

(function (global, factory) {
     true ? module.exports = factory() :
    0;
})(this, (function () { 'use strict';

    const { hasOwnProperty, toString } = Object.prototype;

    function hasOwn(obj, key) {
      return hasOwnProperty.call(obj, key);
    }

    const hyphenateRe = /\B([A-Z])/g;

    const hyphenate = memoize((str) => str.replace(hyphenateRe, '-$1').toLowerCase());

    const camelizeRe = /-(\w)/g;

    const camelize = memoize((str) => str.replace(camelizeRe, toUpper));

    const ucfirst = memoize((str) =>
    str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '');


    function toUpper(_, c) {
      return c ? c.toUpperCase() : '';
    }

    function startsWith(str, search) {
      return str == null ? void 0 : str.startsWith == null ? void 0 : str.startsWith(search);
    }

    function endsWith(str, search) {
      return str == null ? void 0 : str.endsWith == null ? void 0 : str.endsWith(search);
    }

    function includes(obj, search) {
      return obj == null ? void 0 : obj.includes == null ? void 0 : obj.includes(search);
    }

    function findIndex(array, predicate) {
      return array == null ? void 0 : array.findIndex == null ? void 0 : array.findIndex(predicate);
    }

    const { isArray, from: toArray } = Array;
    const { assign } = Object;

    function isFunction(obj) {
      return typeof obj === 'function';
    }

    function isObject(obj) {
      return obj !== null && typeof obj === 'object';
    }

    function isPlainObject(obj) {
      return toString.call(obj) === '[object Object]';
    }

    function isWindow(obj) {
      return isObject(obj) && obj === obj.window;
    }

    function isDocument(obj) {
      return nodeType(obj) === 9;
    }

    function isNode(obj) {
      return nodeType(obj) >= 1;
    }

    function isElement(obj) {
      return nodeType(obj) === 1;
    }

    function nodeType(obj) {
      return !isWindow(obj) && isObject(obj) && obj.nodeType;
    }

    function isBoolean(value) {
      return typeof value === 'boolean';
    }

    function isString(value) {
      return typeof value === 'string';
    }

    function isNumber(value) {
      return typeof value === 'number';
    }

    function isNumeric(value) {
      return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
    }

    function isEmpty(obj) {
      return !(isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
    }

    function isUndefined(value) {
      return value === void 0;
    }

    function toBoolean(value) {
      return isBoolean(value) ?
      value :
      value === 'true' || value === '1' || value === '' ?
      true :
      value === 'false' || value === '0' ?
      false :
      value;
    }

    function toNumber(value) {
      const number = Number(value);
      return isNaN(number) ? false : number;
    }

    function toFloat(value) {
      return parseFloat(value) || 0;
    }

    function toNode(element) {
      return toNodes(element)[0];
    }

    function toNodes(element) {
      return element && (isNode(element) ? [element] : Array.from(element).filter(isNode)) || [];
    }

    function toWindow(element) {var _element;
      if (isWindow(element)) {
        return element;
      }

      element = toNode(element);
      const document = isDocument(element) ? element : (_element = element) == null ? void 0 : _element.ownerDocument;

      return (document == null ? void 0 : document.defaultView) || window;
    }

    function isEqual(value, other) {
      return (
        value === other ||
        isObject(value) &&
        isObject(other) &&
        Object.keys(value).length === Object.keys(other).length &&
        each(value, (val, key) => val === other[key]));

    }

    function swap(value, a, b) {
      return value.replace(new RegExp(a + "|" + b, 'g'), (match) => match === a ? b : a);
    }

    function last(array) {
      return array[array.length - 1];
    }

    function each(obj, cb) {
      for (const key in obj) {
        if (false === cb(obj[key], key)) {
          return false;
        }
      }
      return true;
    }

    function sortBy$1(array, prop) {
      return array.
      slice().
      sort((_ref, _ref2) => {let { [prop]: propA = 0 } = _ref;let { [prop]: propB = 0 } = _ref2;return (
          propA > propB ? 1 : propB > propA ? -1 : 0);});

    }

    function uniqueBy(array, prop) {
      const seen = new Set();
      return array.filter((_ref3) => {let { [prop]: check } = _ref3;return seen.has(check) ? false : seen.add(check);});
    }

    function clamp(number, min, max) {if (min === void 0) {min = 0;}if (max === void 0) {max = 1;}
      return Math.min(Math.max(toNumber(number) || 0, min), max);
    }

    function noop() {}

    function intersectRect() {for (var _len = arguments.length, rects = new Array(_len), _key = 0; _key < _len; _key++) {rects[_key] = arguments[_key];}
      return [
      ['bottom', 'top'],
      ['right', 'left']].
      every(
      (_ref4) => {let [minProp, maxProp] = _ref4;return (
          Math.min(...rects.map((_ref5) => {let { [minProp]: min } = _ref5;return min;})) -
          Math.max(...rects.map((_ref6) => {let { [maxProp]: max } = _ref6;return max;})) >
          0);});

    }

    function pointInRect(point, rect) {
      return (
        point.x <= rect.right &&
        point.x >= rect.left &&
        point.y <= rect.bottom &&
        point.y >= rect.top);

    }

    function ratio(dimensions, prop, value) {
      const aProp = prop === 'width' ? 'height' : 'width';

      return {
        [aProp]: dimensions[prop] ?
        Math.round(value * dimensions[aProp] / dimensions[prop]) :
        dimensions[aProp],
        [prop]: value };

    }

    function contain(dimensions, maxDimensions) {
      dimensions = { ...dimensions };

      for (const prop in dimensions) {
        dimensions =
        dimensions[prop] > maxDimensions[prop] ?
        ratio(dimensions, prop, maxDimensions[prop]) :
        dimensions;
      }

      return dimensions;
    }

    function cover$1(dimensions, maxDimensions) {
      dimensions = contain(dimensions, maxDimensions);

      for (const prop in dimensions) {
        dimensions =
        dimensions[prop] < maxDimensions[prop] ?
        ratio(dimensions, prop, maxDimensions[prop]) :
        dimensions;
      }

      return dimensions;
    }

    const Dimensions = { ratio, contain, cover: cover$1 };

    function getIndex(i, elements, current, finite) {if (current === void 0) {current = 0;}if (finite === void 0) {finite = false;}
      elements = toNodes(elements);

      const { length } = elements;

      if (!length) {
        return -1;
      }

      i = isNumeric(i) ?
      toNumber(i) :
      i === 'next' ?
      current + 1 :
      i === 'previous' ?
      current - 1 :
      elements.indexOf(toNode(i));

      if (finite) {
        return clamp(i, 0, length - 1);
      }

      i %= length;

      return i < 0 ? i + length : i;
    }

    function memoize(fn) {
      const cache = Object.create(null);
      return (key) => cache[key] || (cache[key] = fn(key));
    }

    class Deferred {
      constructor() {
        this.promise = new Promise((resolve, reject) => {
          this.reject = reject;
          this.resolve = resolve;
        });
      }}

    function attr(element, name, value) {
      if (isObject(name)) {
        for (const key in name) {
          attr(element, key, name[key]);
        }
        return;
      }

      if (isUndefined(value)) {var _toNode;
        return (_toNode = toNode(element)) == null ? void 0 : _toNode.getAttribute(name);
      } else {
        for (const el of toNodes(element)) {
          if (isFunction(value)) {
            value = value.call(el, attr(el, name));
          }

          if (value === null) {
            removeAttr(el, name);
          } else {
            el.setAttribute(name, value);
          }
        }
      }
    }

    function hasAttr(element, name) {
      return toNodes(element).some((element) => element.hasAttribute(name));
    }

    function removeAttr(element, name) {
      const elements = toNodes(element);
      for (const attribute of name.split(' ')) {
        for (const element of elements) {
          element.removeAttribute(attribute);
        }
      }
    }

    function data(element, attribute) {
      for (const name of [attribute, "data-" + attribute]) {
        if (hasAttr(element, name)) {
          return attr(element, name);
        }
      }
    }

    const voidElements = {
      area: true,
      base: true,
      br: true,
      col: true,
      embed: true,
      hr: true,
      img: true,
      input: true,
      keygen: true,
      link: true,
      menuitem: true,
      meta: true,
      param: true,
      source: true,
      track: true,
      wbr: true };

    function isVoidElement(element) {
      return toNodes(element).some((element) => voidElements[element.tagName.toLowerCase()]);
    }

    function isVisible(element) {
      return toNodes(element).some(
      (element) => element.offsetWidth || element.offsetHeight || element.getClientRects().length);

    }

    const selInput = 'input,select,textarea,button';
    function isInput(element) {
      return toNodes(element).some((element) => matches(element, selInput));
    }

    const selFocusable = selInput + ",a[href],[tabindex]";
    function isFocusable(element) {
      return matches(element, selFocusable);
    }

    function parent(element) {var _toNode;
      return (_toNode = toNode(element)) == null ? void 0 : _toNode.parentElement;
    }

    function filter$1(element, selector) {
      return toNodes(element).filter((element) => matches(element, selector));
    }

    function matches(element, selector) {
      return toNodes(element).some((element) => element.matches(selector));
    }

    function closest(element, selector) {
      return isElement(element) ?
      element.closest(startsWith(selector, '>') ? selector.slice(1) : selector) :
      toNodes(element).
      map((element) => closest(element, selector)).
      filter(Boolean);
    }

    function within(element, selector) {
      return isString(selector) ?
      !!closest(element, selector) :
      toNode(selector).contains(toNode(element));
    }

    function parents(element, selector) {
      const elements = [];

      while (element = parent(element)) {
        if (!selector || matches(element, selector)) {
          elements.push(element);
        }
      }

      return elements;
    }

    function children(element, selector) {
      element = toNode(element);
      const children = element ? toNodes(element.children) : [];
      return selector ? filter$1(children, selector) : children;
    }

    function index(element, ref) {
      return ref ? toNodes(element).indexOf(toNode(ref)) : children(parent(element)).indexOf(element);
    }

    function query(selector, context) {
      return find(selector, getContext(selector, context));
    }

    function queryAll(selector, context) {
      return findAll(selector, getContext(selector, context));
    }

    function find(selector, context) {
      return toNode(_query(selector, context, 'querySelector'));
    }

    function findAll(selector, context) {
      return toNodes(_query(selector, context, 'querySelectorAll'));
    }

    const contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
    const isContextSelector = memoize((selector) => selector.match(contextSelectorRe));

    function getContext(selector, context) {if (context === void 0) {context = document;}
      return isString(selector) && isContextSelector(selector) || isDocument(context) ?
      context :
      context.ownerDocument;
    }

    const contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
    const sanatize = memoize((selector) => selector.replace(contextSanitizeRe, '$1 *'));

    function _query(selector, context, queryFn) {if (context === void 0) {context = document;}
      if (!selector || !isString(selector)) {
        return selector;
      }

      selector = sanatize(selector);

      if (isContextSelector(selector)) {
        const split = splitSelector(selector);
        selector = '';
        for (let sel of split) {
          let ctx = context;

          if (sel[0] === '!') {
            const selectors = sel.substr(1).trim().split(' ');
            ctx = closest(parent(context), selectors[0]);
            sel = selectors.slice(1).join(' ').trim();
            if (!sel.length && split.length === 1) {
              return ctx;
            }
          }

          if (sel[0] === '-') {
            const selectors = sel.substr(1).trim().split(' ');
            const prev = (ctx || context).previousElementSibling;
            ctx = matches(prev, sel.substr(1)) ? prev : null;
            sel = selectors.slice(1).join(' ');
          }

          if (ctx) {
            selector += "" + (selector ? ',' : '') + domPath(ctx) + " " + sel;
          }
        }

        context = document;
      }

      try {
        return context[queryFn](selector);
      } catch (e) {
        return null;
      }
    }

    const selectorRe = /.*?[^\\](?:,|$)/g;

    const splitSelector = memoize((selector) =>
    selector.match(selectorRe).map((selector) => selector.replace(/,$/, '').trim()));


    function domPath(element) {
      const names = [];
      while (element.parentNode) {
        const id = attr(element, 'id');
        if (id) {
          names.unshift("#" + escape(id));
          break;
        } else {
          let { tagName } = element;
          if (tagName !== 'HTML') {
            tagName += ":nth-child(" + (index(element) + 1) + ")";
          }
          names.unshift(tagName);
          element = element.parentNode;
        }
      }
      return names.join(' > ');
    }

    function escape(css) {
      return isString(css) ? CSS.escape(css) : '';
    }

    function on() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
      let [targets, types, selector, listener, useCapture = false] = getArgs(args);

      if (listener.length > 1) {
        listener = detail(listener);
      }

      if (useCapture != null && useCapture.self) {
        listener = selfFilter(listener);
      }

      if (selector) {
        listener = delegate(selector, listener);
      }

      for (const type of types) {
        for (const target of targets) {
          target.addEventListener(type, listener, useCapture);
        }
      }

      return () => off(targets, types, listener, useCapture);
    }

    function off() {for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
      let [targets, types,, listener, useCapture = false] = getArgs(args);
      for (const type of types) {
        for (const target of targets) {
          target.removeEventListener(type, listener, useCapture);
        }
      }
    }

    function once() {for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      const [element, types, selector, listener, useCapture = false, condition] = getArgs(args);
      const off = on(
      element,
      types,
      selector,
      (e) => {
        const result = !condition || condition(e);
        if (result) {
          off();
          listener(e, result);
        }
      },
      useCapture);


      return off;
    }

    function trigger(targets, event, detail) {
      return toEventTargets(targets).every((target) =>
      target.dispatchEvent(createEvent(event, true, true, detail)));

    }

    function createEvent(e, bubbles, cancelable, detail) {if (bubbles === void 0) {bubbles = true;}if (cancelable === void 0) {cancelable = false;}
      if (isString(e)) {
        e = new CustomEvent(e, { bubbles, cancelable, detail });
      }

      return e;
    }

    function getArgs(args) {
      // Event targets
      args[0] = toEventTargets(args[0]);

      // Event types
      if (isString(args[1])) {
        args[1] = args[1].split(' ');
      }

      // Delegate?
      if (isFunction(args[2])) {
        args.splice(2, 0, false);
      }

      return args;
    }

    function delegate(selector, listener) {
      return (e) => {
        const current =
        selector[0] === '>' ?
        findAll(selector, e.currentTarget).
        reverse().
        filter((element) => within(e.target, element))[0] :
        closest(e.target, selector);

        if (current) {
          e.current = current;
          listener.call(this, e);
        }
      };
    }

    function detail(listener) {
      return (e) => isArray(e.detail) ? listener(e, ...e.detail) : listener(e);
    }

    function selfFilter(listener) {
      return function (e) {
        if (e.target === e.currentTarget || e.target === e.current) {
          return listener.call(null, e);
        }
      };
    }

    function isEventTarget(target) {
      return target && 'addEventListener' in target;
    }

    function toEventTarget(target) {
      return isEventTarget(target) ? target : toNode(target);
    }

    function toEventTargets(target) {
      return isArray(target) ?
      target.map(toEventTarget).filter(Boolean) :
      isString(target) ?
      findAll(target) :
      isEventTarget(target) ?
      [target] :
      toNodes(target);
    }

    function isTouch(e) {
      return e.pointerType === 'touch' || !!e.touches;
    }

    function getEventPos(e) {var _e$touches, _e$changedTouches;
      const { clientX: x, clientY: y } = ((_e$touches = e.touches) == null ? void 0 : _e$touches[0]) || ((_e$changedTouches = e.changedTouches) == null ? void 0 : _e$changedTouches[0]) || e;

      return { x, y };
    }

    function ajax(url, options) {
      const env = {
        data: null,
        method: 'GET',
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: noop,
        responseType: '',
        ...options };

      return Promise.resolve().
      then(() => env.beforeSend(env)).
      then(() => send(url, env));
    }

    function send(url, env) {
      return new Promise((resolve, reject) => {
        const { xhr } = env;

        for (const prop in env) {
          if (prop in xhr) {
            try {
              xhr[prop] = env[prop];
            } catch (e) {
              // noop
            }
          }
        }

        xhr.open(env.method.toUpperCase(), url);

        for (const header in env.headers) {
          xhr.setRequestHeader(header, env.headers[header]);
        }

        on(xhr, 'load', () => {
          if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            resolve(xhr);
          } else {
            reject(
            assign(Error(xhr.statusText), {
              xhr,
              status: xhr.status }));


          }
        });

        on(xhr, 'error', () => reject(assign(Error('Network Error'), { xhr })));
        on(xhr, 'timeout', () => reject(assign(Error('Network Timeout'), { xhr })));

        xhr.send(env.data);
      });
    }

    function getImage(src, srcset, sizes) {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.onerror = (e) => {
          reject(e);
        };
        img.onload = () => {
          resolve(img);
        };

        sizes && (img.sizes = sizes);
        srcset && (img.srcset = srcset);
        img.src = src;
      });
    }

    const cssNumber = {
      'animation-iteration-count': true,
      'column-count': true,
      'fill-opacity': true,
      'flex-grow': true,
      'flex-shrink': true,
      'font-weight': true,
      'line-height': true,
      opacity: true,
      order: true,
      orphans: true,
      'stroke-dasharray': true,
      'stroke-dashoffset': true,
      widows: true,
      'z-index': true,
      zoom: true };


    function css(element, property, value, priority) {if (priority === void 0) {priority = '';}
      const elements = toNodes(element);
      for (const element of elements) {
        if (isString(property)) {
          property = propName(property);

          if (isUndefined(value)) {
            return getComputedStyle(element).getPropertyValue(property);
          } else {
            element.style.setProperty(
            property,
            isNumeric(value) && !cssNumber[property] ?
            value + "px" :
            value || isNumber(value) ?
            value :
            '',
            priority);

          }
        } else if (isArray(property)) {
          const props = {};
          for (const prop of property) {
            props[prop] = css(element, prop);
          }
          return props;
        } else if (isObject(property)) {
          priority = value;
          each(property, (value, property) => css(element, property, value, priority));
        }
      }
      return elements[0];
    }

    // https://drafts.csswg.org/cssom/#dom-cssstyledeclaration-setproperty
    const propName = memoize((name) => vendorPropName(name));

    function vendorPropName(name) {
      if (startsWith(name, '--')) {
        return name;
      }

      name = hyphenate(name);

      const { style } = document.documentElement;

      if (name in style) {
        return name;
      }

      for (const prefix of ['webkit', 'moz']) {
        const prefixedName = "-" + prefix + "-" + name;
        if (prefixedName in style) {
          return prefixedName;
        }
      }
    }

    function addClass(element) {for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {args[_key - 1] = arguments[_key];}
      apply$1(element, args, 'add');
    }

    function removeClass(element) {for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {args[_key2 - 1] = arguments[_key2];}
      apply$1(element, args, 'remove');
    }

    function removeClasses(element, cls) {
      attr(element, 'class', (value) =>
      (value || '').replace(new RegExp("\\b" + cls + "\\b\\s?", 'g'), ''));

    }

    function replaceClass(element) {
      (arguments.length <= 1 ? undefined : arguments[1]) && removeClass(element, arguments.length <= 1 ? undefined : arguments[1]);
      (arguments.length <= 2 ? undefined : arguments[2]) && addClass(element, arguments.length <= 2 ? undefined : arguments[2]);
    }

    function hasClass(element, cls) {
      [cls] = getClasses(cls);
      return !!cls && toNodes(element).some((node) => node.classList.contains(cls));
    }

    function toggleClass(element, cls, force) {
      const classes = getClasses(cls);

      if (!isUndefined(force)) {
        force = !!force;
      }

      for (const node of toNodes(element)) {
        for (const cls of classes) {
          node.classList.toggle(cls, force);
        }
      }
    }

    function apply$1(element, args, fn) {
      args = args.reduce((args, arg) => args.concat(getClasses(arg)), []);

      for (const node of toNodes(element)) {
        node.classList[fn](...args);
      }
    }

    function getClasses(str) {
      return String(str).split(/\s|,/).filter(Boolean);
    }

    function transition(element, props, duration, timing) {if (duration === void 0) {duration = 400;}if (timing === void 0) {timing = 'linear';}
      duration = Math.round(duration);
      return Promise.all(
      toNodes(element).map(
      (element) =>
      new Promise((resolve, reject) => {
        for (const name in props) {
          const value = css(element, name);
          if (value === '') {
            css(element, name, value);
          }
        }

        const timer = setTimeout(() => trigger(element, 'transitionend'), duration);

        once(
        element,
        'transitionend transitioncanceled',
        (_ref) => {let { type } = _ref;
          clearTimeout(timer);
          removeClass(element, 'uk-transition');
          css(element, {
            transitionProperty: '',
            transitionDuration: '',
            transitionTimingFunction: '' });

          type === 'transitioncanceled' ? reject() : resolve(element);
        },
        { self: true });


        addClass(element, 'uk-transition');
        css(element, {
          transitionProperty: Object.keys(props).map(propName).join(','),
          transitionDuration: duration + "ms",
          transitionTimingFunction: timing,
          ...props });

      })));


    }

    const Transition = {
      start: transition,

      async stop(element) {
        trigger(element, 'transitionend');
        await Promise.resolve();
      },

      async cancel(element) {
        trigger(element, 'transitioncanceled');
        await Promise.resolve();
      },

      inProgress(element) {
        return hasClass(element, 'uk-transition');
      } };


    const animationPrefix = 'uk-animation-';

    function animate$2(element, animation, duration, origin, out) {if (duration === void 0) {duration = 200;}
      return Promise.all(
      toNodes(element).map(
      (element) =>
      new Promise((resolve, reject) => {
        trigger(element, 'animationcanceled');
        const timer = setTimeout(() => trigger(element, 'animationend'), duration);

        once(
        element,
        'animationend animationcanceled',
        (_ref2) => {let { type } = _ref2;
          clearTimeout(timer);

          type === 'animationcanceled' ? reject() : resolve(element);

          css(element, 'animationDuration', '');
          removeClasses(element, animationPrefix + "\\S*");
        },
        { self: true });


        css(element, 'animationDuration', duration + "ms");
        addClass(element, animation, animationPrefix + (out ? 'leave' : 'enter'));

        if (startsWith(animation, animationPrefix)) {
          origin && addClass(element, "uk-transform-origin-" + origin);
          out && addClass(element, animationPrefix + "reverse");
        }
      })));


    }

    const inProgressRe = new RegExp(animationPrefix + "(enter|leave)");

    const Animation = {
      in: animate$2,

      out(element, animation, duration, origin) {
        return animate$2(element, animation, duration, origin, true);
      },

      inProgress(element) {
        return inProgressRe.test(attr(element, 'class'));
      },

      cancel(element) {
        trigger(element, 'animationcanceled');
      } };

    const dirs$1 = {
      width: ['left', 'right'],
      height: ['top', 'bottom'] };


    function dimensions$1(element) {
      const rect = isElement(element) ?
      toNode(element).getBoundingClientRect() :
      { height: height(element), width: width(element), top: 0, left: 0 };

      return {
        height: rect.height,
        width: rect.width,
        top: rect.top,
        left: rect.left,
        bottom: rect.top + rect.height,
        right: rect.left + rect.width };

    }

    function offset(element, coordinates) {
      const currentOffset = dimensions$1(element);

      if (element) {
        const { scrollY, scrollX } = toWindow(element);
        const offsetBy = { height: scrollY, width: scrollX };

        for (const dir in dirs$1) {
          for (const prop of dirs$1[dir]) {
            currentOffset[prop] += offsetBy[dir];
          }
        }
      }

      if (!coordinates) {
        return currentOffset;
      }

      const pos = css(element, 'position');

      each(css(element, ['left', 'top']), (value, prop) =>
      css(
      element,
      prop,
      coordinates[prop] -
      currentOffset[prop] +
      toFloat(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value)));


    }

    function position(element) {
      let { top, left } = offset(element);

      const {
        ownerDocument: { body, documentElement },
        offsetParent } =
      toNode(element);
      let parent = offsetParent || documentElement;

      while (
      parent && (
      parent === body || parent === documentElement) &&
      css(parent, 'position') === 'static')
      {
        parent = parent.parentNode;
      }

      if (isElement(parent)) {
        const parentOffset = offset(parent);
        top -= parentOffset.top + toFloat(css(parent, 'borderTopWidth'));
        left -= parentOffset.left + toFloat(css(parent, 'borderLeftWidth'));
      }

      return {
        top: top - toFloat(css(element, 'marginTop')),
        left: left - toFloat(css(element, 'marginLeft')) };

    }

    function offsetPosition(element) {
      element = toNode(element);

      const offset = [element.offsetTop, element.offsetLeft];

      while (element = element.offsetParent) {
        offset[0] += element.offsetTop + toFloat(css(element, "borderTopWidth"));
        offset[1] += element.offsetLeft + toFloat(css(element, "borderLeftWidth"));

        if (css(element, 'position') === 'fixed') {
          const win = toWindow(element);
          offset[0] += win.scrollY;
          offset[1] += win.scrollX;
          return offset;
        }
      }

      return offset;
    }

    const height = dimension('height');
    const width = dimension('width');

    function dimension(prop) {
      const propName = ucfirst(prop);
      return (element, value) => {
        if (isUndefined(value)) {
          if (isWindow(element)) {
            return element["inner" + propName];
          }

          if (isDocument(element)) {
            const doc = element.documentElement;
            return Math.max(doc["offset" + propName], doc["scroll" + propName]);
          }

          element = toNode(element);

          value = css(element, prop);
          value = value === 'auto' ? element["offset" + propName] : toFloat(value) || 0;

          return value - boxModelAdjust(element, prop);
        } else {
          return css(
          element,
          prop,
          !value && value !== 0 ? '' : +value + boxModelAdjust(element, prop) + 'px');

        }
      };
    }

    function boxModelAdjust(element, prop, sizing) {if (sizing === void 0) {sizing = 'border-box';}
      return css(element, 'boxSizing') === sizing ?
      dirs$1[prop].
      map(ucfirst).
      reduce(
      (value, prop) =>
      value +
      toFloat(css(element, "padding" + prop)) +
      toFloat(css(element, "border" + prop + "Width")),
      0) :

      0;
    }

    function flipPosition(pos) {
      for (const dir in dirs$1) {
        for (const i in dirs$1[dir]) {
          if (dirs$1[dir][i] === pos) {
            return dirs$1[dir][1 - i];
          }
        }
      }
      return pos;
    }

    function toPx(value, property, element, offsetDim) {if (property === void 0) {property = 'width';}if (element === void 0) {element = window;}if (offsetDim === void 0) {offsetDim = false;}
      if (!isString(value)) {
        return toFloat(value);
      }

      return parseCalc(value).reduce((result, value) => {
        const unit = parseUnit(value);
        if (unit) {
          value = percent(
          unit === 'vh' ?
          height(toWindow(element)) :
          unit === 'vw' ?
          width(toWindow(element)) :
          offsetDim ?
          element["offset" + ucfirst(property)] :
          dimensions$1(element)[property],
          value);

        }

        return result + toFloat(value);
      }, 0);
    }

    const calcRe = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g;
    const parseCalc = memoize((calc) => calc.toString().replace(/\s/g, '').match(calcRe) || []);
    const unitRe$1 = /(?:v[hw]|%)$/;
    const parseUnit = memoize((str) => (str.match(unitRe$1) || [])[0]);

    function percent(base, value) {
      return base * toFloat(value) / 100;
    }

    function ready(fn) {
      if (document.readyState !== 'loading') {
        fn();
        return;
      }

      once(document, 'DOMContentLoaded', fn);
    }

    function isTag(element, tagName) {var _element$tagName;
      return (element == null ? void 0 : (_element$tagName = element.tagName) == null ? void 0 : _element$tagName.toLowerCase()) === tagName.toLowerCase();
    }

    function empty(element) {
      element = $(element);
      element.innerHTML = '';
      return element;
    }

    function html(parent, html) {
      return isUndefined(html) ? $(parent).innerHTML : append(empty(parent), html);
    }

    const prepend = applyFn('prepend');
    const append = applyFn('append');
    const before = applyFn('before');
    const after = applyFn('after');

    function applyFn(fn) {
      return function (ref, element) {var _$;
        const nodes = toNodes(isString(element) ? fragment(element) : element);
        (_$ = $(ref)) == null ? void 0 : _$[fn](...nodes);
        return unwrapSingle(nodes);
      };
    }

    function remove$1(element) {
      toNodes(element).forEach((element) => element.remove());
    }

    function wrapAll(element, structure) {
      structure = toNode(before(element, structure));

      while (structure.firstChild) {
        structure = structure.firstChild;
      }

      append(structure, element);

      return structure;
    }

    function wrapInner(element, structure) {
      return toNodes(
      toNodes(element).map((element) =>
      element.hasChildNodes() ?
      wrapAll(toNodes(element.childNodes), structure) :
      append(element, structure)));


    }

    function unwrap(element) {
      toNodes(element).
      map(parent).
      filter((value, index, self) => self.indexOf(value) === index).
      forEach((parent) => parent.replaceWith(...parent.childNodes));
    }

    const fragmentRe = /^\s*<(\w+|!)[^>]*>/;
    const singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function fragment(html) {
      const matches = singleTagRe.exec(html);
      if (matches) {
        return document.createElement(matches[1]);
      }

      const container = document.createElement('div');
      if (fragmentRe.test(html)) {
        container.insertAdjacentHTML('beforeend', html.trim());
      } else {
        container.textContent = html;
      }

      return unwrapSingle(container.childNodes);
    }

    function unwrapSingle(nodes) {
      return nodes.length > 1 ? nodes : nodes[0];
    }

    function apply(node, fn) {
      if (!isElement(node)) {
        return;
      }

      fn(node);
      node = node.firstElementChild;
      while (node) {
        const next = node.nextElementSibling;
        apply(node, fn);
        node = next;
      }
    }

    function $(selector, context) {
      return isHtml(selector) ? toNode(fragment(selector)) : find(selector, context);
    }

    function $$(selector, context) {
      return isHtml(selector) ? toNodes(fragment(selector)) : findAll(selector, context);
    }

    function isHtml(str) {
      return isString(str) && startsWith(str.trim(), '<');
    }

    const inBrowser = typeof window !== 'undefined';
    const isRtl = inBrowser && attr(document.documentElement, 'dir') === 'rtl';

    const hasTouch = inBrowser && 'ontouchstart' in window;
    const hasPointerEvents = inBrowser && window.PointerEvent;

    const pointerDown$1 = hasPointerEvents ? 'pointerdown' : hasTouch ? 'touchstart' : 'mousedown';
    const pointerMove$1 = hasPointerEvents ? 'pointermove' : hasTouch ? 'touchmove' : 'mousemove';
    const pointerUp$1 = hasPointerEvents ? 'pointerup' : hasTouch ? 'touchend' : 'mouseup';
    const pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouch ? '' : 'mouseenter';
    const pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouch ? '' : 'mouseleave';
    const pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';

    /*
        Based on:
        Copyright (c) 2016 Wilson Page wilsonpage@me.com
        https://github.com/wilsonpage/fastdom
    */

    const fastdom = {
      reads: [],
      writes: [],

      read(task) {
        this.reads.push(task);
        scheduleFlush();
        return task;
      },

      write(task) {
        this.writes.push(task);
        scheduleFlush();
        return task;
      },

      clear(task) {
        remove(this.reads, task);
        remove(this.writes, task);
      },

      flush };


    function flush(recursion) {
      runTasks(fastdom.reads);
      runTasks(fastdom.writes.splice(0));

      fastdom.scheduled = false;

      if (fastdom.reads.length || fastdom.writes.length) {
        scheduleFlush(recursion + 1);
      }
    }

    const RECURSION_LIMIT = 4;
    function scheduleFlush(recursion) {
      if (fastdom.scheduled) {
        return;
      }

      fastdom.scheduled = true;
      if (recursion && recursion < RECURSION_LIMIT) {
        Promise.resolve().then(() => flush(recursion));
      } else {
        requestAnimationFrame(() => flush(1));
      }
    }

    function runTasks(tasks) {
      let task;
      while (task = tasks.shift()) {
        try {
          task();
        } catch (e) {
          console.error(e);
        }
      }
    }

    function remove(array, item) {
      const index = array.indexOf(item);
      return ~index && array.splice(index, 1);
    }

    function MouseTracker() {}

    MouseTracker.prototype = {
      positions: [],

      init() {
        this.positions = [];

        let position;
        this.unbind = on(document, 'mousemove', (e) => position = getEventPos(e));
        this.interval = setInterval(() => {
          if (!position) {
            return;
          }

          this.positions.push(position);

          if (this.positions.length > 5) {
            this.positions.shift();
          }
        }, 50);
      },

      cancel() {var _this$unbind;
        (_this$unbind = this.unbind) == null ? void 0 : _this$unbind.call(this);
        this.interval && clearInterval(this.interval);
      },

      movesTo(target) {
        if (this.positions.length < 2) {
          return false;
        }

        const p = target.getBoundingClientRect();
        const { left, right, top, bottom } = p;

        const [prevPosition] = this.positions;
        const position = last(this.positions);
        const path = [prevPosition, position];

        if (pointInRect(position, p)) {
          return false;
        }

        const diagonals = [
        [
        { x: left, y: top },
        { x: right, y: bottom }],

        [
        { x: left, y: bottom },
        { x: right, y: top }]];



        return diagonals.some((diagonal) => {
          const intersection = intersect(path, diagonal);
          return intersection && pointInRect(intersection, p);
        });
      } };


    // Inspired by http://paulbourke.net/geometry/pointlineplane/
    function intersect(_ref, _ref2) {let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = _ref;let [{ x: x3, y: y3 }, { x: x4, y: y4 }] = _ref2;
      const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

      // Lines are parallel
      if (denominator === 0) {
        return false;
      }

      const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;

      if (ua < 0) {
        return false;
      }

      // Return an object with the x and y coordinates of the intersection
      return { x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1) };
    }

    function observeIntersection(targets, cb, options, intersecting) {if (intersecting === void 0) {intersecting = true;}
      const observer = new IntersectionObserver(
      intersecting ?
      (entries, observer) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          cb(entries, observer);
        }
      } :
      cb,
      options);

      for (const el of toNodes(targets)) {
        observer.observe(el);
      }

      return observer;
    }

    const hasResizeObserver = inBrowser && window.ResizeObserver;
    function observeResize(targets, cb, options) {if (options === void 0) {options = { box: 'border-box' };}
      if (hasResizeObserver) {
        return observe(ResizeObserver, targets, cb, options);
      }

      // Fallback Safari < 13.1
      initResizeListener();
      listeners.add(cb);

      return {
        disconnect() {
          listeners.delete(cb);
        } };

    }

    let listeners;
    function initResizeListener() {
      if (listeners) {
        return;
      }

      listeners = new Set();

      // throttle 'resize'
      let pendingResize;
      const handleResize = () => {
        if (pendingResize) {
          return;
        }
        pendingResize = true;
        fastdom.read(() => pendingResize = false);
        for (const listener of listeners) {
          listener();
        }
      };

      on(window, 'load resize', handleResize);
      on(document, 'loadedmetadata load', handleResize, true);
    }

    function observeMutation(targets, cb, options) {
      return observe(MutationObserver, targets, cb, options);
    }

    function observe(Observer, targets, cb, options) {
      const observer = new Observer(cb);
      for (const el of toNodes(targets)) {
        observer.observe(el, options);
      }

      return observer;
    }

    const strats = {};

    strats.events =
    strats.created =
    strats.beforeConnect =
    strats.connected =
    strats.beforeDisconnect =
    strats.disconnected =
    strats.destroy =
    concatStrat;

    // args strategy
    strats.args = function (parentVal, childVal) {
      return childVal !== false && concatStrat(childVal || parentVal);
    };

    // update strategy
    strats.update = function (parentVal, childVal) {
      return sortBy$1(
      concatStrat(parentVal, isFunction(childVal) ? { read: childVal } : childVal),
      'order');

    };

    // property strategy
    strats.props = function (parentVal, childVal) {
      if (isArray(childVal)) {
        const value = {};
        for (const key of childVal) {
          value[key] = String;
        }
        childVal = value;
      }

      return strats.methods(parentVal, childVal);
    };

    // extend strategy
    strats.computed = strats.methods = function (parentVal, childVal) {
      return childVal ? parentVal ? { ...parentVal, ...childVal } : childVal : parentVal;
    };

    // data strategy
    strats.data = function (parentVal, childVal, vm) {
      if (!vm) {
        if (!childVal) {
          return parentVal;
        }

        if (!parentVal) {
          return childVal;
        }

        return function (vm) {
          return mergeFnData(parentVal, childVal, vm);
        };
      }

      return mergeFnData(parentVal, childVal, vm);
    };

    function mergeFnData(parentVal, childVal, vm) {
      return strats.computed(
      isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal,
      isFunction(childVal) ? childVal.call(vm, vm) : childVal);

    }

    // concat strategy
    function concatStrat(parentVal, childVal) {
      parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;

      return childVal ?
      parentVal ?
      parentVal.concat(childVal) :
      isArray(childVal) ?
      childVal :
      [childVal] :
      parentVal;
    }

    // default strategy
    function defaultStrat(parentVal, childVal) {
      return isUndefined(childVal) ? parentVal : childVal;
    }

    function mergeOptions(parent, child, vm) {
      const options = {};

      if (isFunction(child)) {
        child = child.options;
      }

      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }

      if (child.mixins) {
        for (const mixin of child.mixins) {
          parent = mergeOptions(parent, mixin, vm);
        }
      }

      for (const key in parent) {
        mergeKey(key);
      }

      for (const key in child) {
        if (!hasOwn(parent, key)) {
          mergeKey(key);
        }
      }

      function mergeKey(key) {
        options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
      }

      return options;
    }

    function parseOptions(options, args) {if (args === void 0) {args = [];}
      try {
        return options ?
        startsWith(options, '{') ?
        JSON.parse(options) :
        args.length && !includes(options, ':') ?
        { [args[0]]: options } :
        options.split(';').reduce((options, option) => {
          const [key, value] = option.split(/:(.*)/);
          if (key && !isUndefined(value)) {
            options[key.trim()] = value.trim();
          }
          return options;
        }, {}) :
        {};
      } catch (e) {
        return {};
      }
    }

    function play(el) {
      if (isIFrame(el)) {
        call(el, { func: 'playVideo', method: 'play' });
      }

      if (isHTML5(el)) {
        try {
          el.play().catch(noop);
        } catch (e) {
          // noop
        }
      }
    }

    function pause(el) {
      if (isIFrame(el)) {
        call(el, { func: 'pauseVideo', method: 'pause' });
      }

      if (isHTML5(el)) {
        el.pause();
      }
    }

    function mute(el) {
      if (isIFrame(el)) {
        call(el, { func: 'mute', method: 'setVolume', value: 0 });
      }

      if (isHTML5(el)) {
        el.muted = true;
      }
    }

    function isVideo(el) {
      return isHTML5(el) || isIFrame(el);
    }

    function isHTML5(el) {
      return isTag(el, 'video');
    }

    function isIFrame(el) {
      return isTag(el, 'iframe') && (isYoutube(el) || isVimeo(el));
    }

    function isYoutube(el) {
      return !!el.src.match(
      /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);

    }

    function isVimeo(el) {
      return !!el.src.match(/vimeo\.com\/video\/.*/);
    }

    async function call(el, cmd) {
      await enableApi(el);
      post(el, cmd);
    }

    function post(el, cmd) {
      try {
        el.contentWindow.postMessage(JSON.stringify({ event: 'command', ...cmd }), '*');
      } catch (e) {
        // noop
      }
    }

    const stateKey = '_ukPlayer';
    let counter = 0;
    function enableApi(el) {
      if (el[stateKey]) {
        return el[stateKey];
      }

      const youtube = isYoutube(el);
      const vimeo = isVimeo(el);

      const id = ++counter;
      let poller;

      return el[stateKey] = new Promise((resolve) => {
        youtube &&
        once(el, 'load', () => {
          const listener = () => post(el, { event: 'listening', id });
          poller = setInterval(listener, 100);
          listener();
        });

        once(window, 'message', resolve, false, (_ref) => {let { data } = _ref;
          try {
            data = JSON.parse(data);
            return (
              data && (
              youtube && data.id === id && data.event === 'onReady' ||
              vimeo && Number(data.player_id) === id));

          } catch (e) {
            // noop
          }
        });

        el.src = "" + el.src + (includes(el.src, '?') ? '&' : '?') + (
        youtube ? 'enablejsapi=1' : "api=1&player_id=" + id);

      }).then(() => clearInterval(poller));
    }

    function isInView(element, offsetTop, offsetLeft) {if (offsetTop === void 0) {offsetTop = 0;}if (offsetLeft === void 0) {offsetLeft = 0;}
      if (!isVisible(element)) {
        return false;
      }

      return intersectRect(
      ...scrollParents(element).
      map((parent) => {
        const { top, left, bottom, right } = offsetViewport(parent);

        return {
          top: top - offsetTop,
          left: left - offsetLeft,
          bottom: bottom + offsetTop,
          right: right + offsetLeft };

      }).
      concat(offset(element)));

    }

    function scrollIntoView(element, _temp) {let { offset: offsetBy = 0 } = _temp === void 0 ? {} : _temp;
      const parents = isVisible(element) ? scrollParents(element) : [];
      return parents.reduce(
      (fn, scrollElement, i) => {
        const { scrollTop, scrollHeight, offsetHeight } = scrollElement;
        const viewport = offsetViewport(scrollElement);
        const maxScroll = scrollHeight - viewport.height;
        const { height: elHeight, top: elTop } = parents[i - 1] ?
        offsetViewport(parents[i - 1]) :
        offset(element);

        let top = Math.ceil(elTop - viewport.top - offsetBy + scrollTop);

        if (offsetBy > 0 && offsetHeight < elHeight + offsetBy) {
          top += offsetBy;
        } else {
          offsetBy = 0;
        }

        if (top > maxScroll) {
          offsetBy -= top - maxScroll;
          top = maxScroll;
        } else if (top < 0) {
          offsetBy -= top;
          top = 0;
        }

        return () => scrollTo(scrollElement, top - scrollTop).then(fn);
      },
      () => Promise.resolve())();


      function scrollTo(element, top) {
        return new Promise((resolve) => {
          const scroll = element.scrollTop;
          const duration = getDuration(Math.abs(top));
          const start = Date.now();

          (function step() {
            const percent = ease(clamp((Date.now() - start) / duration));

            element.scrollTop = scroll + top * percent;

            // scroll more if we have not reached our destination
            if (percent === 1) {
              resolve();
            } else {
              requestAnimationFrame(step);
            }
          })();
        });
      }

      function getDuration(dist) {
        return 40 * Math.pow(dist, 0.375);
      }

      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
    }

    function scrolledOver(element, startOffset, endOffset) {if (startOffset === void 0) {startOffset = 0;}if (endOffset === void 0) {endOffset = 0;}
      if (!isVisible(element)) {
        return 0;
      }

      const [scrollElement] = scrollParents(element, /auto|scroll/, true);
      const { scrollHeight, scrollTop } = scrollElement;
      const { height: viewportHeight } = offsetViewport(scrollElement);
      const maxScroll = scrollHeight - viewportHeight;
      const elementOffsetTop = offsetPosition(element)[0] - offsetPosition(scrollElement)[0];

      const start = Math.max(0, elementOffsetTop - viewportHeight + startOffset);
      const end = Math.min(maxScroll, elementOffsetTop + element.offsetHeight - endOffset);

      return clamp((scrollTop - start) / (end - start));
    }

    function scrollParents(element, overflowRe, scrollable) {if (overflowRe === void 0) {overflowRe = /auto|scroll|hidden|clip/;}if (scrollable === void 0) {scrollable = false;}
      const scrollEl = scrollingElement(element);

      let ancestors = parents(element).reverse();
      ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);

      const fixedIndex = findIndex(ancestors, (el) => css(el, 'position') === 'fixed');
      if (~fixedIndex) {
        ancestors = ancestors.slice(fixedIndex);
      }

      return [scrollEl].
      concat(
      ancestors.filter(
      (parent) =>
      overflowRe.test(css(parent, 'overflow')) && (
      !scrollable || parent.scrollHeight > offsetViewport(parent).height))).


      reverse();
    }

    function offsetViewport(scrollElement) {
      const window = toWindow(scrollElement);
      const {
        document: { documentElement } } =
      window;
      let viewportElement =
      scrollElement === scrollingElement(scrollElement) ? window : scrollElement;

      const { visualViewport } = window;
      if (isWindow(viewportElement) && visualViewport) {
        let { height, width, scale, pageTop: top, pageLeft: left } = visualViewport;
        height = Math.round(height * scale);
        width = Math.round(width * scale);
        return { height, width, top, left, bottom: top + height, right: left + width };
      }

      let rect = offset(viewportElement);
      for (let [prop, dir, start, end] of [
      ['width', 'x', 'left', 'right'],
      ['height', 'y', 'top', 'bottom']])
      {
        if (isWindow(viewportElement)) {
          // iOS 12 returns <body> as scrollingElement
          viewportElement = documentElement;
        } else {
          rect[start] += toFloat(css(viewportElement, "border-" + start + "-width"));
        }
        rect[prop] = rect[dir] = viewportElement["client" + ucfirst(prop)];
        rect[end] = rect[prop] + rect[start];
      }
      return rect;
    }

    function scrollingElement(element) {
      return toWindow(element).document.scrollingElement;
    }

    const dirs = [
    ['width', 'x', 'left', 'right'],
    ['height', 'y', 'top', 'bottom']];


    function positionAt(element, target, options) {
      options = {
        attach: {
          element: ['left', 'top'],
          target: ['left', 'top'],
          ...options.attach },

        offset: [0, 0],
        placement: [],
        ...options };


      if (!isArray(target)) {
        target = [target, target];
      }

      offset(element, getPosition(element, target, options));
    }

    function getPosition(element, target, options) {
      const position = attachTo(element, target, options);
      const { boundary, viewportOffset = 0, placement } = options;

      let offsetPosition = position;
      for (const [i, [prop,, start, end]] of Object.entries(dirs)) {
        const viewport = getViewport$1(target[i], viewportOffset, boundary, i);

        if (isWithin(position, viewport, i)) {
          continue;
        }

        let offsetBy = 0;

        // Flip
        if (placement[i] === 'flip') {
          const attach = options.attach.target[i];
          if (
          attach === end && position[end] <= viewport[end] ||
          attach === start && position[start] >= viewport[start])
          {
            continue;
          }

          offsetBy = flip(element, target, options, i)[start] - position[start];

          const scrollArea = getScrollArea(target[i], viewportOffset, i);

          if (!isWithin(applyOffset(position, offsetBy, i), scrollArea, i)) {
            if (isWithin(position, scrollArea, i)) {
              continue;
            }

            if (options.recursion) {
              return false;
            }

            const newPos = flipAxis(element, target, options);

            if (newPos && isWithin(newPos, scrollArea, 1 - i)) {
              return newPos;
            }

            continue;
          }

          // Shift
        } else if (placement[i] === 'shift') {
          const targetDim = offset(target[i]);
          const { offset: elOffset } = options;
          offsetBy =
          clamp(
          clamp(position[start], viewport[start], viewport[end] - position[prop]),
          targetDim[start] - position[prop] + elOffset[i],
          targetDim[end] - elOffset[i]) -
          position[start];
        }

        offsetPosition = applyOffset(offsetPosition, offsetBy, i);
      }

      return offsetPosition;
    }

    function attachTo(element, target, options) {
      let { attach, offset: offsetBy } = {
        attach: {
          element: ['left', 'top'],
          target: ['left', 'top'],
          ...options.attach },

        offset: [0, 0],
        ...options };


      let elOffset = offset(element);

      for (const [i, [prop,, start, end]] of Object.entries(dirs)) {
        const targetOffset =
        attach.target[i] === attach.element[i] ? offsetViewport(target[i]) : offset(target[i]);

        elOffset = applyOffset(
        elOffset,
        targetOffset[start] -
        elOffset[start] +
        moveBy(attach.target[i], end, targetOffset[prop]) -
        moveBy(attach.element[i], end, elOffset[prop]) +
        +offsetBy[i],
        i);

      }
      return elOffset;
    }

    function applyOffset(position, offset, i) {
      const [, dir, start, end] = dirs[i];
      const newPos = { ...position };
      newPos[start] = position[dir] = position[start] + offset;
      newPos[end] += offset;
      return newPos;
    }

    function moveBy(attach, end, dim) {
      return attach === 'center' ? dim / 2 : attach === end ? dim : 0;
    }

    function getViewport$1(element, viewportOffset, boundary, i) {
      let viewport = getIntersectionArea(...scrollParents(element).map(offsetViewport));

      if (viewportOffset) {
        viewport[dirs[i][2]] += viewportOffset;
        viewport[dirs[i][3]] -= viewportOffset;
      }

      if (boundary) {
        viewport = getIntersectionArea(viewport, offset(boundary));
      }

      return viewport;
    }

    function getScrollArea(element, viewportOffset, i) {
      const [prop,, start, end] = dirs[i];
      const [scrollElement] = scrollParents(element);
      const viewport = offsetViewport(scrollElement);
      viewport[start] -= scrollElement["scroll" + ucfirst(start)] - viewportOffset;
      viewport[end] = viewport[start] + scrollElement["scroll" + ucfirst(prop)] - viewportOffset;
      return viewport;
    }

    function getIntersectionArea() {
      let area = {};for (var _len = arguments.length, rects = new Array(_len), _key = 0; _key < _len; _key++) {rects[_key] = arguments[_key];}
      for (const rect of rects) {
        for (const [,, start, end] of dirs) {
          area[start] = Math.max(area[start] || 0, rect[start]);
          area[end] = Math.min(...[area[end], rect[end]].filter(Boolean));
        }
      }
      return area;
    }

    function isWithin(positionA, positionB, i) {
      const [,, start, end] = dirs[i];
      return positionA[start] >= positionB[start] && positionA[end] <= positionB[end];
    }

    function flip(element, target, _ref, i) {let { offset, attach } = _ref;
      return attachTo(element, target, {
        attach: {
          element: flipAttach(attach.element, i),
          target: flipAttach(attach.target, i) },

        offset: flipOffset(offset, i) });

    }

    function flipAxis(element, target, options) {
      return getPosition(element, target, {
        ...options,
        attach: {
          element: options.attach.element.map(flipAttachAxis).reverse(),
          target: options.attach.target.map(flipAttachAxis).reverse() },

        offset: options.offset.reverse(),
        placement: options.placement.reverse(),
        recursion: true });

    }

    function flipAttach(attach, i) {
      const newAttach = [...attach];
      const index = dirs[i].indexOf(attach[i]);
      if (~index) {
        newAttach[i] = dirs[i][1 - index % 2 + 2];
      }
      return newAttach;
    }

    function flipAttachAxis(prop) {
      for (let i = 0; i < dirs.length; i++) {
        const index = dirs[i].indexOf(prop);
        if (~index) {
          return dirs[1 - i][index % 2 + 2];
        }
      }
    }

    function flipOffset(offset, i) {
      offset = [...offset];
      offset[i] *= -1;
      return offset;
    }

    var util = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ajax: ajax,
        getImage: getImage,
        Transition: Transition,
        Animation: Animation,
        attr: attr,
        hasAttr: hasAttr,
        removeAttr: removeAttr,
        data: data,
        addClass: addClass,
        removeClass: removeClass,
        removeClasses: removeClasses,
        replaceClass: replaceClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        dimensions: dimensions$1,
        offset: offset,
        position: position,
        offsetPosition: offsetPosition,
        height: height,
        width: width,
        boxModelAdjust: boxModelAdjust,
        flipPosition: flipPosition,
        toPx: toPx,
        ready: ready,
        isTag: isTag,
        empty: empty,
        html: html,
        prepend: prepend,
        append: append,
        before: before,
        after: after,
        remove: remove$1,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        fragment: fragment,
        apply: apply,
        $: $,
        $$: $$,
        inBrowser: inBrowser,
        isRtl: isRtl,
        hasTouch: hasTouch,
        pointerDown: pointerDown$1,
        pointerMove: pointerMove$1,
        pointerUp: pointerUp$1,
        pointerEnter: pointerEnter,
        pointerLeave: pointerLeave,
        pointerCancel: pointerCancel,
        on: on,
        off: off,
        once: once,
        trigger: trigger,
        createEvent: createEvent,
        toEventTargets: toEventTargets,
        isTouch: isTouch,
        getEventPos: getEventPos,
        fastdom: fastdom,
        isVoidElement: isVoidElement,
        isVisible: isVisible,
        selInput: selInput,
        isInput: isInput,
        selFocusable: selFocusable,
        isFocusable: isFocusable,
        parent: parent,
        filter: filter$1,
        matches: matches,
        closest: closest,
        within: within,
        parents: parents,
        children: children,
        index: index,
        hasOwn: hasOwn,
        hyphenate: hyphenate,
        camelize: camelize,
        ucfirst: ucfirst,
        startsWith: startsWith,
        endsWith: endsWith,
        includes: includes,
        findIndex: findIndex,
        isArray: isArray,
        toArray: toArray,
        assign: assign,
        isFunction: isFunction,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isWindow: isWindow,
        isDocument: isDocument,
        isNode: isNode,
        isElement: isElement,
        isBoolean: isBoolean,
        isString: isString,
        isNumber: isNumber,
        isNumeric: isNumeric,
        isEmpty: isEmpty,
        isUndefined: isUndefined,
        toBoolean: toBoolean,
        toNumber: toNumber,
        toFloat: toFloat,
        toNode: toNode,
        toNodes: toNodes,
        toWindow: toWindow,
        isEqual: isEqual,
        swap: swap,
        last: last,
        each: each,
        sortBy: sortBy$1,
        uniqueBy: uniqueBy,
        clamp: clamp,
        noop: noop,
        intersectRect: intersectRect,
        pointInRect: pointInRect,
        Dimensions: Dimensions,
        getIndex: getIndex,
        memoize: memoize,
        Deferred: Deferred,
        MouseTracker: MouseTracker,
        observeIntersection: observeIntersection,
        observeResize: observeResize,
        observeMutation: observeMutation,
        mergeOptions: mergeOptions,
        parseOptions: parseOptions,
        play: play,
        pause: pause,
        mute: mute,
        isVideo: isVideo,
        positionAt: positionAt,
        query: query,
        queryAll: queryAll,
        find: find,
        findAll: findAll,
        escape: escape,
        css: css,
        propName: propName,
        isInView: isInView,
        scrollIntoView: scrollIntoView,
        scrolledOver: scrolledOver,
        scrollParents: scrollParents,
        offsetViewport: offsetViewport
    });

    function globalAPI (UIkit) {
      const DATA = UIkit.data;

      UIkit.use = function (plugin) {
        if (plugin.installed) {
          return;
        }

        plugin.call(null, this);
        plugin.installed = true;

        return this;
      };

      UIkit.mixin = function (mixin, component) {
        component = (isString(component) ? UIkit.component(component) : component) || this;
        component.options = mergeOptions(component.options, mixin);
      };

      UIkit.extend = function (options) {
        options = options || {};

        const Super = this;
        const Sub = function UIkitComponent(options) {
          this._init(options);
        };

        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.options = mergeOptions(Super.options, options);

        Sub.super = Super;
        Sub.extend = Super.extend;

        return Sub;
      };

      UIkit.update = function (element, e) {
        element = element ? toNode(element) : document.body;

        for (const parentEl of parents(element).reverse()) {
          update(parentEl[DATA], e);
        }

        apply(element, (element) => update(element[DATA], e));
      };

      let container;
      Object.defineProperty(UIkit, 'container', {
        get() {
          return container || document.body;
        },

        set(element) {
          container = $(element);
        } });


      function update(data, e) {
        if (!data) {
          return;
        }

        for (const name in data) {
          if (data[name]._connected) {
            data[name]._callUpdate(e);
          }
        }
      }
    }

    function hooksAPI (UIkit) {
      UIkit.prototype._callHook = function (hook) {var _this$$options$hook;
        (_this$$options$hook = this.$options[hook]) == null ? void 0 : _this$$options$hook.forEach((handler) => handler.call(this));
      };

      UIkit.prototype._callConnected = function () {
        if (this._connected) {
          return;
        }

        this._data = {};
        this._computed = {};

        this._initProps();

        this._callHook('beforeConnect');
        this._connected = true;

        this._initEvents();
        this._initObservers();

        this._callHook('connected');
        this._callUpdate();
      };

      UIkit.prototype._callDisconnected = function () {
        if (!this._connected) {
          return;
        }

        this._callHook('beforeDisconnect');
        this._disconnectObservers();
        this._unbindEvents();
        this._callHook('disconnected');

        this._connected = false;
        delete this._watch;
      };

      UIkit.prototype._callUpdate = function (e) {if (e === void 0) {e = 'update';}
        if (!this._connected) {
          return;
        }

        if (e === 'update' || e === 'resize') {
          this._callWatches();
        }

        if (!this.$options.update) {
          return;
        }

        if (!this._updates) {
          this._updates = new Set();
          fastdom.read(() => {
            if (this._connected) {
              runUpdates.call(this, this._updates);
            }
            delete this._updates;
          });
        }

        this._updates.add(e.type || e);
      };

      UIkit.prototype._callWatches = function () {
        if (this._watch) {
          return;
        }

        const initial = !hasOwn(this, '_watch');

        this._watch = fastdom.read(() => {
          if (this._connected) {
            runWatches.call(this, initial);
          }
          this._watch = null;
        });
      };

      function runUpdates(types) {
        for (const { read, write, events = [] } of this.$options.update) {
          if (!types.has('update') && !events.some((type) => types.has(type))) {
            continue;
          }

          let result;
          if (read) {
            result = read.call(this, this._data, types);

            if (result && isPlainObject(result)) {
              assign(this._data, result);
            }
          }

          if (write && result !== false) {
            fastdom.write(() => {
              if (this._connected) {
                write.call(this, this._data, types);
              }
            });
          }
        }
      }

      function runWatches(initial) {
        const {
          $options: { computed } } =
        this;
        const values = { ...this._computed };
        this._computed = {};

        for (const key in computed) {
          const { watch, immediate } = computed[key];
          if (
          watch && (
          initial && immediate ||
          hasOwn(values, key) && !isEqual(values[key], this[key])))
          {
            watch.call(this, this[key], values[key]);
          }
        }
      }
    }

    function stateAPI (UIkit) {
      let uid = 0;

      UIkit.prototype._init = function (options) {
        options = options || {};
        options.data = normalizeData(options, this.constructor.options);

        this.$options = mergeOptions(this.constructor.options, options, this);
        this.$el = null;
        this.$props = {};

        this._uid = uid++;
        this._initData();
        this._initMethods();
        this._initComputeds();
        this._callHook('created');

        if (options.el) {
          this.$mount(options.el);
        }
      };

      UIkit.prototype._initData = function () {
        const { data = {} } = this.$options;

        for (const key in data) {
          this.$props[key] = this[key] = data[key];
        }
      };

      UIkit.prototype._initMethods = function () {
        const { methods } = this.$options;

        if (methods) {
          for (const key in methods) {
            this[key] = methods[key].bind(this);
          }
        }
      };

      UIkit.prototype._initComputeds = function () {
        const { computed } = this.$options;

        this._computed = {};

        if (computed) {
          for (const key in computed) {
            registerComputed(this, key, computed[key]);
          }
        }
      };

      UIkit.prototype._initProps = function (props) {
        let key;

        props = props || getProps$1(this.$options, this.$name);

        for (key in props) {
          if (!isUndefined(props[key])) {
            this.$props[key] = props[key];
          }
        }

        const exclude = [this.$options.computed, this.$options.methods];
        for (key in this.$props) {
          if (key in props && notIn(exclude, key)) {
            this[key] = this.$props[key];
          }
        }
      };

      UIkit.prototype._initEvents = function () {
        this._events = [];
        for (const event of this.$options.events || []) {
          if (hasOwn(event, 'handler')) {
            registerEvent(this, event);
          } else {
            for (const key in event) {
              registerEvent(this, event[key], key);
            }
          }
        }
      };

      UIkit.prototype._unbindEvents = function () {
        this._events.forEach((unbind) => unbind());
        delete this._events;
      };

      UIkit.prototype._initObservers = function () {
        this._observers = [initPropsObserver(this)];

        if (this.$options.computed) {
          this.registerObserver(initChildListObserver(this));
        }
      };

      UIkit.prototype.registerObserver = function (observer) {
        this._observers.push(observer);
      };

      UIkit.prototype._disconnectObservers = function () {
        this._observers.forEach((observer) => observer == null ? void 0 : observer.disconnect());
      };
    }

    function getProps$1(opts, name) {
      const data$1 = {};
      const { args = [], props = {}, el } = opts;

      if (!props) {
        return data$1;
      }

      for (const key in props) {
        const prop = hyphenate(key);
        let value = data(el, prop);

        if (isUndefined(value)) {
          continue;
        }

        value = props[key] === Boolean && value === '' ? true : coerce$1(props[key], value);

        if (prop === 'target' && startsWith(value, '_')) {
          continue;
        }

        data$1[key] = value;
      }

      const options = parseOptions(data(el, name), args);

      for (const key in options) {
        const prop = camelize(key);
        if (!isUndefined(props[prop])) {
          data$1[prop] = coerce$1(props[prop], options[key]);
        }
      }

      return data$1;
    }

    function registerComputed(component, key, cb) {
      Object.defineProperty(component, key, {
        enumerable: true,

        get() {
          const { _computed, $props, $el } = component;

          if (!hasOwn(_computed, key)) {
            _computed[key] = (cb.get || cb).call(component, $props, $el);
          }

          return _computed[key];
        },

        set(value) {
          const { _computed } = component;

          _computed[key] = cb.set ? cb.set.call(component, value) : value;

          if (isUndefined(_computed[key])) {
            delete _computed[key];
          }
        } });

    }

    function registerEvent(component, event, key) {
      if (!isPlainObject(event)) {
        event = { name: key, handler: event };
      }

      let { name, el, handler, capture, passive, delegate, filter, self } = event;
      el = isFunction(el) ? el.call(component) : el || component.$el;

      if (isArray(el)) {
        el.forEach((el) => registerEvent(component, { ...event, el }, key));
        return;
      }

      if (!el || filter && !filter.call(component)) {
        return;
      }

      component._events.push(
      on(
      el,
      name,
      delegate ? isString(delegate) ? delegate : delegate.call(component) : null,
      isString(handler) ? component[handler] : handler.bind(component),
      { passive, capture, self }));


    }

    function notIn(options, key) {
      return options.every((arr) => !arr || !hasOwn(arr, key));
    }

    function coerce$1(type, value) {
      if (type === Boolean) {
        return toBoolean(value);
      } else if (type === Number) {
        return toNumber(value);
      } else if (type === 'list') {
        return toList(value);
      }

      return type ? type(value) : value;
    }

    function toList(value) {
      return isArray(value) ?
      value :
      isString(value) ?
      value.
      split(/,(?![^(]*\))/).
      map((value) => isNumeric(value) ? toNumber(value) : toBoolean(value.trim())) :
      [value];
    }

    function normalizeData(_ref, _ref2) {let { data = {} } = _ref;let { args = [], props = {} } = _ref2;
      if (isArray(data)) {
        data = data.slice(0, args.length).reduce((data, value, index) => {
          if (isPlainObject(value)) {
            assign(data, value);
          } else {
            data[args[index]] = value;
          }
          return data;
        }, {});
      }

      for (const key in data) {
        if (isUndefined(data[key])) {
          delete data[key];
        } else if (props[key]) {
          data[key] = coerce$1(props[key], data[key]);
        }
      }

      return data;
    }

    function initChildListObserver(component) {
      const { el } = component.$options;

      const observer = new MutationObserver(() => component.$emit());
      observer.observe(el, {
        childList: true,
        subtree: true });


      return observer;
    }

    function initPropsObserver(component) {
      const { $name, $options, $props } = component;
      const { attrs, props, el } = $options;

      if (!props || attrs === false) {
        return;
      }

      const attributes = isArray(attrs) ? attrs : Object.keys(props);
      const filter = attributes.map((key) => hyphenate(key)).concat($name);

      const observer = new MutationObserver((records) => {
        const data = getProps$1($options, $name);
        if (
        records.some((_ref3) => {let { attributeName } = _ref3;
          const prop = attributeName.replace('data-', '');
          return (
          prop === $name ? attributes : [camelize(prop), camelize(attributeName)]).
          some((prop) => !isUndefined(data[prop]) && data[prop] !== $props[prop]);
        }))
        {
          component.$reset();
        }
      });

      observer.observe(el, {
        attributes: true,
        attributeFilter: filter.concat(filter.map((key) => "data-" + key)) });


      return observer;
    }

    function instanceAPI (UIkit) {
      const DATA = UIkit.data;

      UIkit.prototype.$create = function (component, element, data) {
        return UIkit[component](element, data);
      };

      UIkit.prototype.$mount = function (el) {
        const { name } = this.$options;

        if (!el[DATA]) {
          el[DATA] = {};
        }

        if (el[DATA][name]) {
          return;
        }

        el[DATA][name] = this;

        this.$el = this.$options.el = this.$options.el || el;

        if (within(el, document)) {
          this._callConnected();
        }
      };

      UIkit.prototype.$reset = function () {
        this._callDisconnected();
        this._callConnected();
      };

      UIkit.prototype.$destroy = function (removeEl) {if (removeEl === void 0) {removeEl = false;}
        const { el, name } = this.$options;

        if (el) {
          this._callDisconnected();
        }

        this._callHook('destroy');

        if (!(el != null && el[DATA])) {
          return;
        }

        delete el[DATA][name];

        if (!isEmpty(el[DATA])) {
          delete el[DATA];
        }

        if (removeEl) {
          remove$1(this.$el);
        }
      };

      UIkit.prototype.$emit = function (e) {
        this._callUpdate(e);
      };

      UIkit.prototype.$update = function (element, e) {if (element === void 0) {element = this.$el;}
        UIkit.update(element, e);
      };

      UIkit.prototype.$getComponent = UIkit.getComponent;

      const componentName = memoize((name) => UIkit.prefix + hyphenate(name));
      Object.defineProperties(UIkit.prototype, {
        $container: Object.getOwnPropertyDescriptor(UIkit, 'container'),

        $name: {
          get() {
            return componentName(this.$options.name);
          } } });


    }

    function componentAPI (UIkit) {
      const DATA = UIkit.data;

      const components = {};

      UIkit.component = function (name, options) {
        const id = hyphenate(name);

        name = camelize(id);

        if (!options) {
          if (isPlainObject(components[name])) {
            components[name] = UIkit.extend(components[name]);
          }

          return components[name];
        }

        UIkit[name] = function (element, data) {
          const component = UIkit.component(name);

          return component.options.functional ?
          new component({ data: isPlainObject(element) ? element : [...arguments] }) :
          element ?
          $$(element).map(init)[0] :
          init();

          function init(element) {
            const instance = UIkit.getComponent(element, name);

            if (instance) {
              if (data) {
                instance.$destroy();
              } else {
                return instance;
              }
            }

            return new component({ el: element, data });
          }
        };

        const opt = isPlainObject(options) ? { ...options } : options.options;

        opt.name = name;

        opt.install == null ? void 0 : opt.install(UIkit, opt, name);

        if (UIkit._initialized && !opt.functional) {
          fastdom.read(() => UIkit[name]("[uk-" + id + "],[data-uk-" + id + "]"));
        }

        return components[name] = isPlainObject(options) ? opt : options;
      };

      UIkit.getComponents = (element) => (element == null ? void 0 : element[DATA]) || {};
      UIkit.getComponent = (element, name) => UIkit.getComponents(element)[name];

      UIkit.connect = (node) => {
        if (node[DATA]) {
          for (const name in node[DATA]) {
            node[DATA][name]._callConnected();
          }
        }

        for (const attribute of node.attributes) {
          const name = getComponentName(attribute.name);

          if (name && name in components) {
            UIkit[name](node);
          }
        }
      };

      UIkit.disconnect = (node) => {
        for (const name in node[DATA]) {
          node[DATA][name]._callDisconnected();
        }
      };
    }

    const getComponentName = memoize((attribute) => {
      return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-') ?
      camelize(attribute.replace('data-uk-', '').replace('uk-', '')) :
      false;
    });

    const UIkit = function (options) {
      this._init(options);
    };

    UIkit.util = util;
    UIkit.data = '__uikit__';
    UIkit.prefix = 'uk-';
    UIkit.options = {};
    UIkit.version = '3.15.1';

    globalAPI(UIkit);
    hooksAPI(UIkit);
    stateAPI(UIkit);
    componentAPI(UIkit);
    instanceAPI(UIkit);

    function boot (UIkit) {
      const { connect, disconnect } = UIkit;

      if (!inBrowser || !window.MutationObserver) {
        return;
      }

      fastdom.read(function () {
        if (document.body) {
          apply(document.body, connect);
        }

        new MutationObserver((records) => records.forEach(applyChildListMutation)).observe(
        document,
        {
          childList: true,
          subtree: true });



        new MutationObserver((records) => records.forEach(applyAttributeMutation)).observe(
        document,
        {
          attributes: true,
          subtree: true });



        UIkit._initialized = true;
      });

      function applyChildListMutation(_ref) {let { addedNodes, removedNodes } = _ref;
        for (const node of addedNodes) {
          apply(node, connect);
        }

        for (const node of removedNodes) {
          apply(node, disconnect);
        }
      }

      function applyAttributeMutation(_ref2) {var _UIkit$getComponent;let { target, attributeName } = _ref2;
        const name = getComponentName(attributeName);

        if (!name || !(name in UIkit)) {
          return;
        }

        if (hasAttr(target, attributeName)) {
          UIkit[name](target);
          return;
        }

        (_UIkit$getComponent = UIkit.getComponent(target, name)) == null ? void 0 : _UIkit$getComponent.$destroy();
      }
    }

    var Class = {
      connected() {
        !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
      } };

    var Lazyload = {
      data: {
        preload: 5 },


      methods: {
        lazyload(observeTargets, targets) {if (observeTargets === void 0) {observeTargets = this.$el;}if (targets === void 0) {targets = this.$el;}
          this.registerObserver(
          observeIntersection(observeTargets, (entries, observer) => {
            for (const el of toNodes(isFunction(targets) ? targets() : targets)) {
              $$('[loading="lazy"]', el).
              slice(0, this.preload - 1).
              forEach((el) => removeAttr(el, 'loading'));
            }

            for (const el of entries.
            filter((_ref) => {let { isIntersecting } = _ref;return isIntersecting;}).
            map((_ref2) => {let { target } = _ref2;return target;})) {
              observer.unobserve(el);
            }
          }));

        } } };

    var Togglable = {
      props: {
        cls: Boolean,
        animation: 'list',
        duration: Number,
        velocity: Number,
        origin: String,
        transition: String },


      data: {
        cls: false,
        animation: [false],
        duration: 200,
        velocity: 0.2,
        origin: false,
        transition: 'ease',
        clsEnter: 'uk-togglabe-enter',
        clsLeave: 'uk-togglabe-leave' },


      computed: {
        hasAnimation(_ref) {let { animation } = _ref;
          return !!animation[0];
        },

        hasTransition(_ref2) {let { animation } = _ref2;
          return ['slide', 'reveal'].some((transition) => startsWith(animation[0], transition));
        } },


      methods: {
        toggleElement(targets, toggle, animate) {
          return new Promise((resolve) =>
          Promise.all(
          toNodes(targets).map((el) => {
            const show = isBoolean(toggle) ? toggle : !this.isToggled(el);

            if (!trigger(el, "before" + (show ? 'show' : 'hide'), [this])) {
              return Promise.reject();
            }

            const promise = (
            isFunction(animate) ?
            animate :
            animate === false || !this.hasAnimation ?
            toggleInstant(this) :
            this.hasTransition ?
            toggleTransition(this) :
            toggleAnimation(this))(
            el, show);

            const cls = show ? this.clsEnter : this.clsLeave;

            addClass(el, cls);

            trigger(el, show ? 'show' : 'hide', [this]);

            const done = () => {
              removeClass(el, cls);
              trigger(el, show ? 'shown' : 'hidden', [this]);
              this.$update(el);
            };

            return promise ?
            promise.then(done, () => {
              removeClass(el, cls);
              return Promise.reject();
            }) :
            done();
          })).
          then(resolve, noop));

        },

        isToggled(el) {if (el === void 0) {el = this.$el;}
          [el] = toNodes(el);
          return hasClass(el, this.clsEnter) ?
          true :
          hasClass(el, this.clsLeave) ?
          false :
          this.cls ?
          hasClass(el, this.cls.split(' ')[0]) :
          isVisible(el);
        },

        _toggle(el, toggled) {
          if (!el) {
            return;
          }

          toggled = Boolean(toggled);

          let changed;
          if (this.cls) {
            changed = includes(this.cls, ' ') || toggled !== hasClass(el, this.cls);
            changed && toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
          } else {
            changed = toggled === el.hidden;
            changed && (el.hidden = !toggled);
          }

          $$('[autofocus]', el).some((el) => isVisible(el) ? el.focus() || true : el.blur());

          if (changed) {
            trigger(el, 'toggled', [toggled, this]);
            this.$update(el);
          }
        } } };



    function toggleInstant(_ref3) {let { _toggle } = _ref3;
      return (el, show) => {
        Animation.cancel(el);
        Transition.cancel(el);
        return _toggle(el, show);
      };
    }

    function toggleTransition(cmp) {var _cmp$animation$;
      const [mode = 'reveal', startProp = 'top'] = ((_cmp$animation$ = cmp.animation[0]) == null ? void 0 : _cmp$animation$.split('-')) || [];

      const dirs = [
      ['left', 'right'],
      ['top', 'bottom']];

      const dir = dirs[includes(dirs[0], startProp) ? 0 : 1];
      const end = dir[1] === startProp;
      const props = ['width', 'height'];
      const dimProp = props[dirs.indexOf(dir)];
      const marginProp = "margin-" + dir[0];
      const marginStartProp = "margin-" + startProp;

      return async (el, show) => {
        let { duration, velocity, transition, _toggle } = cmp;

        let currentDim = dimensions$1(el)[dimProp];

        const inProgress = Transition.inProgress(el);
        await Transition.cancel(el);

        if (show) {
          _toggle(el, true);
        }

        const prevProps = Object.fromEntries(
        [
        'padding',
        'border',
        'width',
        'height',
        'overflowY',
        'overflowX',
        marginProp,
        marginStartProp].
        map((key) => [key, el.style[key]]));


        const dim = dimensions$1(el);
        const currentMargin = toFloat(css(el, marginProp));
        const marginStart = toFloat(css(el, marginStartProp));
        const endDim = dim[dimProp] + marginStart;

        if (!inProgress && !show) {
          currentDim += marginStart;
        }

        const [wrapper] = wrapInner(el, '<div>');
        css(wrapper, {
          boxSizing: 'border-box',
          height: dim.height,
          width: dim.width,
          ...css(el, [
          'overflow',
          'padding',
          'borderTop',
          'borderRight',
          'borderBottom',
          'borderLeft',
          'borderImage',
          marginStartProp]) });



        css(el, {
          padding: 0,
          border: 0,
          minWidth: 0,
          minHeight: 0,
          [marginStartProp]: 0,
          width: dim.width,
          height: dim.height,
          overflow: 'hidden',
          [dimProp]: currentDim });


        const percent = currentDim / endDim;
        duration = (velocity * endDim + duration) * (show ? 1 - percent : percent);
        const endProps = { [dimProp]: show ? endDim : 0 };

        if (end) {
          css(el, marginProp, endDim - currentDim + currentMargin);
          endProps[marginProp] = show ? currentMargin : endDim + currentMargin;
        }

        if (!end ^ mode === 'reveal') {
          css(wrapper, marginProp, -endDim + currentDim);
          Transition.start(wrapper, { [marginProp]: show ? 0 : -endDim }, duration, transition);
        }

        try {
          await Transition.start(el, endProps, duration, transition);
        } finally {
          css(el, prevProps);
          unwrap(wrapper.firstChild);

          if (!show) {
            _toggle(el, false);
          }
        }
      };
    }

    function toggleAnimation(cmp) {
      return (el, show) => {
        Animation.cancel(el);

        const { animation, duration, _toggle } = cmp;

        if (show) {
          _toggle(el, true);
          return Animation.in(el, animation[0], duration, cmp.origin);
        }

        return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(() =>
        _toggle(el, false));

      };
    }

    var Accordion = {
      mixins: [Class, Lazyload, Togglable],

      props: {
        animation: Boolean,
        targets: String,
        active: null,
        collapsible: Boolean,
        multiple: Boolean,
        toggle: String,
        content: String,
        offset: Number },


      data: {
        targets: '> *',
        active: false,
        animation: true,
        collapsible: true,
        multiple: false,
        clsOpen: 'uk-open',
        toggle: '> .uk-accordion-title',
        content: '> .uk-accordion-content',
        offset: 0 },


      computed: {
        items: {
          get(_ref, $el) {let { targets } = _ref;
            return $$(targets, $el);
          },

          watch(items, prev) {
            if (prev || hasClass(items, this.clsOpen)) {
              return;
            }

            const active =
            this.active !== false && items[Number(this.active)] ||
            !this.collapsible && items[0];

            if (active) {
              this.toggle(active, false);
            }
          },

          immediate: true },


        toggles(_ref2) {let { toggle } = _ref2;
          return this.items.map((item) => $(toggle, item));
        },

        contents: {
          get(_ref3) {let { content } = _ref3;
            return this.items.map((item) => $(content, item));
          },

          watch(items) {
            for (const el of items) {
              hide(
              el,
              !hasClass(
              this.items.find((item) => within(el, item)),
              this.clsOpen));


            }
          },

          immediate: true } },



      connected() {
        this.lazyload();
      },

      events: [
      {
        name: 'click',

        delegate() {
          return this.targets + " " + this.$props.toggle;
        },

        handler(e) {
          e.preventDefault();
          this.toggle(index(this.toggles, e.current));
        } }],



      methods: {
        toggle(item, animate) {
          let items = [this.items[getIndex(item, this.items)]];
          const activeItems = filter$1(this.items, "." + this.clsOpen);

          if (!this.multiple && !includes(activeItems, items[0])) {
            items = items.concat(activeItems);
          }

          if (
          !this.collapsible &&
          activeItems.length < 2 &&
          !filter$1(items, ":not(." + this.clsOpen + ")").length)
          {
            return;
          }

          for (const el of items) {
            this.toggleElement(el, !hasClass(el, this.clsOpen), async (el, show) => {
              toggleClass(el, this.clsOpen, show);
              attr($(this.$props.toggle, el), 'aria-expanded', show);

              const content = $(this.content, el);

              if (animate === false || !this.animation) {
                content.hidden = !show;
                hide(content, !show);
                return;
              }

              await toggleTransition(this)(content, show);

              if (show) {
                const toggle = $(this.$props.toggle, el);
                fastdom.read(() => {
                  if (!isInView(toggle)) {
                    scrollIntoView(toggle, { offset: this.offset });
                  }
                });
              }
            });
          }
        } } };



    function hide(el, hide) {
      el && (el.hidden = hide);
    }

    var alert = {
      mixins: [Class, Togglable],

      args: 'animation',

      props: {
        animation: Boolean,
        close: String },


      data: {
        animation: true,
        selClose: '.uk-alert-close',
        duration: 150 },


      events: {
        name: 'click',

        delegate() {
          return this.selClose;
        },

        handler(e) {
          e.preventDefault();
          this.close();
        } },


      methods: {
        async close() {
          await this.toggleElement(this.$el, false, animate$1(this));
          this.$destroy(true);
        } } };



    function animate$1(_ref) {let { duration, transition, velocity } = _ref;
      return (el) => {
        const height = toFloat(css(el, 'height'));
        css(el, 'height', height);
        return Transition.start(
        el,
        {
          height: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          borderTop: 0,
          borderBottom: 0,
          opacity: 0 },

        velocity * height + duration,
        transition);

      };
    }

    var Video = {
      args: 'autoplay',

      props: {
        automute: Boolean,
        autoplay: Boolean },


      data: {
        automute: false,
        autoplay: true },


      connected() {
        this.inView = this.autoplay === 'inview';

        if (this.inView && !hasAttr(this.$el, 'preload')) {
          this.$el.preload = 'none';
        }

        if (isTag(this.$el, 'iframe') && !hasAttr(this.$el, 'allow')) {
          this.$el.allow = 'autoplay';
        }

        if (this.automute) {
          mute(this.$el);
        }

        this.registerObserver(observeIntersection(this.$el, () => this.$emit(), {}, false));
      },

      update: {
        read() {
          if (!isVideo(this.$el)) {
            return false;
          }

          return {
            visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
            inView: this.inView && isInView(this.$el) };

        },

        write(_ref) {let { visible, inView } = _ref;
          if (!visible || this.inView && !inView) {
            pause(this.$el);
          } else if (this.autoplay === true || this.inView && inView) {
            play(this.$el);
          }
        } } };

    var Resize = {
      connected() {var _this$$options$resize;
        this.registerObserver(
        observeResize(((_this$$options$resize = this.$options.resizeTargets) == null ? void 0 : _this$$options$resize.call(this)) || this.$el, () =>
        this.$emit('resize')));


      } };

    var cover = {
      mixins: [Resize, Video],

      props: {
        width: Number,
        height: Number },


      data: {
        automute: true },


      events: {
        'load loadedmetadata'() {
          this.$emit('resize');
        } },


      resizeTargets() {
        return [this.$el, parent(this.$el)];
      },

      update: {
        read() {
          const { ratio, cover } = Dimensions;
          const { $el, width, height } = this;

          let dim = { width, height };

          if (!dim.width || !dim.height) {
            const intrinsic = {
              width: $el.naturalWidth || $el.videoWidth || $el.clientWidth,
              height: $el.naturalHeight || $el.videoHeight || $el.clientHeight };


            if (dim.width) {
              dim = ratio(intrinsic, 'width', dim.width);
            } else if (height) {
              dim = ratio(intrinsic, 'height', dim.height);
            } else {
              dim = intrinsic;
            }
          }

          const { offsetHeight: coverHeight, offsetWidth: coverWidth } =
          getPositionedParent($el) || parent($el);
          const coverDim = cover(dim, {
            width: coverWidth + (coverWidth % 2 ? 1 : 0),
            height: coverHeight + (coverHeight % 2 ? 1 : 0) });


          if (!coverDim.width || !coverDim.height) {
            return false;
          }

          return coverDim;
        },

        write(_ref) {let { height, width } = _ref;
          css(this.$el, { height, width });
        },

        events: ['resize'] } };



    function getPositionedParent(el) {
      while (el = parent(el)) {
        if (css(el, 'position') !== 'static') {
          return el;
        }
      }
    }

    var Container = {
      props: {
        container: Boolean },


      data: {
        container: true },


      computed: {
        container(_ref) {let { container } = _ref;
          return container === true && this.$container || container && $(container);
        } } };

    var Position = {
      props: {
        pos: String,
        offset: null,
        flip: Boolean,
        shift: Boolean,
        inset: Boolean },


      data: {
        pos: "bottom-" + (isRtl ? 'right' : 'left'),
        offset: false,
        flip: true,
        shift: true,
        inset: false },


      connected() {
        this.pos = this.$props.pos.split('-').concat('center').slice(0, 2);
        [this.dir, this.align] = this.pos;
        this.axis = includes(['top', 'bottom'], this.dir) ? 'y' : 'x';
      },

      methods: {
        positionAt(element, target, boundary) {
          let offset = [this.getPositionOffset(element), this.getShiftOffset(element)];
          const placement = [this.flip && 'flip', this.shift && 'shift'];

          const attach = {
            element: [this.inset ? this.dir : flipPosition(this.dir), this.align],
            target: [this.dir, this.align] };


          if (this.axis === 'y') {
            for (const prop in attach) {
              attach[prop].reverse();
            }
            offset.reverse();
            placement.reverse();
          }

          const [scrollElement] = scrollParents(element, /auto|scroll/);
          const { scrollTop, scrollLeft } = scrollElement;

          // Ensure none positioned element does not generate scrollbars
          const elDim = dimensions$1(element);
          css(element, { top: -elDim.height, left: -elDim.width });

          positionAt(element, target, {
            attach,
            offset,
            boundary,
            placement,
            viewportOffset: this.getViewportOffset(element) });


          // Restore scroll position
          scrollElement.scrollTop = scrollTop;
          scrollElement.scrollLeft = scrollLeft;
        },

        getPositionOffset(element) {
          return (
            toPx(
            this.offset === false ? css(element, '--uk-position-offset') : this.offset,
            this.axis === 'x' ? 'width' : 'height',
            element) * (

            includes(['left', 'top'], this.dir) ? -1 : 1) * (
            this.inset ? -1 : 1));

        },

        getShiftOffset(element) {
          return this.align === 'center' ?
          0 :
          toPx(
          css(element, '--uk-position-shift-offset'),
          this.axis === 'y' ? 'width' : 'height',
          element) * (
          includes(['left', 'top'], this.align) ? 1 : -1);
        },

        getViewportOffset(element) {
          return toPx(css(element, '--uk-position-viewport-offset'));
        } } };

    var Style = {
      beforeConnect() {
        this._style = attr(this.$el, 'style');
      },

      disconnected() {
        attr(this.$el, 'style', this._style);
      } };

    const active$1 = [];

    var Modal = {
      mixins: [Class, Container, Togglable],

      props: {
        selPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean },


      data: {
        cls: 'uk-open',
        escClose: true,
        bgClose: true,
        overlay: true,
        stack: false },


      computed: {
        panel(_ref, $el) {let { selPanel } = _ref;
          return $(selPanel, $el);
        },

        transitionElement() {
          return this.panel;
        },

        bgClose(_ref2) {let { bgClose } = _ref2;
          return bgClose && this.panel;
        } },


      beforeDisconnect() {
        if (includes(active$1, this)) {
          this.toggleElement(this.$el, false, false);
        }
      },

      events: [
      {
        name: 'click',

        delegate() {
          return this.selClose;
        },

        handler(e) {
          e.preventDefault();
          this.hide();
        } },


      {
        name: 'toggle',

        self: true,

        handler(e) {
          if (e.defaultPrevented) {
            return;
          }

          e.preventDefault();

          if (this.isToggled() === includes(active$1, this)) {
            this.toggle();
          }
        } },


      {
        name: 'beforeshow',

        self: true,

        handler(e) {
          if (includes(active$1, this)) {
            return false;
          }

          if (!this.stack && active$1.length) {
            Promise.all(active$1.map((modal) => modal.hide())).then(this.show);
            e.preventDefault();
          } else {
            active$1.push(this);
          }
        } },


      {
        name: 'show',

        self: true,

        handler() {
          once(
          this.$el,
          'hide',
          on(document, 'focusin', (e) => {
            if (last(active$1) === this && !within(e.target, this.$el)) {
              this.$el.focus();
            }
          }));


          if (this.overlay) {
            once(this.$el, 'hidden', preventOverscroll(this.$el), { self: true });
            once(this.$el, 'hidden', preventBackgroundScroll(), { self: true });
          }

          if (this.stack) {
            css(this.$el, 'zIndex', toFloat(css(this.$el, 'zIndex')) + active$1.length);
          }

          addClass(document.documentElement, this.clsPage);

          if (this.bgClose) {
            once(
            this.$el,
            'hide',
            on(document, pointerDown$1, (_ref3) => {let { target } = _ref3;
              if (
              last(active$1) !== this ||
              this.overlay && !within(target, this.$el) ||
              within(target, this.panel))
              {
                return;
              }

              once(
              document,
              pointerUp$1 + " " + pointerCancel + " scroll",
              (_ref4) => {let { defaultPrevented, type, target: newTarget } = _ref4;
                if (
                !defaultPrevented &&
                type === pointerUp$1 &&
                target === newTarget)
                {
                  this.hide();
                }
              },
              true);

            }),
            { self: true });

          }

          if (this.escClose) {
            once(
            this.$el,
            'hide',
            on(document, 'keydown', (e) => {
              if (e.keyCode === 27 && last(active$1) === this) {
                this.hide();
              }
            }),
            { self: true });

          }
        } },


      {
        name: 'shown',

        self: true,

        handler() {
          if (!isFocusable(this.$el)) {
            attr(this.$el, 'tabindex', '-1');
          }

          if (!$(':focus', this.$el)) {
            this.$el.focus();
          }
        } },


      {
        name: 'hidden',

        self: true,

        handler() {
          if (includes(active$1, this)) {
            active$1.splice(active$1.indexOf(this), 1);
          }

          css(this.$el, 'zIndex', '');

          if (!active$1.some((modal) => modal.clsPage === this.clsPage)) {
            removeClass(document.documentElement, this.clsPage);
          }
        } }],



      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },

        show() {
          if (this.container && parent(this.$el) !== this.container) {
            append(this.container, this.$el);
            return new Promise((resolve) =>
            requestAnimationFrame(() => this.show().then(resolve)));

          }

          return this.toggleElement(this.$el, true, animate(this));
        },

        hide() {
          return this.toggleElement(this.$el, false, animate(this));
        } } };



    function animate(_ref5) {let { transitionElement, _toggle } = _ref5;
      return (el, show) =>
      new Promise((resolve, reject) =>
      once(el, 'show hide', () => {
        el._reject == null ? void 0 : el._reject();
        el._reject = reject;

        _toggle(el, show);

        const off = once(
        transitionElement,
        'transitionstart',
        () => {
          once(transitionElement, 'transitionend transitioncancel', resolve, {
            self: true });

          clearTimeout(timer);
        },
        { self: true });


        const timer = setTimeout(() => {
          off();
          resolve();
        }, toMs(css(transitionElement, 'transitionDuration')));
      })).
      then(() => delete el._reject);
    }

    function toMs(time) {
      return time ? endsWith(time, 'ms') ? toFloat(time) : toFloat(time) * 1000 : 0;
    }

    function preventOverscroll(el) {
      if (CSS.supports('overscroll-behavior', 'contain')) {
        const elements = filterChildren(el, (child) => /auto|scroll/.test(css(child, 'overflow')));
        css(elements, 'overscrollBehavior', 'contain');
        return () => css(elements, 'overscrollBehavior', '');
      }

      let startClientY;

      const events = [
      on(
      el,
      'touchstart',
      (_ref6) => {let { targetTouches } = _ref6;
        if (targetTouches.length === 1) {
          startClientY = targetTouches[0].clientY;
        }
      },
      { passive: true }),


      on(
      el,
      'touchmove',
      (e) => {
        if (e.targetTouches.length !== 1) {
          return;
        }

        let [scrollParent] = scrollParents(e.target, /auto|scroll/);
        if (!within(scrollParent, el)) {
          scrollParent = el;
        }

        const clientY = e.targetTouches[0].clientY - startClientY;
        const { scrollTop, scrollHeight, clientHeight } = scrollParent;

        if (
        clientHeight >= scrollHeight ||
        scrollTop === 0 && clientY > 0 ||
        scrollHeight - scrollTop <= clientHeight && clientY < 0)
        {
          e.cancelable && e.preventDefault();
        }
      },
      { passive: false })];



      return () => events.forEach((fn) => fn());
    }

    let prevented;
    function preventBackgroundScroll() {
      if (prevented) {
        return noop;
      }
      prevented = true;

      const { scrollingElement } = document;
      css(scrollingElement, {
        overflowY: 'hidden',
        touchAction: 'none',
        paddingRight: width(window) - scrollingElement.clientWidth });

      return () => {
        prevented = false;
        css(scrollingElement, { overflowY: '', touchAction: '', paddingRight: '' });
      };
    }

    function filterChildren(el, fn) {
      const children = [];
      apply(el, (node) => {
        if (fn(node)) {
          children.push(node);
        }
      });
      return children;
    }

    let active;

    var drop = {
      mixins: [Container, Lazyload, Position, Style, Togglable],

      args: 'pos',

      props: {
        mode: 'list',
        toggle: Boolean,
        boundary: Boolean,
        target: Boolean,
        targetX: Boolean,
        targetY: Boolean,
        stretch: Boolean,
        delayShow: Number,
        delayHide: Number,
        autoUpdate: Boolean,
        clsDrop: String,
        animateOut: Boolean,
        bgScroll: Boolean },


      data: {
        mode: ['click', 'hover'],
        toggle: '- *',
        boundary: false,
        target: false,
        targetX: false,
        targetY: false,
        stretch: false,
        delayShow: 0,
        delayHide: 800,
        autoUpdate: true,
        clsDrop: false,
        animateOut: false,
        bgScroll: true,
        animation: ['uk-animation-fade'],
        cls: 'uk-open',
        container: false },


      computed: {
        target(_ref, $el) {let { target, targetX, targetY } = _ref;
          targetX = targetX || target || this.targetEl;
          targetY = targetY || target || this.targetEl;

          return [
          targetX === true ? window : query(targetX, $el),
          targetY === true ? window : query(targetY, $el)];

        } },


      created() {
        this.tracker = new MouseTracker();
      },

      beforeConnect() {
        this.clsDrop = this.$props.clsDrop || "uk-" + this.$options.name;
      },

      connected() {
        addClass(this.$el, this.clsDrop);

        if (this.toggle && !this.targetEl) {
          this.targetEl = this.$create('toggle', query(this.toggle, this.$el), {
            target: this.$el,
            mode: this.mode }).
          $el;
          attr(this.targetEl, 'aria-haspopup', true);
          this.lazyload(this.targetEl);
        }
      },

      disconnected() {
        if (this.isActive()) {
          this.hide(false);
          active = null;
        }
      },

      events: [
      {
        name: 'click',

        delegate() {
          return "." + this.clsDrop + "-close";
        },

        handler(e) {
          e.preventDefault();
          this.hide(false);
        } },


      {
        name: 'click',

        delegate() {
          return 'a[href^="#"]';
        },

        handler(_ref2) {let { defaultPrevented, current: { hash } } = _ref2;
          if (!defaultPrevented && hash && !within(hash, this.$el)) {
            this.hide(false);
          }
        } },


      {
        name: 'beforescroll',

        handler() {
          this.hide(false);
        } },


      {
        name: 'toggle',

        self: true,

        handler(e, toggle) {
          e.preventDefault();

          if (this.isToggled()) {
            this.hide(false);
          } else {
            this.show(toggle == null ? void 0 : toggle.$el, false);
          }
        } },


      {
        name: 'toggleshow',

        self: true,

        handler(e, toggle) {
          e.preventDefault();
          this.show(toggle == null ? void 0 : toggle.$el);
        } },


      {
        name: 'togglehide',

        self: true,

        handler(e) {
          e.preventDefault();
          if (!matches(this.$el, ':focus,:hover')) {
            this.hide();
          }
        } },


      {
        name: pointerEnter + " focusin",

        filter() {
          return includes(this.mode, 'hover');
        },

        handler(e) {
          if (!isTouch(e)) {
            this.clearTimers();
          }
        } },


      {
        name: pointerLeave + " focusout",

        filter() {
          return includes(this.mode, 'hover');
        },

        handler(e) {
          if (!isTouch(e) && e.relatedTarget) {
            this.hide();
          }
        } },


      {
        name: 'toggled',

        self: true,

        handler(e, toggled) {
          if (!toggled) {
            return;
          }

          this.clearTimers();
          this.position();
        } },


      {
        name: 'show',

        self: true,

        handler() {
          active = this;

          this.tracker.init();

          const update = () => this.$emit();
          const handlers = [
          on(
          document,
          pointerDown$1,
          (_ref3) => {let { target } = _ref3;return (
              !within(target, this.$el) &&
              once(
              document,
              pointerUp$1 + " " + pointerCancel + " scroll",
              (_ref4) => {let { defaultPrevented, type, target: newTarget } = _ref4;
                if (
                !defaultPrevented &&
                type === pointerUp$1 &&
                target === newTarget &&
                !(this.targetEl && within(target, this.targetEl)))
                {
                  this.hide(false);
                }
              },
              true));}),



          on(document, 'keydown', (e) => {
            if (e.keyCode === 27) {
              this.hide(false);
            }
          }),

          on(window, 'resize', update),

          (() => {
            const observer = observeResize(
            scrollParents(this.$el).concat(this.target),
            update);

            return () => observer.disconnect();
          })(),

          ...(this.autoUpdate ?
          [
          on([document, scrollParents(this.$el)], 'scroll', update, {
            passive: true })] :


          []),

          ...(this.bgScroll ?
          [] :
          [preventOverscroll(this.$el), preventBackgroundScroll()])];


          once(this.$el, 'hide', () => handlers.forEach((handler) => handler()), {
            self: true });

        } },


      {
        name: 'beforehide',

        self: true,

        handler() {
          this.clearTimers();
        } },


      {
        name: 'hide',

        handler(_ref5) {let { target } = _ref5;
          if (this.$el !== target) {
            active =
            active === null && within(target, this.$el) && this.isToggled() ?
            this :
            active;
            return;
          }

          active = this.isActive() ? null : active;
          this.tracker.cancel();
        } }],



      update: {
        write() {
          if (this.isToggled() && !hasClass(this.$el, this.clsEnter)) {
            this.position();
          }
        } },


      methods: {
        show(target, delay) {if (target === void 0) {target = this.targetEl;}if (delay === void 0) {delay = true;}
          if (this.isToggled() && target && this.targetEl && target !== this.targetEl) {
            this.hide(false, false);
          }

          this.targetEl = target;

          this.clearTimers();

          if (this.isActive()) {
            return;
          }

          if (active) {
            if (delay && active.isDelaying) {
              this.showTimer = setTimeout(() => matches(target, ':hover') && this.show(), 10);
              return;
            }

            let prev;
            while (active && prev !== active && !within(this.$el, active.$el)) {
              prev = active;
              active.hide(false, false);
            }
          }

          if (this.container && parent(this.$el) !== this.container) {
            append(this.container, this.$el);
          }

          this.showTimer = setTimeout(
          () => this.toggleElement(this.$el, true),
          delay && this.delayShow || 0);

        },

        hide(delay, animate) {if (delay === void 0) {delay = true;}if (animate === void 0) {animate = true;}
          const hide = () => this.toggleElement(this.$el, false, this.animateOut && animate);

          this.clearTimers();

          this.isDelaying = getPositionedElements(this.$el).some((el) =>
          this.tracker.movesTo(el));


          if (delay && this.isDelaying) {
            this.hideTimer = setTimeout(this.hide, 50);
          } else if (delay && this.delayHide) {
            this.hideTimer = setTimeout(hide, this.delayHide);
          } else {
            hide();
          }
        },

        clearTimers() {
          clearTimeout(this.showTimer);
          clearTimeout(this.hideTimer);
          this.showTimer = null;
          this.hideTimer = null;
          this.isDelaying = false;
        },

        isActive() {
          return active === this;
        },

        position() {
          removeClass(this.$el, this.clsDrop + "-stack");
          attr(this.$el, 'style', this._style);

          // Ensure none positioned element does not generate scrollbars
          this.$el.hidden = true;

          const boundary = query(this.boundary, this.$el);
          const boundaryOffset = offset(boundary || window);
          const viewports = this.target.map((target) => offsetViewport(scrollParents(target)[0]));
          const viewportOffset = this.getViewportOffset(this.$el);

          const dirs = [
          [0, ['x', 'width', 'left', 'right']],
          [1, ['y', 'height', 'top', 'bottom']]];


          for (const [i, [axis, prop]] of dirs) {
            if (this.axis !== axis && includes([axis, true], this.stretch)) {
              css(this.$el, {
                [prop]: Math.min(
                boundaryOffset[prop],
                viewports[i][prop] - 2 * viewportOffset),

                ["overflow-" + axis]: 'auto' });

            }
          }

          const maxWidth = viewports[0].width - 2 * viewportOffset;

          if (this.$el.offsetWidth > maxWidth) {
            addClass(this.$el, this.clsDrop + "-stack");
          }

          css(this.$el, 'maxWidth', maxWidth);

          this.$el.hidden = false;

          this.positionAt(this.$el, this.target, boundary);

          for (const [i, [axis, prop, start, end]] of dirs) {
            if (this.axis === axis && includes([axis, true], this.stretch)) {
              const positionOffset = Math.abs(this.getPositionOffset(this.$el));
              const targetOffset = offset(this.target[i]);
              const elOffset = offset(this.$el);

              css(this.$el, {
                [prop]:
                (targetOffset[start] > elOffset[start] ?
                targetOffset[start] -
                Math.max(
                boundaryOffset[start],
                viewports[i][start] + viewportOffset) :

                Math.min(
                boundaryOffset[end],
                viewports[i][end] - viewportOffset) -
                targetOffset[end]) - positionOffset,
                ["overflow-" + axis]: 'auto' });


              this.positionAt(this.$el, this.target, boundary);
            }
          }
        } } };



    function getPositionedElements(el) {
      const result = [];
      apply(el, (el) => css(el, 'position') !== 'static' && result.push(el));
      return result;
    }

    var formCustom = {
      mixins: [Class],

      args: 'target',

      props: {
        target: Boolean },


      data: {
        target: false },


      computed: {
        input(_, $el) {
          return $(selInput, $el);
        },

        state() {
          return this.input.nextElementSibling;
        },

        target(_ref, $el) {let { target } = _ref;
          return (
            target && (
            target === true && parent(this.input) === $el && this.input.nextElementSibling ||
            $(target, $el)));

        } },


      update() {var _input$files;
        const { target, input } = this;

        if (!target) {
          return;
        }

        let option;
        const prop = isInput(target) ? 'value' : 'textContent';
        const prev = target[prop];
        const value = (_input$files = input.files) != null && _input$files[0] ?
        input.files[0].name :
        matches(input, 'select') && (
        option = $$('option', input).filter((el) => el.selected)[0]) // eslint-disable-line prefer-destructuring
        ? option.textContent :
        input.value;

        if (prev !== value) {
          target[prop] = value;
        }
      },

      events: [
      {
        name: 'change',

        handler() {
          this.$emit();
        } },


      {
        name: 'reset',

        el() {
          return closest(this.$el, 'form');
        },

        handler() {
          this.$emit();
        } }] };

    var Margin = {
      mixins: [Resize],

      props: {
        margin: String,
        firstColumn: Boolean },


      data: {
        margin: 'uk-margin-small-top',
        firstColumn: 'uk-first-column' },


      resizeTargets() {
        return [this.$el, ...toArray(this.$el.children)];
      },

      connected() {
        this.registerObserver(
        observeMutation(this.$el, () => this.$reset(), {
          childList: true }));


      },

      update: {
        read() {
          const rows = getRows(this.$el.children);

          return {
            rows,
            columns: getColumns(rows) };

        },

        write(_ref) {let { columns, rows } = _ref;
          for (const row of rows) {
            for (const column of row) {
              toggleClass(column, this.margin, rows[0] !== row);
              toggleClass(column, this.firstColumn, columns[0].includes(column));
            }
          }
        },

        events: ['resize'] } };



    function getRows(items) {
      return sortBy(items, 'top', 'bottom');
    }

    function getColumns(rows) {
      const columns = [];

      for (const row of rows) {
        const sorted = sortBy(row, 'left', 'right');
        for (let j = 0; j < sorted.length; j++) {
          columns[j] = columns[j] ? columns[j].concat(sorted[j]) : sorted[j];
        }
      }

      return isRtl ? columns.reverse() : columns;
    }

    function sortBy(items, startProp, endProp) {
      const sorted = [[]];

      for (const el of items) {
        if (!isVisible(el)) {
          continue;
        }

        let dim = getOffset(el);

        for (let i = sorted.length - 1; i >= 0; i--) {
          const current = sorted[i];

          if (!current[0]) {
            current.push(el);
            break;
          }

          let startDim;
          if (current[0].offsetParent === el.offsetParent) {
            startDim = getOffset(current[0]);
          } else {
            dim = getOffset(el, true);
            startDim = getOffset(current[0], true);
          }

          if (dim[startProp] >= startDim[endProp] - 1 && dim[startProp] !== startDim[startProp]) {
            sorted.push([el]);
            break;
          }

          if (dim[endProp] - 1 > startDim[startProp] || dim[startProp] === startDim[startProp]) {
            current.push(el);
            break;
          }

          if (i === 0) {
            sorted.unshift([el]);
            break;
          }
        }
      }

      return sorted;
    }

    function getOffset(element, offset) {if (offset === void 0) {offset = false;}
      let { offsetTop, offsetLeft, offsetHeight, offsetWidth } = element;

      if (offset) {
        [offsetTop, offsetLeft] = offsetPosition(element);
      }

      return {
        top: offsetTop,
        left: offsetLeft,
        bottom: offsetTop + offsetHeight,
        right: offsetLeft + offsetWidth };

    }

    var Scroll = {
      connected() {
        registerScrollListener(this._uid, () => this.$emit('scroll'));
      },

      disconnected() {
        unregisterScrollListener(this._uid);
      } };


    const scrollListeners = new Map();
    let unbindScrollListener;
    function registerScrollListener(id, listener) {
      unbindScrollListener =
      unbindScrollListener ||
      on(window, 'scroll', () => scrollListeners.forEach((listener) => listener()), {
        passive: true,
        capture: true });


      scrollListeners.set(id, listener);
    }

    function unregisterScrollListener(id) {
      scrollListeners.delete(id);
      if (unbindScrollListener && !scrollListeners.size) {
        unbindScrollListener();
        unbindScrollListener = null;
      }
    }

    var grid = {
      extends: Margin,

      mixins: [Class, Scroll],

      name: 'grid',

      props: {
        masonry: Boolean,
        parallax: Number },


      data: {
        margin: 'uk-grid-margin',
        clsStack: 'uk-grid-stack',
        masonry: false,
        parallax: 0 },


      connected() {
        this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
      },

      update: [
      {
        write(_ref) {let { columns } = _ref;
          toggleClass(this.$el, this.clsStack, columns.length < 2);
        },

        events: ['resize'] },


      {
        read(data) {
          let { columns, rows } = data;

          // Filter component makes elements positioned absolute
          if (
          !columns.length ||
          !this.masonry && !this.parallax ||
          positionedAbsolute(this.$el))
          {
            data.translates = false;
            return false;
          }

          let translates = false;

          const nodes = children(this.$el);
          const columnHeights = getColumnHeights(columns);
          const margin = getMarginTop(nodes, this.margin) * (rows.length - 1);
          const elHeight = Math.max(...columnHeights) + margin;

          if (this.masonry) {
            columns = columns.map((column) => sortBy$1(column, 'offsetTop'));
            translates = getTranslates(rows, columns);
          }

          let padding = Math.abs(this.parallax);
          if (padding) {
            padding = columnHeights.reduce(
            (newPadding, hgt, i) =>
            Math.max(
            newPadding,
            hgt + margin + (i % 2 ? padding : padding / 8) - elHeight),

            0);

          }

          return { padding, columns, translates, height: translates ? elHeight : '' };
        },

        write(_ref2) {let { height, padding } = _ref2;
          css(this.$el, 'paddingBottom', padding || '');
          height !== false && css(this.$el, 'height', height);
        },

        events: ['resize'] },


      {
        read() {
          if (this.parallax && positionedAbsolute(this.$el)) {
            return false;
          }

          return {
            scrolled: this.parallax ?
            scrolledOver(this.$el) * Math.abs(this.parallax) :
            false };

        },

        write(_ref3) {let { columns, scrolled, translates } = _ref3;
          if (scrolled === false && !translates) {
            return;
          }

          columns.forEach((column, i) =>
          column.forEach((el, j) =>
          css(
          el,
          'transform',
          !scrolled && !translates ?
          '' : "translateY(" + (

          (translates && -translates[i][j]) + (
          scrolled ? i % 2 ? scrolled : scrolled / 8 : 0)) + "px)")));




        },

        events: ['scroll', 'resize'] }] };




    function positionedAbsolute(el) {
      return children(el).some((el) => css(el, 'position') === 'absolute');
    }

    function getTranslates(rows, columns) {
      const rowHeights = rows.map((row) => Math.max(...row.map((el) => el.offsetHeight)));

      return columns.map((elements) => {
        let prev = 0;
        return elements.map(
        (element, row) =>
        prev += row ? rowHeights[row - 1] - elements[row - 1].offsetHeight : 0);

      });
    }

    function getMarginTop(nodes, cls) {
      const [node] = nodes.filter((el) => hasClass(el, cls));

      return toFloat(node ? css(node, 'marginTop') : css(nodes[0], 'paddingLeft'));
    }

    function getColumnHeights(columns) {
      return columns.map((column) => column.reduce((sum, el) => sum + el.offsetHeight, 0));
    }

    var heightMatch = {
      mixins: [Resize],

      args: 'target',

      props: {
        target: String,
        row: Boolean },


      data: {
        target: '> *',
        row: true },


      computed: {
        elements: {
          get(_ref, $el) {let { target } = _ref;
            return $$(target, $el);
          },

          watch() {
            this.$reset();
          } } },



      resizeTargets() {
        return [this.$el, ...this.elements];
      },

      update: {
        read() {
          return {
            rows: (this.row ? getRows(this.elements) : [this.elements]).map(match$1) };

        },

        write(_ref2) {let { rows } = _ref2;
          for (const { heights, elements } of rows) {
            elements.forEach((el, i) => css(el, 'minHeight', heights[i]));
          }
        },

        events: ['resize'] } };



    function match$1(elements) {
      if (elements.length < 2) {
        return { heights: [''], elements };
      }

      css(elements, 'minHeight', '');
      let heights = elements.map(getHeight);
      const max = Math.max(...heights);

      return {
        heights: elements.map((el, i) => heights[i].toFixed(2) === max.toFixed(2) ? '' : max),
        elements };

    }

    function getHeight(element) {
      let style = false;
      if (!isVisible(element)) {
        style = element.style.display;
        css(element, 'display', 'block', 'important');
      }

      const height = dimensions$1(element).height - boxModelAdjust(element, 'height', 'content-box');

      if (style !== false) {
        css(element, 'display', style);
      }

      return height;
    }

    var heightViewport = {
      mixins: [Resize],

      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean,
        minHeight: Number },


      data: {
        expand: false,
        offsetTop: false,
        offsetBottom: false,
        minHeight: 0 },


      resizeTargets() {
        // check for offsetTop change
        return [this.$el, ...scrollParents(this.$el, /auto|scroll/)];
      },

      update: {
        read(_ref) {let { minHeight: prev } = _ref;
          if (!isVisible(this.$el)) {
            return false;
          }

          let minHeight = '';
          const box = boxModelAdjust(this.$el, 'height', 'content-box');

          const { body, scrollingElement } = document;
          const [scrollElement] = scrollParents(this.$el, /auto|scroll/);
          const { height: viewportHeight } = offsetViewport(
          scrollElement === body ? scrollingElement : scrollElement);


          if (this.expand) {
            minHeight = Math.max(
            viewportHeight - (
            dimensions$1(scrollElement).height - dimensions$1(this.$el).height) -
            box,
            0);

          } else {
            const isScrollingElement =
            scrollingElement === scrollElement || body === scrollElement;

            // on mobile devices (iOS and Android) window.innerHeight !== 100vh
            minHeight = "calc(" + (isScrollingElement ? '100vh' : viewportHeight + "px");

            if (this.offsetTop) {
              if (isScrollingElement) {
                const top = offsetPosition(this.$el)[0] - offsetPosition(scrollElement)[0];
                minHeight += top > 0 && top < viewportHeight / 2 ? " - " + top + "px" : '';
              } else {
                minHeight += " - " + css(scrollElement, 'paddingTop');
              }
            }

            if (this.offsetBottom === true) {
              minHeight += " - " + dimensions$1(this.$el.nextElementSibling).height + "px";
            } else if (isNumeric(this.offsetBottom)) {
              minHeight += " - " + this.offsetBottom + "vh";
            } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {
              minHeight += " - " + toFloat(this.offsetBottom) + "px";
            } else if (isString(this.offsetBottom)) {
              minHeight += " - " + dimensions$1(query(this.offsetBottom, this.$el)).height + "px";
            }

            minHeight += (box ? " - " + box + "px" : '') + ")";
          }

          return { minHeight, prev };
        },

        write(_ref2) {let { minHeight } = _ref2;
          css(this.$el, { minHeight });

          if (this.minHeight && toFloat(css(this.$el, 'minHeight')) < this.minHeight) {
            css(this.$el, 'minHeight', this.minHeight);
          }
        },

        events: ['resize'] } };

    var SVG = {
      args: 'src',

      props: {
        id: Boolean,
        icon: String,
        src: String,
        style: String,
        width: Number,
        height: Number,
        ratio: Number,
        class: String,
        strokeAnimation: Boolean,
        focusable: Boolean, // IE 11
        attributes: 'list' },


      data: {
        ratio: 1,
        include: ['style', 'class', 'focusable'],
        class: '',
        strokeAnimation: false },


      beforeConnect() {
        this.class += ' uk-svg';
      },

      connected() {
        if (!this.icon && includes(this.src, '#')) {
          [this.src, this.icon] = this.src.split('#');
        }

        this.svg = this.getSvg().then((el) => {
          if (this._connected) {
            const svg = insertSVG(el, this.$el);

            if (this.svgEl && svg !== this.svgEl) {
              remove$1(this.svgEl);
            }

            this.applyAttributes(svg, el);

            return this.svgEl = svg;
          }
        }, noop);

        if (this.strokeAnimation) {
          this.svg.then((el) => {
            if (this._connected) {
              applyAnimation(el);
              this.registerObserver(
              observeIntersection(el, (records, observer) => {
                applyAnimation(el);
                observer.disconnect();
              }));

            }
          });
        }
      },

      disconnected() {
        this.svg.then((svg) => {
          if (this._connected) {
            return;
          }

          if (isVoidElement(this.$el)) {
            this.$el.hidden = false;
          }

          remove$1(svg);
          this.svgEl = null;
        });

        this.svg = null;
      },

      methods: {
        async getSvg() {
          if (isTag(this.$el, 'img') && !this.$el.complete && this.$el.loading === 'lazy') {
            return new Promise((resolve) =>
            once(this.$el, 'load', () => resolve(this.getSvg())));

          }

          return parseSVG(await loadSVG(this.src), this.icon) || Promise.reject('SVG not found.');
        },

        applyAttributes(el, ref) {
          for (const prop in this.$options.props) {
            if (includes(this.include, prop) && prop in this) {
              attr(el, prop, this[prop]);
            }
          }

          for (const attribute in this.attributes) {
            const [prop, value] = this.attributes[attribute].split(':', 2);
            attr(el, prop, value);
          }

          if (!this.id) {
            removeAttr(el, 'id');
          }

          const props = ['width', 'height'];
          let dimensions = props.map((prop) => this[prop]);

          if (!dimensions.some((val) => val)) {
            dimensions = props.map((prop) => attr(ref, prop));
          }

          const viewBox = attr(ref, 'viewBox');
          if (viewBox && !dimensions.some((val) => val)) {
            dimensions = viewBox.split(' ').slice(2);
          }

          dimensions.forEach((val, i) => attr(el, props[i], toFloat(val) * this.ratio || null));
        } } };



    const loadSVG = memoize(async (src) => {
      if (src) {
        if (startsWith(src, 'data:')) {
          return decodeURIComponent(src.split(',')[1]);
        } else {
          return (await fetch(src)).text();
        }
      } else {
        return Promise.reject();
      }
    });

    function parseSVG(svg, icon) {var _svg;
      if (icon && includes(svg, '<symbol')) {
        svg = parseSymbols(svg, icon) || svg;
      }

      svg = $(svg.substr(svg.indexOf('<svg')));
      return ((_svg = svg) == null ? void 0 : _svg.hasChildNodes()) && svg;
    }

    const symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
    const symbols = {};

    function parseSymbols(svg, icon) {
      if (!symbols[svg]) {
        symbols[svg] = {};

        symbolRe.lastIndex = 0;

        let match;
        while (match = symbolRe.exec(svg)) {
          symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + match[1] + "svg>";
        }
      }

      return symbols[svg][icon];
    }

    function applyAnimation(el) {
      const length = getMaxPathLength(el);

      if (length) {
        el.style.setProperty('--uk-animation-stroke', length);
      }
    }

    function getMaxPathLength(el) {
      return Math.ceil(
      Math.max(
      0,
      ...$$('[stroke]', el).map((stroke) => {
        try {
          return stroke.getTotalLength();
        } catch (e) {
          return 0;
        }
      })));


    }

    function insertSVG(el, root) {
      if (isVoidElement(root) || isTag(root, 'canvas')) {
        root.hidden = true;

        const next = root.nextElementSibling;
        return equals(el, next) ? next : after(root, el);
      }

      const last = root.lastElementChild;
      return equals(el, last) ? last : append(root, el);
    }

    function equals(el, other) {
      return isTag(el, 'svg') && isTag(other, 'svg') && innerHTML(el) === innerHTML(other);
    }

    function innerHTML(el) {
      return (
      el.innerHTML ||
      new XMLSerializer().serializeToString(el).replace(/<svg.*?>(.*?)<\/svg>/g, '$1')).
      replace(/\s/g, '');
    }

    var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";

    var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";

    var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";

    var navParentIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"1 3.5 6 8.5 11 3.5\"/></svg>";

    var navParentIconLarge = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"1 4 7 10 13 4\"/></svg>";

    var navbarParentIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"1 3.5 6 8.5 11 3.5\"/></svg>";

    var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><style>.uk-navbar-toggle-animate svg > [class*='line-'] {\n            transition: 0.2s ease-in-out;\n            transition-property: transform, opacity,;\n            transform-origin: center;\n            opacity: 1;\n        }\n\n        .uk-navbar-toggle svg > .line-3 { opacity: 0; }\n        .uk-navbar-toggle-animate[aria-expanded=\"true\"] svg > .line-3 { opacity: 1; }\n\n        .uk-navbar-toggle-animate[aria-expanded=\"true\"] svg > .line-2 { transform: rotate(45deg); }\n        .uk-navbar-toggle-animate[aria-expanded=\"true\"] svg > .line-3 { transform: rotate(-45deg); }\n\n        .uk-navbar-toggle-animate[aria-expanded=\"true\"] svg > .line-1,\n        .uk-navbar-toggle-animate[aria-expanded=\"true\"] svg > .line-4 { opacity: 0; }\n        .uk-navbar-toggle-animate[aria-expanded=\"true\"] svg > .line-1 { transform: translateY(6px) scaleX(0); }\n        .uk-navbar-toggle-animate[aria-expanded=\"true\"] svg > .line-4 { transform: translateY(-6px) scaleX(0); }</style><rect class=\"line-1\" y=\"3\" width=\"20\" height=\"2\"/><rect class=\"line-2\" y=\"9\" width=\"20\" height=\"2\"/><rect class=\"line-3\" y=\"9\" width=\"20\" height=\"2\"/><rect class=\"line-4\" y=\"15\" width=\"20\" height=\"2\"/></svg>";

    var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";

    var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";

    var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";

    var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";

    var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";

    var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";

    var slidenavNext = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";

    var slidenavNextLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";

    var slidenavPrevious = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";

    var slidenavPreviousLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";

    var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";

    var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";

    const icons = {
      spinner,
      totop,
      marker,
      'close-icon': closeIcon,
      'close-large': closeLarge,
      'nav-parent-icon': navParentIcon,
      'nav-parent-icon-large': navParentIconLarge,
      'navbar-parent-icon': navbarParentIcon,
      'navbar-toggle-icon': navbarToggleIcon,
      'overlay-icon': overlayIcon,
      'pagination-next': paginationNext,
      'pagination-previous': paginationPrevious,
      'search-icon': searchIcon,
      'search-large': searchLarge,
      'search-navbar': searchNavbar,
      'slidenav-next': slidenavNext,
      'slidenav-next-large': slidenavNextLarge,
      'slidenav-previous': slidenavPrevious,
      'slidenav-previous-large': slidenavPreviousLarge };


    const Icon = {
      install: install$3,

      extends: SVG,

      args: 'icon',

      props: ['icon'],

      data: {
        include: ['focusable'] },


      isIcon: true,

      beforeConnect() {
        addClass(this.$el, 'uk-icon');
      },

      methods: {
        async getSvg() {
          const icon = getIcon(this.icon);

          if (!icon) {
            throw 'Icon not found.';
          }

          return icon;
        } } };

    const IconComponent = {
      args: false,

      extends: Icon,

      data: (vm) => ({
        icon: hyphenate(vm.constructor.options.name) }),


      beforeConnect() {
        addClass(this.$el, this.$name);
      } };


    const NavParentIcon = {
      extends: IconComponent,

      beforeConnect() {
        const icon = this.$props.icon;
        this.icon = closest(this.$el, '.uk-nav-primary') ? icon + "-large" : icon;
      } };


    const Slidenav = {
      extends: IconComponent,

      beforeConnect() {
        addClass(this.$el, 'uk-slidenav');
        const icon = this.$props.icon;
        this.icon = hasClass(this.$el, 'uk-slidenav-large') ? icon + "-large" : icon;
      } };


    const Search = {
      extends: IconComponent,

      beforeConnect() {
        this.icon =
        hasClass(this.$el, 'uk-search-icon') && parents(this.$el, '.uk-search-large').length ?
        'search-large' :
        parents(this.$el, '.uk-search-navbar').length ?
        'search-navbar' :
        this.$props.icon;
      } };


    const Close = {
      extends: IconComponent,

      beforeConnect() {
        this.icon = "close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon');
      } };


    const Spinner = {
      extends: IconComponent,

      methods: {
        async getSvg() {
          const icon = await Icon.methods.getSvg.call(this);

          if (this.ratio !== 1) {
            css($('circle', icon), 'strokeWidth', 1 / this.ratio);
          }

          return icon;
        } } };



    const parsed = {};
    function install$3(UIkit) {
      UIkit.icon.add = (name, svg) => {
        const added = isString(name) ? { [name]: svg } : name;
        each(added, (svg, name) => {
          icons[name] = svg;
          delete parsed[name];
        });

        if (UIkit._initialized) {
          apply(document.body, (el) =>
          each(UIkit.getComponents(el), (cmp) => {
            cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
          }));

        }
      };
    }

    function getIcon(icon) {
      if (!icons[icon]) {
        return null;
      }

      if (!parsed[icon]) {
        parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
      }

      return parsed[icon].cloneNode(true);
    }

    function applyRtl(icon) {
      return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
    }

    const nativeLazyLoad = inBrowser && 'loading' in HTMLImageElement.prototype;

    var img = {
      args: 'dataSrc',

      props: {
        dataSrc: String,
        sources: String,
        offsetTop: String,
        offsetLeft: String,
        target: String,
        loading: String },


      data: {
        dataSrc: '',
        sources: false,
        offsetTop: '50vh',
        offsetLeft: '50vw',
        target: false,
        loading: 'lazy' },


      connected() {
        if (this.loading !== 'lazy') {
          this.load();
          return;
        }

        const target = [this.$el, ...queryAll(this.$props.target, this.$el)];

        if (nativeLazyLoad && isImg(this.$el)) {
          this.$el.loading = 'lazy';
          setSrcAttrs(this.$el);

          if (target.length === 1) {
            return;
          }
        }

        ensureSrcAttribute(this.$el);

        this.registerObserver(
        observeIntersection(
        target,
        (entries, observer) => {
          this.load();
          observer.disconnect();
        },
        {
          rootMargin: toPx(this.offsetTop, 'height') + "px " + toPx(
          this.offsetLeft,
          'width') + "px" }));




      },

      disconnected() {
        if (this._data.image) {
          this._data.image.onload = '';
        }
      },

      methods: {
        load() {
          if (this._data.image) {
            return this._data.image;
          }

          const image = isImg(this.$el) ?
          this.$el :
          getImageFromElement(this.$el, this.dataSrc, this.sources);

          removeAttr(image, 'loading');
          setSrcAttrs(this.$el, image.currentSrc);
          return this._data.image = image;
        } } };



    function setSrcAttrs(el, src) {
      if (isImg(el)) {
        const parentNode = parent(el);
        const elements = isPicture(parentNode) ? children(parentNode) : [el];
        elements.forEach((el) => setSourceProps(el, el));
      } else if (src) {
        const change = !includes(el.style.backgroundImage, src);
        if (change) {
          css(el, 'backgroundImage', "url(" + escape(src) + ")");
          trigger(el, createEvent('load', false));
        }
      }
    }

    const srcProps = ['data-src', 'data-srcset', 'sizes'];
    function setSourceProps(sourceEl, targetEl) {
      srcProps.forEach((prop) => {
        const value = data(sourceEl, prop);
        if (value) {
          attr(targetEl, prop.replace(/^(data-)+/, ''), value);
        }
      });
    }

    function getImageFromElement(el, src, sources) {
      const img = new Image();

      wrapInPicture(img, sources);
      setSourceProps(el, img);
      img.onload = () => {
        setSrcAttrs(el, img.currentSrc);
      };
      attr(img, 'src', src);
      return img;
    }

    function wrapInPicture(img, sources) {
      sources = parseSources(sources);

      if (sources.length) {
        const picture = fragment('<picture>');
        for (const attrs of sources) {
          const source = fragment('<source>');
          attr(source, attrs);
          append(picture, source);
        }
        append(picture, img);
      }
    }

    function parseSources(sources) {
      if (!sources) {
        return [];
      }

      if (startsWith(sources, '[')) {
        try {
          sources = JSON.parse(sources);
        } catch (e) {
          sources = [];
        }
      } else {
        sources = parseOptions(sources);
      }

      if (!isArray(sources)) {
        sources = [sources];
      }

      return sources.filter((source) => !isEmpty(source));
    }

    function ensureSrcAttribute(el) {
      if (isImg(el) && !hasAttr(el, 'src')) {
        attr(el, 'src', 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
      }
    }

    function isPicture(el) {
      return isTag(el, 'picture');
    }

    function isImg(el) {
      return isTag(el, 'img');
    }

    var Media = {
      props: {
        media: Boolean },


      data: {
        media: false },


      connected() {
        const media = toMedia(this.media, this.$el);
        this.matchMedia = true;
        if (media) {
          this.mediaObj = window.matchMedia(media);
          const handler = () => {
            this.matchMedia = this.mediaObj.matches;
            trigger(this.$el, createEvent('mediachange', false, true, [this.mediaObj]));
          };
          this.offMediaObj = on(this.mediaObj, 'change', () => {
            handler();
            this.$emit('resize');
          });
          handler();
        }
      },

      disconnected() {var _this$offMediaObj;
        (_this$offMediaObj = this.offMediaObj) == null ? void 0 : _this$offMediaObj.call(this);
      } };


    function toMedia(value, element) {
      if (isString(value)) {
        if (startsWith(value, '@')) {
          value = toFloat(css(element, "--uk-breakpoint-" + value.substr(1)));
        } else if (isNaN(value)) {
          return value;
        }
      }

      return value && isNumeric(value) ? "(min-width: " + value + "px)" : '';
    }

    var leader = {
      mixins: [Class, Media, Resize],

      props: {
        fill: String },


      data: {
        fill: '',
        clsWrapper: 'uk-leader-fill',
        clsHide: 'uk-leader-hide',
        attrFill: 'data-fill' },


      computed: {
        fill(_ref) {let { fill } = _ref;
          return fill || css(this.$el, '--uk-leader-fill-content');
        } },


      connected() {
        [this.wrapper] = wrapInner(this.$el, "<span class=\"" + this.clsWrapper + "\">");
      },

      disconnected() {
        unwrap(this.wrapper.childNodes);
      },

      update: {
        read() {
          const width = Math.trunc(this.$el.offsetWidth / 2);

          return {
            width,
            fill: this.fill,
            hide: !this.matchMedia };

        },

        write(_ref2) {let { width, fill, hide } = _ref2;
          toggleClass(this.wrapper, this.clsHide, hide);
          attr(this.wrapper, this.attrFill, new Array(width).join(fill));
        },

        events: ['resize'] } };

    var modal = {
      install: install$2,

      mixins: [Modal],

      data: {
        clsPage: 'uk-modal-page',
        selPanel: '.uk-modal-dialog',
        selClose:
        '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full' },


      events: [
      {
        name: 'show',

        self: true,

        handler() {
          if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
            addClass(this.$el, 'uk-flex');
          } else {
            css(this.$el, 'display', 'block');
          }

          height(this.$el); // force reflow
        } },


      {
        name: 'hidden',

        self: true,

        handler() {
          css(this.$el, 'display', '');
          removeClass(this.$el, 'uk-flex');
        } }] };




    function install$2(_ref) {let { modal } = _ref;
      modal.dialog = function (content, options) {
        const dialog = modal("<div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" +

        content + "</div> </div>",

        options);


        dialog.show();

        on(
        dialog.$el,
        'hidden',
        async () => {
          await Promise.resolve();
          dialog.$destroy(true);
        },
        { self: true });


        return dialog;
      };

      modal.alert = function (message, options) {
        return openDialog(
        (_ref2) => {let { labels } = _ref2;return "<div class=\"uk-modal-body\">" + (
          isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" +



          labels.ok + "</button> </div>";},


        options,
        (deferred) => deferred.resolve());

      };

      modal.confirm = function (message, options) {
        return openDialog(
        (_ref3) => {let { labels } = _ref3;return "<form> <div class=\"uk-modal-body\">" + (
          isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" +


          labels.cancel + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" +

          labels.ok + "</button> </div> </form>";},


        options,
        (deferred) => deferred.reject());

      };

      modal.prompt = function (message, value, options) {
        return openDialog(
        (_ref4) => {let { labels } = _ref4;return "<form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (

          isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" value=\"" + (
          value || '') + "\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" +



          labels.cancel + "</button> <button class=\"uk-button uk-button-primary\">" +

          labels.ok + "</button> </div> </form>";},


        options,
        (deferred) => deferred.resolve(null),
        (dialog) => $('input', dialog.$el).value);

      };

      modal.labels = {
        ok: 'Ok',
        cancel: 'Cancel' };


      function openDialog(tmpl, options, hideFn, submitFn) {
        options = { bgClose: false, escClose: true, labels: modal.labels, ...options };

        const dialog = modal.dialog(tmpl(options), options);
        const deferred = new Deferred();

        let resolved = false;

        on(dialog.$el, 'submit', 'form', (e) => {
          e.preventDefault();
          deferred.resolve(submitFn == null ? void 0 : submitFn(dialog));
          resolved = true;
          dialog.hide();
        });

        on(dialog.$el, 'hide', () => !resolved && hideFn(deferred));

        deferred.promise.dialog = dialog;

        return deferred.promise;
      }
    }

    var nav = {
      extends: Accordion,

      data: {
        targets: '> .uk-parent',
        toggle: '> a',
        content: '> ul' } };

    var navbar = {
      mixins: [Class, Container],

      props: {
        dropdown: String,
        align: String,
        clsDrop: String,
        boundary: Boolean,
        dropbar: Boolean,
        dropbarAnchor: Boolean,
        duration: Number,
        mode: Boolean,
        offset: Boolean,
        stretch: Boolean,
        delayShow: Boolean,
        delayHide: Boolean,
        target: Boolean,
        targetX: Boolean,
        targetY: Boolean,
        animation: Boolean,
        animateOut: Boolean },


      data: {
        dropdown: '.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle',
        align: isRtl ? 'right' : 'left',
        clsDrop: 'uk-navbar-dropdown',
        boundary: true,
        dropbar: false,
        dropbarAnchor: false,
        duration: 200,
        container: false },


      computed: {
        dropbarAnchor(_ref, $el) {let { dropbarAnchor } = _ref;
          return query(dropbarAnchor, $el) || $el;
        },

        dropbar: {
          get(_ref2) {let { dropbar } = _ref2;
            if (!dropbar) {
              return null;
            }

            dropbar =
            this._dropbar ||
            query(dropbar, this.$el) ||
            $('+ .uk-navbar-dropbar', this.$el);

            return dropbar ? dropbar : this._dropbar = $('<div></div>');
          },

          watch(dropbar) {
            addClass(dropbar, 'uk-dropbar', 'uk-dropbar-top', 'uk-navbar-dropbar');
          },

          immediate: true },


        dropContainer(_, $el) {
          return this.container || $el;
        },

        dropdowns: {
          get(_ref3, $el) {let { clsDrop } = _ref3;
            const dropdowns = $$("." + clsDrop, $el);

            if (this.dropContainer !== $el) {
              for (const el of $$("." + clsDrop, this.dropContainer)) {var _this$getDropdown;
                const target = (_this$getDropdown = this.getDropdown(el)) == null ? void 0 : _this$getDropdown.targetEl;
                if (!includes(dropdowns, el) && target && within(target, this.$el)) {
                  dropdowns.push(el);
                }
              }
            }

            return dropdowns;
          },

          watch(dropdowns) {
            this.$create(
            'drop',
            dropdowns.filter((el) => !this.getDropdown(el)),
            {
              ...this.$props,
              flip: false,
              shift: true,
              pos: "bottom-" + this.align,
              boundary: this.boundary === true ? this.$el : this.boundary });


          },

          immediate: true },


        toggles: {
          get(_ref4, $el) {let { dropdown } = _ref4;
            return $$(dropdown, $el);
          },

          watch() {
            const justify = hasClass(this.$el, 'uk-navbar-justify');
            for (const container of $$(
            '.uk-navbar-nav, .uk-navbar-left, .uk-navbar-right',
            this.$el))
            {
              css(container, 'flexGrow', justify ? $$(this.dropdown, container).length : '');
            }
          },

          immediate: true } },



      disconnected() {
        this.dropbar && remove$1(this.dropbar);
        delete this._dropbar;
      },

      events: [
      {
        name: 'mouseover focusin',

        delegate() {
          return this.dropdown;
        },

        handler(_ref5) {let { current } = _ref5;
          const active = this.getActive();
          if (
          active &&
          includes(active.mode, 'hover') &&
          active.targetEl &&
          !within(active.targetEl, current) &&
          !active.isDelaying)
          {
            active.hide(false);
          }
        } },


      {
        name: 'keydown',

        delegate() {
          return this.dropdown;
        },

        handler(e) {
          const { current, keyCode } = e;
          const active = this.getActive();

          if (keyCode === keyMap.DOWN && hasAttr(current, 'aria-expanded')) {
            e.preventDefault();

            if (!active || active.targetEl !== current) {
              current.click();
              once(this.dropContainer, 'show', (_ref6) => {let { target } = _ref6;return (
                  focusFirstFocusableElement(target));});

            } else {
              focusFirstFocusableElement(active.$el);
            }
          }

          handleNavItemNavigation(e, this.toggles, active);
        } },


      {
        name: 'keydown',

        el() {
          return this.dropContainer;
        },

        delegate() {
          return "." + this.clsDrop;
        },

        handler(e) {
          const { current, keyCode } = e;

          if (!includes(this.dropdowns, current)) {
            return;
          }

          const active = this.getActive();
          const elements = $$(selFocusable, current);
          const i = findIndex(elements, (el) => matches(el, ':focus'));

          if (keyCode === keyMap.UP) {
            e.preventDefault();
            if (i > 0) {
              elements[i - 1].focus();
            }
          }

          if (keyCode === keyMap.DOWN) {
            e.preventDefault();
            if (i < elements.length - 1) {
              elements[i + 1].focus();
            }
          }

          if (keyCode === keyMap.ESC) {var _active$targetEl;
            active == null ? void 0 : (_active$targetEl = active.targetEl) == null ? void 0 : _active$targetEl.focus();
          }

          handleNavItemNavigation(e, this.toggles, active);
        } },


      {
        name: 'mouseleave',

        el() {
          return this.dropbar;
        },

        filter() {
          return this.dropbar;
        },

        handler() {
          const active = this.getActive();

          if (
          active &&
          includes(active.mode, 'hover') &&
          !this.dropdowns.some((el) => matches(el, ':hover')))
          {
            active.hide();
          }
        } },


      {
        name: 'beforeshow',

        el() {
          return this.dropContainer;
        },

        filter() {
          return this.dropbar;
        },

        handler(_ref7) {let { target } = _ref7;
          if (!this.isDropbarDrop(target)) {
            return;
          }

          if (this.dropbar.previousElementSibling !== this.dropbarAnchor) {
            after(this.dropbarAnchor, this.dropbar);
          }

          addClass(target, this.clsDrop + "-dropbar");
        } },


      {
        name: 'show',

        el() {
          return this.dropContainer;
        },

        filter() {
          return this.dropbar;
        },

        handler(_ref8) {let { target } = _ref8;
          if (!this.isDropbarDrop(target)) {
            return;
          }

          const drop = this.getDropdown(target);
          this._observer = observeResize([drop.$el, ...drop.target], () => {
            const targetOffsets = parents(target, "." + this.clsDrop).
            concat(target).
            map((el) => offset(el));
            const minTop = Math.min(...targetOffsets.map((_ref9) => {let { top } = _ref9;return top;}));
            const maxBottom = Math.max(...targetOffsets.map((_ref10) => {let { bottom } = _ref10;return bottom;}));
            const dropbarOffset = offset(this.dropbar);
            css(this.dropbar, 'top', this.dropbar.offsetTop - (dropbarOffset.top - minTop));
            this.transitionTo(
            maxBottom - minTop + toFloat(css(target, 'marginBottom')),
            target);

          });
        } },


      {
        name: 'beforehide',

        el() {
          return this.dropContainer;
        },

        filter() {
          return this.dropbar;
        },

        handler(e) {
          const active = this.getActive();

          if (
          matches(this.dropbar, ':hover') &&
          (active == null ? void 0 : active.$el) === e.target &&
          !this.toggles.some((el) => active.targetEl !== el && matches(el, ':focus')))
          {
            e.preventDefault();
          }
        } },


      {
        name: 'hide',

        el() {
          return this.dropContainer;
        },

        filter() {
          return this.dropbar;
        },

        handler(_ref11) {var _this$_observer;let { target } = _ref11;
          if (!this.isDropbarDrop(target)) {
            return;
          }

          (_this$_observer = this._observer) == null ? void 0 : _this$_observer.disconnect();

          const active = this.getActive();

          if (!active || (active == null ? void 0 : active.$el) === target) {
            this.transitionTo(0);
          }
        } }],



      methods: {
        getActive() {
          return includes(this.dropdowns, active == null ? void 0 : active.$el) && active;
        },

        transitionTo(newHeight, el) {
          const { dropbar } = this;
          const oldHeight = height(dropbar);

          el = oldHeight < newHeight && el;

          css(el, 'clipPath', "polygon(0 0,100% 0,100% " + oldHeight + "px,0 " + oldHeight + "px)");

          height(dropbar, oldHeight);

          Transition.cancel([el, dropbar]);
          Promise.all([
          Transition.start(dropbar, { height: newHeight }, this.duration),
          Transition.start(
          el,
          {
            clipPath: "polygon(0 0,100% 0,100% " + newHeight + "px,0 " + newHeight + "px)" },

          this.duration)]).


          catch(noop).
          then(() => css(el, { clipPath: '' }));
        },

        getDropdown(el) {
          return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
        },

        isDropbarDrop(el) {
          return this.getDropdown(el) && hasClass(el, this.clsDrop);
        } } };



    function handleNavItemNavigation(e, toggles, active) {
      const { current, keyCode } = e;
      const target = (active == null ? void 0 : active.targetEl) || current;
      const i = toggles.indexOf(target);

      // Left
      if (keyCode === keyMap.LEFT && i > 0) {
        active == null ? void 0 : active.hide(false);
        toggles[i - 1].focus();
      }

      // Right
      if (keyCode === keyMap.RIGHT && i < toggles.length - 1) {
        active == null ? void 0 : active.hide(false);
        toggles[i + 1].focus();
      }

      if (keyCode === keyMap.TAB) {
        target.focus();
        active == null ? void 0 : active.hide(false);
      }
    }

    function focusFirstFocusableElement(el) {
      if (!$(':focus', el)) {var _$;
        (_$ = $(selFocusable, el)) == null ? void 0 : _$.focus();
      }
    }

    const keyMap = {
      TAB: 9,
      ESC: 27,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40 };

    var Swipe = {
      props: {
        swiping: Boolean },


      data: {
        swiping: true },


      computed: {
        swipeTarget(props, $el) {
          return $el;
        } },


      connected() {
        if (!this.swiping) {
          return;
        }

        registerEvent(this, {
          el: this.swipeTarget,
          name: pointerDown$1,
          passive: true,
          handler(e) {
            if (!isTouch(e)) {
              return;
            }

            // Handle Swipe Gesture
            const pos = getEventPos(e);
            const target = 'tagName' in e.target ? e.target : parent(e.target);
            once(document, pointerUp$1 + " " + pointerCancel + " scroll", (e) => {
              const { x, y } = getEventPos(e);

              // swipe
              if (
              e.type !== 'scroll' && target && x && Math.abs(pos.x - x) > 100 ||
              y && Math.abs(pos.y - y) > 100)
              {
                setTimeout(() => {
                  trigger(target, 'swipe');
                  trigger(target, "swipe" + swipeDirection(pos.x, pos.y, x, y));
                });
              }
            });
          } });

      } };


    function swipeDirection(x1, y1, x2, y2) {
      return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ?
      x1 - x2 > 0 ?
      'Left' :
      'Right' :
      y1 - y2 > 0 ?
      'Up' :
      'Down';
    }

    var offcanvas = {
      mixins: [Modal, Swipe],

      args: 'mode',

      props: {
        mode: String,
        flip: Boolean,
        overlay: Boolean },


      data: {
        mode: 'slide',
        flip: false,
        overlay: false,
        clsPage: 'uk-offcanvas-page',
        clsContainer: 'uk-offcanvas-container',
        selPanel: '.uk-offcanvas-bar',
        clsFlip: 'uk-offcanvas-flip',
        clsContainerAnimation: 'uk-offcanvas-container-animation',
        clsSidebarAnimation: 'uk-offcanvas-bar-animation',
        clsMode: 'uk-offcanvas',
        clsOverlay: 'uk-offcanvas-overlay',
        selClose: '.uk-offcanvas-close',
        container: false },


      computed: {
        clsFlip(_ref) {let { flip, clsFlip } = _ref;
          return flip ? clsFlip : '';
        },

        clsOverlay(_ref2) {let { overlay, clsOverlay } = _ref2;
          return overlay ? clsOverlay : '';
        },

        clsMode(_ref3) {let { mode, clsMode } = _ref3;
          return clsMode + "-" + mode;
        },

        clsSidebarAnimation(_ref4) {let { mode, clsSidebarAnimation } = _ref4;
          return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
        },

        clsContainerAnimation(_ref5) {let { mode, clsContainerAnimation } = _ref5;
          return mode !== 'push' && mode !== 'reveal' ? '' : clsContainerAnimation;
        },

        transitionElement(_ref6) {let { mode } = _ref6;
          return mode === 'reveal' ? parent(this.panel) : this.panel;
        } },


      update: {
        read() {
          if (this.isToggled() && !isVisible(this.$el)) {
            this.hide();
          }
        },

        events: ['resize'] },


      events: [
      {
        name: 'click',

        delegate() {
          return 'a[href^="#"]';
        },

        handler(_ref7) {let { current: { hash }, defaultPrevented } = _ref7;
          if (!defaultPrevented && hash && $(hash, document.body)) {
            this.hide();
          }
        } },


      {
        name: 'touchmove',

        self: true,
        passive: false,

        filter() {
          return this.overlay;
        },

        handler(e) {
          e.cancelable && e.preventDefault();
        } },


      {
        name: 'show',

        self: true,

        handler() {
          if (this.mode === 'reveal' && !hasClass(parent(this.panel), this.clsMode)) {
            wrapAll(this.panel, '<div>');
            addClass(parent(this.panel), this.clsMode);
          }

          const { body, scrollingElement } = document;

          addClass(body, this.clsContainer, this.clsFlip);
          css(body, 'touch-action', 'pan-y pinch-zoom');
          css(this.$el, 'display', 'block');
          css(this.panel, 'maxWidth', scrollingElement.clientWidth);
          addClass(this.$el, this.clsOverlay);
          addClass(
          this.panel,
          this.clsSidebarAnimation,
          this.mode === 'reveal' ? '' : this.clsMode);


          height(body); // force reflow
          addClass(body, this.clsContainerAnimation);

          this.clsContainerAnimation && suppressUserScale();
        } },


      {
        name: 'hide',

        self: true,

        handler() {
          removeClass(document.body, this.clsContainerAnimation);
          css(document.body, 'touch-action', '');
        } },


      {
        name: 'hidden',

        self: true,

        handler() {
          this.clsContainerAnimation && resumeUserScale();

          if (this.mode === 'reveal') {
            unwrap(this.panel);
          }

          removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
          removeClass(this.$el, this.clsOverlay);
          css(this.$el, 'display', '');
          css(this.panel, 'maxWidth', '');
          removeClass(document.body, this.clsContainer, this.clsFlip);
        } },


      {
        name: 'swipeLeft swipeRight',

        handler(e) {
          if (this.isToggled() && endsWith(e.type, 'Left') ^ this.flip) {
            this.hide();
          }
        } }] };




    // Chrome in responsive mode zooms page upon opening offcanvas
    function suppressUserScale() {
      getViewport().content += ',user-scalable=0';
    }

    function resumeUserScale() {
      const viewport = getViewport();
      viewport.content = viewport.content.replace(/,user-scalable=0$/, '');
    }

    function getViewport() {
      return (
        $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">'));

    }

    var overflowAuto = {
      mixins: [Class, Resize],

      props: {
        selContainer: String,
        selContent: String,
        minHeight: Number },


      data: {
        selContainer: '.uk-modal',
        selContent: '.uk-modal-dialog',
        minHeight: 150 },


      computed: {
        container(_ref, $el) {let { selContainer } = _ref;
          return closest($el, selContainer);
        },

        content(_ref2, $el) {let { selContent } = _ref2;
          return closest($el, selContent);
        } },


      resizeTargets() {
        return [this.container, this.content];
      },

      update: {
        read() {
          if (!this.content || !this.container || !isVisible(this.$el)) {
            return false;
          }

          return {
            max: Math.max(
            this.minHeight,
            height(this.container) - (dimensions$1(this.content).height - height(this.$el))) };


        },

        write(_ref3) {let { max } = _ref3;
          css(this.$el, { minHeight: this.minHeight, maxHeight: max });
        },

        events: ['resize'] } };

    var responsive = {
      mixins: [Resize],

      props: ['width', 'height'],

      resizeTargets() {
        return [this.$el, parent(this.$el)];
      },

      connected() {
        addClass(this.$el, 'uk-responsive-width');
      },

      update: {
        read() {
          return isVisible(this.$el) && this.width && this.height ?
          { width: width(parent(this.$el)), height: this.height } :
          false;
        },

        write(dim) {
          height(
          this.$el,
          Dimensions.contain(
          {
            height: this.height,
            width: this.width },

          dim).
          height);

        },

        events: ['resize'] } };

    var scroll = {
      props: {
        offset: Number },


      data: {
        offset: 0 },


      connected() {
        registerClick(this);
      },

      disconnected() {
        unregisterClick(this);
      },

      methods: {
        async scrollTo(el) {
          el = el && $(el) || document.body;

          if (trigger(this.$el, 'beforescroll', [this, el])) {
            await scrollIntoView(el, { offset: this.offset });
            trigger(this.$el, 'scrolled', [this, el]);
          }
        } } };



    const components$2 = new Set();
    function registerClick(cmp) {
      if (!components$2.size) {
        on(document, 'click', clickHandler);
      }

      components$2.add(cmp);
    }

    function unregisterClick(cmp) {
      components$2.delete(cmp);

      if (!components$2.length) {
        off(document, 'click', clickHandler);
      }
    }

    function clickHandler(e) {
      if (e.defaultPrevented) {
        return;
      }

      for (const component of components$2) {
        if (within(e.target, component.$el)) {
          e.preventDefault();
          component.scrollTo(getTargetElement(component.$el));
        }
      }
    }

    function getTargetElement(el) {
      return document.getElementById(decodeURIComponent(el.hash).substring(1));
    }

    var scrollspy = {
      mixins: [Scroll],

      args: 'cls',

      props: {
        cls: String,
        target: String,
        hidden: Boolean,
        offsetTop: Number,
        offsetLeft: Number,
        repeat: Boolean,
        delay: Number },


      data: () => ({
        cls: '',
        target: false,
        hidden: true,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: false,
        delay: 0,
        inViewClass: 'uk-scrollspy-inview' }),


      computed: {
        elements: {
          get(_ref, $el) {let { target } = _ref;
            return target ? $$(target, $el) : [$el];
          },

          watch(elements, prev) {
            if (this.hidden) {
              css(filter$1(elements, ":not(." + this.inViewClass + ")"), 'visibility', 'hidden');
            }

            if (!isEqual(elements, prev)) {
              this.$reset();
            }
          },

          immediate: true } },



      connected() {
        this._data.elements = new Map();
        this.registerObserver(
        observeIntersection(
        this.elements,
        (records) => {
          const elements = this._data.elements;
          for (const { target: el, isIntersecting } of records) {
            if (!elements.has(el)) {
              elements.set(el, {
                cls: data(el, 'uk-scrollspy-class') || this.cls });

            }

            const state = elements.get(el);
            if (!this.repeat && state.show) {
              continue;
            }

            state.show = isIntersecting;
          }

          this.$emit();
        },
        {
          rootMargin: toPx(this.offsetTop, 'height') - 1 + "px " + (
          toPx(this.offsetLeft, 'width') - 1) + "px" },


        false));


      },

      disconnected() {
        for (const [el, state] of this._data.elements.entries()) {
          removeClass(el, this.inViewClass, (state == null ? void 0 : state.cls) || '');
        }
      },

      update: [
      {
        write(data) {
          for (const [el, state] of data.elements.entries()) {
            if (state.show && !state.inview && !state.queued) {
              state.queued = true;

              data.promise = (data.promise || Promise.resolve()).
              then(() => new Promise((resolve) => setTimeout(resolve, this.delay))).
              then(() => {
                this.toggle(el, true);
                setTimeout(() => {
                  state.queued = false;
                  this.$emit();
                }, 300);
              });
            } else if (!state.show && state.inview && !state.queued && this.repeat) {
              this.toggle(el, false);
            }
          }
        } }],



      methods: {
        toggle(el, inview) {
          const state = this._data.elements.get(el);

          if (!state) {
            return;
          }

          state.off == null ? void 0 : state.off();

          css(el, 'visibility', !inview && this.hidden ? 'hidden' : '');

          toggleClass(el, this.inViewClass, inview);
          toggleClass(el, state.cls);

          if (/\buk-animation-/.test(state.cls)) {
            const removeAnimationClasses = () => removeClasses(el, 'uk-animation-[\\w-]+');
            if (inview) {
              state.off = once(el, 'animationcancel animationend', removeAnimationClasses);
            } else {
              removeAnimationClasses();
            }
          }

          trigger(el, inview ? 'inview' : 'outview');

          state.inview = inview;

          this.$update(el);
        } } };

    var scrollspyNav = {
      mixins: [Scroll],

      props: {
        cls: String,
        closest: String,
        scroll: Boolean,
        overflow: Boolean,
        offset: Number },


      data: {
        cls: 'uk-active',
        closest: false,
        scroll: false,
        overflow: true,
        offset: 0 },


      computed: {
        links: {
          get(_, $el) {
            return $$('a[href^="#"]', $el).filter((el) => el.hash);
          },

          watch(links) {
            if (this.scroll) {
              this.$create('scroll', links, { offset: this.offset || 0 });
            }
          },

          immediate: true },


        elements(_ref) {let { closest: selector } = _ref;
          return closest(this.links, selector || '*');
        } },


      update: [
      {
        read() {
          const targets = this.links.map(getTargetElement).filter(Boolean);

          const { length } = targets;

          if (!length || !isVisible(this.$el)) {
            return false;
          }

          const [scrollElement] = scrollParents(targets, /auto|scroll/, true);
          const { scrollTop, scrollHeight } = scrollElement;
          const viewport = offsetViewport(scrollElement);
          const max = scrollHeight - viewport.height;
          let active = false;

          if (scrollTop === max) {
            active = length - 1;
          } else {
            for (let i = 0; i < targets.length; i++) {
              if (offset(targets[i]).top - viewport.top - this.offset > 0) {
                break;
              }
              active = +i;
            }

            if (active === false && this.overflow) {
              active = 0;
            }
          }

          return { active };
        },

        write(_ref2) {let { active } = _ref2;
          const changed = active !== false && !hasClass(this.elements[active], this.cls);

          this.links.forEach((el) => el.blur());
          for (let i = 0; i < this.elements.length; i++) {
            toggleClass(this.elements[i], this.cls, +i === active);
          }

          if (changed) {
            trigger(this.$el, 'active', [active, this.elements[active]]);
          }
        },

        events: ['scroll', 'resize'] }] };

    var sticky = {
      mixins: [Class, Media, Resize, Scroll],

      props: {
        position: String,
        top: null,
        bottom: null,
        start: null,
        end: null,
        offset: String,
        overflowFlip: Boolean,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        showOnUp: Boolean,
        targetOffset: Number },


      data: {
        position: 'top',
        top: false,
        bottom: false,
        start: false,
        end: false,
        offset: 0,
        overflowFlip: false,
        animation: '',
        clsActive: 'uk-active',
        clsInactive: '',
        clsFixed: 'uk-sticky-fixed',
        clsBelow: 'uk-sticky-below',
        selTarget: '',
        showOnUp: false,
        targetOffset: false },


      computed: {
        selTarget(_ref, $el) {let { selTarget } = _ref;
          return selTarget && $(selTarget, $el) || $el;
        } },


      resizeTargets() {
        return document.documentElement;
      },

      connected() {
        this.start = coerce(this.start || this.top);
        this.end = coerce(this.end || this.bottom);

        this.placeholder =
        $('+ .uk-sticky-placeholder', this.$el) ||
        $('<div class="uk-sticky-placeholder"></div>');
        this.isFixed = false;
        this.setActive(false);
      },

      disconnected() {
        if (this.isFixed) {
          this.hide();
          removeClass(this.selTarget, this.clsInactive);
        }

        remove$1(this.placeholder);
        this.placeholder = null;
      },

      events: [
      {
        name: 'resize',

        el() {
          return window;
        },

        handler() {
          this.$emit('resize');
        } },

      {
        name: 'load hashchange popstate',

        el() {
          return window;
        },

        filter() {
          return this.targetOffset !== false;
        },

        handler() {
          const { scrollingElement } = document;

          if (!location.hash || scrollingElement.scrollTop === 0) {
            return;
          }

          setTimeout(() => {
            const targetOffset = offset($(location.hash));
            const elOffset = offset(this.$el);

            if (this.isFixed && intersectRect(targetOffset, elOffset)) {
              scrollingElement.scrollTop =
              targetOffset.top -
              elOffset.height -
              toPx(this.targetOffset, 'height', this.placeholder) -
              toPx(this.offset, 'height', this.placeholder);
            }
          });
        } }],



      update: [
      {
        read(_ref2, types) {let { height: height$1, margin } = _ref2;
          this.inactive = !this.matchMedia || !isVisible(this.$el);

          if (this.inactive) {
            return false;
          }

          const hide = this.active && types.has('resize');
          if (hide) {
            css(this.selTarget, 'transition', '0s');
            this.hide();
          }

          if (!this.active) {
            height$1 = offset(this.$el).height;
            margin = css(this.$el, 'margin');
          }

          if (hide) {
            this.show();
            requestAnimationFrame(() => css(this.selTarget, 'transition', ''));
          }

          const referenceElement = this.isFixed ? this.placeholder : this.$el;
          const windowHeight = height(window);

          let position = this.position;
          if (this.overflowFlip && height$1 > windowHeight) {
            position = position === 'top' ? 'bottom' : 'top';
          }

          let offset$1 = toPx(this.offset, 'height', referenceElement);
          if (position === 'bottom' && (height$1 < windowHeight || this.overflowFlip)) {
            offset$1 += windowHeight - height$1;
          }

          const overflow = this.overflowFlip ?
          0 :
          Math.max(0, height$1 + offset$1 - windowHeight);
          const topOffset = offset(referenceElement).top;

          const start =
          (this.start === false ?
          topOffset :
          parseProp(this.start, this.$el, topOffset)) - offset$1;
          const end =
          this.end === false ?
          document.scrollingElement.scrollHeight - windowHeight :
          parseProp(this.end, this.$el, topOffset + height$1, true) -
          offset(this.$el).height +
          overflow -
          offset$1;

          return {
            start,
            end,
            offset: offset$1,
            overflow,
            topOffset,
            height: height$1,
            margin,
            width: dimensions$1(referenceElement).width,
            top: offsetPosition(referenceElement)[0] };

        },

        write(_ref3) {let { height, margin } = _ref3;
          const { placeholder } = this;

          css(placeholder, { height, margin });

          if (!within(placeholder, document)) {
            after(this.$el, placeholder);
            placeholder.hidden = true;
          }
        },

        events: ['resize'] },


      {
        read(_ref4)






        {let { scroll: prevScroll = 0, dir: prevDir = 'down', overflow, overflowScroll = 0, start, end } = _ref4;
          const scroll = document.scrollingElement.scrollTop;
          const dir = prevScroll <= scroll ? 'down' : 'up';

          return {
            dir,
            prevDir,
            scroll,
            prevScroll,
            offsetParentTop: offset(
            (this.isFixed ? this.placeholder : this.$el).offsetParent).
            top,
            overflowScroll: clamp(
            overflowScroll + clamp(scroll, start, end) - clamp(prevScroll, start, end),
            0,
            overflow) };


        },

        write(data, types) {
          const isScrollUpdate = types.has('scroll');
          const {
            initTimestamp = 0,
            dir,
            prevDir,
            scroll,
            prevScroll = 0,
            top,
            start,
            topOffset,
            height } =
          data;

          if (
          scroll < 0 ||
          scroll === prevScroll && isScrollUpdate ||
          this.showOnUp && !isScrollUpdate && !this.isFixed)
          {
            return;
          }

          const now = Date.now();
          if (now - initTimestamp > 300 || dir !== prevDir) {
            data.initScroll = scroll;
            data.initTimestamp = now;
          }

          if (
          this.showOnUp &&
          !this.isFixed &&
          Math.abs(data.initScroll - scroll) <= 30 &&
          Math.abs(prevScroll - scroll) <= 10)
          {
            return;
          }

          if (
          this.inactive ||
          scroll < start ||
          this.showOnUp && (
          scroll <= start ||
          dir === 'down' && isScrollUpdate ||
          dir === 'up' && !this.isFixed && scroll <= topOffset + height))
          {
            if (!this.isFixed) {
              if (Animation.inProgress(this.$el) && top > scroll) {
                Animation.cancel(this.$el);
                this.hide();
              }

              return;
            }

            this.isFixed = false;

            if (this.animation && scroll > topOffset) {
              Animation.cancel(this.$el);
              Animation.out(this.$el, this.animation).then(() => this.hide(), noop);
            } else {
              this.hide();
            }
          } else if (this.isFixed) {
            this.update();
          } else if (this.animation && scroll > topOffset) {
            Animation.cancel(this.$el);
            this.show();
            Animation.in(this.$el, this.animation).catch(noop);
          } else {
            this.show();
          }
        },

        events: ['resize', 'scroll'] }],



      methods: {
        show() {
          this.isFixed = true;
          this.update();
          this.placeholder.hidden = false;
        },

        hide() {
          this.setActive(false);
          removeClass(this.$el, this.clsFixed, this.clsBelow);
          css(this.$el, { position: '', top: '', width: '' });
          this.placeholder.hidden = true;
        },

        update() {
          let {
            width,
            scroll = 0,
            overflow,
            overflowScroll = 0,
            start,
            end,
            offset,
            topOffset,
            height,
            offsetParentTop } =
          this._data;
          const active = start !== 0 || scroll > start;
          let position = 'fixed';

          if (scroll > end) {
            offset += end - offsetParentTop;
            position = 'absolute';
          }

          if (overflow) {
            offset -= overflowScroll;
          }

          css(this.$el, {
            position,
            top: offset + "px",
            width });


          this.setActive(active);
          toggleClass(this.$el, this.clsBelow, scroll > topOffset + height);
          addClass(this.$el, this.clsFixed);
        },

        setActive(active) {
          const prev = this.active;
          this.active = active;
          if (active) {
            replaceClass(this.selTarget, this.clsInactive, this.clsActive);
            prev !== active && trigger(this.$el, 'active');
          } else {
            replaceClass(this.selTarget, this.clsActive, this.clsInactive);
            prev !== active && trigger(this.$el, 'inactive');
          }
        } } };



    function parseProp(value, el, propOffset, padding) {
      if (!value) {
        return 0;
      }

      if (isNumeric(value) || isString(value) && value.match(/^-?\d/)) {
        return propOffset + toPx(value, 'height', el, true);
      } else {
        const refElement = value === true ? parent(el) : query(value, el);
        return (
          offset(refElement).bottom - (
          padding && refElement && within(el, refElement) ?
          toFloat(css(refElement, 'paddingBottom')) :
          0));

      }
    }

    function coerce(value) {
      if (value === 'true') {
        return true;
      } else if (value === 'false') {
        return false;
      }
      return value;
    }

    var Switcher = {
      mixins: [Lazyload, Swipe, Togglable],

      args: 'connect',

      props: {
        connect: String,
        toggle: String,
        itemNav: String,
        active: Number },


      data: {
        connect: '~.uk-switcher',
        toggle: '> * > :first-child',
        itemNav: false,
        active: 0,
        cls: 'uk-active',
        attrItem: 'uk-switcher-item' },


      computed: {
        connects: {
          get(_ref, $el) {let { connect } = _ref;
            return queryAll(connect, $el);
          },

          watch(connects) {
            if (this.swiping) {
              css(connects, 'touchAction', 'pan-y pinch-zoom');
            }

            const index = this.index();
            this.connects.forEach((el) => {
              children(el).forEach((child, i) => toggleClass(child, this.cls, i === index));
              this.lazyload(this.$el, children(el));
            });
          },

          immediate: true },


        toggles: {
          get(_ref2, $el) {let { toggle } = _ref2;
            return $$(toggle, $el).filter(
            (el) => !matches(el, '.uk-disabled *, .uk-disabled, [disabled]'));

          },

          watch(toggles) {
            const active = this.index();
            this.show(~active ? active : toggles[this.active] || toggles[0]);
          },

          immediate: true },


        children() {
          return children(this.$el).filter((child) =>
          this.toggles.some((toggle) => within(toggle, child)));

        },

        swipeTarget() {
          return this.connects;
        } },


      connected() {
        // check for connects
        ready(() => this.$emit());
      },

      events: [
      {
        name: 'click',

        delegate() {
          return this.toggle;
        },

        handler(e) {
          e.preventDefault();
          this.show(e.current);
        } },


      {
        name: 'click',

        el() {
          return this.connects.concat(this.itemNav ? queryAll(this.itemNav, this.$el) : []);
        },

        delegate() {
          return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
        },

        handler(e) {
          e.preventDefault();
          this.show(data(e.current, this.attrItem));
        } },


      {
        name: 'swipeRight swipeLeft',

        filter() {
          return this.swiping;
        },

        el() {
          return this.connects;
        },

        handler(_ref3) {let { type } = _ref3;
          this.show(endsWith(type, 'Left') ? 'next' : 'previous');
        } }],



      methods: {
        index() {
          return findIndex(this.children, (el) => hasClass(el, this.cls));
        },

        show(item) {
          const prev = this.index();
          const next = getIndex(item, this.toggles, prev);
          const active = getIndex(this.children[next], children(this.$el));
          children(this.$el).forEach((child, i) => {
            toggleClass(child, this.cls, active === i);
            attr(this.toggles[i], 'aria-expanded', active === i);
          });

          const animate = prev >= 0 && prev !== next;
          this.connects.forEach(async (_ref4) => {let { children } = _ref4;
            await this.toggleElement(
            toNodes(children).filter((child) => hasClass(child, this.cls)),
            false,
            animate);

            await this.toggleElement(children[active], true, animate);
          });
        } } };

    var tab = {
      mixins: [Class],

      extends: Switcher,

      props: {
        media: Boolean },


      data: {
        media: 960,
        attrItem: 'uk-tab-item' },


      connected() {
        const cls = hasClass(this.$el, 'uk-tab-left') ?
        'uk-tab-left' :
        hasClass(this.$el, 'uk-tab-right') ?
        'uk-tab-right' :
        false;

        if (cls) {
          this.$create('toggle', this.$el, { cls, mode: 'media', media: this.media });
        }
      } };

    const KEY_SPACE = 32;

    var toggle = {
      mixins: [Lazyload, Media, Togglable],

      args: 'target',

      props: {
        href: String,
        target: null,
        mode: 'list',
        queued: Boolean },


      data: {
        href: false,
        target: false,
        mode: 'click',
        queued: true },


      computed: {
        target: {
          get(_ref, $el) {let { href, target } = _ref;
            target = queryAll(target || href, $el);
            return target.length && target || [$el];
          },

          watch() {
            this.updateAria();
            this.lazyload(this.$el, this.target);
          },

          immediate: true } },



      connected() {
        if (!includes(this.mode, 'media') && !isFocusable(this.$el)) {
          attr(this.$el, 'tabindex', '0');
        }

        // check for target
        ready(() => this.$emit());
      },

      events: [
      {
        name: pointerDown$1,

        filter() {
          return includes(this.mode, 'hover');
        },

        handler(e) {
          this._preventClick = null;

          if (!isTouch(e) || this._showState) {
            return;
          }

          // Clicking a button does not give it focus on all browsers and platforms
          // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
          trigger(this.$el, 'focus');
          once(
          document,
          pointerDown$1,
          () => trigger(this.$el, 'blur'),
          true,
          (e) => !within(e.target, this.$el));


          // Prevent initial click to prevent double toggle through focus + click
          if (includes(this.mode, 'click')) {
            this._preventClick = true;
          }
        } },


      {
        name: pointerEnter + " " + pointerLeave + " focus blur",

        filter() {
          return includes(this.mode, 'hover');
        },

        handler(e) {
          if (isTouch(e)) {
            return;
          }

          const show = includes([pointerEnter, 'focus'], e.type);
          const expanded = attr(this.$el, 'aria-expanded');

          // Skip hide if still hovered or focused
          if (
          !show && (
          e.type === pointerLeave && matches(this.$el, ':focus') ||
          e.type === 'blur' && matches(this.$el, ':hover')))
          {
            return;
          }

          // Skip if state does not change e.g. hover + focus received
          if (this._showState && show && expanded !== this._showState) {
            // Ensure reset if state has changed through click
            if (!show) {
              this._showState = null;
            }
            return;
          }

          this._showState = show ? expanded : null;

          this.toggle("toggle" + (show ? 'show' : 'hide'));
        } },


      {
        name: 'keydown',

        filter() {
          return includes(this.mode, 'click') && !isTag(this.$el, 'input');
        },

        handler(e) {
          if (e.keyCode === KEY_SPACE) {
            e.preventDefault();
            this.$el.click();
          }
        } },


      {
        name: 'click',

        filter() {
          return ['click', 'hover'].some((mode) => includes(this.mode, mode));
        },

        handler(e) {
          let link;
          if (
          this._preventClick ||
          closest(e.target, 'a[href="#"], a[href=""]') ||
          (link = closest(e.target, 'a[href]')) && (
          attr(this.$el, 'aria-expanded') !== 'true' ||
          link.hash && matches(this.target, link.hash)))
          {
            e.preventDefault();
          }

          if (!this._preventClick && includes(this.mode, 'click')) {
            this.toggle();
          }
        } },


      {
        name: 'hide show',

        self: true,

        el() {
          return this.target;
        },

        handler(_ref2) {let { type } = _ref2;
          this.updateAria(type === 'show');
        } },


      {
        name: 'mediachange',

        filter() {
          return includes(this.mode, 'media');
        },

        el() {
          return this.target;
        },

        handler(e, mediaObj) {
          if (mediaObj.matches ^ this.isToggled(this.target)) {
            this.toggle();
          }
        } }],



      methods: {
        async toggle(type) {
          if (!trigger(this.target, type || 'toggle', [this])) {
            return;
          }

          if (!this.queued) {
            return this.toggleElement(this.target);
          }

          const leaving = this.target.filter((el) => hasClass(el, this.clsLeave));

          if (leaving.length) {
            for (const el of this.target) {
              const isLeaving = includes(leaving, el);
              this.toggleElement(el, isLeaving, isLeaving);
            }
            return;
          }

          const toggled = this.target.filter(this.isToggled);
          await this.toggleElement(toggled, false);
          await this.toggleElement(
          this.target.filter((el) => !includes(toggled, el)),
          true);

        },

        updateAria(toggled) {
          if (includes(this.mode, 'media')) {
            return;
          }

          attr(
          this.$el,
          'aria-expanded',
          isBoolean(toggled) ? toggled : this.isToggled(this.target));

        } } };

    var components$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Accordion: Accordion,
        Alert: alert,
        Cover: cover,
        Drop: drop,
        Dropdown: drop,
        FormCustom: formCustom,
        Grid: grid,
        HeightMatch: heightMatch,
        HeightViewport: heightViewport,
        Icon: Icon,
        Img: img,
        Leader: leader,
        Margin: Margin,
        Modal: modal,
        Nav: nav,
        Navbar: navbar,
        Offcanvas: offcanvas,
        OverflowAuto: overflowAuto,
        Responsive: responsive,
        Scroll: scroll,
        Scrollspy: scrollspy,
        ScrollspyNav: scrollspyNav,
        Sticky: sticky,
        Svg: SVG,
        Switcher: Switcher,
        Tab: tab,
        Toggle: toggle,
        Video: Video,
        Close: Close,
        Spinner: Spinner,
        NavParentIcon: NavParentIcon,
        SlidenavNext: Slidenav,
        SlidenavPrevious: Slidenav,
        SearchIcon: Search,
        Marker: IconComponent,
        NavbarParentIcon: IconComponent,
        NavbarToggleIcon: IconComponent,
        OverlayIcon: IconComponent,
        PaginationNext: IconComponent,
        PaginationPrevious: IconComponent,
        Totop: IconComponent
    });

    // register components
    each(components$1, (component, name) => UIkit.component(name, component));

    boot(UIkit);

    const units = ['days', 'hours', 'minutes', 'seconds'];

    var countdown = {
      mixins: [Class],

      props: {
        date: String,
        clsWrapper: String },


      data: {
        date: '',
        clsWrapper: '.uk-countdown-%unit%' },


      connected() {
        this.date = Date.parse(this.$props.date);
        this.start();
      },

      disconnected() {
        this.stop();
      },

      events: [
      {
        name: 'visibilitychange',

        el() {
          return document;
        },

        handler() {
          if (document.hidden) {
            this.stop();
          } else {
            this.start();
          }
        } }],



      methods: {
        start() {
          this.stop();
          this.update();
          this.timer = setInterval(this.update, 1000);
        },

        stop() {
          clearInterval(this.timer);
        },

        update() {
          const timespan = getTimeSpan(this.date);

          if (!this.date || timespan.total <= 0) {
            this.stop();

            timespan.days = timespan.hours = timespan.minutes = timespan.seconds = 0;
          }

          for (const unit of units) {
            const el = $(this.clsWrapper.replace('%unit%', unit), this.$el);

            if (!el) {
              continue;
            }

            let digits = String(Math.trunc(timespan[unit]));

            digits = digits.length < 2 ? "0" + digits : digits;

            if (el.textContent !== digits) {
              digits = digits.split('');

              if (digits.length !== el.children.length) {
                html(el, digits.map(() => '<span></span>').join(''));
              }

              digits.forEach((digit, i) => el.children[i].textContent = digit);
            }
          }
        } } };



    function getTimeSpan(date) {
      const total = date - Date.now();

      return {
        total,
        seconds: total / 1000 % 60,
        minutes: total / 1000 / 60 % 60,
        hours: total / 1000 / 60 / 60 % 24,
        days: total / 1000 / 60 / 60 / 24 };

    }

    const clsLeave = 'uk-transition-leave';
    const clsEnter = 'uk-transition-enter';

    function fade(action, target, duration, stagger) {if (stagger === void 0) {stagger = 0;}
      const index = transitionIndex(target, true);
      const propsIn = { opacity: 1 };
      const propsOut = { opacity: 0 };

      const wrapIndexFn = (fn) => () => index === transitionIndex(target) ? fn() : Promise.reject();

      const leaveFn = wrapIndexFn(() => {
        addClass(target, clsLeave);

        return Promise.all(
        getTransitionNodes(target).map(
        (child, i) =>
        new Promise((resolve) =>
        setTimeout(
        () =>
        Transition.start(child, propsOut, duration / 2, 'ease').then(
        resolve),

        i * stagger)))).



        then(() => removeClass(target, clsLeave));
      });

      const enterFn = wrapIndexFn(() => {
        const oldHeight = height(target);

        addClass(target, clsEnter);
        action();

        css(children(target), { opacity: 0 });

        // Ensure UIkit updates have propagated
        return new Promise((resolve) =>
        requestAnimationFrame(() => {
          const nodes = children(target);
          const newHeight = height(target);

          // Ensure Grid cells do not stretch when height is applied
          css(target, 'alignContent', 'flex-start');
          height(target, oldHeight);

          const transitionNodes = getTransitionNodes(target);
          css(nodes, propsOut);

          const transitions = transitionNodes.map(
          (child, i) =>
          new Promise((resolve) =>
          setTimeout(
          () =>
          Transition.start(child, propsIn, duration / 2, 'ease').then(
          resolve),

          i * stagger)));




          if (oldHeight !== newHeight) {
            transitions.push(
            Transition.start(
            target,
            { height: newHeight },
            duration / 2 + transitionNodes.length * stagger,
            'ease'));


          }

          Promise.all(transitions).then(() => {
            removeClass(target, clsEnter);
            if (index === transitionIndex(target)) {
              css(target, { height: '', alignContent: '' });
              css(nodes, { opacity: '' });
              delete target.dataset.transition;
            }
            resolve();
          });
        }));

      });

      return hasClass(target, clsLeave) ?
      waitTransitionend(target).then(enterFn) :
      hasClass(target, clsEnter) ?
      waitTransitionend(target).then(leaveFn).then(enterFn) :
      leaveFn().then(enterFn);
    }

    function transitionIndex(target, next) {
      if (next) {
        target.dataset.transition = 1 + transitionIndex(target);
      }

      return toNumber(target.dataset.transition) || 0;
    }

    function waitTransitionend(target) {
      return Promise.all(
      children(target).
      filter(Transition.inProgress).
      map(
      (el) =>
      new Promise((resolve) => once(el, 'transitionend transitioncanceled', resolve))));


    }

    function getTransitionNodes(target) {
      return getRows(children(target)).reduce(
      (nodes, row) =>
      nodes.concat(
      sortBy$1(
      row.filter((el) => isInView(el)),
      'offsetLeft')),


      []);

    }

    function slide (action, target, duration) {
      return new Promise((resolve) =>
      requestAnimationFrame(() => {
        let nodes = children(target);

        // Get current state
        const currentProps = nodes.map((el) => getProps(el, true));
        const targetProps = css(target, ['height', 'padding']);

        // Cancel previous animations
        Transition.cancel(target);
        nodes.forEach(Transition.cancel);
        reset(target);

        // Adding, sorting, removing nodes
        action();

        // Find new nodes
        nodes = nodes.concat(children(target).filter((el) => !includes(nodes, el)));

        // Wait for update to propagate
        Promise.resolve().then(() => {
          // Force update
          fastdom.flush();

          // Get new state
          const targetPropsTo = css(target, ['height', 'padding']);
          const [propsTo, propsFrom] = getTransitionProps(target, nodes, currentProps);

          // Reset to previous state
          nodes.forEach((el, i) => propsFrom[i] && css(el, propsFrom[i]));
          css(target, { display: 'block', ...targetProps });

          // Start transitions on next frame
          requestAnimationFrame(() => {
            const transitions = nodes.
            map(
            (el, i) =>
            parent(el) === target &&
            Transition.start(el, propsTo[i], duration, 'ease')).

            concat(Transition.start(target, targetPropsTo, duration, 'ease'));

            Promise.all(transitions).
            then(() => {
              nodes.forEach(
              (el, i) =>
              parent(el) === target &&
              css(el, 'display', propsTo[i].opacity === 0 ? 'none' : ''));

              reset(target);
            }, noop).
            then(resolve);
          });
        });
      }));

    }

    function getProps(el, opacity) {
      const zIndex = css(el, 'zIndex');

      return isVisible(el) ?
      {
        display: '',
        opacity: opacity ? css(el, 'opacity') : '0',
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: zIndex === 'auto' ? index(el) : zIndex,
        ...getPositionWithMargin(el) } :

      false;
    }

    function getTransitionProps(target, nodes, currentProps) {
      const propsTo = nodes.map((el, i) =>
      parent(el) && i in currentProps ?
      currentProps[i] ?
      isVisible(el) ?
      getPositionWithMargin(el) :
      { opacity: 0 } :
      { opacity: isVisible(el) ? 1 : 0 } :
      false);


      const propsFrom = propsTo.map((props, i) => {
        const from = parent(nodes[i]) === target && (currentProps[i] || getProps(nodes[i]));

        if (!from) {
          return false;
        }

        if (!props) {
          delete from.opacity;
        } else if (!('opacity' in props)) {
          const { opacity } = from;

          if (opacity % 1) {
            props.opacity = 1;
          } else {
            delete from.opacity;
          }
        }

        return from;
      });

      return [propsTo, propsFrom];
    }

    function reset(el) {
      css(el.children, {
        height: '',
        left: '',
        opacity: '',
        pointerEvents: '',
        position: '',
        top: '',
        marginTop: '',
        marginLeft: '',
        transform: '',
        width: '',
        zIndex: '' });

      css(el, { height: '', display: '', padding: '' });
    }

    function getPositionWithMargin(el) {
      const { height, width } = offset(el);
      const { top, left } = position(el);
      const { marginLeft, marginTop } = css(el, ['marginTop', 'marginLeft']);

      return { top, left, height, width, marginLeft, marginTop, transform: '' };
    }

    var Animate = {
      props: {
        duration: Number,
        animation: Boolean },


      data: {
        duration: 150,
        animation: 'slide' },


      methods: {
        animate(action, target) {if (target === void 0) {target = this.$el;}
          const name = this.animation;
          const animationFn =
          name === 'fade' ?
          fade :
          name === 'delayed-fade' ?
          function () {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return fade(...args, 40);} :
          name ?
          slide :
          () => {
            action();
            return Promise.resolve();
          };

          return animationFn(action, target, this.duration).then(
          () => this.$update(target, 'resize'),
          noop);

        } } };

    var filter = {
      mixins: [Animate],

      args: 'target',

      props: {
        target: Boolean,
        selActive: Boolean },


      data: {
        target: null,
        selActive: false,
        attrItem: 'uk-filter-control',
        cls: 'uk-active',
        duration: 250 },


      computed: {
        toggles: {
          get(_ref, $el) {let { attrItem } = _ref;
            return $$("[" + attrItem + "],[data-" + attrItem + "]", $el);
          },

          watch() {
            this.updateState();

            if (this.selActive !== false) {
              const actives = $$(this.selActive, this.$el);
              this.toggles.forEach((el) => toggleClass(el, this.cls, includes(actives, el)));
            }
          },

          immediate: true },


        children: {
          get(_ref2, $el) {let { target } = _ref2;
            return $$(target + " > *", $el);
          },

          watch(list, old) {
            if (old && !isEqualList(list, old)) {
              this.updateState();
            }
          },

          immediate: true } },



      events: [
      {
        name: 'click',

        delegate() {
          return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
        },

        handler(e) {
          e.preventDefault();
          this.apply(e.current);
        } }],



      methods: {
        apply(el) {
          const prevState = this.getState();
          const newState = mergeState(el, this.attrItem, this.getState());

          if (!isEqualState(prevState, newState)) {
            this.setState(newState);
          }
        },

        getState() {
          return this.toggles.
          filter((item) => hasClass(item, this.cls)).
          reduce((state, el) => mergeState(el, this.attrItem, state), {
            filter: { '': '' },
            sort: [] });

        },

        async setState(state, animate) {if (animate === void 0) {animate = true;}
          state = { filter: { '': '' }, sort: [], ...state };

          trigger(this.$el, 'beforeFilter', [this, state]);

          this.toggles.forEach((el) =>
          toggleClass(el, this.cls, !!matchFilter(el, this.attrItem, state)));


          await Promise.all(
          $$(this.target, this.$el).map((target) => {
            const filterFn = () => {
              applyState(state, target, children(target));
              this.$update(this.$el);
            };
            return animate ? this.animate(filterFn, target) : filterFn();
          }));


          trigger(this.$el, 'afterFilter', [this]);
        },

        updateState() {
          fastdom.write(() => this.setState(this.getState(), false));
        } } };



    function getFilter(el, attr) {
      return parseOptions(data(el, attr), ['filter']);
    }

    function isEqualState(stateA, stateB) {
      return ['filter', 'sort'].every((prop) => isEqual(stateA[prop], stateB[prop]));
    }

    function applyState(state, target, children) {
      const selector = getSelector(state);

      children.forEach((el) => css(el, 'display', selector && !matches(el, selector) ? 'none' : ''));

      const [sort, order] = state.sort;

      if (sort) {
        const sorted = sortItems(children, sort, order);
        if (!isEqual(sorted, children)) {
          append(target, sorted);
        }
      }
    }

    function mergeState(el, attr, state) {
      const filterBy = getFilter(el, attr);
      const { filter, group, sort, order = 'asc' } = filterBy;

      if (filter || isUndefined(sort)) {
        if (group) {
          if (filter) {
            delete state.filter[''];
            state.filter[group] = filter;
          } else {
            delete state.filter[group];

            if (isEmpty(state.filter) || '' in state.filter) {
              state.filter = { '': filter || '' };
            }
          }
        } else {
          state.filter = { '': filter || '' };
        }
      }

      if (!isUndefined(sort)) {
        state.sort = [sort, order];
      }

      return state;
    }

    function matchFilter(
    el,
    attr, _ref3)

    {let { filter: stateFilter = { '': '' }, sort: [stateSort, stateOrder] } = _ref3;
      const { filter = '', group = '', sort, order = 'asc' } = getFilter(el, attr);

      return isUndefined(sort) ?
      group in stateFilter && filter === stateFilter[group] ||
      !filter && group && !(group in stateFilter) && !stateFilter[''] :
      stateSort === sort && stateOrder === order;
    }

    function isEqualList(listA, listB) {
      return listA.length === listB.length && listA.every((el) => listB.includes(el));
    }

    function getSelector(_ref4) {let { filter } = _ref4;
      let selector = '';
      each(filter, (value) => selector += value || '');
      return selector;
    }

    function sortItems(nodes, sort, order) {
      return [...nodes].sort(
      (a, b) =>
      data(a, sort).localeCompare(data(b, sort), undefined, { numeric: true }) * (
      order === 'asc' || -1));

    }

    var Animations$2 = {
      slide: {
        show(dir) {
          return [{ transform: translate(dir * -100) }, { transform: translate() }];
        },

        percent(current) {
          return translated(current);
        },

        translate(percent, dir) {
          return [
          { transform: translate(dir * -100 * percent) },
          { transform: translate(dir * 100 * (1 - percent)) }];

        } } };



    function translated(el) {
      return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
    }

    function translate(value, unit) {if (value === void 0) {value = 0;}if (unit === void 0) {unit = '%';}
      value += value ? unit : '';
      return "translate3d(" + value + ", 0, 0)";
    }

    function scale3d(value) {
      return "scale3d(" + value + ", " + value + ", 1)";
    }

    var Animations$1 = {
      ...Animations$2,
      fade: {
        show() {
          return [{ opacity: 0 }, { opacity: 1 }];
        },

        percent(current) {
          return 1 - css(current, 'opacity');
        },

        translate(percent) {
          return [{ opacity: 1 - percent }, { opacity: percent }];
        } },


      scale: {
        show() {
          return [
          { opacity: 0, transform: scale3d(1 - 0.2) },
          { opacity: 1, transform: scale3d(1) }];

        },

        percent(current) {
          return 1 - css(current, 'opacity');
        },

        translate(percent) {
          return [
          { opacity: 1 - percent, transform: scale3d(1 - 0.2 * percent) },
          { opacity: percent, transform: scale3d(1 - 0.2 + 0.2 * percent) }];

        } } };

    function Transitioner$1(prev, next, dir, _ref) {let { animation, easing } = _ref;
      const { percent, translate, show = noop } = animation;
      const props = show(dir);
      const deferred = new Deferred();

      return {
        dir,

        show(duration, percent, linear) {if (percent === void 0) {percent = 0;}
          const timing = linear ? 'linear' : easing;
          duration -= Math.round(duration * clamp(percent, -1, 1));

          this.translate(percent);

          triggerUpdate$1(next, 'itemin', { percent, duration, timing, dir });
          triggerUpdate$1(prev, 'itemout', { percent: 1 - percent, duration, timing, dir });

          Promise.all([
          Transition.start(next, props[1], duration, timing),
          Transition.start(prev, props[0], duration, timing)]).
          then(() => {
            this.reset();
            deferred.resolve();
          }, noop);

          return deferred.promise;
        },

        cancel() {
          Transition.cancel([next, prev]);
        },

        reset() {
          for (const prop in props[0]) {
            css([next, prev], prop, '');
          }
        },

        forward(duration, percent) {if (percent === void 0) {percent = this.percent();}
          Transition.cancel([next, prev]);
          return this.show(duration, percent, true);
        },

        translate(percent) {
          this.reset();

          const props = translate(percent, dir);
          css(next, props[1]);
          css(prev, props[0]);
          triggerUpdate$1(next, 'itemtranslatein', { percent, dir });
          triggerUpdate$1(prev, 'itemtranslateout', { percent: 1 - percent, dir });
        },

        percent() {
          return percent(prev || next, next, dir);
        },

        getDistance() {
          return prev == null ? void 0 : prev.offsetWidth;
        } };

    }

    function triggerUpdate$1(el, type, data) {
      trigger(el, createEvent(type, false, false, data));
    }

    var SliderAutoplay = {
      props: {
        autoplay: Boolean,
        autoplayInterval: Number,
        pauseOnHover: Boolean },


      data: {
        autoplay: false,
        autoplayInterval: 7000,
        pauseOnHover: true },


      connected() {
        this.autoplay && this.startAutoplay();
      },

      disconnected() {
        this.stopAutoplay();
      },

      update() {
        attr(this.slides, 'tabindex', '-1');
      },

      events: [
      {
        name: 'visibilitychange',

        el() {
          return document;
        },

        filter() {
          return this.autoplay;
        },

        handler() {
          if (document.hidden) {
            this.stopAutoplay();
          } else {
            this.startAutoplay();
          }
        } }],



      methods: {
        startAutoplay() {
          this.stopAutoplay();

          this.interval = setInterval(
          () =>
          (!this.draggable || !$(':focus', this.$el)) && (
          !this.pauseOnHover || !matches(this.$el, ':hover')) &&
          !this.stack.length &&
          this.show('next'),
          this.autoplayInterval);

        },

        stopAutoplay() {
          this.interval && clearInterval(this.interval);
        } } };

    const pointerOptions = { passive: false, capture: true };
    const pointerDown = 'touchstart mousedown';
    const pointerMove = 'touchmove mousemove';
    const pointerUp = 'touchend touchcancel mouseup click input';

    var SliderDrag = {
      props: {
        draggable: Boolean },


      data: {
        draggable: true,
        threshold: 10 },


      created() {
        for (const key of ['start', 'move', 'end']) {
          const fn = this[key];
          this[key] = (e) => {
            const pos = getEventPos(e).x * (isRtl ? -1 : 1);

            this.prevPos = pos === this.pos ? this.prevPos : this.pos;
            this.pos = pos;

            fn(e);
          };
        }
      },

      events: [
      {
        name: pointerDown,

        delegate() {
          return this.selSlides;
        },

        handler(e) {
          if (
          !this.draggable ||
          !isTouch(e) && hasTextNodesOnly(e.target) ||
          closest(e.target, selInput) ||
          e.button > 0 ||
          this.length < 2)
          {
            return;
          }

          this.start(e);
        } },


      {
        name: 'dragstart',

        handler(e) {
          e.preventDefault();
        } },


      {
        // iOS workaround for slider stopping if swiping fast
        name: pointerMove + " " + pointerUp,
        el() {
          return this.list;
        },
        handler: noop,
        ...pointerOptions }],



      methods: {
        start() {
          this.drag = this.pos;

          if (this._transitioner) {
            this.percent = this._transitioner.percent();
            this.drag += this._transitioner.getDistance() * this.percent * this.dir;

            this._transitioner.cancel();
            this._transitioner.translate(this.percent);

            this.dragging = true;

            this.stack = [];
          } else {
            this.prevIndex = this.index;
          }

          on(document, pointerMove, this.move, pointerOptions);

          // 'input' event is triggered by video controls
          on(document, pointerUp, this.end, pointerOptions);

          css(this.list, 'userSelect', 'none');
        },

        move(e) {
          const distance = this.pos - this.drag;

          if (
          distance === 0 ||
          this.prevPos === this.pos ||
          !this.dragging && Math.abs(distance) < this.threshold)
          {
            return;
          }

          // prevent click event
          css(this.list, 'pointerEvents', 'none');

          e.cancelable && e.preventDefault();

          this.dragging = true;
          this.dir = distance < 0 ? 1 : -1;

          const { slides } = this;
          let { prevIndex } = this;
          let dis = Math.abs(distance);
          let nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
          let width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

          while (nextIndex !== prevIndex && dis > width) {
            this.drag -= width * this.dir;

            prevIndex = nextIndex;
            dis -= width;
            nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
            width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;
          }

          this.percent = dis / width;

          const prev = slides[prevIndex];
          const next = slides[nextIndex];
          const changed = this.index !== nextIndex;
          const edge = prevIndex === nextIndex;

          let itemShown;

          [this.index, this.prevIndex].
          filter((i) => !includes([nextIndex, prevIndex], i)).
          forEach((i) => {
            trigger(slides[i], 'itemhidden', [this]);

            if (edge) {
              itemShown = true;
              this.prevIndex = prevIndex;
            }
          });

          if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
            trigger(slides[this.index], 'itemshown', [this]);
          }

          if (changed) {
            this.prevIndex = prevIndex;
            this.index = nextIndex;

            !edge && trigger(prev, 'beforeitemhide', [this]);
            trigger(next, 'beforeitemshow', [this]);
          }

          this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

          if (changed) {
            !edge && trigger(prev, 'itemhide', [this]);
            trigger(next, 'itemshow', [this]);
          }
        },

        end() {
          off(document, pointerMove, this.move, pointerOptions);
          off(document, pointerUp, this.end, pointerOptions);

          if (this.dragging) {
            this.dragging = null;

            if (this.index === this.prevIndex) {
              this.percent = 1 - this.percent;
              this.dir *= -1;
              this._show(false, this.index, true);
              this._transitioner = null;
            } else {
              const dirChange =
              (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 ===
              this.prevPos > this.pos;
              this.index = dirChange ? this.index : this.prevIndex;

              if (dirChange) {
                this.percent = 1 - this.percent;
              }

              this.show(
              this.dir > 0 && !dirChange || this.dir < 0 && dirChange ?
              'next' :
              'previous',
              true);

            }
          }

          css(this.list, { userSelect: '', pointerEvents: '' });

          this.drag = this.percent = null;
        } } };



    function hasTextNodesOnly(el) {
      return !el.children.length && el.childNodes.length;
    }

    var SliderNav = {
      data: {
        selNav: false },


      computed: {
        nav(_ref, $el) {let { selNav } = _ref;
          return $(selNav, $el);
        },

        selNavItem(_ref2) {let { attrItem } = _ref2;
          return "[" + attrItem + "],[data-" + attrItem + "]";
        },

        navItems(_, $el) {
          return $$(this.selNavItem, $el);
        } },


      update: {
        write() {
          if (this.nav && this.length !== this.nav.children.length) {
            html(
            this.nav,
            this.slides.
            map((_, i) => "<li " + this.attrItem + "=\"" + i + "\"><a href></a></li>").
            join(''));

          }

          this.navItems.concat(this.nav).forEach((el) => el && (el.hidden = !this.maxIndex));

          this.updateNav();
        },

        events: ['resize'] },


      events: [
      {
        name: 'click',

        delegate() {
          return this.selNavItem;
        },

        handler(e) {
          e.preventDefault();
          this.show(data(e.current, this.attrItem));
        } },


      {
        name: 'itemshow',
        handler: 'updateNav' }],



      methods: {
        updateNav() {
          const i = this.getValidIndex();
          for (const el of this.navItems) {
            const cmd = data(el, this.attrItem);

            toggleClass(el, this.clsActive, toNumber(cmd) === i);
            toggleClass(
            el,
            'uk-invisible',
            this.finite && (
            cmd === 'previous' && i === 0 || cmd === 'next' && i >= this.maxIndex));

          }
        } } };

    var Slider = {
      mixins: [SliderAutoplay, SliderDrag, SliderNav, Resize],

      props: {
        clsActivated: Boolean,
        easing: String,
        index: Number,
        finite: Boolean,
        velocity: Number,
        selSlides: String },


      data: () => ({
        easing: 'ease',
        finite: false,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: 'uk-active',
        clsActivated: false,
        Transitioner: false,
        transitionOptions: {} }),


      connected() {
        this.prevIndex = -1;
        this.index = this.getValidIndex(this.$props.index);
        this.stack = [];
      },

      disconnected() {
        removeClass(this.slides, this.clsActive);
      },

      computed: {
        duration(_ref, $el) {let { velocity } = _ref;
          return speedUp($el.offsetWidth / velocity);
        },

        list(_ref2, $el) {let { selList } = _ref2;
          return $(selList, $el);
        },

        maxIndex() {
          return this.length - 1;
        },

        selSlides(_ref3) {let { selList, selSlides } = _ref3;
          return selList + " " + (selSlides || '> *');
        },

        slides: {
          get() {
            return $$(this.selSlides, this.$el);
          },

          watch() {
            this.$reset();
          } },


        length() {
          return this.slides.length;
        } },


      methods: {
        show(index, force) {if (force === void 0) {force = false;}
          if (this.dragging || !this.length) {
            return;
          }

          const { stack } = this;
          const queueIndex = force ? 0 : stack.length;
          const reset = () => {
            stack.splice(queueIndex, 1);

            if (stack.length) {
              this.show(stack.shift(), true);
            }
          };

          stack[force ? 'unshift' : 'push'](index);

          if (!force && stack.length > 1) {
            if (stack.length === 2) {
              this._transitioner.forward(Math.min(this.duration, 200));
            }

            return;
          }

          const prevIndex = this.getIndex(this.index);
          const prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
          const nextIndex = this.getIndex(index, this.index);
          const next = this.slides[nextIndex];

          if (prev === next) {
            reset();
            return;
          }

          this.dir = getDirection(index, prevIndex);
          this.prevIndex = prevIndex;
          this.index = nextIndex;

          if (
          prev && !trigger(prev, 'beforeitemhide', [this]) ||
          !trigger(next, 'beforeitemshow', [this, prev]))
          {
            this.index = this.prevIndex;
            reset();
            return;
          }

          const promise = this._show(prev, next, force).then(() => {
            prev && trigger(prev, 'itemhidden', [this]);
            trigger(next, 'itemshown', [this]);

            return new Promise((resolve) => {
              fastdom.write(() => {
                stack.shift();
                if (stack.length) {
                  this.show(stack.shift(), true);
                } else {
                  this._transitioner = null;
                }
                resolve();
              });
            });
          });

          prev && trigger(prev, 'itemhide', [this]);
          trigger(next, 'itemshow', [this]);

          return promise;
        },

        getIndex(index, prev) {if (index === void 0) {index = this.index;}if (prev === void 0) {prev = this.index;}
          return clamp(getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
        },

        getValidIndex(index, prevIndex) {if (index === void 0) {index = this.index;}if (prevIndex === void 0) {prevIndex = this.prevIndex;}
          return this.getIndex(index, prevIndex);
        },

        _show(prev, next, force) {
          this._transitioner = this._getTransitioner(prev, next, this.dir, {
            easing: force ?
            next.offsetWidth < 600 ?
            'cubic-bezier(0.25, 0.46, 0.45, 0.94)' /* easeOutQuad */ :
            'cubic-bezier(0.165, 0.84, 0.44, 1)' /* easeOutQuart */ :
            this.easing,
            ...this.transitionOptions });


          if (!force && !prev) {
            this._translate(1);
            return Promise.resolve();
          }

          const { length } = this.stack;
          return this._transitioner[length > 1 ? 'forward' : 'show'](
          length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration,
          this.percent);

        },

        _getDistance(prev, next) {
          return this._getTransitioner(prev, prev !== next && next).getDistance();
        },

        _translate(percent, prev, next) {if (prev === void 0) {prev = this.prevIndex;}if (next === void 0) {next = this.index;}
          const transitioner = this._getTransitioner(prev !== next ? prev : false, next);
          transitioner.translate(percent);
          return transitioner;
        },

        _getTransitioner(
        prev,
        next,
        dir,
        options)
        {if (prev === void 0) {prev = this.prevIndex;}if (next === void 0) {next = this.index;}if (dir === void 0) {dir = this.dir || 1;}if (options === void 0) {options = this.transitionOptions;}
          return new this.Transitioner(
          isNumber(prev) ? this.slides[prev] : prev,
          isNumber(next) ? this.slides[next] : next,
          dir * (isRtl ? -1 : 1),
          options);

        } } };



    function getDirection(index, prevIndex) {
      return index === 'next' ? 1 : index === 'previous' ? -1 : index < prevIndex ? -1 : 1;
    }

    function speedUp(x) {
      return 0.5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
    }

    var Slideshow = {
      mixins: [Slider],

      props: {
        animation: String },


      data: {
        animation: 'slide',
        clsActivated: 'uk-transition-active',
        Animations: Animations$2,
        Transitioner: Transitioner$1 },


      computed: {
        animation(_ref) {let { animation, Animations } = _ref;
          return { ...(Animations[animation] || Animations.slide), name: animation };
        },

        transitionOptions() {
          return { animation: this.animation };
        } },


      events: {
        beforeitemshow(_ref2) {let { target } = _ref2;
          addClass(target, this.clsActive);
        },

        itemshown(_ref3) {let { target } = _ref3;
          addClass(target, this.clsActivated);
        },

        itemhidden(_ref4) {let { target } = _ref4;
          removeClass(target, this.clsActive, this.clsActivated);
        } } };

    var LightboxPanel = {
      mixins: [Container, Modal, Togglable, Slideshow],

      functional: true,

      props: {
        delayControls: Number,
        preload: Number,
        videoAutoplay: Boolean,
        template: String },


      data: () => ({
        preload: 1,
        videoAutoplay: false,
        delayControls: 3000,
        items: [],
        cls: 'uk-open',
        clsPage: 'uk-lightbox-page',
        selList: '.uk-lightbox-items',
        attrItem: 'uk-lightbox-item',
        selClose: '.uk-close-large',
        selCaption: '.uk-lightbox-caption',
        pauseOnHover: false,
        velocity: 2,
        Animations: Animations$1,
        template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>" }),










      created() {
        const $el = $(this.template);
        const list = $(this.selList, $el);
        this.items.forEach(() => append(list, '<li>'));

        this.$mount(append(this.container, $el));
      },

      computed: {
        caption(_ref, $el) {let { selCaption } = _ref;
          return $(selCaption, $el);
        } },


      events: [
      {
        name: pointerMove$1 + " " + pointerDown$1 + " keydown",

        handler: 'showControls' },


      {
        name: 'click',

        self: true,

        delegate() {
          return this.selSlides;
        },

        handler(e) {
          if (e.defaultPrevented) {
            return;
          }

          this.hide();
        } },


      {
        name: 'shown',

        self: true,

        handler() {
          this.showControls();
        } },


      {
        name: 'hide',

        self: true,

        handler() {
          this.hideControls();

          removeClass(this.slides, this.clsActive);
          Transition.stop(this.slides);
        } },


      {
        name: 'hidden',

        self: true,

        handler() {
          this.$destroy(true);
        } },


      {
        name: 'keyup',

        el() {
          return document;
        },

        handler(e) {
          if (!this.isToggled(this.$el) || !this.draggable) {
            return;
          }

          switch (e.keyCode) {
            case 37:
              this.show('previous');
              break;
            case 39:
              this.show('next');
              break;}

        } },


      {
        name: 'beforeitemshow',

        handler(e) {
          if (this.isToggled()) {
            return;
          }

          this.draggable = false;

          e.preventDefault();

          this.toggleElement(this.$el, true, false);

          this.animation = Animations$1['scale'];
          removeClass(e.target, this.clsActive);
          this.stack.splice(1, 0, this.index);
        } },


      {
        name: 'itemshow',

        handler() {
          html(this.caption, this.getItem().caption || '');

          for (let j = -this.preload; j <= this.preload; j++) {
            this.loadItem(this.index + j);
          }
        } },


      {
        name: 'itemshown',

        handler() {
          this.draggable = this.$props.draggable;
        } },


      {
        name: 'itemload',

        async handler(_, item) {
          const { source: src, type, alt = '', poster, attrs = {} } = item;

          this.setItem(item, '<span uk-spinner></span>');

          if (!src) {
            return;
          }

          let matches;
          const iframeAttrs = {
            frameborder: '0',
            allowfullscreen: '',
            style: 'max-width: 100%; box-sizing: border-box;',
            'uk-responsive': '',
            'uk-video': "" + this.videoAutoplay };


          // Image
          if (
          type === 'image' ||
          src.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i))
          {
            try {
              const { width, height } = await getImage(src, attrs.srcset, attrs.size);
              this.setItem(item, createEl('img', { src, width, height, alt, ...attrs }));
            } catch (e) {
              this.setError(item);
            }

            // Video
          } else if (type === 'video' || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {
            const video = createEl('video', {
              src,
              poster,
              controls: '',
              playsinline: '',
              'uk-video': "" + this.videoAutoplay,
              ...attrs });


            on(video, 'loadedmetadata', () => {
              attr(video, { width: video.videoWidth, height: video.videoHeight });
              this.setItem(item, video);
            });
            on(video, 'error', () => this.setError(item));

            // Iframe
          } else if (type === 'iframe' || src.match(/\.(html|php)($|\?)/i)) {
            this.setItem(
            item,
            createEl('iframe', {
              src,
              frameborder: '0',
              allowfullscreen: '',
              class: 'uk-lightbox-iframe',
              ...attrs }));



            // YouTube
          } else if (
          matches = src.match(
          /\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))

          {
            this.setItem(
            item,
            createEl('iframe', {
              src: "https://www.youtube" + (matches[1] || '') + ".com/embed/" + matches[2] + (
              matches[3] ? "?" + matches[3] : ''),

              width: 1920,
              height: 1080,
              ...iframeAttrs,
              ...attrs }));



            // Vimeo
          } else if (matches = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) {
            try {
              const { height, width } = await (
              await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" +
              encodeURI(
              src),

              {
                credentials: 'omit' })).


              json();

              this.setItem(
              item,
              createEl('iframe', {
                src: "https://player.vimeo.com/video/" + matches[1] + (
                matches[2] ? "?" + matches[2] : ''),

                width,
                height,
                ...iframeAttrs,
                ...attrs }));


            } catch (e) {
              this.setError(item);
            }
          }
        } }],



      methods: {
        loadItem(index) {if (index === void 0) {index = this.index;}
          const item = this.getItem(index);

          if (!this.getSlide(item).childElementCount) {
            trigger(this.$el, 'itemload', [item]);
          }
        },

        getItem(index) {if (index === void 0) {index = this.index;}
          return this.items[getIndex(index, this.slides)];
        },

        setItem(item, content) {
          trigger(this.$el, 'itemloaded', [this, html(this.getSlide(item), content)]);
        },

        getSlide(item) {
          return this.slides[this.items.indexOf(item)];
        },

        setError(item) {
          this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },

        showControls() {
          clearTimeout(this.controlsTimer);
          this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

          addClass(this.$el, 'uk-active', 'uk-transition-active');
        },

        hideControls() {
          removeClass(this.$el, 'uk-active', 'uk-transition-active');
        } } };



    function createEl(tag, attrs) {
      const el = fragment("<" + tag + ">");
      attr(el, attrs);
      return el;
    }

    var lightbox = {
      install: install$1,

      props: { toggle: String },

      data: { toggle: 'a' },

      computed: {
        toggles: {
          get(_ref, $el) {let { toggle } = _ref;
            return $$(toggle, $el);
          },

          watch() {
            this.hide();
          } } },



      disconnected() {
        this.hide();
      },

      events: [
      {
        name: 'click',

        delegate() {
          return this.toggle + ":not(.uk-disabled)";
        },

        handler(e) {
          e.preventDefault();
          this.show(e.current);
        } }],



      methods: {
        show(index) {
          const items = uniqueBy(this.toggles.map(toItem), 'source');

          if (isElement(index)) {
            const { source } = toItem(index);
            index = findIndex(items, (_ref2) => {let { source: src } = _ref2;return source === src;});
          }

          this.panel = this.panel || this.$create('lightboxPanel', { ...this.$props, items });

          on(this.panel.$el, 'hidden', () => this.panel = false);

          return this.panel.show(index);
        },

        hide() {var _this$panel;
          return (_this$panel = this.panel) == null ? void 0 : _this$panel.hide();
        } } };



    function install$1(UIkit, Lightbox) {
      if (!UIkit.lightboxPanel) {
        UIkit.component('lightboxPanel', LightboxPanel);
      }

      assign(Lightbox.props, UIkit.component('lightboxPanel').options.props);
    }

    function toItem(el) {
      const item = {};

      for (const attr of ['href', 'caption', 'type', 'poster', 'alt', 'attrs']) {
        item[attr === 'href' ? 'source' : attr] = data(el, attr);
      }

      item.attrs = parseOptions(item.attrs);

      return item;
    }

    var notification = {
      mixins: [Container],

      functional: true,

      args: ['message', 'status'],

      data: {
        message: '',
        status: '',
        timeout: 5000,
        group: null,
        pos: 'top-center',
        clsContainer: 'uk-notification',
        clsClose: 'uk-notification-close',
        clsMsg: 'uk-notification-message' },


      install,

      computed: {
        marginProp(_ref) {let { pos } = _ref;
          return "margin" + (startsWith(pos, 'top') ? 'Top' : 'Bottom');
        },

        startProps() {
          return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
        } },


      created() {
        const container =
        $("." + this.clsContainer + "-" + this.pos, this.container) ||
        append(
        this.container, "<div class=\"" +
        this.clsContainer + " " + this.clsContainer + "-" + this.pos + "\" style=\"display: block\"></div>");


        this.$mount(
        append(
        container, "<div class=\"" +
        this.clsMsg + (
        this.status ? " " + this.clsMsg + "-" + this.status : '') + "\" role=\"alert\"> <a href class=\"" +

        this.clsClose + "\" data-uk-close></a> <div>" +
        this.message + "</div> </div>"));



      },

      async connected() {
        const margin = toFloat(css(this.$el, this.marginProp));
        await Transition.start(css(this.$el, this.startProps), {
          opacity: 1,
          [this.marginProp]: margin });


        if (this.timeout) {
          this.timer = setTimeout(this.close, this.timeout);
        }
      },

      events: {
        click(e) {
          if (closest(e.target, 'a[href="#"],a[href=""]')) {
            e.preventDefault();
          }
          this.close();
        },

        [pointerEnter]() {
          if (this.timer) {
            clearTimeout(this.timer);
          }
        },

        [pointerLeave]() {
          if (this.timeout) {
            this.timer = setTimeout(this.close, this.timeout);
          }
        } },


      methods: {
        async close(immediate) {
          const removeFn = (el) => {
            const container = parent(el);

            trigger(el, 'close', [this]);
            remove$1(el);

            if (!(container != null && container.hasChildNodes())) {
              remove$1(container);
            }
          };

          if (this.timer) {
            clearTimeout(this.timer);
          }

          if (!immediate) {
            await Transition.start(this.$el, this.startProps);
          }

          removeFn(this.$el);
        } } };



    function install(UIkit) {
      UIkit.notification.closeAll = function (group, immediate) {
        apply(document.body, (el) => {
          const notification = UIkit.getComponent(el, 'notification');
          if (notification && (!group || group === notification.group)) {
            notification.close(immediate);
          }
        });
      };
    }

    const props = {
      x: transformFn,
      y: transformFn,
      rotate: transformFn,
      scale: transformFn,
      color: colorFn,
      backgroundColor: colorFn,
      borderColor: colorFn,
      blur: filterFn,
      hue: filterFn,
      fopacity: filterFn,
      grayscale: filterFn,
      invert: filterFn,
      saturate: filterFn,
      sepia: filterFn,
      opacity: cssPropFn,
      stroke: strokeFn,
      bgx: backgroundFn,
      bgy: backgroundFn };


    const { keys } = Object;

    var Parallax = {
      mixins: [Media],

      props: fillObject(keys(props), 'list'),

      data: fillObject(keys(props), undefined),

      computed: {
        props(properties, $el) {
          const stops = {};
          for (const prop in properties) {
            if (prop in props && !isUndefined(properties[prop])) {
              stops[prop] = properties[prop].slice();
            }
          }
          const result = {};
          for (const prop in stops) {
            result[prop] = props[prop](prop, $el, stops[prop], stops);
          }
          return result;
        } },


      events: {
        load() {
          this.$emit();
        } },


      methods: {
        reset() {
          for (const prop in this.getCss(0)) {
            css(this.$el, prop, '');
          }
        },

        getCss(percent) {
          const css = { transform: '', filter: '' };
          for (const prop in this.props) {
            this.props[prop](css, percent);
          }
          return css;
        } } };



    function transformFn(prop, el, stops) {
      let unit = getUnit(stops) || { x: 'px', y: 'px', rotate: 'deg' }[prop] || '';
      let transformFn;

      if (prop === 'x' || prop === 'y') {
        prop = "translate" + ucfirst(prop);
        transformFn = (stop) => toFloat(toFloat(stop).toFixed(unit === 'px' ? 0 : 6));
      } else if (prop === 'scale') {
        unit = '';
        transformFn = (stop) =>
        getUnit([stop]) ? toPx(stop, 'width', el, true) / el.offsetWidth : stop;
      }

      if (stops.length === 1) {
        stops.unshift(prop === 'scale' ? 1 : 0);
      }

      stops = parseStops(stops, transformFn);

      return (css, percent) => {
        css.transform += " " + prop + "(" + getValue(stops, percent) + unit + ")";
      };
    }

    function colorFn(prop, el, stops) {
      if (stops.length === 1) {
        stops.unshift(getCssValue(el, prop, ''));
      }

      stops = parseStops(stops, (stop) => parseColor(el, stop));

      return (css, percent) => {
        const [start, end, p] = getStop(stops, percent);
        const value = start.
        map((value, i) => {
          value += p * (end[i] - value);
          return i === 3 ? toFloat(value) : parseInt(value, 10);
        }).
        join(',');
        css[prop] = "rgba(" + value + ")";
      };
    }

    function parseColor(el, color) {
      return getCssValue(el, 'color', color).
      split(/[(),]/g).
      slice(1, -1).
      concat(1).
      slice(0, 4).
      map(toFloat);
    }

    function filterFn(prop, el, stops) {
      if (stops.length === 1) {
        stops.unshift(0);
      }

      const unit = getUnit(stops) || { blur: 'px', hue: 'deg' }[prop] || '%';
      prop = { fopacity: 'opacity', hue: 'hue-rotate' }[prop] || prop;
      stops = parseStops(stops);

      return (css, percent) => {
        const value = getValue(stops, percent);
        css.filter += " " + prop + "(" + (value + unit) + ")";
      };
    }

    function cssPropFn(prop, el, stops) {
      if (stops.length === 1) {
        stops.unshift(getCssValue(el, prop, ''));
      }

      stops = parseStops(stops);

      return (css, percent) => {
        css[prop] = getValue(stops, percent);
      };
    }

    function strokeFn(prop, el, stops) {
      if (stops.length === 1) {
        stops.unshift(0);
      }

      const unit = getUnit(stops);
      const length = getMaxPathLength(el);
      stops = parseStops(stops.reverse(), (stop) => {
        stop = toFloat(stop);
        return unit === '%' ? stop * length / 100 : stop;
      });

      if (!stops.some((_ref) => {let [value] = _ref;return value;})) {
        return noop;
      }

      css(el, 'strokeDasharray', length);

      return (css, percent) => {
        css.strokeDashoffset = getValue(stops, percent);
      };
    }

    function backgroundFn(prop, el, stops, props) {
      if (stops.length === 1) {
        stops.unshift(0);
      }

      const attr = prop === 'bgy' ? 'height' : 'width';
      props[prop] = parseStops(stops, (stop) => toPx(stop, attr, el));

      const bgProps = ['bgx', 'bgy'].filter((prop) => prop in props);
      if (bgProps.length === 2 && prop === 'bgx') {
        return noop;
      }

      if (getCssValue(el, 'backgroundSize', '') === 'cover') {
        return backgroundCoverFn(prop, el, stops, props);
      }

      const positions = {};
      for (const prop of bgProps) {
        positions[prop] = getBackgroundPos(el, prop);
      }

      return setBackgroundPosFn(bgProps, positions, props);
    }

    function backgroundCoverFn(prop, el, stops, props) {
      const dimImage = getBackgroundImageDimensions(el);

      if (!dimImage.width) {
        return noop;
      }

      const dimEl = {
        width: el.offsetWidth,
        height: el.offsetHeight };


      const bgProps = ['bgx', 'bgy'].filter((prop) => prop in props);

      const positions = {};
      for (const prop of bgProps) {
        const values = props[prop].map((_ref2) => {let [value] = _ref2;return value;});
        const min = Math.min(...values);
        const max = Math.max(...values);
        const down = values.indexOf(min) < values.indexOf(max);
        const diff = max - min;

        positions[prop] = (down ? -diff : 0) - (down ? min : max) + "px";
        dimEl[prop === 'bgy' ? 'height' : 'width'] += diff;
      }

      const dim = Dimensions.cover(dimImage, dimEl);

      for (const prop of bgProps) {
        const attr = prop === 'bgy' ? 'height' : 'width';
        const overflow = dim[attr] - dimEl[attr];
        positions[prop] = "max(" + getBackgroundPos(el, prop) + ",-" + overflow + "px) + " + positions[prop];
      }

      const fn = setBackgroundPosFn(bgProps, positions, props);
      return (css, percent) => {
        fn(css, percent);
        css.backgroundSize = dim.width + "px " + dim.height + "px";
        css.backgroundRepeat = 'no-repeat';
      };
    }

    function getBackgroundPos(el, prop) {
      return getCssValue(el, "background-position-" + prop.substr(-1), '');
    }

    function setBackgroundPosFn(bgProps, positions, props) {
      return function (css, percent) {
        for (const prop of bgProps) {
          const value = getValue(props[prop], percent);
          css["background-position-" + prop.substr(-1)] = "calc(" + positions[prop] + " + " + value + "px)";
        }
      };
    }

    const dimensions = {};
    function getBackgroundImageDimensions(el) {
      const src = css(el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

      if (dimensions[src]) {
        return dimensions[src];
      }

      const image = new Image();
      if (src) {
        image.src = src;

        if (!image.naturalWidth) {
          image.onload = () => {
            dimensions[src] = toDimensions(image);
            trigger(el, createEvent('load', false));
          };
          return toDimensions(image);
        }
      }

      return dimensions[src] = toDimensions(image);
    }

    function toDimensions(image) {
      return {
        width: image.naturalWidth,
        height: image.naturalHeight };

    }

    function parseStops(stops, fn) {if (fn === void 0) {fn = toFloat;}
      const result = [];
      const { length } = stops;
      let nullIndex = 0;
      for (let i = 0; i < length; i++) {
        let [value, percent] = isString(stops[i]) ? stops[i].trim().split(' ') : [stops[i]];
        value = fn(value);
        percent = percent ? toFloat(percent) / 100 : null;

        if (i === 0) {
          if (percent === null) {
            percent = 0;
          } else if (percent) {
            result.push([value, 0]);
          }
        } else if (i === length - 1) {
          if (percent === null) {
            percent = 1;
          } else if (percent !== 1) {
            result.push([value, percent]);
            percent = 1;
          }
        }

        result.push([value, percent]);

        if (percent === null) {
          nullIndex++;
        } else if (nullIndex) {
          const leftPercent = result[i - nullIndex - 1][1];
          const p = (percent - leftPercent) / (nullIndex + 1);
          for (let j = nullIndex; j > 0; j--) {
            result[i - j][1] = leftPercent + p * (nullIndex - j + 1);
          }

          nullIndex = 0;
        }
      }

      return result;
    }

    function getStop(stops, percent) {
      const index = findIndex(stops.slice(1), (_ref3) => {let [, targetPercent] = _ref3;return percent <= targetPercent;}) + 1;
      return [
      stops[index - 1][0],
      stops[index][0],
      (percent - stops[index - 1][1]) / (stops[index][1] - stops[index - 1][1])];

    }

    function getValue(stops, percent) {
      const [start, end, p] = getStop(stops, percent);
      return isNumber(start) ? start + Math.abs(start - end) * p * (start < end ? 1 : -1) : +end;
    }

    const unitRe = /^-?\d+(\S*)/;
    function getUnit(stops, defaultUnit) {
      for (const stop of stops) {
        const match = stop.match == null ? void 0 : stop.match(unitRe);
        if (match) {
          return match[1];
        }
      }
      return defaultUnit;
    }

    function getCssValue(el, prop, value) {
      const prev = el.style[prop];
      const val = css(css(el, prop, value), prop);
      el.style[prop] = prev;
      return val;
    }

    function fillObject(keys, value) {
      return keys.reduce((data, prop) => {
        data[prop] = value;
        return data;
      }, {});
    }

    var parallax = {
      mixins: [Parallax, Resize, Scroll],

      props: {
        target: String,
        viewport: Number, // Deprecated
        easing: Number,
        start: String,
        end: String },


      data: {
        target: false,
        viewport: 1,
        easing: 1,
        start: 0,
        end: 0 },


      computed: {
        target(_ref, $el) {let { target } = _ref;
          return getOffsetElement(target && query(target, $el) || $el);
        },

        start(_ref2) {let { start } = _ref2;
          return toPx(start, 'height', this.target, true);
        },

        end(_ref3) {let { end, viewport } = _ref3;
          return toPx(
          end || (viewport = (1 - viewport) * 100) && viewport + "vh+" + viewport + "%",
          'height',
          this.target,
          true);

        } },


      update: {
        read(_ref4, types) {let { percent } = _ref4;
          if (!types.has('scroll')) {
            percent = false;
          }

          if (!this.matchMedia) {
            return;
          }

          const prev = percent;
          percent = ease(scrolledOver(this.target, this.start, this.end), this.easing);

          return {
            percent,
            style: prev === percent ? false : this.getCss(percent) };

        },

        write(_ref5) {let { style } = _ref5;
          if (!this.matchMedia) {
            this.reset();
            return;
          }

          style && css(this.$el, style);
        },

        events: ['scroll', 'resize'] } };



    /*
     * Inspired by https://gist.github.com/gre/1650294?permalink_comment_id=3477425#gistcomment-3477425
     *
     * linear: 0
     * easeInSine: 0.5
     * easeOutSine: -0.5
     * easeInQuad: 1
     * easeOutQuad: -1
     * easeInCubic: 2
     * easeOutCubic: -2
     * easeInQuart: 3
     * easeOutQuart: -3
     * easeInQuint: 4
     * easeOutQuint: -4
     */
    function ease(percent, easing) {
      return easing >= 0 ? Math.pow(percent, easing + 1) : 1 - Math.pow(1 - percent, 1 - easing);
    }

    // SVG elements do not inherit from HTMLElement
    function getOffsetElement(el) {
      return el ? 'offsetTop' in el ? el : getOffsetElement(parent(el)) : document.documentElement;
    }

    var SliderReactive = {
      update: {
        write() {
          if (this.stack.length || this.dragging) {
            return;
          }

          const index = this.getValidIndex(this.index);

          if (!~this.prevIndex || this.index !== index) {
            this.show(index);
          }
        },

        events: ['resize'] } };

    var SliderPreload = {
      mixins: [Lazyload],

      connected() {
        this.lazyload(this.slides, this.getAdjacentSlides);
      } };

    function Transitioner (prev, next, dir, _ref) {let { center, easing, list } = _ref;
      const deferred = new Deferred();

      const from = prev ?
      getLeft(prev, list, center) :
      getLeft(next, list, center) + dimensions$1(next).width * dir;
      const to = next ?
      getLeft(next, list, center) :
      from + dimensions$1(prev).width * dir * (isRtl ? -1 : 1);

      return {
        dir,

        show(duration, percent, linear) {if (percent === void 0) {percent = 0;}
          const timing = linear ? 'linear' : easing;
          duration -= Math.round(duration * clamp(percent, -1, 1));

          this.translate(percent);

          percent = prev ? percent : clamp(percent, 0, 1);
          triggerUpdate(this.getItemIn(), 'itemin', { percent, duration, timing, dir });
          prev &&
          triggerUpdate(this.getItemIn(true), 'itemout', {
            percent: 1 - percent,
            duration,
            timing,
            dir });


          Transition.start(
          list,
          { transform: translate(-to * (isRtl ? -1 : 1), 'px') },
          duration,
          timing).
          then(deferred.resolve, noop);

          return deferred.promise;
        },

        cancel() {
          Transition.cancel(list);
        },

        reset() {
          css(list, 'transform', '');
        },

        forward(duration, percent) {if (percent === void 0) {percent = this.percent();}
          Transition.cancel(list);
          return this.show(duration, percent, true);
        },

        translate(percent) {
          const distance = this.getDistance() * dir * (isRtl ? -1 : 1);

          css(
          list,
          'transform',
          translate(
          clamp(
          -to + (distance - distance * percent),
          -getWidth(list),
          dimensions$1(list).width) * (
          isRtl ? -1 : 1),
          'px'));



          const actives = this.getActives();
          const itemIn = this.getItemIn();
          const itemOut = this.getItemIn(true);

          percent = prev ? clamp(percent, -1, 1) : 0;

          for (const slide of children(list)) {
            const isActive = includes(actives, slide);
            const isIn = slide === itemIn;
            const isOut = slide === itemOut;
            const translateIn =
            isIn ||
            !isOut && (
            isActive ||
            dir * (isRtl ? -1 : 1) === -1 ^
            getElLeft(slide, list) > getElLeft(prev || next));

            triggerUpdate(slide, "itemtranslate" + (translateIn ? 'in' : 'out'), {
              dir,
              percent: isOut ? 1 - percent : isIn ? percent : isActive ? 1 : 0 });

          }
        },

        percent() {
          return Math.abs(
          (css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));

        },

        getDistance() {
          return Math.abs(to - from);
        },

        getItemIn(out) {if (out === void 0) {out = false;}
          let actives = this.getActives();
          let nextActives = inView(list, getLeft(next || prev, list, center));

          if (out) {
            const temp = actives;
            actives = nextActives;
            nextActives = temp;
          }

          return nextActives[findIndex(nextActives, (el) => !includes(actives, el))];
        },

        getActives() {
          return inView(list, getLeft(prev || next, list, center));
        } };

    }

    function getLeft(el, list, center) {
      const left = getElLeft(el, list);

      return center ? left - centerEl(el, list) : Math.min(left, getMax(list));
    }

    function getMax(list) {
      return Math.max(0, getWidth(list) - dimensions$1(list).width);
    }

    function getWidth(list) {
      return children(list).reduce((right, el) => dimensions$1(el).width + right, 0);
    }

    function centerEl(el, list) {
      return dimensions$1(list).width / 2 - dimensions$1(el).width / 2;
    }

    function getElLeft(el, list) {
      return (
        el &&
        (position(el).left + (isRtl ? dimensions$1(el).width - dimensions$1(list).width : 0)) * (
        isRtl ? -1 : 1) ||
        0);

    }

    function inView(list, listLeft) {
      listLeft -= 1;
      const listWidth = dimensions$1(list).width;
      const listRight = listLeft + listWidth + 2;

      return children(list).filter((slide) => {
        const slideLeft = getElLeft(slide, list);
        const slideRight = slideLeft + Math.min(dimensions$1(slide).width, listWidth);

        return slideLeft >= listLeft && slideRight <= listRight;
      });
    }

    function triggerUpdate(el, type, data) {
      trigger(el, createEvent(type, false, false, data));
    }

    var slider = {
      mixins: [Class, Slider, SliderReactive, SliderPreload],

      props: {
        center: Boolean,
        sets: Boolean },


      data: {
        center: false,
        sets: false,
        attrItem: 'uk-slider-item',
        selList: '.uk-slider-items',
        selNav: '.uk-slider-nav',
        clsContainer: 'uk-slider-container',
        Transitioner },


      computed: {
        avgWidth() {
          return getWidth(this.list) / this.length;
        },

        finite(_ref) {let { finite } = _ref;
          return (
            finite ||
            Math.ceil(getWidth(this.list)) <
            Math.trunc(dimensions$1(this.list).width + getMaxElWidth(this.list) + this.center));

        },

        maxIndex() {
          if (!this.finite || this.center && !this.sets) {
            return this.length - 1;
          }

          if (this.center) {
            return last(this.sets);
          }

          let lft = 0;
          const max = getMax(this.list);
          const index = findIndex(this.slides, (el) => {
            if (lft >= max) {
              return true;
            }

            lft += dimensions$1(el).width;
          });

          return ~index ? index : this.length - 1;
        },

        sets(_ref2) {let { sets: enabled } = _ref2;
          if (!enabled) {
            return;
          }

          let left = 0;
          const sets = [];
          const width = dimensions$1(this.list).width;
          for (let i = 0; i < this.slides.length; i++) {
            const slideWidth = dimensions$1(this.slides[i]).width;

            if (left + slideWidth > width) {
              left = 0;
            }

            if (this.center) {
              if (
              left < width / 2 &&
              left + slideWidth + dimensions$1(this.slides[+i + 1]).width / 2 > width / 2)
              {
                sets.push(+i);
                left = width / 2 - slideWidth / 2;
              }
            } else if (left === 0) {
              sets.push(Math.min(+i, this.maxIndex));
            }

            left += slideWidth;
          }

          if (sets.length) {
            return sets;
          }
        },

        transitionOptions() {
          return {
            center: this.center,
            list: this.list };

        } },


      connected() {
        toggleClass(this.$el, this.clsContainer, !$("." + this.clsContainer, this.$el));
      },

      update: {
        write() {
          for (const el of this.navItems) {
            const index = toNumber(data(el, this.attrItem));
            if (index !== false) {
              el.hidden =
              !this.maxIndex ||
              index > this.maxIndex ||
              this.sets && !includes(this.sets, index);
            }
          }

          if (this.length && !this.dragging && !this.stack.length) {
            this.reorder();
            this._translate(1);
          }

          this.updateActiveClasses();
        },

        events: ['resize'] },


      events: {
        beforeitemshow(e) {
          if (
          !this.dragging &&
          this.sets &&
          this.stack.length < 2 &&
          !includes(this.sets, this.index))
          {
            this.index = this.getValidIndex();
          }

          const diff = Math.abs(
          this.index -
          this.prevIndex + (
          this.dir > 0 && this.index < this.prevIndex ||
          this.dir < 0 && this.index > this.prevIndex ?
          (this.maxIndex + 1) * this.dir :
          0));


          if (!this.dragging && diff > 1) {
            for (let i = 0; i < diff; i++) {
              this.stack.splice(1, 0, this.dir > 0 ? 'next' : 'previous');
            }

            e.preventDefault();
            return;
          }

          const index =
          this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
          this.duration =
          speedUp(this.avgWidth / this.velocity) * (
          dimensions$1(this.slides[index]).width / this.avgWidth);

          this.reorder();
        },

        itemshow() {
          if (~this.prevIndex) {
            addClass(this._getTransitioner().getItemIn(), this.clsActive);
          }
        },

        itemshown() {
          this.updateActiveClasses();
        } },


      methods: {
        reorder() {
          if (this.finite) {
            css(this.slides, 'order', '');
            return;
          }

          const index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;

          this.slides.forEach((slide, i) =>
          css(
          slide,
          'order',
          this.dir > 0 && i < index ? 1 : this.dir < 0 && i >= this.index ? -1 : ''));



          if (!this.center) {
            return;
          }

          const next = this.slides[index];
          let width = dimensions$1(this.list).width / 2 - dimensions$1(next).width / 2;
          let j = 0;

          while (width > 0) {
            const slideIndex = this.getIndex(--j + index, index);
            const slide = this.slides[slideIndex];

            css(slide, 'order', slideIndex > index ? -2 : -1);
            width -= dimensions$1(slide).width;
          }
        },

        updateActiveClasses() {
          const actives = this._getTransitioner(this.index).getActives();
          const activeClasses = [
          this.clsActive,
          (!this.sets || includes(this.sets, toFloat(this.index))) && this.clsActivated ||
          ''];

          for (const slide of this.slides) {
            toggleClass(slide, activeClasses, includes(actives, slide));
          }
        },

        getValidIndex(index, prevIndex) {if (index === void 0) {index = this.index;}if (prevIndex === void 0) {prevIndex = this.prevIndex;}
          index = this.getIndex(index, prevIndex);

          if (!this.sets) {
            return index;
          }

          let prev;

          do {
            if (includes(this.sets, index)) {
              return index;
            }

            prev = index;
            index = this.getIndex(index + this.dir, prevIndex);
          } while (index !== prev);

          return index;
        },

        getAdjacentSlides() {
          const { width } = dimensions$1(this.list);
          const left = -width;
          const right = width * 2;
          const slideWidth = dimensions$1(this.slides[this.index]).width;
          const slideLeft = this.center ? width / 2 - slideWidth / 2 : 0;
          const slides = new Set();
          for (const i of [-1, 1]) {
            let currentLeft = slideLeft + (i > 0 ? slideWidth : 0);
            let j = 0;
            do {
              const slide = this.slides[this.getIndex(this.index + i + j++ * i)];
              currentLeft += dimensions$1(slide).width * i;
              slides.add(slide);
            } while (this.slides.length > j && currentLeft > left && currentLeft < right);
          }
          return Array.from(slides);
        } } };



    function getMaxElWidth(list) {
      return Math.max(0, ...children(list).map((el) => dimensions$1(el).width));
    }

    var sliderParallax = {
      mixins: [Parallax],

      data: {
        selItem: '!li' },


      beforeConnect() {
        this.item = query(this.selItem, this.$el);
      },

      disconnected() {
        this.item = null;
      },

      events: [
      {
        name: 'itemin itemout',

        self: true,

        el() {
          return this.item;
        },

        handler(_ref) {let { type, detail: { percent, duration, timing, dir } } = _ref;
          fastdom.read(() => {
            const propsFrom = this.getCss(getCurrentPercent(type, dir, percent));
            const propsTo = this.getCss(isIn(type) ? 0.5 : dir > 0 ? 1 : 0);
            fastdom.write(() => {
              css(this.$el, propsFrom);
              Transition.start(this.$el, propsTo, duration, timing).catch(noop);
            });
          });
        } },


      {
        name: 'transitioncanceled transitionend',

        self: true,

        el() {
          return this.item;
        },

        handler() {
          Transition.cancel(this.$el);
        } },


      {
        name: 'itemtranslatein itemtranslateout',

        self: true,

        el() {
          return this.item;
        },

        handler(_ref2) {let { type, detail: { percent, dir } } = _ref2;
          fastdom.read(() => {
            const props = this.getCss(getCurrentPercent(type, dir, percent));
            fastdom.write(() => css(this.$el, props));
          });
        } }] };




    function isIn(type) {
      return endsWith(type, 'in');
    }

    function getCurrentPercent(type, dir, percent) {
      percent /= 2;

      return isIn(type) ^ dir < 0 ? percent : 1 - percent;
    }

    var Animations = {
      ...Animations$2,
      fade: {
        show() {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        },

        percent(current) {
          return 1 - css(current, 'opacity');
        },

        translate(percent) {
          return [{ opacity: 1 - percent, zIndex: 0 }, { zIndex: -1 }];
        } },


      scale: {
        show() {
          return [{ opacity: 0, transform: scale3d(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
        },

        percent(current) {
          return 1 - css(current, 'opacity');
        },

        translate(percent) {
          return [
          { opacity: 1 - percent, transform: scale3d(1 + 0.5 * percent), zIndex: 0 },
          { zIndex: -1 }];

        } },


      pull: {
        show(dir) {
          return dir < 0 ?
          [
          { transform: translate(30), zIndex: -1 },
          { transform: translate(), zIndex: 0 }] :

          [
          { transform: translate(-100), zIndex: 0 },
          { transform: translate(), zIndex: -1 }];

        },

        percent(current, next, dir) {
          return dir < 0 ? 1 - translated(next) : translated(current);
        },

        translate(percent, dir) {
          return dir < 0 ?
          [
          { transform: translate(30 * percent), zIndex: -1 },
          { transform: translate(-100 * (1 - percent)), zIndex: 0 }] :

          [
          { transform: translate(-percent * 100), zIndex: 0 },
          { transform: translate(30 * (1 - percent)), zIndex: -1 }];

        } },


      push: {
        show(dir) {
          return dir < 0 ?
          [
          { transform: translate(100), zIndex: 0 },
          { transform: translate(), zIndex: -1 }] :

          [
          { transform: translate(-30), zIndex: -1 },
          { transform: translate(), zIndex: 0 }];

        },

        percent(current, next, dir) {
          return dir > 0 ? 1 - translated(next) : translated(current);
        },

        translate(percent, dir) {
          return dir < 0 ?
          [
          { transform: translate(percent * 100), zIndex: 0 },
          { transform: translate(-30 * (1 - percent)), zIndex: -1 }] :

          [
          { transform: translate(-30 * percent), zIndex: -1 },
          { transform: translate(100 * (1 - percent)), zIndex: 0 }];

        } } };

    var slideshow = {
      mixins: [Class, Slideshow, SliderReactive, SliderPreload],

      props: {
        ratio: String,
        minHeight: Number,
        maxHeight: Number },


      data: {
        ratio: '16:9',
        minHeight: false,
        maxHeight: false,
        selList: '.uk-slideshow-items',
        attrItem: 'uk-slideshow-item',
        selNav: '.uk-slideshow-nav',
        Animations },


      update: {
        read() {
          if (!this.list) {
            return false;
          }

          let [width, height] = this.ratio.split(':').map(Number);

          height = height * this.list.offsetWidth / width || 0;

          if (this.minHeight) {
            height = Math.max(this.minHeight, height);
          }

          if (this.maxHeight) {
            height = Math.min(this.maxHeight, height);
          }

          return { height: height - boxModelAdjust(this.list, 'height', 'content-box') };
        },

        write(_ref) {let { height } = _ref;
          height > 0 && css(this.list, 'minHeight', height);
        },

        events: ['resize'] },


      methods: {
        getAdjacentSlides() {
          return [1, -1].map((i) => this.slides[this.getIndex(this.index + i)]);
        } } };

    var sortable = {
      mixins: [Class, Animate],

      props: {
        group: String,
        threshold: Number,
        clsItem: String,
        clsPlaceholder: String,
        clsDrag: String,
        clsDragState: String,
        clsBase: String,
        clsNoDrag: String,
        clsEmpty: String,
        clsCustom: String,
        handle: String },


      data: {
        group: false,
        threshold: 5,
        clsItem: 'uk-sortable-item',
        clsPlaceholder: 'uk-sortable-placeholder',
        clsDrag: 'uk-sortable-drag',
        clsDragState: 'uk-drag',
        clsBase: 'uk-sortable',
        clsNoDrag: 'uk-sortable-nodrag',
        clsEmpty: 'uk-sortable-empty',
        clsCustom: '',
        handle: false,
        pos: {} },


      created() {
        for (const key of ['init', 'start', 'move', 'end']) {
          const fn = this[key];
          this[key] = (e) => {
            assign(this.pos, getEventPos(e));
            fn(e);
          };
        }
      },

      events: {
        name: pointerDown$1,
        passive: false,
        handler: 'init' },


      computed: {
        target() {
          return (this.$el.tBodies || [this.$el])[0];
        },

        items() {
          return children(this.target);
        },

        isEmpty: {
          get() {
            return isEmpty(this.items);
          },

          watch(empty) {
            toggleClass(this.target, this.clsEmpty, empty);
          },

          immediate: true },


        handles: {
          get(_ref, el) {let { handle } = _ref;
            return handle ? $$(handle, el) : this.items;
          },

          watch(handles, prev) {
            css(prev, { touchAction: '', userSelect: '' });
            css(handles, { touchAction: hasTouch ? 'none' : '', userSelect: 'none' }); // touchAction set to 'none' causes a performance drop in Chrome 80
          },

          immediate: true } },



      update: {
        write(data) {
          if (!this.drag || !parent(this.placeholder)) {
            return;
          }

          const {
            pos: { x, y },
            origin: { offsetTop, offsetLeft },
            placeholder } =
          this;

          css(this.drag, {
            top: y - offsetTop,
            left: x - offsetLeft });


          const sortable = this.getSortable(document.elementFromPoint(x, y));

          if (!sortable) {
            return;
          }

          const { items } = sortable;

          if (items.some(Transition.inProgress)) {
            return;
          }

          const target = findTarget(items, { x, y });

          if (items.length && (!target || target === placeholder)) {
            return;
          }

          const previous = this.getSortable(placeholder);
          const insertTarget = findInsertTarget(
          sortable.target,
          target,
          placeholder,
          x,
          y,
          sortable === previous && data.moved !== target);


          if (insertTarget === false) {
            return;
          }

          if (insertTarget && placeholder === insertTarget) {
            return;
          }

          if (sortable !== previous) {
            previous.remove(placeholder);
            data.moved = target;
          } else {
            delete data.moved;
          }

          sortable.insert(placeholder, insertTarget);

          this.touched.add(sortable);
        },

        events: ['move'] },


      methods: {
        init(e) {
          const { target, button, defaultPrevented } = e;
          const [placeholder] = this.items.filter((el) => within(target, el));

          if (
          !placeholder ||
          defaultPrevented ||
          button > 0 ||
          isInput(target) ||
          within(target, "." + this.clsNoDrag) ||
          this.handle && !within(target, this.handle))
          {
            return;
          }

          e.preventDefault();

          this.touched = new Set([this]);
          this.placeholder = placeholder;
          this.origin = { target, index: index(placeholder), ...this.pos };

          on(document, pointerMove$1, this.move);
          on(document, pointerUp$1, this.end);

          if (!this.threshold) {
            this.start(e);
          }
        },

        start(e) {
          this.drag = appendDrag(this.$container, this.placeholder);
          const { left, top } = this.placeholder.getBoundingClientRect();
          assign(this.origin, { offsetLeft: this.pos.x - left, offsetTop: this.pos.y - top });

          addClass(this.drag, this.clsDrag, this.clsCustom);
          addClass(this.placeholder, this.clsPlaceholder);
          addClass(this.items, this.clsItem);
          addClass(document.documentElement, this.clsDragState);

          trigger(this.$el, 'start', [this, this.placeholder]);

          trackScroll(this.pos);

          this.move(e);
        },

        move(e) {
          if (this.drag) {
            this.$emit('move');
          } else if (
          Math.abs(this.pos.x - this.origin.x) > this.threshold ||
          Math.abs(this.pos.y - this.origin.y) > this.threshold)
          {
            this.start(e);
          }
        },

        end() {
          off(document, pointerMove$1, this.move);
          off(document, pointerUp$1, this.end);

          if (!this.drag) {
            return;
          }

          untrackScroll();

          const sortable = this.getSortable(this.placeholder);

          if (this === sortable) {
            if (this.origin.index !== index(this.placeholder)) {
              trigger(this.$el, 'moved', [this, this.placeholder]);
            }
          } else {
            trigger(sortable.$el, 'added', [sortable, this.placeholder]);
            trigger(this.$el, 'removed', [this, this.placeholder]);
          }

          trigger(this.$el, 'stop', [this, this.placeholder]);

          remove$1(this.drag);
          this.drag = null;

          for (const { clsPlaceholder, clsItem } of this.touched) {
            for (const sortable of this.touched) {
              removeClass(sortable.items, clsPlaceholder, clsItem);
            }
          }
          this.touched = null;
          removeClass(document.documentElement, this.clsDragState);
        },

        insert(element, target) {
          addClass(this.items, this.clsItem);

          const insert = () => target ? before(target, element) : append(this.target, element);

          this.animate(insert);
        },

        remove(element) {
          if (!within(element, this.target)) {
            return;
          }

          this.animate(() => remove$1(element));
        },

        getSortable(element) {
          do {
            const sortable = this.$getComponent(element, 'sortable');

            if (
            sortable && (
            sortable === this || this.group !== false && sortable.group === this.group))
            {
              return sortable;
            }
          } while (element = parent(element));
        } } };



    let trackTimer;
    function trackScroll(pos) {
      let last = Date.now();
      trackTimer = setInterval(() => {
        let { x, y } = pos;
        y += document.scrollingElement.scrollTop;

        const dist = (Date.now() - last) * 0.3;
        last = Date.now();

        scrollParents(document.elementFromPoint(x, pos.y), /auto|scroll/).
        reverse().
        some((scrollEl) => {
          let { scrollTop: scroll, scrollHeight } = scrollEl;

          const { top, bottom, height } = offsetViewport(scrollEl);

          if (top < y && top + 35 > y) {
            scroll -= dist;
          } else if (bottom > y && bottom - 35 < y) {
            scroll += dist;
          } else {
            return;
          }

          if (scroll > 0 && scroll < scrollHeight - height) {
            scrollEl.scrollTop = scroll;
            return true;
          }
        });
      }, 15);
    }

    function untrackScroll() {
      clearInterval(trackTimer);
    }

    function appendDrag(container, element) {
      const clone = append(
      container,
      element.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, '$1div$2'));


      css(clone, 'margin', '0', 'important');
      css(clone, {
        boxSizing: 'border-box',
        width: element.offsetWidth,
        height: element.offsetHeight,
        padding: css(element, 'padding') });


      height(clone.firstElementChild, height(element.firstElementChild));

      return clone;
    }

    function findTarget(items, point) {
      return items[findIndex(items, (item) => pointInRect(point, item.getBoundingClientRect()))];
    }

    function findInsertTarget(list, target, placeholder, x, y, sameList) {
      if (!children(list).length) {
        return;
      }

      const rect = target.getBoundingClientRect();
      if (!sameList) {
        if (!isHorizontal(list, placeholder)) {
          return y < rect.top + rect.height / 2 ? target : target.nextElementSibling;
        }

        return target;
      }

      const placeholderRect = placeholder.getBoundingClientRect();
      const sameRow = linesIntersect(
      [rect.top, rect.bottom],
      [placeholderRect.top, placeholderRect.bottom]);


      const pointerPos = sameRow ? x : y;
      const lengthProp = sameRow ? 'width' : 'height';
      const startProp = sameRow ? 'left' : 'top';
      const endProp = sameRow ? 'right' : 'bottom';

      const diff =
      placeholderRect[lengthProp] < rect[lengthProp] ?
      rect[lengthProp] - placeholderRect[lengthProp] :
      0;

      if (placeholderRect[startProp] < rect[startProp]) {
        if (diff && pointerPos < rect[startProp] + diff) {
          return false;
        }

        return target.nextElementSibling;
      }

      if (diff && pointerPos > rect[endProp] - diff) {
        return false;
      }

      return target;
    }

    function isHorizontal(list, placeholder) {
      const single = children(list).length === 1;

      if (single) {
        append(list, placeholder);
      }

      const items = children(list);
      const isHorizontal = items.some((el, i) => {
        const rectA = el.getBoundingClientRect();
        return items.slice(i + 1).some((el) => {
          const rectB = el.getBoundingClientRect();
          return !linesIntersect([rectA.left, rectA.right], [rectB.left, rectB.right]);
        });
      });

      if (single) {
        remove$1(placeholder);
      }

      return isHorizontal;
    }

    function linesIntersect(lineA, lineB) {
      return lineA[1] > lineB[0] && lineB[1] > lineA[0];
    }

    var tooltip = {
      mixins: [Container, Togglable, Position],

      args: 'title',

      props: {
        delay: Number,
        title: String },


      data: {
        pos: 'top',
        title: '',
        delay: 0,
        animation: ['uk-animation-scale-up'],
        duration: 100,
        cls: 'uk-active' },


      beforeConnect() {
        this._hasTitle = hasAttr(this.$el, 'title');
        attr(this.$el, 'title', '');
        this.updateAria(false);
        makeFocusable(this.$el);
      },

      disconnected() {
        this.hide();
        attr(this.$el, 'title', this._hasTitle ? this.title : null);
      },

      methods: {
        show() {
          if (this.isToggled(this.tooltip || null) || !this.title) {
            return;
          }

          this._unbind = once(
          document, "show keydown " +
          pointerDown$1,
          this.hide,
          false,
          (e) =>
          e.type === pointerDown$1 && !within(e.target, this.$el) ||
          e.type === 'keydown' && e.keyCode === 27 ||
          e.type === 'show' && e.detail[0] !== this && e.detail[0].$name === this.$name);


          clearTimeout(this.showTimer);
          this.showTimer = setTimeout(this._show, this.delay);
        },

        async hide() {
          if (matches(this.$el, 'input:focus')) {
            return;
          }

          clearTimeout(this.showTimer);

          if (!this.isToggled(this.tooltip || null)) {
            return;
          }

          await this.toggleElement(this.tooltip, false, false);
          remove$1(this.tooltip);
          this.tooltip = null;
          this._unbind();
        },

        _show() {
          this.tooltip = append(
          this.container, "<div class=\"uk-" +
          this.$options.name + "\"> <div class=\"uk-" +
          this.$options.name + "-inner\">" + this.title + "</div> </div>");



          on(this.tooltip, 'toggled', (e, toggled) => {
            this.updateAria(toggled);

            if (!toggled) {
              return;
            }

            this.positionAt(this.tooltip, this.$el);

            const [dir, align] = getAlignment(this.tooltip, this.$el, this.pos);

            this.origin =
            this.axis === 'y' ?
            flipPosition(dir) + "-" + align :
            align + "-" + flipPosition(dir);
          });

          this.toggleElement(this.tooltip, true);
        },

        updateAria(toggled) {
          attr(this.$el, 'aria-expanded', toggled);
        } },


      events: {
        focus: 'show',
        blur: 'hide',

        [pointerEnter + " " + pointerLeave](e) {
          if (!isTouch(e)) {
            this[e.type === pointerEnter ? 'show' : 'hide']();
          }
        },

        // Clicking a button does not give it focus on all browsers and platforms
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus
        [pointerDown$1](e) {
          if (isTouch(e)) {
            this.show();
          }
        } } };



    function makeFocusable(el) {
      if (!isFocusable(el)) {
        attr(el, 'tabindex', '0');
      }
    }

    function getAlignment(el, target, _ref) {let [dir, align] = _ref;
      const elOffset = offset(el);
      const targetOffset = offset(target);
      const properties = [
      ['left', 'right'],
      ['top', 'bottom']];


      for (const props of properties) {
        if (elOffset[props[0]] >= targetOffset[props[1]]) {
          dir = props[1];
          break;
        }
        if (elOffset[props[1]] <= targetOffset[props[0]]) {
          dir = props[0];
          break;
        }
      }

      const props = includes(properties[0], dir) ? properties[1] : properties[0];
      if (elOffset[props[0]] === targetOffset[props[0]]) {
        align = props[0];
      } else if (elOffset[props[1]] === targetOffset[props[1]]) {
        align = props[1];
      } else {
        align = 'center';
      }

      return [dir, align];
    }

    var upload = {
      props: {
        allow: String,
        clsDragover: String,
        concurrent: Number,
        maxSize: Number,
        method: String,
        mime: String,
        msgInvalidMime: String,
        msgInvalidName: String,
        msgInvalidSize: String,
        multiple: Boolean,
        name: String,
        params: Object,
        type: String,
        url: String },


      data: {
        allow: false,
        clsDragover: 'uk-dragover',
        concurrent: 1,
        maxSize: 0,
        method: 'POST',
        mime: false,
        msgInvalidMime: 'Invalid File Type: %s',
        msgInvalidName: 'Invalid File Name: %s',
        msgInvalidSize: 'Invalid File Size: %s Kilobytes Max',
        multiple: false,
        name: 'files[]',
        params: {},
        type: '',
        url: '',
        abort: noop,
        beforeAll: noop,
        beforeSend: noop,
        complete: noop,
        completeAll: noop,
        error: noop,
        fail: noop,
        load: noop,
        loadEnd: noop,
        loadStart: noop,
        progress: noop },


      events: {
        change(e) {
          if (!matches(e.target, 'input[type="file"]')) {
            return;
          }

          e.preventDefault();

          if (e.target.files) {
            this.upload(e.target.files);
          }

          e.target.value = '';
        },

        drop(e) {
          stop(e);

          const transfer = e.dataTransfer;

          if (!(transfer != null && transfer.files)) {
            return;
          }

          removeClass(this.$el, this.clsDragover);

          this.upload(transfer.files);
        },

        dragenter(e) {
          stop(e);
        },

        dragover(e) {
          stop(e);
          addClass(this.$el, this.clsDragover);
        },

        dragleave(e) {
          stop(e);
          removeClass(this.$el, this.clsDragover);
        } },


      methods: {
        async upload(files) {
          files = toArray(files);

          if (!files.length) {
            return;
          }

          trigger(this.$el, 'upload', [files]);

          for (const file of files) {
            if (this.maxSize && this.maxSize * 1000 < file.size) {
              this.fail(this.msgInvalidSize.replace('%s', this.maxSize));
              return;
            }

            if (this.allow && !match(this.allow, file.name)) {
              this.fail(this.msgInvalidName.replace('%s', this.allow));
              return;
            }

            if (this.mime && !match(this.mime, file.type)) {
              this.fail(this.msgInvalidMime.replace('%s', this.mime));
              return;
            }
          }

          if (!this.multiple) {
            files = files.slice(0, 1);
          }

          this.beforeAll(this, files);

          const chunks = chunk(files, this.concurrent);
          const upload = async (files) => {
            const data = new FormData();

            files.forEach((file) => data.append(this.name, file));

            for (const key in this.params) {
              data.append(key, this.params[key]);
            }

            try {
              const xhr = await ajax(this.url, {
                data,
                method: this.method,
                responseType: this.type,
                beforeSend: (env) => {
                  const { xhr } = env;
                  xhr.upload && on(xhr.upload, 'progress', this.progress);
                  for (const type of ['loadStart', 'load', 'loadEnd', 'abort']) {
                    on(xhr, type.toLowerCase(), this[type]);
                  }

                  return this.beforeSend(env);
                } });


              this.complete(xhr);

              if (chunks.length) {
                await upload(chunks.shift());
              } else {
                this.completeAll(xhr);
              }
            } catch (e) {
              this.error(e);
            }
          };

          await upload(chunks.shift());
        } } };



    function match(pattern, path) {
      return path.match(
      new RegExp("^" +
      pattern.
      replace(/\//g, '\\/').
      replace(/\*\*/g, '(\\/[^\\/]+)*').
      replace(/\*/g, '[^\\/]+').
      replace(/((?!\\))\?/g, '$1.') + "$",
      'i'));


    }

    function chunk(files, size) {
      const chunks = [];
      for (let i = 0; i < files.length; i += size) {
        chunks.push(files.slice(i, i + size));
      }
      return chunks;
    }

    function stop(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    var components = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Countdown: countdown,
        Filter: filter,
        Lightbox: lightbox,
        LightboxPanel: LightboxPanel,
        Notification: notification,
        Parallax: parallax,
        Slider: slider,
        SliderParallax: sliderParallax,
        Slideshow: slideshow,
        SlideshowParallax: sliderParallax,
        Sortable: sortable,
        Tooltip: tooltip,
        Upload: upload
    });

    each(components, (component, name) => UIkit.component(name, component));

    return UIkit;

}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0,
/******/ 			"css/app-ar": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app","css/app-ar"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/app-ar"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app","css/app-ar"], () => (__webpack_require__("./resources/sass/app-ar.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;