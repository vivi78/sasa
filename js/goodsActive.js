window.onload = function(){
	var ga01 = '';
	for(var g1=0; g1<active01.length; g1++){
		ga01 +=`<li class="gaLi">
					<div class="infoFather">
						<div class="infoSon">
							<div class="goodsPic">
								<div class="goodsBrand">
									<img src="${active01[g1].brandImg}" class="brandImg"/>
									<span class="brandWord">${active01[g1].brandWord}</span>
								</div>
								<img src="${active01[g1].goodsImg}"  class="goodsImg"/>
							</div>
							<div class="goodsPrice">
								<span class="discount">${active01[g1].discount}</span>
								<span class="goodsNow">${active01[g1].goodsNow}</span>
								<span class="goodsOld"><del>${active01[g1].goodsOld}</del></span>
							</div>
							<div class="goodsDetail">
								<div class="detail01">
									<b class="detailB">香港特快直送 零扣关 包税  </b>${active01[g1].detail01}
								</div>
								<p class="detail02">${active01[g1].detail02}</p>
								<p class="detail03">${active01[g1].detail03}</p>
								<div class="goodsTag">${active01[g1].goodsTag}</div>
							</div>
							<div class="goodsBtn">
								<a href="#" class="btnA">
									<span class="btnSpan">加入购物车</span>
								</a>
							</div>
						</div>
					</div>
				</li>`;
		document.getElementById('ulOne').innerHTML = ga01;
	}
	
	var ga02 = '';
	for(var g2=0; g2<active02.length; g2++){
		ga02 +=`<li class="gaLi">
					<div class="infoFather">
						<div class="infoSon">
							<div class="goodsPic">
								<div class="goodsBrand">
									<img src="${active02[g2].brandImg}" class="brandImg"/>
									<span class="brandWord">${active02[g2].brandWord}</span>
								</div>
								<img src="${active02[g2].goodsImg}"  class="goodsImg"/>
							</div>
							<div class="goodsPrice">
								<span class="discount">${active02[g2].discount}</span>
								<span class="goodsNow">${active02[g2].goodsNow}</span>
								<span class="goodsOld"><del>${active02[g2].goodsOld}</del></span>
							</div>
							<div class="goodsDetail">
								<div class="detail01">
									<b class="detailB">香港特快直送 零扣关 包税  </b>${active02[g2].detail01}
								</div>
								<p class="detail02">${active02[g2].detail02}</p>
								<p class="detail03">${active02[g2].detail03}</p>
								<div class="goodsTag">${active02[g2].goodsTag}</div>
							</div>
							<div class="goodsBtn">
								<a href="#" class="btnA">
									<span class="btnSpan">加入购物车</span>
								</a>
							</div>
						</div>
					</div>
				</li>`;
		document.getElementById('ulTwo').innerHTML = ga02;
	}
	
	var ga03 = '';
	for(var g3=0; g3<active03.length; g3++){
		ga03 +=`<li class="gaLi">
					<div class="infoFather">
						<div class="infoSon">
							<div class="goodsPic">
								<div class="goodsBrand">
									<img src="${active03[g3].brandImg}" class="brandImg"/>
									<span class="brandWord">${active03[g3].brandWord}</span>
								</div>
								<img src="${active03[g3].goodsImg}"  class="goodsImg"/>
							</div>
							<div class="goodsPrice">
								<span class="discount">${active03[g3].discount}</span>
								<span class="goodsNow">${active03[g3].goodsNow}</span>
								<span class="goodsOld"><del>${active03[g3].goodsOld}</del></span>
							</div>
							<div class="goodsDetail">
								<div class="detail01">
									<b class="detailB">香港特快直送 零扣关 包税  </b>${active03[g3].detail01}
								</div>
								<p class="detail02">${active03[g3].detail02}</p>
								<p class="detail03">${active03[g3].detail03}</p>
							</div>
							<div class="goodsBtn">
								<a href="#" class="btnA">
									<span class="btnSpan">加入购物车</span>
								</a>
							</div>
						</div>
					</div>
				</li>`;
		document.getElementById('ulThree').innerHTML = ga03;
	}
}
