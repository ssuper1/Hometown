<template>
  <div id="primary">
 <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in images" :key="item">
      <img :src="item.url" alt="null" style="width: 100%; height: 100%; object-fit: cover;">
    </el-carousel-item>
  </el-carousel>
    <!-- 水平导航栏 -->
    <el-menu 
	:default-active="activeIndex" 
	class="el-menu-demo" 
	mode="horizontal" 
	@select="handleSelect">
      <el-menu-item index="/BaiMa" >白马寺</el-menu-item>
	  <el-menu-item index="/LongMen">龙门石窟</el-menu-item>
	  <el-menu-item index="/LaoJun">老君山</el-menu-item>
	  <el-menu-item index="/river">洛河</el-menu-item>
	   <el-menu-item index="/"><img src="../assets/img/arrow-return-left.svg" alt="Bootstrap" width="20" ></el-menu-item>
    </el-menu>
 <!-- ====================================正文============================= -->	 
    <!-- 主体部分 -->
    <div class="main-content">
	<!-- =============================左侧======================== -->	 
      <!-- 咖啡照片墙和价格 coffee-wall -->	  
      <div class="left-zero">
        <!-- 咖啡图片和价格 -->
		 <img src="../assets/白马寺/标题.png" alt="LuoYang Image" class="smallPhoto1 Photo"
		 style="margin-top: 10px;">
		<p>洛阳白马寺，<b>中国第一古刹</b>。始建于东汉永平十一年（公元68年），是佛教传入中国后兴建的第一座寺院，也被认为是<b>中国佛教的发源地</b>，有中国佛教的“祖庭”和“释源”之称。
			洛阳白马寺距今已有<b>1900多年</b>的历史，占地面积约为200亩，现存的遗址古迹为元、明、清时所留，寺内保存了大量元代夹纻干漆造像如三世佛、二天将、十八罗汉等，弥足珍贵。
			</p>
		<p>1961年，洛阳白马寺被中华人民共和国国务院公布为<b>第一批全国重点文物保护单位</b>。1983年，被国务院确定为全国汉传佛教重点寺院。2001年1月，洛阳白马寺被国家旅游局命名为<b>首批AAAA级景区</b>。
			</p>	
	  <img src="../assets/白马寺/白马寺门口.jpg" alt="LuoYang Image" class="smallPhoto2 Photo"> 	
      <img src="../assets/白马寺/白马寺门匾.jpg" alt="LuoYang Image" class="smallPhoto3 Photo">
	  <img src="../assets/白马寺/白马寺卡通.jpg" alt="LuoYang Image" class="smallPhoto4 Photo">
	  </div>
    <!-- ===============================右侧========================== -->	  
      <!-- 各种类型咖啡介绍 coffee-introduction  -->
      <div class="right-zero">
        <!-- 咖啡介绍 -->
		<div class="coffee-type-intro">        
            <img src="../assets/白马寺/钟鼓楼.jpg" alt="Coffee Type 2" class="intro-image">
            <div class="intro-text">
                <h2>钟鼓楼</h2>
                <p>晨曦初露时敲钟，红日西沉时击鼓，它是僧人们作息的信号，也是佛事活动兴盛的标志。“马寺钟声”曾被美誉为洛阳八大景之一。现今，每年的新旧交岁之时，人们都欢聚在白马寺内，听僧人敲响新年吉祥的钟声，伴随着悠扬的声波，迎接新一年的幸福与吉祥，和平与安乐。　
				</p>
            </div>
        </div>
		<div class="coffee-type-intro">
		    <img src="../assets/白马寺/缅甸风格.jpg" alt="Coffee Type 2" class="intro-image">
		    <div class="intro-text">
		        <h2>缅甸佛塔苑</h2>
		        <p>白马寺缅甸风格佛殿由缅甸政府出资修建，是中缅两国人民友好的象征。佛殿主体建筑为大金塔，按照缅甸国家象征仰光大金塔规制缩小而建。大金塔的红色门楣上，有几个缅甸文烫金大字，
				翻成汉语就是“中国大金塔”。整个塔身金碧辉煌，无论从哪个角度望去，都显得雍容华贵、气势非凡。				
				</p>
		    </div>
		</div>
		<div class="coffee-type-intro">
		    <img src="../assets/白马寺/藏经阁.jpg" alt="Coffee Type 2" class="intro-image">
		    <div class="intro-text">
		        <h2>法宝阁与藏经阁</h2>
		        <p>法宝阁与藏经阁二阁大小形制相同，朱漆圆柱，额枋彩绘，上覆灰色筒瓦。其中，藏经阁内正中供奉有泰国赠送给白马寺的“中华古佛”,还收藏有
				《中华大藏经》、《日本大正藏》、《敦煌大藏经》等十余种藏经。法宝阁内供奉着印度总理访华时赠送的一尊铜佛像，并收藏有数十种“法宝”
				</p>
		    </div>
		</div>
		<div class="coffee-type-intro">
		    <img src="../assets/白马寺/清凉台.jpg" alt="Coffee Type 2" class="intro-image">
		    <div class="intro-text">
		        <h2>清凉台</h2>
		        <p>清凉台，是“祖庭”白马寺独具的胜迹，被誊为白马寺“六景”之首。有诗咏清凉台云： 兰台画阁碧玲珑，皓月清风古梵宫。石蹬高悬人罕到，时闻清磬落空濛。
				如腾、兰二高僧此台译经之说，汇成了后世浩浩荡荡的万里中国佛河。人们也趣称清凉台为中国佛教的“摇篮”、中国第一译经道场。
				</p>
		    </div>
		</div>
		<div class="last">
		    <div class="poem-left">
		        <h2 >有诗云：</h2>
		        <p style="text-indent: -1em;"><b>白马寺</b></p>
		        <p>老舍</p>
						<p>
							中州原善土，白马驮经来。<br>
							野鹤闻初磐，明霞照古台。<br>
							疏钟群冢寂，一梦万莲开。<br>
							劫乱今犹昔，焚香悟佛哀。</p>
		        <!-- 诗的内容 -->
		    </div>
		    <div class="poem-right">		        
		        <p style="text-indent: -1em;"><b>白马寺诗</b></p>
		        <p > 李廌，宋</p>
		         <p>
				 湠漫汉江皋，迤逦楚山岫。<br>
				 衡门掩半麓，飞甍耸层构。<br>
				 高林敞华榱，双泉逼瑶甃。<br>
				 龟鱼水中坻，牛马饮残溜。<br>
				 我卜关外居，此计春可就。<br>
				 参差菱荇香，猗傩参术秀。<br>
				 行吟池上篇，来倒壶中酎。</p>
		    </div>
		</div>

      </div>
    </div>
 <!-- ====================================版权============================= -->	 
    <!-- 版权声明 -->
    <footer style="background-color: aliceblue;">
      版权所有 © 2024物联网221史帅鹏
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElCarousel, ElCarouselItem } from 'element-plus';
import { useRouter } from 'vue-router';
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
	const router = useRouter();
	    const activeIndex = ref('/BaiMa');
	
	    const handleSelect = (index) => {
	      router.push(index);
	    };
  </script>


