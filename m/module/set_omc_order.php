<?php 
@session_start(); 
require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   


$regDate = gmdate("Y-m-d H:i:s", time());  
$params = array(); 
$check_userID = array(); 
 

$regDate = gmdate("Y-m-d H:i:s", time());  
$params = array(); 
 
$regState = 0;

$table = " omc_order_coin ";  

$userID =  @$_SESSION['userID'];
 
if(!$userID)
{
	 $regState = 0;

}else if(!@$_POST['to']){
	 $regState = 0;

}else{

 
	$params['orderID']	  	= @$userID;
	$params['requestID']	= @$_POST['requestID']; 
	$params['toAddr']	  	= @$_POST['from']; 
	$params['requestWallet']= @$_POST['to']; 
	$params['requestValue'] = @$_POST['value']; 
	$params['sendState'] 	= 0;
 
	$params['recDate']		= $regDate; 
	$params['usedState']	= 1 ;

	$add_query = $database->insert( $table, $params );

	if( $add_query )
	{
		//  echo '<p>Successfully inserted &quot;'. $params['subject']. '&quot; into the database.</p>';
		@$regState = $database->lastid();   
	} 
}


echo $regState;   


?>