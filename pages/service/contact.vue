<template>
	<section class="container">
		<!-- 轮播图部分开始 -->
		<div id="common-banner">
			<div class="common-banner-container">
				<div class="common-banner-img">
					<img src="~/assets/images/contact/banner.png">
				</div>
			</div>
		</div>
		<!-- 轮播图部分结束 -->
		
		<!-- 面包屑部分 -->
		<div id="bread-nav">
			<div class="brand-nav-box clearfix">
				<div class="brand-nav-content">
					<div class="brand-nav-title"><span>当前位置:</span></div>
					<div class="brand-nav-list">
						<ul>
							<li><nuxt-link to="/">首页</nuxt-link></li>
							<li>></li>
							<li><nuxt-link to="/service/contact">服务中心</nuxt-link></li>
							<li>></li>
							<li><nuxt-link to="/service/contact">联系我们</nuxt-link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 面包屑部分结束 -->
		
		<!-- Place Map start -->
		<div id="place_map_wrap">
			<div class="contact_place_map_box">
				<commonMap :mapData="mapData"></commonMap>
			</div>
		</div>
		<!-- Place Map end -->
			
		<!-- Contact Us start -->
		<div id="contact_us_wrap">
			<div class="contact_us_box">
				<div class="contact_us_title">
					<p class="contact_us_titleC">联系方式</p>
					<p class="contact_us_titleE">Contact Us</p>
				</div>
				<div class="contact_us_desc_box">
					<div class="contact_us_desc">
						<p class="contact_us_descC">深圳市田田家园家具有限公司</p>
						<p class="contact_us_descE">Shenzhen VISNEY home furnishing co., Ltd.</p>
					</div>
					<div class="contact_us_desc">
						<p class="contact_us_descC">深圳市宝安区西乡街道泰华梧桐岛11栋5-9楼</p>
						<p class="contact_us_descE">Guangdong province shenzhen baoan xixiang street district Taihua building 5-9 building 11 Phoenix Island</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Contact Us end -->

		<!-- Customer service start -->
		<div id="customer_service_wrap">
			<div class="customer_service_box clearfix">
				<div class="customer_service_title">
					<p class="customer_service_titleC">客户服务</p>
					<p class="customer_service_titleE">Customer service</p>
				</div>
				<div class="customer_service_left">
					<div class="customer_service_content">
						<div class="customer_service_content_title">客户</div>
						<div class="customer_service_content_box">
							<ul>
								<li class="customer_service_list">
									<p class="customer_service_list_contact">400-900-6267</p>
									<p class="customer_service_list_name">24小时热线</p>
								</li>
								<li class="customer_service_list">
									<p class="customer_service_list_contact">186-2366-5691</p>
									<p class="customer_service_list_name">售后服务</p>
								</li>
								<li class="customer_service_list">
									<p class="customer_service_list_contact">Service@visney.cn</p>
									<p class="customer_service_list_name">联系邮箱</p>
								</li>
							</ul>
						</div>
					</div>
					<div class="customer_service_content">
						<div class="customer_service_content_title">加入卫诗理</div>
						<div class="customer_service_content_box">
							<ul>
								<li class="customer_service_list">
									<p class="customer_service_list_contact">Service@visney.cn</p>
									<p class="customer_service_list_name">简历投递</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="customer_service_right">
					<div class="customer_service_content">
						<div class="customer_service_content_title">业务合作</div>
						<div class="customer_service_content_box">
							<ul>
								<li class="customer_service_list">
									<p class="customer_service_list_contact">400-900-6267</p>
									<p class="customer_service_list_name">加盟热线</p>
								</li>
								<li class="customer_service_list">
									<p class="customer_service_list_contact">173-0263-3888</p>
									<p class="customer_service_list_name">招商联系人Penny</p>
								</li>
							</ul>
						</div>
					</div>
					<div class="customer_service_content">
						<div class="customer_service_content_title">知识产权事务建议/投诉/举报</div>
						<div class="customer_service_content_box">
							<ul>
								<li class="customer_service_list">
									<p class="customer_service_list_contact">Law@visney.cn</p>
									<p class="customer_service_list_name">信息投递</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Customer service end -->
	</section>
</template>

