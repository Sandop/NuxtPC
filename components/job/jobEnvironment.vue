<template>
    <div id="job_environment">
        <div class="job_environment_wrap">
            <div class="job_environment_title">
                <div class="job_environment_titleC">
                    <h2>公司环境</h2>
                </div>
                <p class="job_environment_titleE">Company environment</p>
            </div>
            <div class="job_environment_content_box">
                <div class="job_environment_container">
                    <div class="job_environment_content">
                        <div class="job_environment_box" v-for="(list,index) in jobEnvData" :key="index" v-show="currentNum == index" @mouseenter="stop" @mouseleave="go">
                            <div class="job_environment_img">
                                <img :src="list.envBannerSrc" alt="">
                            </div>
                            <div class="job_environment_box_title">
                                <p class="job_environment_box_titleC">{{list.envBannerTitle}}</p>
                                <p class="job_environment_box_titleE">{{list.envBannerEnglishTitle}}</p>
                            </div>
                            <div class="job_environment_box_desc">
                               <p v-html="list.envBannerDescription"></p> 
                            </div>
                        </div>
                    </div>
                    <ul class="job_environment_dot_nav">
                        <li class="job_environment_dot" v-for="(list,index) in jobEnvData" :key="index" :class="{active: index == currentNum}" @click="tabIndex(index)" @mouseenter="stop" @mouseleave="go"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "jobEnvironment",
        data (){
            return {
                currentNum: 0,
                timer: ''
            }
        },
        props: {
            jobEnvData: Array
        },
        created (){
            //在dom加载完成后下个tick中开始轮播
            this.$nextTick(()=>{
                this.timer = setInterval(() => {
                    this.autoPlay()
                },2000)
            });
        },
        methods: {
            tabIndex (index){
                this.currentNum =index;
            },
            autoPlay (){
                let length = this.jobEnvData.length;
                this.currentNum ++;
                if (this.currentNum > length-1) {
                    this.currentNum = 0;
                }
            },
            go (){
                this.timer = setInterval(() => {this.autoPlay()},2000)
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
		div#job_environment {
		    width:  100%;
		    height:  auto;
		}

		.job_environment_wrap {
		    overflow:  hidden;
		    width:  1200px;
		    height:  auto;
		    margin:  0 auto;
		    padding: 0 0 150px;
		}

		.job_environment_title {
		    width: 100%;
		    height: auto;
		    padding-bottom: 67px;
		    text-align: center;
		}

		.job_environment_titleC {
		    overflow: hidden;
		    width: 100%;
		    height: 41px;
		}

        .job_environment_titleC h2 {
			font-size:  40px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 41px;
		}

		p.job_environment_titleE {
		    overflow: hidden;
		    width: 100%;
		    height: 36px;
		    color: #858585;
		    font-size: 14px;
		    line-height: 36px;
		}

		.job_environment_content_box {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		}

		.job_environment_container {
		    width: 100%;
		    height: auto;
		}

		.job_environment_content {
		    overflow: hidden;
		    width: 100%;
		    height: 732px;
		}

		.job_environment_box {
		    overflow: hidden;
		    width: 100%;
		}

        .job_environment_img {
            overflow:  hidden;
            width:  1080px;
            height:  496px;
            margin:  0 auto;
        }

        .job_environment_img img {
            width:  100%;
            height: 100%;
        }

        .job_environment_box_title {
            overflow:  hidden;
            width:  100%;
            height:  auto;
            padding: 60px 0 14px;
            text-align:  center;
        }

        p.job_environment_box_titleC {
            width:  100%;
            height:  36px;
            color:  #000000;
            font-size:  24px;
            font-weight:  bold;
            line-height: 36px;
        }

        p.job_environment_box_titleE {
            width:  100%;
            height:  20px;
            color:  #cccccc;
            font-size:  12px;
            line-height:  20px;
        }

        .job_environment_box_desc {
            width:  100%;
            height: 107px;
            color:  #858585;
            font-size:  14px;
            line-height:  24px;
            text-align:  center;
        }
		
		ul.job_environment_dot_nav {
		    overflow:  hidden;
		    width:  100%;
		    height:  15px;
		    text-align:  center;
		}

		li.job_environment_dot {
		    display:  inline-block;
		    width:  15px;
		    height:  15px;
		    margin: 0px 8px;
		    background:  #858585;
		    border-radius:  50%;
		    cursor:  pointer;
		}

		li.job_environment_dot.active,li.job_environment_dot:hover {
		    background: #22202b;
		}
	/*For what design start*/
</style>


