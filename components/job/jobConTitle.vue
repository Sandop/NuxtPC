<template>
    <div class="job_con_title">
        <div class="job_con_title_left">
            <div>
                <ul class="job_nav_class">
                    <li class="job_list_kind" v-for="(list,index) in headJobNav" :key="index">
                        <nuxt-link target="_blank" :to="{name: 'job-classId',params: {classId: list.jobClassId}}" :class="{active: (index + 1) == ($route.params.classId || $route.query.classId)}">{{list.jobClassName}}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="job_con_title_right">
            <div id="bread-nav">
                <div class="brand-nav-box">
                    <div class="brand-nav-content">
                        <div class="brand-nav-title"><span>当前位置:</span></div>
                        <div class="brand-nav-list">
                            <ul>
                                <li><nuxt-link target="_blank" to="/">首页</nuxt-link></li>
                                <li>></li>
                                <li><nuxt-link target="_blank" to="/job">招聘中心</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'jobConTitle',
        props: {
            headJobNav: Array
        }
    }
</script>
<style scoped>
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

    ul.job_nav_class {
        width:  100%;
    }

    li.job_list_kind {
        display:  inline-block;
        width:  103px;
        height:  40px;
        margin-right:  20px;
        box-sizing:  border-box;
    }

    li.job_list_kind a {
        display:  block;
        overflow:  hidden;
        width:  100%;
        height:  100%;
        border: 3px solid transparent;
        box-sizing:  border-box;
        color:  #000;
        font-size:  14px;
        text-align:  center;
        line-height: 34px;
        -moz-transition: all 0.5s ease;
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    li.job_list_kind a:hover,.job_list_kind a.active {
        border: 3px solid #000;
    }
    /*面包屑部分*/
		div#bread-nav {
		    width:  100%;
		    height:  100%;
		}

		#bread-nav .brand-nav-content{
		    float: right;
		}

		.brand-nav-box {
		    width:  100%;
		    color:  #858585;
		    font-size: 14px;
		    text-align:  left;
		    line-height: 40px;
		}

		.brand-nav-title {
		    float:  left;
		}

		.brand-nav-list {
		    float:  left;
		    overflow:  hidden;
		}

		.brand-nav-list ul {
		    overflow: hidden;
		}

		.brand-nav-list ul li {
		    float:  left;
		    padding: 0 5px;
		}

		.brand-nav-list ul li a {
		    display:  block;
		    width:  100%;
		    height:  100%;
		    color: #858585;
		}

		.brand-nav-list ul li:last-child a {
		    color: #22202b;
		}

		.brand-nav-list ul li a:hover {
		    color: #22202b;
		}
	/*面包屑部分结束*/
</style>


