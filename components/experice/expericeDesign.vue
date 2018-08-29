<template>
    <div id="experice_design">
        <div class="experice_design_box">
            <div class="experice_design_title">
                <div class="experice_design_titleC"><h2>分馆介绍</h2></div>
                <p class="experice_design_titleE">For what service</p>
            </div>
            <div class="experice_design_content_box">
                <div class="experice_design_place_container">
                    <div class="experience_tab_content">
                        <div class="experience_tab_box" v-show="currentNum == 0" @mouseenter="stop" @mouseleave="go">
                            <div class="eexperice_design_place_box clearfix">
                                <div class="experice_design_place">包头</div>
                                <div class="experice_design_place_line"></div>
                                <div class="experice_design_place_intro">卫诗理Olivelife新零售包头店</div>
                            </div>
                            <div class="experice_design_place_desc">
                                <p class="experice_design_place_descC">卫诗理Olive life 新零售包头店，逐梦之路，未来之巅</p>
                                <p class="experice_design_place_descE">The road to the dream,the top of the future</p>
                            </div>
                            <div class="experice_design_place_img_box">
                                <div class="experice_design_place_img"><img src="~/assets/images/experice/experice_design_place_img1.png"></div>
                                <div class="experice_design_place_img_desc">
                                    <p>地址：包头市青山区传媒大厦B座117卫诗理包头店</p>
                                    <p>营业时间：9：00-18：00</p>
                                </div>
                            </div>
                            <div class="experice_design_place_more">
                                <nuxt-link to="/experice/bt">了解更多 ></nuxt-link>
                            </div>
                        </div>
                        <div class="experience_tab_box" v-show="currentNum == 1" @mouseenter="stop" @mouseleave="go">
                            <div class="eexperice_design_place_box clearfix">
                                <div class="experice_design_place">成都</div>
                                <div class="experice_design_place_line"></div>
                                <div class="experice_design_place_intro">卫诗理新零售成都“卫志”店 </div>
                            </div>
                            <div class="experice_design_place_desc">
                                <p class="experice_design_place_descC">卫诗理新零售成都“卫志”店，生态生活，盎然新启</p>
                                <p class="experice_design_place_descE">Olivelife,opens the door of a new world</p>
                            </div>
                            <div class="experice_design_place_img_box">
                                <div class="experice_design_place_img"><img src="~/assets/images/experice/experice_design_place_img2.png"></div>
                                <div class="experice_design_place_img_desc">
                                    <p>地址：成都市武侯区首信红星国际广场1号楼卫诗理家具旗舰店</p>
                                    <p>营业时间：9：00-18：00</p>
                                </div>
                            </div>
                            <div class="experice_design_place_more">
                                <nuxt-link to="/experice/cd">了解更多 ></nuxt-link>
                            </div>
                        </div>
                        <div class="experience_tab_box" v-show="currentNum == 2" @mouseenter="stop" @mouseleave="go">
                            <div class="eexperice_design_place_box clearfix">
                                <div class="experice_design_place">南京</div>
                                <div class="experice_design_place_line"></div>
                                <div class="experice_design_place_intro">卫诗理 线下O2O南京“卫共”店 </div>
                            </div>
                            <div class="experice_design_place_desc">
                                <p class="experice_design_place_descC">初心不移，呈现生活最美的姿态</p>
                                <p class="experice_design_place_descE">Pure European noble experience , giving noble new definition</p>
                            </div>
                            <div class="experice_design_place_img_box">
                                <div class="experice_design_place_img"><img src="~/assets/images/experice/experice_design_place_img3.png"></div>
                                <div class="experice_design_place_img_desc">
                                    <p>地址：南京市建邺区水西门大街285号289号万达金街东区</p>
                                    <p>营业时间：9：00-18：00</p>
                                </div>
                            </div>
                            <div class="experice_design_place_more">
                                <nuxt-link to="/experice/nj">了解更多 ></nuxt-link>
                            </div>
                        </div>
                        <div class="experience_tab_box" v-show="currentNum == 3" @mouseenter="stop" @mouseleave="go">
                            <div class="eexperice_design_place_box clearfix">
                                <div class="experice_design_place">东莞</div>
                                <div class="experice_design_place_line"></div>
                                <div class="experice_design_place_intro">卫诗理Olivelife生态生活体验馆</div>
                            </div>
                            <div class="experice_design_place_desc">
                                <p class="experice_design_place_descC">纯正欧式尊贵体验，赋予贵族新的定义</p>
                                <p class="experice_design_place_descE">Pure European noble experience, giving noble new definition</p>
                            </div>
                            <div class="experice_design_place_img_box">
                                <div class="experice_design_place_img"><img src="~/assets/images/experice/experice_design_place_img4.png"></div>
                                <div class="experice_design_place_img_desc">
                                    <p>地址：东莞市厚街家具大道209号</p>
                                    <p>营业时间：9：00-18：00</p>
                                </div>
                            </div>
                            <div class="experice_design_place_more">
                                <nuxt-link to="/experice/dg">了解更多 ></nuxt-link>
                            </div>
                        </div>
                    </div>
                    <ul class="experience_dot_nav">
                        <li class="experience_dot" v-for="(list,index) in experienceDot" :key="index" :class="{active: index == currentNum}" @click="tabIndex(index)" @mouseenter="stop" @mouseleave="go"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "expericeDesign",
    data (){
        return {
            currentNum: 0,
            experienceDot: ['','','',''],
            timer: ''
        }
    },
    created (){
        //在dom加载完成后下个tick中开始轮播
        this.$nextTick(()=>{
            this.timer = setInterval(() => {
                this.autoPlay()
            },3000)
        });
    },
    methods: {
        tabIndex (index){
            this.currentNum =index;
        },
        autoPlay (){
            let length = this.experienceDot.length;
            this.currentNum ++;
            if (this.currentNum > length-1) {
                this.currentNum = 0;
            }
        },
        go (){
            this.timer = setInterval(() => {this.autoPlay()},3000)
        },
        stop (){
            clearInterval (this.timer);
            this.timer = null;
        }
    }
}
</script>

