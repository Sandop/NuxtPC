<template>
	<section class="container">
		<NewsBanner></NewsBanner>
		<!-- 面包屑部分 -->
		<div id="bread-nav">
			<div class="brand-nav-box">
				<div class="brand-nav-content">
					<div class="brand-nav-title"><span>当前位置:</span></div>
					<div class="brand-nav-list">
						<ul>
							<li><nuxt-link target="_blank" to="/">首页</nuxt-link></li>
							<li>></li>
							<li><nuxt-link target="_blank" to="/news">新闻中心</nuxt-link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 面包屑部分结束 -->
		<!-- 新闻主体列表部分 -->
		<div id="news-list" v-if="hiddenContent()">
			<div class="news-list-content">
				<div class="news-list-content-box">
					<div class="news-list-container">
						<ul class="news-list-nav">
							<li class="news-list-kind" :class="{active:(index + 1) == $route.params.category}" v-for="(list,index) in $store.state.headNewsNav" :key="index">
								<nuxt-link target="_blank" :to="{name: 'news-category',params: {category: list.articleCategoryId}}">{{list.articleCategoryName}}</nuxt-link>
							</li>
						</ul>
						<div class="news-list-tab-content">
							<div class="news-list-tab-box">
								<ul>
									<li class="news-list-details" v-for="(list,index) in newsListData" :key="index">
			                            <div class="news-list-left">
			                                <nuxt-link target="_blank" :to="{name:'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}"><img :src="list.articleImg.articleImgSrc" :alt="list.articleImg.articleImgAlt"></nuxt-link>
			                            </div>
			                            <div class="news-list-right">
			                                <div class="news-list-title">
			                                    <nuxt-link target="_blank" :to="{name:'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}"><h2>{{list.articleName}}</h2></nuxt-link>
			                                </div>
			                                <div class="news-list-desc">{{getTxt(list.articleText)}}</div>
			                                <div class="news-list-bottom">
			                                    <div class="news-list-tag-box">
			                                        <div class="news-list-tag"><a href="javascript:viod(0);">{{list.labelList[0].articleLabelName}}</a></div>
			                                        <div class="news-list-tag"><a href="javascript:viod(0);">{{list.labelList[1].articleLabelName}}</a></div>
			                                    </div>
			                                    <div class="news-list-time">
			                                        <p>{{list.articleAddTime}}</p>
			                                    </div>
			                                </div>
			                            </div>
			                       	</li>
								</ul>
								<div class="news-list-pagination-box">
									<pagination :total="total" :display="display" :current-page='current' @pagechange="pagechange"></pagination>
								</div>
							</div>							
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 新闻主体列表结束 -->

		<!-- Recommended Article Start-->
		<div id="recom-article" v-if="hiddenContent()">
			<div class="recom-article-box">
				<div class="recom-article-title">
					<p>推荐文章</p>
				</div>
				<div class="recom-article-list-box">
					<div class="recom-article-left">
						<ul>
							<li class="recom-article-list" v-for="(list,index) in recomArticleData" :key="list.articleId" v-if="index<4">
		        				<div class="recom-article-list-title">
		        		            <nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">{{list.articleName}}</nuxt-link>
		        				</div>
		        			</li>
						</ul>
					</div>
					<div class="recom-article-right">
						<ul>
							<li class="recom-article-list" v-for="(list,index) in recomArticleData" :key="list.articleId" v-if="index>3">
		        				<div class="recom-article-list-title">
		        		            <nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">{{list.articleName}}</nuxt-link>
		        				</div>
		        			</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- Recommended Article End-->

		<!-- Recommended Products Start-->
		<div id="recom-products" v-if="hiddenContent()">
			<div class="recom-products-box">
				<div class="recom-products-title">
					<p>推荐产品</p>
				</div>
				<div class="recom-products-list-box">
					<ul>
						<li class="recom-products-list" v-for="list in recomProductsData" :key="list.proId">
	                        <div class="recom-products-list-img">
	                            <nuxt-link target="_blank" :to="{name:'prod-pdV-id',params:{id: list.proId},query: {typeId: list.proPositionId,classId: list.proTypeId}}"><img :src="list.proImgs[0].proImgSrc" :alt="list.proImgs[0].proImgAlt"></nuxt-link>
	                        </div>
	                        <div class="recom-products-list-title">
	                            <nuxt-link target="_blank" :to="{name: 'prod-pdV-id',params:{id: list.proId},query: {typeId: list.proPositionId,classId: list.proTypeId}}">{{list.proName}}</nuxt-link>
	                        </div>
	                    </li>
					</ul>
				</div>
			</div>
		</div>
		<!-- Recommended Products End-->

		<!-- <nuxt-child></nuxt-child> -->
	</section>
</template>

