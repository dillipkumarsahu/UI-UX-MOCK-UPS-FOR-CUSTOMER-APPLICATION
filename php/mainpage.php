<?php 
	require("database.php");

	$all_data = "SELECT * FROM users";
	$response = $db->query($all_data);

	while($data = $response->fetch_assoc())
	{
		echo '<div class="col-md-1 mx-auto bg-light text-dark py-2 border-bottom text-center">
				<b>'.$data['id'].'</b>
			</div>
			<div class="col-md-2 mx-auto bg-light text-dark py-2 border-bottom text-center">
				'.$data['name'].'
			</div>
			<div class="col-md-4 mx-auto bg-light text-dark py-2 border-bottom text-center">
				'.$data['email'].'
			</div>
			<div class="col-md-4 mx-auto bg-light text-dark py-2 border-bottom text-center">
				'.$data['password'].'
			</div>
			<div class="col-md-1 mx-auto bg-light text-dark py-2 border-bottom border-dark text-center">
				<i class="fa fa-edit edit-data" style="cursor:pointer;" id="'.$data['id'].'" name="'.$data['name'].'" email="'.$data['email'].'" password="'.$data['password'].'" data-toggle="modal" data-target="#myModal"></i>
			</div>';
	}



 ?>