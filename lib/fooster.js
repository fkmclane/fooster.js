$.parseParams = function(elem) {
	var params = {};

	window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });

	return params;
}

$.getParam = function(id) {
	if (typeof $._params === 'undefined')
		$._params = $.parseParams(window.location);

	return $._params[id];
}

Array.prototype.extend = function(arr) {
    arr.forEach(function(val) { this.push(val); }, this);
}
