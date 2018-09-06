<template>
	<section class="container">
		<!-- banner -->
      	<div id="common-banner">
			<div class="common-banner-container">
				<div class="common-banner-img">
					<img src="~/assets/images/prod-view/banner.jpg">
				</div>
			</div>
		</div>

      	<!-- Recommend Products start -->
      	<div id="recom-products">
      		<div class="recom-products-box">
      			<ul>
      				<li class="recom-products-list">
      					<div class="recom-products-img">
      						<a href="#"><img src="~/assets/images/products/recom-products-img1.png"></a>
      					</div>
      				</li>
      				<li class="recom-products-list">
      					<div class="recom-products-img">
      						<a href="#"><img src="~/assets/images/products/recom-products-img2.png"></a>
      					</div>
      				</li>
      				<li class="recom-products-list">
      					<div class="recom-products-img">
      						<a href="#"><img src="~/assets/images/products/recom-products-img3.png"></a>
      					</div>
      				</li>
      				<li class="recom-products-list">
      					<div class="recom-products-img">
      						<a href="#"><img src="~/assets/images/products/recom-products-img4.png"></a>
      					</div>
      				</li>
      			</ul>
      		</div>
      	</div>
      	<!-- Recommend Products end -->
      	<!-- Products Class start -->
      	<div id="products-class">
      		<!-- Latest Products satrt -->
      		<div id="latest-products" class="products-kinds">
      			<div class="latest-products-box products-kinds-box">
      				<div class="latest-products-top products-kinds-top">
      					<div class="latest-products-title products-kinds-title">
      						<div class="latest-products-titleC products-kinds-titleC"><h2>最新产品</h2></div>
      						<div class="latest-products-titleE products-kinds-titleE">Latest Products</div>
      					</div>
      					<div class="latest-products-link products-kinds-link">
      					</div>
      				</div>
      				<div class="latest-products-content products-kinds-content">
      					<prodListShow :prodList="indexProdList5" :showNewMore="true" :typeId="97"></prodListShow>
      				</div>
      			</div>
      		</div>
      		<!-- Latest Products end -->
      		<!-- Living Room satrt -->
      		<div id="living-room" class="products-kinds">
      			<div class="living-room-box products-kinds-box">
      				<div class="living-room-top products-kinds-top">
      					<div class="living-room-title products-kinds-title">
      						<div class="living-room-titleC products-kinds-titleC"><h2>客厅家具</h2></div>
      						<div class="living-room-titleE products-kinds-titleE">Living Room</div>
      					</div>
      					<div class="living-room-link products-kinds-link">
      						<ul>
      							<li class="products-kinds-link-list" v-for="(list,index) in $store.state.headProdNav[0].children" :key="index">
					            	<nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: 1},query: {classId: list.proCategoryId}}">{{list.proCategoryName}}</nuxt-link>
					            </li>
      						</ul>
      					</div>
      				</div>
      				<div class="living-room-content products-kinds-content">
      					<prodListShow :prodList="indexProdList1" :showMore="true" :typeId="1"></prodListShow>
      				</div>
      			</div>
      		</div>
      		<!-- Living Room end -->
      		<!-- Dining Room satrt -->
      		<div id="dining-room" class="products-kinds">
      			<div class="dining-room-box products-kinds-box">
      				<div class="dining-room-top products-kinds-top">
      					<div class="dining-room-title products-kinds-title">
      						<div class="dining-room-titleC products-kinds-titleC"><h2>餐厅家具</h2></div>
      						<div class="dining-room-titleE products-kinds-titleE">Dining Room</div>
      					</div>
      					<div class="dining-room-link products-kinds-link">
      						<ul>
      							<li class="products-kinds-link-list" v-for="(list,index) in $store.state.headProdNav[1].children" :key="index">
					            	<nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: 2},query: {classId: list.proCategoryId}}">{{list.proCategoryName}}</nuxt-link>
					            </li>
      						</ul>
      					</div>
      				</div>
      				<div class="dining-room-content products-kinds-content">
      					<prodListShow :prodList="indexProdList2" :showMore="true" :typeId="2"></prodListShow>
      				</div>
      			</div>
      		</div>
      		<!-- Dining Room end -->
      		<!-- Bedroom furniture satrt -->
      		<div id="bedroom-furniture" class="products-kinds">
      			<div class="bedroom-furniture-box products-kinds-box">
      				<div class="bedroom-furniture-top products-kinds-top">
      					<div class="bedroom-furniture-title products-kinds-title">
      						<div class="bedroom-furniture-titleC products-kinds-titleC"><h2>卧室家具</h2></div>
      						<div class="bedroom-furniture-titleE products-kinds-titleE">Bedroom furniture</div>
      					</div>
      					<div class="bedroom-furniture-link products-kinds-link">
      						<ul>
      							<li class="products-kinds-link-list" v-for="(list,index) in $store.state.headProdNav[2].children" :key="index">
					            	<nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: 3},query: {classId: list.proCategoryId}}">{{list.proCategoryName}}</nuxt-link>
					            </li>
      						</ul>
      					</div>
      				</div>
      				<div class="bedroom-furniture-content products-kinds-content">
      					<prodListShow :prodList="indexProdList3" :showMore="true" :typeId="3"></prodListShow>
      				</div>
      			</div>
      		</div>
      		<!-- Bedroom furniture end -->
      		<!-- Study furniture satrt -->
      		<div id="study-furniture" class="products-kinds">
      			<div class="study-furniture-box products-kinds-box">
      				<div class="study-furniture-top products-kinds-top">
      					<div class="study-furniture-title products-kinds-title">
      						<div class="study-furniture-titleC products-kinds-titleC"><h2>书房家具</h2></div>
      						<div class="study-furniture-titleE products-kinds-titleE">Study furniture</div>
      					</div>
      					<div class="study-furniture-link products-kinds-link">
      						<ul>
      							<li class="products-kinds-link-list" v-for="(list,index) in $store.state.headProdNav[3].children" :key="index">
					            	<nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: 4},query: {classId: list.proCategoryId}}">{{list.proCategoryName}}</nuxt-link>
					            </li>
      						</ul>
      					</div>
      				</div>
      				<div class="study-furniture-content products-kinds-content">
      					<prodListShow :prodList="indexProdList4" :showMore="true" :typeId="4"></prodListShow>
      				</div>
      			</div>
      		</div>
      		<!-- Study furniture end -->
      	</div>
      	<!-- Products Class end -->
	</section>
