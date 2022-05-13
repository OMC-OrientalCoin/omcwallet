<?php
	@session_start(); 
	define("USERID",  	  @$_SESSION['userID']);
	define("USERWALLET",  @$_SESSION['userWallet']);
	define("USERNAME",   @$_SESSION['userName']);
	define("USEREMAIL",  @$_SESSION['userEmail']); 
 
?>
 