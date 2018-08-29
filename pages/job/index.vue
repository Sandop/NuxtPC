<template>
    <section class="container">
        <!-- banner -->
      	<VBanner :bannerData="bannerData"></VBanner>
        <div id="job_content">
            <!-- job title start -->
            <jobConTitle :headJobNav="$store.state.headJobNav"></jobConTitle>
            <!-- job title end -->
            <!-- visney advantage start -->
            <div class="job_advantage">
                <div class="job_advantage_wrap">
                    <ul>
                        <li class="job_advantage_list">
                            <div class="job_advantage_list_title">
                                <div class="job_advantage_list_titleC">
                                    <h3>在卫诗理工作</h3>
                                </div>
                                <div class="job_advantage_list_titleE">
                                    <p>In visney work</p>
                                </div>
                            </div>
                            <div class="job_advantage_list_desc">
                                <p>5000平方办公区域外加超优美的户外环境，与帅哥美女一起工作，每天都有好心情！拥有特色休闲区，小酒吧坐收馆内，不再是别人家的公司。</p>
                            </div>
                        </li>
                        <li class="job_advantage_list">
                            <div class="job_advantage_list_title">
                                <div class="job_advantage_list_titleC">
                                    <h3>在卫诗理生活</h3>
                                </div>
                                <div class="job_advantage_list_titleE">
                                    <p>In visney life</p>
                                </div>
                            </div>
                            <div class="job_advantage_list_desc">
                                <p>五险一金，全勤奖、话费、住房、餐厅，户外拓展、员工生日会、节假日礼物、年终奖、免费体检、员工旅游、父母津贴，更多的福利等你来发掘。</p>
                            </div>
                        </li>
                        <li class="job_advantage_list">
                            <div class="job_advantage_list_title">
                                <div class="job_advantage_list_titleC">
                                    <h3>在卫诗理成长</h3>
                                </div>
                                <div class="job_advantage_list_titleE">
                                    <p>Growing up in visney</p>
                                </div>
                            </div>
                            <div class="job_advantage_list_desc">
                                <p>规范的职等职级制度，晋升通道一目了然，每半年一次加薪机会，我们从不论资排辈，只要有才，就会重用。</p>
                            </div>
                        </li>
                        <li class="job_advantage_list">
                            <div class="job_advantage_list_title">
                                <div class="job_advantage_list_titleC">
                                    <h3>在卫诗理实现梦想</h3>
                                </div>
                                <div class="job_advantage_list_titleE">
                                    <p>Realizing the dream in visney</p>
                                </div>
                            </div>
                            <div class="job_advantage_list_desc">
                                <p>满1年的优秀员工就有资格成为B类股东，有核心技术和突出贡献的员工5年后更有机会成为企业A类合伙人，享受企业原始股和股份。</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <!-- visney advantage end -->
            <!-- find job start -->
            <div id="find_job">
                <div class="find_job_wrap">
                    <div class="find_job_title">
                        <div class="find_job_titleC">
                            <h2>找到适合你的职位</h2>
                        </div>
                        <div class="find_job_titleE">
                            <p>Find the right position for you</p>
                        </div>
                    </div>
                    <div class="find_job_content">
                        <ul>
                            <li class="find_job_list" v-for="(list,index) in findJobListData" :key="index">
                                <div class="find_job_list_img">
                                    <nuxt-link target="_blank" :to="{name: 'job-classId',params: {classId: 1},query: {jobTypeId: list.jobTypeId}}">
                                        <img :src="list.jobImgSrc" alt="">
                                    </nuxt-link>
                                </div>
                                <div class="find_job_list_title">
                                    <nuxt-link target="_blank" :to="{name: 'job-classId',params: {classId: 1},query: {jobTypeId: list.jobTypeId}}">
                                        <h3>{{list.jobTypeName}}</h3>
                                    </nuxt-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="find_job_more">
                        <nuxt-link target="_blank" :to="{name: 'job-classId',params: {classId: 1}}">浏览更多职位</nuxt-link>
                    </div>
                </div>
            </div>
            <!-- find job end -->
            <!-- Company Environment -->
            <jobEnvironment :jobEnvData="jobEnvData"></jobEnvironment>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    import VBanner from '~/components/home/banner'
    import jobConTitle from '~/components/job/jobConTitle'
    import jobEnvironment from '~/components/job/jobEnvironment'

    
    export default {
        data (){
            return {}
        },
        components: {
            VBanner,
            jobConTitle,
            jobEnvironment
        },
        head (){
			return {
				title: '招聘中心',
				meta: [
					{name: 'keywords',hid: 'keywords',content:'招聘中心'},
					{name:'description',hid:'description',content:'招聘中心'}
				]
			}
        },
        async asyncData ({params,store}){
            
            //banner数据动态获取
            let banner = await axios(`${store.state.wordpressAPIForJob}/jobBanner/getAll`);
            //适合职位信息
            let findJobListData = await axios(`${store.state.wordpressAPIForJob}/jobType/getAllShowImg`);

            //工作环境
            let jobEnvData = await axios(`${store.state.wordpressAPIForJob}/envBanner/getAll`);
            
            return {
                bannerData: banner.data,
                findJobListData: findJobListData.data,
                jobEnvData: jobEnvData.data
			}
        }
    }
