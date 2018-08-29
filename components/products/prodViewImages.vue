
<!-- 商品图片组件 -->

<template>
  <div class="products-pic-panel">
    <div class="products-pic-all-box" id="PicZoom">
      <div class="products-pic-show-box" id="BigPic">
        <div class="middle-box" :style="{width: `${boxWidth}px`, height: `${boxHeight}px`}" @mouseenter="isShow = true" @mouseleave="isShow = false" @mousemove="move($event)">
          <img :src="middleImage[curIndex].proImgSrc" :alt="middleImage[curIndex].proImgAlt">
          <div class="move" :style="{width: `${this.glassWidth}px`,height: `${this.glassHeight}px`,top: `${this.glassTop}px`,left: `${this.glassLeft}px`}" v-if="isShow"></div>
        </div>
      </div>
      <div class="products-pic-small-box">
        <span id="products-pic-pre" v-if="smallImage.length>4" @click="goPre"></span>
        <span id="products-pic-next" v-if="smallImage.length>4" @click="goNext"></span>
        <div id="SmallPicList" class="products-pic-list-box" :style="{width: `${SmallPicListWidth}px`}">
          <ul :style="{width: `${this.ulWidth}px`,marginLeft: `${this.ulMarginLeft}px`}">
            <li v-for="(image,index) in smallImage" :key="index" :class="{picCur: curIndex == index}" @mouseenter="curIndex = index">
              <img :src="image.proImgSrc" :alt="image.proImgAlt">
            </li>
          </ul>
        </div>
      </div>
      <div class="b_box" v-if="isShow">
        <img :src="bigImage[curIndex].proImgSrc" :style="{left: `${bigLeft}px`, top: `${bigTop}px`,width: `${this.bigWidth}px`,height: `${this.bigHeight}px`}">
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    //组件名称
    name: "ProdViewImages",
    props: {
      bigImage: Array,
      middleImage: Array,
      smallImage: Array
    },
    data() {
      return {
        //当前选中商品
        curIndex: 0,
        //是否显示大图
        isShow: false,

        //显示盒子的宽度和高度
        boxWidth: 500,
        boxHeight: 500,

        //显示盒子相对于浏览器窗口的偏移
        boxOffsetLeft: 0,
        boxOffsetTop: 0,

        //放大镜的宽度和高度
        glassWidth: 100,
        glassHeight: 100,

        //放大镜的位置
        glassLeft: 0,
        glassTop: 0,

        //大图的宽度和高度
        bigWidth: 1000,
        bigHeight: 1000,

        //大图的位置
        bigLeft: 0,
        bigTop: 0,

        //小图列表盒子的宽度
        SmallPicListWidth: 460,
        //小图列表li的宽度(加外边距)
        liOuterWidth: 120,

        //小图列表ul宽度
        ulWidth: 460,

        //小图列表ul的marginleft
        ulMarginLeft: 0
      };
    },
    //初始化
    mounted() {
      this.$nextTick(() => {
        //显示盒子到浏览器窗口最左端的距离
        this.boxOffsetLeft = this.getElementLeft (document.querySelector(".middle-box"));

        //显示盒子到浏览器窗口最顶部的距离
        this.boxOffsetTop = this.getElementTop (document.querySelector(".middle-box"));
        //小图列表ul宽度
        if (this.smallImage.length > 4) {
          this.ulWidth = this.liOuterWidth * this.smallImage.length - 20;
        }
      });
    },

    methods: {

      //放大镜移动
      move (event){
        //计算放大镜的位置
        //位置= 鼠标指针位置 - 显示盒子在浏览器上的偏移 - 放大镜宽高的一半
        this.glassLeft = event.pageX - this.boxOffsetLeft - this.glassWidth/2;
        this.glassTop = event.pageY - this.boxOffsetTop - this.glassHeight / 2;


        //放大镜在水平方向上的最大距离
        var maxLeft = this.boxWidth - this.glassWidth;

        //放大镜在竖直方向上移动的最大距离
            var maxTop = this.boxHeight - this.glassHeight;

            //限制放大镜在水平方向的距离
            if ( this.glassLeft < 0) {
              this.glassLeft = 0;
            } else if (this.glassLeft > maxLeft){
              this.glassLeft = maxLeft;
            }

            //限制放大镜在竖直方向上的范围
            if (this.glassTop < 0) {
              this.glassTop = 0;
            } else if (this.glassTop > maxTop) {
              this.glassTop = maxTop;
            }

            //计算大图的移动位置
            this.bigLeft = -(this.glassLeft/maxLeft) * (this.bigWidth - this.boxWidth);
            this.bigTop = -(this.glassTop/maxTop) * (this.bigHeight - this.boxHeight);
      },
      //元素最左端到网页最左端的距离
      getElementLeft (element){
        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;
        while (current !== null){
          actualLeft += current.offsetLeft;
          current = current.offsetParent;
        }
        return actualLeft;
      },
      //元素最顶端到网页最顶端的距离
      getElementTop (element){
        var actualTop = element.offsetTop;
        var current = element.offsetParent;
        while (current !== null) {
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }
        return actualTop;
      },
      //下一个点击按钮
      goNext (){
        if (this.SmallPicListWidth - this.ulMarginLeft >= this.smallImage.length * this.liOuterWidth - (this.smallImage.length - 1) * 8){
          return;
        }
        this.ulMarginLeft = -this.liOuterWidth + this.ulMarginLeft;
      },
      //上一个点击按钮
      goPre (){
        if (this.ulMarginLeft > -this.liOuterWidth) {
          this.ulMarginLeft = 0;
          return;
        } else {
          this.ulMarginLeft = this.ulMarginLeft + this.liOuterWidth;
        }
      }
    }
  };
