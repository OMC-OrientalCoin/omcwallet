<?php

	header('Content-Type: application/json; charset=utf-8'); 
$data  = array();
$param = array();

$param["from"] 		= @$_POST['from'] ;
$param["to"] 		= @$_POST['to'] ;
$param["value"] 	= @$_POST['value'] ;
//$param["gas"] 		= @$_POST['gas'] ? @$_POST['gas'] : "0x0001" ;
//$param["gasPrice"] 	= @$_POST['gasPrice'] ? @$_POST['gasPrice'] : "0x0005" ; 


$data["jsonrpc"] = "2.0";
$data["method"] = "eth_sendTransaction";
$data["params"] = [$param];
$data["id"] = "1";
	
$json_encoded_data = json_encode($data); 

require_once 'rcpapi.php';

?>
 