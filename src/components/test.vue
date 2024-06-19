<template>
	<el-carousel :interval="4000"  arrow="always" height="400px"> <!--自动切换间隔，箭头一直显示    -->
	  <!--  单个轮播项目   -->
	  <el-carousel-item v-for="item in images" :key="item"> <!--v-for指令，基于源数据images创建循环 -->
	    <img :src="item.url" alt="null" style="width: 100%; height: 100%; object-fit: cover;">
		 <!--  确保图片按比例缩放并覆盖整个容器区域   -->
	  </el-carousel-item>
	</el-carousel>

	<el-backtop :right="10" :bottom="50" />

	<div>
	    <!-- 水平导航栏 -->
	    <el-menu 
		 :class="{ 'sticky': isSticky }"
		:default-active="activeIndex"
	    class="el-menu-demo" 
	    mode="horizontal"  
	    @select="handleSelect"> <!--  mode：水平   -->
	      <el-menu-item index="/BaiMa">白马寺</el-menu-item>
	      <el-menu-item index="/LongMen" >龙门石窟</el-menu-item>
	      <el-menu-item index="/LaoJun">老君山</el-menu-item>
		  <el-menu-item index="/river">洛河</el-menu-item>
		  <el-menu-item index="/"><img src="../assets/img/arrow-return-left.svg" alt="Bootstrap" width="20" ></el-menu-item>
	    </el-menu>
		<div ref="targetDiv" class="target-div">
			<div class="page1">
				<div  class="left">
					<div class="left-contain1 left-contain">
						<h2>时间</h2>
						<p> 
							<el-col :span="7" > <!-- 基于24列的布局 ，这个列将占据栅格系统中的7列   -->
							  <el-statistic :value="outputValue1" suffix="年"/>							
							</el-col>
						</p>
					</div>
					
					<div class="left-contain2 left-contain">
						<h2>窟龛</h2>
						<p>
							<el-col :span="7">
							  <el-statistic :value="outputValue2" suffix="个"/>
							</el-col>
						</p>
					</div>
					
					<div class="left-contain3 left-contain" >
						<h2>造像</h2>
						<p>
							<el-col :span="9">
							  <el-statistic :value="outputValue3" suffix="尊"/>
							</el-col>
						</p>
					</div>
					
					<div class="left-contain4 left-contain">
						<h2 >碑刻题记</h2>
						<p>
							<el-col :span="7">
							  <el-statistic :value="outputValue4" suffix="品"/>
							</el-col>
						</p>
					</div>
				</div>
				
				<div class="right ">
					<div class="right-contain">
						<img src="../assets/龙门石窟/大佛.png" alt="404" class="intro-image">
						<div class="intro-text">
						   <h2>简介</h2>
						   <p>龙门石窟是中国最大、最精美、最具代表性的石窟之一，也是世界上营造时间最长的石窟。</p>
							  <p>龙门石窟的开凿始于北魏孝文帝迁都洛阳之际（公元493年），
							  又经十多个朝代的断续营造，长达400多年，直到清末才告结束。现存有窟龛2345个，造像10万余尊，
							  碑刻题记2800余品。</p>
						</div>
					</div>
					<div class="right-contain">
						<img src="../assets/龙门石窟/壁画.jpg" alt="404" class="intro-image">
						<div class="intro-text">
						   <h2>价值</h2>
						   <p>这里有大量的壁画、石雕和浮雕等，展示了我国古代艺术的各个层面和风格，
						   包括唐代花园式、北魏帝王式、晚唐气范式等多种装饰风格。
						   在石窟中，也可以看到佛教艺术的精髓和东方艺术的独特魅力。这些艺术创作，
						   反映了洛阳龙门石窟在不同时期的文化背景和时代精神，
						   对研究古代文化和艺术发展都有着极为重要的意义。
						   </p>
						</div>
					</div>			
					<div class="right-contain">
						<img src="../assets/龙门石窟/花饼.webp" alt="404" class="intro-image">
						<div class="intro-text">
						   <h2 >历史</h2>
						   <p>龙门地区的石窟始凿于北魏，盛于唐，终于清末。10多个朝代陆续营造长达1400余年，是世界上营造时间最长的石窟
						   其中于公元5世纪末至8世纪中叶最为兴盛，是中国石窟艺术史上早期后段和中期阶段的典范，表现出印度文化与中国文化融合的特点
						   </p>
						</div>
					</div>			
					<div class="right-contain">
						<img src="../assets/龙门石窟/世界遗产.webp" alt="404" class="intro-image">
						<div class="intro-text">
						   <h2>荣誉</h2>
						   <p>2000年11月龙门石窟列入《世界遗产名录》。
							入选理由：
							人类艺术创造力的杰出表现、
							是对悠久历史的艺术形式的完美展现、
							是对中国唐朝高度的文化水平和成熟的社会的展现，代表了中国石刻艺术的最高峰。
						   </p>
						</div>
					</div>					
				</div>
			</div>
		<!--  =================第二页========================================   -->
			<div class="page2">				
				<h2>著名景点</h2>				
				<div class="page2-contain  ">	
					<div class="card ">
						<img src="http://www.lmsk.cn/UploadFiles/image/Fl200904061523056956.gif" class="card-img-top" alt="...">
						<div class="card-body text-left">
							<h3 class="card-title text-center">香山寺</h3>
							<p class="card-text  ">
								<br>
								香山因盛产香葛而得名。香山寺微始建于北魏熙平元年（公元516年），唐垂拱三年（公元687年），印度来华高僧地婆诃罗（日照）葬于此，
								为安置其遗身重建佛寺。天授元年（公元690年），武则天在洛阳称帝，建立武周王朝，
								梁王武三思奏请，敕名“香山寺”。
							</p>
							<a href="#" class="btn btn-primary ">3D浏览</a>
						</div>			
					</div>
					
					<div class="card ">
						<img src="../assets/龙门石窟/白居易.webp" class="card-img-top" alt="..." >
						<div class="card-body text-left">
							<h3 class="card-title text-center">白园</h3>
							<p class="card-text  ">
								<br>
								唐代诗人白居易的墓园。 白居易，字乐天，晚年居住洛阳18年。一生清贫，喜酒善诗，在龙门修香山寺，开八节滩，对龙门山水十分眷恋，死后遵嘱葬于此。
								青谷区瀑布飞泻，池水荡漾，竹林清风，白莲飘香；乐天堂依山傍水，面对青谷，是诗人作诗会友之处，
								汉白玉塑像潇洒自然，静座山石之上，给人以深思明世之感。
							</p>
							<a href="#" class="btn btn-primary ">3D浏览</a>
						</div>			
					</div>
						
					<div class="card ">
						<img src="http://5b0988e595225.cdn.sohucs.com/images/20191025/dbe477f9ab474031be73675bde74d014.jpeg" class="card-img-top" alt="..." style="height: 216px;">
						<div class="card-body text-left">
							<h3 class="card-title text-center">宾阳洞</h3>
							<p class="card-text  ">
								<br>
								“宾阳”意为迎接出生的太阳。宾阳三洞开凿于北魏时期,
								宾阳中洞内为马蹄形平面，穹窿顶，中央雕刻重瓣大莲花构成的莲花宝盖，宾阳中洞莲花周围是八个伎乐天和两个供养天人。它们衣带飘扬，迎风翱翔，姿态优美动人。
								它们反映了宫廷的佛事活动，刻划出了佛教徒虔诚、严肃、宁静的心境，代表了当时生活风俗画的高度发展水平。
							</p>
							<a href="https://www.lmsk.org.cn/home/vr.html" class="btn btn-primary ">3D浏览</a>
						</div>			
					</div>    
				</div>
			</div>
			<!--  =================第三页--精选图片·========================================   -->
			<div class="page3">
				<h2>精选图片</h2>
				<div class="picture-wall">
					 <img src="../assets/龙门石窟/北壁立佛.jpg" alt="404" class="pic pic1 fly-in-left ">
					 <img src="../assets/龙门石窟/西南.jpg" alt="404" class="pic pic2 fly-in-top ">
					 <img src="../assets/龙门石窟/西北.jpg" alt="404" class="pic pic3 fly-in-left ">
					 <img src="../assets/龙门石窟/夜景.jpeg" alt="404" class="pic pic4 fly-in-top ">
					 <div class="videoPlay pic pic5 fly-in-bottom">						
						<video controls>
						  <source src="../assets/龙门石窟/郭.mp4" type="video/mp4">					  
						</video>		
					</div>
					 <img src="../assets/龙门石窟/正壁.jpg" alt="404" class="pic pic6 fly-in-bottom ">
					 <img src="../assets/龙门石窟/飞天.jpg" alt="404" class="pic pic7 fly-in-right ">
					 <img src="../assets/龙门石窟/正壁坐佛.jpg" alt="404" class="pic pic8 fly-in-right ">
				</div>
			</div>

		</div>
