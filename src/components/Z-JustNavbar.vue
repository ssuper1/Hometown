<template>
	<el-menu
	:default-active="activeIndex" 
	class="el-menu-demo" 
	mode="horizontal" 
	@select="handleSelect">
	  <el-menu-item index="/BaiMa" >白马寺</el-menu-item>
	  <el-menu-item index="/LongMen">龙门石窟</el-menu-item>
	  <el-menu-item index="/LaoJun">老君山</el-menu-item>
	   <el-menu-item index="/"><img src="../assets/img/arrow-return-left.svg" alt="Bootstrap" width="20" ></el-menu-item>
	</el-menu>
</template>

<script setup>
import { ref, onMounted} from 'vue';
import { ElCarousel, ElCarouselItem } from 'element-plus';
import { useRouter } from 'vue-router';
	 const activeNames = ref(['1']);
	//跳转
	const router = useRouter();
	const activeIndex = ref('/home');
	
	const handleSelect = (index) => {
	  router.push(index);
	};
</script>

<style>
	.el-menu-demo{
		background-color: #e0f1ff; /* 根据需要调整背景色 */
	}
</style>