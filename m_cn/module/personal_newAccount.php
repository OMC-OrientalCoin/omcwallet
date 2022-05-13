<?php 
header('Content-Type: application/json; charset=utf-8'); 

@$walletPasswd = @$_POST['walletPasswd']  ; // 씽크비젼@

if(!$walletPasswd)
	exit();


$data = array();

$data["jsonrpc"] = "2.0";
$data["method"] = "personal_newAccount";
$data["params"] = [$walletPasswd];
$data["id"] = "1";

	$json_encoded_data = json_encode($data);
 
  require_once 'rcpapi.php';
  
?>
