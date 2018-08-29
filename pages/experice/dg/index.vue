<template>
	<section class="container">
			<!-- 轮播图部分开始 -->
			<div id="common-banner">
				<div class="common-banner-container">
					<div class="common-banner-img">
						<img src="~/assets/images/experice-dg/banner.png">
					</div>
				</div>
			</div>
			<!-- 轮播图部分结束 -->
			
			<!-- Place description satrt -->
			<div id="place_desc_wrap">
				<div class="place_desc_box clearfix">
					<div class="place_desc_left">
						<div class="place_title_box">
							<p class="place_titleC">东莞</p>
							<p class="place_titleE">Dong Guan</p>
						</div>
						<div class="place_desc">
							<p class="place_descC">又称“莞城“，位于珠江口东岸，广东四小虎之首。也号称“世界工厂”国际花园城市，全国文明城市广东重要的交通枢纽和外贸口岸，经济交通十分发达，更是全国4个不设县的地级市之一。</p>
						</div>
						<div class="place_descE">
								<p>Also known as "Guancheng",  </p>
		 						<p>located on the east coast of the Pearl River Estuary, </p>
		 						<p>the first of four tigers in Guangdong. It is also known as the "world factory"</p>
		 						<p> The International Garden City, the national civilized city,</p>
		 						<p>Guangdong's important transport hub and foreign trade port.</p>
							</div>
						<div class="place_tag_box">
							<ul>
								<li class="place_tag_list" v-for="(item,index) in placeList" :key="index" :class="{active:index == num}" @click="tabPlace(index)">{{item}}</li>
							</ul>
						</div>
					</div>
					<div class="place_desc_right">
						<ul>
							<li class="place_desc_img" v-show="0 == num">
								<img src="~/assets/images/experice-dg/place_desc_right1.png" alt="">
							</li>
							<li class="place_desc_img" v-show="1 == num">
								<img src="~/assets/images/experice-dg/place_desc_right2.png" alt="">
							</li>
							<li class="place_desc_img" v-show="2 == num">
								<img src="~/assets/images/experice-dg/place_desc_right3.png" alt="">
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- Place description end -->

			<!-- Place people description satrt -->
			<div id="place_people_desc_wrap">
				<div class="place_people_desc_box clearfix">
					<div class="place_people_desc_left">
						<div class="place_people_desc_left_img">
							<img src="~/assets/images/experice-bt/place_people_desc_left_img.png" alt="">
						</div>
						<div class="place_people_name"><p>田肯 KEN</p></div>
						<div class="place_people_desc">
							<div class="place_people_descC">
								<p>肯创集团董事长、VISNEY品牌创始人</p>
								<p>“以解决客户痛点为本源的商业模式，才能真正走的长远”</p>
							</div>
							<div class="place_people_descE">
								<p>In order to solve the customer pain points as source of business </p> 
								<p>model, and can truly go long term. </p>
							</div>
						</div>
					</div>
					<div class="place_people_desc_right">
						<div class="place_people_desc_right_img">
							<img src="~/assets/images/experice-dg/place_people_desc_right_img.png" alt="">
						</div>
						<div class="place_people_desc_right_title">
							<p class="place_people_desc_right_titleE">DONG GUAN</p>
							<p class="place_people_desc_right_titleC">东莞卫诗理体验馆</p>
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
							<h2>东莞体验馆</h2>
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
							<li class="panoramic_hall_list">
								<div class="panoramic_hall_list_img">
									<img src="~/assets/images/experice-dg/panoramic_hall_list_img1.png" alt="">
								</div>
								<div class="panoramic_hall_list_intro_box">
									<div class="panoramic_hall_list_title">
										<p>纯正欧美风，匠心设计</p>
									</div>
									<div class="panoramic_hall_list_introC">
										<p>国内新锐空间美学设计团队蚂蚁嘿设计倾力打造，历时半年打造奢雅纯正欧美风格墅级佳地。</p>
									</div>
									<div class="panoramic_hall_list_introE">
										<p>The new space aesthetic design team design to build the ant hey...</p>
									</div>
								</div>
							</li>
							<li class="panoramic_hall_list">
								<div class="panoramic_hall_list_intro_box">
									<div class="panoramic_hall_list_title">
										<p>生态生活，有温度的创造</p>
									</div>
									<div class="panoramic_hall_list_introC">
										<p>大到空间布局家具陈列，小到一草一木装饰摆放，淋漓尽致地将自然生态与生活美学完美融合</p>
									</div>
									<div class="panoramic_hall_list_introE">
										<p>The space layout of fumiture,small to every tree and Bush...</p>
									</div>
								</div>
								<div class="panoramic_hall_list_img">
									<img src="~/assets/images/experice-dg/panoramic_hall_list_img2.png" alt="">
								</div>
							</li>
							<li class="panoramic_hall_list">
								<div class="panoramic_hall_list_img">
									<img src="~/assets/images/experice-dg/panoramic_hall_list_img3.png" alt="">
								</div>
								<div class="panoramic_hall_list_intro_box">
									<div class="panoramic_hall_list_title">
										<p>十六大风格，空间美学</p>
									</div>
									<div class="panoramic_hall_list_introC">
										<p>馆内陈列卫诗理九大精品系列家具，风格涵盖大美、小美、简美、英式、美式、法式、意式等各类家具，细细品味纯正欧美家具珍品。</p>
									</div>
									<div class="panoramic_hall_list_introE">
										<p>The poems on Chen nine boutique style fumiture series,covering the...</p>
									</div>
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
								<p>格列佛简美系列 杜兰戈简美系列 </p>
								<p>波兰特简美系列</p>
							</div>
						</div>
						<div class="native_level_title_line"></div>
						<div class="native_level_title_right">
							<p class="native_level_titleE">American</p>
						</div>
					</div>
					<div class="native_level_show">
						<ul>
							<li class="native_level_list">
								<img src="~/assets/images/experice-dg/native_level_list1.png" alt="">
							</li>
							<li class="native_level_list">
								<img src="~/assets/images/experice-dg/native_level_list2.png" alt="">
							</li>
							<li class="native_level_list">
								<img src="~/assets/images/experice-dg/native_level_list3.png" alt="">
							</li>
							<li class="native_level_list">
								<img src="~/assets/images/experice-dg/native_level_list4.png" alt="">
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
								<p>德国馆 凯撒皇宫奢华定制意式系列</p>
								<p>梵地亚欧式系列 赫莎</p>
							</div>
						</div>
						<div class="elegant_style_title_line"></div>
						<div class="elegant_style_title_right">
							<p class="elegant_style_titleE">Luxury</p>
						</div>
					</div>
					<div class="elegant_style_show">
						<ul>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-dg/elegant_style_list1.png" alt="">
							</li>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-dg/elegant_style_list2.png" alt="">
							</li>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-dg/elegant_style_list3.png" alt="">
							</li>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-dg/elegant_style_list4.png" alt="">
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
								<p>比利时馆 华兹华斯新古典系列 </p>
								<p>玛尔玛索美式系列 圣保罗美式系列</p>
							</div>
						</div>
						<div class="chinese_style_title_line"></div>
						<div class="chinese_style_title_right">
							<p class="chinese_style_titleE">Distinguished</p>
						</div>
					</div>
					<div class="chinese_style_show">
						<ul>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-dg/chinese_style_list1.png" alt="">
							</li>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-dg/chinese_style_list2.png" alt="">
							</li>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-dg/chinese_style_list3.png" alt="">
							</li>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-dg/chinese_style_list4.png" alt="">
							</li>
						</ul>
					</div>
					<div class="chinese_style_more">
						<p>更多系列，到店尊享</p>
					</div>
				</div>
			</div>
			<!-- Chinese Style end -->

			<!-- Dream Together start -->
			<expericeVideo></expericeVideo>
			<!-- Dream Together end -->
			
			<!-- High Lights start -->
			<div id="high_lights_wrap">
				<div class="high_lights_box">
					<div class="high_lights_title_box">
						<div class="high_lights_titleC">
							<h2>卫诗理东莞体验馆</h2>
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
									<p class="high_lights_list_titleC">欧式软装</p>
									<p class="high_lights_list_titleE">European style curtains</p>
								</div>
								<div class="high_lights_list_desc">纯正欧式软装设计打造复古时尚风</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-dg/high_lights_list_img1.png" alt="欧式软装">
								</div>
							</li>
							<li class="high_lights_list">
								<div class="high_lights_list_num">02</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">时装专区</p>
									<p class="high_lights_list_titleE">Fashion zone</p>
								</div>
								<div class="high_lights_list_desc">供选国际大牌高定时装，品味流行时尚</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-dg/high_lights_list_img2.png" alt="时装专区">
								</div>
							</li>
							<li class="high_lights_list">
								<div class="high_lights_list_num">03</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">特配香薰</p>
									<p class="high_lights_list_titleE">Special match</p>
								</div>
								<div class="high_lights_list_desc">法国南部香水之都格拉斯特配香薰</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-bt/high_lights_list_img3.png" alt="安神香薰">
								</div>
							</li>
							<li class="high_lights_list">
								<div class="high_lights_list_num">04</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">免费餐饮</p>
									<p class="high_lights_list_titleE">Especially with the dining</p>
								</div>
								<div class="high_lights_list_desc">粤菜泰斗大师传人黄学文掌勺烹饪美味菜肴</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-dg/high_lights_list_img4.png" alt="欧奢软装">
								</div>
							</li>
							<li class="high_lights_list">
								<div class="high_lights_list_num">05</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">茶香品茗</p>
									<p class="high_lights_list_titleE">Tea</p>
								</div>
								<div class="high_lights_list_desc">长寿乡水源烹煮，茶香扑鼻</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-dg/high_lights_list_img5.png" alt="免费接送">
								</div>
							</li>
							<li class="high_lights_list">
								<div class="high_lights_list_num">06</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">专属伴手礼</p>
									<p class="high_lights_list_titleE">Gift</p>
								</div>
								<div class="high_lights_list_desc">为每一位卫诗理客户专属定制伴手礼，献给尊贵的您</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-dg/high_lights_list_img6.png" alt="精致伴手礼">
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
						<p>东莞市厚街家具大道209号</p>
					</div>
					<div class="place_address_phone">
						<div class="place_address_phone1">
							<p>线下招商热线：</p>
							<h3>400 900 6267</h3>
						</div>
						<div class="place_address_phone1">
							<p>招商加盟联系人 PENNY</p>
							<h3>17302633888</h3>
						</div>
					</div>
					<div class="place_address_contact">
						<p>为了保证您参观的尊贵体验，来时请提前预约</p>
						<div class="place_address_contact_num">
							<h3>0796-82251668</h3>
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
	import expericeVideo from '~/components/experice/expericeVideo.vue'
	import lineService from '~/components/experice/lineService.vue'

	export default {
		data (){
			return {
				longitude: 113.639459,
				latitude: 22.914326,
				title: '东莞体验店',
				description: '地址：东莞市厚街家具大道209号',
				placeList: ['粤剧','舞狮','东莞咸面'],
				num: 0,
			}
		},
		components: {
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
		    let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/23`);
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
	/*Place description satrt*/
		div#place_desc_wrap {
		    width: 100%;
		    height:  auto;
		}

		.place_desc_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin: 0 auto;
		    padding: 150px 0;
		}

		.place_desc_left {
		    float:  left;
		    width:  475px;
		    height:  auto;
		}

		.place_title_box {
		    width:  100%;
		}

		p.place_titleC {
		    width:  100%;
		    height:  42px;
		    color:  #22202b;
		    font-size:  42px;
		    font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
		    line-height:  42px;
		    text-align:  left;
		}

		p.place_titleE {
		    width:  100%;
		    height:  30px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  30px;
		    text-align:  left;
		}

		.place_desc {
		    width:  100%;
		    padding:  28px 0 55px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  24px;
		    text-align:  left;
		}

		.place_descE {
		    overflow:  hidden;
		    width:  100%;
		    padding-bottom:  82px;
		    color:  #d6d6d6;
		    font-size:  12px;
		    line-height:  16px;
		    text-align:  left;
		}

		.place_tag_box {
		    position:  relative;
		    width:  100%;
		}

		li.place_tag_list {
		    overflow:  hidden;
		    width:  113px;
		    height:  40px;
		    margin-bottom:  27px;
		    border: 3px solid #000;
		    box-sizing:  border-box;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  34px;
		    text-align:  center;
		    cursor: pointer;
		    -webkit-transition: all 1s ease;
		    -o-transition: all 1s ease;
		    transition: all 1s ease;
		}

		.place_tag_list.active,.place_tag_list:hover{
		    color: #feeabd;
		    background: #000;
		}

		.place_tag_box::after {
		    position:  absolute;
		    top: 83px;
		    right: -75px;
		    content: "";
		    width:  340px;
		    height:  2px;
		    background:  #d5d5d8;
		    z-index: 22;
		}

		.place_desc_right {
		    float:  right;
		    overflow:  hidden;
		    width:  520px;
		    height: 684px;
		}

		.place_desc_right {
		    float:  right;
		    overflow:  hidden;
		    width:  520px;
		    height: 684px;
		}

		.place_desc_right img {
		    width:  100%;
		    height:  100%;
		}
	/*Place description satrt*/

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
		    width: 280px;
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

		li.panoramic_hall_list {
		    float:  left;
		    overflow:  hidden;
		    width: 300px;
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

		.chinese_style_more {
		    overflow:  hidden;
		    width:  100%;
		    height:  150px;
		    color: #22202b;
		    font-size:  24px;
		    font-weight:  bold;
		    line-height: 120px;
		    text-align:  center;
		}
	/*Chinese Style end*/

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