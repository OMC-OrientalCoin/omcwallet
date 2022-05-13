<?php 
@session_start(); 
require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   
  
 	$table =" omc_member_wallet ";
 	$walletAddress = @$_POST['wallet']; 
 
 

	$update = array( 'usedState' => '0' );
	$update_where = array( 'walletAddress' => $walletAddress ); 

 	$retValue =  $database->update( $table , $update, $update_where, 1 ); 
	echo  $retValue;//."|".$walletAddress;
?>