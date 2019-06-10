$(function(){
	//注册验证
	$('.reForm').blur(function(){
		var index = $('.reForm').index(this);
		var value = $('.reForm').eq(index).val();
		var reg;
		switch(index){
			case 0:
				reg = /^\w{5,}$/;
				break;
			case 1:
				reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
				break;
			case 2:
				reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
				break;
			case 3:
				reg = /\w/;
				break;
		}
		console.log(value,index,reg);
		checked( reg,value,index );
	})
	function checked( reg,value,index ){
		var result = reg.test( value );
		console.log(value,result,reg);
		if(result==false){
			$('p').eq(index).css('color','red');
		}else{
			$('p').eq(index).css('color','white');
		}
	}
})
