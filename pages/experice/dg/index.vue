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
		<expericeVideo></expericeVideo>
		<expericeHighLights :highLightsData="highLightsData"></expericeHighLights>
		<commonMap :mapData="mapData"></commonMap>		 
			
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
	import expericeBanner from '~/components/experice/expericeBanner'
	import expericePlaceDesc from '~/components/experice/expericePlaceDesc'
	import expericePeopleDesc from '~/components/experice/expericePeopleDesc'
	import expericePanoramic from '~/components/experice/expericePanoramic'
	import expericeStyle from '~/components/experice/expericeStyle'
	import expericeHighLights from '~/components/experice/expericeHighLights'
	import expericeVideo from '~/components/experice/expericeVideo.vue'
	import lineService from '~/components/experice/lineService.vue'
	import commonMap from '~/components/common/commonMap'

	export default {
		data (){
			return {
				bannerSrc:'http://img.visney.cn/img/nuxtPc/experice-dg/banner.png',
				placeDescData: {
					placeDescTitle: '东莞',
					placeDescTitleE: 'Dong Guan',
					placeDesc: '又称“莞城“，位于珠江口东岸，广东四小虎之首。也号称“世界工厂”国际花园城市，全国文明城市广东重要的交通枢纽和外贸口岸，经济交通十分发达，更是全国4个不设县的地级市之一。',
					placeDescEn: [
						'Also known as "Guancheng", ',
						'located on the east coast of the Pearl River Estuary,',
						'the first of four tigers in Guangdong. It is also known as the "world factory"',
						'The International Garden City, the national civilized city,',
						"Guangdong's important transport hub and foreign trade port.",
					],
					placeDescImgSrc: [
						'http://img.visney.cn/img/nuxtPc/experice-dg/place_desc_right1.png','http://img.visney.cn/img/nuxtPc/experice-dg/place_desc_right2.png','http://img.visney.cn/img/nuxtPc/experice-dg/place_desc_right3.png'
					],
					placeDescImgName: ['粤剧','舞狮','东莞咸面']
				},
				peopleDescData: {
					peopleDescTitleCn: 'DONG GUAN',
					peopleDescTitleEn: '东莞卫诗理体验馆',
					placeImgSrc: 'http://img.visney.cn/img/nuxtPc/experice-dg/place_people_desc_right_img.png',
					peopleName: '田肯 KEN',
					peopleImgSrc: 'http://img.visney.cn/img/nuxtPc/experice-bt/place_people_desc_left_img.png',
					peopleDescCn: [
						'肯创集团董事长、VISNEY品牌创始人',
						'“以解决客户痛点为本源的商业模式，才能真正走的长远”'
					],
					peopleDescEn: [
						'In order to solve the customer pain points as source of business ',
						'model, and can truly go long term.'
					]
				},
				PanoramicData: {
					PanoramicTitleCn1: '东莞体验馆',
					PanoramicTitleCn2: '唯美实景曝光',
					PanoramicTitleEn: 'Panoramic hall',
					PanoramicTitleDesc: '馆内产品实景展示，呈现空间艺术的美感，让生活处处皆美学',
					PanoramicListData: [
						{
							PanoramicListTitle: ['纯正欧美风，匠心设计'],
							PanoramicListIntro: ['国内新锐空间美学设计团队蚂蚁嘿设计倾力打造，历时半年打造奢雅纯正欧美风格墅级佳地。'],
							PanoramicListIntroEn: 'The new space aesthetic design team design to build the ant hey...',
							PanoramicListImg: 'http://img.visney.cn/img/nuxtPc/experice-dg/panoramic_hall_list_img1.png',
						},
						{
							PanoramicListTitle: ['生态生活，有温度的创造'],
							PanoramicListIntro: ['大到空间布局家具陈列，小到一草一木装饰摆放，淋漓尽致地将自然生态与生活美学完美融合'],
							PanoramicListIntroEn: 'The space layout of fumiture,small to every tree and Bush...',
							PanoramicListImg: 'http://img.visney.cn/img/nuxtPc/experice-dg/panoramic_hall_list_img2.png',
						},
						{
							PanoramicListTitle: ['十六大风格，空间美学'],
							PanoramicListIntro: ['馆内陈列卫诗理九大精品系列家具，风格涵盖大美、小美、简美、英式、美式、法式、意式等各类家具，细细品味纯正欧美家具珍品。'],
							PanoramicListIntroEn: 'The poems on Chen nine boutique style fumiture series,covering the...',
							PanoramicListImg: 'http://img.visney.cn/img/nuxtPc/experice-dg/panoramic_hall_list_img3.png',
						}
					]
				},
				nativeStyleData: {
					styleTitle: ['体验馆 第一层'],
					styleDesc: ['格列佛简美系列 杜兰戈简美系列 ','波兰特简美系列'],
					styleDescEn: 'American',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-dg/native_level_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-dg/native_level_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-dg/native_level_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-dg/native_level_list4.png'
					],
					styleMore: false,
					changeRight: false

				},
				elegantStyleData: {
					styleTitle: ['体验馆 第二层'],
					styleDesc: ['德国馆 凯撒皇宫奢华定制意式系列','梵地亚欧式系列 赫莎'],
					styleDescEn: 'Luxury',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-dg/elegant_style_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-dg/elegant_style_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-dg/elegant_style_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-dg/elegant_style_list4.png'
					],
					styleMore: false,
					changeRight: true
				},
				chineseStyleData: {
					styleTitle: ['体验馆 第三层'],
					styleDesc: ['比利时馆 华兹华斯新古典系列','玛尔玛索美式系列 圣保罗美式系列'],
					styleDescEn: 'Distinguished',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-dg/chinese_style_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-dg/chinese_style_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-dg/chinese_style_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-dg/chinese_style_list4.png'
					],
					styleMore: true,
					changeRight: false
				},
				highLightsData: {
					highLightsTitleCn1: '卫诗理东莞体验馆',
					highLightsTitleCn2: '六大专属亮点',
					highLightsTitleEn: 'Olivelife',
					highLightsList: [
						{
							highLightsListNum: '01',
							highLightsListTitle: '欧式软装',
							highLightsListTitleEn: 'European style curtains',
							highLightsListDesc: '纯正欧式软装设计打造复古时尚风',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-dg/high_lights_list_img1.png',
							highLightsListImgAlt: '欧式软装'
						},
						{
							highLightsListNum: '02',
							highLightsListTitle: '时装专区',
							highLightsListTitleEn: 'Fashion zone',
							highLightsListDesc: '供选国际大牌高定时装，品味流行时尚',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-dg/high_lights_list_img2.png',
							highLightsListImgAlt: '时装专区'
						},
						{
							highLightsListNum: '03',
							highLightsListTitle: '安神香薰',
							highLightsListTitleEn: 'Nerves aromatherapy',
							highLightsListDesc: '法国南部香水之都格拉斯特配香薰',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-bt/high_lights_list_img3.png',
							highLightsListImgAlt: '安神香薰'
						},
						{
							highLightsListNum: '04',
							highLightsListTitle: '免费餐饮',
							highLightsListTitleEn: 'Especially with the dining',
							highLightsListDesc: '粤菜泰斗大师传人黄学文掌勺烹饪美味菜肴',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-dg/high_lights_list_img4.png',
							highLightsListImgAlt: '免费餐饮'
						},
						{
							highLightsListNum: '05',
							highLightsListTitle: '茶香品茗',
							highLightsListTitleEn: 'Tea',
							highLightsListDesc: '长寿乡水源烹煮，茶香扑鼻',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-dg/high_lights_list_img5.png',
							highLightsListImgAlt: '茶香品茗'
						},
						{
							highLightsListNum: '06',
							highLightsListTitle: '专属伴手礼',
							highLightsListTitleEn: 'Gift',
							highLightsListDesc: '为每一位卫诗理客户专属定制伴手礼，献给尊贵的您',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-dg/high_lights_list_img6.png',
							highLightsListImgAlt: '专属伴手礼'
						}
					]
				},
				mapData: {
					longitude:  113.639459,
					latitude: 22.914326,
					title: '东莞体验店',
					description: '地址：东莞市厚街家具大道209号'
				}
			}
		},
		components: {
			expericeBanner,
			expericePlaceDesc,
			expericePeopleDesc,
			expericePanoramic,
			expericeStyle,
			expericeHighLights,
			commonMap,
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
		}
	}
</script>

<style scoped>

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