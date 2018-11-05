<template>
    <div id="place_desc_wrap">
        <div class="place_desc_box clearfix">
            <div class="place_desc_left">
                <div class="place_title_box">
                    <p class="place_titleC">{{placeDescData.placeDescTitle}}</p>
                    <p class="place_titleE">{{placeDescData.placeDescTitleE}}</p>
                </div>
                <div class="place_desc">
                    <p class="place_descC">{{placeDescData.placeDesc}}</p>
                </div>
                <div class="place_descE">
                        <p v-for="(list,index) in placeDescData.placeDescEn" :key="index">{{list}}</p>
                    </div>
                <div class="place_tag_box">
                    <ul>
                        <li class="place_tag_list" v-for="(item,index) in placeDescData.placeDescImgName" :key="index" :class="{active:index == num}" @click="tabPlace(index)">{{item}}</li>
                    </ul>
                </div>
            </div>
            <div class="place_desc_right">
                <transition-group tag="ul" name="experice-place" mode="out-in">
                    <li class="place_desc_img" v-show="index == num" v-for="(item,index) in placeDescData.placeDescImgSrc" :key="index">
                        <img :src="item" alt="">
                    </li>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'expericePlaceDesc',
    props: {
        placeDescData: Object
    },
    data (){
        return {
            num: 0
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
		    top: 153px;
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

        .experice-place-enter-active, .experice-place-leave-active {
            transition: opacity .5s;
        }
        
        .experice-place-enter, .experice-place-leave-to {
            opacity: 0;
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
</style>
