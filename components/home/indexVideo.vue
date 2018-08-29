<template>
	<div class="video-box">
      	<video id="story-video" controls="controls" preload="auto" poster="http://img.visney.cn/img/banner_img/story-bottom-vedios1.png">
        	<source src="http://img.visney.cn/img/video/story.mp4">
      	</video>
    </div>
</template>

<style scoped>
	.video-box{
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
	.video-box video{
		width: 100%;
		height: 100%;
	}
</style>
<script>
	export default {
		name: 'indexVideo'
	}
</script>