(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		$("#validate").keyup(function() {

      	var email = $("#validate").val();

	      if (email != 0) {
	          if (isValidEmailAddress(email)) {
	              $("#validate").css({
	                  "border": "4px solid green"
	              });
	              $('#validasiEmail').text('Email is valid')
	          } else {
	              $("#validate").css({
	                  "border": "4px solid red"
	              });
	              $('#validasiEmail').text('Email is not valid')
	          }
	      } else {
	          $("#validate").css({
	              "background-image": "none"
	          });
	          $('#validasiEmail').text('Input email first')
	      }

	    });
		}
})(jQuery)

function isValidEmailAddress(emailAddress) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(emailAddress);
}
