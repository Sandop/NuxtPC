<template>
  <div id="allmap" v-bind:style="mapStyle"></div>
</template>
<script>
  export default {
    data:function(){
      return{
        mapStyle:{
          width:'100%',
          height:this.mapHeight +'px'
        }
      }
    },
    props:{
      // 地图在该视图上的高度
      mapHeight:{
        type:Number,
        default:600
      },
      // 经度
      longitude:{
        type:Number,
        default:113.845282
      },
      // 纬度
      latitude:{
        type:Number,
        default:22.613041
      },
      title:{
        type:String,
        default:'深圳市田田家园家具有限公司'
      },
      description:{
        type:String,
        default:'地址：深圳市宝安区西乡街道泰华梧桐岛11栋5-9楼'
      }
    },
    mounted (){
      var map =new BMap.Map("allmap");
      var point =new BMap.Point(this.longitude,this.latitude);
      var marker =new BMap.Marker(point);   // 创建标注
      map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
      map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
      map.setMapStyle({style:'dark'});  //地图添加黑夜主题背景
      map.addOverlay(marker);       // 将标注添加到地图中
      map.centerAndZoom(point,15);
      // 信息窗的配置信息
      var opts ={
        width :250,
        height:120,
        title :this.title,
      }
      var infoWindow =new BMap.InfoWindow(this.description, opts);// 创建信息窗口对象
      marker.addEventListener("click",function(){
        map.openInfoWindow(infoWindow,point);
      });
      map.enableScrollWheelZoom(true);
      map.openInfoWindow(infoWindow,point);//开启信息窗口
      var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
      map.addControl(top_left_navigation);
    }
  }
</script>
 
<style>
  #allmap .BMap_bubble_title  {
      margin: 15px 0;
      font-size:  20px !important;
      font-weight:  bold !important;
  }

  .anchorBL {
      display:  none;
  }
</style>