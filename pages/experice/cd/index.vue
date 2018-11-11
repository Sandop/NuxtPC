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
	import expericeHighLights from '~/components/experice/expericeHighLights'
	import expericeVideo from '~/components/experice/expericeVideo.vue'
	import lineService from '~/components/experice/lineService.vue'
	import commonMap from '~/components/common/commonMap'
	import expericeAddress from '~/components/experice/expericeAddress'

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
				peopleDescData: {
					peopleDescTitleCn: 'CHENGDU',
					peopleDescTitleEn: '成都卫诗理体验馆',
					placeImgSrc: 'http://img.visney.cn/img/nuxtPc/experice-cd/place_people_desc_right_img.png',
					peopleName: '苏轼',
					peopleImgSrc: 'http://img.visney.cn/img/nuxtPc/experice-cd/place_people_desc_left_img.png',
					peopleDescCn: [
						'“莫听穿林打叶声，何妨吟啸且徐行。',
						'竹杖芒鞋轻似马，谁怕？一蓑烟雨任平生”'
					],
					peopleDescEn: []
				},
				PanoramicData: {
					PanoramicTitleCn1: '成都体验馆',
					PanoramicTitleCn2: '唯美实景曝光',
					PanoramicTitleEn: 'Panoramic hall',
					PanoramicTitleDesc: '馆内产品实景展示，呈现空间艺术的美感，让生活处处皆美学',
					PanoramicLIWidth: 1,
					PanoramicListData: [
						{
							PanoramicListTitle: ['致敬·先锋'],
							PanoramicListIntro: ['中高端空间美学MYD设计团队匠心呈现，缔造纯正欧美贵族古典风范。'],
							PanoramicListIntroEn: 'Professional team',
							PanoramicListImg: 'http://img.visney.cn/img/nuxtPc/experice-cd/panoramic_hall_list_img1.png',
						},
						{
							PanoramicListTitle: ['诚献·臻品'],
							PanoramicListIntro: ['2400㎡生态生活体验馆，1135款臻尚奢品，风格涵盖现代美式、后现代美式、欧式、英式、轻奢小法、禅意中式、新古典、中式、北欧等海量精品供您臻选'],
							PanoramicListIntroEn: 'Quality products',
							PanoramicListImg: 'http://img.visney.cn/img/nuxtPc/experice-cd/panoramic_hall_list_img2.png',
						}
					]

				},
				nativeStyleData: {
					styleTitle: ['体验馆 第一层'],
					styleDesc: ['麦巴赫·纽约摩登系列','美的产品传递出来的是人和世界的理解'],
					styleDescEn: 'Beautiful products',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-cd/native_level_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/native_level_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/native_level_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/native_level_list4.png'
					],
					styleMore: false,
					changeRight: false

				},
				elegantStyleData: {
					styleTitle: ['体验馆 第二层'],
					styleDesc: ['麦巴赫·纽约摩登系列','宾丽·美式简奢系列  比弗利·新现代轻奢系列','爱把简单生活过成甜'],
					styleDescEn: 'Sweet',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-cd/elegant_style_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/elegant_style_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/elegant_style_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/elegant_style_list4.png'
					],
					styleMore: false,
					changeRight: true
				},
				chineseStyleData: {
					styleTitle: ['体验馆 第三层'],
					styleDesc: ['丘吉尔庄园·英式名流系列 杜兰戈美式系列','梵地亚欧式II系列  翡丽·后现代高端艺术系列','愈品味，愈懂品味'],
					styleDescEn: 'Understand taste',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-cd/chinese_style_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/chinese_style_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/chinese_style_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/chinese_style_list4.png'
					],
					styleMore: false,
					changeRight: false
				},
				naturalStyleData: {
					styleTitle: ['体验馆 第四层'],
					styleDesc: ['溯·东方新中式系列  麦巴赫·纽约摩登系列','延祚·中式刺猬紫系列 佩洛·北欧系列  大斑马木系列','纯粹生态，自然礼遇'],
					styleDescEn: 'Natural',
					styleImg: [
						'http://img.visney.cn/img/nuxtPc/experice-cd/natural_style_list1.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/natural_style_list2.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/natural_style_list3.png',
						'http://img.visney.cn/img/nuxtPc/experice-cd/natural_style_list4.png'
					],
					styleMore: true,
					changeRight: true
				},
				highLightsData: {
					highLightsTitleCn1: '卫诗理成都体验馆',
					highLightsTitleCn2: '六大专属亮点',
					highLightsTitleEn: 'Olivelife',
					highLightsList: [
						{
							highLightsListNum: '01',
							highLightsListTitle: '欧奢软装',
							highLightsListTitleEn: 'European luxury soft outfit',
							highLightsListDesc: '纯真欧美软装搭配，回溯一个时代的繁华',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-bt/high_lights_list_img1.png',
							highLightsListImgAlt: '欧奢软装'
						},
						{
							highLightsListNum: '02',
							highLightsListTitle: '生态绿植',
							highLightsListTitleEn: 'Ecological green plant',
							highLightsListDesc: '纯粹生态，自然礼遇，缔造都市里的绿野仙踪',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-bt/high_lights_list_img2.png',
							highLightsListImgAlt: '生态绿植'
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
							highLightsListTitle: '特配餐饮',
							highLightsListTitleEn: 'Especially with the dining',
							highLightsListDesc: '舌尖上的包头，蒙古包的美食',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-bt/high_lights_list_img4.png',
							highLightsListImgAlt: '特配餐饮'
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
							highLightsListTitle: '精致伴手礼',
							highLightsListTitleEn: 'Set fine',
							highLightsListDesc: '为每一位卫诗理尊贵客户准备的专属伴手礼',
							highLightsListImg: 'http://img.visney.cn/img/nuxtPc/experice-bt/high_lights_list_img6.png',
							highLightsListImgAlt: '精致伴手礼'
						}
					]
				},
				mapData: {
					longitude: 103.9864779602,
					latitude: 30.6127248839,
					title: '成都体验店',
					description: '地址：成都市武侯区首信红星国际广场1号楼卫诗理家具旗舰店'
				},
				addressData: {
					addressDetils: [
						'成都市武侯区首信红星国际广场1号楼卫诗理家具旗舰店', 
						'距离双流机场8公里，驾车需17分钟', 
						'距离火车站成都站20公里，驾车需38分钟，距离火车站成都东站21公里，驾车需40分钟'
					],
					hotLineTitle: '线下招商热线：',
					hotLineNum: '400 900 6267',
					phoneTitle: '预约电话（李姐 Lecoo）',
					phoneNum: '15884588477',
					contentNum: '02885007888',
					contentPeople: ''
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
			let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/21`);
			return {
				metaData: metaData.data,
			} 
		}
	}
</script>

<style scoped>

</style>