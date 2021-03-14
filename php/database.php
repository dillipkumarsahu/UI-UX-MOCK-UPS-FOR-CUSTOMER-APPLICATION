<?php
	
	$db = new mysqli("localhost","root","","tnm");
	if ($db->connect_error) {
		die("Database not connected");
	}

	//echo "connect";

?>