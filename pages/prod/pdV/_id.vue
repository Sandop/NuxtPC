<template>
	<section class="cotainer">
		<!-- 轮播图部分开始 -->
		<div id="common-banner">
			<div class="common-banner-container">
				<div class="common-banner-img">
					<img src="~/assets/images/prod-view/banner.png">
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
							<li><nuxt-link target="_blank" to="/">首页</nuxt-link></li>
							<li>></li>
							<li class="brand-nav-products"><nuxt-link target="_blank" to="/prod">产品列表</nuxt-link></li>
							<li>></li>
							<li class="brand-nav-prod-list" v-for="item in $store.state.headProdNav" :key="item.proCategoryId" v-if=" item.proCategoryId == $route.query.typeId &&  $route.query.typeId == 97">
								<nuxt-link target="_blank" to="/prod/newPro">{{item.proCategoryName}}</nuxt-link>
							</li>
							<li class="brand-nav-prod-list" v-for="item in $store.state.headProdNav" :key="item.proCategoryId" v-if=" item.proCategoryId == $route.query.typeId && $route.query.typeId != 96 && $route.query.typeId != 97">
								<nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: item.proCategoryId}}">{{item.proCategoryName}}</nuxt-link>
							</li>
							<li>></li>
							<li class="brand-nav-prod-style" v-if="$route.query.typeId != 96 && $route.query.typeId != 97">
								<div v-for="(item,index) in $store.state.headProdNav[($route.query.typeId - 1)].children" :key="index" v-if=" $route.query.classId == item.proCategoryId">
									<nuxt-link :to="{name: 'prod-typeId',params: {typeId: $route.query.typeId},query: {classId: item.proCategoryId}}">{{item.proCategoryName}}</nuxt-link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 面包屑部分结束 -->
		<!-- Products show start -->
		<div id="products-show">
			<!-- Products top show start -->
			<div class="products-msg">
				<div class="products-msg-box clearfix">
					<div class="products-pic-wrap">
						<ProdViewImages :bigImage="bigImage" :middleImage="middleImage" :smallImage="smallImage"></ProdViewImages>
					</div>
					<div class="products-wrod-wrap">
						<div class="products-view-title">
							<h1>{{prodViewData.proName}}</h1>
						</div>
						<div class="products-price">
							<div class="products-price-word">价格</div>
							<div class="products-price-box">
								<span class="products-price-mark">￥</span>
								<span class="products-price-num">{{prodViewData.proPrice}}</span>
							</div>
						</div>
						<div class="products-parameter">
							<div class="products-parameter-word">产品参数</div>
							<div class="products-par-details-box">
								<p v-for="(value,key,index) in prodViewData.param" :key="index">{{key}}：{{value}}</p>
							</div>
						</div>
						<div class="prod-buy-now">
							<!-- <a href="javascript:void(0)" target="_blank" rel="nofollow">立即购买</a> -->
							<a :href="`${prodViewData.proSrc}`" target="_blank" rel="nofollow">立即购买</a>
						</div>
					</div>
				</div>
			</div>
			<!-- Products top show end -->

			<!-- Products details box start -->
			<div class="products-details">
				<div class="products-details-box clearfix">
					<!-- products-search start -->
					<div class="prod-search-warp">
						<div class="prod-search-box">
							<div class="prod-search-title">
								<p>产品搜索</p>
							</div>
							<div class="prod-search">
								<input type="text" name="" placeholder="请输入关键字">
							</div>
							<div class="prod-search-btn">搜索</div>
						</div>
						<prodViewLink></prodViewLink>
					</div>
					<!-- products-search end -->

					<!-- prod-details start -->
					<div class="prod-details-warp">
						<div class="prod-details-title">
							<p>商品详情</p>
						</div>
						<div class="prod-details" v-html="prodViewData.proMsg">
						</div>
					</div>
					<!-- prod-details end -->
				</div>
			</div>
			<!-- Products details box end -->
		</div>
		<!-- Products show end -->

		<!-- Related Products start -->
		<div id="related_products_wrap">
			<div class="related_products_box">
				<div class="related_products_title">
					<p>相关产品</p>
				</div>
				<div class="related_prod_list_box">
					<prodListShow :prodList="relatedProdData"></prodListShow>
				</div>
			</div>
		</div>
		<!-- Related Products end -->

		<!-- You Like start -->
		<div id="products_like_wrap">
			<div class="products_like_box">
				<div class="prod_like_title">
					<p>猜你喜欢</p>
				</div>
				<div class="prod_like_list_box">
					<prodListShow :prodList="likeProdData"></prodListShow>
				</div>
			</div>
		</div>
		<!-- You Like end -->
	</section>
