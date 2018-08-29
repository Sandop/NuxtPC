<template>
	<section class="cotainer">
		<!-- banner start -->
		<div id="common-banner">
			<div class="common-banner-container">
				<div class="common-banner-img">
					<img src="~/assets/images/questions/banner.png">
				</div>
			</div>
		</div>
		<!-- banner end -->
		
		<!-- 面包屑部分 -->
		<div id="bread-nav">
			<div class="brand-nav-box clearfix">
				<div class="brand-nav-content">
					<div class="brand-nav-title"><span>当前位置:</span></div>
					<div class="brand-nav-list">
						<ul>
							<li><nuxt-link target="_blank" to="/">首页</nuxt-link></li>
							<li>></li>
							<li><nuxt-link target="_blank" to="/service/contact">服务中心</nuxt-link></li>
							<li>></li>
							<li><nuxt-link target="_blank" to="/service/questions">常见问题</nuxt-link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 面包屑部分结束 -->

		<!-- Questions View details start-->
		<div id="news-view_wrap">
			<div class="news-view-box">
				<div class="news-view-details-wrap">
					<div class="news-view-title-box">
						<div class="news-view-title"><p>{{articleData.articleName}}</p></div>
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
						<nuxt-link :to="{name:'service-id',params:{id:preNextData[0].articleId}}">
							<span>上一篇:</span>
							<span class="news-view-prev-title">{{preNextData[0].articleName}}</span>
						</nuxt-link>
					</div>
					<div class="news-view-next" v-if=" preNextData[0].articleId > this.$route.params.id">
						<nuxt-link :to="{name:'service-id',params:{id:preNextData[0].articleId}}">
							<span>下一篇:</span>
							<span class="news-view-next-title">{{preNextData[0].articleName}}</span>
						</nuxt-link>
					</div>
				</div>
				<div class="news-view-other" v-if="preNextData.length == 2">
					<div class="news-view-prev">
						<nuxt-link :to="{name:'service-id',params:{id:preNextData[0].articleId}}">
							<span>上一篇:</span>
							<span class="news-view-prev-title">{{preNextData[0].articleName}}</span>
						</nuxt-link>
					</div>
					<div class="news-view-next">
						<nuxt-link :to="{name:'service-id',params:{id:preNextData[1].articleId}}">
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
		<!-- Questions Views details end-->
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
		async asyncData ({params,store}){
			let parId = params.category;
	    	//详情数据
	    	let articleData = await axios.get(`${store.state.wordpressAPI}/article/getArticleDetails/${params.id}`);

	    	//上下篇数据
	    	let preNextData = await axios.get(`${store.state.wordpressAPI}/article/getArticleNextAndBefore/20/${params.id}`);
	    	return {
	    		articleData: articleData.data,
	    		preNextData: preNextData.data.list
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
<style scoped>
	/* banner部分 */
	    #common-banner {
	        position: relative;
	        overflow: hidden;
	        width: 100%;
	        height: 600px;
	    }

	    .marginTop{
	        margin-top: 173px;
	    }

	    .common-banner-container {
	        position: relative;
	        width: 1200px;
	        height: 100%;
	        margin: 0 auto;
	    }

	    .common-banner-img {
	        position: absolute;
	        top: 0;
	        left: 50%;
	        overflow: hidden;
	        width: 1920px;
	        height: 100%;
	        margin-left: -960px;
	    }
	/* banner部分结束 */
	/*面包屑开始*/
		div#bread-nav .brand-nav-box {
		    line-height: 150px;
		}
		div#bread-nav {
		    width:  100%;
		    height:  auto;
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
	/*面包屑结束*/

	/*Questions Views details start*/
		div#news-view_wrap {
		    width:  100%;
		    height:  auto;
		}

		.news-view-box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding-bottom: 150px;
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
		    color:  #858585;
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
	/*Questions Views details end*/
</style>

