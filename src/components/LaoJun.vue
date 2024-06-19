<template>
	
	<el-carousel :interval="4000"  arrow="always" height="400px">
	  <el-carousel-item v-for="item in images" :key="item">
		<img :src="item.url" alt="null" style="width: 100%; height: 100%; object-fit: cover;">
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
		active-text-color="#a88c99"
		@select="handleSelect">
		  <el-menu-item index="/BaiMa" >白马寺</el-menu-item>
		  <el-menu-item index="/LongMen" >龙门石窟</el-menu-item>
		  <el-menu-item index="/LaoJun" style="background-color:skyblue;">老君山</el-menu-item>
			<el-menu-item index="/river">洛河</el-menu-item>
		 <el-menu-item index="/"><img src="../assets/img/arrow-return-left.svg" alt="Bootstrap" width="20" ></el-menu-item>
		</el-menu>
		<div ref="targetDiv" class="target-div">
			<div class="page1">
				<div class="videoPlay">
					<h2 >云上天宫</h2>
					<video controls width="500" >
					  <source src="../assets/老君山/云顶之光.mp4" type="video/mp4">					  
					</video>		
				</div>
				<div class="right overflow-auto">
					<h2 >旅游资讯</h2>			
					<el-timeline style="max-width: 600px">
					    <el-timeline-item
					      v-for="(activity, index) in activities"
					      :key="index"
					      :icon="activity.icon"
					      :type="activity.type"
					      :color="activity.color"
					      :size="activity.size"
					      :hollow="activity.hollow"
					      :timestamp="activity.timestamp"
						
					    >
						<a :href="activity.url" class="activity-link">
					      {{ activity.content }}
						  </a>
					    </el-timeline-item>
					  </el-timeline>
				</div>
					
			</div>
			
			<!-- /*========第2页===========================*/  -->
			<div class="page3">
				<div class="text-center" style="width: 100%;">
					<h2>奇景一览</h2>	
				</div>
				<div class="showPic row  justify-content-center text-left">		
					<div class="card" style="width: 20rem;">
					  <img src="../assets/老君山/寨沟.jpg" class="card-img-top" alt="...">
					  <div class="card-body">
					    <h5 class="card-title">寨沟</h5>
					    <p class="card-text">
							区内总观赏面积16.8平方公里，主要有胜天湖、翠屏湾、黎花寨、洞天河、登天峡、腾龙峪六大部分景区组成。
						</p>		    
					  </div>
					</div>
					<div class="card" style="width: 20rem;">
					  <img src="../assets/老君山/十里画屏.jpg" class="card-img-top" alt="...">
					  <div class="card-body">
					    <h5 class="card-title">十里画屏</h5>
					    <p class="card-text">
							十里画屏又称石林，属花岗岩峰林地貌景观，19亿年前，这里发生了震撼宇宙的大陆造山运动，使得我们脚下这片原本完整的山体，成为了犬牙交错的滑脱峰林。
						</p>
					  </div>
					</div>
					<div class="card" style="width: 20rem;">
					  <img src="../assets/老君山/追梦谷.jpg" class="card-img-top" alt="...">
					  <div class="card-body">
					    <h5 class="card-title">追梦谷</h5>
					    <p class="card-text">
							追梦谷是一条人迹罕至的大峡谷，这里十里长峡原始次生林遮天蔽日，奇山秀水，因山水的绚烂、丛林的幽静，充满了梦幻之美而得名追梦谷。
						</p>
					  </div>
					</div>
					<div class="card" style="width: 20rem;">
					  <img src="../assets/老君山/云.webp" class="card-img-top" alt="..." >
					  <div class="card-body">
					    <h5 class="card-title">马鬃岭</h5>
					    <p class="card-text">
							云海出现时，放眼望去，云遮千里，雾锁万峰。犹如站在碧波万顷的汪洋大海之中，翠峰隐现似动若静
						</p>
					  </div>
					</div>
					<div class="card" style="width: 20rem;">
					  <img src="../assets/老君山/云景天路.jpg" class="card-img-top" alt="...">
					  <div class="card-body">
					    <h5 class="card-title">云景天路</h5>
					    <p class="card-text">
							游天路一步一景，步移景换，依栏俯视脚下绝壁万文，给人以腾空的感受，是老君山最精华最刺激的景区之一，
						</p>
					  </div>
					</div>
					<div class="card" style="width: 20rem;">
					  <img src="../assets/老君山/金顶道观群.jpg" class="card-img-top" alt="...">
					  <div class="card-body">
					    <h5 class="card-title">金顶道观群</h5>
					    <p class="card-text">
							金顶道观群由五母金殿、道德府、老君庙、亮宝台和玉皇顶五座建筑组成。全部采用明清皇家宫殿式建筑形式，特别是金殿、亮宝台、玉皇顶三座金顶打造，成为老君山道观群的亮点。
						</p>
					  </div>
					</div>									
				</div>				
			</div>
			
			
			 <!-- /*========第3页(page不要换)===========================*/  -->
			<div class="page2">
				<div >
					<h2>旅游指南</h2>
				</div>
				<div class="page2-contain">
					<div class="page2-left">
						<div class="list-group text-left">
						  <button type="button" class="list-group-item list-group-item-action "style="width: 90%;">
							<div class="d-flex w-100 justify-content-between">
							  <h5 class="mb-1">主线路一</h5>
							  <small>全程约7个小时</small>
							</div>
							<p class="mb-1">
								票务中心➡乘一级索道（中灵/云景）➡中天门➡步行上山➡十里画屏➡马鬃岭➡金殿➡返程
							</p>					   
						  </button>
						  <button type="button" class="list-group-item list-group-item-action " style="width: 90%;">
							<div class="d-flex w-100 justify-content-between">
							  <h5 class="mb-1">主线路二</h5>
							  <small>全程约5个小时</small>
							</div>
							<p class="mb-1">
								票务中心➡乘一级索道（中灵/云景）➡乘二级索道（峰林索道）➡十里画屏➡马鬃岭➡金殿➡返程
							</p>
						  </button>
						  <button type="button" class="list-group-item list-group-item-action " style="width: 90%;">
							<div class="d-flex w-100 justify-content-between">
							  <h5 class="mb-1">寨沟路线</h5>
							  <small>全程约2个小时</small>
							</div>
							<p class="mb-1">
								票务中心➡到达寨沟➡御竹林➡蛙鸣谷➡望佛石➡赶石瀑➡奇树林➡洞天瀑➡返程
							</p>
						  </button>
						  <button type="button" class="list-group-item list-group-item-action " style="width: 90%;">
							<div class="d-flex w-100 justify-content-between">
							  <h5 class="mb-1">追梦谷网红项目打卡路线</h5>
							  <small>全程约2个小时</small>
							</div>
							<p class="mb-1">
								票务中心➡到达追梦谷➡高空飞翔➡飞天魔毯➡步步惊心➡追梦丛林漂流➡返程
							</p>
						  </button>
						</div>
					</div>
					
					<div class="page2-right">
						<div class="demo-image__preview">
						  <el-image	
											  
							:src="page2Url"
							:preview-src-list="srcList"
							class="page2-right-img"
						  />
						</div>
						<div  class="tips text-left">
							<h4>一、索道运行时间：</h4>
							<p>
								索道运行时间为每日的8:00——18:30（特别提醒：因游览时间不足，索道15:30以后不再接待上行游客）
							</p>
							<p>
							<h4>二、穿衣指南：</h4>
								山区天气变化较快，昼夜温差大。山顶温度8—20度左右，夜间5度左右，有看日出的小伙伴建议穿保暖的棉服、冲锋衣。

							</p>	
							<p>
							<h4>三、夜游、住宿问题：</h4>
								为了游客安全，老君山暂时不支持夜游，想要看到日出日落，需要在山顶住宿。
								景区咨询热线：0379——66838888
							</p>					
						</div>					
					</div>
				</div>								
			</div>	
			 <!-- /*========第4页===========================*/  -->
			<div class="page4">
				<div class="connect text-left">
					<h2>河南老君山风景名胜区</h2>
					<br>
					<p>咨询电话：0379-66838888  </p>
					<p>邮箱：laojunshan2000@126.com</p>
					<p>微信服务号：老君山风景名胜区</p>
					<p>头条号：老君山景区</p>
					<p>抖音号：河南老君山风景名胜区</p>
				</div> 
				<div class="QR-code">
					<img src="../assets/老君山/微信公众号.png"/>
					<img src="../assets/老君山/抖音.png"/>
					<img src="../assets/老君山/快手.png"/>
				</div>
			</div>
		</div>
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #e5e7ff; /* 根据需要调整背景色 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}
/*==================================第一页===========================================*/	
.page1{
	display: flex;
	height: auto;
	overflow: hidden; /* 防止咖啡介绍区域溢出 */
}

