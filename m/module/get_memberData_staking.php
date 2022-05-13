<?php 
@session_start(); 
require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   
$prevPage = $_SERVER['HTTP_REFERER'];


$reqDate = gmdate("Y-m-d H:i:s", time());  
$params = array();  

$TABLE = " omc_member "; 
 
$userID = @$_POST['userID'] ;
$userPW = @$_POST['userPW'] ;
 

$WHERE = "WHERE userID = '$userID' AND userPW = '$userPW' "; 

	$query = "SELECT userName, userEmail, userPhone, userNation  FROM $TABLE $WHERE ";

	$results = $database->get_results( $query );

	foreach( $results as $row )
	{
		$result_array[] = $row;
	}

	/* close connection */ 
	//$database->disconnect();
	//echo  json_encode($result_array);
	echo @$_GET['callback']. json_encode($result_array) ;
 
?>