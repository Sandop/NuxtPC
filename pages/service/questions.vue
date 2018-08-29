<template>
	<section class="container">
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
							<li><nuxt-link to="/service/questions">常见问题</nuxt-link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 面包屑部分结束 -->

		<!-- Questions List start -->
		<div id="questions_wrap">
			<div class="questions_box">
				<div class="questions_list_box">
					<ul>
						<li class="questions_list" v-for="list in listData.list" :key="list.articleId">
                            <div class="questions_list_left">
                                <nuxt-link target="_blank" :to="{name:'service-id',params:{category: list.articleCategoryId,id:list.articleId}}"><img :src="list.articleImg.articleImgSrc" :alt="list.articleImg.articleImgAlt"></nuxt-link>
                            </div>
                            <div class="questions_list_right">
                                <div class="questions_list_title">
                                    <nuxt-link target="_blank" :to="{name:'service-id',params:{id:list.articleId,category: list.articleCategoryId}}">{{list.articleName}}</nuxt-link>
                                </div>
                                <div class="questions_list_desc">{{getTxt(list.articleText)}}</div>
                                <div class="questions_list_bottom">
                                    <div class="questions_list_tag_box">
                                        <div class="questions_list_tag"><a href="javascript:viod(0);">{{list.labelList[0].articleLabelName}}</a></div>
                                        <div class="questions_list_tag"><a href="javascript:viod(0);">{{list.labelList[1].articleLabelName}}</a></div>
                                    </div>
                                    <div class="questions_list_time">
                                        <p>{{list.articleAddTime}}</p>
                                    </div>
                                </div>
                            </div>
                      	</li>
					</ul>
				</div>
				<div class="questions_list_pagination_box">
					<pagination :total="total" :display="display" :current-page='current' @pagechange="pagechange"></pagination>
				</div>
			</div>
		</div>
		<!-- Questions List start -->
	</section>
</template>

<script>
	import axios from 'axios'
	import pagination from '~/components/common/pagination.vue'

	export default {
		data (){
			return {
		        display: 8,   // 每页显示条数
		        current: 1,   // 当前的页数
			}
		},
		components: {
			pagination
		},
		methods : {
            pagechange (currentPage){
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		       axios.get(`${this.$store.state.wordpressAPI}/article/getArticles/20/${currentPage}/8`)
					.then((response)=> {
						this.listData = response.data;
						this.total = response.data.total;
					}).catch(function (error) {
						console.log(error);
					});
		    },
            getTxt (str){
	    		var txt = str.replace(/<\/?.+?>/g,"").replace(/(^\s+)|(\s+$)/g,"").replace(/\s/g,''); 
	  			txt = txt.length < 170 ? txt : txt.substring(0,170).concat('...');
	    		return txt;
	    	}
        },
        head (){
        	return {
        		title:this.metaData.navigationTitle,
        		meta: [
        			{name: 'keywords',hid: 'keywords',content: `${this.metaData.navigationKeyword}`},
        			{name: 'description',hid: 'description',content: `${this.metaData.navigationDescription}`}
        		]
        	}
        },
        async asyncData ({store,params}){
        	//meta&title
        	let metaData = await axios.get(`${store.state.wordpressAPI}/NavigationMeta/get/18`);
        	//question list
			let listData = await axios.get(`${store.state.wordpressAPI}/article/getArticles/20/1/8`);
        	return {
				metaData: metaData.data,
				listData: listData.data,
				total: listData.data.total 	//请求数据的总条数
        	}
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

	/*Questions List start*/
		div#questions_wrap {
		    width:  100%;
		}

		.questions_box {
		    overflow:  hidden;
		    width:  1200px;
		    height: auto;
		    margin:  0 auto;
		    padding-bottom:  150px;
		    border-top: 2px solid #d5d5d8;
		}

		.questions_list_box {
		    width:  100%;
		}

		.questions_list_box ul {
		    width: 100%;
		}

		li.questions_list {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding-top: 113px;
		}

		.questions_list_box ul li:first-child {
		    padding-top: 75px;
		}

		.questions_list_left {
		    float: left;
		    overflow: hidden;
		    width: 367px;
		    height: 254px;
		}

		.questions_list_left img {
		    width: 100%;
		    height: 100%;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.questions_list_left img:hover{
		    -webkit-transform: scale(1.2);
			-ms-transform: scale(1.2);
			-o-transform: scale(1.2);
			transform: scale(1.2);
		}

		.questions_list_right {
		    float: right;
		    width: 787px;
		    height: auto;
		}

		.questions_list_title {
		    overflow: hidden;
		    width: 100%;
		    height: 56px;
		}

		.questions_list_title a {
		    display: block;
		    overflow: hidden;
		    width: 100%;
		    height: 100%;
		    color: #22202b;
		    font-size: 22px;
		    line-height: 56px;
		    text-align: left;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		}

		.questions_list_desc {
		    overflow: hidden;
		    width: 100%;
		    height: 131px;
		    padding-top: 20px;
		    border-bottom: 2px solid #d5d5d8;
		    box-sizing: border-box;
		    color: #858585;
		    font-size: 14px;
		    line-height: 20px;
		    text-align: left;
		}

		.questions_list_bottom {
		    overflow: hidden;
		    width: 100%;
		    height: 68px;
		    padding-top: 24px;
		    box-sizing: border-box;
		}

		.questions_list_tag_box {
		    float: left;
		    overflow: hidden;
		}

		.questions_list_tag {
		    float: left;
		    width: 103px;
		    height: 32px;
		    border: 2px solid #000;
		    box-sizing: border-box;
		    font-size: 12px;
		    line-height: 28px;
		    text-align: center;
		}

		.questions_list_tag_box .questions_list_tag:first-child {
		    margin-right: 17px;
		}

		.questions_list_tag a {
		    display: block;
		    width: 100%;
		    height: 100%;
		    color: #000;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.questions_list_tag a:hover {
		    background: #000;
		    color: #feeabd;
		}

		.questions_list_time {
		    float: right;
		    color: #999;
		    font-size: 12px;
		    line-height: 32px;
		    text-align: center;
		}

		.questions_list_pagination_box {
		    width:  100%;
		    height:  auto;
		    padding-top: 84px;
		    text-align:  center;
		}

	/*Questions List end*/
</style>