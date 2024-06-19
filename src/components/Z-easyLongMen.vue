<template>
	<el-carousel :interval="4000" type="card" height="200px">
	  <el-carousel-item v-for="item in images" :key="item">
	    <img :src="item.url" alt="null" style="width: 100%; height: 100%; object-fit: cover;">
	  </el-carousel-item>
	</el-carousel>
	<!-- 水平导航栏 -->
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
	  <el-menu-item index="1">白马寺</el-menu-item>
	  <el-menu-item index="2">龙门石窟</el-menu-item>
	  <el-menu-item index="3">老君山</el-menu-item>
	</el-menu>
<!--  =================第一页·========================================   -->
	<div ref="page1" class="page1">
		<div class="videoPlay">
			<video controls width="720" height="540">
			  <source src="../assets/航拍洛阳.mp4" type="video/mp4">
			  Your browser does not support the video tag.
			</video>		
		</div>		
			
					
		<div class="full-screen-container">	
			<div class="flex-item1">
				<h2>简介</h2>
				<p>龙门石窟是中国最大、最精美、最具代表性的石窟之一，也是世界上营造时间最长的石窟。<br>
				   龙门石窟的开凿始于北魏孝文帝迁都洛阳之际（公元493年），
				   又经十多个朝代的断续营造，长达400多年，直到清末才告结束。现存有窟龛2345个，造像10万余尊，
				   碑刻题记2800余品。</p>
			</div>
			
			<div class="flex-item2" >
				<h2>价值</h2>
				<p>这里有大量的壁画、石雕和浮雕等，展示了我国古代艺术的各个层面和风格，
				包括唐代花园式、北魏帝王式、晚唐气范式等多种装饰风格。
				在石窟中，也可以看到佛教艺术的精髓和东方艺术的独特魅力。这些艺术创作，
				反映了洛阳龙门石窟在不同时期的文化背景和时代精神，
				对研究古代文化和艺术发展都有着极为重要的意义。
				</p>
			</div>
			
			<div class="flex-item3">
				<h2>历史</h2>
				<p>龙门地区的石窟始凿于北魏，盛于唐，终于清末。10多个朝代陆续营造长达1400余年，是世界上营造时间最长的石窟
				其中于公元5世纪末至8世纪中叶最为兴盛，是中国石窟艺术史上早期后段和中期阶段的典范，表现出印度文化与中国文化融合的特点
				</p>
			</div>
				
			<div class="flex-item4">
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

 <!--  =================第二页·========================================   -->
	<div ref="page2" class="page2">
		<div class="videoPlay">
			<video controls width="720" height="540">
			  <source src="../assets/龙门石窟/龙门石窟视频.mp4" type="video/mp4">
			  Your browser does not support the video tag.
			</video>		
		</div>		
			
					
		<div class="full-screen-container">	
			<div class="flex-item1">
				<h2>简介</h2>
				<p>龙门石窟是中国最大、最精美、最具代表性的石窟之一，也是世界上营造时间最长的石窟。<br>
				   龙门石窟的开凿始于北魏孝文帝迁都洛阳之际（公元493年），
				   又经十多个朝代的断续营造，长达400多年，直到清末才告结束。现存有窟龛2345个，造像10万余尊，
				   碑刻题记2800余品。</p>
			</div>
			
			<div class="flex-item2" >
				<h2>价值</h2>
				<p>这里有大量的壁画、石雕和浮雕等，展示了我国古代艺术的各个层面和风格，
				包括唐代花园式、北魏帝王式、晚唐气范式等多种装饰风格。
				在石窟中，也可以看到佛教艺术的精髓和东方艺术的独特魅力。这些艺术创作，
				反映了洛阳龙门石窟在不同时期的文化背景和时代精神，
				对研究古代文化和艺术发展都有着极为重要的意义。
				</p>
			</div>
			
			<div class="flex-item3">
				<h2>历史</h2>
				<p>龙门地区的石窟始凿于北魏，盛于唐，终于清末。10多个朝代陆续营造长达1400余年，是世界上营造时间最长的石窟
				其中于公元5世纪末至8世纪中叶最为兴盛，是中国石窟艺术史上早期后段和中期阶段的典范，表现出印度文化与中国文化融合的特点
				</p>
			</div>
				
			<div class="flex-item4">
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
 <!--  =================页脚·========================================   -->
	<div id="serve">
		<div class="container">
			 <ul class="footer-links">
			  <li><a href="https://www.lmsk.org.cn/home/"><el-icon><House /></el-icon>访问官网</a></li>
			  <li><a href="https://cn.bing.com/search?q=%E9%BE%99%E9%97%A8%E7%9F%B3%E7%AA%9F&qs=n&form=QBRE&sp=-1&lq=0&pq=%E9%BE%99%E9%97%A8%E7%9F%B3%E7%AA%9F&sc=10-4&sk=&cvid=BE6F5C83954C4D23AAAFB990B46C4ED0&ghsh=0&ghacc=0&ghpl="><el-icon><Location /></el-icon>查看地图</a></li>
			  <li><a href="https://baike.baidu.com/item/%E9%BE%99%E9%97%A8%E7%9F%B3%E7%AA%9F/274"><el-icon><Search /></el-icon>前往百科</a></li>
			  <li><a href="#"><el-icon><PhoneFilled /></el-icon>添加公众号</a></li>
			</ul>
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
/*=====================第一主页===================*/	
.page1{
	 background-image:url('https://pics1.baidu.com/feed/730e0cf3d7ca7bcb7bcc4109b96a7c6ff724a8d4.jpeg@f_auto?token=7bd63c7b2718664b60cd32e1a1e014c0') ;
}

