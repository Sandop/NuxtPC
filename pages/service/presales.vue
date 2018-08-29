<template>
	<section class="container">
		<!-- banner start -->
		<div id="common-banner">
			<div class="common-banner-container">
				<div class="common-banner-img">
					<img src="~/assets/images/pre-sales/banner.png">
				</div>
			</div>
		</div>
		<!-- banner end -->
		
		<!-- Pre sale service commitment start -->
		<div id="pre_sales_wrap">
			<div class="pre_sales_box">
				<div class="pre_sales_title">
					<div class="pre_sales_titleC">
						<h2>售前服务承诺</h2>
					</div>
					<div class="pre_sales_titleE">
						<p>Pre sale service commitment</p>
					</div>
				</div>
				<div class="pre_sales">
					<ul>
						<li class="pre_sales_list">
							<div class="pre_sales_left">
								<div class="pre_sales_num">01</div>
								<div class="pre_sales_list_title">
									<p class="pre_sales_list_titleC">精英团队用心做服务</p>
									<p class="pre_sales_list_titleE">The elite team is doing the service with the heart</p>
								</div>
								<div class="pre_sales_desc">
									<p>客户也可以选择实地考察我公司所售产品，来考察我公司的产品设计，产品制造工艺流程，产品样机，产品检测设施和质量管理体系。</p>
								</div>
							</div>
							<div class="pre_sales_right">
								<div class="pre_sales_right_img">
									<img src="~/assets/images/pre-sales/pre_sales_right1.png" alt="">
								</div>
							</div>
						</li>
						<li class="pre_sales_list">
							<div class="pre_sales_left">
								<div class="pre_sales_num">02</div>
								<div class="pre_sales_list_title">
									<p class="pre_sales_list_titleC">根据客户需求定制方案</p>
									<p class="pre_sales_list_titleE">Customizing the scheme according to customer requirement</p>
								</div>
								<div class="pre_sales_desc">
									<p>在您前期选择的时候，我们就有专业的导购会根据顾客的房型图和需求，为您选择适合您的家具，包括款式颜色和尺寸，所以不会出现放在家里不适合的问题。</p>
								</div>
							</div>
							<div class="pre_sales_right">
								<div class="pre_sales_right_img">
									<img src="~/assets/images/pre-sales/pre_sales_right2.png" alt="">
								</div>
							</div>
						</li>
						<li class="pre_sales_list">
							<div class="pre_sales_left">
								<div class="pre_sales_num">03</div>
								<div class="pre_sales_list_title">
									<p class="pre_sales_list_titleC">欢迎到公司实地考察</p>
									<p class="pre_sales_list_titleE">Welcome to the company on the spot</p>
								</div>
								<div class="pre_sales_desc">
									<p>客户也可以选择实地考察我公司所售产品，来考察我公司的产品设计，产品制造工艺流程，产品样机，产品检测设施和质量管理体系。</p>
								</div>
							</div>
							<div class="pre_sales_right">
								<div class="pre_sales_right_img">
									<img src="~/assets/images/pre-sales/pre_sales_right3.png" alt="">
								</div>
							</div>
						</li>
						<li class="pre_sales_list">
							<div class="pre_sales_left">
								<div class="pre_sales_num">04</div>
								<div class="pre_sales_list_title">
									<p class="pre_sales_list_titleC">提供合理报价</p>
									<p class="pre_sales_list_titleE">Provide a reasonable offer</p>
								</div>
								<div class="pre_sales_desc">
									<p>当客户选定产品，并告知我们专业人员，我们会根据产品的类型，和您要求的的尺寸，在2个小时内为您提供合理的报价</p>
								</div>
							</div>
							<div class="pre_sales_right">
								<div class="pre_sales_right_img">
									<img src="~/assets/images/pre-sales/pre_sales_right4.png" alt="">
								</div>
							</div>
						</li>
						<li class="pre_sales_list">
							<div class="pre_sales_left">
								<div class="pre_sales_num">05</div>
								<div class="pre_sales_list_title">
									<p class="pre_sales_list_titleC">提供专业咨询</p>
									<p class="pre_sales_list_titleE">Providing professional advice</p>
								</div>
								<div class="pre_sales_desc">
									<p>我们坚持顾客第一的原则，为客户提供优质的服务，我们会在两小时内答复您提出的专业技术问题，为您解答疑惑。</p>
								</div>
							</div>
							<div class="pre_sales_right">
								<div class="pre_sales_right_img">
									<img src="~/assets/images/pre-sales/pre_sales_right5.png" alt="">
								</div>
							</div>
						</li>
						<li class="pre_sales_list">
							<div class="pre_sales_left">
								<div class="pre_sales_num">06</div>
								<div class="pre_sales_list_title">
									<p class="pre_sales_list_titleC">产品质量承诺</p>
									<p class="pre_sales_list_titleE">Product quality commitment</p>
								</div>
								<div class="pre_sales_desc">
									<p>为了保证产品的高可靠性和先进性，家具的选材均选用国内进口珍贵实木，产品的制造和检测均有质量记录和检测资料。对产品性能的检测，我们诚请用户亲临对产品进行全过程、全性能检查。</p>
								</div>
							</div>
							<div class="pre_sales_right">
								<div class="pre_sales_right_img">
									<img src="~/assets/images/pre-sales/pre_sales_right6.png" alt="">
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- Pre sale service commitment  end -->
	</section>
