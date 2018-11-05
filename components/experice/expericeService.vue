<template>
    <div id="experice_service">
        <div class="experice_service_box">
            <div class="experice_service_title">
                <div class="experice_service_titleC"><h2>服务体系</h2></div>
                <p class="experice_service_titleE">For what service</p>
                <p class="experice_service_title_desc">以美为本，创造体验式营销新高度</p>
            </div>
            <div class="experice_service_list_box">
                <div class="experice_service_left">
                    <ul>
                        <li class="experice_service_list">
                            <div class="experice_service_list_img"><img src="~/assets/images/experice/experice_service_list_img1.png"></div>
                            <div class="experice_service_list_title">
                                <p class="experice_service_list_titleC">酒店</p>
                                <p class="experice_service_list_titleE">Hotel</p>
                                <p class="experice_service_list_desc">禅意升腾·四季如春</p>
                            </div>
                        </li>
                        <li class="experice_service_list">
                            <div class="experice_service_list_img"><img src="~/assets/images/experice/experice_service_list_img2.png"></div>
                            <div class="experice_service_list_title">
                                <p class="experice_service_list_titleC">时装</p>
                                <p class="experice_service_list_titleE">Latest fashion</p>
                                <p class="experice_service_list_desc">不脱装·要时尚</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="experice_service_mid">
                    <ul>
                        <li class="experice_service_list">
                            <div class="experice_service_list_img"><img src="~/assets/images/experice/experice_service_list_img3.png"></div>
                            <div class="experice_service_list_title">
                                <p class="experice_service_list_titleC">花艺</p>
                                <p class="experice_service_list_titleE">Flower art</p>
                                <p class="experice_service_list_desc">花花世界 罗曼蒂克</p>
                            </div>
                        </li>
                        <li class="experice_service_list">
                            <div class="experice_service_list_img"><img src="~/assets/images/experice/experice_service_list_img4.png"></div>
                            <div class="experice_service_list_title">
                                <p class="experice_service_list_titleC">红酒</p>
                                <p class="experice_service_list_titleE">Red wine</p>
                                <p class="experice_service_list_desc">法国勃艮第·醇香第一味</p>
                            </div>
                        </li>
                        <li class="experice_service_list">
                            <div class="experice_service_list_img"><img src="~/assets/images/experice/experice_service_list_img5.png"></div>
                            <div class="experice_service_list_title">
                                <p class="experice_service_list_titleC">摄影</p>
                                <p class="experice_service_list_titleE">Photography</p>
                                <p class="experice_service_list_desc">无限回忆·定格美好</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="experice_service_right">
                    <ul>
                        <li class="experice_service_list">
                            <div class="experice_service_list_img"><img src="~/assets/images/experice/experice_service_list_img6.png"></div>
                            <div class="experice_service_list_title">
                                <p class="experice_service_list_titleC">咖啡</p>
                                <p class="experice_service_list_titleE">Coffee</p>
                                <p class="experice_service_list_desc">诗意生活·一杯一念一世界</p>
                            </div>
                        </li>
                        <li class="experice_service_list">
                            <div class="experice_service_list_img"><img src="~/assets/images/experice/experice_service_list_img7.png"></div>
                            <div class="experice_service_list_title">
                                <p class="experice_service_list_titleC">艺术展</p>
                                <p class="experice_service_list_titleE">Art Exhibition</p>
                                <p class="experice_service_list_desc">简生活·酷创作</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'expericeService'
}
</script>

<style scoped>
/*For what service start*/
    div#experice_service {
        width:  100%;
        height:  auto;
    }

    .experice_service_box {
        overflow:  hidden;
        width:  1200px;
        height:  auto;
        margin:  0 auto;
        padding: 150px 0 80px;
    }

    .experice_service_title {
        width: 100%;
        height: auto;
        text-align: center;
    }

    .experice_service_titleC {
        overflow: hidden;
        width: 100%;
        height:  40px;
        color: #22202b;
        font-size:  38px;
        font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
        font-weight: 900;
        line-height: 40px;
    }

    p.experice_service_titleE {
        overflow:  hidden;
        width:  100%;
        height: 36px;
        color:  #858585;
        font-size:  14px;
        line-height:  36px;
    }

    p.experice_service_title_desc {
        overflow: hidden;
        width: 100%;
        height: 42px;
        color: #858585;
        font-size: 18px;
        line-height: 42px;
    }

    .experice_service_list_box {
        overflow:  hidden;
        width:  100%;
    }

    .experice_service_left {
        float:  left;
        overflow:  hidden;
        width: 400px;
        height:  auto;
        padding-top: 350px;
    }

    .experice_service_mid {
        float: left;
        overflow: hidden;
        width: 400px;
        height: auto;
    }

    .experice_service_right {
        float: right;
        overflow: hidden;
        width: 400px;
        height: auto;
        padding-top: 350px;
    }

    li.experice_service_list {
        overflow:  hidden;
        width: 400px;
        height:  auto;
    }

    .experice_service_list_img {
        overflow:  hidden;
        width: 100%;
    }

    .experice_service_list_title {
        overflow:  hidden;
        width:  100%;
        padding: 80px 0 75px;
        text-align:  center;
    }

    p.experice_service_list_titleC {
        overflow:  hidden;
        width:  100%;
        height:  34px;
        color:  #22202f;
        font-size: 23px;
        font-weight:  bold;
        line-height:  34px;
    }

    p.experice_service_list_titleE {
        overflow: hidden;
        width: 100%;
        height: 24px;
        color: #858585;
        font-size: 14px;
        line-height: 24px;
    }

    p.experice_service_list_desc {
        overflow: hidden;
        width: 100%;
        height: 34px;
        color: #858585;
        font-size: 14px;
        line-height: 34px;
    }
/*For what service end*/
</style>
