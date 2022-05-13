<?php
 	//인증번호 생성 및 메일릴
	require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";  
	$authNum = rand(1000000,1000 );
  

	echo $authNum;

?>
   