<!--  =================页脚·========================================   -->
		<div id="serve">
			<div class="container">
				<ul class="footer-links">
				  <li><a href="https://www.lmsk.org.cn/home/"><img src="../assets/img/house.svg" alt="404">访问官网</a></li>
				  <li><a href="https://cn.bing.com/search?q=%E9%BE%99%E9%97%A8%E7%9F%B3%E7%AA%9F&qs=n&form=QBRE&sp=-1&lq=0&pq=%E9%BE%99%E9%97%A8%E7%9F%B3%E7%AA%9F&sc=10-4&sk=&cvid=BE6F5C83954C4D23AAAFB990B46C4ED0&ghsh=0&ghacc=0&ghpl="><img src="../assets/img/geo-alt.svg" alt="wechat" >查看地图</a></li>
				  <li><a href="https://baike.baidu.com/item/%E9%BE%99%E9%97%A8%E7%9F%B3%E7%AA%9F/274">
				  <img src="../assets/img/google.svg" alt="wechat" >前往百科</a></li>
				  <li><a href="#" class="wechat-link"><img src="../assets/img/telephone.svg" alt="wechat" >联系我们</a></li>
				</ul>
				<ul class="footer-links">
				  <li><a href="https://tse1-mm.cn.bing.net/th/id/OIP-C.R6saa8ETYwKjtAlS2jHM1QAAAA?rs=1&pid=ImgDetMain"><img src="../assets/img/wechat.svg" alt="wechat">微信公众号</a></li>
				  <li><a href="https://tse1-mm.cn.bing.net/th/id/OIP-C.R6saa8ETYwKjtAlS2jHM1QAAAA?rs=1&pid=ImgDetMain"><img src="../assets/img/tiktok.svg" alt="wechat" >抖音</a></li>
				  <li><a href="https://tse1-mm.cn.bing.net/th/id/OIP-C.R6saa8ETYwKjtAlS2jHM1QAAAA?rs=1&pid=ImgDetMain"><img src="../assets/img/sina-weibo.svg" alt="wechat" >微博</a></li>
				  <li><a href="https://tse1-mm.cn.bing.net/th/id/OIP-C.R6saa8ETYwKjtAlS2jHM1QAAAA?rs=1&pid=ImgDetMain"><img src="../assets/img/twitter.svg" alt="wechat" >Twitter</a></li>
				</ul>		
			</div>
		</div>
	<footer style="background-color: aliceblue;">
	  版权所有 © 2024物联网221史帅鹏
	</footer>
	</div>	
	
