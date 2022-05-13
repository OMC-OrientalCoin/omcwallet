<?php 
@session_start(); 
require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   

$regDate = gmdate("Y-m-d H:i:s", time());  
$params = array(); 
$check_userID = array(); 
 

$table = " omc_member_wallet "; 
 

$userID 		= @$_POST['userID'];//htmlentities(@$_POST['USERID'], ENT_QUOTES | ENT_IGNORE, "UTF-8");
$walletAddress 	= @$_POST['walletAddress'];//htmlentities(@$_POST['walletAddress'], ENT_QUOTES | ENT_IGNORE, "UTF-8");  
 
 
	$params['userID']	  = $userID;
	$params['walletAddress'] = @$walletAddress;  
	$params['usedState']	= 1 ;
	$params['recDate']		= $regDate; 

	$add_query = $database->insert( $table, $params );

	if( $add_query )
	{ 
		@$regState = $database->lastid();   
	} 
 
echo $regState;   

?>