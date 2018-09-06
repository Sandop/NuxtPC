<template>
	<section class="cotainer">
		<!-- 面包屑部分 -->
		<div id="bread-nav">
			<div class="brand-nav-box clearfix">
				<div class="brand-nav-content">
					<div class="brand-nav-title"><span>当前位置:</span></div>
					<div class="brand-nav-list">
						<ul>
							<li><nuxt-link target="_blank" to="/">首页</nuxt-link></li>
							<li>></li>
							<li class="brand-nav-products"><nuxt-link target="_blank" to="/news">新闻中心</nuxt-link></li>
							<li>></li>
							<li class="brand-nav-prod-list" v-for="(item,index) in $store.state.headNewsNav" :key="item.articleCategoryId" v-if=" (index + 1) == $route.query.category">
								<nuxt-link target="_blank" :to="{name: 'news-category',params: {category: item.articleCategoryId}}">{{item.articleCategoryName}}</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 面包屑部分结束 -->
		<!-- News View details start-->
		<div id="news-view">
			<div class="news-view-box">
				<div class="news-view-details-wrap">
					<div class="news-view-title-box">
						<div class="news-view-title"><h1>{{articleData.articleName}}</h1></div>
						<div class="news-view-info">
							<div class="news-view-sort">
								<span class="news-view-info-title">分类:</span>
								<span class="news-view-sort-cont">{{articleData.articleCategory.articleCategoryName}}</span>
							</div>
							<div class="news-view-edit">
								<span class="news-view-info-title">编辑:</span>
								<span class="news-view-edit-cont">{{articleData.articleEditor.articleEditorName}}</span>
							</div>
							<div class="news-view-access">
								<span class="news-view-info-title">访问:</span>
								<span class="news-view-access-cont">{{articleData.pageViews.pageViewsCount}}</span>
							</div>
							<div class="news-view-time">
								<span class="news-view-info-title">发布:</span>
								<span class="news-view-time-cont">{{articleData.articleAddTime}}</span>
							</div>
						</div>
					</div>
					<div class="news-view-details" v-html="articleData.articleText">
					</div>
				</div>
				<div class="news-view-other" v-if="preNextData.length == 1">
					<div class="news-view-prev" v-if="preNextData[0].articleId < this.$route.params.id">
						<nuxt-link :to="{name:'news-newsView-id',params:{id:preNextData[0].articleId},query: {category:preNextData[0].articleCategoryId}}">
							<span>上一篇:</span>
							<span class="news-view-prev-title">{{preNextData[0].articleName}}</span>
						</nuxt-link>
					</div>
					<div class="news-view-next" v-if=" preNextData[0].articleId > this.$route.params.id">
						<nuxt-link :to="{name:'news-newsView-id',params:{id:preNextData[0].articleId},query: {category:preNextData[0].articleCategoryId}}">
							<span>下一篇:</span>
							<span class="news-view-next-title">{{preNextData[0].articleName}}</span>
						</nuxt-link>
					</div>
				</div>
				<div class="news-view-other" v-if="preNextData.length == 2">
					<div class="news-view-prev">
						<nuxt-link :to="{name:'news-newsView-id',params:{id:preNextData[0].articleId},query: {category:preNextData[0].articleCategoryId}}">
							<span>上一篇:</span>
							<span class="news-view-prev-title">{{preNextData[0].articleName}}</span>
						</nuxt-link>
					</div>
					<div class="news-view-next">
						<nuxt-link :to="{name:'news-newsView-id',params:{id:preNextData[1].articleId},query: {category:preNextData[1].articleCategoryId}}">
							<span>下一篇:</span>
							<span class="news-view-next-title">{{preNextData[1].articleName}}</span>
						</nuxt-link>
					</div>
				</div>
				<div class="news-view-share-box clearfix">
					<div class="news-view-tag-box">
						<div class="news-view-tag">
							<a href="javascript:viod(0);">{{articleData.labelList[0].articleLabelName}}</a>
						</div>
						<div class="news-view-tag">
							<a href="javascript:viod(0);">{{articleData.labelList[1].articleLabelName}}</a>
						</div>
					</div>
					<div class="news-view-share">
						<div class="bdsharebuttonbox">
							<a href="#" class="bds_more" data-cmd="more"></a>
							<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
							<a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
							<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
							<a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- News Views details end-->

		<!-- Related Article Start-->
		<div id="related-article">
			<div class="related-article-box">
				<div class="related-article-title">
					<p>相关文章</p>
				</div>
				<div class="related-article-list-box">
					<div class="related-article-left">
						<ul>
							<li class="related-article-list" v-for="(list,index) in relatedArticleData" :key="list.articleId" v-if="index<4">
		        				<div class="related-article-list-title">
		        		            <nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">{{list.articleName}}</nuxt-link>
		        				</div>
        					</li>
						</ul>
					</div>
					<div class="related-article-right">
						<ul>
							<li class="related-article-list" v-for="(list,index) in relatedArticleData" :key="list.articleId" v-if="index>3">
		        				<div class="related-article-list-title">
		        		            <nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">{{list.articleName}}</nuxt-link>
		        				</div>
        					</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- Related Article End-->

		<!-- Latest Articles start-->
		<div id="latest-article">
			<div class="latest-article-box">
				<div class="latest-article-title">
					<p>最新文章</p>
				</div>
				<div class="latest-article-list-box">
					<ul>
						<li class="latest-article-list" v-for="list in latestArticleData" :key="list.articleId">
	        				<div class="latest-article-list-title">
	        		            <nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">{{list.articleName}}</nuxt-link>
	        				</div>
	        			</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- Latest Articles end-->

		<!-- Love Products Start-->
		<div id="love-products">
			<div class="love-products-box">
				<div class="love-products-title">
					<p>猜你喜欢</p>
				</div>
				<div class="love-products-list-box">
					<ul>
						<li class="love-products-list" v-for="list in loveArticleData" :key="list.articleId">
	        				<div class="love-products-list-img">
	        					<nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">
									<img :src="list.articleImg.articleImgSrc" :alt="list.articleImg.articleImgAlt">
								</nuxt-link>
	        				</div>
	        				<div class="love-products-list-title">
	        		            <nuxt-link target="_blank"  :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">{{list.articleName}}</nuxt-link>
	        				</div>
	        			</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- Love Products End-->
	</section>
