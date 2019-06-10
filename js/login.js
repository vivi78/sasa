window.onload = function(){
	//登录验证
	var phone = document.getElementById('phone');
	var passwd = document.getElementById('password');
	var verify = document.getElementById('verify');
	var warn = document.getElementsByClassName('warn');
//	var reg01 = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
//	var reg02 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	phone.onblur = function(){
		var phoneVal = phone.value;
		if(phoneVal==""){
			warn[0].style.color = 'red';
		}else{
			warn[0].style.color = 'white';
		}
	}
	passwd.onblur = function(){
		var pwVal = passwd.value;
		console.log(pwVal);
		if(pwVal==""){
			warn[1].style.color = 'red';
		}else{
			warn[1].style.color = 'white';
		}
	}
	verify.onblur = function(){
		var verVal = verify.value;
		console.log(verVal);
		if(verVal==""){
			warn[2].style.color = 'red';
		}else{
			warn[2].style.color = 'white';
		}
	}	
}