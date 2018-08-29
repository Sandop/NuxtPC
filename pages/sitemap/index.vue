<template>
	<section class="container">		
		<!-- 面包屑部分 -->
		<div id="bread-nav">
			<div class="brand-nav-box clearfix">
				<div class="brand-nav-content">
					<div class="brand-nav-title"><span>当前位置:</span></div>
					<div class="brand-nav-list">
						<ul>
							<li><nuxt-link to="/">首页</nuxt-link></li>
							<li>></li>
							<li><nuxt-link to="/sitemap">网站地图</nuxt-link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 面包屑部分结束 -->
        <div id="sitemap_wrap">
            <div class="sitemap_box">
                <div class="sitemap_title">
                    <h2>
                        <span class="sitemap_titleC">网站地图</span>
                        <span class="sitemap_titleE">Site map</span>
                    </h2>
                </div>
                <div class="sitemap_content">
                    <ul>
                        <li class="sitemap_list">
                            <div class="sitemap_list_title">
                                <nuxt-link to="/">卫诗理官</nuxt-link>
                            </div>
                            <div class="sitemap_list_con">
                                <ul>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/">卫诗理官网首页</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sitemap_list">
                            <div class="sitemap_list_title">
                                <nuxt-link to="/brand">品牌故事</nuxt-link>
                            </div>
                            <div class="sitemap_list_con">
                                <ul>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/brand#brand-story">品牌故事</nuxt-link>
                                    </li>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/brand#brand-story">品牌背景</nuxt-link>
                                    </li>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/brand#brand-story">发展历程</nuxt-link>
                                    </li>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/brand#brand-story">品牌理念</nuxt-link>
                                    </li>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/brand#brand-story">品牌荣誉</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sitemap_list">
                            <div class="sitemap_list_title">
                                <nuxt-link to="/leader">创始人说</nuxt-link>
                            </div>
                            <div class="sitemap_list_con">
                                <ul>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/leader">创始人说</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sitemap_list">
                            <div class="sitemap_list_title">
                                <nuxt-link to="/experice">卫诗理体验馆</nuxt-link>
                            </div>
                            <div class="sitemap_list_con">
                                <ul>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/experice/bt">包头</nuxt-link>
                                    </li>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/experice/cd">成都</nuxt-link>
                                    </li>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/experice/nj">南京</nuxt-link>
                                    </li>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/experice/dg">东莞</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sitemap_list">
                            <div class="sitemap_list_title">
                                <nuxt-link to="/prod">卫诗理产品介绍</nuxt-link>
                            </div>
                            <div class="sitemap_list_con">
                                 <ul class="nav-childProd">
                                     <li class="sitemap_nav_list">
                                         <nuxt-link to="/prod/newPro">最新产品</nuxt-link>
                                     </li>
                                 </ul>
                            </div>
                            <div class="sitemap_list_con" v-for="(item,index) in $store.state.headProdNav" :key="index" v-if="item.proCategoryId != 96 && item.proCategoryId != 97">
                               
                                <ul class="nav-childProd">
                                    <li class="sitemap_nav_list">
                                        <nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: item.proCategoryId}}">{{item.proCategoryName}}</nuxt-link>
                                    </li>
                                    <li class="sitemap_nav_list"  v-for="(list,index) in $store.state.headProdNav[index].children" :key="index">
                                        <nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: item.proCategoryId},query: {classId: list.proCategoryId}}">{{list.proCategoryName}}</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sitemap_list">
                            <div class="sitemap_list_title">
                                <nuxt-link to="/news">卫诗理新闻中心</nuxt-link>
                            </div>
                            <div class="sitemap_list_con">
                                <ul>
                                    <li class="sitemap_nav_list"  v-for="(list,index) in $store.state.headNewsNav" :key="index">
                                        <nuxt-link target="_blank" :to="{name: 'news-category',params: {category: list.articleCategoryId}}">{{list.articleCategoryName}}</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sitemap_list">
                            <div class="sitemap_list_title">
                                <nuxt-link to="/join">招商加盟</nuxt-link>
                            </div>
                            <div class="sitemap_list_con">
                                <ul>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/join">招商加盟</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sitemap_list">
                            <div class="sitemap_list_title">
                                <nuxt-link to="/service/contact">服务中心</nuxt-link>
                            </div>
                            <div class="sitemap_list_con">
                                <ul>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/service/presales">售前服务</nuxt-link>
                                    </li>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/service/aftersales">售后服务</nuxt-link>
                                    </li>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/service/contact">联系我们</nuxt-link>
                                    </li>
                                    <li class="sitemap_nav_list">
                                        <nuxt-link to="/service/questions">常见问题</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sitemap_list">
                            <div class="sitemap_list_title">
                                <nuxt-link to="/job">招聘中心</nuxt-link>
                            </div>
                            <div class="sitemap_list_con">
                                <ul>
                                    <li class="sitemap_nav_list" v-for="item in $store.state.headJobNav" :key="item.jobClassId">
                                        <nuxt-link target="_blank" :to="{name: 'job-classId',params: {classId: item.jobClassId}}">{{item.jobClassName}}</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

	</section>
</template>
<script>
	import axios from 'axios'

	export default {
		data (){
			return {
			}
		},
		components: {
		},
		head () {
		  return {
		    title:'网站地图',
		    meta: [
		      {name:'keywords',hid: 'keywords',content:'网站地图'},
		      {name:'description',hid:'description',content:'网站地图'}
		    ]
		  }
		},
		async asyncData({params,store}){
		  //head信息
		    // let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/17`);
		  return {
		    // metaData: metaData.data,
		  } 
		},
		methods: {
			
		}
	}
</script>

<style scoped>
        #__layout>div {
             background: #f7f7f7;
        }

        .container {
            background: #f7f7f7;
        }
	/*面包屑部分*/
	    div#bread-nav {
	        width:  100%;
	        height:  auto;
            background: #fff;
            border-bottom: 1px #eee solid;
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

		div#bread-nav .brand-nav-box {
		    line-height:  150px;
		}
	/*面包屑部分结束*/
        div#sitemap_wrap {
            width: 100%;
        }

        .sitemap_box {
            overflow:  hidden;
            width: 1200px;
            margin: 20px auto 60px;
            padding: 0 60px 60px;
            background: #fff;
            box-sizing:  border-box;
        }

        .sitemap_title {
            height: 60px;
            font-size: 18px;
            color: #898989;
            line-height: 60px;
            border-bottom: 1px #eee solid;
        }

        .sitemap_title h2 {
            font-weight:  normal;
        }

        span.sitemap_titleE {
            font-size: 12px;
            margin-left: 10px;
        }

        li.sitemap_list {padding-bottom: 45px;border-bottom: 1px #eee solid;line-height: 25px;font-size: 14px;}

        li.sitemap_list>div {
            margin-top: 20px;
        }

        .sitemap_list_con {position:  relative;padding-left: 12px;box-sizing:  border-box;}

        .sitemap_list_title a {
            color: rgb(0, 176, 240);
            font-size: 16px;
            font-weight: bold;
        }

        .sitemap_list_con:after {
            content: '';
            position:  absolute;
            left: 0;
            top: 50%;
            width:  5px;
            height:  5px;
            margin-top: -2px;
            border-radius:  50%;
            background:  #000;
        }

        li.sitemap_nav_list {
            display:  inline-block;
        }

        li.sitemap_nav_list a {
            display:  block;
            color:  #555;
            padding: 0 5px;
        }

        li.sitemap_nav_list a:hover {
            color: #000;
        }
</style>