<template>
	<section class="container">
			<!-- 轮播图部分开始 -->
			<div id="common-banner">
				<div class="common-banner-container">
					<div class="common-banner-img">
						<img src="~/assets/images/experice-nj/banner.png">
					</div>
				</div>
			</div>
			<!-- 轮播图部分结束 -->
			
			<!-- Place description satrt -->
			<div id="place_desc_wrap">
				<div class="place_desc_box clearfix">
					<div class="place_desc_left">
						<div class="place_title_box">
							<p class="place_titleC">南京</p>
							<p class="place_titleE">Nan Jing</p>
						</div>
						<div class="place_desc">
							<p class="place_descC">南京，又称金陵、建康，是中国东部地区重要的中心城市。作为中华文明的重要发祥地，这座历史文化名城，如今已成为中国南方的政治，经济、文化之中心。</p>
						</div>
						<div class="place_descE">
								<p>Nanjing, also known as Jinling and Jian Kang, </p>
		 						<p>is an important central city in eastern China.</p>
		 						<p>As an important birthplace of Chinese civilization, </p>
		 						<p> this famous historical and cultural city,</p>
		 						<p>Today, it has become the political, </p>
		 						<p>economic and cultural center of southern China</p>
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
								<img src="~/assets/images/experice-nj/place_desc_right1.png" alt="">
							</li>
							<li class="place_desc_img" v-show="1 == num">
								<img src="~/assets/images/experice-nj/place_desc_right2.png" alt="">
							</li>
							<li class="place_desc_img" v-show="2 == num">
								<img src="~/assets/images/experice-nj/place_desc_right3.png" alt="">
							</li>
							<li class="place_desc_img" v-show="3 == num">
								<img src="~/assets/images/experice-nj/place_desc_right4.png" alt="">
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
								<p>"九层之台，起于垒土。在时代大变革下，卫诗理正进行着它的新征程"</p>
							</div>
							<div class="place_people_descE">
								<p>Nine layers of Tai, on home soil In the era of big changes, who poetry is in its new journey...</p> 
							</div>
						</div>
					</div>
					<div class="place_people_desc_right">
						<div class="place_people_desc_right_img">
							<img src="~/assets/images/experice-nj/place_people_desc_right_img.png" alt="">
						</div>
						<div class="place_people_desc_right_title">
							<p class="place_people_desc_right_titleE">NAN JING</p>
							<p class="place_people_desc_right_titleC">南京“卫共”店</p>
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
							<h2>南京“卫共”店</h2>
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
									<img src="~/assets/images/experice-bt/panoramic_hall_list_img1.png" alt="">
								</div>
								<div class="panoramic_hall_list_intro_box">
									<div class="panoramic_hall_list_title">
										<p>名师团队 倾力之作</p>
									</div>
									<div class="panoramic_hall_list_introC">
										<p>卫诗理南京店由国内新锐空间美学家</p>
										<p>蚂蚁嘿设计公司资深空间设计师</p>
										<p>Presley先 生和Lavinia女士，</p>
										<p>组建实力团队耗时3个月打造完成。</p>
									</div>
									<div class="panoramic_hall_list_introE">
										<p>Online and offline service, 2688 regions, siex packs</p>
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
									<img src="~/assets/images/experice-nj/panoramic_hall_list_img2.png" alt="">
								</div>
							</li>
							<li class="panoramic_hall_list">
								<div class="panoramic_hall_list_img">
									<img src="~/assets/images/experice-nj/panoramic_hall_list_img3.png" alt="">
								</div>
								<div class="panoramic_hall_list_intro_box">
									<div class="panoramic_hall_list_title">
										<p>十六大空间设计，</p>
										<p>还原纯正欧美贵族文化</p>
									</div>
									<div class="panoramic_hall_list_introC">
										<p>金店陈列九大系列，海量臻品，风格涵盖大美、小美、简美、意式、法式、英式、新中式等... </p>
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
								<h2>自然生态</h2>
								<h2>温馨简美</h2>
							</div>
							<div class="native_level_title_desc">
								<p>用心品味，温暖总在不经意间流露，</p>
								<p>浪漫与优雅，在这里留下时间的痕迹。</p>
							</div>
						</div>
						<div class="native_level_title_line"></div>
						<div class="native_level_title_right">
							<p class="native_level_titleE">Natural Ecology</p>
						</div>
					</div>
					<div class="native_level_show">
						<ul>
							<li class="native_level_list">
								<img src="~/assets/images/experice-nj/native_level_list1.png" alt="">
							</li>
							<li class="native_level_list">
								<img src="~/assets/images/experice-nj/native_level_list2.png" alt="">
							</li>
							<li class="native_level_list">
								<img src="~/assets/images/experice-nj/native_level_list3.png" alt="">
							</li>
							<li class="native_level_list">
								<img src="~/assets/images/experice-nj/native_level_list4.png" alt="">
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
								<h2>纯正欧式</h2>
								<h2>一墅繁华</h2>
							</div>
							<div class="elegant_style_title_desc">
								<p>梦幻的色彩，华美的装饰，</p>
								<p>精致的造型，欧式高贵典雅的格调尽显。</p>
							</div>
						</div>
						<div class="elegant_style_title_line"></div>
						<div class="elegant_style_title_right">
							<p class="elegant_style_titleE">Pure European</p>
						</div>
					</div>
					<div class="elegant_style_show">
						<ul>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-nj/elegant_style_list1.png" alt="">
							</li>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-nj/elegant_style_list2.png" alt="">
							</li>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-nj/elegant_style_list3.png" alt="">
							</li>
							<li class="elegant_style_list">
								<img src="~/assets/images/experice-nj/elegant_style_list4.png" alt="">
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
								<h2>新中式</h2>
								<h2>心中势</h2>
							</div>
							<div class="chinese_style_title_desc">
								<p>于传统美学规范之下，</p>
								<p>赋予古典中式家具新的生命力 </p>
								<p>打破现实世界的樊篱，直面内心的那份静谧。</p>
								<p>融古典，辟新境。。</p>
							</div>
						</div>
						<div class="chinese_style_title_line"></div>
						<div class="chinese_style_title_right">
							<p class="chinese_style_titleE">NEO-Chinese style</p>
						</div>
					</div>
					<div class="chinese_style_show">
						<ul>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-nj/chinese_style_list1.png" alt="">
							</li>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-nj/chinese_style_list2.png" alt="">
							</li>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-nj/chinese_style_list3.png" alt="">
							</li>
							<li class="chinese_style_list">
								<img src="~/assets/images/experice-nj/chinese_style_list4.png" alt="">
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
								<h2>经典大美</h2>
								<h2>时尚韵味</h2>
							</div>
							<div class="natural_style_title_desc">
								<p>岁月静好中，幸福寂静流淌，</p>
								<p>深邃沉静中，时尚之韵来袭。</p>
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
								<img src="~/assets/images/experice-nj/natural_style_list1.png" alt="">
							</li>
							<li class="natural_style_list">
								<img src="~/assets/images/experice-nj/natural_style_list2.png" alt="">
							</li>
							<li class="natural_style_list">
								<img src="~/assets/images/experice-nj/natural_style_list3.png" alt="">
							</li>
							<li class="natural_style_list">
								<img src="~/assets/images/experice-nj/natural_style_list4.png" alt="">
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
							<h2>卫诗理南京“卫共”店</h2>
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
									<p class="high_lights_list_titleC">匠心设计</p>
									<p class="high_lights_list_titleE">European style curtains</p>
								</div>
								<div class="high_lights_list_desc">奢华热带雨淋设计书写生活的诗意</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-nj/high_lights_list_img1.png" alt="匠心设计">
								</div>
							</li>
							<li class="high_lights_list">
								<div class="high_lights_list_num">02</div>
								<div class="high_lights_list_title">
									<p class="high_lights_list_titleC">0元飞线下</p>
									<p class="high_lights_list_titleE">Free ticket</p>
								</div>
								<div class="high_lights_list_desc">报销单人往返机票或高铁票（订单总额满20W）</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-nj/high_lights_list_img2.png" alt="0元飞线下">
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
									<p class="high_lights_list_titleE">Free meals</p>
								</div>
								<div class="high_lights_list_desc">大厨掌勺烹饪南京特色美味菜肴</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-nj/high_lights_list_img4.png" alt="免费餐饮">
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
									<p class="high_lights_list_titleC">专属伴手礼</p>
									<p class="high_lights_list_titleE">Gift</p>
								</div>
								<div class="high_lights_list_desc">专属定制伴手礼献给尊贵来宾</div>
								<div class="high_lights_list_img">
									<img src="~/assets/images/experice-nj/high_lights_list_img6.png" alt="专属伴手礼">
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
						<p>南京市建邺区水西门大街285号289号万达金街东区  距离南京禄口国际机场40公里，大约车程30分钟，</p>
						<p>距离南京南站（火车/高铁）10公里，大约车程为10分钟</p>
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
							<h3>18686152121</h3><p>(叶总) </p><h3>025-52458886</h3><h3>025-85331879</h3>
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
				longitude: 118.751323,
				latitude: 32.039674,
				title: '南京体验店',
				description: '地址：南京市建邺区水西门大街285号289号万达金街东区',
				placeList: ['南京映像','云锦','雨花茶','盐水鸭'],
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
		    let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/22`);
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
		    top: 86px;
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

		.place_desc_img {
		    overflow: hidden;
		    width: 520px;
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
		    width: 220px;
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

	/*Line Service start*/
		div#line_service_wrap {
		    width:  100%;
		}

		.line_service_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding: 150px 0;
		}

		.line_service_title_box {
		    width:  100%;
		    text-align:  center;
		}

		.line_service_titleC {
		    overflow:  hidden;
		    width:  100%;
		    height:  91px;
		}

		.line_service_titleE {
		    overflow:  hidden;
		    width:  100%;
		    height:  34px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  34px;
		    text-align:  center;
		}

		.line_service_mid_box {
		    width:  100%;
		    height:  auto;
		    padding:  85px 0 80px;
		    text-align:  center;
		}

		.line_service_mid_img {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		}

		.line_service_mid_desc {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding-top: 80px;
		}

		p.line_service_mid_descC {
		    color:  #858585;
		    font-size:  18px;
		    line-height:  24px;
		    text-align:  center;
		}

		p.line_service_mid_descE {
		    color:  #d6d6d6;
		    font-size:  14px;
		    line-height:  34px;
		    text-align:  center;
		}

		.line_service_process {
		    overflow:  hidden;
		    width:  100%;
		}

		.line_service_process ul {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    text-align:  center;
		}

		li.line_service_process_list {
		    display:  inline-block;
		    width:  72px;
		    height:  auto;
		    margin:  0 35px;
		}

		.line_service_process_list_img {
		    width:  100%;
		    height:  auto;
		    text-align:  center;
		}

		.line_service_process_list {
		    overflow:  hidden;
		    width:  100%;
		    height:  30px;
		    color: #858585;
		    font-size:  14px;
		    line-height:  30px;
		    text-align:  center;
		}

		.line_service_bottom {
		    width:  100%;
		    padding-top:  90px;
		}

		p.line_service_bottomC {
			color:  #858585;
			font-size: 18px;
			line-height:  26px;
			text-align:  center;
		}

		p.line_service_bottomE {
		    color:  #d6d6d6;
		    font-size:  14px;
		    line-height:  20px;
		    text-align:  center;
		}
	/*Line Service end*/

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
		    padding-right: 50px;
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

		.panoramic_hall ul li:last-child .panoramic_hall_list_title {
		    height: 60px;
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
		    margin: 70px 50px 0;
		    background:  #d5d5d8;
		}

		.native_level_titleC {
		    overflow:  hidden;
		    width:  100%;
		    height: 84px;
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
		    margin-top: 60px;
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
		    margin: 70px 50px 0;
		    background:  #d5d5d8;
		}

		.elegant_style_titleC {
		    overflow:  hidden;
		    width:  100%;
		    text-align: right;
		}

		.elegant_style_titleC h2 {
			font-size:  40px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 42px;
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
		    margin-top: 60px;
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
		    margin: 70px 50px 0;
		    background:  #d5d5d8;
		}

		.chinese_style_titleC {
		    overflow:  hidden;
		    width:  100%;
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
		    margin-top: 60px;
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
		    margin: 70px 50px 0;
		    background:  #d5d5d8;
		}

		.natural_style_titleC {
		    overflow:  hidden;
		    width:  100%;
		    text-align: right;
		}

		.natural_style_titleC h2 {
			font-size:  40px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 42px;
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
		    margin-top: 60px;
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
		    height:  174px;
		    color: #22202b;
		    font-size:  24px;
		    font-weight:  bold;
		    line-height: 174px;
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
		    margin-left: 20px;
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