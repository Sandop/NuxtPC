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
        <div class="new_products_wrap">
            <div class="new_products_box">
                <!-- products-show start -->
                <div id="products-show">
                    <prodListShow :prodList="newProdList.list" :showNewMore="false" :typeId="97"></prodListShow>
                </div>
                <!-- products-show end -->
                
                <!-- products-pagination start-->
                <div id="products-pagination">
                    <div class="products-pagination-box">
                        <pagination :total="total" :display="display" :current-page='current' @pagechange="pagechange"></pagination>
                    </div>
                </div>
                <!-- products-pagination end-->
            </div>
        </div>
      	
      	
	</section>
</template>

<script>
	import axios from 'axios'
    import prodListShow from '~/components/common/prodListShow'
	import pagination from '~/components/common/pagination.vue'
      
	export default {
		data (){
			return {
                //产品分页
				display: 12,   // 每页显示条数
				current: 1,   // 当前的页数
            }
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
            //新品数据
            let newProdList = await axios.post(`${store.state.wordpressAPI}/product/selectByNew/1/12`);
			return {
				metaData: metaData.data,
                newProdList: newProdList.data,
                total: newProdList.data.total
			}
		},
		components: {
            prodListShow,
            pagination
        },
        methods: {
            pagechange (currentPage){
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		        axios.post(`${this.$store.state.wordpressAPI}/product/selectByNew/${currentPage}/12`)
		                .then((response)=> {
							this.newProdList = response.data;
							this.total = response.data.total;
		                })
		                .catch(function (error) {
		                 	console.log(error);
		                });
		    }
		}
	}
</script>

<style type="text/css" scoped>
	div#common-banner {
		height: 394px;
	}
	.new_products_wrap {
		width:  100%;
	}

	.new_products_box {
		width:  1200px;
		margin:  0 auto;
	}

	div#products-show {
		width:  100%;
		padding: 105px 0 78px;
		border-bottom: 2px solid #d5d5d8;
	}

	div#products-pagination {
		width: 100%;
		height: auto;
	}

	.products-pagination-box {
		overflow: hidden;
		width: 1200px;
		height: auto;
		margin: 0 auto;
		padding: 60px 0 170px;
		text-align: center;
	}
</style>