<?php
 
	require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   
	  	
 	$TABLE = " omc_member "; 


	@$userID =  @$_POST['userID'];
	@$userPassword =  @$_POST['userPassword'];
 
 	$WHERECAUSE =  "where  userID = '".$userID."' AND  userPW = '".$userPassword."' ";
	$query = "	SELECT  count(*)  FROM  $TABLE  $WHERECAUSE ";  
	list($cnt) = $database->get_row($query); 

	echo $cnt;

?>
   