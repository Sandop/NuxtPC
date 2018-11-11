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
		<expericeHighLights :highLightsData="highLightsData"></expericeHighLights>
		<commonMap :mapData="mapData"></commonMap>		 
		<expericeAddress :addressData="addressData"></expericeAddress>	
	</section>
</template>

<script>
	import axios from 'axios'
	import expericeBanner from '~/components/experice/expericeBanner'
	import expericePlaceDesc from '~/components/experice/expericePlaceDesc'
	import expericePeopleDesc from '~/components/experice/expericePeopleDesc'
	import expericePanoramic from '~/components/experice/expericePanoramic'
	import expericeStyle from '~/components/experice/expericeStyle'
	import expericeVideo from '~/components/experice/expericeVideo'
	import expericeHighLights from '~/components/experice/expericeHighLights'
	import lineService from '~/components/experice/lineService.vue'
	import commonMap from '~/components/common/commonMap'
	import expericeAddress from '~/components/experice/expericeAddress'

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
				highLightsData: {
					highLightsTitleCn1: '卫诗理南京“卫共”店',
					highLightsTitleCn2: '六大专属亮点',
					highLightsTitleEn: 'Olivelife',
					highLightsList: [
						{
							highLightsListNum: '01',
							highLightsListTitle: '匠心设计',
							highLightsListTitleEn: 'European style curtains',
							highLightsListDesc: '纯真欧美软装搭配，回溯一个时代的繁华',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-nj/high_lights_list_img1.png',
							highLightsListImgAlt: '匠心设计'
						},
						{
							highLightsListNum: '02',
							highLightsListTitle: '0元飞线下',
							highLightsListTitleEn: 'Free ticket',
							highLightsListDesc: '报销单人往返机票或高铁票（订单总额满20W）',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-nj/high_lights_list_img2.png',
							highLightsListImgAlt: '0元飞线下'
						},
						{
							highLightsListNum: '03',
							highLightsListTitle: '特配香薰',
							highLightsListTitleEn: 'Special match',
							highLightsListDesc: '法国南部香水之都格拉斯特配香薰',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-bt/high_lights_list_img3.png',
							highLightsListImgAlt: '特配香薰'
						},
						{
							highLightsListNum: '04',
							highLightsListTitle: '免费餐饮',
							highLightsListTitleEn: 'Free meals',
							highLightsListDesc: '大厨掌勺烹饪南京特色美味菜肴',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-nj/high_lights_list_img4.png',
							highLightsListImgAlt: '免费餐饮'
						},
						{
							highLightsListNum: '05',
							highLightsListTitle: '免费接送',
							highLightsListTitleEn: 'Free Shuttle',
							highLightsListDesc: '在线预约，尊享高铁站、机场专人专车服务',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-bt/high_lights_list_img5.png',
							highLightsListImgAlt: '免费接送'
						},
						{
							highLightsListNum: '06',
							highLightsListTitle: '专属伴手礼',
							highLightsListTitleEn: 'Gift',
							highLightsListDesc: '专属定制伴手礼献给尊贵来宾',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-nj/high_lights_list_img6.png',
							highLightsListImgAlt: '专属伴手礼'
						}
					]
				},
				mapData: {
					longitude: 118.751323,
					latitude: 32.039674,
					title: '南京体验店',
					description: '地址：南京市建邺区水西门大街285号289号万达金街东区'
				},
				addressData: {
					addressDetils: [
						'南京市建邺区水西门大街285号289号万达金街东区', 
						'距离南京禄口国际机场40公里，大约车程30分钟', 
						'距离南京南站（火车/高铁）10公里，大约车程为10分钟'
					],
					hotLineTitle: '线下招商热线：',
					hotLineNum: '400 900 6267',
					phoneTitle: '招商加盟联系人 PENNY',
					phoneNum: '17302633888',
					contentNum: '18686152121',
					contentPeople: '(叶总)'
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
			lineService,
			expericeAddress
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

</style>