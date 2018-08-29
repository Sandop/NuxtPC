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
                    <!-- <jobHot :hotJobData="hotJobData" :classId="$route.query.classId"></jobHot> -->
                    <div>
                        <div class="job_hot">
                            <div class="job_hot_title">
                                <h2>热门招聘职位</h2>
                            </div>
                            <div class="job_hot_box">
                                <ul>
                                    <li class="job_hot_list" v-for="(list,index) in hotJobData" :key="index">
                                        <div class="job_hot_name">
                                            <nuxt-link :to="{name: 'job-jobView-id',params: {id: list.jobId},query: {classId: list.jobClass.jobClassId,jobSiteId: list.jobSite.jobSiteId,jobTypeId: list.jobType.jobTypeId}}">{{list.jobName}}</nuxt-link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="job_search">
                            <div class="job_search_title">
                                <h2>职位搜索</h2>
                            </div>
                            <div class="job_search_con">
                                <div class="job_search">
                                    <input type="text" name="" placeholder="请输入关键字" v-model="searchMessage">
                                </div>
                                <div class="job_search_btn" @click="getSearchData()"><nuxt-link :to="{name: 'job-search',query: {search: this.searchMessage,classId: jobClassId}}">搜索</nuxt-link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右侧筛选 -->
                <div class="job_select_right">               
                    <jobSelectHead :workPlaceData="workPlaceData" :jobKindsData="jobKindsData"></jobSelectHead>
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
    import jobSelectHead from '~/components/job/jobSelectHead'
    import pagination from '~/components/common/pagination.vue'
    
    export default {
        data (){
            return {
                searchMessage: '',
                search  : this.$route.query.search,
                jobClassId : this.$route.query.classId,

                display: 10,   // 每页显示条数
                current: 1    // 当前的页数 
            }
        },
        components: {
            VBanner,
            jobConTitle,
            jobHot,
            jobSelectHead,
            pagination
        },
        methods: {
            getSearchData (){
                let dataJson = qs.stringify({
                    search   : this.$route.query.search,
                    jobClassId : this.$route.query.classId ,
                });
                console.log(2);
                console.log(dataJson);
                
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		        axios.post(`${this.$store.state.wordpressAPIForJob}/job/search/1/10`,dataJson)
		                .then((response)=> {
							this.jobListData = response.data;
							this.total = response.data.total;
							console.log(this.jobListData)
		                })
		                .catch(function (error) {
		                 	console.log(error);
		                });
            },
            pagechange (currentPage){
            	let dataJson = qs.stringify({
                    search   : this.search,
                    jobClassId : this.classId ,
				});
		       // ajax请求, 向后台发送 currentPage, 来获取对应的数据
		        axios.post(`${this.$store.state.wordpressAPIForJob}/job/search/${currentPage}/10`,dataJson)
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
				title: '职位搜索',
				meta: [
					{name: 'keywords',hid: 'keywords',content:'职位搜索'},
					{name:'description',hid:'description',content:'职位搜索'}
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

            //筛选内容数据
            let dataJson = qs.stringify({
                    search: query.search,
                    jobClassId : query.classId ,
                });
            let jobListData = await axios.post(`${store.state.wordpressAPIForJob}/job/search/1/10`,dataJson);

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
    .job_hot {
        width:  100%;
    }

    .job_hot_title {
        overflow:  hidden;
        width:  100%;
        height:  52px;
        padding-left: 20px;
        box-sizing:  border-box;
        border-top: 2px solid #e5e5e5;
        border-bottom: 2px solid #e5e5e5;
        color:  #22202b;
        font-size:  18px;
        line-height:  48px;
        text-align: left;
    }

    .job_hot_box {
        width:  100%;
        height:  auto;
        padding: 34px 0 22px 34px;
        box-sizing:  border-box;
    }

    li.job_hot_list {
        position:  relative;
        width:  100%;
        height: 48px;
    }

    .job_hot_name {
        width:  100%;
        height:  100%;
    }

    .job_hot_name a {
        display:  block;
        overflow:  hidden;
        width:  100%;
        height:  100%;
        color:  #858585;
        font-size:  14px;
        line-height:  48px;
        text-align:  left;
        text-overflow:  ellipsis;
        white-space:  nowrap;
    }

    .job_hot_name a:hover {
        color: #22202b;
    }

    li.job_hot_list::after {
        content: '';
        position:  absolute;
        top: 50%;
        left: -8px;
        width:  2px;
        height:  2px;
        margin-top: -1px;
        background:  #858585;
        border-radius: 50%;
    }

    .job_search {
        width: 100%;
    }

    .job_search_title {
        overflow: hidden;
        width: 100%;
        height: 52px;
        padding-left: 20px;
        box-sizing: border-box;
        border-top: 2px solid #e5e5e5;
        border-bottom: 2px solid #e5e5e5;
        color: #22202b;
        font-size: 18px;
        line-height: 48px;
        text-align: left;
    }

    .job_search_con {
        overflow:  hidden;
        width:  100%;
        height:  auto;
        padding: 33px 0 0 10px;
    }

    .job_search {
        overflow: hidden;
        width: 100%;
        height: auto;
        padding-left: 9px;
        padding-bottom: 11px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .job_search input {
        overflow: hidden;
        width: 172px;
        height: 36px;
        padding-left: 8px;
        border: 2px solid #e5e5e5;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #858585;
        font-size: 14px;
        line-height: 32px;
        text-align: left;
        outline: none;
    }

    .job_search_btn {
        overflow: hidden;
        width: 82px;
        height: 36px;
        margin-left: 10px;
        background: #22202b;
        color: #ffe9c0;
        font-size: 14px;
        line-height: 36px;
        text-align: center;
        cursor: pointer;
    }
    .job_search_btn a {
        display: block;
        width: 100%;
        height: 100%;
        color: #ffe9c0;
    }
    /*job select pagination end*/
        .job_select_pagination {
            width:  100%;
            text-align:  center;
        }
    /*job select pagination end*/
</style>


