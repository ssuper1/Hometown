<template>
	<el-menu
	:default-active="activeIndex" 
	class="el-menu-demo" 
	mode="horizontal" 
	@select="handleSelect">
	  <el-menu-item index="/people" >知名人士</el-menu-item>
	  <el-menu-item index="/food">特色美食</el-menu-item>
	  <el-menu-item index="/tradition">风俗人情</el-menu-item>
	   <el-menu-item index="/"><img src="../assets/img/arrow-return-left.svg" alt="Bootstrap" width="20" ></el-menu-item>
	</el-menu>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { ElMenu, ElMenuItem } from 'element-plus';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const activeIndex = ref(route.path); // 根据当前路由设置初始激活项

const handleSelect = (index) => {
  router.push(index);
  activeIndex.value = index; // 点击菜单项时更新激活项
};

// 监听路由变化，更新激活项
watch(() => route.path, (newPath) => {
  activeIndex.value = newPath;
});

// 如果路由在组件挂载后发生变化，确保激活项同步更新
onMounted(() => {
  watch(activeIndex, (newValue) => {
    router.push(newValue);
  });
});
</script>
<style>
	.el-menu-demo{
		background-color: #e0f1ff; /* 根据需要调整背景色 */
	}
</style>