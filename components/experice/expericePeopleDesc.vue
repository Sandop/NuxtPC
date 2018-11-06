<template>
    <div id="place_people_desc_wrap">
			<div class="place_people_desc_box clearfix">
				<div class="place_people_desc_left">
					<div class="place_people_desc_left_img">
						<img :src="peopleDescData.peopleImgSrc" alt="">
					</div>
					<div class="place_people_name"><p>{{peopleDescData.peopleName}}</p></div>
					<div class="place_people_desc">
						<div class="place_people_descC">
							<p v-for="(list,index) in peopleDescData.peopleDescCn" :key="index">{{list}}</p> 
						</div>
						<div class="place_people_descE">
							<p v-for="(list,index) in peopleDescData.peopleDescEn" :key="index">{{list}}</p> 
						</div>
					</div>
				</div>
				<div class="place_people_desc_right">
					<div class="place_people_desc_right_img">
						<img :src="peopleDescData.placeImgSrc" alt="">
					</div>
					<div class="place_people_desc_right_title">
						<p class="place_people_desc_right_titleE">{{peopleDescData.peopleDescTitleCn}}</p>
						<p class="place_people_desc_right_titleC">{{peopleDescData.peopleDescTitleEn}}</p>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: 'expericePeopleDesc',
        props: {
            peopleDescData: Object
        } 
    }
</script>

<style scoped>
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
		    text-align:  left;
		}

		p.place_people_desc_right_titleC {
		    width: 100%;
		    height: 26px;
		    padding-left: 5px;
		    color: #858585;
		    font-size: 14px;
		    line-height: 26px;
		    text-align: left;
		    box-sizing: border-box;
		}
	/* Place people description end */
</style>