</template>


<style scoped>

/*=====================轮播图===================*/	
.el-carousel__item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片能够覆盖整个轮播图项 */
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/*===========================导航栏=========================*/	
.el-menu-demo{
	background-color: #cfefff; /* 根据需要调整背景色 */
}
/* 添加一个类，用于实现吸顶效果 */
.sticky {
  position: fixed;/* 会相对于浏览器窗口进行定位，即使滚动页面，该元素也会保持在指定的位置不动。 */
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #e5e7ff; /* 根据需要调整背景色 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}
/*=====================第一主页===================*/	
.page1 {
	background-color: #99a9bf;
	display: flex;	/* 弹性容器 */
	height: auto;
	padding: 20px;
	
}
/*==============左===========*/	
.left{
  flex: 1;
  background-color: whitesmoke;
  padding-top: 20px;
 height: 550px;
  font-family: 'Arial', sans-serif; 
border-radius: 10px 0  0 10px;
box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
}

/*文字位置*/
.left p {
	display: flex;
	justify-content: center; /* 水平居中 */
	font-size: 25px;
	animation: numberGrow 3s ease forwards; /* 持续时间、缓动函数、填充模式 */
	font-family: 'youyuan';
}

.left h2{
  color: #7c8f83;
}


/* 数字动画的关键帧 */
@keyframes numberGrow {
  from {    
    transform: translateY(-20px);
  }
  to {  
    transform: translateY(0);
  }
}

/*==============右===========*/	
.right {
  flex: 2.5;
    max-height: auto; /* 最大高度 */
	padding: 20px;
	background-color: white;
	border-radius: 0 8px 8px 8px; /* 边框圆角 */	  
}

.right-contain {
    margin-bottom: 20px; 
	display: flex; 
	text-align: left;

}
/*区域——————图片样式*/	
.intro-image {
  width: 20%; 
  margin-right: 20px; /* 图片与文字之间的间距 */
  border-radius: 10px; /* 边框圆角 */
}

.right-contain p{
	text-indent: 2em;
	 margin-bottom: 0;
}
/*============================第二=========================*/	

.page2{
	justify-content: center; /* 水平居中 */
	background: linear-gradient(to right, #b9d3e6, #b6cbe6); /* 线性渐变背景 */
	width: 100%;
	height: auto;
	padding: 20px;	
}
.page2-contain {
	display: flex;
	justify-content: center; /* 水平居中 */
}

.card{
	max-height: auto;
	 width: 18rem;
	  margin:10px; /* 上下左右边距 */
	  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
	transition: transform 0.3s ease; /* 平滑过渡效果 */
	transform: translateY(0); /* 初始位置 */	
}
.card:hover{
	transform: translateY(-10px); /* 鼠标悬停时向上移动 */
}
/*==================第三--精选图片===================*/
.page3{
	background-color: #99a9bf;
	width: 100%;
	height: auto;
	padding: 20px;	
	padding-bottom: 50px;
}	
.picture-wall {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 创建四列 */
  grid-template-rows: minmax(10px, 250px) minmax(10px, 250px) minmax(10px, 280px); /* 创建三行 */
  gap: 10px; /* 网格项之间的间隙 */
  width: 100%;
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

video {
  border: 1px solid #ccc; /* 举例：给视频添加边框 */
  border-radius: 10px; /* 举例：给视频添加圆角 */
  max-width: 100%;
  height: auto;
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
  grid-column: 2; 
  grid-row: 2; 

}

.pic4 {
	/*1行，3，4列*/
  grid-column: 3/5 ; /* 第二列到第四列 */
  grid-row: 1; 

}

.pic5 {
	/*3行，1,2列*/
  grid-column: 1/3; /* 第一列 */
  grid-row: 3; /* 第三行 */

}

.pic6{
	/*2，3行，3列*/
  grid-column: 3; /* 第二列 */
  grid-row: 2/4; /* 第三行 */

}

.pic7{
	/*3行，3列*/
  grid-column: 4; /* 第二列 */
  grid-row: 2; /* 第三行 */

}

.pic8{
	/*3行，4列*/
  grid-column: 4; /* 第二列 */
  grid-row: 3; /* 第三行 */

}

/* 图片动画类 */
.fly-in-left {
  animation: flyInFromLeft 1s ease-out;
}

.fly-in-right {
  animation: flyInFromRight 1s ease-out;
}

.fly-in-top {
  animation: flyInFromTop 1s ease-out;
}
.fly-in-bottom {
  animation: flyInFromBottom 1s ease-out;
}
/*=========动画=============*/
@keyframes flyInFromLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);   
  }
}