</template>

<script>
	import axios from 'axios'
	export default {
		data (){
			return {
			}
		},
		validate({ params }) {
	        return /^\d+$/.test(params.id)
	    },
		async asyncData ({params,query,store}){
			let id = params.id;
			let parId = query.category;
	    	//详情数据
	    	let articleData = await axios.get(`${store.state.wordpressAPI}/article/getArticleDetails/${id}`);
	    	//上下篇数据
	    	let preNextData = await axios.get(`${store.state.wordpressAPI}/article/getArticleNextAndBefore/${parId}/${id}`);
	    	//相关文章
	    	let relatedArticleData = await axios.get(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/${parId}/8`);
	    	//最新文章
	    	let latestArticleData = await axios.get(`${store.state.wordpressAPI}/article/getArticleNew/6`);
	    	//猜你喜欢
	    	let loveArticleData = await axios.get(`${store.state.wordpressAPI}/article/getArticleRandom`);

	    	return {
	    		articleData: articleData.data,
	    		preNextData: preNextData.data.list,
	    		relatedArticleData: relatedArticleData.data,
	    		latestArticleData: latestArticleData.data,
	    		loveArticleData: loveArticleData.data
	    	}
		},
		head (){
			return {
				title: this.articleData.articleMetaTitle,
				meta: [
					{name: 'keywords',hid: 'keywords',content: `${this.articleData.articleKeyWord}`},
					{name: 'description',hid: 'description',content: `${this.articleData.articleMetaDescription}`}
				]
			}
		},
		mounted (){
	      this.$nextTick(function (){
	        window._bd_share_config = {
	           "common": {
				        "bdSnsKey": {},
				        "bdText": "",
				        "bdMini": "1",
				        "bdMiniList": ["qzone", "tsina", "weixin", "sqq", "duitang", "hx", "fx", "youdao", "sdo", "qingbiji", "people", "xinhua", "mail", "isohu", "yaolan", "wealink", "ty", "iguba", "fbook", "twi", "linkedin", "h163", "evernotecn", "copy", "print"],
				        "bdPic": "",
				        "bdStyle": "2",
				        "bdSize": "32"
				    },
				    "share": {}
	        };
	        const s = document.createElement('script');
	        s.type = 'text/javascript';
	        s.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);
	        document.body.appendChild(s);
	      })
		}
	}
</script>

<style type="text/css" scoped>
	/*面包屑部分*/
		div#bread-nav {
		    width:  100%;
		    height:  auto;
		}

		#bread-nav{
			position: relative;
		}

		#bread-nav .brand-nav-content{
		    float: left;
		}

		.brand-nav-box {
		    width:  1200px;
		    margin:  0 auto;
		    color:  #858585;
		    font-size: 14px;
		    text-align:  left;
		    line-height: 70px;
		}

		.brand-nav-content{
		    float: left;
		}
		.brand-nav-title {
		    float:  left;
		}

		.brand-nav-list {
		    float:  left;
		    overflow:  hidden;
		}

		.brand-nav-list ul {
		    overflow: hidden;
		}

		.brand-nav-list ul li {
		    float:  left;
		    padding: 0 5px;
		}

		.brand-nav-list ul li a {
		    display:  block;
		    width:  100%;
		    height:  100%;
		    color: #858585;
		}

		.brand-nav-list ul li:last-child a {
		    color: #22202b;
		}

		.brand-nav-list ul li a:hover {
		    color: #22202b;
		}
	/*面包屑部分结束*/
	/*News Views details start*/
		div#news-view {
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
		    width:  100%;
		    height:  auto;
		}

		.news-view-box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		}

		.news-view-title-box {
		    width:  100%;
		    height:  auto;
		    padding:  60px 0 48px;
		    border-bottom: 2px solid #d5d5d8;
		    box-sizing:  border-box;
		}

		.news-view-title {
		    overflow:  hidden;
		    width:  100%;
		    height: 68px;
		    color:  #22202b;
		    font-size:  30px;
		    line-height:  68px;
		    text-align:  center;
		}

		.news-view-title h1 {
			 font-size:  30px;
			 font-weight: normal;
		}

		.news-view-info {
		    display:  flex;
		    overflow:  hidden;
		    width:  100%;
		    height: 50px;
		    justify-content:  center;
		    align-items:  center;
		    color:  #858585;
		    font-size:  14px;
		    text-align:  center;
		    line-height: 50px;
		}

		.news-view-info div {
		    margin: 0 6px;
		}

		.news-view-details {
		    overflow:  hidden;
		    width: 100%;
		    height:  auto;
		    padding: 95px 0 70px;
		    font-size:  14px;
		    text-align:  left;
		    line-height:  20px;
		}

		p.news-view-details-title {
		    color:  #22202b;
		    font-size:  18px;
		    line-height: 32px;
		}

		.news-view-other {
		    overflow: hidden;
		    width:  100%;
		    height:  34px;
		    padding-bottom: 30px;
		    color:  #22202b;
		    font-size:  14px;
		    line-height:  34px;
		}

		.news-view-prev {
			float: left;
			overflow: hidden;
			width: 50%;
			text-align: left;
		}

		.news-view-next {
			float: right;
			overflow: hidden;
			width: 50%;
			text-align: right;
		}

		.news-view-other a {
		    color: #22202b;
		}

		.news-view-other a:hover {
		    color: #ccc;
		}

		.news-view-share-box {
		    width: 100%;
		    height: auto;
		    padding: 40px 0 45px;
		    border-top: 2px solid #d5d5d8;
		}

		.news-view-tag-box {
		    float:  left;
		    overflow:  hidden;
		}
		.news-view-tag {
		    float:  left;
		    width:  103px;
		    height:  32px;
		    border: 2px solid #000;
		    box-sizing:  border-box;
		    font-size: 12px;
		    line-height: 28px;
		    text-align:  center;
		}

		.news-view-tag-box a {
		    display:  block;
		    width:  100%;
		    height:  100%;
		    color:  #000;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.news-view-tag-box a:hover {
		    background:  #000;
		    color: #feeabd;
		}

		.news-view-tag-box .news-view-tag:first-child {
		    margin-right: 17px;
		}

		.news-view-share {
		    float:  right;
		}

		.news-view-share .bdshare-button-style2-32 a {
		    margin: 0 7px;
		}

		a.bds_more {
		    display:  none;
		}

		.news-view-share .bdshare-button-style2-32 a.bds_tsina {
		    background: url(~/assets/images/news-view/bds_tsina.png) center center no-repeat;
		}

		.news-view-share .bdshare-button-style2-32 a.bds_weixin {
		    background: url(~/assets/images/news-view/bds_weixin.png) center center no-repeat;
		}

		.news-view-share .bdshare-button-style2-32 a.bds_qzone {
		    background: url(~/assets/images/news-view/bds_qzone.png) center center no-repeat;
		}

		.news-view-share .bdshare-button-style2-32 a.bds_sqq {
		    background: url(~/assets/images/news-view/bds_sqq.png) center center no-repeat;
		}

		.news-view-share .bdshare-button-style2-32 a.bds_tsina:hover {
		    opacity: 1;
		    filter: alpha(opacity=100);
		    background: url(~/assets/images/news-view/bds_tsina_hover.png) center center no-repeat;
		}

		.news-view-share .bdshare-button-style2-32 a.bds_weixin:hover {
		    opacity: 1;
		    filter: alpha(opacity=100);
		    background: url(~/assets/images/news-view/bds_weixin_hover.png) center center no-repeat;
		}

		.news-view-share .bdshare-button-style2-32 a.bds_qzone:hover {
		    opacity: 1;
		    filter: alpha(opacity=100);
		    background: url(~/assets/images/news-view/bds_qzone_hover.png) center center no-repeat;
		}

		.news-view-share .bdshare-button-style2-32 a.bds_sqq:hover {
		    opacity: 1;
		    filter: alpha(opacity=100);
		    background: url(~/assets/images/news-view/bds_sqq_hover.png) center center no-repeat;
		}
	/*News Views details end*/
	/*Related Article Start*/
		div#related-article {
		    width: 100%;
		    height: auto;
		}

		.related-article-box {
		    overflow: hidden;
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		}

		.related-article-title {
		    width: 100%;
		    height: 76px;
		    border-bottom: 2px solid #d5d5d8;
		    color: #22202b;
		    font-size: 22px;
		    line-height: 74px;
		    text-align: left;
		    box-sizing: border-box;
		}

		.related-article-list-box {
			overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding: 71px 0 54px;
		}

		.related-article-left {
		    float:  left;
		    width:  600px;
		    height:  104px;
		    padding-left: 220px;
		    box-sizing:  border-box;
		    background: url(~/assets/images/news-list/recom-article-left-bg.png) left center no-repeat;
		}

		.related-article-right {
		    float: right;
		    width:  600px;
		    height:  104px;
		    padding-left: 220px;
		    box-sizing:  border-box;
		    background: url(~/assets/images/news-list/recom-article-left-bg.png) left center no-repeat;
		}

		li.related-article-list {
		    overflow:  hidden;
		    width: 345px;
		    height: 26px;
		}

		.related-article-list-title {
		    position: relative;
		    width:  100%;
		    height:  100%;
		    padding-left: 6px;
		    box-sizing: border-box;
		    font-size:  14px;
		    text-align: left;
		    line-height: 26px;
		}

		.related-article-list-title::after {
		    position: absolute;
		    top: 50%;
		    left: 0;
		    content: "";
		    width: 2px;
		    height: 2px;
		    border-radius: 50%;
		    background: #22202b;
		}

		.related-article-list-title a {
		    display:  block;
		    overflow: hidden;
		    width:  100%;
		    height:  100%;
		    color: #999999;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.related-article-list-title a:hover{
			color:#000;
		}
	/*Related Article End*/
	/*Love Products Start*/
		div#love-products {
		    width:  100%;
		    height:  auto;
		}

		.love-products-box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		}

		.love-products-title {
		    width:  100%;
		    height: 76px;
		    border-bottom: 2px solid #d5d5d8;
		    color:  #22202b;
		    font-size:  22px;
		    line-height:  74px;
		    text-align:  left;
		    box-sizing:  border-box;
		}

		.love-products-list-box {
		    width:  100%;
		    height:  auto;
		    padding: 43px 0 133px;
		}

		.love-products-list-box ul {
		    overflow:  hidden;
		    width:  100%;
		}

		li.love-products-list {
		    float:  left;
		    width: 200px;
		    height:  auto;
		    margin-left: 50px;
		}

		.love-products-list-box ul li:first-child {
		    margin-left: 0px;
		}

		.love-products-list-img {
		    overflow:  hidden;
		    width:  100%;
		    height:  105px;
		}

		.love-products-list-img img {
		    width:  100%;
		    height:  100%;
		 	-webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.love-products-list-img img:hover{
		    -webkit-transform: scale(1.2);
			-ms-transform: scale(1.2);
			-o-transform: scale(1.2);
			transform: scale(1.2);
		}

		.love-products-list-title {
		    overflow:  hidden;
		    width:  100%;
		    height:  45px;
		    color:  #999;
		    font-size: 14px;
		    line-height:  45px;
		    text-align:  center;
		}

		.love-products-list-title a {
		    display:  block;
		    overflow:  hidden;
		    width:  100%;
		    height:  100%;
		    padding: 0 10px;
		    color:  #999;
		    box-sizing: border-box;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.love-products-list-title a:hover{
			color:#000;
		}
	/*Love Products End*/
	/*Latest Articles start*/
		div#latest-article {
		    width: 100%;
		    height: auto;
		}

		.latest-article-box {
		    overflow: hidden;
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		}

		.latest-article-title {
		    width: 100%;
		    height: 76px;
		    border-bottom: 2px solid #d5d5d8;
		    color: #22202b;
		    font-size: 22px;
		    line-height: 74px;
		    text-align: left;
		    box-sizing: border-box;
		}

		.latest-article-list-box {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding: 40px 0 20px;
		}

		.latest-article-list-box ul {
		    overflow: hidden;
		    width: 100%;
		}

		li.latest-article-list {
		    float:  left;
		    overflow:  hidden;
		    width:  400px;
		    height:  26px;
		}

		.latest-article-list-title {
		    position: relative;
		    width: 100%;
		    height: 100%;
		    padding-left: 6px;
		    box-sizing: border-box;
		    font-size: 14px;
		    text-align: left;
		    line-height: 26px;
		}

		.latest-article-list-title::after {
		    position: absolute;
		    top: 50%;
		    left: 0;
		    content: "";
		    width: 2px;
		    height: 2px;
		    border-radius: 50%;
		    background: #22202b;
		}

		.latest-article-list-title a {
		    display: block;
		    overflow: hidden;
		    width: 100%;
		    height: 100%;
		    color: #999999;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		}

		.latest-article-list-title a:hover{
		    color:#000;
		}
	/*Latest Articles end*/
</style>