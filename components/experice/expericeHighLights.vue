<template>
    <div id="high_lights_wrap">
        <div class="high_lights_box">
            <div class="high_lights_title_box">
                <div class="high_lights_titleC">
                    <h2>{{highLightsData.highLightsTitleCn1}}</h2>
                    <h2>{{highLightsData.highLightsTitleCn2}}</h2>
                </div>
                <div class="high_lights_titleE">
                    <p>{{highLightsData.highLightsTitleEn}}</p>
                </div>
            </div>
            <div class="high_lights">
                <ul>
                    <li class="high_lights_list" v-for="(list,index) in highLightsData.highLightsList" :key="index">
                        <div class="high_lights_list_num">{{list.highLightsListNum}}</div>
                        <div class="high_lights_list_title">
                            <p class="high_lights_list_titleC">{{list.highLightsListTitle}}</p>
                            <p class="high_lights_list_titleE">{{list.highLightsListTitleEn}}</p>
                        </div>
                        <div class="high_lights_list_desc">{{list.highLightsListDesc}}</div>
                        <div class="high_lights_list_img">
                            <img :src="list.highLightsListImg" :alt="list.highLightsListImgAlt">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'expericeHighLights',
        props: {
            highLightsData: Object
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
</style>
