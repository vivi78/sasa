window.onload = function(){
	var str03 = '';
	for(var g=0; g<goodsInfo.length; g++){
		str03 +=`<li class="goodsInfo">
					<div class="infoFather">
						<a href="goodsDetails.html">
							<div class="infoSon">
								<div class="goodsPic">
									<img src="${goodsInfo[g].newImg}" class="newImg"/>
									<div class="goodsBrand">
										<img src="${goodsInfo[g].brandImg}" class="brandImg"/>
										<span class="brandWord">${goodsInfo[g].brandWord}</span>
									</div>
									<img src="${goodsInfo[g].goodsImg}"  class="goodsImg"/>
								</div>
								<div class="goodsPrice">
									<span class="discount">${goodsInfo[g].discount}</span>
									<span class="goodsNow">${goodsInfo[g].goodsNow}</span>
									<span class="goodsOld"><del>${goodsInfo[g].goodsOld}</del></span>
								</div>
								<div class="goodsDetail">
									<div class="detail01">
										<b class="detailB">香港特快直送 零扣关 包税  </b>${goodsInfo[g].detail01}
									</div>
									<p class="detail02">${goodsInfo[g].detail02}<font color="#EC3E7D">香水</font></p>
									<p class="detail03">${goodsInfo[g].detail03}</p>
									<div class="goodsTag">直降</div>
								</div>
								<div class="goodsBtn">
									<a href="#" class="btnA">
										<span class="btnSpan">加入购物车</span>
									</a>
								</div>
							</div>
						</a>
					</div>
				</li>`;
		document.getElementById('goodsBox').innerHTML = str03;
	}
}

