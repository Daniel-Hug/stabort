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

	return function sortBy(objs, prop, order) {
		// run sort on clone so as not to modify original
		var arrClone = [].slice.call(objs, 0);

		function compareDesc(a, b) {
			if (b[prop] < a[prop]) return -1;
			if (b[prop] > a[prop]) return 1;
			return objs.indexOf(b) - objs.indexOf(a);
		}

		function compareAsc(a, b) {
			if (a[prop] < b[prop]) return -1;
			if (a[prop] > b[prop]) return 1;
			return objs.indexOf(a) - objs.indexOf(b);
		}

		arrClone.sort(order.indexOf('desc') >= 0 ? compareDesc : compareAsc);

		return arrClone;
	};
});