<script>
	import axios from 'axios'
	import NewsBanner from '~/components/news/NewsBanner'
	import pagination from '~/components/common/pagination.vue'

	export default {
		data (){
			return {
				display: 8,   // 每页显示条数
				current: 1,   // 当前的页数
			}
		},
		head (){
			return {
				title: this.metaData.title,
				meta: [
					{name: 'keywords',hid: 'keywords', content: `${this.metaData.keyword}`},
					{name:'description',hid:'description',content:`${this.metaData.description}`}
				]
			}
		},
		validata ({ params }){
			return /^\d+$/.test(params.category)
		},
		async asyncData ({store,params}){
			let newsCategoryId = params.category;
			
			//新闻列表
			let newsListData = await axios(`${store.state.wordpressAPI}/article/getArticles/${newsCategoryId}/1/8`);
			//推荐文章
			let recomArticleData = await axios.get(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/${newsCategoryId}/8`);
			//推荐产品
			let recomProductsData = await axios.get(`${store.state.wordpressAPI}/product/getProRandom/5`);
			return {
				metaData: newsListData.data,
				newsListData: newsListData.data.list,
				total: newsListData.data.total,	
				recomArticleData: recomArticleData.data,
				recomProductsData: recomProductsData.data
			}
		},
		components: {
			NewsBanner,
			pagination
		},
		methods: {
			hiddenContent (){
				return !(/^\d+$/.test(this.$route.params.id));
			},
            pagechange (currentPage){
            	let categoryId = this.$route.params.category;
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		        axios.get(`${this.$store.state.wordpressAPI}/article/getArticles/${categoryId}/${currentPage}/8`)
		                .then((response)=> {
							this.newsListData = response.data.list;
							this.total = response.data.total;
		                })
		                .catch(function (error) {
		                 	console.log(error);
		                });
		    },
            getTxt (str){
	    		var txt = str.replace(/<\/?.+?>/g,"").replace(/&nbsp;/gi,"").replace(/(^\s+)|(\s+$)/g,"").replace(/\s/g,''); 
	  			txt = txt.length < 170 ? txt : txt.substring(0,170).concat('...');
	    		return txt;
	    	}
		}
	}
</script>

<style scoped>
	/*面包屑部分*/
		div#bread-nav {
		    width:  100%;
		    height:  auto;
		}

		#bread-nav{
			position: relative;
		}

		#bread-nav .brand-nav-content{
		    float: right;
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
	/* news-list start */
		div#news-list {
		    width:  100%;
		    height:  auto;
		}

		.news-list-content-box {
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		}

		.news-list-container {
		    width:  100%;
		    padding: 45px 0 54px;
		}

		.news-list-nav {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		}

		.news-list-kind {
		    float:  left;
		    overflow:  hidden;
		    width:  104px;
		    height:  40px;
		    margin-left:  20px;
		    border: 3px solid transparent;
		    box-sizing:  border-box;
		    color:  #000;
		    font-size:  14px;
		    text-align:  center;
		    line-height:  34px;
		    cursor: pointer;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.news-list-kind a{
		    display: block;
		    width: 100%;
		    height: 100%;
		    color:  #000;
		}

		.news-list-nav .news-list-kind:first-child {
		    margin-left: 0;
		}

		.news-list-kind.active,.news-list-kind:hover {
		    border: 3px solid #000;
		}

		.news-list-tab-content {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		}

		.news-list-tab-box {
			display: none;
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		}

		.news-list-tab-content .news-list-tab-box:first-child{
			display: block;
		}

		.news-list-tab-box ul {
		    overflow: hidden;
		    width:  100%;
		}

		li.news-list-details {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding-top: 113px;
		}

		.news-list-tab-box ul li.news-list-details:first-child{
			padding-top: 65px;
		}

		.news-list-left {
		    float:  left;
		    overflow:  hidden;
		    width:  367px;
		    height: 254px;
		}

		.news-list-left img {
		    width:  100%;
		    height:  100%;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.news-list-left img:hover{
		    -webkit-transform: scale(1.2);
			-ms-transform: scale(1.2);
			-o-transform: scale(1.2);
			transform: scale(1.2);
		}

		.news-list-right {
		    float:  right;
		    width:  787px;
		    height:  auto;
		}

		.news-list-title {
		    overflow:  hidden;
		    width:  100%;
		    height:  56px;
		}

		.news-list-title a {
		    display:  block;
		    overflow:  hidden;
		    width:  100%;
		    height:  100%;
		    color:  #22202b;
		    font-size:  22px;
		    line-height:  56px;
		    text-align:  left;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.news-list-title a h2{
		    display:  block;
		    overflow:  hidden;
		    width:  100%;
		    height:  100%;
		    font-weight:  normal;
		    font-size:  22px;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.news-list-title a:hover{
			text-decoration: underline;
		}

		.news-list-desc {
		    overflow:  hidden;
		    width:  100%;
		    height:  131px;
		    padding-top: 20px;
		    border-bottom: 2px solid #d5d5d8;
		    box-sizing:  border-box;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align:  left;
		}

		.news-list-bottom {
		    overflow:  hidden;
		    width:  100%;
		    height:  68px;
		    padding-top: 24px;
		    box-sizing:  border-box;
		}

		.news-list-tag-box {
		    float:  left;
		    overflow:  hidden;
		}

		.news-list-time {
		    float:  right;
		    color:  #999;
		    font-size:  12px;
		    line-height:  32px;
		    text-align:  center;
		}

		.news-list-tag {
		    float:  left;
		    width:  103px;
		    height:  32px;
		    border: 2px solid #000;
		    box-sizing:  border-box;
		    font-size: 12px;
		    line-height: 28px;
		    text-align:  center;
		}

		.news-list-tag-box a {
		    display:  block;
		    width:  100%;
		    height:  100%;
		    color:  #000;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.news-list-tag-box a:hover {
		    background:  #000;
		    color: #feeabd;
		}

		.news-list-tag-box .news-list-tag:first-child {
		    margin-right: 17px;
		}


		.news-list-pagination-box {
		    width:  100%;
		    height:  auto;
		    padding-top: 84px;
		    text-align:  center;
		}
	/* news-list end */

	/*Recommended Article Start*/
		div#recom-article {
		    width: 100%;
		    height: auto;
		}

		.recom-article-box {
		    overflow: hidden;
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		}

		.recom-article-title {
		    width: 100%;
		    height: 76px;
		    border-bottom: 2px solid #d5d5d8;
		    color: #22202b;
		    font-size: 22px;
		    line-height: 74px;
		    text-align: left;
		    box-sizing: border-box;
		}

		.recom-article-list-box {
			overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding: 71px 0 54px;
		}

		.recom-article-left {
		    float:  left;
		    width:  600px;
		    height:  104px;
		    padding-left: 220px;
		    box-sizing:  border-box;
		    background: url(~/assets/images/news-list/recom-article-left-bg.png) left center no-repeat;
		}

		.recom-article-right {
		    float: right;
		    width:  600px;
		    height:  104px;
		    padding-left: 220px;
		    box-sizing:  border-box;
		    background: url(~/assets/images/news-list/recom-article-left-bg.png) left center no-repeat;
		}

		li.recom-article-list {
		    overflow:  hidden;
		    width: 345px;
		    height: 26px;
		}

		.recom-article-list-title {
		    position: relative;
		    width:  100%;
		    height:  100%;
		    padding-left: 6px;
		    box-sizing: border-box;
		    font-size:  14px;
		    text-align: left;
		    line-height: 26px;
		}

		.recom-article-list-title::after {
		    position: absolute;
		    top: 50%;
		    left: 0;
		    content: "";
		    width: 2px;
		    height: 2px;
		    border-radius: 50%;
		    background: #22202b;
		}

		.recom-article-list-title a {
		    display:  block;
		    overflow: hidden;
		    width:  100%;
		    height:  100%;
		    color: #999999;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.recom-article-list-title a:hover{
			color:#000;
		}
	/*Recommended Article End*/

	/*Recommended Products Start*/
		div#recom-products {
		    width:  100%;
		    height:  auto;
		}

		.recom-products-box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		}

		.recom-products-title {
		    width:  100%;
		    height: 76px;
		    border-bottom: 2px solid #d5d5d8;
		    color:  #22202b;
		    font-size:  22px;
		    line-height:  74px;
		    text-align:  left;
		    box-sizing:  border-box;
		}

		.recom-products-list-box {
		    width:  100%;
		    height:  auto;
		    padding: 43px 0 133px;
		}

		.recom-products-list-box ul {
		    overflow:  hidden;
		    width:  100%;
		}

		li.recom-products-list {
		    float:  left;
		    width: 200px;
		    height:  auto;
		    margin-left: 50px;
		}

		.recom-products-list-box ul li:first-child {
		    margin-left: 0px;
		}

		.recom-products-list-img {
		    overflow:  hidden;
		    width:  100%;
		    height:  200px;
		}

		.recom-products-list-img img {
		    width:  100%;
		    height:  100%;
		 	-webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.recom-products-list-img img:hover{
		    -webkit-transform: scale(1.2);
			-ms-transform: scale(1.2);
			-o-transform: scale(1.2);
			transform: scale(1.2);
		}

		.recom-products-list-title {
		    overflow:  hidden;
		    width:  100%;
		    height:  45px;
		    color:  #999;
		    font-size: 14px;
		    line-height:  45px;
		    text-align:  center;
		}

		.recom-products-list-title a {
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

		.recom-products-list-title a:hover{
			color:#000;
		}
	/*Recommended Products End*/
</style>