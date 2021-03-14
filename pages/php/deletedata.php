<?php 
	require("../../php/database.php");

	$id = $_POST['id'];

	$sql_query = "DELETE FROM users WHERE id = '$id'";
	$response = $db->query($sql_query);
	if ($response) 
	{
		echo "success";
	}
	else{
		echo "fail";
	}
?>