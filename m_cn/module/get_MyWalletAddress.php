<?php 
@session_start(); 
require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   
$prevPage = $_SERVER['HTTP_REFERER'];

$reqDate = gmdate("Y-m-d H:i:s", time());  
$params  = array();  

$TABLE 	= " omc_member_wallet "; 
 
$state 	= @$_POST['state'];
$userID = @$_POST['userID']; 

if( @$_POST['userID'])
{
	

$WHERE = "";

$WHERE = " WHERE  userID = '$userID'  AND  usedState = 1 "; 
 

	$query = "SELECT * FROM $TABLE $WHERE  ";

	$results = $database->get_results( $query );

	foreach( $results as $row )
	{
		$result_array[] = $row;
	}

}else{
 	$result_array = 0;
}
	/* close connection */ 
	//$database->disconnect();
	echo  @$_GET['callback'].json_encode($result_array);
	//	echo @$_GET['callback']."(".json_encode($result_array).")";
 
?>