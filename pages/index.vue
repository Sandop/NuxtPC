<template>
  <section class="container">
      <!-- banner -->
      <VBanner :bannerData="bannerData"></VBanner>
      <!-- 品牌故事 -->
      <div id="index-story">
        <div class="i-s-contant">
          <div class="s-c-top">
            <div class="c-t-titleC"><h2>品牌故事</h2></div>
            <div class="c-t-titleE">Brand Story</div>
            <div class="c-t-description">爱，一个梦想，一生一世一个家</div>
          </div>
          <div class="s-c-bottom">
            <div class="story-bottom-detalis">
              <div class="bottom-detalis-title">
                <div class="bottom-detalis-titleC">
                  <p class="detalis-titleC-first">我生怕辜负</p>
                  <p class="detalis-titleC-sec">这个时代</p>
                </div>
                <div class="bottom-detalis-titleE">
                  <p class="detalis-titleE-desc"> </p>
                </div>
              </div>
              <div class="bottom-detalis-content">
                “这是最好的时代，也是最坏的时代”，100年前英国文学家狄更斯这样描述工业革命发生后的时代。如今时代又何尝不是如此呢？阶级被打破，边界在打破，跨界与创新，互联网让世界变得更加平等，每个人都有自己追求梦想的机会，以及成功的可能性......
              </div>
              <div class="bottom-detalis-more-box">
                <div class="bottom-detalis-more-img">
                  <img src="~/assets/images/index/bottom-detalis-more-img.png">
                </div>
                <div class="bottom-detalis-more">
                  <nuxt-link to="/brand">了解更多 ></nuxt-link>
                </div>
              </div>
            </div>
            <div class="story-bottom-vedios">
              <indexVideo></indexVideo>
            </div>
          </div>
        </div>
      </div>
      <!-- 体验馆 -->
      <div id="index-experience">
        <div class="experience-content">
          <div class="experience-content-top">
            <div class="experience-content-top-titleC"><h2>体验馆</h2></div>
            <div class="experience-content-top-titleE">Experience Stores</div>
            <div class="experience-content-top-description">我们所有的努力，旨在打造一个宾至如归的理想状态</div>
          </div>
          <div class="experience-content-box">
            <div class="experience-place-container">
              <div class="experience-place-ul-box">
                <ul class="experience-place-nav">
                  <li class="experience-place" v-for="(item,index) in experiencePlace" :key="index" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
                </ul>
                <ul class="experience-place-nav-others">
                  <li class="experience-place">武汉</li>
                  <li class="experience-place">杭州</li>
                  <li class="experience-place">深圳</li>
                </ul>
              </div>
              <div class="experience-href"><nuxt-link target="_blank" to="/join">招商加盟详情</nuxt-link></div>
              <div class="experience-tab-content">
                <div class="experience-tab-box experience-tab-box-bt" v-show="0 == num">
                  <div class="experience-tab-left">
                    <div class="experience-tab-left-place">包头</div>
                    <div class="experience-tab-left-img">
                      <img src="~/assets/images/index/experience-tab-left-img-bt.png">
                    </div>
                  </div>
                  <div class="experience-tab-right">
                    <div class="tab-right-intro">
                      <div class="tab-right-intro-title">
                        <p>逐梦</p>
                        <p>鹿都之巅</p>
                        <p class="tab-right-intro-title-desc">卫诗理Olive life 新零售包头店，逐梦之路，未来之巅</p>
                        <p class="tab-right-intro-title-desc-line"></p>
                      </div>
                      <div class="tab-right-intro-style">
                        <p>拉斐尔现代美式、麦迪逊轻奢美式、麦巴赫·纽约摩登...</p>
                        <p class="intro-style-en">Style</p>
                        <p class="tab-right-intro-title-desc-line"></p>
                      </div>
                      <div class="tab-right-intro-phone">
                        <p class="intro-phone-number">186-86152121</p>
                        <p class="intro-phone-name">telephone</p>
                      </div>
                      <div class="tab-right-intro-more">
                        <nuxt-link to="experice/bt">了解更多 ></nuxt-link>
                      </div>
                    </div>
                    <div class="tab-right-pic">
                      <div class="right-pic-name-box">
                        <div class="right-pic-name">
                          <p>现代桦木多</p>
                          <p>功能储物斗柜</p>
                        </div>
                        <div class="right-pic-name-desc">
                          <p>典雅深色与明亮金属色泽</p>
                          <p>相间展现文艺仿古的艺术感。</p>
                        </div>
                      </div>
                      <div class="tab-right-img">
                        <img src="~/assets/images/index/tab-right-pic-bt.png">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="experience-tab-box experience-tab-box-cd" v-show="1 == num">
                  <div class="experience-tab-left">
                    <div class="experience-tab-left-place">成都</div>
                    <div class="experience-tab-left-img">
                      <img src="~/assets/images/index/experience-tab-left-img-cd.png">
                    </div>
                  </div>
                  <div class="experience-tab-right">
                    <div class="tab-right-intro">
                      <div class="tab-right-intro-title">
                        <p>天府之国</p>
                        <p class="tab-right-intro-title-desc">卫诗理新零售成都“卫共”店，生态生活，盎然新启</p>
                        <p class="tab-right-intro-title-desc-line"></p>
                      </div>
                      <div class="tab-right-intro-style">
                        <p>美式、欧式、英式、轻奢小法、禅意中式、新古典、中式...</p>
                        <p class="intro-style-en">Style</p>
                        <p class="tab-right-intro-title-desc-line"></p>
                      </div>
                      <div class="tab-right-intro-phone">
                        <p class="intro-phone-number">028-85007888</p>
                        <p class="intro-phone-name">telephone</p>
                      </div>
                      <div class="tab-right-intro-more">
                        <nuxt-link to="/experice/cd">了解更多 ></nuxt-link>
                      </div>
                    </div>
                    <div class="tab-right-pic">
                      <div class="right-pic-name-box">
                        <div class="right-pic-name">
                          <p>珍尼丝</p>
                          <p>电视柜</p>
                        </div>
                        <div class="right-pic-name-desc">
                          <p>复古旅行箱造型</p>
                          <p>摩洛哥海洋蓝</p>
                          <p>AISI镜光铜</p>
                        </div>
                      </div>
                      <div class="tab-right-img">
                        <img src="~/assets/images/index/tab-right-pic-cd.png">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="experience-tab-box experience-tab-box-nj" v-show="2 == num">
                  <div class="experience-tab-left">
                    <div class="experience-tab-left-place">南京</div>
                    <div class="experience-tab-left-img">
                      <img src="~/assets/images/index/experience-tab-left-img-nanjing.jpg">
                    </div>
                  </div>
                  <div class="experience-tab-right">
                    <div class="tab-right-intro">
                      <div class="tab-right-intro-title">
                        <p>绽放</p>
                        <p>十朝都会</p>
                        <p class="tab-right-intro-title-desc">卫诗理线下O2O南京"卫共"店初心不移，呈现生活最美的姿态</p>
                        <p class="tab-right-intro-title-desc-line"></p>
                      </div>
                      <div class="tab-right-intro-style">
                        <p>大美，小美，简美，意式，法式英式，新中式等...</p>
                        <p class="intro-style-en">Style</p>
                        <p class="tab-right-intro-title-desc-line"></p>
                      </div>
                      <div class="tab-right-intro-phone">
                        <p class="intro-phone-number">025-52458886</p>
                        <p class="intro-phone-name">telephone</p>
                      </div>
                      <div class="tab-right-intro-more">
                        <nuxt-link to="experice/nj">了解更多 ></nuxt-link>
                      </div>
                    </div>
                    <div class="tab-right-pic">
                      <div class="right-pic-name-box">
                        <div class="right-pic-name">
                          <p>纳尔逊</p>
                          <p>餐桌</p>
                        </div>
                        <div class="right-pic-name-desc">
                          <p>非洲进口桃花口木</p>
                          <p>沙比利木皮拼花</p>
                          <p>古典圆形转盘设计</p>
                        </div>
                      </div>
                      <div class="tab-right-img">
                        <img src="~/assets/images/index/tab-right-pic-nanjing.png">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="experience-tab-box experience-tab-box-dg" v-show="3 == num">
                  <div class="experience-tab-left">
                    <div class="experience-tab-left-place">东莞</div>
                    <div class="experience-tab-left-img">
                      <img src="~/assets/images/index/experience-tab-left-img-dg.png">
                    </div>
                  </div>
                  <div class="experience-tab-right">
                    <div class="tab-right-intro">
                      <div class="tab-right-intro-title">
                        <p>臻贡</p>
                        <p>一个阶层</p>
                        <p class="tab-right-intro-title-desc">纯正欧式尊贵体验，赋予贵族新的定义</p>
                        <p class="tab-right-intro-title-desc-line"></p>
                      </div>
                      <div class="tab-right-intro-style">
                        <p>大美、小美、简美、英式、美式、法式、意式...</p>
                        <p class="intro-style-en">Style</p>
                        <p class="tab-right-intro-title-desc-line"></p>
                      </div>
                      <div class="tab-right-intro-phone">
                        <p class="intro-phone-number">0796-82251668</p>
                        <p class="intro-phone-name">telephone</p>
                      </div>
                      <div class="tab-right-intro-more">
                        <nuxt-link to="experice/dg">了解更多 ></nuxt-link>
                      </div>
                    </div>
                    <div class="tab-right-pic">
                      <div class="right-pic-name-box">
                        <div class="right-pic-name">
                          <p>史丹尼</p>
                          <p>沙发</p>
                        </div>
                        <div class="right-pic-name-desc">
                          <p>经典切斯特菲尔德 </p>
                          <p>意大利头层牛皮</p>
                          <p>金属&实木艺术交融</p>
                        </div>
                      </div>
                      <div class="tab-right-img">
                        <img src="~/assets/images/index/tab-right-pic-dg.png">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 产品介绍 -->
      <div id="index-products">
        <div class="products-content">
          <div class="products-content-top">
            <div class="products-content-top-titleC">
              <h2>产品介绍</h2>
            </div>
            <div class="products-content-top-titleE">Products Introduce</div>
            <div class="products-content-top-description">品质生活，爱家有道</div>
          </div>
          <div class="products-content-box">
            <div class="products-kind-container">
              <ul class="products-kind-nav">
                <li class="products-kind" v-for="(item,index) in indexProdNav" :key="item.proCategoryId" :class="{active:index == clickProdIndex}" @click="getProdList(index)">{{item.proCategoryName}}</li>
              </ul>
              <div class="products-tab-content">
                <prodListShow :prodList="indexProdList6" :showNewMore="true" :typeId="97" v-show="0 == clickProdIndex"></prodListShow>
                <prodListShow :prodList="indexProdList1" :showMore="true" :typeId="1" v-show="1 == clickProdIndex"></prodListShow>
                <prodListShow :prodList="indexProdList2" :showMore="true" :typeId="2" v-show="2 == clickProdIndex"></prodListShow>
                <prodListShow :prodList="indexProdList3" :showMore="true" :typeId="3" v-show="3 == clickProdIndex"></prodListShow>
                <prodListShow :prodList="indexProdList4" :showMore="true" :typeId="4" v-show="4 == clickProdIndex"></prodListShow>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 新闻资讯部分 -->
      <div id="index-news">
        <div class="news-content">
          <div class="news-content-top">
            <div class="news-content-top-titleC"><h2>新闻资讯</h2></div>
            <div class="news-content-top-titleE">News Center</div>
            <div class="news-content-top-description">一切资讯都是有价值的</div>
          </div>
          <div class="news-content-box">
            <div class="news-kind-container">
              <ul class="news-kind-nav">
                <li class="news-kind" v-for="(item,index) in $store.state.headNewsNav" :key="index" :class="{active:index == clickNewsIndex}" @click="getNewsList(index)">{{item.articleCategoryName}}</li>
              </ul>
              <div class="news-tab-content">
                <indexNewsListShow :indexFirstNewsList="indexFirstNewsList1" :indexNewsList="indexNewsList1" v-show="0 == clickNewsIndex"></indexNewsListShow>
                <indexNewsListShow :indexFirstNewsList="indexFirstNewsList2" :indexNewsList="indexNewsList2" v-show="1 == clickNewsIndex"></indexNewsListShow>
                <indexNewsListShow :indexFirstNewsList="indexFirstNewsList3" :indexNewsList="indexNewsList3" v-show="2 == clickNewsIndex"></indexNewsListShow>
                <indexNewsListShow :indexFirstNewsList="indexFirstNewsList4" :indexNewsList="indexNewsList4" v-show="3 == clickNewsIndex"></indexNewsListShow>
                <indexNewsListShow :indexFirstNewsList="indexFirstNewsList5" :indexNewsList="indexNewsList5" v-show="4 == clickNewsIndex"></indexNewsListShow>
              </div>
            </div>
          </div>
        </div>
      </div>  
  </section>
