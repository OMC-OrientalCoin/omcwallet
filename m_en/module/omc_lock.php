<?php

	header('Content-Type: application/json; charset=utf-8');
  
  
$data  = array();

$_address 	 = @$_POST['address']; 
$_passphrase = @$_POST['passphrase']; 
$_duration 	 = @$_POST['duration'] ? @$_POST['duration'] : 30  ; 


$data["jsonrpc"] = "2.0";
$data["method"] = "personal_lockAccount";
$data["params"] = [$_address];
$data["id"] = "1";

$json_encoded_data = json_encode($data); 

	require_once 'rcpapi.php';

?>
