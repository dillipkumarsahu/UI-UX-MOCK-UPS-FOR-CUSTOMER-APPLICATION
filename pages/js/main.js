
// default data load from database
$(document).ready(function(){
	load_data();
});
// load data from database
function load_data(){
	$.ajax({
		type:"POST",
		url:"../php/mainpage.php",
		success:function(response){
			$("#data-box").html(response.trim());

			// edit user data
			$(".edit-data").each(function(){
				$(this).click(function(){
					var id = $(this).attr("id");
					var name = $(this).attr("name");
					var email = $(this).attr("email");
					var password = $(this).attr("password");

					$("#edit-id-input").val(id);
					$("#edit-name-input").val(name);
					$("#edit-email-input").val(email);
					$("#edit-password-input").val(password);
				});
			});
		}
	});
}

// set placeholder in search field
$(document).ready(function(){
	var searchBy = $("#searchBy").val();
	$("#search-input").attr("placeholder","Search by "+searchBy);
	$("#searchBy").on("change",function(){
		$("#search-input").attr("placeholder","Search by "+$("#searchBy").val());
	});
});


// seach or filter users
$(document).ready(function(){
	$("#search-input").on("input",function(){
		var searchBy = $("#searchBy").val();
		$.ajax({
			type:"POST",
			url:"php/filter.php",
			data:{
				searchby:searchBy,
				keyword:$(this).val()
			},
			beforeSend:function(){
				var loader_ui = `<div class="bg-light col-12 text-center py-3">
							<b>Loading...</b>
						</div>`;
				$("#data-box").html(loader_ui);
			},
			success:function(response){
				$("#data-box").html("");
				$("#data-box").html(response.trim());


				// edit user data
				$(".edit-data").each(function(){
					$(this).click(function(){
						var id = $(this).attr("id");
						var name = $(this).attr("name");
						var email = $(this).attr("email");
						var password = $(this).attr("password");

						$("#edit-id-input").val(id);
						$("#edit-name-input").val(name);
						$("#edit-email-input").val(email);
						$("#edit-password-input").val(password);
					});
				});
			}
		});
	});
});


// edit user's data
$(document).ready(function(){
	$("#save-changed-data").click(function(){
		var id = $("#edit-id-input").val();
		var name = $("#edit-name-input").val();
		var email = $("#edit-email-input").val();

		$.ajax({
			type:"POST",
			url:"php/editdata.php",
			data:{
				id:id,
				name:name,
				email:email
			},
			success:function(response){
				$("#message").html("Update successfully");
				$("#message").addClass("my-2");
				setTimeout(function(){
					$("#message").html("");
					$("#message").removeClass("my-2");
				},3000);
				$("#close-modal").click();
				load_data();
			}
		});
	});
});

// delete user's data
$(document).ready(function(){
	$("#delete-data").click(function(){
		var id = $("#edit-id-input").val();

		$.ajax({
			type:"POST",
			url:"php/deletedata.php",
			data:{
				id:id
			},
			success:function(response){
				$("#message").html("Data Deleted");
				$("#message").addClass("my-2");
				setTimeout(function(){
					$("#message").html("");
					$("#message").removeClass("my-2");
				},3000);
				$("#close-modal").click();
				load_data();
			}
		});
	});
});