<script>
	import axios from 'axios'
	import commonMap from '~/components/common/commonMap'

	export default {
		data (){
			return {
				mapData: {
					longitude:  113.845282,
					latitude: 22.613041,
					title: '深圳市田田家园家具有限公司',
					description: '地址：深圳市宝安区西乡街道泰华梧桐岛11栋5-9楼'
				}
			}
		},
		components: {
			commonMap
		},
		head () {
		  return {
		    title:this.metaData.navigationTitle,
		    meta: [
				{name:'keywords',hid: 'keywords',content:`${this.metaData.navigationKeyword}`},
				{name:'description',hid:'description',content:`${this.metaData.navigationDescription}`}
		    ],
			script: [
				{src:'http://api.map.baidu.com/api?v=2.0&ak=MDdqxkqhQzfdBzfu2tfGiidGbHgTfGrB'}
			]
		  }
		},
		async asyncData({params,store}){
			//head信息
			let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/17`);
			return {
				metaData: metaData.data,
			} 
		},
		methods: {
			tabPlace (index){
		      this.num = index;
		    }
		}
	}
</script>

<style scoped>
		.bm-view {
		width: 100%;
		height: 600px;
		}
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

		div#bread-nav .brand-nav-box {
		    line-height:  150px;
		}
	/*面包屑部分结束*/

	/*Place Map start*/
		div#place_map_wrap {
		    width:  100%;
		}

		.contact_place_map_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding:  75px 0 150px;
		    border-top: 2px solid #d5d5d8;
		}
	/*Place Map end*/

	/*Contact Us start*/
		div#contact_us_wrap {
		    width:  100%;
		}

		.contact_us_box {
		    overflow: hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding: 0 0 125px;
		}

		.contact_us_title {
		    width:  100%;
		}

		p.contact_us_titleC {
		    overflow:  hidden;
		    width: 100%;
		    height: 34px;
		    color:  #22202b;
		    font-size:  24px;
		    font-weight:  bold;
		    line-height:  34px;
		    text-align:  left;
		}

		p.contact_us_titleE {
		    overflow: hidden;
		    width: 100%;
		    height: 18px;
		    color: #ccc;
		    font-size: 12px;
		    line-height: 18px;
		    text-align: left;
		}

		.contact_us_desc_box {
		    width:  100%;
		    padding-top:  33px;
		}

		.contact_us_desc {
		    padding-bottom: 14px;
		}

		p.contact_us_descC {
		    overflow: hidden;
		    width: 100%;
		    height: 22px;
		    color: #858585;
		    font-size: 14px;
		    line-height: 22px;
		    text-align: left;
		}

		p.contact_us_descE {
		    overflow: hidden;
		    width: 100%;
		    height: 18px;
		    color: #ccc;
		    font-size: 12px;
		    line-height: 18px;
		    text-align: left;
		}
	/*Contact Us end*/

	/*Customer service start*/
		div#customer_service_wrap {
		    width: 100%;
		}

		.customer_service_box {
		    overflow: hidden;
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		    padding-bottom: 115px;
		}

		.customer_service_title {
		    width: 100%;
		    padding-bottom:  13px;
		}

		p.customer_service_titleC {
		    overflow: hidden;
		    width: 100%;
		    height: 34px;
		    color: #22202b;
		    font-size: 24px;
		    font-weight: bold;
		    line-height: 34px;
		    text-align: left;
		}

		p.customer_service_titleE {
		    overflow: hidden;
		    width: 100%;
		    height: 18px;
		    color: #ccc;
		    font-size: 12px;
		    line-height: 18px;
		    text-align: left;
		}

		.customer_service_left {
		    float:  left;
		    overflow:  hidden;
		    width:  600px;
		}

		.customer_service_right {
		    float: left;
		    overflow:  hidden;
		    width: 600px;
		}

		.customer_service_content {
		    width:  100%;
		}

		.customer_service_content_title {
		    overflow: hidden;
		    width: 100%;
		    height: 28px;
		    color: #22202b;
		    font-size: 18px;
		    font-weight: bold;
		    line-height: 28px;
		    text-align: left;
		}

		.customer_service_content_box {
		    padding-top:  30px;
		}

		li.customer_service_list {
		    width:  100%;
		    padding-bottom:  28px;
		}

		p.customer_service_list_contact {
		    overflow:  hidden;
		    width:  100%;
		    height:  20px;
		    color:  #22202b;
		    font-size: 14px;
		    font-weight:  bold;
		    line-height:  20px;
		    text-align:  left;
		}

		p.customer_service_list_name {
		    overflow: hidden;
		    width: 100%;
		    height: 20px;
		    color: #ccc;
		    font-size: 12px;
		    line-height: 20px;
		    text-align: left;
		}

		.customer_service_right .customer_service_content:first-child {
		    padding-bottom: 68px;
		}
	/*Customer service end*/



</style>