<template>
    <div class="job_select_head">
        <div class="work_place">
            <div class="work_place_title">工作地点：</div>
            <div class="work_place_list_wrap">
                <ul>
                    <li class="work_place_list">
                        <nuxt-link :to="{name: 'job-classId',params: {classId: $route.query.classId},query: {jobSiteId:null}}" :class="{active: null == $route.query.jobSiteId}">全部</nuxt-link>
                    </li>
                    <li class="work_place_list" v-for="(list,index) in workPlaceData" :key="index">
                        <nuxt-link :to="{name: 'job-classId',params: {classId: $route.query.classId},query: {jobSiteId: list.jobSiteId}}"  :class="{active: list.jobSiteId == $route.query.jobSiteId}">{{list.jobSiteName}}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="job_kinds">
            <div class="job_kinds_title">职位类别：</div>
            <div class="job_kinds_list_wrap">
                <ul>
                    <li class="job_kinds_list">
                        <nuxt-link :to="{name: 'job-classId',params: {classId: $route.query.classId},query: {jobSiteId: $route.query.jobSiteId,kindsId: null}}" :class="{active: null == $route.query.jobTypeId}">全部</nuxt-link>
                    </li>
                    <li class="job_kinds_list" v-for="(item,index) in jobKindsData" :key="index">
                        <nuxt-link :to="{name: 'job-classId',params: {classId: $route.query.classId},query: {jobSiteId: $route.query.jobSiteId,jobTypeId: item.jobTypeId}}" :class="{active: item.jobTypeId == $route.query.jobTypeId}">{{item.jobTypeName}}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
	import qs from 'qs'
	import axios from 'axios'

    export default {
        name: 'jobSelectHead',
        props: {
            workPlaceData: Array,
            jobKindsData: Array,
        }
    }
</script>
<style scoped>
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
</style>


