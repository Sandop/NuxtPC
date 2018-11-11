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
		<expericeAddress :addressData="addressData"></expericeAddress>
	</section>
</template>

<script>
	import axios from 'axios'
	import expericeBanner from '~/components/experice/expericeBanner'
	import expericePlaceDesc from '~/components/experice/expericePlaceDesc'
	import expericePeopleDesc from '~/components/experice/expericePeopleDesc'
	import lineService from '~/components/experice/lineService'
	import expericePanoramic from '~/components/experice/expericePanoramic'
	import expericeStyle from '~/components/experice/expericeStyle'
	import expericeVideo from '~/components/experice/expericeVideo'
	import expericeHighLights from '~/components/experice/expericeHighLights'
	import commonMap from '~/components/common/commonMap'
	import expericeAddress from '~/components/experice/expericeAddress'

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
					styleTitle: ['纯正美式·浪漫奢华'],
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
					styleTitle: ['欧式典雅·一墅繁华'],
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
					styleTitle: ['新中式·心中势'],
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
				highLightsData: {
					highLightsTitleCn1: '卫诗理包头体验馆',
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
					longitude: 109.861421,
					latitude: 40.651567,
					title: '包头体验店',
					description: '地址：包头市青山区传媒大厦B座117卫诗理包头店'
				},
				addressData: {
					addressDetils: [
						'包头市青山区传媒大厦B座117卫诗理包头店', 
						'距离包头二里半机场19.9公里，驾车需36分钟，', 
						'距离包头火车站6.6公里，驾车需12分钟', 
						'距离火车站包头东站18.2公里，驾车需33分钟'
					],
					hotLineTitle: '线下招商热线：',
					hotLineNum: '400 900 6267',
					phoneTitle: '预约电话（penny）',
					phoneNum: '17302633888',
					contentNum: '18686152121',
					contentPeople: '（杨先生）'
				}
			}
		},
		components: {
			expericeBanner,
			expericePlaceDesc,
			expericePeopleDesc,
			expericePanoramic,
			expericeHighLights,
			expericeStyle,
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
				let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/20`);
			return {
				metaData: metaData.data,
			} 
		}
	}
</script>

<style scoped>

</style>