</script>

<style scoped>
    /* 内容头部导航及面包屑 */
        div#job_content {
            overflow:  hidden;
            width: 100%;
        }

        .job_con_title {
            overflow:  hidden;
            width:  1200px;
            height:  150px;
            margin:  0 auto;
            border-bottom: 2px solid #d5d5d8;
        }

        .job_con_title_left {
            float:  left;
            width: 700px;
            margin-top: 55px;
        }

        .job_con_title_right {
            float:  right;
            width: 500px;
            height: 40px;
            margin-top: 55px;
        }
    /* visney advantage */
        .job_advantage {
            overflow:  hidden;
            width:  100%;
        }

        .job_advantage_wrap {
            width:  1200px;
            height:  auto;
            margin: 145px auto 0;
            padding-bottom: 90px;
        }

        .job_advantage_wrap ul {
            overflow:  hidden;
        }

        li.job_advantage_list {
            float:  left;
            overflow:  hidden;
            width: 200px;
            height:  auto;
            margin-left: 130px;
        }

        .job_advantage_wrap ul li:first-child {
            margin-left: 0;
        }

        .job_advantage_list_title {
            width:  100%;
        }

        .job_advantage_list_titleC {
            overflow:  hidden;
            width:  100%;
            height:  34px;
            color:  #000;
            font-size:  24px;
            text-align:  center;
            line-height: 34px;
        }

        .job_advantage_list_titleE {
            overflow:  hidden;
            width:  100%;
            height:  22px;
            color:  #cccccc;
            font-size:  12px;
            line-height:  22px;
            text-align:  center;
        }
        .job_advantage_list_desc {
            overflow: hidden;
            width: 100%;
            height: auto;
            padding-top: 15px;
            color: #858585;
            font-size: 14px;
            line-height: 18px;
            text-align: left;
        }
    /* find job */
        div#find_job {
            overflow:  hidden;
            width: 100%;
            padding-bottom: 150px;
        }

        .find_job_wrap {
            width:  1200px;
            margin:  0 auto;
            padding-top: 72px;
        }

        .find_job_title {
            overflow:  hidden;
            width:  100%;
            text-align:  center;
        }

        .find_job_titleC {
            width:  100%;
            height:  41px;
        }

        .find_job_titleC h2 {
			font-size:  40px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
			color: #22202b;
			line-height: 41px;
		}

        .find_job_titleE {
            width:  100%;
            height:  36px;
            color:  #858585;
            font-size:  14px;
            line-height:  36px;
        }

        .find_job_content {
            overflow:  hidden;
            width:  100%;
            height:  auto;
            padding-top: 80px;
        }

        .find_job_content ul {
            overflow:  hidden;
        }

        li.find_job_list {
            float:  left;
            overflow:  hidden;
            width: 267px;
            height:  414px;
            margin: 21px 16px 0;
        }

        .find_job_list_img {
            overflow:  hidden;
            width:  100%;
            height: 358px;
        }

        .find_job_list_img a {
            display:  block;
            width:  100%;
            height:  100%;
        }

        .find_job_list_img a img {
            width:  100%;
            height:  100%;
        }

        .find_job_list_title {
            overflow:  hidden;
            width:  100%;
            height:  57px;
            font-size:  18px;
            line-height:  57px;
            text-align:  center;
        }

        .find_job_list_title a {
            color:  #000000;
        }

        .find_job_more {
            width: 100%;
            margin-top: 44px;
            text-align: center;
        }

        .find_job_more a{
            display: inline-block;
            width: 193px;
            height: 40px;
            border: 3px solid #000;
            box-sizing: border-box;
            color: #22202b;
            font-size: 14px;
            line-height: 34px;
            -webkit-transition: all 0.5s ease;
		    -o-transition: all 0.5s ease;
		    transition: all 0.5s ease;
        }

        .find_job_more a:hover {
            background:  #22202b;
		    color: #feeabd;
            -webkit-transform: translateY(-5px);
		    -ms-transform: translateY(-5px);
		    -o-transform: translateY(-5px);
		    transform: translateY(-5px);
        }

</style>


