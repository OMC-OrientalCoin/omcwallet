<?php

	header('Content-Type: application/json; charset=utf-8');
 
 /* 
트랜잭션 해시에서 요청한 트랜잭션에 대한 정보를 반환합니다.
매개 변수
DATA, 32 바이트-트랜잭션 해시

Object-트랜잭션 오브젝트 또는 null트랜잭션이없는 경우 :

blockHash: DATA, 32 Bytes- null보류중인 트랜잭션이있는 블록의 해시 .
blockNumber: QUANTITY-이 트랜잭션이 null보류 된 블록 번호 .
from: DATA, 20 바이트-발신자의 주소입니다.
gas: QUANTITY-발신자가 제공 한 가스.
gasPrice: QUANTITY-Wei에서 발신자가 제공 한 가스 가격.
hash: DATA, 32 바이트-트랜잭션 해시.
input: DATA-트랜잭션과 함께 데이터를 보냅니다.
nonce: QUANTITY-발신자가 보낸 거래 수입니다.
to: DATA, 20 바이트-수신자의 주소. null계약 작성 트랜잭션
transactionIndex: QUANTITY-블록에서 트랜잭션 인덱스 위치의 정수. null보류 중일 때.
value: QUANTITY-Wei로 이전 된 가치.
v: QUANTITY-ECDSA 복구 ID
r: QUANTITY-ECDSA 서명 r
s: QUANTITY-ECDSA 서명

*/
	$data 	  = array();

	$_hash  = @$_POST['hash'];

 
	$data["jsonrpc"] = "2.0";
	$data["method"] = "eth_getTransactionByHash";
	$data["params"] = [$_hash];
	$data["id"] = "1";
 
	$json_encoded_data = json_encode($data);

	require_once 'rcpapi.php';

?>
