<template>
  <div>
    <v-header></v-header>
    <main class="content-container" ref="container" :class="headFixed == true ? 'marginTop' : ''">
      <nuxt/>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<style>
  .marginTop{
    margin-top: 170px;
  }
</style>

<script>
  import VHeader from '~/components/home/header'
  import VFooter from '~/components/home/footer'
  import {seo} from '~/utils/assist'

  export default {
    components: {
      VHeader,
      VFooter
    },
    data (){
      return {
        headFixed:false,
        maxClientWidth: 980
      }
    },
    mounted (){
      //监听滚动条，固定头部
      window.addEventListener('scroll',this.handleScroll);
      //直接将SEO脚本放在页面会被当成文本解析，所以将方法提取出来，放到mounted hook里面执行
      seo();
      //统计脚本
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?02736a493e850835a7c343e9edd17e88";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();    
    },
    methods: {
      handleScroll (){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var offsetTop = document.querySelector('.h-nav-list').offsetTop;
        if (scrollTop > offsetTop) {
          this.headFixed = true;
        } else {
          this.headFixed = false;
        }
      }
    },
    destroyed (){
      window.removeEventListener('scroll',this.handleScroll)
    }
  }
</script>
