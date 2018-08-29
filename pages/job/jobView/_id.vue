<template>
    <section class="container">
        <!-- banner -->
      	<VBanner :bannerData="bannerData"></VBanner>
        <div id="job_content">
            <jobConTitle :headJobNav="$store.state.headJobNav"></jobConTitle>
        </div>
        <!-- job select start -->
        <div id="job_view_wrap">
            <div class="job_view_box clearfix">
                <!-- 左侧热门职位 -->
                <div class="job_view_left">
                    <jobHot :hotJobData="hotJobData" :classId="$route.query.classId"></jobHot>
                </div>
                <!-- 右侧筛选 -->
                <div class="job_view_right">
                    <jobSelectHead :workPlaceData="workPlaceData" :jobKindsData="jobKindsData"></jobSelectHead>
                    <div class="job_view_details">
                        <h2>职位名称：	{{jobViewData.jobName}}</h2>
                        <p>工作地点：	{{jobViewData.jobSite.jobSiteName}}</p>
                        <p>职位类别：	{{jobViewData.jobType.jobTypeName}}</p>
                        <br>
                        <h2>工作职责：</h2>	
                        <p v-html="jobViewData.jobDuty"></p>
                        <br>
                        <h2>招聘要求</h2>
                        <p v-html="jobViewData.jobRequire"></p>	
                        <br>
                        <h2>薪资待遇</h2>
                        <p>{{jobViewData.jobSalary}}</p>
                        
                    </div>
                    <div class="job_emails">
                        <a href="mailto:job@visney.cn" target="_blank">简历发送到邮箱:{{jobViewData.jobContact}}</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- job select end -->
    </section>
</template>

<script>
    import axios from 'axios'
    import VBanner from '~/components/home/banner'
    import jobConTitle from '~/components/job/jobConTitle'
    import jobHot from '~/components/job/jobHot'
    import jobSelectHead from '~/components/job/jobSelectHead'
    
    export default {
        data (){
            return {}
        },
        components: {
            VBanner,
            jobConTitle,
            jobHot,
            jobSelectHead
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
        async asyncData ({params,query,store}){
            
            //banner数据动态获取
            let banner = await axios(`${store.state.wordpressAPIForJob}/jobBanner/getAll`);
            //热门职位
            let hotJobData = await axios(`${store.state.wordpressAPIForJob}/job/getHot/${query.classId}`);
            //筛选头部工作地点
            let workPlaceData = await axios(`${store.state.wordpressAPIForJob}/jobSite/getAll`);
            //筛选头部职位类别
            let jobKindsData = await axios(`${store.state.wordpressAPIForJob}/jobType/getAll`);
            //职位详情
            let jobViewData = await axios(`${store.state.wordpressAPIForJob}/job/getJobById/${params.id}`)
            return {
                bannerData: banner.data,
                hotJobData: hotJobData.data,
                workPlaceData: workPlaceData.data,
                jobKindsData: jobKindsData.data,
                jobViewData: jobViewData.data
			}
        }
    }
</script>

<style scoped>
    /* job view start */
        div#job_view_wrap {
            width:  100%;
        }

        .job_view_box {
            width: 1200px;
            height:  auto;
            margin:  0 auto;
            padding-top: 75px;
        }

        .job_view_left {
            float:  left;
            overflow:  hidden;
            width:  200px;
            height:  auto;
            padding-bottom: 150px;
        }

        .job_view_right {
            float:  right;
            overflow:  hidden;
            width:  1000px;
            height:  auto;
            padding-bottom: 190px;
            padding-left: 55px;
            box-sizing: border-box;
        }

        .job_view_details {
            overflow: hidden;
            width: 100%;
            height: auto;
            padding: 26px 0 26px 130px;
            box-sizing: border-box;
            color: #858585;
            font-size: 14px;
            line-height: 36px;
            text-align: left;
        }

        .job_emails {
            padding-left: 130px;
        }

        .job_emails a {
            display: inline-block;
            height:  36px;
            padding:  0 20px;
            background:  #22202b;
            color:  #ffe9c0;
            font-size:  14px;
            line-height:  36px;
            text-align:  center;
        }
    /* job view end */
</style>



