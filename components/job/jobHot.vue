<template>
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
                <div class="job_search_btn"><nuxt-link :to="{name: 'job-search',query: {search: this.searchMessage,classId: classId}}">搜索</nuxt-link></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
       name: 'jobHot' ,
       data (){
           return {
               searchMessage:''
           }
       },
       props: {
           hotJobData: Array,
           classId: String
       }
    }
</script>
<style>
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
</style>


