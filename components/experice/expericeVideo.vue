<template>
	<div id="dream_together_wrap">
		<div class="dream_together_box">
			<div class="dream_together_title_box">
				<div class="dream_together_titleC">
					<h2>2018梦想同行</h2>
				</div>
				<div class="dream_together_titleE">
					<p>Dream Together</p>
				</div>
				<div class="dream_together_title_desc">
					<p>我们所有的努力，旨在打造一个宾至如归的理想状态。</p>
					<p>我们推崇简单、自然、环保健康的生活方式，这即是Olivelife---生态生活的意义</p>
				</div>
			</div>
			<div class="dream_together_video">
				<video id="story-video" width="1200px" height="600px" controls="controls" preload="auto">
					<source src="http://img.visney.cn/img/video/dream_together_video.mp4">
				</video>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'expericeVideo'
	}
</script>
<style scoped>
	/*Dream Together start*/
		div#dream_together_wrap {
		    width:  100%;
		    background: #f9f9fa;
		}

		.dream_together_box {
		    overflow:  hidden;
		    width:  1200px;
		    margin:  0 auto;
		    padding: 150px 0;
		}

		.dream_together_title_box {
		    width:  100%;
		    padding-bottom:  70px;
		    text-align:  center;
		}

		.dream_together_titleC {
		    overflow:  hidden;
		    height:  40px;
		}

		.dream_together_titleC h2 {
			font-size:  40px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 40px;
		}

		.dream_together_titleE {
		    overflow:  hidden;
		    width:  100%;
		    height:  26px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  26px;
		    text-align:  center;
		}

		.dream_together_title_desc {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding-top:  20px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  24px;
		    text-align:  center;
		}

		.dream_together_video {
		    overflow:  hidden;
		    width:  100%;
		    height:  600px;
		    background: #000;
		}
	/*Dream Together end*/
</style>
