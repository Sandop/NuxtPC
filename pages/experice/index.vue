<template>
	<section class="container">
		<expericeBanner :bannerSrc="bannerSrc"></expericeBanner>
		
		<!-- For what to start -->
		<expericeIdea></expericeIdea>
		<!-- For what to start -->
		
		<!-- New retail model start -->
		<expericeNewModel></expericeNewModel>
		<!-- New retail model end -->

		<!-- For what service start -->
		<expericeService></expericeService>
		<!-- For what service end -->
		
		<!-- For what design start -->
		<expericeDesign></expericeDesign>
		<!-- For what design end -->
	</section>
</template>


<script>
	import axios from 'axios'
	import expericeDesign from '~/components/experice/expericeDesign'
	import expericeBanner from '~/components/experice/expericeBanner'
	import expericeIdea from '~/components/experice/expericeIdea'
	import expericeNewModel from '~/components/experice/expericeNewModel'
	import expericeService from '~/components/experice/expericeService'

	export default {
		data (){
			return {
				bannerSrc:'http://img.visney.cn/img/nuxtPc/experice/banner.png',
			}
		},
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
		    let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/3`);
		  return {
		    metaData: metaData.data,
		  } 
		},
		components: {
			expericeBanner,
			expericeIdea,
			expericeNewModel,
			expericeService,
			expericeDesign
		}
	}
</script>

<style scoped>
</style>