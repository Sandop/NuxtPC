<template>
    <div class="prod-link-box">
        <div class="prod-link-room" v-for="(list,index) in $store.state.headProdNav" :key="list.proCategoryId" @click="showHidenFn(index)" v-if="index<4">
            <div class="prod-link-title">
                <span class="prod-link-title-word"><h2>{{list.proCategoryName}}</h2></span>
                <span class="prod-link-mark">
                    <span v-show="isShow"></span>
                    <span class="prod-link-minus" v-show="showHidenChange[index]">-</span>
                    <span class="prod-link-add" v-show="!showHidenChange[index]">+</span>
                </span>
            </div>
            <div class="prod-link-list-box" v-show="showHidenChange[index]">
                <ul>
                    <li class="prod-link-list" v-for="item in $store.state.headProdNav[index].children" :key="item.proCategoryId">
                        <nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: list.proCategoryId},query: {classId: item.proCategoryId}}">
                            <span>·</span><h3 class="prod-link-cont">{{item.proCategoryName}}</h3>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'prodViewLink',
    data (){
        return {
            showHidenChange: [true,true,true,true,false,false,false,false],
            isShow: true
        }
    },
    methods: {
        showHidenFn (index){
            this.showHidenChange[index] = !this.showHidenChange[index];
            this.isShow = !this.isShow;
        }	
    }

}
</script>
<style scoped>
    .prod-link-box {
        overflow:  hidden;
        width:  100%;
        height:  auto;
        border-bottom: 2px solid #e5e5e5;
    }

    .prod-link-room {
        width:  100%;
        height:  auto;
    }

    .prod-link-box .prod-link-room:nth-child(n+5) .prod-link-list-box{
        display: none;
    }

    .prod-link-title {
        width: 100%;
        height: 52px;
        padding-left: 20px;
        border-top: 2px solid #e5e5e5;
        color: #22202b;
        font-size: 18px;
        font-weight: bold;
        line-height: 50px;
        text-align: left;
        box-sizing: border-box;
        cursor: pointer;
    }

    .prod-link-title span {
        float:  left;
    }

    .prod-link-minus,.prod-link-add {
        margin-left: 5px;
    }

    span.prod-link-active{
        display: block;
    }

    .prod-link-list-box {
        width:  100%;
        height:  auto;
        padding: 22px 0 27px 20px;
        border-top: 2px solid #e5e5e5;
        box-sizing:  border-box;
    }

    li.prod-link-list {
        width:  100%;
        height:  36px;
        color:  #858585;
        font-size:  14px;
        line-height:  36px;
        text-align: left;
    }

    li.prod-link-list a {
        display:  block;
        width: 100%;
        height:  100%;
        color: #858585;
    }

    .prod-link-list a span {
        float: left;
    }

    .prod-link-cont {
        float: left;
        margin-left: 5px;
        font-weight: normal;
    }

    li.prod-link-list a:hover {
        color: #22202b;
    }
</style>

