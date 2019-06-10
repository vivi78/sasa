$(function(){
	//放大镜
	$('.btnLi').hover(function(){
		var picNum = $('.btnLi').index($(this))+1;
		$('#gdImg').attr('src','img/goodsDetails/gd0'+picNum+'.jpg');
		$('#bigPic').attr('src','img/goodsDetails/gdb0'+picNum+'.jpg');
		$('.btnLi').eq(picNum-1).toggleClass('active normal');
	})
	
//	$('#picMain').mousemove(function(){
//		$('#gdBigPic').css('display','block');
//		$('#picSmallBox').css('display','block');
//	})
	
	$('#picMain').mousemove(function(ev){
		var os = $('#picMain').offset();
		var left = ev.pageX-os.left-100;
		var top = ev.pageY-os.top-75;
//		console.log(left,top);
		if(left<0){
			left = 0;
		}
		if(left>100){
			left = 100;
		}
		if(top<0){
			top = 0;
		}
		if(top>150){
			top = 150;
		}
		$('#gdBigPic').css('display','block');
		$('#picSmallBox').css('display','block');
		$('#picSmallBox').css({'left':left,'top':top});
		var l = -left*2;
		var t = -top*2;
		$('#bigPic').css({'left':l,'top':t});
	})
	$('#picMain').mouseout(function(){
		$('#gdBigPic').css('display','none');
		$('#picSmallBox').css('display','none');
	})
	
	//吸顶
	var oGdBar = $('#gdBarTop').offset().top;
//	console.log(oGdBar);
	$(window).scroll(function(){
		var dis = $(document).scrollTop();
//		console.log(dis);
		if(dis>1040){
			$('#gdBar').css({'position':'fixed','top':0,'boxShadow':'0px 4px 8px rgba(0,0,0,.2)'})
		}else{
			$('#gdBar').css({'position':'static','boxShadow':'none'});
		}
		
		if(dis>1040&&dis<1240){
			$('#spClick').css('border-bottom','3px solid #c69a62');
			$('#deClick').css('border-bottom','1px solid white');
			$('#reClick').css('border-bottom','1px solid white');
		}
		else if(dis>1240&&dis<9890){
			$('#deClick').css('border-bottom','3px solid #c69a62');
			$('#spClick').css('border-bottom','1px solid white');
			$('#reClick').css('border-bottom','1px solid white');
		}
		else if(dis>9890){
			$('#reClick').css('border-bottom','3px solid #c69a62');
			$('#deClick').css('border-bottom','1px solid white');
			$('#spClick').css('border-bottom','1px solid white');
		}
	})
	
	$('#spClick').click(function(){
		$(document).scrollTop('1040');
		$('#spClick').css('border-bottom','3px solid #c69a62');
		$('#deClick').css('border-bottom','1px solid white');
		$('#reClick').css('border-bottom','1px solid white');
	})
	
	$('#deClick').click(function(){
		$(document).scrollTop('1240');
		$('#deClick').css('border-bottom','3px solid #c69a62');
		$('#spClick').css('border-bottom','1px solid white');
		$('#reClick').css('border-bottom','1px solid white');
	})
	
	$('#reClick').click(function(){
		$(document).scrollTop('9890');
		$('#reClick').css('border-bottom','3px solid #c69a62');
		$('#deClick').css('border-bottom','1px solid white');
		$('#spClick').css('border-bottom','1px solid white');
	})
	
	//改变数量
	var val = $('#num').val();
	$('#minus').click(function(){
		val--;
		$('#num').val(val);
		if(val<1){
			$('#num').val('1');
		}
	})
	$('#plus').click(function(){
		val++;
		$('#num').val(val);
	})
})