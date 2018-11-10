<template>
    <div id="native_level_wrap">
        <div class="native_level_box">
            <div class="native_level_title_box clearfix" :class="{change_right:styleData.changeRight}">
                <div class="native_level_title_left">
                    <div class="native_level_titleC">
                        <h2 v-for="(list,index) in styleData.styleTitle" :key="index">{{list}}</h2>
                    </div>
                    <div class="native_level_title_desc">
                        <p v-for="(list,index) in styleData.styleDesc" :key="index">{{list}}</p>
                    </div>
                </div>
                <div class="native_level_title_line"></div>
                <div class="native_level_title_right">
                    <p class="native_level_titleE">{{styleData.styleDescEn}}</p>
                </div>
            </div>
            <div class="native_level_show"  :class="{change_right:styleData.changeRight}">
                <ul>
                    <li class="native_level_list" v-for="(list,index) in styleData.styleImg" :key="index">
                        <img :src="list" alt="">
                    </li>
                </ul>
            </div>
            <div class="natural_style_more" v-if="styleData.styleMore">
                <p>更多系列，到店尊享</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'expericeStyle',
        props: {
            styleData: Object
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
		    width: 370px;
		}

		.native_level_title_line {
		    float:  left;
		    width:  540px;
		    height:  2px;
		    margin: 44px 50px 0;
		    background:  #d5d5d8;
		}

        .native_level_title_right {
		    float:  right;
		    margin-top: 30px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align:  right;
		}

        .native_level_title_box.change_right  .native_level_title_left {
            float: right;
        }

        .native_level_title_box.change_right  .native_level_title_line {
            float: right;
        }

        .native_level_title_box.change_right  .native_level_title_right {
            float: left;
		    text-align:  left;

        }

        .native_level_title_box.change_right  .native_level_title_desc {
		    text-align:  right;

        }

		.native_level_titleC {
		    overflow:  hidden;
		    width:  100%;
		}

		.native_level_titleC h2 {
			font-size:  40px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 42px;
		}

		.change_right .native_level_titleC h2 {
			text-align: right;
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

        .native_level_show.change_right .native_level_list {
            float: right;
            margin-left: 0;
            margin-right: 12px;
        }

		.native_level_show ul li:first-child {
		    width:  743px;
		    height:  756px;
		    margin-left: 0;
		}

		.native_level_show.change_right ul li:first-child {
		    width:  743px;
		    height:  756px;
		    margin-right: 0;
		}

        .natural_style_more {
		    overflow: hidden;
            width: 100%;
            height: 150px;
            color: #22202b;
            font-size: 24px;
            font-weight: 700;
            line-height: 120px;
            text-align: center;
		}
	/*Native Level end*/
</style>