</template>

<script>
	import axios from 'axios'
  	import prodListShow from '~/components/common/prodListShow'

	export default {
		data (){
			return {}
		},
		head (){
			return {
				title: this.metaData.navigationTitle,
				meta: [
					{name: 'keywords',hid: 'keywords',content:`${this.metaData.navigationKeyword}`},
					{name:'description',hid:'description',content:`${this.metaData.navigationDescription}`}
				]
			}
		},
		async asyncData ({params,store}){
			//head信息
			let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/4`);

			let indexProdList1 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/1`);
			let indexProdList2 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/2`);
			let indexProdList3 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/3`);
			let indexProdList4 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/4`);
			let indexProdList5 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/97`);

			return {
				metaData: metaData.data,
				indexProdList1: indexProdList1.data,
				indexProdList2: indexProdList2.data,
				indexProdList3: indexProdList3.data,
				indexProdList4: indexProdList4.data,
				indexProdList5: indexProdList5.data
			}
		},
		components: {
			prodListShow
		}
	}
</script>

<style type="text/css" scoped>
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
	/* Recommend Products start */
		 div#recom-products {
			display: none;
			width: 100%;
			height: auto;
		}

		 .recom-products-box {
		     overflow:  hidden;
		     width: 1200px;
		     height:  auto;
		     margin:  0 auto;
		     padding: 150px 0;
		 }

		 .recom-products-box ul {
		     overflow:  hidden;
		 }

		 li.recom-products-list {
		     float:  left;
		     overflow:  hidden;
		     width:  293px;
		     height:  188px;
		     margin-left: 8px;
		 }

		 .recom-products-box ul li:first-child {
		     margin-left:  0;
		 }

		 .recom-products-img {
		     width:  100%;
		     height:  100%;
		 }

		 .recom-products-img img {
		     width:  100%;
		     height:  100%;
		     -webkit-transition: all 0.5s ease;
		     -o-transition: all 0.5s ease;
		     transition: all 0.5s ease;
		 }

		 .recom-products-img img:hover {
		     -webkit-transform: scale(1.2);
		     -ms-transform: scale(1.2);
		     -o-transform: scale(1.2);
		     transform: scale(1.2);
		 }
	/* Recommend Products end */
	/* Products Class start */
		div#products-class {
		    width:  100%;
		    height:  auto;
		    padding-bottom: 150px;
		}

		.products-kinds {
		    width: 100%;
		    height: auto;
		}

		.products-kinds-box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding: 133px 0 152px;
		}

		.products-kinds-top {
		    overflow:  hidden;
		    width: 100%;
		    height:  62px;
		}

		.products-kinds-title {
		    float:  left;
		    overflow:  hidden;
		    height:  100%;
		}

		.products-kinds-title div {
		    float:  left;
		    color:  #858585;
		    font-size:  14px;
		    text-align:  center;
		    line-height:  62px;
		}

		.products-kinds-titleE {
		    margin-left: 5px;
		}

		.products-kinds-titleC h2 {
		    margin-top: 5px;
			font-size:  38px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 46px;
		}

		.products-kinds-link {
		    float:  right;
		    overflow:  hidden;
		    height:  62px;
		    font-size:  14px;
		    line-height:  60px;
		    text-align: center;
		}

		.products-kinds-link ul {
		    overflow:  hidden;
		}

		.products-kinds-link-list {
		    float:  left;
		    padding: 0 18px;
		}

		.products-kinds-link-list a {
		    display:  block;
		    width:  100%;
		    height:  100%;
		    border-bottom: 2px solid transparent;
		    color: #979797;
		    box-sizing:  border-box;
		}

		.products-kinds-link-list a:hover {
		    border-bottom:  2px solid #000;
		    color: #000;
		}

		.products-kinds-content {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding-top:  105px;
		}

		.products-kinds-content ul {
		    overflow:  hidden;
		}
	/* Products Class end */
</style>