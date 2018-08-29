<template>
    <section class="container">
        <!-- banner -->
      	<VBanner :bannerData="bannerData"></VBanner>
        <div id="job_content">
            <jobConTitle :headJobNav="$store.state.headJobNav"></jobConTitle>
        </div>
        <!-- job select start -->
        <div id="job_select_wrap">
            <div class="job_select_box clearfix">
                <!-- 左侧热门职位 -->
                <div class="job_select_left">
                    <jobHot :hotJobData="hotJobData" :classId="$route.params.classId"></jobHot>
                </div>
                <!-- 右侧筛选 -->
                <div class="job_select_right">               
                    <div class="job_select_head">
                        <div class="work_place">
                            <div class="work_place_title">工作地点：</div>
                            <div class="work_place_list_wrap">
                                <ul>
                                    <li class="work_place_list" @click="getJobSiteIdData(null)">
                                        <nuxt-link :to="{name: 'job-classId',params: {classId: $route.params.classId},query: {jobSiteId:null}}" :class="{active: null == $route.query.jobSiteId}">全部</nuxt-link>
                                    </li>
                                    <li class="work_place_list" v-for="(list,index) in workPlaceData" :key="index" @click="getJobSiteIdData(list.jobSiteId)">
                                        <nuxt-link :to="{name: 'job-classId',params: {classId: $route.params.classId},query: {jobSiteId: list.jobSiteId}}"  :class="{active: list.jobSiteId == $route.query.jobSiteId}">{{list.jobSiteName}}</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="job_kinds">
                            <div class="job_kinds_title">职位类别：</div>
                            <div class="job_kinds_list_wrap">
                                <ul>
                                    <li class="job_kinds_list" @click="getJobTypeIdData(null)">
                                        <nuxt-link :to="{name: 'job-classId',params: {classId: $route.params.classId},query: {jobSiteId: $route.query.jobSiteId,jobTypeId: null}}" :class="{active: null == $route.query.jobTypeId}">全部</nuxt-link>
                                    </li>
                                    <li class="job_kinds_list" v-for="(item,index) in jobKindsData" :key="index" @click="getJobTypeIdData(item.jobTypeId)">
                                        <nuxt-link :to="{name: 'job-classId',params: {classId: $route.params.classId},query: {jobSiteId: $route.query.jobSiteId,jobTypeId: item.jobTypeId}}" :class="{active: item.jobTypeId == $route.query.jobTypeId}">{{item.jobTypeName}}</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="job_select_show">
                        <div class="job_select_show_box">
                            <div class="empty_box" v-if="!total">
                                <p class="empty">Sorry,该条件下暂时没有该职位哟O(∩_∩)O~</p>
                            </div>
                            <div class="job_select_show_content" v-if="total">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="job_show_name">
                                                <div>职位名称</div>
                                            </th>
                                            <th class="job_show_kinds">
                                                <div>职位类别</div>
                                            </th>
                                            <th class="job_show_place">
                                                <div>工作地点</div>
                                            </th>
                                            <th class="job_show_time">
                                                <div>发布时间</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(list,index) in jobListData.list" :key="index">
                                            <td class="job_name">
                                                <nuxt-link :to="{name: 'job-jobView-id',params: {id: list.jobId},query: {classId: list.jobClass.jobClassId,jobSiteId: list.jobSite.jobSiteId,jobTypeId: list.jobType.jobTypeId}}">
                                                    {{list.jobName}}
                                                    <span class="hot-tip" v-show="list.isHot"></span>
                                                </nuxt-link>
                                            </td>
                                            <td>{{list.jobType.jobTypeName}}</td>
                                            <td>{{list.jobSite.jobSiteName}}</td>
                                            <td>{{list.jobAddTime}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="job_select_pagination" v-if="total">
                        <pagination :total="total" :display="display" :current-page='current' @pagechange="pagechange"></pagination>
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
	import qs from 'qs'
    import pagination from '~/components/common/pagination.vue'
    
    export default {
        data (){
            return {
                jobClassId: this.$route.params.classId,
                jobSiteId: this.$route.query.jobSiteId,
                jobTypeId: this.$route.query.jobTypeId,

                display: 10,   // 每页显示条数
                current: 1    // 当前的页数 
            }
        },
        components: {
            VBanner,
            jobConTitle,
            jobHot,
            pagination
        },
        methods: {
            getJobSiteIdData (jobSiteId){
                this.jobSiteId = jobSiteId;
				let dataJson = qs.stringify({
					jobClassId: this.jobClassId,
                    jobSiteId: this.jobSiteId,
                    jobTypeId: null
                });
                console.log(dataJson)
				axios.post(`${this.$store.state.wordpressAPIForJob}/job/getJobMsg/1/10`,dataJson).then((response) => {
					this.jobListData = response.data;
					this.total = response.data.total;
				}).catch((error) => {
					console.log(error)
				})
			},
            getJobTypeIdData (jobTypeId){
                this.jobTypeId = jobTypeId;
				let dataJson = qs.stringify({
					jobClassId: this.jobClassId,
                    jobSiteId: this.jobSiteId,
                    jobTypeId: this.jobTypeId
                });
                console.log(dataJson)
                
				axios.post(`${this.$store.state.wordpressAPIForJob}/job/getJobMsg/1/10`,dataJson).then((response) => {
					this.jobListData = response.data;
					this.total = response.data.total;
				}).catch((error) => {
					console.log(error)
				})
			},
            pagechange (currentPage){
            	let dataJson = qs.stringify({
                    jobClassId : this.jobClassId,
                    jobSiteId: this.jobSiteId,
                    jobTypeId: this.jobTypeId
				});
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		        axios.post(`${this.$store.state.wordpressAPIForJob}/job/getJobMsg/${currentPage}/10`,dataJson)
		                .then((response)=> {
							this.jobListData = response.data;
							this.total = response.data.total;
							
		                })
		                .catch(function (error) {
		                 	console.log(error);
		                });
		    }
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
            let hotJobData = await axios(`${store.state.wordpressAPIForJob}/job/getHot/${params.classId}`);

            //筛选头部工作地点
            let workPlaceData = await axios(`${store.state.wordpressAPIForJob}/jobSite/getAll`);
            //筛选头部职位类别
            let jobKindsData = await axios(`${store.state.wordpressAPIForJob}/jobType/getAll`);

            //筛选内容数据
            let dataJson = qs.stringify({
                    jobClassId : params.classId,
                    jobSiteId: query.jobSiteId,
                    jobTypeId: query.jobTypeId
                });
            let jobListData = await axios.post(`${store.state.wordpressAPIForJob}/job/getJobMsg/1/10`,dataJson);

            return {
                bannerData: banner.data,
                hotJobData: hotJobData.data,
                workPlaceData: workPlaceData.data, 
                jobKindsData: jobKindsData.data,
                jobListData: jobListData.data,
                total: jobListData.data.total
			}
        }
    }
</script>

<style scoped>
    /* job select start */
        div#job_select_wrap {
            width:  100%;
        }

        .job_select_box {
            width: 1200px;
            height:  auto;
            margin:  0 auto;
            padding-top: 75px;
        }

        .job_select_left {
            float:  left;
            overflow:  hidden;
            width:  200px;
            height:  auto;
            padding-bottom: 150px;
        }

        .job_select_right {
            float:  right;
            overflow:  hidden;
            width:  1000px;
            height:  auto;
            padding-bottom: 150px;
            padding-left: 55px;
            box-sizing: border-box;
        }
    /* job select end */
    /* job select head start */
        .job_select_head {
            overflow:  hidden;
            width:  100%;
            height:  auto;
            padding-bottom:  10px;
            border-bottom: 2px solid #e5e5e5;
        }

        .work_place {
            overflow:  hidden;
            width:  100%;
        }

        .work_place_title {
            float:  left;
            width: 104px;
            color:  #22202b;
            font-size:  14px;
            font-weight:  bold;
            text-align:  right;
            line-height: 44px;
        }

        .work_place_list_wrap {
            float: left;
            width:  840px;
        }

        .work_place_list_wrap ul {
            overflow:  hidden;
        }

        li.work_place_list {
            display:  inline-block;
            margin: 2px;
        }

        li.work_place_list a {
            display:  block;
            height:  40px;
            padding:  0 25px;
            border: 3px solid transparent;
            box-sizing:  border-box;
            color: #858585;
            font-size:  14px;
            line-height: 34px;
            text-align:  center;
            -webkit-transition: all 0.5s ease;
            -o-transition: all 0.5s ease;
            transition: all 0.5s ease;
        }

        li.work_place_list a:hover, li.work_place_list a.active{
            border: 3px solid #000;
            color: #000;
        }

        .job_kinds {
            overflow: hidden;
            width: 100%;
        }

        .job_kinds_title {
            float: left;
            width: 104px;
            color: #22202b;
            font-size: 14px;
            font-weight: bold;
            text-align: right;
            line-height: 44px;
        }

        .job_kinds_list_wrap {
            float: left;
            width: 840px;
        }

        .job_kinds_list_wrap ul {
            overflow: hidden;
        }

        li.job_kinds_list {
            display: inline-block;
            margin: 2px;
        }

        li.job_kinds_list a {
            display: block;
            height: 40px;
            padding: 0 25px;
            border: 3px solid transparent;
            box-sizing: border-box;
            color: #858585;
            font-size: 14px;
            line-height: 34px;
            text-align: center;
            -webkit-transition: all 0.5s ease;
            -o-transition: all 0.5s ease;
            transition: all 0.5s ease;
        }

        li.job_kinds_list a:hover,li.job_kinds_list a.active {
            border: 3px solid #000;
            color: #000;
        }
    /* job select head end */
    /* job select show start */
        .job_select_show {
            overflow:  hidden;
            width:  100%;
            padding: 50px 0;
            box-sizing: border-box;
        }

        .job_select_show_box {
            width: 100%;
        }

        .empty_box {
            overflow: hidden;
            -moz-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        .empty {
            margin: 20px;
        }

        .job_select_show_content {
            width: 100%;
        }

        .job_select_show_content table {
            width: 100%;
            color: #858585;
        }

        .job_select_show_content table tr {
            height: 43px;
            line-height: 43px;
            text-align: center;
        }

        .job_select_show_content thead th {
            height: 50px;
            background: #f7f7f7;
            color:  #22202b;
            font-size:  18px;
            font-weight:  bold;
        }

        th.job_show_name {
            width:  310px;
            padding-left:  35px;
            text-align:  left;
        }

        th.job_show_kinds {
            width: 190px;
        }

        th.job_show_place {
            width: 220px;
        }

        th.job_show_time {
            width: 190px;
        }

        .job_select_show_content tbody tr {
            border-bottom: 2px solid #e5e5e5;
        }

        td.job_name {
            padding-left:  35px;
            text-align:  left;
        }

        td.job_name a {
            color: #858585;
        }

        span.hot-tip {
            display: inline-block;
            width: 31px;
            height: 14px;
            margin-left: 5px;
            background: url(https://img03.mifile.cn/webfile/images/2013/hr/hr-icon.png) -49px 0 no-repeat;
        }

        .job_select_show_content tbody tr:hover {
            color: #22202b;
            background: #f7f7f7;
        }

        .job_select_show_content tbody tr:hover td.job_name a {
            color: #22202b;
        }
    /* job select show end */
    /*job select pagination end*/
        .job_select_pagination {
            width:  100%;
            text-align:  center;
        }
    /*job select pagination end*/
</style>


