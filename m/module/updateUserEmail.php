<?php

require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   

$table = " omc_member "; 

$params	= array(); 
$where 	= array();  

$params['userEmail']	=  @$_POST['userEmail']; 
$where['userID'] 	=  @$_POST['userID'];

$ret_query = $database->update( $table, $params, $where , '' );

echo $ret_query;

?>