/*=====================左===================*/	
.videoPlay {
	flex:3 ;
	padding: 20px;

	float: left; /* 使视频元素左浮动 */
	height: 350px;
	background-color: #9799bf;
}

video {
  border: 1px solid #ccc; /* 举例：给视频添加边框 */
  border-radius: 10px; /* 举例：给视频添加圆角 */
  max-width: 100%;
  height: auto;
}
.page1 h2 {
  text-align: left;
  border-bottom: 1px dashed #ccc; /* 添加虚线边框 */
}
/*=====================右侧===================*/	
.right{
	flex: 2;
	background-color: #dde2ff;
	padding: 20px ;
	height: 350px;
}
ul {
  list-style-type: none; /* 移除默认的项目符号 */
  padding: 0; /* 移除默认的内边距 */
  margin: 0; /* 移除默认的外边距 */
}

li {
  margin-bottom: 5px; /* 列表项之间的垂直间距 */
  padding-bottom: 5px; /* 列表项底部的内边距，为虚线留出空间 */
  border-bottom: 1px dashed #ccc; /* 添加虚线边框 */
}

li:last-child {
  border-bottom: none; /* 最后一个列表项不显示下边框 */
}
.activity-link {
  color: #333; /* 设置链接的默认颜色为深灰色 */
  text-decoration: none; /* 链接无下划线 */
}
.activity-link:hover {
  color: coral; /* 鼠标悬停时链接颜色变为蓝色 */
}
/*==================================第2次===========================================*/
.page2{	
	background-color: #a4c7cc;
	height: auto;	
	padding: 20px;
}