</template>

<script>
	import axios from 'axios'
	export default {
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
		    let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/15`);
		  return {
		    metaData: metaData.data,
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
	/*Pre sale service commitment start*/
		div#pre_sales_wrap {
		    width:  100%;
		}

		.pre_sales_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding: 150px 0;
		}

		.pre_sales_title {
		    width:  100%;
		    text-align:  center;
		}

		.pre_sales_titleC {
		    overflow:  hidden;
		    width:  100%;
		}

		.pre_sales_titleC h2 {
			font-size:  38px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 38px;
		}

		.pre_sales_titleE {
			overflow: hidden;
			width: 100%;
			height: 34px;
			color: #858585;
			font-size: 14px;
			line-height: 34px;
			text-align:center;
		}

		.pre_sales {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding-top:  140px;
		}

		.pre_sales ul {
		    width:  100%;
		}

		li.pre_sales_list {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding: 75px 0;
		    border-bottom: 2px solid #eae9eb;
		}

		.pre_sales ul li:first-child {
		    border-top: 2px solid #eae9eb;
		}

		.pre_sales_left {
		    float:  left;
		    overflow: hidden;
		    width:  600px;
		    height:  auto;
		    box-sizing: border-box;
		}

		.pre_sales_right {
		    float:  right;
		    width:  600px;
		    height:  auto;
		}

		.pre_sales_right_img {
		    float:  right;
		    overflow:  hidden;
		    width:  504px;
		    height: 258px;
		}

		.pre_sales_num {
		    overflow:  hidden;
		    width:  100%;
		    height:  92px;
		    color: #22202b;
		    font-size:  60px;
		    font-weight:  bold;
		    line-height:  92px;
		}

		.pre_sales_list_title {
		    width:  100%;
		}

		p.pre_sales_list_titleC {
		    overflow:  hidden;
		    width:  100%;
		    height:  34px;
		    color:  #22202b;
		    font-size:  24px;
		    font-weight:  bold;
		    line-height:  34px;
		}

		p.pre_sales_list_titleE {
		    overflow: hidden;
		    width: 100%;
		    height: 20px;
		    color: #cccccc;
		    font-size: 12px;
		    line-height: 20px;
		}

		.pre_sales_desc {
		    overflow: hidden;
		    width: 100%;
		    padding-top: 13px;
		    color: #858585;
		    font-size: 14px;
		    line-height: 18px;
		}

		.pre_sales ul li:nth-child(2n) .pre_sales_left {
		    float:  right;
		    padding-left: 55px;
		}

		.pre_sales ul li:nth-child(2n) .pre_sales_right,.pre_sales ul li:nth-child(2n) .pre_sales_right .pre_sales_right_img {
		    float:  left;
		}

	/*Pre sale service commitment end*/

</style>