<template>
<div class="page-background ">	
	<div class="container">	
	  <div class="row">
		 <div class="col-md-9 text-left">
			  <!-- Bootstrap 使用一个12列的栅格系统，col-md-9 表示在中等尺寸屏幕上，该元素应占据9个列宽，剩余的3个列宽可用于其他元素或边距。    -->
			<div class="jumbotron" style="background-image: linear-gradient(to right, #f8eaff, #fefec8)">
				<h1 class="display-4">这里是，神都洛阳<br></h1>
				<p style="text-indent: 2em;">临黄河而知中国，临河洛而知华夏。洛阳，八大古都之一，丝绸之路、隋唐大运河在此交汇，十三个王朝的荣辱兴衰在此上演，五千年历史文明在此起源，
				历史文化名城.在这里可以造访丝绸之路的起点，也可寻觅河洛之根。这里有第一个王朝“夏”王朝，
				有三代之居“夏、商、周” ，是“河图洛书”的故乡，有105位帝王定鼎九州，是华夏民族的精神故乡，是“最早的中国” </p>
				<p><a class="btn btn-info" href="https://baike.baidu.com/item/%E6%B4%9B%E9%98%B3%E5%B8%82/6786279" 
				>Learn more</a></p>
			</div>						

			<div class="row ">
				<div class="col-md-6 col-lg-5" >
				  <div class="card" style="background-image: linear-gradient(45deg, #b8ff99, #d2fef2)" >				
					<div class="card-body text-left" >
					  <h2 class="card-title">走访山河寺宇</h2>
					  <p class="card-text ">
						你可艳羡于洛阳牡丹甲天下？<br>
						你可沉醉于酒祖杜康？<br>
						你可知道无数中原人的根？<br>
						你可翻阅过史书上夏商周王朝的故事？<br>
						你可行走于千年古都？<br>				
					  </p>
					  <router-link to="/LongMen" class="btn btn-success">了解更多</router-link>
					</div>
				  </div>			
				</div>
				
				<div class="col-md-6 col-lg-5 ">
				  <div class="card " style="background-image: linear-gradient(45deg, #bdabb0, #6a7d8c)">
					<div class="card-body text-left">
					  <h2 class="card-title">领略风土人情</h2>
					  <p class="card-text">
						  十三朝古都，地灵人杰，可曾听闻玄奘、赵匡胤、李隆基、司马炎...？<br>
						  文化之河汇聚，美食丰富多彩，可曾品尝过水席、胡辣汤、油酥烧饼、牡丹酥......？
					  </p>
					  <router-link to="/food" class="btn btn-dark">了解更多</router-link>
					</div>
				  </div>			
				</div>
				
				<div class="col-md-6 col-lg-5 ">
				  <div class="card" style="background-image: linear-gradient(45deg, #63b6ff, #9dfef0)">
					<div class="card-body text-left">
					  <h2 class="card-title">聆听教育之声</h2>
					  <p class="card-text">
						  洛阳，不止古都！高等学府如璀璨星辰，点缀着洛阳的教育星空。河南科技大学、洛阳师范学院、洛阳理工学院...
						 它们不仅是知识的殿堂，更是文化的熔炉。它们承载着洛阳的历史，也展望着未来。
					  </p>
					  <router-link to="/haust" class="btn btn-primary">了解更多</router-link>
					</div>
				  </div>			
				</div>
							
				<div class="col-md-6 col-lg-5 ">
				  <div class="card" style="background-image: linear-gradient(45deg, #ffb8b3, #fe7b7b)">
					<div class="card-body text-left">
					  <h2 class="card-title">探访行政之情</h2>
					  <p class="card-text">
						  洛阳市，简称“洛”，是河南省辖地级市、世界文化名城 、首批国家历史文化名城、国家区域性中心城市、
						  中原城市群副中心城市...700万人栖居于此，辖7区、7县、1开发区，面积15230平方千米。
					  </p>
					  <router-link to="/region" class="btn btn-danger">了解更多</router-link>
					</div>
				  </div>			
				</div>
				
			  </div>																		
			</div>
			
			<div class="col-sm" >			
			  <ul class="list-group" >			  
				<li class="list-group-item" ><a href="https://weathernew.pae.baidu.com/weathernew/pc?query=%E6%B2%B3%E5%8D%97%E6%B4%9B%E9%98%B3%E5%A4%A9%E6%B0%94&srcid=4982"><el-icon style="font-size: 20px;"><Sunny /></el-icon>今日天气</a></li>
				<li class="list-group-item"><a href="http://www.lyta.com.cn/guide/page"><el-icon style="font-size: 20px;"><Camera /></el-icon>洛阳旅游网</a></li>
				<li class="list-group-item"><a href="http://www.lyd.com.cn/"><el-icon style="font-size: 20px;"><ChatLineRound /></el-icon>今日头条</a></li>
			  </ul>
		
			</div>
							
		</div>
	</div>
	<div>
	<!-- ====================================悬浮============================= -->

	   <div class="floating-logo">
		 <img src="../assets/牡丹花都.jpg" alt="LuoYang" 
		  style=" width: 100px;height: 100px; ">
	   </div>
	</div>		
</div>  
</template>

<style scoped>
.page-background {
 background-image: url('https://pic3.zhimg.com/v2-8b209a75b864387074926a988b736c7d_r.jpg?source=1940ef5c');
 background-size: cover; /* 让背景图片铺满整个页面 */
}

.container{
	padding: 20px 0 20px 0;
}

.col-sm li{
	background-color: #8bd9f0;
}


.floating-logo {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  animation: float 5s ease-in-out infinite;/*名称，周期，慢-快-慢，无限循环*/
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>