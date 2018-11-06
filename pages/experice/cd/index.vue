<template>
	<section class="container">
		<expericeBanner :bannerSrc="bannerSrc"></expericeBanner>
		<expericePlaceDesc :placeDescData="placeDescData"></expericePlaceDesc>
			
			<!-- Place people description satrt -->
			<div id="place_people_desc_wrap">
				<div class="place_people_desc_box clearfix">
					<div class="place_people_desc_left">
						<div class="place_people_desc_left_img">
							<img src="~/assets/images/experice-cd/place_people_desc_left_img.png" alt="">
						</div>
						<div class="place_people_name"><p>苏轼</p></div>
						<div class="place_people_desc">
							<div class="place_people_descC">
								<p>“莫听穿林打叶声，何妨吟啸且徐行。</p>
								<p>竹杖芒鞋轻似马，谁怕？-蓑烟雨任平生”</p>
							</div>
						</div>
					</div>
					<div class="place_people_desc_right">
						<div class="place_people_desc_right_img">
							<img src="~/assets/images/experice-cd/place_people_desc_right_img.png" alt="">
						</div>
						<div class="place_people_desc_right_title">
							<p class="place_people_desc_right_titleE">CHENGDU</p>
							<p class="place_people_desc_right_titleC">成都卫诗理体验馆</p>
						</div>
					</div>
				</div>
			</div>
			<!-- Place people description satrt -->

			<!-- Line Service start -->
			<lineService></lineService>
			<!-- Line Service end -->

			<!-- Panoramic hall start -->
			<div id="panoramic_hall_wrap">
				<div class="panoramic_hall_box">
					<div class="panoramic_hall_title_box">
						<div class="panoramic_hall_titleC">
							<h2>成都体验馆</h2>
							<h2>唯美实景曝光</h2>
						</div>
						<div class="panoramic_hall_titleE">
							<p>Panoramic hall</p>
						</div>
						<div class="panoramic_hall_title_desc">
							<p>馆内产品实景展示，呈现空间艺术的美感，让生活处处皆美学</p>
						</div>
					</div>
					<div class="panoramic_hall">
						<ul>
							<li class="panoramic_hall_list_cd">
								<div class="panoramic_hall_list_img">
									<img src="~/assets/images/experice-cd/panoramic_hall_list_img1.png" alt="">
								</div>
								<div class="panoramic_hall_list_intro_box">
									<div class="panoramic_hall_list_title">
										<p>致敬·先锋</p>
									</div>
									<div class="panoramic_hall_list_introC">
										<p>中高端空间美学MYD设计团队匠心呈现，缔造纯正欧美贵族古典风范。</p>
									</div>
									<div class="panoramic_hall_list_introE">
										<p>Professional team</p>
									</div>
								</div>
							</li>
							<li class="panoramic_hall_list_cd">
								<div class="panoramic_hall_list_intro_box">
									<div class="panoramic_hall_list_title">
										<p>诚献·臻品</p>
									</div>
									<div class="panoramic_hall_list_introC">
										<p>2400㎡生态生活体验馆，1135款臻尚奢品，风格涵盖现代美式、后现代美式、欧式、英式、轻奢小法、禅意中式、新古典、中式、北欧等海量精品供您臻选</p>
									</div>
									<div class="panoramic_hall_list_introE">
										<p>Quality products</p>
									</div>
								</div>
								<div class="panoramic_hall_list_img">
									<img src="~/assets/images/experice-cd/panoramic_hall_list_img2.png" alt="">
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- Panoramic hall end -->

			<!-- Native Level start -->
			<div id="native_level_wrap">
				<div class="native_level_box">
					<div class="native_level_title_box clearfix">
						<div class="native_level_title_left">
							<div class="native_level_titleC">
								<h2>体验馆 第一层</h2>
							</div>
							<div class="native_level_title_desc">
								<p>麦巴赫·纽约摩登系列</p>
								<p>美的产品传递出来的是人和世界的理解</p>
							</div>
						</div>
						<div class="native_level_title_line"></div>
						<div class="native_level_title_right">
							<p class="native_level_titleE">Beautiful products</p>
						</div>
					</div>
					<div class="native_level_show">
						<ul>
							<li class="native_level_list">
								<img src="~/assets/images/experice-cd/native_level_list1.png" alt="">
							</li>
							<li class="native_level_list">
								<img src="~/assets/images/experice-cd/native_level_list2.png" alt="">
							</li>
							<li class="native_level_list">
								<img src="~/assets/images/experice-cd/native_level_list3.png" alt="">
							</li>
							<li class="native_level_list">
								<img src="~/assets/images/experice-cd/native_level_list4.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- Native Level end -->
			
			<!-- Elegant Style start -->
			<div id="elegant_style_wrap">
				<div class="elegant_style_box">
					<div class="elegant_style_title_box clearfix">
						<div class="elegant_style_title_left">
							<div class="elegant_style_titleC">
								<h2>体验馆 第二层</h2>
							</div>
							<div class="elegant_style_title_desc">
								<p>麦巴赫·纽约摩登系列</p>
								<p>宾丽·美式简奢系列  比弗利·新现代轻奢系列</p>
								<p>爱把简单生活过成甜</p>
							</div>
						</div>
						<div class="elegant_style_title_line"></div>
						<div class="elegant_style_title_right">
							<p class="elegant_style_titleE">Sweet</p>
						</div>
					</div>
					<div class="elegant_style_show">
						<ul>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-cd/elegant_style_list1.png" alt="">
							</li>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-cd/elegant_style_list2.png" alt="">
							</li>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-cd/elegant_style_list3.png" alt="">
							</li>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-cd/elegant_style_list4.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- Elegant Style end -->

			<!-- Chinese Style start -->
			<div id="chinese_style_wrap">
				<div class="chinese_style_box">
					<div class="chinese_style_title_box clearfix">
						<div class="chinese_style_title_left">
							<div class="chinese_style_titleC">
								<h2>体验馆 第三层</h2>
							</div>
							<div class="chinese_style_title_desc">
								<p>丘吉尔庄园·英式名流系列 杜兰戈美式系列</p>
								<p>梵地亚欧式II系列  翡丽·后现代高端艺术系列</p>
								<p>愈品味，愈懂品味</p>
							</div>
						</div>
						<div class="chinese_style_title_line"></div>
						<div class="chinese_style_title_right">
							<p class="chinese_style_titleE">Understand taste</p>
						</div>
					</div>
					<div class="chinese_style_show">
						<ul>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-cd/chinese_style_list1.png" alt="">
							</li>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-cd/chinese_style_list2.png" alt="">
							</li>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-cd/chinese_style_list3.png" alt="">
							</li>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-cd/chinese_style_list4.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- Chinese Style end -->

			<!-- Natural Style start -->
			<div id="natural_style_wrap">
				<div class="natural_style_box">
					<div class="natural_style_title_box clearfix">
						<div class="natural_style_title_left">
							<div class="natural_style_titleC">
								<h2>体验馆 第四层</h2>
							</div>
							<div class="natural_style_title_desc">
								<p>溯·东方新中式系列  麦巴赫·纽约摩登系列</p>
								<p>延祚·中式刺猬紫系列 佩洛·北欧系列  大斑马木系列</p>
								<p>纯粹生态，自然礼遇</p>
							</div>
						</div>
						<div class="natural_style_title_line"></div>
						<div class="natural_style_title_right">
							<p class="natural_style_titleE">Natural</p>
						</div>
					</div>
					<div class="natural_style_show">
						<ul>
							<li class="natural_style_list">
								<img src="~/assets/images/experice-cd/natural_style_list1.png" alt="">
							</li>
							<li class="natural_style_list">
								<img src="~/assets/images/experice-cd/natural_style_list2.png" alt="">
							</li>
							<li class="natural_style_list">
								<img src="~/assets/images/experice-cd/natural_style_list3.png" alt="">
							</li>
							<li class="natural_style_list">
								<img src="~/assets/images/experice-cd/natural_style_list4.png" alt="">
							</li>
						</ul>
					</div>
					<div class="natural_style_more">
						<p>更多系列，到店尊享</p>
					</div>
				</div>
			</div>
			<!-- Natural Style end -->

			<!-- Dream Together start -->
			<expericeVideo></expericeVideo>
			<!-- Dream Together end -->
			
			<!-- High Lights start -->
			<div id="high_lights_wrap">
				<div class="high_lights_box">
					<div class="high_lights_title_box">
						<div class="high_lights_titleC">
							<h2>卫诗理成都体验馆</h2>
							<h2>六大专属亮点</h2>
						</div>
						<div class="high_lights_titleE">
							<p>Olivelife</p>
						</div>
					</div>
					<div class="high_lights">
						<ul>
							<li class="high_lights_list">
								<div class="high_lights_list_num">01</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">欧奢软装</p>
									<p class="high_lights_list_titleE">European luxury soft outfit</p>
								</div>
								<div class="high_lights_list_desc">纯真欧美软装搭配，回溯一个时代的繁华</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-bt/high_lights_list_img1.png" alt="欧奢软装">
								</div>
							</li>
							<li class="high_lights_list">
								<div class="high_lights_list_num">02</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">生态绿植</p>
									<p class="high_lights_list_titleE">Ecological green plant</p>
								</div>
								<div class="high_lights_list_desc">纯粹生态，自然礼遇，缔造都市里的绿野仙踪</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-bt/high_lights_list_img2.png" alt="生态绿植">
								</div>
							</li>
							<li class="high_lights_list">
								<div class="high_lights_list_num">03</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">安神香薰</p>
									<p class="high_lights_list_titleE">Nerves aromatherapy</p>
								</div>
								<div class="high_lights_list_desc">法国南部香水之都格拉斯特配香薰</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-bt/high_lights_list_img3.png" alt="安神香薰">
								</div>
							</li>
							<li class="high_lights_list">
								<div class="high_lights_list_num">04</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">特配餐饮</p>
									<p class="high_lights_list_titleE">Especially with the dining</p>
								</div>
								<div class="high_lights_list_desc">舌尖上的包头，蒙古包的美食</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-bt/high_lights_list_img4.png" alt="欧奢软装">
								</div>
							</li>
							<li class="high_lights_list">
								<div class="high_lights_list_num">05</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">免费接送</p>
									<p class="high_lights_list_titleE">Free Shuttle</p>
								</div>
								<div class="high_lights_list_desc">在线预约，尊享高铁站、机场专人专车服务</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-bt/high_lights_list_img5.png" alt="免费接送">
								</div>
							</li>
							<li class="high_lights_list">
								<div class="high_lights_list_num">06</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">精致伴手礼</p>
									<p class="high_lights_list_titleE">Set fine</p>
								</div>
								<div class="high_lights_list_desc">为每一位卫诗理尊贵客户准备的专属伴手礼</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-bt/high_lights_list_img6.png" alt="精致伴手礼">
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- High Lights end -->
			 
			<!-- Bao Tou Map start -->
			<div id="place_map_wrap">
				<div class="place_map_box">
					<div id="place_map">
						<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=MDdqxkqhQzfdBzfu2tfGiidGbHgTfGrB"></script>
						<BMap :longitude="longitude" :latitude="latitude" :title="title" :description="description"></BMap>
					</div>
				</div>
			</div>
			<!-- Bao Tou Map end -->
			
			<!-- Place Address start -->
			<div id="place_address_wrap">
				<div class="place_address_box">
					<div class="place_address_details">
						<h3>体验店地址：</h3>
						<p>成都市武侯区首信红星国际广场1号楼卫诗理家具旗舰店</p>
						<p>距离双流机场8公里，驾车需17分钟</p>
						<p>距离火车站成都站20公里，驾车需38分钟，距离火车站成都东站21公里，驾车需40分钟</p>
					</div>
					<div class="place_address_phone">
						<div class="place_address_phone1">
							<p>线下招商热线：</p>
							<h3>400 900 6267</h3>
						</div>
						<div class="place_address_phone1">
							<p>预约电话（李姐 Lecoo）</p>
							<h3>15884588477</h3>
						</div>
					</div>
					<div class="place_address_contact">
						<p>为了保证您参观的尊贵体验，来时请提前预约</p>
						<div class="place_address_contact_num">
							<h3>02885007888</h3>
						</div>
					</div>
				</div>
			</div>
			<!-- Place Address start -->
	</section>
