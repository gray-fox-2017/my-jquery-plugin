(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(this.val())
	}
})(jQuery)
