<template>
	<el-backtop :right="10" :bottom="50" />
	<HistoryNavBar/>
	<!-- /*========第1页===========================*/  -->
	<div class="page1">
		<div class="container1">
			<div class="intro">		  
				<h1 class="display-4">寻味洛阳</h1>
				<p class="lead">		 <!--  字体大小更大，行高更宽松，从而在视觉上更加突出。   -->
					洛阳，千年古都，美食文化丰富。十大必吃美食包括洛阳水席、不翻汤、烫面角、烩菜、牛肉汤、浆面条、果子油茶、胡辣汤、油酥烧饼和牡丹酥。品尝这些美食，可感受古都的韵味与地道风味。
				</p>
				<p><small>洛阳美食，既有宫廷御膳的精致典雅，又有市井小吃的淳朴热情。这份洛阳十大必吃美食全攻略，旨在引导您深入古都的美食腹地，一尝千年古都的独特韵味与地道风味。无论您是历史文化的追寻者，还是美食探索的爱好者，都请带上这份美食指南，一同在洛阳的美食地图上留下难忘的味蕾印记。</small></p>			
			</div>
		</div>
		<div class="showPic row  justify-content-center text-left">		
			<div class="card" style="width: 20rem;">
			  <img src="../assets/美食/水席.webp" class="card-img-top" alt="...">
			  <div class="card-body">
			    <h3 class="card-title">洛阳水席</h3>
			    <p class="card-text">
				非遗瑰宝：洛阳水席，作为国家级非物质文化遗产，堪称洛阳美食的瑰宝。
				它起源于唐代，至今已有千余年历史，以“二十四道菜”著称，冷热交错，汤水不断，
				寓意连绵不绝、富贵吉祥。
				</p>		    
			  </div>
			</div>
			<div class="card" style="width: 20rem;">
			  <img src="../assets/美食/不翻汤.webp" class="card-img-top" alt="...">
			  <div class="card-body">
			    <h3 class="card-title">不翻汤</h3>
			    <p class="card-text">
					洛阳不翻汤，这道源自清代的民间小吃，以其独特的制作工艺和酸辣醒胃的口感，
					深受食客喜爱。薄饼置于沸汤之上，神奇的是饼虽翻滚而不翻面，故得此名。
					汤底醇厚，配料丰富，入口酸辣适中，令人回味无穷。
				</p>
			  </div>
			</div>
			<div class="card" style="width: 20rem;">
			  <img src="../assets/美食/浆面条.jpg" class="card-img-top" alt="...">
			  <div class="card-body">
			    <h3 class="card-title">浆面条</h3>
			    <p class="card-text">
					市井风味：洛阳浆面条，选用发酵后的绿豆浆作为汤底，搭配黄豆、芹菜丁、韭菜花等配料，酸香适口，独具特色。
					这道朴实无华的面条，承载着洛阳百姓的生活气息与乡土情怀。
				</p>
			  </div>
			</div>
			<div class="card" style="width: 20rem;">
			  <img src="../assets/美食/烫面角.webp" class="card-img-top" alt="..." >
			  <div class="card-body">
			    <h3 class="card-title">烫面角</h3>
			    <p class="card-text">
					百年名点：新安烫面角，诞生于民国时期的洛阳新安县，已有百年历史。选用优质面粉烫制面皮，包裹鲜美肉馅，皮薄馅足，口感鲜香，是品尝洛阳地方特色面点的不二之选。
				</p>
			  </div>
			</div>
			<div class="card" style="width: 20rem;">
			  <img src="../assets/美食/烩菜.webp" class="card-img-top" alt="...">
			  <div class="card-body">
			    <h3 class="card-title">洛阳烩菜</h3>
			    <p class="card-text">
					家常滋味：洛阳烩菜，作为洛阳人家餐桌上的常客，集多种蔬菜、肉类于一体，炖煮成一锅色香味俱全的家常美味。其选材丰富、口味醇厚，体现了洛阳人对美食的包容性与对生活的热爱。
				</p>
			  </div>
			</div>
			<div class="card" style="width: 20rem;">
			  <img src="../assets/美食/牛肉汤.webp" class="card-img-top" alt="...">
			  <div class="card-body">
			    <h3 class="card-title">牛肉汤</h3>
			    <p class="card-text">
					汤饮之王：洛阳牛肉汤，选用新鲜牛骨熬制而成，汤色清亮，香气浓郁，肉质酥烂，营养丰富。不论是寒冬清晨，还是炎炎夏日，一碗热气腾腾的牛肉汤总能带给食客无尽的暖意与满足
				</p>
			  </div>
			</div>
										
			<div class="card" style="width: 20rem;">
			  <img src="../assets/美食/牡丹酥.webp" class="card-img-top" alt="...">
			  <div class="card-body">
			    <h3 class="card-title">牡丹酥</h3>
			    <p class="card-text">
					花城献礼：牡丹酥，作为洛阳这座“牡丹之城”的特色甜点，外形酷似盛开的牡丹花，内馅丰富多样，口感酥软，甜而不腻。品尝牡丹酥，不仅是味蕾的享受，更是对洛阳牡丹文化的诗意解读。
				</p>
			  </div>
			</div>
			
			<div class="card" style="width: 20rem;">
			  <img src="../assets/美食/果子油茶.webp" class="card-img-top" alt="...">
			  <div class="card-body">
			    <h3 class="card-title">果子油茶</h3>
			    <p class="card-text">
					油茶事实上是一种汤，把面放入锅中炒熟，加水打成面糊，再配上盐、芝麻、花生等调料。				
					果子是用面擀成的两片薄片做成的，再捏在一起，放入油中炸至金黄就可以食用了。一般把金黄的果子在油茶里浸泡一下再吃。
				</p>
			  </div>
			</div>
			<div class="card" style="width: 20rem;">
			  <img src="../assets/美食/胡辣汤.webp" class="card-img-top" alt="...">
			  <div class="card-body">
			    <h3 class="card-title">胡辣汤</h3>
			    <p class="card-text">
					地道小吃：洛阳胡辣汤，作为中原地区广受欢迎的传统小吃，以面粉、肉馅为主要原料，加入多种香辛调料调制而成。汤汁鲜辣适口，香气扑鼻，是洛阳人早餐桌上不可或缺的醒神佳肴。
				</p>
			  </div>
			</div>	
			<div class="card" style="width: 20rem;">
			  <img src="../assets/美食/油酥烧饼.webp" class="card-img-top" alt="...">
			  <div class="card-body">
			    <h3 class="card-title">油酥烧饼</h3>
			    <p class="card-text">
					酥香四溢：洛阳油酥烧饼，外酥内软，层次分明，香气浓郁。搭配一碗胡辣汤或豆腐脑，构成了洛阳人经典的早餐组合，简单却极具幸福感。
				</p>
			  </div>
			</div>								
		</div>				
	</div>
	<div class="page2">
		<div class="container2">
			<h1 class="display-4">三大人气美食街</h1>
			<div class="coffee-type-intro">
				<img src="../assets/美食/老城十字街.webp" alt="Coffee Type 2" class="intro-image">
				<div class="intro-text">
					<h2>老城十字街</h2>
					<p>
						洛阳最有名的美食街当属老城十字街，这里美食品种丰富，不仅可以品尝到地道的洛阳烧烤、涮牛肚、不翻汤，还可以吃到全国各地的小吃。
					</p>
				</div>
			</div>
			<div class="coffee-type-intro">
				<img src="../assets/美食/老城义勇街.webp" alt="Coffee Type 2" class="intro-image">
				<div class="intro-text">
					<h2>老城义勇街</h2>
					<p>义勇街虽不足500米，却是实实在在的美食街，深受洛阳当地人的喜爱。
						其中，义勇街炒鸡的大盘鸡、香的切糕是最受欢迎。此外，还有果子油茶、烩菜、卤肉等各式小吃。
						</p>
				</div>
			</div>
			<div class="coffee-type-intro">
				<img src="../assets/美食/西工小街.webp" alt="Coffee Type 2" class="intro-image">
				<div class="intro-text">
					<h2>西工小街</h2>
					<p>西工小街是洛阳老城的缩影。
						小街锅贴和小街天府是这里最具人气的餐馆。可以吃到小街锅贴、担担面、小笼包、过桥米线等美食。
						此外，丹珍汤圆、顾县肉合、方光宗胡辣汤、桥头排骨等也是小街的代表美食名店。
					</p>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script setup>
