<template>
	<div>
	  	<div class="products-tab-box">
			<ul>
				<li class="products-kind-list" v-for="(item,index) in prodList" :key="index">
					<div class="products-kind-list-img">
					<nuxt-link target="_blank" :to="{name: 'prod-pdV-id',params:{id: item.proId},query: {typeId: item.proPositionId,classId: item.proTypeId}}">
						<img :src="item.proImgs[0].proImgSrc" :alt="item.proImgs[0].proImgAlt">
					</nuxt-link>
					</div>
					<div class="products-kind-name">
					<nuxt-link target="_blank" :to="{name: 'prod-pdV-id',params:{id: item.proId},query: {typeId: item.proPositionId,classId: item.proTypeId}}"><b>{{item.proName}}</b></nuxt-link>
					</div>
					<div class="products-kind-price">
						￥<span class="price-num">{{item.proPrice}}</span>
					</div>
				</li>   
			</ul>
	  	</div>
		<div class="products-more" v-if="showMore">
			<nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: typeId}}">了解更多 ></nuxt-link>
		</div>
		<div class="products-more" v-if="showNewMore">
			<nuxt-link target="_blank" to="prod/newPro">了解更多 ></nuxt-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'prodListShow',
		props: {
			prodList: {
				type: Array
			},
			showMore: {
				type: Boolean,
				default: false
			},
			showNewMore: {
				type: Boolean,
				default: false
			},
			typeId: {
				type: Number,
				default: 1
			}
		}
	}
	
</script>

<style scoped>
	.products-tab-box {
 	    overflow:  hidden;
	    width:  100%;
		padding-bottom: 72px;
	}

	.products-tab-content .products-tab-box:first-child{
	  display: block;
	}
	.products-tab-box ul {
	    overflow:  hidden;
	    width:  100%;
	    height:  100%;
	}

	li.products-kind-list {
	    float:  left;
	    width:  300px;
	    height: 333px;
	    border:  3px solid transparent;
	    box-sizing:  border-box;
	    -webkit-transition: all 0.5s ease;
	    -o-transition: all 0.5s ease;
	    transition: all 0.5s ease;
	    cursor: pointer;
	}

	li.products-kind-list:hover {
	    border: 3px solid #dcdcdc;
	}

	.products-kind-list-img {
	    display:  flex;
	    overflow:  hidden;
	    width:  75%;
	    height: 236px;
		margin: 0 auto;
	    justify-content:  center;
	    align-items:  center;
	}
	.products-kind-list-img img{
	    width: 100%;
	    height: 100%;
	  -webkit-transition: all 1s ease;
	    -o-transition: all 1s ease;
	    transition: all 1s ease;
	}
	.products-kind-list-img img:hover {
	  -webkit-transform: scale(1.1);
	  -ms-transform: scale(1.1);
	  -o-transform: scale(1.1);
	  transform: scale(1.1);
	}

	.products-kind-name {
	    overflow:  hidden;
	    width:  100%;
	    height:  38px;
	}

	.products-kind-name a {
	    display:  block;
	    overflow: hidden;
	    width: 100%;
	    height:  100%;
	    padding: 0 20px;
	    color: #979797;
	    font-size:  14px;
	    line-height:  38px;
	    text-align:  center;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    box-sizing: border-box;
	    -webkit-transition: all 0.5s ease;
	    -o-transition: all 0.5s ease;
	    transition: all 0.5s ease;
	}

	.products-kind-name a b {
		display:  block;
	    overflow: hidden;
	    width: 100%;
	    height:  100%;
		font-weight: normal;
		text-overflow: ellipsis;
	    white-space: nowrap;
	}

	.products-kind-name a:hover {
	    color: #22202b;
	}

	.products-kind-price {
	    overflow:  hidden;
	    width:  100%;
	    height:  40px;
	    color:  #22202b;
	    text-align:  center;
	}

	span.price-num {
	    font-size:  24px;
	    font-weight:  bold;
	    line-height: 40px;
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
</style>
