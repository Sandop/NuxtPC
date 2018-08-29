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

		<!-- 面包屑部分 -->
		<div id="bread-nav">
			<div class="brand-nav-box clearfix">
				<div class="brand-nav-content">
					<div class="brand-nav-title"><span>当前位置:</span></div>
					<div class="brand-nav-list">
						<ul>
							<li><nuxt-link target="_blank" to="/">首页</nuxt-link></li>
							<li>></li>
							<li><nuxt-link target="_blank" to="/prod">产品列表</nuxt-link></li>
							<li>></li>
							<li v-for="(item,index) in $store.state.headProdNav" :key="index" v-if=" (index + 1) == $route.params.typeId"><nuxt-link :to="{name: 'prod-typeId',params: {typeId: item.proCategoryId}}">{{item.proCategoryName}}</nuxt-link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 面包屑部分结束 -->

		<!-- Products list start -->

		<!-- Products select start -->
		<div id="products-content">
			<!-- products-select start -->
			<div id="products-select">
				<div class="products-select-box">
					<div class="furniture-place">
						<div class="furniture-place-title">空间:</div>
						<div class="furniture-place-kinds">
							<ul>
								<li data-id="1" class="furniture-place-kinds-list" v-for="(item,index) in $store.state.headProdNav" :key="index" :class="{active: (index + 1) == $route.params.typeId}" @click="getPositionIdProdList(item.proCategoryId)" v-if="index < 4">
									<nuxt-link :to="{name : 'prod-typeId',params: {typeId: item.proCategoryId}}">{{item.proCategoryName}}</nuxt-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="furniture-class">
						<div class="furniture-class-title">类型:</div>
						<div class="furniture-class-kinds">
							<ul>
								<li class="furniture-class-kinds-list" @click="getClassIdProdList(null)">
									<nuxt-link :to="{name : 'prod-typeId',params: {typeId: $route.params.typeId},query: {classId: null}}" :class="{active: null == $route.query.classId }">全部</nuxt-link>
								</li>
								<li class="furniture-class-kinds-list" v-for="(item,index) in $store.state.headProdNav[$route.params.typeId - 1].children" :key="index" @click="getClassIdProdList(item.proCategoryId)">
									<nuxt-link :to="{name : 'prod-typeId',params: {typeId: $route.params.typeId},query: {classId: item.proCategoryId}}" :class="{active: item.proCategoryId == $route.query.classId }">{{item.proCategoryName}}</nuxt-link>
								</li> 
							</ul>
						</div>
					</div>
					<div class="furniture-materials">
						<div class="furniture-materials-title">家具材质:</div>
						<div class="furniture-materials-kinds">
							<ul>
								<li class="furniture-materials-kinds-list" @click="getTextureIdProdList(null)">
									<nuxt-link :to="{name : 'prod-typeId',params: {typeId: $route.params.typeId},query: {classId: $route.query.classId,textureId: null}}" :class="{active: null == $route.query.textureId}">全部</nuxt-link>
								</li>
								<li class="furniture-materials-kinds-list" v-for="(item,index) in materialsData.children" :key="index" @click="getTextureIdProdList(item.proCategoryId)">
									<nuxt-link :to="{name: 'prod-typeId',params: {typeId: $route.params.typeId},query: {classId: $route.query.classId,textureId: item.proCategoryId}}" :class="{active: item.proCategoryId == $route.query.textureId}">{{item.proCategoryName}}</nuxt-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="furniture-series">
						<div class="furniture-series-title">家具系列:</div>
						<div class="furniture-series-kinds">
							<ul>
								<li class="furniture-series-kinds-list" @click="getSeriesIdProdList(null)" :class="{active: null == seriesId}">全部</li>
								<li class="furniture-series-kinds-list" v-for="(item,index) in seriesData.children" :key="index" @click="getSeriesIdProdList(item.proCategoryId)" :class="{active: item.proCategoryId == seriesId}">{{item.proCategoryName}}</li>
							</ul>
						</div>
					</div>
					<div class="furniture-style">
						<div class="furniture-style-title">家具风格:</div>
						<div class="furniture-style-kinds">
							<ul>
								<li class="furniture-style-kinds-list" @click="getStyleIdProdList(null)" :class="{active: null == styleId}">全部</li>
								<li class="furniture-style-kinds-list" v-for="(item,index) in styleData.children" :key="index" @click="getStyleIdProdList(item.proCategoryId)" :class="{active: item.proCategoryId == styleId}">{{item.proCategoryName}}</li>
							</ul>
						</div>
					</div>
					<div class="products-sequence">
						<div class="compl-sequence"><span>综合排序</span></div>
						<div class="sales-volume">
							<ul>
								<li data-id="0" class="sales-volume-list" @click="getOrderByPageViewsCountProdList" :class="{active: orderByPageViewsCount}">销量</li>
							</ul>
						</div>
						<div class="news-products">
							<ul>
								<li data-id="0" class="news-products-list" @click="getOrderByTimeProdList" :class="{active: orderByTime}">新品</li>
							</ul>
						</div>
						<div class="products-prices">
							<ul>
								<li data-id="0" class="products-prices-list" @click="getOrderByPriceProdList" :class="{active: orderByPrice}">价格</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- products-select end -->

			<!-- products-show start -->
			<div id="products-show">
				<div class="products-show-box">
					<div v-if="prodListData.total == 0">
						<p>还没有类似产品哦^_^，请选择其他相关产品，O(∩_∩)O谢谢！</p>
					</div>
					<div v-if="prodListData.total != 0">
      					<prodListShow :prodList="prodListData.list"></prodListShow>
					</div>
				</div>
			</div>
			<!-- products-show end -->
			
			<!-- products-pagination start-->
			<div id="products-pagination" v-if="prodListData.total != 0">
				<div class="products-pagination-box">
					<pagination :total="total" :display="display" :current-page='current' @pagechange="pagechange"></pagination>
				</div>
			</div>
			<!-- products-pagination end-->
		</div>
		<!-- Products select end -->

		<!-- Products list end -->	
	</section>