.page2-contain{
	display: flex;
}
/*=================左=====================*/
.page2-left{
	flex:3;

}

.page2-left button{
	margin: 20px 0 20px 20px;
	border-radius: 8px; /* 边框圆角 */
	transition: transform 0.3s ease; /* 平滑变换 */
}

button:hover{
	background-color: #99a9bf;
}

/*=================右=====================*/
.page2-right{

	border-radius: 10px; /* 添加圆角 */
	flex:2;
	background-color: #cceae9;
}

.page2-right-img{
	width: 50%;
	margin-top: 20px;

	border-radius: 10px; /* 添加圆角 */
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); /* 添加阴影 */
}

.tips{
	padding: 20px;

}

/*==================================第3次===========================================*/
.page3{
	height: auto;
	padding: 20px 0 0 20px;
	
	background-image: url('../assets/老君山/渐变色背景.jpg');
	background-size: cover;
	background-position: center;
}

.row{
	max-width: 100%;/*否则会出现横向滚动条*/
}

.card{
	margin: 20px;
	border-radius: 10px; /* 添加圆角 */
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); /* 添加阴影 */
	transition: transform 0.3s ease; /* 平滑过渡效果 */
}

.card img{
	height: 200px;
}
.card:hover{
	transform: translateY(-10px); /* 鼠标悬停时向上移动 */
}


/*==================================第4页===========================================*/
.page4{
	height: auto;
	background-color: #3f3f3f;
	display: flex;
	padding-bottom: 20px;
}
.connect{
	padding: 20px 0 0 50px;

	
}
.connect h2{
	color: #bf6f54;
}

.connect p{
	color: #bf8f00;
	font-size: 15px;
}
.QR-code{
	justify-content: center; /* 水平居中 */
	padding-top:100px ;
	padding-left: 100px;

}
.QR-code img{
	width: 150px;
	height: 150px;
	margin: 20px;
}
</style>




