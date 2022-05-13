	function replaceComma(pStr) { 
		var strCheck = /\,/g; 
		pStr = pStr.replace(strCheck, ''); 
		return pStr; 
	}


	function getMyWalletAddress(divID,userID )
	{  
		var jURL   = "/m/module/get_MyWalletAddress.php";
		var params = { userID:userID};   

		var returnValue = $.ajax({
			type: "POST",
			url: jURL,
			data: params,
			async: false
		}).responseText;

 
		var obj = $.parseJSON(returnValue);   
 
		if(obj == null )
		{
			alert("您可以通過單擊下面的藍色 + 按鈕來創建錢包");
			return false;

		}else{ 
  
			var tmpForm = "";
			var balance = "";
			var balance_total = 0;
			var balance_format = 0;
			let xBalance = 0;
			let tmpLength = 0;

 

			$("#"+divID).html("")

			for(var i=0;i< obj.length; i++)
			{  

				balance = getBalance(obj[i].walletAddress);
						console.log("bbbbbbbbbbbbbb",balance )	
						
				if(balance !="")
				{
		
					balance = replaceComma(balance);
					let  x =  new BigNumber(balance) 
 					var z =  x.toString(10);  
 					z = Math.floor(z)
 				}

				// tmpLength = balance.length;
				// balance = balance.substring(2,tmpLength);
				// balance =parseInt(balance,16);
				// balance = balance.toString(10);
 
				

				tmpForm += "<div class='your-acc-box walletAddress' style='width: 100%;'> ";
				tmpForm += "	<div id='w_"+obj[i].walletAddress+"_"+obj[i].userID+"_"+obj[i].idx+"'  class='cell ' style='width:83%; display: inline-block; cursor:pointer; '>";
				tmpForm += "		<p class='your-acc-box2__sub2' >"+ obj[i].walletAddress +"</p>";
				tmpForm += "		<p  id = 'b_"+obj[i].idx+"' class='your-acc-box2__sub2' style='font-size:14px;' >"+addCommas(z)+" <span style='font-size:12px;color: #808080;'> OMC</span></p>";
				tmpForm += "	</div>";

					// tmpForm += "	<div id='g_"+obj[i].walletAddress+"'  class='cell' style='width: 5%; display: inline-block;  '>"; 
					// tmpForm += " 		<img src='/m/img/sub/qr_receive.png' width='20px;' />";
					// tmpForm += " 	</div>";


					tmpForm += "	<div id='q_"+obj[i].walletAddress+"'  class='cell' style='width: 7%; display: inline-block;  '>"; 
					tmpForm += " 		<img src='/m/img/sub/gear.png' />";
					tmpForm += " </div>";

					tmpForm += "	<div id='d_"+obj[i].walletAddress+"_"+obj[i].idx+"' class='cell' style='width: 7%; display: inline-block;  '>"; 
					tmpForm += " 		<img src='/m/img/sub/x.png' />";
					tmpForm += " 	</div>"; 

					tmpForm += "</div>";

					balance_total += Number(z);
				}  


				//balance_total = balance_total.toString(10);
				$("#"+divID).html(tmpForm);
				$("#getBalance").html(addCommas(balance_total) +" OMC"); 

			}//if
	}

	
	
		function isEmpty(value){
		  if( value == "" || value == null || value == undefined ){ //|| ( value != null && typeof value == "object" && !Object.keys(value).length ) ){
		    return true
		  }else{
		    return false
		  }
		} 

		function getBalance(address)
		{  

			
			var jURL   = "/m/module/eth_getBalance.php";
			var params = { address:address};   

			var returnValue = $.ajax({
				type: "POST",
				url: jURL,
				data: params,
				async: false
			}).responseText;

			console.log("getBalance ",returnValue)
			var obj = $.parseJSON(returnValue);  
		/* var balance = parseInt(obj.result, 16);   
		$("#"+divID).html(obj.result);*/
		var balance =  obj.result ; 
		//balance =  balance.substring(2, balance.length);
		// balance = web3.fromWei(wei, 'ether');
		 balance =  balance  / 1000000000000000000;
		balance = addCommas(balance);
		//$("#"+divID).html(value); 
		return balance;

	}//getBalance()

	 

	function addCommas(x) {
		x = x?x:0;
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	}