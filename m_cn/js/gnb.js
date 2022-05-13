$(document).ready(function(){
	//네비게이션 닫기
 
/*$("#gnb").on('click',".gnb-menu__btn", function (e) 
	{    
		 var thisID = $(this).attr('id')
		 alert(thisID)
	});

*/
 
	let USERNAME = "<?=USERNAME;?>"
	$('#userName').val(USERNAME);

	$("#btn_logout").on('click', function (e) 
	{    
		$(location).attr('href',"logout.php");
	});

	$("#btn_myPage").on('click', function (e) 
	{ 	  
		$(location).attr('href',"mypage.html");
	}); 

	$("#btn_myWallet").on('click', function (e) 
	{ 	 
		$(location).attr('href',"main.html");
	});


	$("#btn_myTrans").on('click', function (e) 
	{     
		$(location).attr('href',"send_list.html");
	});

	$("#btn_send").on('click', function (e) 
	{    
   
		$(location).attr('href',"send.html");
	});

	$("#btn_recv").on('click', function (e) 
	{   
		$(location).attr('href',"receive.html");
	});

	//alert("거래내역 확인");  
	$("#btn_trans").on('click', function (e) 
	{  	
		$(location).attr('href',"transaction.html");
	});


	$("#btn_homepage").on('click', function (e) 
	{    
		$(location).attr('href',"http://omcwallet.net/");
	});

	$("#btn_law").on('click', function (e) 
	{    
		alert("약관 및 정책 준비중 입니다.");  
	});

	$("#btn_notice").on('click', function (e) 
	{    
		alert("공지사항 준비중 입니다.");  
	});

$("#btn_mkw").on('click', function (e) 
	{    
		$(location).attr('href',"makeWallet.html");
	});
 


});