var submitForm = function(firstName, lastName) {
	if(firstName.length == 0) {
		alert("Please fill your first name");
	} else if (lastName.length == 0) {
		alert("Please fill your last name");
	} else {
		$(".rslt-first").text(firstName);
		$(".rslt-last").text(lastName);
		resetForm();
	}
};

var	resetForm = function() {
	$("#fname").val("");
	$("#lname").val("");
};

$(document).ready(function() {
	$("#submit").click(function(){
		var firstName = $("#fname").val();
		var lastName = $("#lname").val();
		submitForm(firstName, lastName);
	});

	$("#reset").click(function(){
		resetForm();
	});
});