@keyframes flyInFromRight {
  from {
    transform: translateX(100%);    
  }
  to {
    transform: translateX(0);   
  }
}

@keyframes flyInFromTop {
  from {
    transform: translateY(-100%);    
  }
  to {
    transform: translateY(0);  
  }
}
@keyframes flyInFromBottom {
  from {
    transform: translateY(100%);    
  }
  to {
    transform: translateY(0);   
  }
}

/*=====================服务==================*/	
#serve{
	height: 120px;
	background-color: #b8d4ff;
	padding: 20px;

}

.footer-links img{
	 width:22px ;
	 height:22px;
	 margin-right: 5px;
}
/* 将footer-links的display属性设置为flex，实现水平排列 */
.footer-links {
  list-style-type: none; /* 移除项目符号 */
  margin: 0;
  padding: 10px;
  display: flex; /* 使用弹性盒子布局 */
  justify-content: center; /* 如果需要，水平居中对齐 */
  align-items: center; /* 垂直居中对齐 */
}

.footer-links li a {
  text-decoration: none; /* 移除下划线 */
  padding: 10px; 
  color: #000; /* 设置链接颜色 */
}

/* 添加悬停效果 */
.footer-links li a:hover {
  text-decoration: underline; /* 鼠标悬停时添加下划线 */
}