import { ref} from 'vue';
import HistoryNavBar from './HistoryNavBar.vue';

</script>

<style scoped>
/*======================11111111111111111111111===========================================*/
.page1{
	height: auto;
	padding: 20px 0 0 20px;
	background-image: url('../assets/老君山/渐变色背景.jpg');
	background-size: cover;
	background-position: center;
}
.container1{
	display: flex;
	justify-content: center;
}
.intro{
	background-color: aliceblue;
	margin-right: 20px;
	text-align: left;
	padding: 10px 20px;
	height: 300px;
	max-width: 1000px;	
	border-radius: 10px; /* 添加圆角 */
}
.page1 .row{
	max-width: 100%;/*否则会出现横向滚动条*/
}

.page1 .card{
	margin: 20px;
	border-radius: 10px; /* 添加圆角 */
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	 /*---阴影 水平偏移量  垂直偏移量  模糊半径  颜色是黑色（0, 0, 0） 0.3的透明度*/
	transition: transform 0.3s ease; /* 平滑过渡效果 ===动画效果的CSS属性 开始较慢，然后逐渐加快，最后又变慢*/
}

.page1 .card img{
	height: 200px;
}
.page1 .card:hover{
	transform: translateY(-10px); /* 鼠标悬停时向上移动 */
}
/*====================222222222222222222222222============================*/
.page2{
	padding: 20px;
	display: flex; 
	justify-content: center;
	background-color: aliceblue;
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
	 background-color: #a4bbcc;
	 border-radius: 10px; /* 边框圆角 */
}

/*区域——————图片样式*/	
.intro-image {
  width: 40%; 
  margin-right: 20px; /* 图片与文字之间的间距 */

}
.intro-text h2 {
	margin-top: 20px;
}	
</style>