</template>
<script>
  import axios from 'axios'
  import AppLogo from '~/components/AppLogo.vue'
  import VHeader from '~/components/home/header'
  import VFooter from '~/components/home/footer'
  import VBanner from '~/components/home/banner'
  import indexVideo from '~/components/home/indexVideo'
  import prodListShow from '~/components/common/prodListShow'
  import indexNewsListShow from '~/components/common/indexNewsListShow'

  export default {
    data(){
      return {
        experiencePlace:['包头','成都','南京','东莞'],
        num:0,
        clickProdIndex:0,
        clickNewsIndex: 0
      }
    },
    components: {
      AppLogo,
      VHeader,
      VFooter,
      VBanner,
      indexVideo,
      prodListShow,
      indexNewsListShow
    },
    head () {
      return {
        title:this.metaData.navigationTitle,
        meta: [
          {name:'keywords',hid: 'keywords',content:`${this.metaData.navigationKeyword}`},
          {name:'description',hid:'description',content:`${this.metaData.navigationDescription}`}
        ]
      }
    },
    async asyncData({params,store}){
      //首页head信息
      let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/1`);
      //banner数据动态获取
      let banner = await axios(`${store.state.wordpressAPI}/banner/selectAllByTpye/1`);
      //首页新闻信息
      let indexFirstNewsList1 = await axios(`${store.state.wordpressAPI}/article/getRecommend/1`);
			let indexFirstNewsList2 = await axios(`${store.state.wordpressAPI}/article/getRecommend/2`);
			let indexFirstNewsList3 = await axios(`${store.state.wordpressAPI}/article/getRecommend/3`);
			let indexFirstNewsList4 = await axios(`${store.state.wordpressAPI}/article/getRecommend/4`);
			let indexFirstNewsList5 = await axios(`${store.state.wordpressAPI}/article/getRecommend/5`);

			let indexNewsList1 = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/1/9`);
			let indexNewsList2 = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/2/9`);
			let indexNewsList3 = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/3/9`);
			let indexNewsList4 = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/4/9`);
      let indexNewsList5 = await axios(`${store.state.wordpressAPI}/article/getRecommendsByCategoryId/5/9`);
      
      //首页产品展示信息
      let indexProdNav = await axios(`${store.state.wordpressAPI}/proCategory/showFirst`);
      
			let indexProdList1 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/1`);
			let indexProdList2 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/2`);
			let indexProdList3 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/3`);
      let indexProdList4 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/4`);
      let indexProdList6 = await axios(`${store.state.wordpressAPI}/product/selectByPosition/97`);

      return {
        metaData: metaData.data,
        bannerData: banner.data,
        //首页新闻信息
        indexFirstNewsList1: indexFirstNewsList1.data,
        indexFirstNewsList2: indexFirstNewsList2.data,
        indexFirstNewsList3: indexFirstNewsList3.data,
        indexFirstNewsList4: indexFirstNewsList4.data,
        indexFirstNewsList5: indexFirstNewsList5.data,
        indexNewsList1: indexNewsList1.data,
        indexNewsList2: indexNewsList2.data,
        indexNewsList3: indexNewsList3.data,
        indexNewsList4: indexNewsList4.data,
        indexNewsList5: indexNewsList5.data,
        //首页产品信息
        indexProdNav: indexProdNav.data,
        indexProdList1: indexProdList1.data,
        indexProdList2: indexProdList2.data,
        indexProdList3: indexProdList3.data,
        indexProdList4: indexProdList4.data,
        indexProdList6: indexProdList6.data,
      } 
    },
    methods: {
      tab (index){
        this.num = index;
      },
      getProdList (index){
        this.clickProdIndex = index;
      },
      getNewsList (index){
        this.clickNewsIndex = index;
      }

    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: auto;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  /*index-story*/
    div#index-story {
        width:  100%;
        height:  auto;
    }

    .i-s-contant {
        width:  1200px;
        height:  auto;
        margin: 0 auto;
    }

    .s-c-top {
        width:  100%;
        height:  auto;
        padding: 162px 0 100px;
        text-align:  center;
    }

    .c-t-titleC {
        width:  100%;
        height:  auto;
        font-size:  38px;
        font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
        font-weight: 900;
        color:  #22202b;
        line-height:  46px;
    }

    .c-t-titleE {
        width: 100%;
        height: auto;
        font-size: 14px;
        color: #858585;
        line-height: 22px;
    }

    .c-t-description {
        width: 100%;
        height: auto;
        font-size: 14px;
        color: #858585;
        line-height: 22px;
    }

    .s-c-bottom {
        overflow:  hidden;
        width:  100%;
        height:  auto;
        padding-bottom:  150px;
    }

    .story-bottom-detalis {
        float:  left;
        width:  600px;
        height:  auto;
    }

    .story-bottom-vedios {
        float:  right;
        overflow:  hidden;
        width: 530px;
        height: 353px;
        cursor: pointer;
    }

    .bottom-detalis-title {
        overflow:  hidden;
        width:  100%;
        height:  auto;
        padding-bottom:  45px;
    }

    .bottom-detalis-titleC {
        position: relative;
        width:  100%;
        height:  auto;
        padding: 10px 0 5px;
        color: #22202b;
        font-size:  22px;
        line-height:  24px;
        text-align:  left;
    }

    .bottom-detalis-titleC::after {
        position: absolute;
        top: 50%;
        right: 45px;
        content: "";
        width: 339px;
        height: 2px;
        background: #d5d5d8;
    }

    .bottom-detalis-titleE {
        width:  320px;
        height:  auto;
        color:  #cccccc;
        font-size:  12px;
        line-height:  15px;
        text-align:  left;
    }

    .bottom-detalis-content {
        overflow:  hidden;
        width: 100%;
        height:  auto;
        padding-right:  94px;
        padding-bottom: 60px;
        color:  #858585;
        font-size:  14px;
        line-height:  18px;
        text-align:  left;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .bottom-detalis-more-box {
        overflow:  hidden;
        width:  100%;
        height:  auto;
    }

    .bottom-detalis-more-img {
        float:  left;
        overflow:  hidden;
        width:  107px;
        height:  78px;
    }

    .bottom-detalis-more {
        float: left;
        width:  163px;
        height:  40px;
        margin-top: 17px;
        margin-left:  62px;
        border: 3px solid #000;
        font-size:  14px;
        line-height:  40px;
        text-align:  center;
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .bottom-detalis-more:hover{
      -webkit-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      -o-transform: translateY(-5px);
      transform: translateY(-5px);
    }

    .bottom-detalis-more-img img {
        width:  100%;
        height: 100%;
    }

    .bottom-detalis-more a {
        display:  block;
        width:  100%;
        height:  100%;
        color: #22202b;
        font-weight:  bold;
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .bottom-detalis-more:hover a {
        background:  #22202b;
        color: #feeabd;
    }
  /*index-story*/

  /*体验馆*/
    div#index-experience {
        width: 100%;
        height: auto;
        background: #f9f9fa;
    }

    .experience-content {
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }

    .experience-content-top {
        width: 100%;
        height: auto;
        padding: 140px 0 22px;
        text-align: center;
    }

    .experience-content-top-titleC {
        width: 100%;
        height: auto;
        font-size:  38px;
        font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
        font-weight: 900;
        color: #22202b;
        line-height: 46px;
    }

    .experience-content-top-titleE {
        width: 100%;
        height: auto;
        font-size: 14px;
        color: #858585;
        line-height: 22px;
    }

    .experience-content-top-description {
        width: 100%;
        height: auto;
        padding-top: 6px;
        font-size: 14px;
        color: #858585;
        line-height: 22px;
    }

    .experience-content-box {
        overflow:  hidden;
        width:  100%;
        height:  auto;
    }

    .experience-place-container {
        width:  100%;
        height:  auto;
    }

    .experience-place-ul-box {
        width: 100%;
        text-align: center;
    }

    ul.experience-place-nav {
        display: inline-block;
        height: auto;
        text-align:  center;
    }

    .experience-place-nav-others {
        display: inline-block;
    }

    li.experience-place {
        display:  inline-block;
        width:  104px;
        height: 40px;
        margin:  0 8px;
        border: 3px solid #000;
        color:  #000;
        font-size:  14px;
        line-height:  40px;
        text-align:  center;
        cursor:  pointer;
        -webkit-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
    }

    li.experience-place.active {
        color:  #feeabd;
        background: #000;
    }

    li.experience-place:hover {
        color: #feeabd;
        background: #000;
    }

    .experience-href {
      width: 100%;
      height: auto;
      padding-top: 20px;
      font-size: 14px;
      color: #858585;
      line-height: 22px;
      text-align: center;
    }

    .experience-href a {
      color: #858585;
    }

    .experience-href a:hover {
      color: #000;
    }

    .experience-tab-content {
        overflow:  hidden;
        width:  100%;
        height:  auto;
        padding: 118px 0 150px;
    }

    .experience-tab-box {
        overflow:  hidden;
        width:  100%;
    }

    .experience-tab-content .experience-tab-box:first-child {
        display:  block;
    }

    .experience-tab-left {
        float:  left;
        width:  600px;
        height: auto;
    }

    .experience-tab-right {
        float:  right;
        width:  600px;
        height:  auto;
    }

    .experience-tab-left-place {
        position: relative;
        overflow: hidden;
        width: 456px;
        padding: 34px 0 0 40px;
        color: #22202b;
        font-size: 14px;
        text-align: left;
        line-height: 30px;
        box-sizing: border-box;
    }

    .experience-tab-left-place::after {
        position:  absolute;
        top: 49px;
        right:  0;
        content:  "";
        width:  339px;
        height:  2px;
        background: #d5d5d8;
    }

    .experience-tab-left-img {
        overflow: hidden;
        width: 515px;
        height: 485px;
        margin-top: -40px;
    }

    .experience-tab-box-nj .experience-tab-left-img img {
        margin-top: 144px;
    }

    .tab-right-intro {
        float:  left;
        width: 316px;
    }

    .tab-right-pic {
        float:  right;
        width: 284px;
    }

    .tab-right-intro-title {
        overflow:  hidden;
        width:  100%;
        height:  auto;
        color: #22202b;
        font-size:  22px;
        font-weight:  bold;
        line-height:  24px;
        text-align:  left;
    }

    p.tab-right-intro-title-desc {
        width: 200px;
        height:  auto;
        padding-top: 10px;
        padding-bottom:  40px;
        color:  #979797;
        font-size:  14px;
        font-weight:  normal;
        line-height: 22px;
    }

    p.tab-right-intro-title-desc-line {
        width:  136px;
        height:  2px;
        background: #d5d5d8;
    }

    .tab-right-intro-style {
        width: 200px;
        height:  auto;
        padding-top: 48px;
        color:  #22202b;
        font-size:  14px;
        text-align: left;
        line-height: 18px;
    }

    p.intro-style-en {
        color:  #979797;
        font-size:  14px;
        line-height:  26px;
        padding-bottom: 30px;
    }

    .tab-right-intro-phone {
        width:  100%;
        height:  auto;
        padding-top:  45px;
        padding-bottom: 83px;
    }

    p.intro-phone-number {
        width:  100%;
        height:  22px;
        color:  #22202b;
        font-size:  18px;
        font-weight:  bold;
        line-height:  22px;
        text-align:  left;
    }

    p.intro-phone-name {
        width: 100%;
        height: 22px;
        color: #979797;
        font-size: 14px;
        line-height: 22px;
        text-align: left;
    }

    .tab-right-intro-more {
        width: 163px;
        height: 40px;
        border: 3px solid #000;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .tab-right-intro-more:hover{
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        -o-transform: translateY(-5px);
        transform: translateY(-5px);
    }

    .tab-right-intro-more a {
        display: block;
        width: 100%;
        height: 100%;
        color: #22202b;
        font-weight: bold;
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .tab-right-intro-more:hover a {
        background:  #22202b;
        color: #feeabd;
    }

    .right-pic-name-box {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-left: 60px;
        padding-bottom: 160px;
        box-sizing: border-box;
    }

    .right-pic-name-box::after {
        position:  absolute;
        right: 49.7%;
        bottom: 9px;
        content:  "";
        width:  2px;
        height:  135px;
        background: #d5d5d8;
    }

    .right-pic-name {
        overflow: hidden;
        width: 100%;
        height: auto;
        color: #22202b;
        font-size: 22px;
        font-weight: bold;
        line-height: 24px;
        text-align: left;
    }

    .right-pic-name-desc {
        width: 100%;
        height: auto;
        padding: 12px 0 24px;
        color: #979797;
        font-size: 14px;
        font-weight: normal;
        line-height: 18px;
    }

    .tab-right-img {
        display:  flex;
        overflow:  hidden;
        width: 100%;
        height: 230px;
        text-align: center;
        justify-content:  center;
        align-items:  center;
    }

  /*体验馆*/
  /* 产品部分 */
    div#index-products {
        width: 100%;
        height: auto;
    }

    .products-content {
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }

    .products-content-top {
        width: 100%;
        height: auto;
        padding: 140px 0 22px;
        text-align: center;
    }

    .products-content-top-titleC {
        width: 100%;
        height: auto;
        font-size:  38px;
        font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
        font-weight: 900;
        color: #22202b;
        line-height: 46px;
    }

    .products-content-top-titleE {
        width: 100%;
        height: auto;
        font-size: 14px;
        color: #858585;
        line-height: 22px;
    }

    .products-content-top-description {
        width: 100%;
        height: auto;
        padding-top: 6px;
        font-size: 14px;
        color: #858585;
        line-height: 22px;
    }

    .products-content-box {
        overflow: hidden;
        width: 100%;
        height: auto;
        padding-bottom: 150px;
    }

    .products-kind-container {
        width: 100%;
        height: auto;
    }

    ul.products-kind-nav {
        width: 100%;
        height: auto;
        padding-top: 20px;
        text-align: center;
    }

    li.products-kind {
        display: inline-block;
        height: 46px;
        margin: 0 22px;
        border-bottom: 2px solid transparent;
        color: #979797;
        font-size: 14px;
        line-height: 46px;
        text-align: center;
        cursor: pointer;
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }
    li.products-kind.active,.products-kind:hover {
        color:  #22202b;
        font-weight:  bold;
        border-bottom: 2px solid #22202b;
    }

    .products-tab-content {
        overflow:  hidden;
        width:  100%;
        height:  auto;
        padding: 126px 0 0;
    }

    .products-more {
        overflow:  hidden;
        width: 163px;
        height: 40px;
        margin:  0 auto;
        border: 3px solid #000;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
      -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .products-more:hover{
      -webkit-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      -o-transform: translateY(-5px);
      transform: translateY(-5px);
    }

    .products-more a {
        display: block;
        width: 100%;
        height: 100%;
        color: #22202b;
        font-weight: bold;
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    .products-more:hover a {
        background:  #22202b;
        color: #feeabd;
    }
  /* 产品部分结束 */
  /* 新闻资讯部分 */
    div#index-news {
        width: 100%;
        height: auto;
        background: #f9f9fa;
    }

    .news-content {
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }

    .news-content-top {
        width: 100%;
        height: auto;
        padding: 140px 0 22px;
        text-align: center;
    }

    .news-content-top-titleC {
        width: 100%;
        height: auto;
        font-size:  38px;
        font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
        font-weight: 900;
        color: #22202b;
        line-height: 46px;
    }

    .news-content-top-titleE {
        width: 100%;
        height: auto;
        font-size: 14px;
        color: #858585;
        line-height: 22px;
    }

    .news-content-top-description {
        width: 100%;
        height: auto;
        padding-top: 6px;
        font-size: 14px;
        color: #858585;
        line-height: 22px;
    }

    .news-content-box {
        overflow: hidden;
        width: 100%;
        height: auto;
        padding-bottom: 150px;
    }

    .news-kind-container {
        width: 100%;
        height: auto;
    }

    ul.news-kind-nav {
        width: 100%;
        height: auto;
        padding-top: 20px;
        text-align: center;
    }

    li.news-kind {
        display: inline-block;
        height: 46px;
        margin: 0 22px;
        border-bottom: 2px solid transparent;
        color: #979797;
        font-size: 14px;
        line-height: 46px;
        text-align: center;
        cursor: pointer;
        -webkit-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }

    li.news-kind.active, .news-kind:hover{
        color: #22202b;
        font-weight: bold;
        border-bottom: 2px solid #22202b;
    }

    .news-tab-content {
        overflow:  hidden;
        width:  100%;
        height:  auto;
        padding-top: 70px;
    }

    
  /* 新闻资讯部分结束 */
</style>
