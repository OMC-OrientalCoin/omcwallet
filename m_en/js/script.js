$(document).ready(function(){
	//네비게이션 닫기
	$('.btn-all-menu').on('click', function () {
		$('.gnb').addClass('active');
	});

	$('.gnb-close').on('click', function () {
		$('.gnb').removeClass('active');
	});
 
 	$('#btn-home').on('click', function () {
		 $(location).attr('href',"/m/main/index.html");
	});


	$("#btn_login").on('click', function (e) 
			{   
				let userID = $('#userID').val();
				let userPassword = $('#userPassword').val();

				if(!userID){alert("Please enter your ID. "); $('#userID').focus(); return false;}
				if(!userPassword){alert("Please enter a password. "); $('#userPassword').focus(); return false;} 

				login(userID,userPassword);
				

	  		});// $("#btn_genWallet").on('click', function (e)  

			$("#btn_join").on('click', function (e) 
			{   
			//회원가입 
			$(location).attr('href',"m_joinForm.html");

	  		});// $("#btn_genWallet").on('click', function (e) 

			//alert(" 아이디찾기 이동 ");  
			$("#btn_findID").on('click', function (e) 
			{    
				$(location).attr('href',"findID.html");
	  		});//  

			//
			$("#btn_findPasswd").on('click', function (e) 
			{    	
				$(location).attr('href',"findPW.html");
	  		});//  

});