<script setup>
import { ref, onMounted, onBeforeUnmount , nextTick } from 'vue';
import { ElCarousel, ElCarouselItem } from 'element-plus';
import { useRouter } from 'vue-router';
import { MoreFilled,Bell } from '@element-plus/icons-vue'
    const activeNames = ref(['1']);
    const images = ref([
      // 您的图片URL数组
      { url: 'https://img.zcool.cn/community/01ba4d5e295427a8012165188f8345.jpg@3000w_1l_0o_100sh.jpg' },
      { url: 'http://23561696.s21i.faiusr.com/2/ABUIABACGAAg7NWMrgYo8Kv8kgYwiCc4ph0.jpg' },
      { url: 'https://img.zcool.cn/community/01ba685e3e7d67a80120a89548f785.jpg@2o.jpg' },
      { url: 'https://ts1.cn.mm.bing.net/th/id/R-C.97b806931abc4c6945b124452ada1246?rik=7F6LLm9xCT5zcQ&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn10%2f195%2fw1080h715%2f20180429%2f460d-fzvpatq9356769.jpg&ehk=JOZ6UWlHOxTwOyy%2fg7Cwxq4QjK5UhTPsBZst2xlqZhk%3d&risl=&pid=ImgRaw&r=0' },
      { url: 'https://ts1.cn.mm.bing.net/th/id/R-C.630f8122d6efa75d9c58fa0a3ca0ec1e?rik=BVRFXc%2bmO25QNg&riu=http%3a%2f%2fimage.xitek.com%2fphoto%2f201607%2f83637%2f8363753%2f8363753_1469937951_64215600.jpg&ehk=4I6rVnWC03YB5MlIFozhuR2mMEngqJDga6GMl34Y1X4%3d&risl=&pid=ImgRaw&r=0' },
      // ... 更多图片
    ]);
	//跳转
	const router = useRouter();
	const activeIndex = ref('/home');
	

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
 onMounted(() => {
        window.addEventListener('scroll', handleScroll);
		
		
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
		
	
      });  
//=================================================	
	const activities = [
	  {
	    content: '洛阳市栾川县“神都洛阳·奇境栾川”旅游产品发布会在银川举行',
	    timestamp: '2024-04-21',
	    size: 'large',
	    type: 'primary',
	    icon: MoreFilled,
		url: 'http://www.laojunshan.cn/nd.jsp?fromColId=2&id=1694#_np=2_370', // 添加链接
	  },
	  {
	    content: '嘘！这些老君山的隐藏宝藏打卡地，懂的人已经偷偷先去了~',
	    timestamp: '2024-04-20',
	    color: '#0bbd87',
		url:'http://www.laojunshan.cn/nd.jsp?fromColId=2&id=1695#_np=2_370',
		
	  },
	  {
	    content: '官方提醒！无预约不出游，这份预约指南码住不跑空~ ',
	    timestamp: '2024-04-12',
	    size: 'large',
		 hollow: true,
		color:'#7671bd',
		url:'http://www.laojunshan.cn/nd.jsp?fromColId=2&id=1696#_np=2_370',
	  },
	  {
	    content: '老君山景区游客热门问题解答',
	    timestamp: '2024-04-08',
	    type: 'primary',	   
		url:'http://www.laojunshan.cn/nd.jsp?fromColId=2&id=1700#_np=2_370',
		icon: Bell,
	  },
	  {
		content: '这个时间来老君山观赏自然景观吧！（二）',
		timestamp: '2024-04-03',
		url:'http://www.laojunshan.cn/nd.jsp?fromColId=2&id=1703#_np=2_370',
		type:'success',
	  },
	]
	
	
//====================第二页右侧图片点击放大=============================			
	const page2Url=
	  'http://23561696.s21i.faiusr.com/2/ABUIABACGAAgn62_kwYovqb0OjC4CDj5Bg.jpg'
	const srcList = [
	  'http://23561696.s21i.faiusr.com/2/ABUIABACGAAgn62_kwYovqb0OjC4CDj5Bg.jpg',
	
	]
//=================================================			

//=================================================		


  </script>