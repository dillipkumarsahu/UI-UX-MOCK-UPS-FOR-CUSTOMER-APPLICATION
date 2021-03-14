
// signup coding
$(document).ready(function(){
	$("#signup").on("submit",function(e){
		e.preventDefault();

		$.ajax({
			type: "POST",
			url: "php/signup.php",
			data:{
				name : $(".name").val(),
				email : $(".email").val(),
				password :$(".password").val()
			},
			success:function(response){
				$("#signup-msg").removeClass("d-none");
				setTimeout(function(){
					$("#signup-msg").addClass("d-none");
					$("#signup").trigger('reset');
				},2000);
			}
		});
	});
});

// signin coding
$(document).ready(function(){
	$("#signin").on("submit",function(e){
		e.preventDefault();

		$.ajax({
			type: "POST",
			url: "php/signin.php",
			data:{
				email : $(".login-email").val(),
				password :$(".login-password").val()
			},
			success:function(response){
				if (response == "login success") 
				{
					window.location = "pages/mainpage.html";
				}
				else{
					$("#signin-msg").html(response.trim());
					setTimeout(function(){
						$("#signin-msg").html("");
					},2000);
				}
			}
		});
	});
});