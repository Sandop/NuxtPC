<template>
    <div id="place_map_wrap">
        <div class="place_map_box">
            <div id="place_map">
                <div id="allmap" :style="mapStyle"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'commonMap',
        data() {
            return{
                mapStyle:{
                    width:'100%',
                    height:'100%'
                }
            }
        },
        props:{
            mapData: {
                type: Object,
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
            }
        },
        mounted (){
            var map =new BMap.Map("allmap");
            var point =new BMap.Point(this.mapData.longitude,this.mapData.latitude);
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
                title :this.mapData.title,
            }
            var infoWindow =new BMap.InfoWindow(this.mapData.description, opts);// 创建信息窗口对象
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

<style scoped>
    #place_map_wrap {
        width: 100%;
    }
    .place_map_box {
        overflow: hidden;
        width: 100%;
        height: 600px;
        margin: 0 auto;
    }

    div#place_map {
        overflow: hidden;
        width:  100%;
        height:  100%;
    }
    .anchorBL, .BMap_cpyCtrl.BMap_noprint.anchorBL{
        display: none !important;
    }
</style>
