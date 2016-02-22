$(document).ready(function(){
	
	//========== register pop up =========//



	$(".register").hover(function(){
		$(".hidden-box").show();
		$(".fill-box").show();
		// $(".register").css({"height":"24px","border-bottom":"0"});

	},function(){
		$(".hidden-box").hide();
		$('.fill-box').hide();
		// $(".register").css({"height":"20px","border-bottom":"1px solid #f0f0f0","padding-top":"0","padding-bottom":"0","line-height":"20px"});
	});

	//=======sidebar tag switch ========//
	$(".news").click(function(){
		$(this).addClass("active");
		$(".recruit").removeClass("active");
	});
	$(".recruit").click(function(){
		$(this).addClass("active");
		$(".news").removeClass("active");
	});
	$("")


});