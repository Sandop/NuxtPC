<template>
    <div id="panoramic_hall_wrap">
        <div class="panoramic_hall_box">
            <div class="panoramic_hall_title_box">
                <div class="panoramic_hall_titleC">
                    <h2>{{PanoramicData.PanoramicTitleCn1}}</h2>
                    <h2>{{PanoramicData.PanoramicTitleCn2}}</h2>
                </div>
                <div class="panoramic_hall_titleE">
                    <p>{{PanoramicData.PanoramicTitleEn}}</p>
                </div>
                <div class="panoramic_hall_title_desc">
                    <p>{{PanoramicData.PanoramicTitleDesc}}</p>
                </div>
            </div>
            <div class="panoramic_hall">
                <ul>
                    <li class="panoramic_hall_list" v-for="(list,index) in PanoramicData.PanoramicListData" :key="index" :class="{specile_width:PanoramicData.PanoramicLIWidth}">
                        <div class="panoramic_hall_list_img">
                            <img :src="list.PanoramicListImg" alt="">
                        </div>
                        <div class="panoramic_hall_list_intro_box">
                            <div class="panoramic_hall_list_title">
                                <p v-for="(item,index) in list.PanoramicListTitle" :key="index">{{item}}</p>
                            </div>
                            <div class="panoramic_hall_list_introC">
                                <p v-for="(item,index) in list.PanoramicListIntro" :key="index">{{item}} </p>
                            </div>
                            <div class="panoramic_hall_list_introE">
                                <p>{{list.PanoramicListIntroEn}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'expericePanoramic',
            props: {
                PanoramicData: Object
            }
    }
</script>

<style scoped>
    /*Panoramic hall start*/
        div#panoramic_hall_wrap {
            width:  100%;
            background: #f9f9fa;
        }

        .panoramic_hall_box {
            overflow:  hidden;
            width:  1200px;
            height:  auto;
            margin:  0 auto;
            padding: 150px 0 155px;
        }

        .panoramic_hall_title_box {
            width:  100%;
            padding-bottom: 115px;
            text-align:  center;
        }

        .panoramic_hall_titleC {
            overflow: hidden;
            width: 100%;
            height: 91px;
        }

        .panoramic_hall_titleC h2 {
            font-size:  40px;
            font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
            font-weight: 900;
            color: #22202b;
            line-height: 46px;
        }

        .panoramic_hall_titleE {
            overflow: hidden;
            width: 100%;
            height: 34px;
            color: #858585;
            font-size: 14px;
            line-height: 34px;
            text-align: center;
        }

        .panoramic_hall_title_desc {
            overflow: hidden;
            width: 100%;
            height: 68px;
            color: #d6d6d6;
            font-size: 14px;
            line-height: 68px;
            text-align: center;
        }

        .panoramic_hall {
            overflow:  hidden;
            width:  100%;
            height:  auto;
        }

        .panoramic_hall ul {
            display: flex;
            overflow:  hidden;
            width:  100%;
            justify-content: space-between;
        }

        li.panoramic_hall_list {
            overflow:  hidden;
            width: 300px;
            height: 884px;
        }

        li.panoramic_hall_list.specile_width {
            width: 525px;
        }

        .panoramic_hall ul li:nth-child(2) {
            position: relative;
        }

        .panoramic_hall ul li:nth-child(2) .panoramic_hall_list_intro_box {
            position:  absolute;
            top: 0;
        }

        .panoramic_hall ul li:nth-child(2) .panoramic_hall_list_img {
            position:  absolute;
            bottom: 0;
        }

        .panoramic_hall_list_img {
            overflow:  hidden;
            width:  100%;
            height:  570px;
        }

        .panoramic_hall_list_intro_box {
            overflow:  hidden;
            width:  100%;
            height:  314px;
            padding-top:  74px;
            box-sizing:  border-box;
        }

        .panoramic_hall_list_title {
            width:  100%;
            color:  #22202b;
            font-size:  18px;
            font-weight:  bold;
            line-height:  30px;
            text-align:  left;
        }

        .panoramic_hall_list_introC {
            overflow:  hidden;
            width:  100%;
            height:  auto;
            padding:  23px 0 32px;
            color:  #858585;
            font-size: 14px;
            line-height: 18px;
            text-align:  left;
        }

        .panoramic_hall_list_introE {
            overflow:  hidden;
            width:  100%;
            color:  #cccccc;
            font-size:  12px;
            line-height:  15px;
            text-align:  left;
        }
    /*Panoramic hall end*/
</style>
