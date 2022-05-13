<?php
 
	require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   
	  	
 	$TABLE = " omc_member "; 

	@$userID =  @$_POST['orderID']; 
 
 	$WHERECAUSE =  "where  userID like '%".$userID."%' ";
	$query = "	SELECT  userID  FROM  $TABLE  $WHERECAUSE ";  
	$results = $database->get_results( $query );

	foreach( $results as $row )
	{
		$result_array[] = $row;
	}

	/* close connection */

	//$database->disconnect();
	echo @$_GET['callback'].json_encode($result_array);

?>
   