/*=====================四个图片===================*/	
.full-screen-container {
  display: flex;          /* 使用Flexbox布局 */
  flex-direction: row;   /* 水平排列子元素 */
  width: auto;           /* 占满整个宽度 */
  height:400px;         /* 占满整个视口高度 */
  margin:  20px 0 10px 0;
}

.flex-item1,.flex-item2,.flex-item3,.flex-item4{
  flex: 1;                /* 每个子元素占四分之一的空间 */
  border-radius: 10px; /* 添加圆角 */
  border: 1px solid #000; /* 边框，方便查看区域 */
  box-sizing: border-box; /* 边框计算在宽度内 */
  padding: 0 10px;
  background-size: cover; /* 根据需要调整 */
  background-repeat: no-repeat;
  background-position: center center;
    transition: transform 0.3s ease; /* 平滑过渡效果 */
    transform: translateY(0); /* 初始位置 */
}
/* 鼠标悬停时的动画 */
.flex-item1:hover, .flex-item2:hover, .flex-item3:hover, .flex-item4:hover {
  transform: translateY(-10px); /* 鼠标悬停时向上移动 */
}

.flex-item1{
  background-image: url('../assets/色彩/绿.jpg');
}
.flex-item2{
  background-image: url('../assets/色彩/黄.jpg');
}
.flex-item3{
  background-image: url('../assets/色彩/淡绿.jpg');
}
.flex-item4{
  background-image: url('../assets/色彩/粉.jpg');
}

.flex-item1 p,
.flex-item2 p,
.flex-item3 p,
.flex-item4 p {
  font-size: clamp(10px, 2vw, 16px); /* 设置字体大小的范围 */
}
/*=====================视频===================*/	
.videoPlay {
  padding-top: 20px;
  margin-left: 0;
 /* background-image:url('https://pics1.baidu.com/feed/730e0cf3d7ca7bcb7bcc4109b96a7c6ff724a8d4.jpeg@f_auto?token=7bd63c7b2718664b60cd32e1a1e014c0') ;*/
}


video {
  border: 1px solid #ccc; /* 举例：给视频添加边框 */
  border-radius: 10px; /* 举例：给视频添加圆角 */
}
video {
  max-width: 100%;
  height: auto;
}

/*=====================下一页=================*/	
.button-container {
	height: 40px;
  position: relative;
  /* 可以根据需要添加其他样式 */
}
.next-page-button {
  margin-bottom: 5px;
  position: absolute;
  right:50px ;
}
/*=====================第二主页===================*/	
.page2 {
  display: none; /* 初始时不显示第二页 */
}
/*=====================服务==================*/	
#serve{
	height: 50px;
	background-color: #bdffc7;
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

/* 移除<li>和<a>的默认padding和margin */
.footer-links li {
  padding: 0; /* 根据需要调整内边距 */
  margin: 0; /* 移除外边距 */
}

.footer-links li a {
  text-decoration: none; /* 移除下划线 */
  padding: 10px; /* 添加一些内边距，使链接更容易点击 */
  color: #000; /* 设置链接颜色 */
}

/* 添加悬停效果 */
.footer-links li a:hover {
  text-decoration: underline; /* 鼠标悬停时添加下划线 */
}
</style>





<script >
import { ref, onMounted } from 'vue';
export default {
  setup() {
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

   // 使用ref来创建对DOM元素的响应式引用
    const page1 = ref(null);
    const page2 = ref(null);
  
      onMounted(() => {
            // 确保 DOM 已经挂载
            const page2Element = page2.value;
      
            // 添加滚动事件监听器
            window.addEventListener('scroll', () => {
              // 检查是否滚动到底部
              if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                // 滚动到底部时，检查 page2 是否存在
                if (page2Element) {
                  // 隐藏 page1（如果需要的话）
                  // 显示 page2
                  page2Element.style.display = 'block'; // 确保 page2 是可见的
      
                  // 平滑滚动到 page2
                  page2Element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            });
          });
      // 将响应式数据和方法暴露给模板
      return {
        images,
        page1, // 确保在模板中使用page1来绑定DOM元素
        page2, // 确保在模板中使用page2来绑定DOM元素
      };
    },
  };
  </script>
