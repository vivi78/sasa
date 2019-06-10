window.onload = function(){
	//透明度轮播
	var oPicBtn = document.getElementsByClassName('picBtn');
	var oBigPic = document.getElementsByClassName('bigPic');
	console.log( oPicBtn );
	
	slider();
	function slider(){
		inter();
		
		var iNow = 0;//关键
		var timer;
		//遍历数组
		for(var i=0; i<oPicBtn.length; i++){
			console.log(i);
			bind(i);
		}
		//点击按钮
		function bind(index){
			oPicBtn[index].onclick = function(){
				clearInterval(timer);
				iNow = index;
				console.log('点击'+index);
				changePic(index);
				inter();
			}
		}
		//换图片
		function changePic( index ){
			for(var j=0; j<oBigPic.length; j++){
				oBigPic[j].style.opacity = 0;
				oPicBtn[j].style.opacity = 0.4;
				oPicBtn[j].style.background = '#333'
				if(j==index){
					oBigPic[index].style.opacity = 1;
					oPicBtn[j].style.opacity = 1;
					oPicBtn[j].style.background = '#fa3778'
				}
				if(iNow==4){
					oPicBtn[j].style.opacity = 0.4;
					oPicBtn[j].style.background = '#333'
				}
			}
		}
		//定时器
		function inter(){
			timer = setInterval(function(){
				iNow++;
//				console.log('自动'+iNow);
				if(iNow>3){
					iNow = 0;
				}
				changePic(iNow);
			},2000)
		}
	}
	
	//动态创建
	var str = '';
	for(var k=0; k<checkInfo.length; k++){
		str +=`<a href="#" class="checkInfoBox">
					<div class="checkContent">
						<img src="${checkInfo[k].src}" class="checkImg"/>
						<div class="checkWord">
							<p class="checkWord01">${checkInfo[k].word01}</p>
							<p class="checkWord02">${checkInfo[k].word02}</p>
							<p class="checkWord03">${checkInfo[k].word03}</p>
							<span class="checkBtn">立即疯抢</span>
						</div>
					</div>
				</a>`;
	document.getElementById('checkInfo').innerHTML = str;
	}
	
	
	//动态创建01
	var str01 = '';
	for(var l=0; l<limitInfo.length; l++){
		str01 +=`<div id="limitInfo" class="c">
					<div class="limitLeft">
						<img src="${limitInfo[l].src}" class="limitImg"/>
						<i class="limit_count">
							<b>7.4
								<span>折</span>
							</b>
						</i>
					</div>
					<div class="limitRight">
						<div class="limitTime">剩余
							<span class="hour">00:</span>
							<span class="minute">00:</span>
							<span class="second">00</span>
						</div>
						<div class="limitWord">
							<div class="limitDetail">
								<span class="iconfont" id="quot">&#xe501;</span>
								${limitInfo[l].detail}
							</div>
							<div class="limitDeTitle">
								<b class="limitDeWord">香港特快直送 零扣关 包税</b>${limitInfo[l].word}
							</div>
							<div class="limitPrice">
								<div class="limitPriNew">
									<span class="limitPriSig">￥</span>
									<span class="limitPriNum">${limitInfo[l].num}</span>	
								</div>
								<div class="limitPriOld">
									<span class="limitOld">${limitInfo[l].old}</span>
									<span class="limitLine"></span>
								</div>
							</div>
							
						</div>
						<div class="limitBottom">
							<div class="limitSold">
								${limitInfo[l].sold}
							</div>
							<span class="limitBuy">马上抢</span>
						</div>
					</div>
				</div>`;
	document.getElementById('limitBox').innerHTML = str01;
	}
	
	
	//倒计时
	var h,m,s;
//	var h = document.getElementsByClassName('hour');
//  var m = document.getElementsByClassName('minute');
//  var s = document.getElementsByClassName('second');
    var now = new Date();
    var end = new Date(2019,00,20,24,30,50);
//  var elapse = Math.floor((end - start) / 1000);
//  var seconds = elapse % 60 ;
//  var minutes = Math.floor(elapse / 60) % 60;
//  var hours = Math.floor(elapse / (60 * 60)) % 24;
	var hours = Math.abs(now.getHours()-end.getHours());
	var minutes = Math.abs(now.getMinutes()-end.getMinutes());
	var seconds = Math.abs(now.getSeconds()-end.getSeconds());
	setInterval(function () {
    	seconds--;
    	if(seconds<0){
    		minutes = minutes-1;
    		seconds = 60;
    	}
    	if(minutes<0){
    		hours = hours-1;
    		minutes = 60;
    	}
    	for(var tt=0;tt<10;tt++){
			h = document.getElementsByClassName('hour')[tt];
	    	m = document.getElementsByClassName('minute')[tt];
	    	s = document.getElementsByClassName('second')[tt];
	    	h.innerHTML = hours+':';
        	m.innerHTML = minutes+':';
   			s.innerHTML = seconds;
   			if(seconds<10){
	   			var sec = '0'+seconds;
	   			s.innerHTML = sec;
	   		}
	   		if(minutes<10){
	   			var min = '0'+minutes+':';
	   			m.innerHTML = min;
	   		}
	   		if(hours<10){
	   			var hou = '0'+hours+':';
	   			h.innerHTML = hou;
	   		}
		}
//      console.log(hours,minutes,seconds)
    }, 1000)	
    
   
   //动态创建02
	var str02 = '';
	for(var n=0; n<newInfo.length; n++){
		str02 +=`<div class="newInfo">
					<div class="newPic">
						<img src="${newInfo[n].img}" class="newImg"/>
						<img src="img/index/new.png" class="new"/>
						<div class="newBrand">
							<img src="${newInfo[n].brandicon}"/>
							<span class="brand">${newInfo[n].brand}</span>
						</div>
					</div>
					<div class="newWord">
						<b class="limitDeWord">${newInfo[n].b}</b>
						${newInfo[n].word}
					</div>
					<div class="newPrice">
						<span class="newSign">￥</span>
						<span class="newNum">${newInfo[n].num}</span>
						<span class="newOld"><del>${newInfo[n].old}</del></span>
					</div>
				</div>`;
	document.getElementById('newBox').innerHTML = str02;
	}
	
	//吸顶&&左侧边栏
	var oTopNav = document.getElementById('topNav');
	var oBottomNav = document.getElementById('bottomNav');
	var bottomDis = oBottomNav.offsetTop;
	var oCheck = document.getElementById('must_check');
	var oLimit = document.getElementById('limited_offer');
	var oSold = document.getElementById('sold_rank');
	var oNew = document.getElementById('new_arrival');
	var oLeft = document.getElementById('leftNav');
	var checkDis =  oCheck.offsetTop;
	var limitDis = oLimit.offsetTop;
	var soldDis = oSold.offsetTop;
	var newDis = oNew.offsetTop;
	
	var oLeftli = document.getElementsByClassName('leftLi');
	var oLook = document.getElementById('look');
	var oLookicon = document.getElementById('lookicon');
	var oBuy = document.getElementById('buy');
	var oBuyicon = document.getElementById('buyicon');
	var oNew = document.getElementById('new');
	var oNewicon = document.getElementById('newicon');
	var oRank = document.getElementById('rank');
	var oRankicon = document.getElementById('rankicon');
	document.onscroll = function(){
		var oDis = document.documentElement.scrollTop;
//		console.log(oDis);
		//左侧边栏
		if(oDis>checkDis){
			oLeft.style.position = 'fixed';
			oLeft.style.top = '50px';
		}else{
			oLeft.style.position = 'absolute';
			oLeft.style.top = '1042px';
		}
		//吸顶
		if(oDis>bottomDis){
			oTopNav.style.position = 'fixed';
			oTopNav.style.top = 0;
		}else{
			oTopNav.style.position = 'static';
		}
		//
		if(oDis<2970){
			oLeftli[0].style.backgroundColor = '#EC3E7D';
			oLeftli[1].style.backgroundColor = 'white';
			oLeftli[2].style.backgroundColor = 'white';
			oLeftli[3].style.backgroundColor = 'white';
			oLook.style.color = 'white';
			oLookicon.style.color = 'white';
			oBuy.style.color = '#3e3e3e';
			oBuyicon.style.color = '#3e3e3e';
			oNew.style.color = '#3e3e3e';
			oNewicon.style.color = '#3e3e3e';
			oRank.style.color = '#3e3e3e';
			oRankicon.style.color = '#3e3e3e';
		}
		else if(oDis>2970&&oDis<6800){
			oLeftli[0].style.backgroundColor = 'white';
			oLeftli[1].style.backgroundColor = '#EC3E7D';
			oLeftli[2].style.backgroundColor = 'white';
			oLeftli[3].style.backgroundColor = 'white';
			oLook.style.color = '#3e3e3e';
			oLookicon.style.color = '#3e3e3e';
			oBuy.style.color = 'white';
			oBuyicon.style.color = 'white';
			oNew.style.color = '#3e3e3e';
			oNewicon.style.color = '#3e3e3e';
			oRank.style.color = '#3e3e3e';
			oRankicon.style.color = '#3e3e3e';
		}
		else if(oDis>6800&&oDis<7500){
			oLeftli[0].style.backgroundColor = 'white';
			oLeftli[1].style.backgroundColor = 'white';
			oLeftli[2].style.backgroundColor = '#EC3E7D';
			oLeftli[3].style.backgroundColor = 'white';
			oLook.style.color = '#3e3e3e';
			oLookicon.style.color = '#3e3e3e';
			oBuy.style.color = '#3e3e3e';
			oBuyicon.style.color = '#3e3e3e';
			oNew.style.color = '#3e3e3e';
			oNewicon.style.color = '#3e3e3e';
			oRank.style.color = 'white';
			oRankicon.style.color = 'white';
		}
		else if(oDis>7500){
			oLeftli[0].style.backgroundColor = 'white';
			oLeftli[1].style.backgroundColor = 'white';
			oLeftli[2].style.backgroundColor = 'white';
			oLeftli[3].style.backgroundColor = '#EC3E7D';
			oLook.style.color = '#3e3e3e';
			oLookicon.style.color = '#3e3e3e';
			oBuy.style.color = '#3e3e3e';
			oBuyicon.style.color = '#3e3e3e';
			oNew.style.color = 'white';
			oNewicon.style.color = 'white';
			oRank.style.color = '#3e3e3e';
			oRankicon.style.color = '#3e3e3e';
		}
	}
	
}
