<template>
	<div class="news-tab-box">
	  <div class="news-first-box">
	    <div class="news-first">
	        <div class="news-first-left">
	            <img :src="indexFirstNewsList.articleImg.articleImgSrc" :alt="indexFirstNewsList.articleImg.articleImgAlt">
	        </div>
	        <div class="news-first-right">
	            <div class="news-first-right-title-box">
	                <div class="news-first-title">
	                    <nuxt-link target="_blank" :to="{name:'news-newsView-id',params:{id:indexFirstNewsList.articleId},query: {category: indexFirstNewsList.articleCategoryId}}"><b>{{indexFirstNewsList.articleName}}</b></nuxt-link>
	                </div>
	                <div class="news-first-times">
	                    <p>{{indexFirstNewsList.articleAddTime}}</p>
	                </div>
	            </div>
	            <div class="news-first-intro">{{getTxt(indexFirstNewsList.articleText)}}</div>
	            <div class="news-first-more">
	                <nuxt-link target="_blank" :to="{name:'news-category',params:{category: indexFirstNewsList.articleCategoryId}}">了解更多 &gt;</nuxt-link>
	            </div>
	        </div>
	    </div>
	  </div>
	  <div class="news-list">
	    <ul>
            <li v-for="(item,index) in indexNewsList" :key="index">
                <div class="news-list-title">
                    <nuxt-link target="_blank" :to="{name:'news-newsView-id',params:{id:item.articleId},query: {category: item.articleCategoryId}}"><b>{{item.articleName}}</b></nuxt-link>
                </div>
                <div class="news-list-times">
                    <p>{{getTime(item.articleAddTime)}}</p>
                </div>
            </li>
	    </ul>
	  </div>
	</div>
</template>

<script>
	export default {
		name: 'indexNewsListShow',
		props: {
			indexFirstNewsList: Object,
			indexNewsList: Array
		},
		methods: {
    	getTxt (str){
    		var txt = str.replace(/<\/?.+?>/g,"").replace(/(^\s+)|(\s+$)/g,"").replace(/\s/g,''); 
  			txt = txt.length < 150 ? txt : txt.substring(0,150).concat('...');
    		return txt;
    	},
    	getTime(time){
    		var time = time.slice(5, 10);
    		return time;
    	}
    }
	}
</script>

<style scoped>
	.news-tab-box {
        width:  100%;
        height:  auto;
    }

    .news-tab-content .news-tab-box:first-child {
        display:  block;
    }

    .news-first {
        overflow: hidden;
        width: 100%;
        height: 398px;
        padding-bottom: 90px;
        box-sizing: border-box;
    }

    .news-first-left {
        float:  left;
        overflow:  hidden;
        width:  422px;
        height:  308px;
    }

    .news-first-right {
        float:  right;
        overflow:  hidden;
        width:  737px;
        height:  auto;
    }

    .news-first-left img {
        width:  100%;
        height:  100%;
    }

    .news-first-right-title-box {
        overflow:  hidden;
        width:  100%;
        height:  auto;
        padding-bottom:  30px;
        border-bottom: 2px solid #eaeaeb;
    }

    .news-first-title {
        float:  left;
        overflow:  hidden;
        max-width:  645px;
        height: 50px;
        font-size:  20px;
        font-weight:  bold;
        line-height:  50px;
        text-align:  left;
    }

    .news-first-times {
        float:  right;
        overflow:  hidden;
        width:  92px;
        height:  50px;
        color:  #858585;
        font-size:  14px;
        line-height:  50px;
        text-align:  center;
    }

    .news-first-title a {
        display:  block;
        overflow: hidden;
        width:  100%;
        height:  100%;
        color: #22202b;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    
    .news-tab-box b {
        overflow: hidden;
        display: block;
        width: 100%;
        height: 100%;
        font-weight: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .news-first-intro {
        overflow:  hidden;
        width:  100%;
        height: 152px;
        padding:  50px 0 40px;
        border-bottom: 2px solid #eaeaeb;
        box-sizing:  border-box;
        color:  #858585;
        font-size:  14px;
        line-height:  20px;
        text-align:  left;
    }


    .news-first-more {
        float:  right;
        overflow:  hidden;
        width: 163px;
        height: 40px;
        margin: 28px auto 0;
        border: 3px solid #000;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
      -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .news-first-more:hover{
      -webkit-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      -o-transform: translateY(-5px);
      transform: translateY(-5px);
    }

    .news-first-more a {
        display: block;
        width: 100%;
        height: 100%;
        color: #22202b;
        font-weight: bold;
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .news-first-more:hover a {
        background:  #22202b;
        color: #feeabd;
    }

    .news-list {
        overflow:  hidden;
        width:  100%;
        height:  auto;
    }

    .news-list ul {
        overflow:  hidden;
        width:  100%;
    }

    .news-list ul li {
        position: relative;
        float:  left;
        overflow:  hidden;
        width:  400px;
        height:  26px;
        color: #999;
        font-size: 14px;
        line-height: 26px;
        text-align: left;
    }

    .news-list ul li::after {
        position:  absolute;
        top: 50%;
        left:  0;
        content: "";
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background: #999;
    }

    .news-list-title {
        float:  left;
        overflow:  hidden;
        max-width: 300px;
        height:  100%;
        padding-left:  6px;
        box-sizing:  border-box;
    }

    .news-list-title a {
        display:  block;
        overflow:  hidden;
        width:  100%;
        height:  100%;
        color:  #999;
        text-overflow:  ellipsis;
        white-space:  nowrap;
    }

    .news-list-times {
        float:  right;
        width: 90px;
        height:  26px;
        padding-left: 10px;
        box-sizing:  border-box;
    }

    .news-list-times p {
        overflow:  hidden;
        width:  100%;
        height:  100%;
    }

    .news-list ul li:hover,.news-list ul li:hover a {
        color: #000;
    }
</style>