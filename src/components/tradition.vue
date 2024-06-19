<template>
	<el-backtop :right="10" :bottom="50" />
	<HistoryNavBar/>
	<div class="page1">
		<h1 >猜猜这些方言是什么意思</h1>
		<div class="container1">		
			<div class="list-left">				
				<div class="accordion" id="first"><!-- 第一组  手风琴-->
					
				  <div class="card">
				    <div class="card-header" id="headingOne"> 
				      <h2 class="mb-0">
				        <button class="btn btn-link "  data-toggle="collapse" data-target="#collapseOne">
				          将尖儿
				        </button>
				      </h2>
				    </div>				
				    <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#first"><!-- 第一组  -->
				      <div class="card-body">
				       —— 刚才
				      </div>
				    </div>
				  </div>
				  
				  <div class="card">
				    <div class="card-header" id="headingTwo">
				      <h2 class="mb-0"> <!-- mb 是 "margin-bottom" 的缩写    -->
				        <button class="btn btn-link   collapsed"  data-toggle="collapse" data-target="#collapseTwo"  >
				         阁气
				        </button>
				      </h2>
				    </div>
				    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#first">
				      <div class="card-body">
						——打架
				      </div>
				    </div>
				  </div>
				  
				  <div class="card">
				    <div class="card-header" id="headingThree">
				      <h2 class="mb-0">
				        <button class="btn btn-link   collapsed"  data-toggle="collapse" data-target="#collapseThree"  >
				          都那儿吧
				        </button>
				      </h2>
				    </div>
				    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#first">
				      <div class="card-body">
				        ——就那样吧
				      </div>
				    </div>					
				  </div>
				
					<div class="card">
					  <div class="card-header" id="headingFour">
					    <h2 class="mb-0">
					      <button class="btn btn-link   collapsed"  data-toggle="collapse" data-target="#collapseFour"  >
					        毒古夜儿
					      </button>
					    </h2>
					  </div>
					  <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#first">
					    <div class="card-body">
					      ——自己一个人
					    </div>
					  </div>
					</div>
				
					<div class="card">
					  <div class="card-header" id="headingFive">
					    <h2 class="mb-0">
					      <button class="btn btn-link   collapsed"  data-toggle="collapse" data-target="#collapseFive"  >
					       丝跟着
					      </button>
					    </h2>
					  </div>
					  <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#first">
					    <div class="card-body">
					      ——几个人一起
					    </div>
					  </div>
					</div>											
				</div>
			</div>
		 <!--  youyou   youyouyouyouyouyouyouyouyouyouyouyouyouyouyouyouyouyouyouyouyouyou-->	
			<div class="list-right">
				<div class="accordion" id="second">
			
				  <div class="card">
				    <div class="card-header" id="headingSix">
				      <h2 class="mb-0">
				        <button class="btn btn-link "  data-toggle="collapse" data-target="#collapseSix"  >
				         哥依人
				        </button>
				      </h2>
				    </div>
				    <div id="collapseSix" class="collapse " aria-labelledby="headingSix" data-parent="#second">
				      <div class="card-body">
				        ——讨厌人
				      </div>
				    </div>
				  </div>
				  
				  <div class="card">
				    <div class="card-header" id="headingSeven">
				      <h2 class="mb-0">
				        <button class="btn btn-link   collapsed"  data-toggle="collapse" data-target="#collapseSeven"  >
				        枯处了
				        </button>
				      </h2>
				    </div>
				    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#second">
				      <div class="card-body">
				        ——皱了
				      </div>
				    </div>
				  </div>
				  
				  <div class="card">
				    <div class="card-header" id="headingEight">
				      <h2 class="mb-0">
				        <button class="btn btn-link   collapsed"  data-toggle="collapse" data-target="#collapseEight"  >
				         小纯儿
				        </button>
				      </h2>
				    </div>
				    <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#second">
				      <div class="card-body">
				        ——麻雀
				      </div>
				    </div>
				  </div>
				  
				  <div class="card">
				    <div class="card-header" id="headingNine">
				      <h2 class="mb-0">
				        <button class="btn btn-link   collapsed"  data-toggle="collapse" data-target="#collapseNine"  >
				         鞋火
				        </button>
				      </h2>
				    </div>
				    <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#second">
				      <div class="card-body">
				        ——吆喝
				      </div>
				    </div>
				  </div>
				  
				  <div class="card">
				    <div class="card-header" id="headingTen">
				      <h2 class="mb-0">
				        <button class="btn btn-link   collapsed"  data-toggle="collapse" data-target="#collapseTen" >
				         第儿错
				        </button>
				      </h2>
				    </div>
				    <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#second">
				      <div class="card-body">
				        ——第二天早上
				      </div>
				    </div>
				  </div>
				  
				</div>
			</div>
		</div>
	</div>
	 <!--  /* 22222222222222222222222222222222222222222222222222222222 */	   -->
	<div class="page2">
		<div class="container2">
			<h1 >一座城就是一部文化史</h1>
			<div class="coffee-type-intro">
				<img src="../assets/传统文化/唐三彩人.jpg" alt="Coffee Type 2" class="intro-image">
				<div class="intro-text">
					<h2>洛阳唐三彩</h2>
					<p>
						唐三彩是指唐代俑器和陶器上的釉色而言。三彩是通称，并不只限于三种颜色。唐时多以红、绿、黄为主，故称“唐三彩”。实际上除以上三种颜色外，
						还有白、黑、兰、紫等颜色。唐代的这种艺术珍品最早是在洛阳发掘出来的，故有洛阳唐三彩之称。
					</p>
				</div>
			</div>
			<div class="coffee-type-intro">
				<img src="../assets/传统文化/洛阳宫灯.jpg" alt="Coffee Type 2" class="intro-image">
				<div class="intro-text">
					<h2>洛阳宫灯</h2>
					<p>
						洛阳宫灯，历史悠久，古朴典雅，具有浓厚的民族特点和地方特色。
						洛阳宫灯，品种繁多，常见的有白帽方灯、红纱园灯，走马灯、二龙戏珠灯等，尤以红灯最为有名。
						洛阳宫灯，造型优美，宜书宜画，撑合自如，易于保存。
						洛阳宫灯制作始于汉代，代代相传，至今仍很盛行。
					</p>
				</div>
			</div>
			<div class="coffee-type-intro">
				<img src="../assets/传统文化/杜康酒.jpg" alt="Coffee Type 2" class="intro-image">
				<div class="intro-text">
					<h2>杜康酒</h2>
					<p>
						史料记载，杜康酒是洛阳的传统名酒，也是全国的名牌酒。杜康是中国粮食酒的创造人，被誉为酒圣，距今已有3000多年。
						建安时期的曹操在《短歌行》中写道“何以解忧？唯有杜康。”
					</p>
				</div>
			</div>
		</div>
	</div>
	<!--  /* 3333333333333333333333333333333333333333333 */	   -->
	<div class="twopage page">	
		<h1 >洛阳古多土，风俗犹尔雅</h1>
		<div class="change">	 <!-- 只用声明是轮播图类即可    -->		
			<div id="carouselExampleControls" class="carousel slide"  data-ride="carousel"> <!-- 在页面加载时自动开始轮播图的自动播放    -->
				<div class="carousel-inner">
					
					<div class="carousel-item active">
						 <div class="card">
						   <img src="../assets/传统文化/关林春节庙会.jpg" class="card-img-top d-block w-80" alt="...">
						   <div class="card-body">
								 <h3 class="card-title">关林春节庙会</h3>
								 <p class="card-text">
									 洛阳关林是我国唯一“林、庙”合祀关公的古代经典建筑群，全国重点文物保护单位，国家AAAA级旅游景区。国家级非物质文化遗产地。
									关林春节庙会是集祭祀、歌舞、文娱、商贸于一体的中国传统民俗活动，千百年来，关公被视为忠义化身和道德榜样，受到民众的普遍敬仰，
									其忠义仁勇精神更是蕴含了中华民族的传统美德。
									洛阳关林是关羽的葬首之所，是品级最高、建庙最早的关庙，也是唯一的林、庙合一的古代经典建筑群。											 
								 </p>									
						   </div>
						</div>
					</div>
					 
					<div class="carousel-item ">
						 <div class="card">
						   <img src="../assets/传统文化/洛阳牡丹文化节2.jpg" class="card-img-top d-block w-80" alt="...">
						   <div class="card-body">
								 <h3 class="card-title">洛阳牡丹文化节</h3>
								 <p class="card-text">
									中国洛阳牡丹文化节前身为洛阳牡丹花会，始于隋代，距今已有1600多年历史。1983年，洛阳市政府牵头筹办了官方性质的赏花节会“牡丹花会”。2008年入选国家级非物质文化遗产名录。 
									2010年11月，经国务院、国家文化部正式批准升格为国家级节会，更名为“中国洛阳牡丹文化节”。
									中国洛阳牡丹文化节是一个融赏花观灯，旅游观光，经贸合作与交流为一体的大型综合性经济文化活动。
									它已经成为洛阳发展经济的平台和展示城市形象的窗口，洛阳走向世界的桥梁和世界了解洛阳的名片。
								 </p>	
						   </div>
						</div>
					</div>		 
					
					<div class="carousel-item ">
						 <div class="card">
						   <img src="../assets/传统文化/河洛大鼓.jpg" class="card-img-top d-block w-80" alt="...">
						   <div class="card-body">
								 <h3 class="card-title">河洛大鼓</h3>
								 <p class="card-text">
									河洛大鼓，俗称“说书”，河南传统地方曲种之一。
									河洛大鼓是一种以说、唱为艺术表演手段，叙述故事、塑造人物、表达思想感情、歌唱社会生活的传统音乐。河洛大鼓，起源于清末民初，是在洛阳琴书的基础上发展起来的。 [21]其演唱艺术形式有十一种词牌，最具代表性的传统曲目有《刘公案》、《双打擂》、《大红袍》、《大八义》、《小八义》等。
									河洛大鼓发源于河南偃师 [1]，兴于巩义，流行于洛阳、孟津、登封等地。2006年5月20日，河洛大鼓经国务院批准列入第一批国家级非物质文化遗产名录。 											 
								 </p>									
						   </div>
						</div>
					</div>		 
					
					<div class="carousel-item ">
						 <div class="card">
						   <img src="../assets/传统文化/洛阳牡丹灯会.jpg" class="card-img-top d-block w-80" alt="...">
						   <div class="card-body">
								 <h3 class="card-title">洛阳牡丹灯会</h3>
								 <p class="card-text">
									 洛阳牡丹灯会是一种古老的民俗文化活动。正月十五元宵节，民间有观赏花灯的习俗。灯会始于汉，兴于唐，盛于宋。
									彩灯文化是中国民间一项重要的传统习俗和文化活动。作为中华文明发源地的古都洛阳，彩灯文化更是源远流长，久负盛名。东汉年间，洛阳已经有了颇具规模的“灯节”，到了公元610年，
									隋炀帝于正月十五在洛阳端门以外，建国门以内沿街搭起彩绘戏棚，“张灯结彩，火树银花”。 	
																			 
								 </p>
							
						   </div>
						</div>
					</div>
															 
				</div>
				<button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
					 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					 <span class="sr-only">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
					 <span class="carousel-control-next-icon" aria-hidden="true"></span>
					 <span class="sr-only">Next</span>
				</button>
			</div>
		</div>	
	</div>
