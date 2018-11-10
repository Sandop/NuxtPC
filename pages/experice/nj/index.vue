<template>
	<section class="container">
		<expericeBanner :bannerSrc="bannerSrc"></expericeBanner>
		<expericePlaceDesc :placeDescData="placeDescData"></expericePlaceDesc>
		<expericePeopleDesc :peopleDescData="peopleDescData"></expericePeopleDesc>
		<lineService></lineService>
		<expericePanoramic :PanoramicData="PanoramicData"></expericePanoramic>
		<expericeStyle :styleData="nativeStyleData"></expericeStyle>
		<expericeStyle :styleData="elegantStyleData"></expericeStyle>
		<expericeStyle :styleData="chineseStyleData"></expericeStyle>
		<expericeStyle :styleData="naturalStyleData"></expericeStyle>
		<expericeVideo></expericeVideo>
		
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
	import expericeBanner from '~/components/experice/expericeBanner'
	import expericePlaceDesc from '~/components/experice/expericePlaceDesc'
	import expericePeopleDesc from '~/components/experice/expericePeopleDesc'
	import expericePanoramic from '~/components/experice/expericePanoramic'
	import expericeStyle from '~/components/experice/expericeStyle'
	import expericeVideo from '~/components/experice/expericeVideo.vue'
	import lineService from '~/components/experice/lineService.vue'

	export default {
		data (){
			return {
				bannerSrc:'http://img.visney.cn/img/nuxtPc/experice-nj/banner.png',
				placeDescData: {
					placeDescTitle: '南京',
					placeDescTitleE: 'Nan Jing',
					placeDesc: '南京，又称金陵、建康，是中国东部地区重要的中心城市。作为中华文明的重要发祥地，这座历史文化名城，如今已成为中国南方的政治，经济、文化之中心。',
					placeDescEn: [
						'Nanjing, also known as Jinling and Jian Kang, ',
						'is an important central city in eastern China.',
						'As an important birthplace of Chinese civilization,',
						'this famous historical and cultural city,',
						'Today, it has become the political,',
						'economic and cultural center of southern China'
					],
					placeDescImgSrc: [
						'http://img.visney.cn/img/nuxtPc/experice-nj/place_desc_right1.png','http://img.visney.cn/img/nuxtPc/experice-nj/place_desc_right2.png','http://img.visney.cn/img/nuxtPc/experice-nj/place_desc_right3.png','http://img.visney.cn/img/nuxtPc/experice-nj/place_desc_right4.png'
					],
					placeDescImgName: ['南京映像','云锦','雨花茶','盐水鸭']
				},
				peopleDescData: {
					peopleDescTitleCn: 'NAN JING',
					peopleDescTitleEn: '南京“卫共”店',
					placeImgSrc: 'http://img.visney.cn/img/nuxtPc/experice-nj/place_people_desc_right_img.png',
					peopleName: '田肯 KEN',
					peopleImgSrc: 'http://img.visney.cn/img/nuxtPc/experice-bt/place_people_desc_left_img.png',
					peopleDescCn: [
						'肯创集团董事长、VISNEY品牌创始人',
						'"九层之台，起于垒土。在时代大变革下，卫诗理正进行着它的新征程"'
					],
					peopleDescEn: [
						'Nine layers of Tai, on home soil In the era of big changes, who poetry is in its new journey...'
					]
				},
				PanoramicData: {
					PanoramicTitleCn1: '南京“卫共”店',
					PanoramicTitleCn2: '唯美实景曝光',
					PanoramicTitleEn: 'Panoramic hall',
					PanoramicTitleDesc: '馆内产品实景展示，呈现空间艺术的美感，让生活处处皆美学',
					PanoramicListData: [
						{
							PanoramicListTitle: ['名师团队 倾力之作'],
							PanoramicListIntro: ['卫诗理南京店由国内新锐空间美学家','蚂蚁嘿设计公司资深空间设计师','Presley先生和Lavinia女士，','组建实力团队耗时3个月打造完成。'],
							PanoramicListIntroEn: 'Online and offline service, 2688 regions, siex packs',
							PanoramicListImg: 'http://img.visney.cn/img/nuxtPc/experice-bt/panoramic_hall_list_img1.png',
						},
						{
							PanoramicListTitle: ['生态生活，有温度的创造'],
							PanoramicListIntro: ['大到空间布局家具陈列，小到一草一木装饰摆放，淋漓尽致地将自然生态与生活美学完美融合'],
							PanoramicListIntroEn: 'The space layout of fumiture,small to every tree and Bush...',
							PanoramicListImg: 'http://img.visney.cn/img/nuxtPc/experice-nj/panoramic_hall_list_img2.png',
						},
						{
							PanoramicListTitle: ['十六大空间设计，','还原纯正欧美贵族文化'],
							PanoramicListIntro: ['金店陈列九大系列，海量臻品，风格涵盖大美、小美、简美、意式、法式、英式、新中式等... '],
							PanoramicListIntroEn: 'The poems on Chen nine boutique style fumiture series,covering the...',
							PanoramicListImg: 'http://img.visney.cn/img/nuxtPc/experice-nj/panoramic_hall_list_img3.png',
						}
					]
				},
				nativeStyleData: {
					styleTitle: ['自然生态','温馨简美'],
					styleDesc: ['用心品味，温暖总在不经意间流露，','浪漫与优雅，在这里留下时间的痕迹。'],
					styleDescEn: 'Natural Ecology',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-nj/native_level_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/native_level_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/native_level_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/native_level_list4.png'
					],
					styleMore: false,
					changeRight: false

				},
				elegantStyleData: {
					styleTitle: ['纯正欧式','一墅繁华'],
					styleDesc: ['梦幻的色彩，华美的装饰，','精致的造型，欧式高贵典雅的格调尽显。'],
					styleDescEn: 'Pure European',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-nj/elegant_style_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/elegant_style_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/elegant_style_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/elegant_style_list4.png'
					],
					styleMore: false,
					changeRight: true
				},
				chineseStyleData: {
					styleTitle: ['新中式','心中势'],
					styleDesc: ['于传统美学规范之下，','赋予古典中式家具新的生命力','打破现实世界的樊篱，直面内心的那份静谧。','融古典，辟新境。'],
					styleDescEn: 'NEW Chinese style',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-nj/chinese_style_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/chinese_style_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/chinese_style_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/chinese_style_list4.png'
					],
					styleMore: false,
					changeRight: false
				},
				naturalStyleData: {
					styleTitle: ['经典大美','时尚韵味'],
					styleDesc: ['岁月静好中，幸福寂静流淌，','深邃沉静中，时尚之韵来袭。'],
					styleDescEn: 'Natural',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-nj/natural_style_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/natural_style_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/natural_style_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-nj/natural_style_list4.png'
					],
					styleMore: true,
					changeRight: true
				},
				longitude: 118.751323,
				latitude: 32.039674,
				title: '南京体验店',
				description: '地址：南京市建邺区水西门大街285号289号万达金街东区',
			}
		},
		components: {
			expericeBanner,
			expericePlaceDesc,
			expericePeopleDesc,
			expericePanoramic,
			expericeStyle,
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
		}
	}
</script>

<style scoped>
	
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