</template>

<script>
	import axios from 'axios'
	import BMap from '~/components/experice/BMap.vue'
	import expericeBanner from '~/components/experice/expericeBanner'
	import expericePlaceDesc from '~/components/experice/expericePlaceDesc'

	import expericeVideo from '~/components/experice/expericeVideo.vue'
	import lineService from '~/components/experice/lineService.vue'

	export default {
		data (){
			return {
				bannerSrc:'http://img.visney.cn/img/nuxtPc/experice-cd/banner.jpg',
				placeDescData: {
					placeDescTitle: '成都',
					placeDescTitleE: 'Cheng Du',
					placeDesc: '成都，四川省省会，简称“蓉”。是四川省的政治、经济和文化中心，素有“天府之国”“美食之都”的美誉',
					placeDescEn: [
						'Chengdu, the capital of Sichuan Province, is referred to as "Rong".',
						'It is the political, economic and cultural center of Sichuan province.',
						'Known as "the land of abundance" and "the capital of food".'
					],
					placeDescImgSrc: [
						'http://img.visney.cn/img/nuxtPc/experice-cd/place_desc_right1.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/place_desc_right2.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/place_desc_right3.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/place_desc_right4.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/place_desc_right5.png',
					],
					placeDescImgName: ['峨眉山','九寨沟','稻城亚丁','蜀绣','金沙遗址']
				},
				longitude: 103.9864779602,
				latitude: 30.6127248839,
				title: '成都体验店',
				description: '地址：成都市武侯区首信红星国际广场1号楼卫诗理家具旗舰店',
			}
		},
		components: {
			expericeBanner,
			expericePlaceDesc,
			BMap,
			expericeVideo,
			lineService
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
		    let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/21`);
		  return {
		    metaData: metaData.data,
		  } 
		}
	}
</script>

<style scoped>

	/* Place people description satrt */
		div#place_people_desc_wrap {
		    width:  100%;
		    background: #f9f9fa;
		}

		.place_people_desc_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding: 150px 0 145px;
		}

		.place_people_desc_left {
		    float:  left;
		    overflow:  hidden;
		    width:  446px;
		    height: auto;
		}

		.place_people_desc_left_img {
		    overflow:  hidden;
		    width:  100%;
		    height: 678px;
		}

		.place_people_desc_left_img img {
		    width:  100%;
		    height:  100%;
		}

		.place_people_name {
		    overflow:  hidden;
		    width:  100%;
		    height:  104px;
		    margin-top:  18px;
		    color: #22202b;
		    font-size:  42px;
		    font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
		    line-height:  104px;
		    text-align:  left;
		}

		.place_people_desc {
		    width:  100%;
		}

		.place_people_descC {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  22px;
		    text-align:  left;
		}

		.place_people_descE {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding-top:  8px;
		    color:  #d6d6d6;
		    font-size:  12px;
		    line-height:  18px;
		    text-align:  left;
		}

		.place_people_desc_right {
		    float:  right;
		    overflow:  hidden;
		    width: 700px;
		    text-align:  right;
		}

		.place_people_desc_right_img {
		    overflow:  hidden;
		    width:  700px;
		    height:  677px;
		}

		.place_people_desc_right_title {
		    display: inline-block;
		    width: 230px;
		    padding: 43px 0 44px;
		    border-bottom: 2px solid #d5d5d8;
		}

		p.place_people_desc_right_titleE {
		    width:  100%;
		    height:  50px;
		    color:  #22202b;
		    font-size:  42px;
		    font-weight:  bold;
		    line-height:  50px;
		    text-align:  right;
		}

		p.place_people_desc_right_titleC {
		    width: 100%;
		    height: 26px;
		    padding-left: 25px;
		    color: #858585;
		    font-size: 14px;
		    line-height: 26px;
		    text-align: left;
		    box-sizing: border-box;
		}
	/* Place people description end */

	/*Panoramic hall start*/
		div#panoramic_hall_wrap {
		    width:  100%;
		    background: #f9f9fa;
		}

		.panoramic_hall_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding: 150px 0 155px;
		}

		.panoramic_hall_title_box {
		    width:  100%;
		    padding-bottom: 115px;
		    text-align:  center;
		}

		.panoramic_hall_titleC {
		    overflow: hidden;
		    width: 100%;
		    height: 91px;
		}

		.panoramic_hall_titleC h2 {
			font-size:  40px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 46px;
		}

		.panoramic_hall_titleE {
		    overflow: hidden;
		    width: 100%;
		    height: 34px;
		    color: #858585;
		    font-size: 14px;
		    line-height: 34px;
		    text-align: center;
		}

		.panoramic_hall_title_desc {
		    overflow: hidden;
		    width: 100%;
		    height: 68px;
		    color: #d6d6d6;
		    font-size: 14px;
		    line-height: 68px;
		    text-align: center;
		}

		.panoramic_hall {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		}

		.panoramic_hall ul {
		    overflow:  hidden;
		    width:  100%;
		}

		li.panoramic_hall_list_cd {
		    float:  left;
		    overflow:  hidden;
		    width: 525px;
		    margin-left: 150px;
		}

		.panoramic_hall ul li:first-child {
		    margin-left: 0px;
		}

		.panoramic_hall_list_img {
		    overflow:  hidden;
		    width:  100%;
		    height:  570px;
		}

		.panoramic_hall_list_intro_box {
		    overflow:  hidden;
		    width:  100%;
		    height:  314px;
		    padding-top:  74px;
		    box-sizing:  border-box;
		}

		.panoramic_hall_list_title {
		    width:  100%;
		    height:  30px;
		    color:  #22202b;
		    font-size:  18px;
		    font-weight:  bold;
		    line-height:  30px;
		    text-align:  left;
		}

		.panoramic_hall_list_introC {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding:  23px 0 32px;
		    color:  #858585;
		    font-size: 14px;
		    line-height: 18px;
		    text-align:  left;
		}

		.panoramic_hall_list_introE {
		    overflow:  hidden;
		    width:  100%;
		    color:  #cccccc;
		    font-size:  12px;
		    line-height:  15px;
		    text-align:  left;
		}
	/*Panoramic hall end*/

	/*Native Level start*/
		div#native_level_wrap {
		    width:  100%;
		}

		.native_level_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding-top:  150px;
		}

		.native_level_title_box {
		    overflow:  hidden;
		    width:  100%;
		    padding-bottom: 60px;
		}

		.native_level_title_left {
		    float:  left;
		    width: 350px;
		}

		.native_level_title_line {
		    float:  left;
		    width:  540px;
		    height:  2px;
		    margin: 44px 50px 0;
		    background:  #d5d5d8;
		}

		.native_level_titleC {
		    overflow:  hidden;
		    width:  100%;
		    height: 42px;
		}

		.native_level_titleC h2 {
			font-size:  40px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 42px;
		}

		.native_level_title_desc {
		    width:  100%;
		    height:  auto;
		    padding-top:  18px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align:  left;
		}

		.native_level_title_right {
		    float:  right;
		    margin-top: 30px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align:  right;
		}

		.native_level_show {
		    width:  100%;
		}

		.native_level_show ul {
		    overflow:  hidden;
		}

		li.native_level_list {
		    float:  left;
		    overflow:  hidden;
		    width:  445px;
		    height: 244px;
		    margin-top: 12px;
		    margin-left: 12px;
		}

		.native_level_show ul li:first-child {
		    width:  743px;
		    height:  756px;
		    margin-left: 0;
		}
	/*Native Level end*/

	/*Elegant Style start*/
		div#elegant_style_wrap {
		    width:  100%;
		}

		.elegant_style_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding-top:  150px;
		}

		.elegant_style_title_box {
		    overflow:  hidden;
		    width:  100%;
		    padding-bottom: 60px;
		}

		.elegant_style_title_left {
		    float: right;
		    width: 350px;
		}

		.elegant_style_title_line {
		    float: right;
		    width:  540px;
		    height:  2px;
		    margin: 44px 50px 0;
		    background:  #d5d5d8;
		}

		.elegant_style_titleC {
		    overflow:  hidden;
		    width:  100%;
		    height: 42px;
		}

		.elegant_style_titleC h2 {
			font-size:  40px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 42px;
			text-align: right
		}

		.elegant_style_title_desc {
		    width:  100%;
		    height:  auto;
		    padding-top:  18px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align: right;
		}

		.elegant_style_title_right {
		    float: left;
		    margin-top: 30px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align: left;
		}

		.elegant_style_show {
		    width:  100%;
		}

		.elegant_style_show ul {
		    overflow:  hidden;
		}

		li.elegant_style_list {
		    float: right;
		    overflow:  hidden;
		    width:  445px;
		    height: 244px;
		    margin-top: 12px;
		    margin-right: 12px;
		}

		.elegant_style_show ul li:first-child {
		    width:  743px;
		    height:  756px;
		    margin-right: 0;
		}
	/*Elegant Style end*/

	/*Chinese Style start*/
		div#chinese_style_wrap {
		    width:  100%;
		}

		.chinese_style_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding-top:  150px;
		}

		.chinese_style_title_box {
		    overflow:  hidden;
		    width:  100%;
		    padding-bottom: 60px;
		}

		.chinese_style_title_left {
		    float:  left;
		    width: 350px;
		}

		.chinese_style_title_line {
		    float:  left;
		    width:  540px;
		    height:  2px;
		    margin: 44px 50px 0;
		    background:  #d5d5d8;
		}

		.chinese_style_titleC {
		    overflow:  hidden;
		    width:  100%;
		    height: 41px;
		}

		.chinese_style_titleC h2 {
			font-size:  40px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 42px;
		}

		.chinese_style_title_desc {
		    width:  100%;
		    height:  auto;
		    padding-top:  18px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align:  left;
		}

		.chinese_style_title_right {
		    float:  right;
		    margin-top: 30px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align:  right;
		}

		.chinese_style_show {
		    width:  100%;
		}

		.chinese_style_show ul {
		    overflow:  hidden;
		}

		li.chinese_style_list {
		    float:  left;
		    overflow:  hidden;
		    width:  445px;
		    height: 244px;
		    margin-top: 12px;
		    margin-left: 12px;
		}

		.chinese_style_show ul li:first-child {
		    width:  743px;
		    height:  756px;
		    margin-left: 0;
		}

	/*Chinese Style end*/

	/*Natural Style start*/
		div#natural_style_wrap {
		    width:  100%;
		}

		.natural_style_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding-top:  150px;
		}

		.natural_style_title_box {
		    overflow:  hidden;
		    width:  100%;
		    padding-bottom: 60px;
		}

		.natural_style_title_left {
		    float: right;
		    width: 350px;
		}

		.natural_style_title_line {
		    float: right;
		    width:  540px;
		    height:  2px;
		    margin: 44px 50px 0;
		    background:  #d5d5d8;
		}

		.natural_style_titleC {
		    overflow:  hidden;
		    width:  100%;
		    height: 41px;
		    text-align: right;
		}

		.natural_style_titleC h2 {
			font-size:  40px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 42px;
			text-align: right
		}

		.natural_style_title_desc {
		    width:  100%;
		    height:  auto;
		    padding-top:  18px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align: right;
		}

		.natural_style_title_right {
		    float: left;
		    margin-top: 30px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align: left;
		}

		.natural_style_show {
		    width:  100%;
		}

		.natural_style_show ul {
		    overflow:  hidden;
		}

		li.natural_style_list {
		    float: right;
		    overflow:  hidden;
		    width:  445px;
		    height: 244px;
		    margin-top: 12px;
		    margin-right: 12px;
		}

		.natural_style_show ul li:first-child {
		    width:  743px;
		    height:  756px;
		    margin-right: 0;
		}

		.natural_style_more {
		    overflow:  hidden;
		    width:  100%;
		    height:  250px;
		    color: #22202b;
		    font-size:  24px;
		    font-weight:  bold;
		    line-height: 170px;
		    text-align:  center;
		}
	/*Natural Style end*/

	/*High Lights start*/
		div#high_lights_wrap {
		    width:  100%;
		    background:  #fff;
		}

		.high_lights_box {
		    overflow:  hidden;
		    width:  1200px;
		    margin:  0 auto;
		    padding: 150px 0;
		}

		.high_lights_title_box {
		    width:  100%;
		    padding-bottom: 67px;
		    text-align:  center;
		}

		.high_lights_titleC {
		    overflow:  hidden;
		    height:  92px;
		}

		.high_lights_titleC h2 {
			font-size:  42px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 46px;
		}

		.high_lights_titleE {
		    overflow:  hidden;
		    width:  100%;
		    height:  28px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  28px;
		    text-align:  center;
		}

		.high_lights {
		    width:  100%;
		}

		.high_lights ul {
		    overflow:  hidden;
		}

		li.high_lights_list {
		    float:  left;
		    overflow:  hidden;
		    width: 400px;
		    height:  660px;
		    padding-top: 86px;
		    text-align:  center;
		    box-sizing:  border-box;
		}

		.high_lights_list_num {
		    overflow:  hidden;
		    width:  100%;
		    height:  80px;
		    color:  #22202b;
		    font-size:  60px;
		    font-weight: bold;
		    line-height:  80px;
		    text-align:  center;
		}

		.high_lights_list_title {
		    width:  100%;
		}

		p.high_lights_list_titleC {
		    overflow:  hidden;
		    width:  100%;
		    height:  30px;
		    color:  #22202b;
		    font-size:  22px;
		    font-weight:  bold;
		    line-height:  30px;
		    text-align:  center;
		}

		p.high_lights_list_titleE {
		    overflow: hidden;
		    width: 100%;
		    height: 20px;
		    color: #858585;
		    font-size: 12px;
		    line-height: 20px;
		    text-align: center;
		}

		.high_lights_list_desc {
		    overflow: hidden;
		    width: 100%;
		    height: 44px;
		    color: #858585;
		    font-size: 14px;
		    line-height: 44px;
		    text-align: center;
		}

		.high_lights_list_img {
		    overflow:  hidden;
		    width:  100%;
		    height:  350px;
		    margin-top: 50px;
		}

		.high_lights_list_img img {
		    width:  100%;
		    height:  100%;
		}
	/*High Lights end*/

	/* Bao Tou Map start */
		#place_map_wrap {
		  width: 100%;
		}
		.place_map_box {
		  overflow: hidden;
		  width: 100%;
		  height: 600px;
		  margin: 0 auto;
		}

		div#place_map {
			overflow: hidden;
		    width:  100%;
		    height:  100%;
		}

	/* Bao Tou Map end */

	/*Place Address start*/
		div#place_address_wrap {
		    width:  100%;
		    background:  #f9f9fa;
		}

		.place_address_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding: 140px 0 210px;
		}

		.place_address_details {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    text-align:  center;
		}

		.place_address_box p {
		    overflow:  hidden;
		    width:  100%;
		    height:  24px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  24px;
		    text-align:  center;
		}

		.place_address_details h3 {
		    overflow:  hidden;
		    width: 100%;
		    height: 40px;
		    color:  #25232d;
		    font-size:  24px;
		    font-weight:  bold;
		    line-height: 40px;
		    text-align:  center;
		}

		.place_address_phone {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding: 60px 0 67px;
		    text-align:  center;
		}

		.place_address_phone1 {
		    display:  inline-block;
		    width:  300px;
		    height:  auto;
		}

		.place_address_phone1 h3 {
		    overflow: hidden;
		    width: 100%;
		    height: 40px;
		    color: #25232d;
		    font-size: 24px;
		    font-weight: bold;
		    line-height: 40px;
		    text-align: center;
		}

		.place_address_contact {
		    overflow:  hidden;
		    width:  100%;
		}

		.place_address_contact_num {
		    overflow:  hidden;
		    text-align:  center;
		}

		.place_address_contact_num h3 {
		    display: inline-block;
		    overflow: hidden;
		    height: 40px;
		    color: #25232d;
		    font-size: 24px;
		    font-weight: bold;
		    line-height: 40px;
		    text-align: center;
		}

		.place_address_contact_num p {
		    display:  inline-block;
		    width:  auto;
		    height:  40px;
		    line-height: 40px;
		}
	/*Place Address end*/

</style>