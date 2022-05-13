$(function()
		{  
			$("#top").load("top_bar_nomenu.html",{ pageTitle: "Oriental coin" }); 
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

	  		$("#btn_main").on('click', function (e) 
			{   
			//회원가입 
			$(location).attr('href',"/m/main/main.html");

	  		});// $("#btn_genWallet").on('click', function (e) 

 		});//jquery 


		function setCookie(cookieName, value, exdays){
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + exdays);
			var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
			document.cookie = cookieName + "=" + cookieValue;
		}//setCookie

		function deleteCookie(cookieName){
			var expireDate = new Date();
			expireDate.setDate(expireDate.getDate() - 1);
			document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
		}//deleteCookie

		function getCookie(cookieName) 
		{

			cookieName = cookieName + '=';
			var cookieData = document.cookie;
			var start = cookieData.indexOf(cookieName);
			var cookieValue = '';

			if(start != -1){
				start += cookieName.length;
				var end = cookieData.indexOf(';', start);
				if(end == -1)end = cookieData.length;
				cookieValue = cookieData.substring(start, end);
			}
			return unescape(cookieValue);
		}

	function login(userID,userPW)
	{

		//var kind = $(':radio[name="kind"]:checked').val(); 
		let params = { "userID":userID,"userPassword":userPW};
		let goURL = "";

		var returnValue = $.ajax({
			type: "POST",
			url: "/m/module/login.php",
			data: params,
			async: false
		}).responseText; 

console.log("login -->",returnValue)

		if(Number(returnValue)>0 )
		{   

			goURL = "/m/main/main.html";
			$(location).attr('href', goURL);

		}else{ 
			alert("Login Error\nPlease check your login information or contact the administrator.");
			return false;
		}
	}//login()