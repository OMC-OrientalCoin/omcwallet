<?php 
@session_start(); 
require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   
$prevPage = $_SERVER['HTTP_REFERER'];


$reqDate = gmdate("Y-m-d H:i:s", time());  
$params = array();  

$table = " omc_order_coin "; 
 

$orderID 		= htmlentities(@$_POST['orderID'], ENT_QUOTES | ENT_IGNORE, "UTF-8");
$requestID 		= htmlentities(@$_POST['requestID'], ENT_QUOTES | ENT_IGNORE, "UTF-8"); 
$requestWallet 	= htmlentities(@$_POST['requestWallet'], ENT_QUOTES | ENT_IGNORE, "UTF-8");
$requestValue 	= htmlentities(@$_POST['quantity'], ENT_QUOTES | ENT_IGNORE, "UTF-8");  
 
if(!@$orderID || !@$requestValue)
{
	header('location:'.$prevPage);
	exit;
} 

	$params['orderID']			= $orderID;
	$params['requestID']		= @$requestID; 
	$params['requestWallet']	= @$requestWallet;
	$params['requestValue']  	= @$requestValue; 
	$params['usedState']		= 0 ;
	$params['reqDate']			= $reqDate; 

	$add_query = $database->insert( $table, $params );

	if( $add_query )
	{
	//  echo '<p>Successfully inserted &quot;'. $params['subject']. '&quot; into the database.</p>';
		@$regState = $database->lastid();   
	} 
 

	echo $regState;   
 
 
?>