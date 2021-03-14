<?php 
	require("../../php/database.php");

	$id = $_POST['id'];
	$name = $_POST['name'];
	$email = $_POST['email'];

	$sql_query = "UPDATE users SET name = '$name' WHERE id = '$id'";
	$response = $db->query($sql_query);
	if ($response) 
	{
		$sql_query = "UPDATE users SET email = '$email' WHERE id = '$id'";
		if($db->query($sql_query))
		{
			echo "success";
		}
	}
	else{
		echo "fail";
	}
?>