</template>

<script>
	import axios from 'axios'
  	import prodListShow from '~/components/common/prodListShow'
	import ProdViewImages from '~/components/products/ProdViewImages'
  	import prodViewLink from '~/components/products/prodViewLink'

	export default {
		head (){
			return {
				title: this.prodViewData.proMetaTitle,
				meta: [
					{name: 'keywords',hid: 'keywords',content: `${this.prodViewData.proMetaKeyWord}`},
					{name: 'description',hid: 'description',content: `${this.prodViewData.proMetaDescription}`}
				]
			}
		},
		validata ({ params }){
			return /^\d+$/.test(params.id)
		},
		async asyncData ({params,query,store}){
			let typeId = query.typeId;
			let classId = query.classId;
			let id = params.id;
			//详情信息
			let prodViewData = await axios(`${store.state.wordpressAPI}/product/detail/${id}`);
			//相关产品
			let relatedProdData = await axios(`${store.state.wordpressAPI}/product/getProByTpyeId/${classId}/4`);
			//猜你喜欢
			let likeProdData = await axios(`${store.state.wordpressAPI}/product/getProRandom/4`);
			return {
				prodViewData: prodViewData.data,
				relatedProdData: relatedProdData.data,
				likeProdData: likeProdData.data,
				bigImage: prodViewData.data.proImgs,
				middleImage: prodViewData.data.proImgs,
				smallImage: prodViewData.data.proImgs
			}
		},
		components: {
			prodListShow,
			ProdViewImages,
			prodViewLink
		}
	}
</script>

