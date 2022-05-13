<?php 
@session_start(); 
require_once $_SERVER['DOCUMENT_ROOT']."/lib/init_omcDB.php";   

$regDate = gmdate("Y-m-d H:i:s", time());  
$params = array(); 
$check_userID = array(); 
$lastid = "";
$update  = "";
$update_where  = "";

$table = " omc_member "; 


$userID 	= htmlentities(@$_POST['userID'], ENT_QUOTES | ENT_IGNORE, "UTF-8");
$userName 	= htmlentities(@$_POST['userName'], ENT_QUOTES | ENT_IGNORE, "UTF-8"); 
$userEmail 	= htmlentities(@$_POST['userEMAIL'], ENT_QUOTES | ENT_IGNORE, "UTF-8");
$userPhone 	= htmlentities(@$_POST['userPhone'], ENT_QUOTES | ENT_IGNORE, "UTF-8");
$userNation = htmlentities(@$_POST['userNation'], ENT_QUOTES | ENT_IGNORE, "UTF-8");

if(!@$_POST['userID'])
{
	header('Location: /');
	exit;
}

$check_userID['userID'] =$userID;
$exists = $database->exists($table, 'userID', $check_userID );

if($exists)
{
	
  	if(@$_POST['passwd_chg']){
		$update['userPW']	= @$_POST['passwd_chg'];  
  	}

	$update['userEmail']  = @$userEmail;
	$update['userPhone']  = @$userPhone; 
	$update['userNation'] = @$userNation;
 

	$update_where['userID']	= $userID ; 

	$add_query = $database->update( $table, $update, $update_where, 1 );

	if( $add_query )
	{
	//  echo '<p>Successfully inserted &quot;'. $params['subject']. '&quot; into the database.</p>';
		@$regState = $database->lastid();   
	} 
}else{
	$regState = 0;
}

echo $regState;   

?>