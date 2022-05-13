<?php 

	header('Content-Type: application/json; charset=utf-8');
	//$page = @$_POST['page']? @$_POST['page']:"omc_get_transaction.php";
	$data["tx_hash"] =  @$_POST['tx_hash']; 
	$json_encoded_data = json_encode($data);

	$url = "http://omcapi.net/module/omc_setTransaction.php";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	curl_setopt($ch, CURLOPT_POSTFIELDS, 	$data);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
/*	curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		'Content-Type: application/json',
		'Content-Length: ' . strlen($json_encoded_data))
	);*/

	$result = curl_exec($ch);//json_decode(curl_exec($ch), true);
	curl_close($ch);

	echo $result;

?>
