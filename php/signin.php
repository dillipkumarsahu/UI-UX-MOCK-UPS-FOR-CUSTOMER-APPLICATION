<?php 
	require("database.php");

	$email = $_POST['email'];
	$password = md5($_POST['password']);

	$check_user = "SELECT email FROM users WHERE email= '$email'";
	$response = $db->query($check_user);
	if ($response->num_rows != 0) {
		$check_password = "SELECT password FROM users WHERE email= '$email' AND password = '$password'";
		$response_password = $db->query($check_password);

		if($response_password->num_rows != 0){
			echo "login success";
		}
		else{
			echo "Wrong password";
		}
	}
	else{
		echo "user not found";
	}
 ?>