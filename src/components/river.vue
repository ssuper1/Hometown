<template>
		<el-backtop :right="10" :bottom="50" />
	<!-- 水平导航栏 -->
	<el-menu 
	 :class="{ 'sticky': isSticky }"
	:default-active="activeIndex"
	class="el-menu-demo" 
	mode="horizontal" 
	active-text-color="#a88c99"
	@select="handleSelect">
	  <el-menu-item index="/BaiMa" >白马寺</el-menu-item>
	  <el-menu-item index="/LongMen" >龙门石窟</el-menu-item>
	  <el-menu-item index="/LaoJun" >老君山</el-menu-item>
		<el-menu-item index="/river" style="background-color:skyblue;">洛河</el-menu-item>
	 <el-menu-item index="/"><img src="../assets/img/arrow-return-left.svg" alt="Bootstrap" width="20" ></el-menu-item>
	</el-menu>
	<div class="pic">
		<img src="../assets/河流/洛河.jpg"/>
	</div>
	<div class="page1">
		<div class="container1">		  
			<h1 class="display-4">洛河</h1>
			<p class="lead">
				洛河 ，古称雒水，洛水 ，黄河右岸重要支流。因河南境内的伊河为重要支流，
				亦称伊洛河 ，即上古时期河洛地区的洛水。<br/>
				洛河水利开发历史悠久。特别是河南省境内，《水经注·谷水注》称，西周时洛阳附近，已修有汤渠。唐代曾引伊、洛水灌溉地势较高的农田，
				是形成古代经济文化中心的重要地理条件。<br />
				洛河在中华文明的发展中占有重要地位，与黄河交汇为中心的地区被称为“河洛地区”，是华夏文明发祥地，河洛文化被称为中华民族的根文化。					
			</p>
			<p class="little"><small>源出陕西省渭南市华州区西南与蓝田县、临渭区交界的箭峪岭侧木岔沟（或陕西省洛南县洛源镇的龙潭泉 ），
				流经陕西省东南部及河南省西北部洛阳市境内，在河南省巩义市注入黄河。河道全长447公里，陕西境内河长129.8公里，
				河南境长366公里。流域总面积18881平方公里。
			</small></p>			
		</div>
	</div>
	<div class="page2">	
		<h2 class="display-4">水库工程</h2>
		<div class="dam row justify-content-center">			
			<div class="card" >
				<img src="../assets/河流/故县水库.jpg" class="card-img-top" alt="...">
				<div class="card-body">
					<h3 class="card-title">故县水库</h3>
					<p class="card-text">
						位于黄河支流洛河中游，在洛宁县故县村附近，是洛河干流第一个大型水库。
						控制流域面积5370平方公里，坝址处宽约120米。
						坝址河底高程449米（大沽高程，下同）。
						坝顶高程553米，从基坑底算起，坝高125米，坝顶宽10米，坝顶长315米，
						故县水库建成运用后，可将洛阳市洛河断面20年一遇洪水削去2000～5500立方米／秒；装机6万千瓦，
						初期年发电182亿度；另可改善滩地灌溉52万亩，发展高地灌溉50万亩；为洛阳供水5立方米／秒。
						黄河花园口站发生百年一遇洪水时，故县水库与三门峡、陆浑水库联合运用，可使北金堤滞洪区的分
						洪机率从70年变为90年使用一次。
					</p>
				</div>
			</div>			
			<div class="card" >
				<img src="../assets/河流/陆浑水库.jpg" class="card-img-top" alt="...">
				<div class="card-body">
					<h3 class="card-title">陆浑水库</h3>
					<p class="card-text">
						陆浑水库，位于嵩县境，是伊河干流唯一的大型水库，控制流域面积3492平方公里，大坝位于陆浑峡谷内，距洛阳市约60公里，
						1982年7月伊河中游发生大暴雨，入库最大流量达5285立方米／秒，库容达4.5亿立方米，水库最大泄量为820立方米／秒，
						水库削减洪峰85％，使下游洪水灾害大为减轻。1970年设计自陆浑水库直接引水灌地134万亩，称陆浑灌区。
						1975年建成灌溉洞及开挖总干渠后，东二干渠相继完工，但设计灌溉亩数并未达到。1978年实灌面积约达60万亩，
						此后多为30～40万亩。输水洞电站和灌溉洞电站每年总发电量为400～900万度。
					</p>
				</div>
			</div>			
		</div>
	</div>
	<div class="page3">
		<h2 class="display-4">美图欣赏</h2>
		<div class="picture-wall">
			 <img src="../assets/河流/竖屏.jpg" alt="404" class="pic pic1 fly-in-left ">
			 <img src="../assets/河流/落日.jpg" alt="404" class="pic pic2 fly-in-top ">
			 <img src="../assets/河流/紫云.jpg" alt="404" class="pic pic3 fly-in-left ">
			 <img src="../assets/河流/夜景.jpg" alt="404" class="pic pic4 fly-in-top ">
			 <img src="../assets/河流/灯塔.jpg" alt="404" class="pic pic5 fly-in-bottom ">

		</div>
	</div>
	
