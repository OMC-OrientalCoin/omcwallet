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

 
let footer_state = $("#footer_state").val();
	$(".foot-menu__item").removeClass("on");
	$("#"+footer_state).addClass(" on");
/*
 	$("#foot-menu").on('click', ".foot-menu__item",function (e) 
	{  
		let thisID = $(this).attr('id'); 
		alert(thisID)
 
	}); */
 
let thisID ="";
 $( "li.foot-menu__item" ).mouseenter(function() {
    thisID = $(this).attr('id');
    $("#"+thisID).addClass(thisID + " on")
  }).mouseleave(function() {
    $("#"+thisID).removeClass("on")
    $("#"+footer_state).addClass(" on");
  });

 
	$("#home").on('click', function (e) 
	{     
		$(location).attr('href',"main.html");
	});

	$("#info").on('click', function (e) 
	{     
		$(location).attr('href',"mypage.html");
	});

	$("#send").on('click', function (e) 
	{    
		$(location).attr('href',"send.html");
	});

	$("#receive").on('click', function (e) 
	{     
		$(location).attr('href',"send_list.html");
	});

	$("#transaction").on('click', function (e) 
	{     
		$(location).attr('href',"transaction.html");
	}); 

});