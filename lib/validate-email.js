(function ($) {
	$.fn.emailValidator = function () {
		  return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
	}
})(jQuery)
