(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		$("#validate").keyup(function() {

      var email = $("#validate").val();

      if (email != 0) {
          if (isValidEmailAddress(email)) {
              $("#validate").css({
                  "border": "3px solid green"
              });
              $('#validEmail').text('Email is valid')
          } else {
              $("#validate").css({
                  "border": "3px solid red"
              });
              $('#validEmail').text('Email is not valid')
          }
      } else {
          $("#validate").css({
              "background-image": "none"
          });
          $('#validEmail').text('Input email first')
      }
    });
	}
})(jQuery)

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}
