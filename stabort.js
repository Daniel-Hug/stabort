/* exported sortBy */
/* global define, module */
(function (root, factory) {
	'use strict';
	if (typeof define === 'function' && define.amd)
		define([], factory);
	else if (typeof exports === 'object')
		module.exports = factory();
	else root.sortBy = factory();
})(this, function () {
	'use strict';

	function compareDesc(prop, a, b) {
		if (b[prop] < a[prop]) return -1;
		if (b[prop] > a[prop]) return 1;
		if (b.i < a.i) return -1;
		if (b.i > a.i) return 1;
	}

	function compareAsc(prop, a, b) {
		if (a[prop] < b[prop]) return -1;
		if (a[prop] > b[prop]) return 1;
		if (a.i < b.i) return -1;
		if (a.i > b.i) return 1;
	}

	return function sortBy(objs, prop, order) {
		// add index as prop in each obj
		objs.forEach(function(obj, i) {
			obj.i = i;
		});

		var compareFn = (order.indexOf('desc') >= 0 ? compareDesc : compareAsc).bind(null, prop);
		objs.sort(compareFn);

		// remove index prop from each obj
		objs.forEach(function(obj) {
			delete obj.i;
		});

		return objs;
	};
});