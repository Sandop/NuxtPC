<template>
	<section class="container">
		<expericeBanner :bannerSrc="bannerSrc"></expericeBanner>
		<expericePlaceDesc :placeDescData="placeDescData"></expericePlaceDesc>
		<expericePeopleDesc :peopleDescData="peopleDescData"></expericePeopleDesc>
		<!-- Line Service start -->
		<lineService></lineService>
		<!-- Line Service end -->
		<expericePanoramic :PanoramicData="PanoramicData"></expericePanoramic>
		<expericeStyle :styleData="nativeStyleData"></expericeStyle>
		<expericeStyle :styleData="elegantStyleData"></expericeStyle>
		<expericeStyle :styleData="chineseStyleData"></expericeStyle>
		<!-- Dream Together start -->
		<expericeVideo></expericeVideo>
		<!-- Dream Together end -->
		
		<!-- High Lights start -->
		<div id="high_lights_wrap">
			<div class="high_lights_box">
				<div class="high_lights_title_box">
					<div class="high_lights_titleC">
						<h2>卫诗理包头体验馆</h2>
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
					<p>包头市青山区传媒大厦B座117卫诗理包头店</p>
					<p>距离包头二里半机场19.9公里，加车需36分钟，</p>
					<p>距离包头火车站6.6公里，加车需12分钟距离火车站包头东站18.2公里，驾车需33分钟</p>
				</div>
				<div class="place_address_phone">
					<div class="place_address_phone1">
						<p>线下招商热线：</p>
						<h3>400 900 6267</h3>
					</div>
					<div class="place_address_phone1">
						<p>预约电话（penny）</p>
						<h3>17302633888</h3>
					</div>
				</div>
				<div class="place_address_contact">
					<p>为了保证您参观的尊贵体验，来时请提前预约</p>
					<div class="place_address_contact_num">
						<h3>18686152121</h3><p>（杨先生）</p>
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
	import expericeVideo from '~/components/experice/expericeVideo'
	import lineService from '~/components/experice/lineService'

	export default {
		data (){
			return {
				bannerSrc:'http://img.visney.cn/img/nuxtPc/experice-bt/banner.png',
				placeDescData: {
					placeDescTitle: '包头',
					placeDescTitleE: 'Bao Tou',
					placeDesc: '包头，又称鹿都，是内蒙古的制造业、工业中心及最大城市，呼包银经济带、呼包鄂城市群的中心城市，素有“草原钢城”和"稀土之都"的美誉',
					placeDescEn: [
						'Baotou, also known as deer capital,',
						'is the manufacturing, industrial center and largest city in Inner Mongolia.',
						'The central city of Hubao e city group is known',
						'as "grassland steel city" and "rare earth capital".'
					],
					placeDescImgSrc: [
						'http://img.visney.cn/img/nuxtPc/experice-bt/place_desc_right1.png','http://img.visney.cn/img/nuxtPc/experice-bt/place_desc_right2.png','http://img.visney.cn/img/nuxtPc/experice-bt/place_desc_right3.png','http://img.visney.cn/img/nuxtPc/experice-bt/place_desc_right4.png'
					],
					placeDescImgName: ['希拉穆仁草原','五当召','南海公园','识食物者为俊杰']
				},
				peopleDescData: {
					peopleDescTitleCn: 'BAOTOU',
					peopleDescTitleEn: '包头卫诗理体验馆',
					placeImgSrc: 'http://img.visney.cn/img/nuxtPc/experice-bt/place_people_desc_right_img.png',
					peopleName: '田肯',
					peopleImgSrc: 'http://img.visney.cn/img/nuxtPc/experice-bt/place_people_desc_left_img.png',
					peopleDescCn: ['”持续不断地创新和完善，为客户提供高品质家具、舒适环境、贴心服务不变。铭记初心，逐梦前行。“'],
					peopleDescEn: [
						'"Continuous innovation and improvement, to provide customers',
						'with high-quality furniture, comfortable environment, caring service"'
					]
				},
				PanoramicData: {
					PanoramicTitleCn1: '逐梦鹿都·打造生活美学',
					PanoramicTitleCn2: '唯美实景曝光',
					PanoramicTitleEn: 'Panoramic hall',
					PanoramicTitleDesc: '馆内产品实景展示，呈现空间艺术的美感，让生活处处皆美学',
					PanoramicListData: [
						{
							PanoramicListTitle: ['名师·匠造'],
							PanoramicListIntro: ['国内新锐空间美学蚂蚁嘿 设计团队倾力打造，历时3个月打造奢雅纯正欧美风格墅级佳地。'],
							PanoramicListIntroEn: 'The new space aesthetic design team design to build the ant hey...',
							PanoramicListImg: 'http://img.visney.cn/img/nuxtPc/experice-bt/panoramic_hall_list_img1.png',
						},
						{
							PanoramicListTitle: ['空间·美学'],
							PanoramicListIntro: ['520㎡生活生态体验馆，大到空间布局家具陈列，小到一草一木装饰摆放，淋漓尽致地将自然生态与生活美学完全整合。'],
							PanoramicListIntroEn: 'The space layout of fumiture,small to every tree and Bush...',
							PanoramicListImg: 'http://img.visney.cn/img/nuxtPc/experice-bt/panoramic_hall_list_img2.png',
						},
						{
							PanoramicListTitle: ['甄品·荟萃'],
							PanoramicListIntro: ['854款甄尚奢品，八大系列精品呈现，拉斐尔现代美式、麦迪逊轻奢美式、麦巴赫·纽约摩登、杜戈兰简美、格列佛简美、法式新古典、英式、新中式等海量名品供您臻选。'],
							PanoramicListIntroEn: 'The poems on Chen nine boutique style fumiture series,covering the...',
							PanoramicListImg: 'http://img.visney.cn/img/nuxtPc/experice-bt/panoramic_hall_list_img3.png',
						}
					]
				},
				nativeStyleData: {
					styleTitle: '纯正美式·浪漫奢华',
					styleDesc: ['美式风格代表了一种自在，随意不羁的一活方式，','没有太多造作的修饰与约不经意间，也成为另一种浪漫。'],
					styleDescEn: 'Native speaker leve',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-bt/native_level_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-bt/native_level_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-bt/native_level_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-bt/native_level_list4.png'
					],
					styleMore: false,
					changeRight: false

				},
				elegantStyleData: {
					styleTitle: '欧式典雅·一墅繁华',
					styleDesc: ['即使经过岁月的洗礼','欧式家具依旧散发着古典优雅的高贵气息。'],
					styleDescEn: 'ID Book',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-bt/elegant_style_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-bt/elegant_style_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-bt/elegant_style_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-bt/elegant_style_list4.png'
					],
					styleMore: false,
					changeRight: true
				},
				chineseStyleData: {
					styleTitle: '新中式·心中势',
					styleDesc: ['线条简单流畅、精雕细琢，具有传统中式的元素的同时，','对美的追求，也达到了极致。'],
					styleDescEn: 'New Chinese style',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-bt/chinese_style_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-bt/chinese_style_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-bt/chinese_style_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-bt/chinese_style_list4.png'
					],
					styleMore: true,
					changeRight: false
				},
				longitude: 109.861421,
				latitude: 40.651567,
				title: '包头体验店',
				description: '地址：包头市青山区传媒大厦B座117卫诗理包头店'
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
		    let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/20`);
		  return {
		    metaData: metaData.data,
		  } 
		}
	}
</script>

<style scoped>

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