</script>

<style scoped>
  .products-pic-panel {
              width:  100%;
              height:  100%;
          }

          .products-pic-all-box {
              position:  relative;
              width: 100%;
              height: 100%;
          }

          .products-pic-show-box {
              position:  relative;
              overflow:  hidden;
              width:  100%;
              height: 500px;
              background: #f2f2f2;
          }

          .products-pic-show-box img {
              width:  100%;
              height:  100%;
          }

          .move {
              position: absolute;
              background: #fff;
              z-index: 99;
              filter: alpha(opacity=40);
              opacity: 0.4;
              cursor: move;
          }

          .b_box {
              position:  absolute;
              top: 0;
              left: 501px;
              width: 500px;
              height: 500px;
              overflow:  hidden;
              background: #fff;
          }

          .b_box img {
              position:  absolute;
              top: 0;
              left: 0;
          }

          .products-pic-small-box {
              position:  relative;
              overflow:  hidden;
              width:  100%;
              height:  auto;
              margin-top:  10px;
          }

          .products-pic-list-box {
              overflow:  hidden;
              width:  460px;
              height:  102px;
              margin: 0 auto;
          }

          .products-pic-list-box ul {
              overflow:  hidden;
              width:  100%;
              height:  100%;
          }

          .products-pic-list-box ul li {
              float:  left;
              overflow:  hidden;
              width:  100px;
              height:  100px;
              margin-right: 20px;
              background: #f2f2f2;
              border: 1px solid transparent;
              box-sizing: border-box;
              cursor: pointer;
          }

          .products-pic-list-box ul li:last-child {
              margin-right:  0;
          }

          .products-pic-list-box ul li.picCur {
              border: 1px solid #000;
          }

          .products-pic-list-box ul li img {
              width:  100%;
              height:  100%;
          }

          span#products-pic-pre {
              position:  absolute;
              top: 0;
              left: 0;
              display:  block;
              width: 20px;
              height: 100px;
              cursor:  pointer;
              background: #f2f2f2 url(~/assets/images/index/banner-btn-pre.png) center center no-repeat;
          }

          span#products-pic-next {
              position: absolute;
              top: 0;
              right: 0;
              display: block;
              width: 20px;
              height: 100px;
              cursor: pointer;
              background: #f2f2f2 url(~/assets/images/index/banner-btn-next.png) center center no-repeat;
          }

          span#products-pic-pre:hover {
              background: #f2f2f2 url(~/assets/images/products/banner-btn-pre-cur.png) center center no-repeat;
          }

          span#products-pic-next:hover {
              background: #f2f2f2 url(~/assets/images/products/banner-btn-next-cur.png) center center no-repeat;
          }
</style>
