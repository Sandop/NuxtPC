<template>
	<header class="v-header clearfix">
		<div id="index-header" :class="headFixed == true ? 'fixedTop' : ''">
			<div class="index-header-box">
				<div class="i-h-top">
					<div class="h-t-contact">
						<nuxt-link to="/service/contact">联系方式</nuxt-link><nuxt-link to="/join">招商加盟</nuxt-link><span>欢迎您进入<h1>卫诗理</h1>官网！</span>
					</div>
					<div class="h-t-logo">
						<nuxt-link to="/">
							<img src="~/assets/images/index/TThome-logo.png" alt="卫诗理">
						</nuxt-link>
					</div>
					<div class="h-t-mobile">
						<div class="t-m-reg">
							<a href="#">注册</a>
						</div>
						<div class="t-m-login">
							<a href="#">登录</a>
						</div>
						<div class="t-m-mobile" @click="showCode">
							<a href="#">移动版</a>
						</div>
						<div class="t-m-mobile-code" v-if="isShowCode">
							<img src="~/assets/images/index/index-mobile.png" alt="卫诗理">
						</div>
					</div>
					
				</div>
				<div class="i-h-nav">
					<ul class="h-nav-list">
						<li><nuxt-link to="/">首页</nuxt-link></li>
						<li>
							<nuxt-link to="/brand">品牌故事</nuxt-link>
							<ul class="h-nav-list-child">
								<li><a href="/brand#brand-story">品牌故事</a></li>
								<li><a href="/brand#brand-background">品牌背景</a></li>
								<li><a href="/brand#brand-development">发展历程</a></li>
								<li><a href="/brand#brand-concept">品牌理念</a></li>
								<li><a href="/brand#brand-strength">品牌荣誉</a></li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/leader">创始人说</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/experice">体验馆</nuxt-link>
							<ul class="h-nav-list-child">
								<li><nuxt-link to="/experice/bt">包头</nuxt-link></li>
								<li><nuxt-link to="/experice/cd">成都</nuxt-link></li>
								<li><nuxt-link to="/experice/nj">南京</nuxt-link></li>
								<li><nuxt-link to="/experice/dg">东莞</nuxt-link></li>
							</ul>
						</li>
						<li>
							<nuxt-link target="_blank" to="/prod">产品介绍</nuxt-link>
							<ul class="h-nav-list-child h-nav-list-childProd">
								<li>
									<nuxt-link target="_blank" to="/prod/newPro">最新产品</nuxt-link>
									<nuxt-link target="_blank" to="/prod/newPro">全部</nuxt-link>
								</li>
								<li v-for="(item,index) in headProdNav" :key="index" v-if="item.proCategoryId != 96 && item.proCategoryId != 97">
									<nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: item.proCategoryId}}">{{item.proCategoryName}}</nuxt-link>
									<nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: item.proCategoryId}}">全部</nuxt-link>
									<ul class="nav-childProd">
										<li  v-for="(list,index) in headProdNav[index].children" :key="index">
											<nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: item.proCategoryId},query: {classId: list.proCategoryId}}">{{list.proCategoryName}}</nuxt-link>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<nuxt-link target="_blank" to="/news">新闻资讯</nuxt-link>
							<ul class="h-nav-list-child h-nav-list-childNews">
								<li v-for="item in headNewsNav" :key="item.articleCategoryId">
									<nuxt-link target="_blank" :to="{name: 'news-category',params: {category: item.articleCategoryId}}">{{item.articleCategoryName}}</nuxt-link>
								</li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/join">招商加盟</nuxt-link>
						</li>						
						<li>
							<nuxt-link to="/service/contact">服务中心</nuxt-link>
							<ul class="h-nav-list-child">
								<li><nuxt-link to="/service/presales">售前服务</nuxt-link></li>
								<li><nuxt-link to="/service/aftersales">售后服务</nuxt-link></li>
								<li><nuxt-link to="/service/contact">联系我们</nuxt-link></li>
								<li><nuxt-link to="/service/questions">常见问题</nuxt-link></li>
							</ul>
						</li>
						<li>
							<nuxt-link to="/job">招聘中心</nuxt-link>
							<ul class="h-nav-list-child h-nav-list-childNews">
								<li v-for="item in headJobNav" :key="item.jobClassId">
									<nuxt-link :to="{name: 'job-classId',params: {classId: item.jobClassId}}">{{item.jobClassName}}</nuxt-link>
								</li>
							</ul>
						</li>
					</ul>		
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import { mapState } from 'vuex'

	export default{
		name: 'VHeader',
		data (){
			return {
				headFixed:false,
				maxClientWidth: 980,
				isShowCode: false
			}
		},
		computed: {
			...mapState(['headProdNav','headNewsNav','headJobNav'])
		},
		mounted (){
			
			//监听滚动条
			window.addEventListener('scroll',this.handleScroll);
		},
		methods: {
			handleScroll (){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				var offsetTop = document.querySelector('.h-nav-list').offsetTop;
				if (scrollTop > offsetTop) {
					this.headFixed = true;
				} else {
					this.headFixed = false;
				}
			},
			showCode (){
				this.isShowCode = !this.isShowCode
			}
		},
		destroyed (){
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>

<style scoped>
	#index-header {
	    width:  100%;
	    height: 158px;
	    background:  #fff;
	    z-index: 666;
	}

	.fixedTop{
	    position:  fixed;
	    top: -100px;
	    left: 0;
	}

	.index-header-box {
	    position:  relative;
	    width:  100%;
	    height:  100%;
	    background: #fff;
	    border-bottom: 2px solid #d5d5d8;
	    box-sizing:  border-box;
	}

	.i-h-top {
	    position: relative;
	    width: 100%;
	    min-width: 1200px;
	    height:  81px;
	    margin-top: 15px;
	}

	.h-t-contact {
	    float:  left;
	    height:  45px;
	    margin-left: 66px;
	    color:  #a2a1a2;
	    font-size:  12px;
	    text-align: center;
	    line-height:  45px;
	}

	.h-t-contact h1 {
		display: inline-block;
		font-weight: normal;
	}

	.h-t-logo {
	    position:  absolute;
	    left: 50%;
	    top: 0;
	    width: 80px;
	    height:  81px;
	    margin-left: -40px;
	}

	.h-t-mobile {
		position: relative;
	    float:  right;
	    height: 45px;
	    margin-right: 66px;
	    font-size: 12px;
	    text-align: center;
	    line-height: 45px;
	}

	.h-t-contact>span {
	    padding: 0 10px;
	}

	.h-t-contact>a {
	    padding: 0 10px;
		color:  #a2a1a2;
	}

	.t-m-mobile-code {
		position: absolute;
		top: 45px;
		right: 0;
		width: 100px;
		height: 100px;
	}

	.t-m-mobile-code img {
		width: 100%;
	}

	.h-t-mobile>div {
	    float:  left;
	    padding:  0 12px;
	}

	.h-t-mobile>div>a {
	    color: #a2a1a2;
	}
	.i-h-nav {
	    width:  1200px;
	    height:  60px;
	    margin:  0 auto;
	    padding-top: 15px;
	    font-size:  14px;
	    line-height: 54px;
	    text-align:  center;
	}

	ul.h-nav-list {
	    display:  block;
	    width:  100%;
	    height:  100%;
	}

	.h-nav-list>li {
	    position: relative;
	    display:  inline-block;
	    padding: 0 23px;
	}

	.h-nav-list>li>a {
	    display:  block;
	    width:  100%;
	    height:  100%;
	    padding-bottom:  6px;
	    color: #6d6d6d;
	    -webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	    -webkit-transition: all 0.5s ease;
	    -o-transition: all 0.5s ease;
	    transition: all 0.5s ease;
	}

	.h-nav-list>li:hover>a, .h-nav-list .nuxt-link-exact-active, .h-nav-list .nuxt-link-active {
	    color: #22202b;
	    border-bottom: 2px solid #2f2d37;
	}
 	
	.h-nav-list>li:first-child .nuxt-link-active{
		border-bottom: 2px solid transparent;
	}

	.h-nav-list>li:first-child .nuxt-link-active.nuxt-link-exact-active{
		border-bottom: 2px solid #2f2d37;
	}
	.h-nav-list-child li a.nuxt-link-exact-active{
		border: none;
	}
	ul.h-nav-list-child {
	    display:  none;
	    position:  absolute;
	    top: 62px;
	    left: 50%;
	    overflow: hidden;
	    width: 100px;
	    height:  0;
	    margin-left: -50px;
	    background: #f2f3f4;
	    opacity: 0;
	    filter: alpha(opacity=0);
	    z-index: 999;
	}

	.h-nav-list>li:hover .h-nav-list-child {
	    display:  block;
	    height: auto;
	    -webkit-transition: all 1s ease;
	    -o-transition: all 1s ease;
	    transition: all 1s ease;
	    opacity: 100;
	    filter: alpha(opacity=1);
	}

	ul.h-nav-list-child>li {
	    width:  100%;
	    height: 30px;
	    font-size:  14px;
	    text-align:  center;
	    line-height: 30px;
	}

	ul.h-nav-list-child li a {
	    display: block;
	    overflow:  hidden;
	    width:  100%;
	    height:  100%;
	    color: #6d6d6d;
	    border: none;
	}

	ul.h-nav-list-child li a:hover{
	    color: #22202b;
	}

	 ul.h-nav-list-child.h-nav-list-childProd {
	    left: 0;
	    margin-left: 0;
	    width: 600px;
	    padding: 15px;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li {
	    overflow: hidden;
	    height:  auto;
	    line-height: 40px;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li>a:first-child {
	    float:  left;
	    width: 100px;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li>a:nth-child(2) {
	    float:  left;
	    width: 50px;
	    font-weight:  bold;
	}

	ul.nav-childProd {
	    float:  left;
	    width: 450px;
	    min-height: 30px;
	    border-bottom: 1px dotted #ccc;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li:last-child .nav-childProd {
	    border-bottom:  none;
	}

	ul.nav-childProd>li {
	    float:  left;
	    width: auto;
	}

	ul.nav-childProd>li>a {
	    padding: 0 10px;
	} 
	
	ul.h-nav-list-child.h-nav-list-childProd .nuxt-link-active {
	    color: #6d6d6d;
	    border-bottom:  transparent;
	}

	ul.h-nav-list-child.h-nav-list-childProd li a:hover {
	    color: #22202b;
	}

	.h-nav-list-childNews li a.nuxt-link-active {
	    color: #6d6d6d;
	    border: none;
	}
</style>