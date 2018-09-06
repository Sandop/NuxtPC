<template>
	<section class="container">
		<NewsBanner></NewsBanner>
		<!-- 面包屑部分 -->
		<div id="bread-nav">
			<div class="brand-nav-box clearfix">
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
		<!-- 推荐资讯部分 -->
		<div id="recom-infomation">
			<div class="recom-info-box">
				<div class="recom-info-top">
					<div class="recom-info-titleC">
						<h2>推荐资讯</h2>
					</div>
					<div class="recom-info-titleE">
						<p>Recommendation information</p>
					</div>
				</div>
				<div class="recom-info-content clearfix">
					<ul>
						<li class="recom-info-list" v-for="(list,index) in recomInfo" :key="list.articleId">
	                		<div class="recom-info-img">
	                			<nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">
	                				<img :src="list.articleImg.articleImgSrc" :alt="list.articleImg.articleImgAlt">
	                			</nuxt-link>
	                		</div>
	                		<div class="recom-info-title-box">
	                			<div class="recom-info-title">
	                				<nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}"><h2>{{list.articleName}}</h2></nuxt-link>
	                			</div>
	                			<div class="recom-info-times">
	                				<p>{{list.articleAddTime}}</p>
	                			</div>
	                		</div>
	                		<div class="recom-info-deesc" >{{getTxt(list.articleText,index,136,42)}}</div>
	                		<div class="recom-info-more">
	                			<nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">了解更多</nuxt-link>
	                		</div>
	                	</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 推荐资讯部分结束 -->
		<!-- 公司和行业资讯部分 -->
		<div id="company-industry-information">
			<div class="company-industry-info-box">
				<div class="company-info-box">
					<div class="company-info-top">
						<div class="company-info-titleC">
							<h2>公司资讯</h2>
						</div>
						<div class="company-info-titleE">
							<p>Company information</p>
						</div>
					</div>
					<div class="company-info-content">
						<ul>
							<li class="company-info-list" v-for="(list,index) in companyInfo" :key="list.articleId">
	                			<div class="company-info-title">
	                				<nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}"><h2>{{list.articleName}}</h2></nuxt-link>
	                			</div>
	                			<div class="company-info-desc">{{getTxt(list.articleText,index,90)}}</div>
	                		</li>
						</ul>
					</div>
				</div>
				<div class="industry-info-box">
					<div class="industry-info-top">
						<div class="industry-info-titleC">
							<h2>行业资讯</h2>
						</div>
						<div class="industry-info-titleE">
							<p>Industry information</p>
						</div>
					</div>
					<div class="industry-info-content">
						<ul>
							<li class="industry-info-list" v-for="(list,index) in industryInfo" :key="list.articleId">
	                            <div class="industry-info-title">
	                                <nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}"><h2>{{list.articleName}}</h2></nuxt-link>
	                            </div>
	                            <div class="industry-info-desc">{{getTxt(list.articleText,index,90)}}</div>
	                        </li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 公司和行业资讯结束 -->
		
		<!-- 家具百科部分 -->
		<div id="furniture-encyclopedia">
			<div class="furniture-encyclopedia-box">
				<div class="furniture-encyclopedia-top">
					<div class="furniture-encyclopedia-titleC">
						<h2>家具百科</h2>
					</div>
					<div class="furniture-encyclopedia-titleE">
						<p>Furniture Encyclopedia</p>
					</div>
				</div>
				<div class="furniture-encyclopedia-content clearfix">
					<ul>
						<li class="furniture-encyclopedia-list" v-for="(list,index) in furnitureInfo" :key="list.articleId">
							<div class="fur-ency-list-img">
								<nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">
									<img :src="list.articleImg.articleImgSrc" :alt="list.articleImg.articleImgAlt">
								</nuxt-link>
							</div>
							<div class="fur-ency-list-title">
								<nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}"><h2>{{list.articleName}}</h2></nuxt-link>
							</div>
							<div class="fur-ency-list-desc">{{getTxt(list.articleText,index,115,32)}}</div>
							<div class="fur-ency-list-time">
								<p>{{list.articleAddTime}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 家具百科部分结束 -->

		<!-- 品牌选购部分 -->
		<div id="brand-selection">
			<div class="brand-selection-box">
				<div class="brand-selection-top">
					<div class="brand-selection-titleC">
						<h2>品牌选购</h2>
					</div>
					<div class="brand-selection-titleE">
						<p>Brand Selection</p>
					</div>
				</div>
				<div class="brand-selection-content clearfix">
					<ul>
						<li class="brand-selection-list" v-for="(list,index) in brandInfo" :key="list.articleId">
	            			<div class="brand-selection-list-img">
	            				<nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">
									<img :src="list.articleImg.articleImgSrc" :alt="list.articleImg.articleImgAlt">
								</nuxt-link>
	            			</div>
	            			<div class="brand-selection-list-title">
	            				<nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}"><h2>{{list.articleName}}</h2></nuxt-link>
	            			</div>
	            			<div class="brand-selection-list-desc">{{getTxt(list.articleText,index,115,32)}}</div>
	            			<div class="brand-selection-list-time">
	            				<p>{{list.articleAddTime}}</p>
	            			</div>
	            		</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 品牌选购部分结束 -->

		<!-- 装修摆放部分 -->
		<div id="decoration-placement">
			<div class="decoration-place-box">
				<div class="decoration-place-top">
					<div class="decoration-place-titleC">
						<h2>装修摆放</h2>
					</div>
					<div class="decoration-place-titleE">
						<p>Decoration Placement</p>
					</div>
				</div>
				<div class="decoration-place-content clearfix">
					<ul>
						<li class="decoration-place-list" v-for="list in decorationInfo" :key="list.articleId">
	            			<div class="decoration-place-img">
	            				<nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}">
									<img :src="list.articleImg.articleImgSrc" :alt="list.articleImg.articleImgAlt">
								</nuxt-link>
	            			</div>
	            			<div class="decoration-place-title">
	            				<nuxt-link target="_blank" :to="{name: 'news-newsView-id',params:{id:list.articleId},query: {category: list.articleCategoryId}}"><h2>{{list.articleName}}</h2></nuxt-link>
	            			</div>
	            			<div class="decoration-place-time"><p>{{getTime(list.articleAddTime)}}</p></div>
	            		</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 装修摆放部分结束 -->
	</section>