</template>

<script setup>
import { ref} from 'vue';
import HistoryNavBar from './HistoryNavBar.vue';
	
</script>

<style scoped>
/* 3333333333333333333333333333333333333333333 */		
/*===========================2=================================*/
.twopage{
	padding: 20px;
	background-color: antiquewhite;
	background-image: url("../assets/传统文化/插画.jpg");
	background-size: cover;
	background-position: center;
}
.change{
	width: 80%;
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;
}
.change .card{
	height: 650px;
	border-radius: 10px; /* 边框圆角 */
	margin: 20px;
}
.twopage .card-body{
	background-image: linear-gradient(45deg, #d3eeff, #c6f1fe);
}	
	
/*====================222222222222222222222222============================*/
.page2{
	padding: 20px;
	display: flex; 
	justify-content: center;
	background-color: beige;
}
.page2 h1{
	margin: 20px;
}

.coffee-type-intro {
    margin-bottom: 20px; /* 咖啡种类介绍之间的间距 */
	display: flex; 
	 border-bottom: 1px solid #ccc; /* 分割线 */
	 max-width: 800px;
	 text-align: left;
	 background-color: #9fccb4;
	 border-radius: 10px; /* 边框圆角 */
	 background-image: linear-gradient(45deg, #bdcc9f,#9fccb4 )
}

/*区域——————图片样式*/	
.intro-image {
  width: 40%; 
  margin-right: 20px; /* 图片与文字之间的间距 */

}
.intro-text h2 {
	margin-top: 20px;
}		
	
	
/*1111111111111111111111111111111111111111111111111111111111*/	
.page1{
	background-color: aliceblue;
	height: auto;
	padding: 20px;
}	
.container1{
	display: flex;
	justify-content: center;
	padding: 20px;
	background-color: #aed1da;
	margin: 30px 20%;
	border-radius: 10px;
}
	.list-left{
		margin-right: 100px;
		max-width: 40%;
	}
	.list-right{
		
		max-width: 40%;
	}
</style>