</template>

<script setup>
import { ref} from 'vue';
import { useRouter } from 'vue-router';
    const activeNames = ref(['1']);  
	const router = useRouter();
	    const activeIndex = ref('/home');	
	    const handleSelect = (index) => {
	      router.push(index);
	    };
  </script>

<style scoped>
/*===========================导航栏=========================*/	
.el-menu-demo{
	background-color: #cfefff; /* 根据需要调整背景色 */
}	
/*==================第三--精选图片===================*/	
.page3{
	background-color: #9bb4d5;
	width: 100%;
	height: auto;
	padding: 20px;	
	padding-bottom: 50px;
}		
.picture-wall {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 创建四列 */
  grid-template-rows: minmax(10px, 250px) minmax(10px, 250px) ; /* 创建2行 */
  gap: 10px; /* 网格项之间的间隙 */
  width: 100%;
  max-width: 100%; /* 根据需要调整最大宽度 */
  margin: 0 auto; /* 居中布局 */
  padding: 0 50px;
}
.picture-wall img{
	width: 100%;
	height: 100%;
	transition: transform 0.3s ease; /* 平滑过渡效果 */
	transform: translateY(0); /* 初始位置 */	
	border-radius: 10px; /* 边框圆角 */
}	
.picture-wall img:hover{
	transform: translateY(-10px); /* 鼠标悬停时向上移动 */
}
/* 为每张图片设置网格位置 */
.pic1 {
	/*1，2行，1列*/
	grid-column: 1; 
	grid-row:1/3; 

}

.pic2 {
	/*1行，2列*/
	grid-row: 1;
	grid-column: 2; 

}

.pic3 {
	/*2行，2列*/
  grid-column:  2/4; 
  grid-row: 2; 

}

.pic4 {
	/*1行，3，4列*/
  grid-column: 3/ 5; /* 第二列到第四列 */
  grid-row: 1; 

}

.pic5 {
	/*3行，3列*/
  grid-column: 4; /* 第二列 */
  grid-row: 2; /* 第三行 */

}


/*====================222222222222222222222222============================*/
.page2{
	background-color: #8abade;
	padding-top: 20px;
	background-image: url('../assets/河流/紫云.jpg');
	background-size: cover;
}	
.dam{
	display: flex;
	justify-content: center;
	height: auto;

}	
.page2 .card{
	margin: 20px;
	border-radius: 10px; /* 添加圆角 */
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); /* 添加阴影 */
	transition: transform 0.3s ease; /* 平滑过渡效果 */
	width: 400px;
}

.page2 .card img{
	height: 300px;
}
.page2 .card:hover{
	transform: translateY(-10px); /* 鼠标悬停时向上移动 */
}	
.row{
	max-width: 100%;/*否则会出现横向滚动条*/
}	
/*======================11111111111111111111111===========================================*/
.pic{
	height: auto;
}	
.pic img{
	width: 100%;
	height: 500px;
}
.page1{
	height: auto;
	padding: 20px ;
	background-color: #91bdcf;
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
}
.container1{
	background-color: aliceblue;
	margin: 20px;
	text-align: left;
	padding: 10px 20px;
	height: auto;
	max-width: 1000px;	
	border-radius: 10px; /* 添加圆角 */
}
 .little {
	  border-top: 1px dashed #ccc; /* 添加虚线边框 */
}




</style>