</template>

<script>
	import axios from 'axios'
	import NewsBanner from '~/components/news/NewsBanner'
	
	export default {
		data (){
			return{}
		},
		components: {
			NewsBanner
		},
		head () {
		  return {
		    title:this.metaData.navigationTitle,
		    meta: [
		      {name:'keywords',hid: 'keywords',content:`${this.metaData.navigationKeyword}`},
		      {name:'description',hid:'description',content:`${this.metaData.navigationDescription}`}
		    ]
		  }
		},
		async asyncData({params,store}){
			//head信息
		    let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/12`);
			//推荐资讯
	        let recomData = await axios(`${store.state.wordpressAPI}/article/getArticleCenterRecommends`);
	        //公司资讯
	        let companyData = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/1/5`);

	        //行业资讯
	        let industryData = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/5/5`);
	        //家具百科
	        let furnitureData = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/2/5`);

	        //品牌选购
	        let brandData = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/3/5`);

	        //装修摆放
	        let decorationData = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/4/12`);
	        return {
	        	metaData: metaData.data,
	        	recomInfo: recomData.data,
	        	companyInfo: companyData.data,
	        	industryInfo: industryData.data,
	        	furnitureInfo: furnitureData.data,
	        	brandInfo: brandData.data,
	        	decorationInfo: decorationData.data
	        }

	    },
	    methods: {
	    	getTxt (str,index,num1=136,num2=42){
	    		var txt = str.replace(/<\/?.+?>/g,"").replace(/&nbsp;/ig,"").replace(/(^\s+)|(\s+$)/g,"").replace(/\s/g,''); 
	    		if (index == 0) {
	    			//截取指定字数末尾显示省略号
	    			txt = txt.length < num1 ? txt : txt.substring(0,num1).concat('...');
	    		} else {
	    			txt = txt.length < num2 ? txt : txt.substring(0,num2).concat('...');
	    		}
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
	/*面包屑部分*/
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
	/*面包屑部分结束*/
	/* 推荐资讯部分 */
		div#recom-infomation {
		    width:  100%;
		    height:  auto;
		}

		.recom-info-box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding-bottom: 150px;
		    border-bottom: 2px solid #d5d5d8;
		}

		.recom-info-top {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding: 80px 0 75px;
		    border-bottom: 2px solid #d5d5d8;
		    text-align:  center;
		}

		.recom-info-titleC {
		    overflow:  hidden;
		    width:  100%;
		    height:  46px;
			font-size:  38px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 46px;
		}

		.recom-info-titleE {
		    width:  100%;
		    height:  22px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  22px;
		    text-align:  center;
		}

		.recom-info-content {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding-top: 60px;
		}

		.recom-info-content ul {
		    overflow:  hidden;
		}

		li.recom-info-list {
		    float:  left;
		    width: 367px;
		    height:  auto;
		}

		.recom-info-img {
		    overflow:  hidden;
		    width:  367px;
		    height:  254px;
		    cursor:  pointer;
		}

		.recom-info-img img {
		    width:  100%;
		    height:  100%;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.recom-info-img img:hover {
		    -webkit-transform: scale(1.2);
			-ms-transform: scale(1.2);
			-o-transform: scale(1.2);
			transform: scale(1.2);
		}

		.recom-info-title-box {
		    overflow:  hidden;
		    width:  100%;
		    height: 40px;
		    margin-top: 6px;
		}

		.recom-info-title {
		    width:  100%;
		    height:  100%;
		    font-size:  18px;
		    line-height:  40px;
		    text-align:  center;
		}

		.recom-info-title a {
		    display:  block;
		    overflow:  hidden;
		    width:  100%;
		    height:  100%;
		    color:  #22202b;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.recom-info-title a h2{
		    display:  block;
		    overflow:  hidden;
		    width:  100%;
		    height:  100%;
			font-weight: normal;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.recom-info-title a:hover{
			text-decoration: underline;
		}

		.recom-info-times {
		    display:  none;
		    height: 40px;
		    color:  #999999;
		    font-size:  12px;
		    line-height:  40px;
		    text-align:  center;
		}

		.recom-info-deesc {
		    overflow:  hidden;
		    width:  100%;
		    height: 40px;
		    padding:  0 9px;
		    color:  #858585;
		    font-size: 14px;
		    line-height:  20px;
		    text-align:  left;
		    box-sizing:  border-box;
		}

		.recom-info-more {
		    overflow:  hidden;
		    width: 103px;
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

		.recom-info-more:hover{
			-webkit-transform: translateY(-5px);
			-ms-transform: translateY(-5px);
			-o-transform: translateY(-5px);
			transform: translateY(-5px);
		}

		.recom-info-more a {
		    display: block;
		    width: 100%;
		    height: 100%;
		    color: #22202b;
		    font-weight: bold;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.recom-info-more:hover a {
		    background:  #22202b;
		    color: #feeabd;
		}

		.recom-info-content ul li:first-child {
		    width:  100%;
		    height:  auto;
		    margin-bottom: 50px;
		}

		.recom-info-content ul li:nth-child(3) {
		    margin: 0 49px;
		}

		.recom-info-content ul li:first-child .recom-info-img {
		    display:  none;
		}

		.recom-info-content ul li:first-child .recom-info-title {
		    float:  left;
		    width: 1000px;
		    text-align:  left;
		}

		.recom-info-content ul li:first-child .recom-info-times {
		    display:  block;
		    float:  right;
		}

		.recom-info-content ul li:first-child .recom-info-deesc {
		    padding: 0;
		}

		.recom-info-content ul li:first-child .recom-info-more {
		    display:  none;
		}
	/* 推荐资讯部分结束 */
	/* 公司和行业资讯部分 */
		div#company-industry-information {
		    width: 100%;
		    height: auto;
		}

		.company-industry-info-box {
		    overflow: hidden;
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		    padding: 150px 0;
		    border-bottom: 2px solid #d5d5d8;
		}
		/* company-informations start */
			.company-info-box {
			    float: left;
			    width:  600px;
			    height:  auto;
			    padding-right:  65px;
			    box-sizing:  border-box;
			}

			.company-info-top {
			    overflow: hidden;
			    width: 100%;
			    height: auto;
			    padding-bottom: 20px;
			    text-align: left;
			}

			.company-info-titleC {
			    overflow: hidden;
			    width: 100%;
			    height:  46px;
				font-size:  38px;
				font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
				font-weight: 900;
				color: #22202b;
				line-height: 46px;
			}

			.company-info-titleE {
			    width: 100%;
			    height: 18px;
			    color: #858585;
			    font-size: 14px;
			    line-height: 18px;
			}

			.company-info-content {
			    overflow:  hidden;
			    width:  100%;
			    height:  auto;
			}

			.company-info-content ul {
			    overflow:  hidden;
			}

			li.company-info-list {
			    overflow:  hidden;
			    width:  100%;
			    height:  auto;
			}

			.company-info-title {
			    position: relative;
			    width:  100%;
			    height:  26px;
			    padding-left: 8px;
			    font-size:  14px;
			    line-height:  26px;
			    text-align:  left;
			    box-sizing:  border-box;
			}

			.company-info-title::after {
			    position:  absolute;
			    top: 50%;
			    left:  0;
			    content:  "";
			    width:  2px;
			    height:  2px;
			    border-radius:  50%;
			    background: #22202b;
			}

			.company-info-content ul li:first-child .company-info-title::after{
				display: none;
			}

			.company-info-title a {
			    overflow:  hidden;
			    width:  100%;
			    height: 100%;
			    color:  #22202b;
			    text-overflow:  ellipsis;
			    white-space:  nowrap;
			}

			.company-info-title a h2{
			    overflow:  hidden;
			    width:  100%;
			    height: 100%;
			    font-weight: normal;
			    text-overflow:  ellipsis;
			    white-space:  nowrap;
			}

			.company-info-title a:hover{
				text-decoration: underline;
			}

			.company-info-desc {
			    display:  none;
			    width:  100%;
			    height:  auto;
			    color:  #858585;
			    font-size:  14px;
			    text-align:  left;
			    line-height: 18px;
			}

			.company-info-content ul li:first-child {
			    padding-bottom: 30px;
			}

			.company-info-content ul li:first-child .company-info-title {
			    overflow:  hidden;
			    width:  100%;
			    height: 72px;
			    padding-left:  0;
			    font-size:  22px;
			    line-height:  72px;
			    background:  none;
			}

			.company-info-content ul li:first-child .company-info-desc {
			    display:  block;
			}
		/* company-informations end */
		/* industry-informations start */
			.industry-info-box {
			    float: left;
			    width:  600px;
			    height:  auto;
			    padding-left:  65px;
			    box-sizing:  border-box;
			}

			.industry-info-top {
			    overflow: hidden;
			    width: 100%;
			    height: auto;
			    padding-bottom: 20px;
			    text-align: left;
			}

			.industry-info-titleC {
			    overflow: hidden;
			    width: 100%;
			    height:  46px;
				font-size:  38px;
				font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
				font-weight: 900;
				color: #22202b;
				line-height: 46px;
			}

			.industry-info-titleE {
			    width: 100%;
			    height: 18px;
			    color: #858585;
			    font-size: 14px;
			    line-height: 18px;
			}

			.industry-info-content {
			    overflow:  hidden;
			    width:  100%;
			    height:  auto;
			}

			.industry-info-content ul {
			    overflow:  hidden;
			}

			li.industry-info-list {
			    overflow:  hidden;
			    width:  100%;
			    height:  auto;
			}

			.industry-info-title {
			    position: relative;
			    width:  100%;
			    height:  26px;
			    padding-left: 8px;
			    font-size:  14px;
			    line-height:  26px;
			    text-align:  left;
			    box-sizing:  border-box;
			}

			.industry-info-title::after {
			    position: absolute;
			    top: 50%;
			    left: 0;
			    content: "";
			    width: 2px;
			    height: 2px;
			    border-radius: 50%;
			    background: #22202b;
			}

			.industry-info-content ul li:first-child .industry-info-title::after{
				display: none;
			}

			.industry-info-title a {
			    overflow:  hidden;
			    width:  100%;
			    height: 100%;
			    color:  #22202b;
			    text-overflow:  ellipsis;
			    white-space:  nowrap;
			}

			.industry-info-title a h2{
			    overflow:  hidden;
			    width:  100%;
			    height: 100%;
			    font-weight:  normal;
			    text-overflow:  ellipsis;
			    white-space:  nowrap;
			}

			.industry-info-title a:hover{
				text-decoration: underline;
			}

			.industry-info-desc {
			    display:  none;
			    width:  100%;
			    height:  auto;
			    color:  #858585;
			    font-size:  14px;
			    text-align:  left;
			    line-height: 18px;
			}

			.industry-info-content ul li:first-child {
			    padding-bottom: 30px;
			}

			.industry-info-content ul li:first-child .industry-info-title {
			    overflow:  hidden;
			    width:  100%;
			    height: 72px;
			    padding-left:  0;
			    font-size:  22px;
			    line-height:  72px;
			    background:  none;
			}

			.industry-info-content ul li:first-child .industry-info-desc {
			    display:  block;
			}
		/* industry-informations end */
	/* 公司和行业资讯部分结束 */

	/*furniture-encyclopedia start*/
		div#furniture-encyclopedia {
		    width: 100%;
		    height: auto;
		}

		.furniture-encyclopedia-box {
		    overflow: hidden;
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		    padding-bottom: 150px;
		    border-bottom: 2px solid #d5d5d8;
		}

		.furniture-encyclopedia-top {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding: 150px 0 60px;
		    text-align: center;
		}

		.furniture-encyclopedia-titleC {
		    overflow: hidden;
		    width: 100%;
		    height:  46px;
			font-size:  38px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 46px;
		}

		.furniture-encyclopedia-titleE {
		    width: 100%;
		    height: 22px;
		    color: #858585;
		    font-size: 14px;
		    line-height: 22px;
		    text-align: center;
		}

		.furniture-encyclopedia-content {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding-top: 60px;
		}

		.furniture-encyclopedia-content ul {
		    overflow:  hidden;
		}

		li.furniture-encyclopedia-list {
		    float:  left;
		    overflow:  hidden;
		    width:  600px;
		    height:  auto;
		    padding-top: 15px;
		    padding-left:  60px;
		    box-sizing:  border-box;
		}

		.fur-ency-list-img {
		    display: none;
		    overflow:  hidden;
		    width:  600px;
		    height:  335px;
		}

		.fur-ency-list-img img {
		    width:  100%;
		    height:  100%;
		 	-webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.fur-ency-list-img img:hover {
		    -webkit-transform: scale(1.2);
			-ms-transform: scale(1.2);
			-o-transform: scale(1.2);
			transform: scale(1.2);
		}

		.fur-ency-list-title {
		    overflow:  hidden;
		    width:  100%;
		    height:  60px;
		    font-size:  22px;
		    text-align:  left;
		    line-height:  60px;
		}

		.fur-ency-list-title a {
		    display: block;
		    overflow: hidden;
		    width:  100%;
		    height:  100%;
		    color:  #22202b;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.fur-ency-list-title a h2{
		    display: block;
		    overflow: hidden;
		    width:  100%;
		    height:  100%;
		    font-weight:  normal;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.fur-ency-list-title a:hover{
			text-decoration: underline;
		}

		.fur-ency-list-desc {
		    width:  100%;
		    height:  auto;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align:  left;
		}

		.fur-ency-list-time {
		    width:  100%;
		    height:  24px;
		    color:  #ccc;
		    font-size:  12px;
		    text-align:  left;
		    line-height:  24px;
		}

		.furniture-encyclopedia-content ul li:first-child {
		    padding: 0px;
		}

		.furniture-encyclopedia-content ul li:first-child .fur-ency-list-img {
		    display:  block;
		}

		.furniture-encyclopedia-content ul li:first-child .fur-ency-list-time {
		    margin-top: 20px;
		}
	/*furniture-encyclopedia end*/
	/*brand-selection start*/
		div#brand-selection {
		    width: 100%;
		    height: auto;
		}

		.brand-selection-box {
		    overflow: hidden;
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		    padding-bottom: 150px;
		    border-bottom: 2px solid #d5d5d8;
		}

		.brand-selection-top {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding: 150px 0 60px;
		    text-align: center;
		}

		.brand-selection-titleC {
		    overflow: hidden;
		    width: 100%;
		    height:  46px;
			font-size:  38px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 46px;
		}

		.brand-selection-titleE {
		    width: 100%;
		    height: 22px;
		    color: #858585;
		    font-size: 14px;
		    line-height: 22px;
		    text-align: center;
		}

		.brand-selection-content {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding-top: 60px;
		}

		.brand-selection-content ul {
		    overflow:  hidden;
		}

		li.brand-selection-list {
		    float: right;
		    overflow:  hidden;
		    width:  600px;
		    height:  auto;
		    padding-top: 15px;
		    padding-right: 60px;
		    box-sizing:  border-box;
		}

		.brand-selection-list-img {
		    display: none;
		    overflow:  hidden;
		    width:  600px;
		    height:  335px;
		}

		.brand-selection-list-img img {
		    width:  100%;
		    height:  100%;
		 	-webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.brand-selection-list-img img:hover {
		    -webkit-transform: scale(1.2);
			-ms-transform: scale(1.2);
			-o-transform: scale(1.2);
			transform: scale(1.2);
		}

		.brand-selection-list-title {
		    overflow:  hidden;
		    width:  100%;
		    height:  60px;
		    font-size:  22px;
		    text-align:  left;
		    line-height:  60px;
		}

		.brand-selection-list-title a {
		    display: block;
		    overflow: hidden;
		    width:  100%;
		    height:  100%;
		    color:  #22202b;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.brand-selection-list-title a h2{
		    display: block;
		    overflow: hidden;
		    width:  100%;
		    height:  100%;
		    font-weight:  normal;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.brand-selection-list-title a:hover{
			text-decoration: underline;
		}

		.brand-selection-list-desc {
		    width:  100%;
		    height:  auto;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align:  left;
		}

		.brand-selection-list-time {
		    width:  100%;
		    height:  24px;
		    color:  #ccc;
		    font-size:  12px;
		    text-align:  left;
		    line-height:  24px;
		}

		.brand-selection-content ul li:first-child {
		    padding: 0px;
		}

		.brand-selection-content ul li:first-child .brand-selection-list-img {
		    display:  block;
		}

		.brand-selection-content ul li:first-child .brand-selection-list-time {
		    margin-top: 20px;
		}
	/*brand-selection end*/

	/*decoration-place start*/
		div#decoration-placement {
		    width: 100%;
		    height: auto;
		}

		.decoration-place-box {
		    overflow: hidden;
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		    padding-bottom: 150px;
		}

		.decoration-place-top {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding: 150px 0 80px;
		    text-align: center;
		}

		.decoration-place-titleC {
		    overflow: hidden;
		    width: 100%;
		    height:  46px;
			font-size:  38px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 46px;
		}

		.decoration-place-titleE {
		    width: 100%;
		    height: 22px;
		    color: #858585;
		    font-size: 14px;
		    line-height: 22px;
		    text-align: center;
		}

		.decoration-place-content {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding-top: 60px;
		}

		.decoration-place-content ul {
		    overflow:  hidden;
		}

		li.decoration-place-list {
		    float:  left;
		    overflow:  hidden;
		    width:  367px;
		    height:  auto;
		    margin-left:  49px;
		}

		.decoration-place-content ul li:nth-child(3n+1) {
		    margin-left: 0;
		}

		.decoration-place-img {
		    display:  none;
		    overflow:  hidden;
		    width:  100%;
		    height:  254px;
		}

		.decoration-place-img img {
		    width:  100%;
		    height: 100%;
			-webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.decoration-place-img img:hover {
		    -webkit-transform: scale(1.2);
			-ms-transform: scale(1.2);
			-o-transform: scale(1.2);
			transform: scale(1.2);
		}

		.decoration-place-title {
		    float:  left;
		    width: 290px;
		    height:  24px;
		    padding-left:  6px;
		    font-size:  14px;
		    text-align:  left;
		    line-height:  24px;
		    box-sizing:  border-box;
		}

		.decoration-place-title a {
		    display:  block;
		    overflow: hidden;
		    width:  100%;
		    height:  100%;
		    color: #666;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.decoration-place-title a h2{
		    display:  block;
		    overflow: hidden;
		    width:  100%;
		    height:  100%;
		    font-weight: normal;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.decoration-place-title a:hover{
			text-decoration: underline;
		}

		.decoration-place-time {
		    float:  right;
		    height:  24px;
		    padding:  0 12px;
		    color:  #858585;
		    font-size:  14px;
		    text-align:  center;
		    line-height: 24px;
		}

		.decoration-place-content ul li:nth-child(1),.decoration-place-content ul li:nth-child(2),.decoration-place-content ul li:nth-child(3) {
		    padding-bottom: 50px;
		}

		.decoration-place-content ul li:nth-child(1) .decoration-place-img,.decoration-place-content ul li:nth-child(2) .decoration-place-img,.decoration-place-content ul li:nth-child(3) .decoration-place-img {
		    display:  block;
		}

		.decoration-place-content ul li:nth-child(1) .decoration-place-time,.decoration-place-content ul li:nth-child(2) .decoration-place-time,.decoration-place-content ul li:nth-child(3) .decoration-place-time {
		    display:  none;
		}

		.decoration-place-content ul li:nth-child(1) .decoration-place-title,.decoration-place-content ul li:nth-child(2) .decoration-place-title,.decoration-place-content ul li:nth-child(3) .decoration-place-title {
		    width:  100%;
		    height:  52px;
		    padding: 0;
		    background: none;
		    font-size:  18px;
		    line-height:  52px;
		    text-align:  center;
		}

		.decoration-place-content ul li:nth-child(1) .decoration-place-title a, .decoration-place-content ul li:nth-child(2) .decoration-place-title a, .decoration-place-content ul li:nth-child(3) .decoration-place-title a {
		    color: #22202b;
		}
	/*decoration-place end*/
</style>