</template>

<script>
	import axios from 'axios'
  	import prodListShow from '~/components/common/prodListShow'
	import qs from 'qs'
	import pagination from '~/components/common/pagination.vue'

  	export default {
  		data (){
  			return {
				//产品筛选
				positionId: this.$route.params.typeId,	//空间Id
				typeId: this.$route.query.classId,		//类型
				textureId: this.$route.query.textureId,		//材质
				seriesId: null,			//系列
				styleId: null,			//分格
				orderByTime: 0,			//是否根据时间排序，1代表是，0代表否
				orderByPageViewsCount: 0,		//是否销量排序，1代表是，0代表否
				orderByPrice: 0,			//是否根据价格排序，1代表是，0代表否
				//产品分页
				display: 12,   // 每页显示条数
				current: 1,   // 当前的页数
  			}
  		},
  		head (){
  			return {
	  			title: this.prodListData.title,
				meta: [
					{name: 'keywords',hid: 'keywords',content:`${this.prodListData.keyword}`},
					{name:'description',hid:'description',content:`${this.prodListData.description}`}
				]
  			}
  		},
		methods: {
			getPositionIdProdList (positionId){
				this.positionId = positionId;
				this.typeId = null;	
				this.textureId = null;	
				this.seriesId = null;	
				this.styleId = null;
				this.orderByTime = 0;
				this.orderByPageViewsCount = 0;
				this.orderByPrice = 0;
				let dataJson = qs.stringify({
					positionId: this.positionId, 
					typeId : this.typeId,	
					textureId : this.textureId,	
					seriesId : this.seriesId,	
					styleId : this.styleId,		
					orderByTime: this.orderByTime, 
					orderByPageViewsCount: this.orderByPageViewsCount, 
					orderByPrice: this.orderByPrice 
				});
				axios.post(`${this.$store.state.wordpressAPI}/product/selectByCondition/1/12`,dataJson).then((response) => {
					this.prodListData = response.data;
					this.total = response.data.total;
				}).catch((error) => {
					console.log(error)
				})
			},
			getClassIdProdList (typeId){
				this.typeId = typeId;
				let dataJson = qs.stringify({
					positionId: this.positionId, 
					typeId : this.typeId,	
					textureId : this.textureId,	
					seriesId : this.seriesId,	
					styleId : this.styleId,		
					orderByTime: this.orderByTime, 
					orderByPageViewsCount: this.orderByPageViewsCount, 
					orderByPrice: this.orderByPrice 
				});
				axios.post(`${this.$store.state.wordpressAPI}/product/selectByCondition/1/12`,dataJson).then((response) => {
					this.prodListData = response.data;
					this.total = response.data.total;
				}).catch((error) => {
					console.log(error)
				})
			},
			getTextureIdProdList (textureId){
				this.textureId = textureId;
				let dataJson = qs.stringify({
					positionId: this.positionId, 
					typeId : this.typeId,	
					textureId : this.textureId,	
					seriesId : this.seriesId,	
					styleId : this.styleId,		
					orderByTime: this.orderByTime, 
					orderByPageViewsCount: this.orderByPageViewsCount, 
					orderByPrice: this.orderByPrice 
				});
				axios.post(`${this.$store.state.wordpressAPI}/product/selectByCondition/1/12`,dataJson).then((response) => {
					this.prodListData = response.data;
					this.total = response.data.total;
				}).catch((error) => {
					console.log(error)
				})
			},
			getSeriesIdProdList (number){
				this.seriesId = number;
				let dataJson = qs.stringify({
					positionId: this.positionId, 
					typeId : this.typeId,	
					textureId : this.textureId,	
					seriesId : this.seriesId,	
					styleId : this.styleId,		
					orderByTime: this.orderByTime, 
					orderByPageViewsCount: this.orderByPageViewsCount, 
					orderByPrice: this.orderByPrice 
				});
				axios.post(`${this.$store.state.wordpressAPI}/product/selectByCondition/1/12`,dataJson).then((response) => {
					this.prodListData = response.data;
					this.total = response.data.total;

				}).catch((error) => {
					console.log(error)
				})
			},
			getStyleIdProdList (number){
				this.styleId = number;
				let dataJson = qs.stringify({
					positionId: this.positionId, 
					typeId : this.typeId,	
					textureId : this.textureId,	
					seriesId : this.seriesId,	
					styleId : this.styleId,		
					orderByTime: this.orderByTime, 
					orderByPageViewsCount: this.orderByPageViewsCount, 
					orderByPrice: this.orderByPrice 
				});
				axios.post(`${this.$store.state.wordpressAPI}/product/selectByCondition/1/12`,dataJson).then((response) => {
					this.prodListData = response.data;
					this.total = response.data.total;

				}).catch((error) => {
					console.log(error)
				})
			},
			getOrderByTimeProdList (number){
				this.orderByPageViewsCount = 0;
				this.orderByPrice = 0;
				if ( this.orderByTime == 0 ) {
					this.orderByTime = 1;
				} else {
					this.orderByTime =0
				}
				let dataJson = qs.stringify({
					positionId: this.positionId, 
					typeId : this.typeId,	
					textureId : this.textureId,	
					seriesId : this.seriesId,	
					styleId : this.styleId,		
					orderByTime: this.orderByTime, 
					orderByPageViewsCount: this.orderByPageViewsCount, 
					orderByPrice: this.orderByPrice 
				});
				axios.post(`${this.$store.state.wordpressAPI}/product/selectByCondition/1/12`,dataJson).then((response) => {
					this.prodListData = response.data;
					this.total = response.data.total;

				}).catch((error) => {
					console.log(error)
				})
			},
			getOrderByPageViewsCountProdList (number){
				this.orderByTime = 0;
				this.orderByPrice = 0;
				if ( this.orderByPageViewsCount == 0 ) {
					this.orderByPageViewsCount = 1;
				} else {
					this.orderByPageViewsCount =0;
				}
				let dataJson = qs.stringify({
					positionId: this.positionId, 
					typeId : this.typeId,	
					textureId : this.textureId,	
					seriesId : this.seriesId,	
					styleId : this.styleId,		
					orderByTime: this.orderByTime, 
					orderByPageViewsCount: this.orderByPageViewsCount, 
					orderByPrice: this.orderByPrice 
				});
				axios.post(`${this.$store.state.wordpressAPI}/product/selectByCondition/1/12`,dataJson).then((response) => {
					this.prodListData = response.data;
					this.total = response.data.total;

				}).catch((error) => {
					console.log(error)
				})
			},
			getOrderByPriceProdList (number){
				this.orderByTime = 0;
				this.orderByPageViewsCount = 0;
				if ( this.orderByPrice == 0 ) {
					this.orderByPrice = 1;
				} else {
					this.orderByPrice =0
				}
				let dataJson = qs.stringify({
					positionId: this.positionId, 
					typeId : this.typeId,	
					textureId : this.textureId,	
					seriesId : this.seriesId,	
					styleId : this.styleId,		
					orderByTime: this.orderByTime, 
					orderByPageViewsCount: this.orderByPageViewsCount, 
					orderByPrice: this.orderByPrice 
				});
				axios.post(`${this.$store.state.wordpressAPI}/product/selectByCondition/1/12`,dataJson).then((response) => {
					this.prodListData = response.data;
					this.total = response.data.total;
				}).catch((error) => {
					console.log(error)
				})
			},
			pagechange (currentPage){
            	let dataJson = qs.stringify({
					positionId: this.positionId, 
					typeId : this.typeId,	
					textureId : this.textureId,	
					seriesId : this.seriesId,	
					styleId : this.styleId,		
					orderByTime: this.orderByTime, 
					orderByPageViewsCount: this.orderByPageViewsCount, 
					orderByPrice: this.orderByPrice 
				});
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		        axios.post(`${this.$store.state.wordpressAPI}/product/selectByCondition/${currentPage}/12`,dataJson)
		                .then((response)=> {
							this.prodListData = response.data;
							this.total = response.data.total;
							
		                })
		                .catch(function (error) {
		                 	console.log(error);
		                });
		    }
		},
  		validata ({ params }){
			return /^\d+$/.test(params.typeId)
		},
  		async asyncData ({params,query,store}){
			//筛选条件
			let selectData = await axios(`${store.state.wordpressAPI}/proCategory/showAll/list`);
			//列表展示
			let dataJson = qs.stringify({
								positionId:params.typeId,
								typeId : query.classId,
								textureId : query.textureId,
								seriesId : null,
								styleId : null,
								orderByTime:0, //是否根据时间排序，1代表是，0代表否
								orderByPageViewsCount:0, //是否销量排序，1代表是，0代表否
								orderByPrice:0 //是否根据价格排序，1代表是，0代表否
							});
			let prodListData = await axios.post(`${store.state.wordpressAPI}/product/selectByCondition/1/12`, dataJson);
			return {
				materialsData: selectData.data[0],  //家具材质
				seriesData: selectData.data[1],		//家具系列
				styleData: selectData.data[2],		//家具风格
				prodListData: prodListData.data,
				total: prodListData.data.total
			}
  		},
  		components: {
			prodListShow,
			pagination
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
	/*Products select start*/

		div#products-content {
		    width:  100%;
		    height:  auto;
		}

		div#products-select {
		    width:  100%;
		    height: auto;
		}

		.products-select-box {
		    overflow:  hidden;
		    width:  1200px;
		    min-height: 468px;
		    height:  auto;
		    margin:  0 auto;
		    padding-top:  50px;
		}

		.furniture-place,.furniture-class,.furniture-materials,.furniture-series,.furniture-style {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding: 18px 0;
		    border-bottom: 2px solid #d5d5d8;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  34px;
		    text-align:  center;
		}

		.furniture-place-title,.furniture-class-title,.furniture-materials-title,.furniture-series-title,.furniture-style-title {
		    float:  left;
		    width: 80px;
		    height:  100%;
		    color: #22202b;
		    line-height: 40px;
		}

		.furniture-place-kinds,.furniture-class-kinds,.furniture-materials-kinds,.furniture-series-kinds,.furniture-style-kinds {
		    float: left;
		    overflow:  hidden;
		    width: 1120px;
		}

		.products-select-box ul li {
		    float:  left;
		    height:  40px;
		    margin: 2px;
		    padding: 0 33px;
		    border: 3px solid transparent;
		    box-sizing:  border-box;
		    cursor:  pointer;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.products-select-box ul li a {
			display: block;
			width: 100%;
			height: 100%;
			color: #858585;
			box-sizing: border-box;
		}

		.products-select-box ul li a.nuxt-link-exact-active.nuxt-link-active {
				color: #22202b;
		}

		.furniture-place-kinds ul li.furniture-place-kinds-list {
		    float:  left;
		    height: 40px;
		    padding: 0;
		    border:  none;
		}

		.furniture-place-kinds ul li.furniture-place-kinds-list a {
		    display:  block;
		    width:  100%;
		    height:  100%;
		    padding: 0 33px;
		    border: 3px solid transparent;
		    box-sizing: border-box;
		    color: #858585;
		    cursor: pointer;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.products-select-box ul li:hover{
		    border: 3px solid #22202b;
		    color: #22202b;
		}

		.furniture-class-kinds ul li.furniture-class-kinds-list {
			padding: 0;
			border: none;
		}

		.furniture-class-kinds ul li.furniture-class-kinds-list a {
			padding: 0 30px;
			border: 3px solid transparent;
			-webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.furniture-class-kinds ul li.furniture-class-kinds-list a.nuxt-link-exact-active.nuxt-link-active ,.furniture-class-kinds ul li.furniture-class-kinds-list a.active{
			color: #22202b;
			border: 3px solid #22202b;
		}

		.furniture-class-kinds ul li.furniture-class-kinds-list a:hover {
			color: #22202b;
			border: 3px solid #22202b;
		}

		.furniture-materials-kinds ul li.furniture-materials-kinds-list {
			padding:  0;
			border: none;
		}

		.furniture-materials-kinds ul li.furniture-materials-kinds-list a {
			display:  block;
			width:  100%;
			height:  100%;
			padding: 0 33px;
			border: 3px solid transparent;
			-webkit-transition: all 0.5s ease;
			-o-transition: all 0.5s ease;
			transition: all 0.5s ease;
		}

		.furniture-materials-kinds ul li.furniture-materials-kinds-list a:hover {
			color: #22202b;
			border: 3px solid #22202b;
		}

		.furniture-materials-kinds ul li.furniture-materials-kinds-list a.active {
			color: #22202b;
			border: 3px solid #22202b;
		}

		.furniture-materials-kinds ul li.furniture-materials-kinds-list a.nuxt-link-exact-active.nuxt-link-active {
			color: #22202b;
			border: 3px solid #22202b;
		}

		.furniture-series-kinds-list.active,.furniture-style-kinds-list.active{
		    border: 3px solid #22202b;
		    color: #22202b;
		}

		.furniture-place-kinds ul li.furniture-place-kinds-list:hover{
		    border: none;
		}

		.furniture-place-kinds ul li.furniture-place-kinds-list:hover a,.furniture-place-kinds ul li.furniture-place-kinds-list.active a{
		    border: 3px solid #22202b;
		    color: #22202b;
		}

		.products-sequence {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding: 18px 0;
		    border-bottom: 2px solid #d5d5d8;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  34px;
		    text-align:  center;
		}

		.products-sequence>div {
		    float:  left;
		    height:  40px;
		    border: 3px solid transparent; 
		    box-sizing:  border-box;
		    cursor: pointer;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.products-sequence>div.compl-sequence{
			border: 3px solid transparent;
			color:  #858585;
		    line-height: 40px;
		}

		li.sales-volume-list.active,li.news-products-list.active,li.products-prices-list.active{
		    border: 3px solid #22202b;
		    color: #22202b;
		}

		.sales-volume {
			display:  none;
		}
	/*products-select end*/

	/*products-show start*/
		div#products-show {
		    width: 100%;
		    height: auto;
		}

		.products-show-box {
		    overflow: hidden;
		    width: 1200px;
		    min-height: 291px;
		    height: auto;
		    margin: 0 auto;
		    padding: 105px 0 78px;
		    border-bottom: 2px solid #d5d5d8;
		}

		.products-show-box p {
		    color: #858585;
		    font-size: 16px;
		    line-height: 34px;
		    text-align: center;
		}

		.products-show-box ul {
		    overflow:  hidden;
		}

		.products-kind-list {
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

		li.products-kind-list:hover {
		    border: 3px solid #dcdcdc;
		}

		.products-kind-list-img {
		    display: flex;
		    overflow: hidden;
		    width: 100%;
		    height: 236px;
		    justify-content: center;
		    align-items: center;
		}

		.products-kind-list-img img {
		    width: 100%;
		    height: 100%;
		    -webkit-transition: all 1s ease;
		    -o-transition: all 1s ease;
		    transition: all 1s ease;
		}
		.products-kind-list-img img:hover {
		    -webkit-transform: scale(1.1);
		    -ms-transform: scale(1.1);
		    -o-transform: scale(1.1);
		    transform: scale(1.1);
		}

		.products-kind-name {
		    overflow:  hidden;
		    width:  100%;
		    height:  38px;
		}

		.products-kind-name a {
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

		.products-kind-name a:hover {
		    color: #22202b;
		}

		.products-kind-price {
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
	/*products-show end*/
		/*products-pagination start*/
			div#products-pagination {
			    width:  100%;
			    height:  auto;
			}

			.products-pagination-box {
			    overflow:  hidden;
			    width:  1200px;
			    height:  auto;
			    margin:  0 auto;
			    padding: 60px 0 170px;
			    text-align:  center;
			}


			.products-pagination-box a,.products-pagination-box span {
			    display: inline-block;
			    margin: 0 5px;
			    width: 38px;
			    height: 38px;
			    background: #fff;
			    border: 2px solid #000;
			    color: #000;
			    font-size: 14px;
			    line-height: 34px;
			    text-align: center;
			    box-sizing: border-box;
			}

			.prev,.next,.products-pagination-box a:nth-child(2),.products-pagination-box a:nth-last-child(2) {
			    display: inline-block;
			    margin: 0 5px;
			    width: 38px;
			    height: 38px;
			    background: #fff;
			    border: 2px solid #000;
			    color: #000;
			    font-family: "Simsun";
			    font-size: 16px;
			    font-weight: bold;
			    line-height: 34px;
			    text-align: center;
			    box-sizing: border-box;
			}

			.products-pagination-box a:hover,span.active {
			    background: #000;
			    color: #feeabd;
			}
		/*products-pagination end*/
	/*Products select end*/

</style>