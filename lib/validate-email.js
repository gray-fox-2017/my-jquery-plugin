(function ($) {
	$.fn.emailValidator = function () {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.val());
	};
})(jQuery);