<style scoped>
    /*For what design start*/
		div#experice_design {
		    width:  100%;
		    height:  auto;
		    background: #f9f9fa;
		}

		.experice_design_box {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding: 105px 0 150px;
		}

		.experice_design_title {
		    width: 100%;
		    height: auto;
		    padding-bottom: 55px;
		    text-align: center;
		}

		.experice_design_titleC {
		    overflow: hidden;
		    width: 100%;
		    height:  40px;
			color: #22202b;
		    font-size:  38px;
        	font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
        	font-weight: 900;
			line-height: 40px;
		}

		p.experice_design_titleE {
		    overflow: hidden;
		    width: 100%;
		    height: 36px;
		    color: #858585;
		    font-size: 14px;
		    line-height: 36px;
		}

		.experice_design_content_box {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		}

		.experice_design_place_container {
		    width: 100%;
		    height: auto;
		}

		.experience_tab_content {
		    overflow: hidden;
		    width: 100%;
		    height: 1066px;
		}

		.experience_tab_box {
		    overflow: hidden;
		    width: 100%;
		}

		.experience_tab_content .experience_tab_box:first-child {
		    display:  block;
		}

		.experice_design_place_box {
		    overflow:  hidden;
		    width:  100%;
		    height:  44px;
		}

		.experice_design_place {
		    float: left;
		    overflow:  hidden;
		    width:  200px;
		    height:  100%;
		    padding-left:  115px;
		    box-sizing:  border-box;
		    color:  #22202b;
		    font-size: 24px;
		    font-weight:  bold;
		    line-height: 44px;
		}

		.experice_design_place_line {
		    float:  left;
		    width:  600px;
		    height:  2px;
		    margin-top: 20px;
		    background: #d0d0d4;
		}

		.experice_design_place_intro {
		    float: left;
		    overflow:  hidden;
		    width: 400px;
		    height: 100%;
		    padding-left:  40px;
		    box-sizing:  border-box;
		    color:  #22202b;
		    font-size:  18px;
		    font-weight:  bold;
		    line-height:  44px;
		    text-align:  left;
		}

		.experice_design_place_desc {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding:  58px 0 70px;
		    text-align:  center;
		}

		p.experice_design_place_descC {
		    width:  100%;
		    height:  25px;
		    color:  #858585;
		    font-size: 14px;
		    font-weight:  bold;
		    line-height:  25px;
		}

		p.experice_design_place_descE {
		    width: 100%;
		    height: 23px;
		    color: #cccccc;
		    font-family: 黑体;
		    font-size: 12px;
		    line-height: 23px;
		}

		.experice_design_place_img_box {
		    width:  100%;
		}

		.experice_design_place_img {
		    overflow:  hidden;
		    width:  922px;
		    height:  530px;
		    margin:  0 auto;
		}

		.experice_design_place_img_desc {
		    overflow:  hidden;
		    width:  100%;
		    height:  183px;
		    padding-top:  72px;
		    box-sizing:  border-box;
		    color: #858585;
		    font-size: 14px;
		    line-height: 20px;
		    text-align:  center;
		}

		.experice_design_place_more {
		    width: 163px;
		    height: 40px;
		    margin:0 auto 87px;
		    border: 3px solid #000;
		    font-size: 14px;
		    line-height: 40px;
		    text-align: center;
			-webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.experice_design_place_more:hover{
			-webkit-transform: translateY(-5px);
			-ms-transform: translateY(-5px);
			-o-transform: translateY(-5px);
			transform: translateY(-5px);
		}

		.experice_design_place_more a {
		    display: block;
		    width: 100%;
		    height: 100%;
		    color: #22202b;
		    font-weight: bold;
		    -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
		}

		.experice_design_place_more:hover a {
		    background:  #22202b;
		    color: #feeabd;
		}

		ul.experience_dot_nav {
		    overflow:  hidden;
		    width:  100%;
		    height:  15px;
		    text-align:  center;
		}

		li.experience_dot {
		    display:  inline-block;
		    width:  15px;
		    height:  15px;
		    margin: 0px 8px;
		    background:  #858585;
		    border-radius:  50%;
		    cursor:  pointer;
		}

		li.experience_dot.active,li.experience_dot:hover {
		    background: #22202b;
		}
	/*For what design start*/
</style>


