$(document).ready(function(){
	//네비게이션 닫기
	$('.btn-all-menu').on('click', function () {
		$('.gnb').addClass('active');
	});

	$('.gnb-close').on('click', function () {
		$('.gnb').removeClass('active');
	});

	let USERNAME = "<?=USERNAME;?>"
	$('#userName').val(USERNAME);

 
	$("#foot-home").on('click', function (e) 
	{     
		$(location).attr('href',"main.html");
	});

	$("#foot-info").on('click', function (e) 
	{    
		alert("foot-info");  
		$(location).attr('href',"myPage.html");
	});


	$("#foot-send").on('click', function (e) 
	{    
		alert("foot-send");  
		$(location).attr('href',"send.html");
	});

	$("#foot-receive").on('click', function (e) 
	{    
		alert("코인수신");  
		$(location).attr('href',"send.html");
	});

	$("#foot-transaction").on('click', function (e) 
	{    
		alert("거래내역 확인");  
		$(location).attr('href',"transaction.html");
	}); 

});