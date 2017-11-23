(function($) {
    window.app = {};
    $.app = window.app;
    $.app.namespaces = {};
    $.app.register = function(namespace, object) {
	var leaf = _.reduct(namespace.split("."), function(context, name) {
	    context[name] = context[name] || {};
	    context = context[name];
	    return context;
	}, $.app.namespaces);
	$.extend(leaf, object)[
    };
})(jQuery);