</style>





<script setup>
import { ref, onMounted, onBeforeUnmount , nextTick } from 'vue';
import { ElCarousel, ElCarouselItem } from 'element-plus';
import { useRouter } from 'vue-router';
import { useTransition } from '@vueuse/core'
    const activeNames = ref(['1']);
    const images = ref([
      // 您的图片URL数组
      { url: 'https://img.zcool.cn/community/01ba4d5e295427a8012165188f8345.jpg@3000w_1l_0o_100sh.jpg' },
      { url: 'https://youimg1.c-ctrip.com/target/0102b120003onry5869DA.jpg' },
      { url: 'https://youimg1.c-ctrip.com/target/100e1f000001gt14r2B1F_D_10000_1200.jpg?proc=autoorient' },
      { url: 'https://img.zcool.cn/community/01b28a59afc604a801211d2563ba28.jpg@1280w_1l_2o_100sh.jpg' },
      { url: 'http://p0.itc.cn/images01/20200518/becdabb014614b38bdc242082c18ea9b.jpeg' },
      // ... 更多图片
    ]);
	//跳转
	const router = useRouter();
	const activeIndex = ref('/LongMen');
	

	const handleSelect = (key, keyPath) => {
	      router.push(key);
	    };
//=================================================	
	    const isSticky = ref(false); // 导航栏吸顶状态
	    const targetDiv = ref(null); // 触发吸顶效果的元素
	

  const handleScroll = () => {
        if (targetDiv.value) {
          const targetTop = targetDiv.value.offsetTop;
          const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          isSticky.value = scrollPosition >= targetTop;
        }
      };
  
//==================动态数字===========================	
const source1 = ref(0)
const outputValue1 = useTransition(source1, {
  duration: 1000,
})

const source2 = ref(0)
const outputValue2 = useTransition(source2, {
  duration: 1000,
})

const source3 = ref(0)
const outputValue3 = useTransition(source3, {
  duration: 1000,
})

const source4 = ref(0)
const outputValue4 = useTransition(source4, {
  duration: 1000,
})

// 假设这是获取数据的异步操作
setTimeout(() => {
  source1.value = 1400 // 更新第一个数字
  source2.value = 2345 // 更新第二个数字
  source3.value = 100000 // 更新第一个数字
  source4.value = 2800 // 更新第二个数字
}, 1000)
//=================================================			
 onMounted(() => {
        window.addEventListener('scroll', handleScroll);
		
		
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
		
	
      });
//=================================================		
	 
  </script>
