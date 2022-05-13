 function errMSGFunc(errcode)
 {
 	let msg ="";

 	errcode = Math.abs(errcode);

 	console.log(errcode);
 	switch (errcode){ 
 		case 32000 : msg ="密碼不匹配..";  break; //could not decrypt key with given password
 		case 32602 : msg ="hexErr";  break; //invalid argument 0: json: cannot unmarshal hex string without 0x prefix into Go struct field 
 	}

 	alert(msg);
 	return false;
 }