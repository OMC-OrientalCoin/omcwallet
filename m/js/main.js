$(document).ready(function(){
 
	$("#gnb").load("gnb.html",{ USERID:"<?=USERID;?>" });  


	let USERID = "<?=USERID;?>";
	let MyWalletAddress = "<?=USERWALLET;?>";
 

	$("#getBalance").html("<?=getBalance;?>")
	//보내기 
	$("#btn_send_m").on('click', function (e) 
	{   
		alert("보내기");  	
		//$(location).attr('href',"m_joinForm.html");

	});// $("#btn_genWallet").on('click', function (e) 


	//alert(" 받기 ");  
	$("#btn_recv_m").on('click', function (e) 
	{    
		alert(" 받기 ");  
		//$(location).attr('href',"findID.html");
	});//  
 

 


	 getMyWalletAddress("MyWalletAddress",USERID ); 
	getBalance("getbalance",MyWalletAddress );

});
