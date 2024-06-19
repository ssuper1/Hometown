<template>
	<el-carousel :interval="4000" type="card" height="200px">
	  <el-carousel-item v-for="item in images" :key="item">
	    <img :src="item.url" alt="null" style="width: 100%; height: 100%; object-fit: cover;">
	  </el-carousel-item>
	</el-carousel>
	
	<div>
	    <video controls width="720" height="540">
		  <source src="https://www.lmsk.org.cn//file/type_video/banner_video/20220412/ae41d9a206f2ba35a34064ec2d6d4ece.mp4" type="video/mp4">
		  Your browser does not support the video tag.
	    </video>
	</div>
	
	
	
	
	
</template>

<script>
import { ref } from 'vue'
export default {	
  data() {
    return {
		// 使用 ref 创建响应式数据
		activeNames: ref(['1']),
      // 假设你的图片数组是这样的
      images: [
        //{ url: require('../assets/洛阳剪影.jpg' )},
		{ url: 'https://img.zcool.cn/community/01ba4d5e295427a8012165188f8345.jpg@3000w_1l_0o_100sh.jpg' },
		{ url: 'https://youimg1.c-ctrip.com/target/0102b120003onry5869DA.jpg' },
		{ url: 'https://youimg1.c-ctrip.com/target/100e1f000001gt14r2B1F_D_10000_1200.jpg?proc=autoorient' },
		{ url: 'https://img.zcool.cn/community/01b28a59afc604a801211d2563ba28.jpg@1280w_1l_2o_100sh.jpg' },
        { url: 'http://p0.itc.cn/images01/20200518/becdabb014614b38bdc242082c18ea9b.jpeg'},
		// ... 更多图片
      ]
    };		
  }
}
</script>

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
/*=====================视频===================*/	
video {
  border: 1px solid #ccc; /* 举例：给视频添加边框 */
  border-radius: 10px; /* 举例：给视频添加圆角 */
}
video {
  max-width: 100%;
  height: auto;
}
/*=====================图片与文本==================*/	

</style>