<style scoped>
	/*banner start*/
		div#common-banner {
		    height: 394px;
		}
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
	/*banner end*/
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
	/*Products show start*/
		div#products-show {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		}
		/*Products top show start*/

			.products-msg {
			    overflow:  hidden;
			    width:  100%;
			    height:  auto;
			}

			.products-msg-box {
			    width: 1200px;
			    height:  auto;
			    padding: 75px 0 110px;
			    margin:  0 auto;
			    border-top: 2px solid #d5d5d8;
			}
			/*products pic wrap start*/
				.products-pic-wrap {
				    float:  left;
				    width: 500px;
				    height:  auto;
				}

				
			/*products pic wrap end*/

			/*products wrod wrap start*/
				.products-wrod-wrap {
				    float:  right;
				    width:  600px;
				    height:  auto;
				    padding-left:  57px;
				    box-sizing:  border-box;
				}

				.products-view-title {
				    overflow:  hidden;
				    width:  100%;
				    height:  auto;
				    color:  #22202b;
				    font-size:  30px;
				    font-weight:  bold;
				    line-height:  32px;
				    text-align: left;
				}

				.products-price {
				    overflow:  hidden;
				    width:  100%;
				    height:  auto;
				    margin: 50px 0;
				}

				.products-price-word {
				    float:  left;
				    width:  105px;
				    height:  auto;
				    color:  #858585;
				    font-size:  14px;
				    font-weight:  bold;
				    line-height:  26px;
				    text-align:  left;
				}

				.products-price-box {
				    overflow:  hidden;
				    float:  left;
				    color:  #22202b;
				    font-size: 24px;
				    font-weight:  bold;
				    line-height:  26px;
				    text-align:  left;
				}

				span.products-price-mark {
				    font-size:  14px;
				}

				.products-parameter {
				    overflow:  hidden;
				    width:  100%;
				    height:  auto;
				    color: #858585;
				    font-size: 14px;
				    line-height: 30px;
				    text-align: left;
				}

				.products-parameter-word {
				    float:  left;
				    width: 105px;
				    font-weight:  bold;
				}

				.products-par-details-box {
				    float:  left;
				}

				.prod-buy-now {
				    overflow:  hidden;
				    width:  296px;
				    height:  56px;
				    margin-top: 42px;
				    background:  #22202b;
				    font-size:  24px;
				    text-align:  center;
				    line-height:  56px;
				    -webkit-transition: all 0.5s ease;
				    -o-transition: all 0.5s ease;
				    transition: all 0.5s ease;
				}

				.prod-buy-now:hover{
				    -webkit-transform: translateY(-5px);
				    -ms-transform: translateY(-5px);
				    -o-transform: translateY(-5px);
				    transform: translateY(-5px);
				}

				.prod-buy-now a {
				    display:  block;
				    overflow:  hidden;
				    width:  100%;
				    height:  100%;
				    color: #ffe9c0;
				}
			/*products wrod wrap end*/

		/*Products top show end*/
		/*Products details box start*/
			.products-details {
			    width:  100%;
			    height:  auto;
			}

			.products-details-box {
			    width: 1200px;
			    height:  auto;
			    margin:  0 auto;
			    padding-bottom: 110px;
			}

			/*products-search start*/
				.prod-search-warp {
				    float:  left;
				    overflow:  hidden;
				    width:  200px;
				}

				.prod-search-box {
				    overflow:  hidden;
				    width:  100%;
				    height:  auto;
				    padding-bottom: 63px;
				}

				.prod-search-title {
				    width:  100%;
				    height:  52px;
				    padding-left: 10px;
				    border-top: 2px solid #e5e5e5;
				    border-bottom: 2px solid #e5e5e5;
				    color:  #22202b;
				    font-size:  18px;
				    font-weight:  bold;
				    line-height:  50px;
				    text-align:  left;
				    box-sizing:  border-box;
				}

				.prod-search {
				    overflow:  hidden;
				    width:  100%;
				    height:  auto;
				    padding-left:  10px;
				    padding: 33px 0 11px 10px;
				    box-sizing:  border-box;
				}

				.prod-search input {
				    overflow:  hidden;
				    width:  172px;
				    height:  36px;
				    padding-left: 8px;
				    border:  2px solid #e5e5e5;
				    box-sizing:  border-box;
				    color: #858585;
				    font-size:  14px;
				    line-height: 32px;
				    text-align:  left;
				    outline:  none;
				}

				.prod-search-btn {
				    overflow:  hidden;
				    width:  82px;
				    height:  36px;
				    margin-left:  10px;
				    background:  #22202b;
				    color: #ffe9c0;
				    font-size:  14px;
				    line-height:  36px;
				    text-align:  center;
				    cursor:  pointer;
				}
			/*products-search end*/

			/*prod-details start*/
				.prod-details-warp {
				    float:  right;
				    width:  950px;
				    height:  auto;
				}

				.prod-details-title {
				    overflow:  hidden;
				    width:  100%;
				    height: 57px;
				    border-bottom: 2px solid #d5d5d8;
				    color:  #22202b;
				    font-size:  24px;
				    line-height:  24px;
				    text-align: left;
				}

				.prod-details {
				    overflow:  hidden;
				    width:  100%;
				    height:  auto;
				    padding-top:  80px;
				}
			/*prod-details end*/

		/*Products details box end*/

	/*Products show end*/

	/*Related Products start*/
		div#related_products_wrap {
		    width:  100%;
		    height:  auto;
		}

		.related_products_box {
		    overflow: hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		}

		.related_products_title {
		    overflow:  hidden;
		    width:  100%;
		    height:  132px;
		    border-bottom: 2px solid #d5d5d8;
		    box-sizing:  border-box;
		    color:  #22202b;
		    font-size:  24px;
		    font-weight:  bold;
		    line-height:  130px;
		    text-align: left;
		}

		.related_prod_list_box {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding: 30px 0 18px;
		}

		.related_prod_list_box ul {
		    overflow:  hidden;
		}

		.related_prod_list {
		    float: left;
		    width: 300px;
		    height: 333px;
		    border: 3px solid transparent;
		    box-sizing: border-box;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		    cursor: pointer;
		}

		li.related_prod_list:hover {
		    border: 3px solid #dcdcdc;
		}

		.related_prod_list_img {
		    display: flex;
		    overflow: hidden;
		    width: 100%;
		    height: 236px;
		    justify-content: center;
		    align-items: center;
		}

		.related_prod_list_img img {
		    width: 100%;
		    height: 100%;
		    -webkit-transition: all 1s ease;
		    -o-transition: all 1s ease;
		    transition: all 1s ease;
		}
		.related_prod_list_img img:hover {
		    -webkit-transform: scale(1.1);
		    -ms-transform: scale(1.1);
		    -o-transform: scale(1.1);
		    transform: scale(1.1);
		}

		.related_prod_name {
		    overflow:  hidden;
		    width:  100%;
		    height:  38px;
		}

		.related_prod_name a {
		    display:  block;
		    overflow: hidden;
		    width: 100%;
		    height:  100%;
		    padding: 0 20px;
		    color: #979797;
		    font-size:  14px;
		    line-height:  38px;
		    text-align:  center;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    box-sizing: border-box;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.related_prod_name a:hover {
		    color: #22202b;
		}

		.related_prod_price {
		    overflow:  hidden;
		    width:  100%;
		    height:  40px;
		    color:  #22202b;
		    text-align:  center;
		}

		span.price-num {
		    font-size:  24px;
		    font-weight:  bold;
		    line-height: 40px;
		}

	/*Related Products end*/

	/*You Like start*/
		div#products_like_wrap {
		    width:  100%;
		    height:  auto;
		}

		.products_like_box {
		    overflow: hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		}

		.prod_like_title {
		    overflow:  hidden;
		    width:  100%;
		    height:  132px;
		    border-bottom: 2px solid #d5d5d8;
		    box-sizing:  border-box;
		    color:  #22202b;
		    font-size:  24px;
		    font-weight:  bold;
		    line-height:  130px;
		    text-align: left;
		}

		.prod_like_list_box {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding: 30px 0 88px;
		}

		.prod_like_list_box ul {
		    overflow:  hidden;
		}

		.prod_like_list {
		    float: left;
		    width: 300px;
		    height: 333px;
		    border: 3px solid transparent;
		    box-sizing: border-box;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		    cursor: pointer;
		}

		li.prod_like_list:hover {
		    border: 3px solid #dcdcdc;
		}

		.prod_like_list_img {
		    display: flex;
		    overflow: hidden;
		    width: 100%;
		    height: 236px;
		    justify-content: center;
		    align-items: center;
		}

		.prod_like_list_img img {
		    width: 100%;
		    height: 100%;
		    -webkit-transition: all 1s ease;
		    -o-transition: all 1s ease;
		    transition: all 1s ease;
		}
		.prod_like_list_img img:hover {
		    -webkit-transform: scale(1.1);
		    -ms-transform: scale(1.1);
		    -o-transform: scale(1.1);
		    transform: scale(1.1);
		}

		.prod_like_name {
		    overflow:  hidden;
		    width:  100%;
		    height:  38px;
		}

		.prod_like_name a {
		    display:  block;
		    overflow: hidden;
		    width: 100%;
		    height:  100%;
		    padding: 0 20px;
		    color: #979797;
		    font-size:  14px;
		    line-height:  38px;
		    text-align:  center;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    box-sizing: border-box;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.prod_like_name a:hover {
		    color: #22202b;
		}

		.prod_like_price {
		    overflow:  hidden;
		    width:  100%;
		    height:  40px;
		    color:  #22202b;
		    text-align:  center;
		}

		span.price-num {
		    font-size:  24px;
		    font-weight:  bold;
		    line-height: 40px;
		}

	/*You Like end*/

</style>