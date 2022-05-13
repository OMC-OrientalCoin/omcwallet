<?php 
@session_start(); 
require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   
$prevPage = $_SERVER['HTTP_REFERER'];


$reqDate = gmdate("Y-m-d H:i:s", time());  
$params = array();  

$TABLE = " omc_order_coin "; 
 
$state = @$_POST['state'];
$userID = @$_POST['userID'];

$WHERE = "";

	if($state == "M")
		$WHERE = " WHERE requestID = '$userID' "; 
	else if($state == "Y")
 		$WHERE = "WHERE 	orderID = '$userID' "; 

	$query = "SELECT * FROM $TABLE $WHERE  order by reqDate desc";

	$results = $database->get_results( $query );

	foreach( $results as $row )
	{
		$result_array[] = $row;
	}

	/* close connection */ 
	//$database->disconnect();
	echo  json_encode($result_array);
	//	echo @$_GET['callback']."(".json_encode($result_array).")";
 
?>