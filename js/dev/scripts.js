/* @codekit-prepend "mousetrap.js";
*/

(function (window, document, $, R, undefined) { // put the vars you need and match them at the bottom

	"use strict";
	// Stuff to do as soon as the DOM is ready;

	var move = function (a, b, c) {
		var
			frameStep   = a.width() / c,
			currentPos  = a.css('background-position-x'),
			position    = parseInt(currentPos, 10);

		if (b === 'backward') {
			a.css('background-position-x', position + frameStep + 'px');
		} else {
			a.css('background-position-x', position - frameStep + 'px');
		}

		// console.log(object);
		return false;
	};

	Mousetrap.bind('up', function () {
		move($('#carousel'), 'forward', 7);
	}, 'keydown');

	Mousetrap.bind('right', function () {
		move($('#carousel'), 'forward', 7);
	}, 'keyup');

	Mousetrap.bind('left', function () {
		move($('#carousel'), 'backward', 7);
	}, 'keyup');

}(this, this.document, this.jQuery, this.Response)); // in global scope, this === window
