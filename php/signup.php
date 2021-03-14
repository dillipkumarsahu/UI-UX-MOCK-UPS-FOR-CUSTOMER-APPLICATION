<?php 
	require("database.php");

	$name = $_POST['name'];
	$email = $_POST['email'];
	$password = md5($_POST['password']);

	$store_user = "INSERT INTO users(email,name,password) 
	VALUES('$email','$name','$password')
	";
	if($db->query($store_user))
	{
		echo "success";
	}
	else{
		echo "fail";
	}
 ?>