<?php
@session_start(); 
require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   

$TABLE = " omc_order_coin "; 

$RECORD = array();
@$regDate = gmdate("Y-m-d H:i:s", time());

$WHERE = "";




$start_row = (empty($_POST['setBlock'])) ? 0 : $_POST['setBlock']-1; 
$limit_row = (empty($_POST['BlockPages'])) ? 10 : $_POST['BlockPages'];   
@$srSelect = (empty($_POST['srSelect'])) ? $_POST['srSelect'] : ""; 

$start_row = $start_row * $limit_row;

	// if($srSelect != "")
/*	// 		$WHERE = " WHERE ".$_POST['srSelect']." like '%".$_POST['srWord']."%' ";  
  
  	if($state =="find")
  		$WHERE = " WHERE  `userID` LIKE '$srWord' or `userName` LIKE '$srWord' ";
  	else  if($state =="sort") 
  	{
  		if($srWord == "Z")
  			$WHERE  = "";
  		else
  			$WHERE  = " WHERE  `userType` LIKE '$srWord' "; 
  	}
  	else*/
  	@$state   = @$_POST['state']?@$_POST['state']:"A";
	@$USERID = @$_POST['USERID'];
	@$toAddr = @$_POST['WalletAddress'];
/*
  	if($state == "O")
  		$WHERE  = " WHERE  orderID = '".$USERID ."' AND toAddr = '".$toAddr ."' "; 
  	else if($state == "R")
  		$WHERE  = " WHERE  requestID = '".$USERID ."' AND toAddr = '".$toAddr ."' "; 
  	else
  		$WHERE  = " WHERE  orderID = '".$USERID ."'  ";*/

  		$WHERE  = " WHERE  requestWallet = '".$toAddr ."' OR toAddr = '".$toAddr ."' "; 


	//echo $query;
	$result_array = array(); // 결과 값을 담을 변수 생성 
	
	//$query = "SELECT O.*, P.ProductName, P.pPrice  FROM $TABLE   left join $TABLE_LEFTJOIN on $WHERE ";
	$query = "SELECT *  FROM $TABLE $WHERE order by idx desc ";//LIMIT $start_row ,$limit_row   ";  
	$results = $database->get_results( $query ); 

	foreach( $results as $row )
	{
		$result_array[] = $row;
	} 


	//$database->disconnect();
	//echo @$_GET['callback']."('".json_encode($result_array)."')";
	echo @$_GET['callback'].json_encode($result_array);
	 // /$_GET['callback'].

	?> 