<style scoped>
	/**/
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


/*===============================顶部图片*/
header {
  background-image: linear-gradient(to right, #f8eaff, #fefec8); /* 水平渐变 */

  margin-top: 10px;
}
header img {
  width: 80%; /* 图片宽度 */
  height: auto; /* 高度自适应 */
  border: 4px solid #fff; /* 添加白色边框 */
  border-radius: 10px; /* 添加圆角 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); /* 添加阴影 */
}
/*===========================导航栏=========================*/
.el-menu-demo{
	background-color: #cfefff; /* 根据需要调整背景色 */
}
/*===============================主题内容*/
.main-content {
  display: flex; 
}
.left-zero p,.coffee-type-intro p{
	text-indent: 2em;
}
/*====================================左侧=============================*/
.left-zero {
  flex: 1;
  background-color: aquamarine;
  padding:5px 20px  ;
  font-family: 'Arial', sans-serif; 
}
.Photo{
	width: 80%; 
	height: auto; 
	border: 3px solid #fff; /* 白色边框 */
	box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* 轻微的阴影 */
	border-radius: 10px; /* 边框圆角 */
	transition: transform 0.3s ease; /* 平滑变换 */
	transform: rotate(10deg); /* 默认旋转10度 */
}
.smallPhoto1 {
  transform: rotate(0); /* 第1张图片不旋转- */
  margin-bottom: 10px;
}
.smallPhoto3{
  transform: rotate(-10deg); /* 第三张图片旋转-10度 */
}
 img.Photo:hover {
  transform: scale(1.25); /* 鼠标悬浮时放大 */
}
/*====================================右侧=============================*/
.right-zero {
  flex: 3;

    max-height: 1200px; /* 最大高度 */
    overflow-y: scroll; /* 添加垂直滚动条 */
    padding: 20px; /* 为滚动条留出空间 */
	background-color: aliceblue;
}
/*=============右侧总设计=============*/
.coffee-type-intro {
    margin-bottom: 20px; /* 咖啡种类介绍之间的间距 */
	display: flex; 
	align-items: flex-start; /* 垂直居中对齐 */
	border-bottom: 1px solid #ccc; /* 分割线 */
}
/*区域——————图片样式*/	
.intro-image {
  width: 40%; 
  margin-right: 20px; /* 图片与文字之间的间距 */
    transition: transform 0.3s ease; /* 平滑过渡效果 */
	border-radius: 10px; /* 边框圆角 */
}
.intro-image:hover {
  transform: scale(1.1); 
}

/* 响应式设计 */
@media (max-width: 768px) {
  .intro-text {
    flex-direction: column; /* 在小屏幕上堆叠排列 */
  }

  .intro-image {
    width: 100%; /* 小屏幕上图片宽度占满 */	
    margin-bottom: 10px; 
  }
}
/*区域——————文字样式*/

.intro-text h2 {
	margin-top: 0px;
	margin-bottom: 10px; /* 缩小标题和正文的间距 */
}

.intro-text p {
  margin-top: 0; 
  font-family:  "幼圆", "SimHei", sans-serif;
  font-size: 105%;
  line-height: 22px;
}

/*最后一部分*/
.last {
    display: flex; /* 使用Flexbox布局 */
    margin-top: 10px; /* 与上文内容的间距 */
    padding: 20px; /* 内边距 */
    background-color: #dfdcf9; /* 背景颜色 */
    border-radius: 8px; /* 边框圆角 */
}

.poem-left, .poem-right {
    flex: 1; /* 两个容器平分空间 */
    margin: 0 10px; /* 左右间距 */
}

.poem-left h2 {
    margin-bottom: 10px; /* 标题与内容的间距 */
	margin-top: -10px;
	text-align: left;
}

/* 可以为两首诗的内容添加一些基本样式 */
.poem-left p, .poem-right p {
    margin: 5px 0; /* 段落之间的间距 */
    line-height: 1.6; /* 行距 */
}
</style>