<template>
    <link id="cssStyle" rel="stylesheet" href="./light.css">	
	
<div style="width:800px">
		
	<div class="button" style="float: left;width:800px ">
    <button @click="switchTheme('light.css')" style="background-color:skyblue;">蓝色</button>
    <button @click="switchTheme('dark.css')" style="background-color:lightgreen">绿色</button>
	</div>
	
	<div id="content" style="float: left;width:300px">
      <p style="text-indent: 2em;"> <b>北汝河</b>，民间俗称“汝河”，为与河南省南部的洪河支流汝河区别，一般称“北汝河”。
	   淮河支流颍河支流沙河的支流，流域全部在河南省境内，发源于河南省嵩县车村镇栗树街村
	   北分水岭摞摞沟，流经汝阳县、汝州市、郏县、宝丰县、襄城县、叶县六个县市，
	   在襄城县丁营乡汇入沙河。全长250公里，流域总面积6080平方公里。<br>
       &nbsp;&nbsp;<b>北汝河</b>历史悠久，为古汝水北段演变而来。流域为淮河流域的暴雨中心，
	   洪涝灾害较多，历史上多有治理。其实中下游的汝阳、汝州、襄城等为流域内工农
	   业经济发达地区，境内有传说鬼谷子修行的云梦山等风景名胜。</p>
	</div>	
</div>
</template>

<style>
	#content{
		border: 1px solid #00aaff;
		width: 300px;
		padding: 0 10px ;
		margin: 5px 0  100px 10px;
	}
	.button{
		margin: 20px 0 0 10px;
	}			
</style>

<script setup>		
function switchTheme(whatStyle ) {
	document.getElementById("cssStyle").href="./"+whatStyle;  
}
</script>