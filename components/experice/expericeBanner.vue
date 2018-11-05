<template>
    <div id="common-banner">
        <div class="common-banner-container">
            <div class="common-banner-img">
                <img :src="bannerSrc">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'expericeBanner',
    props: {
        bannerSrc: {
            type: String,
            default: 'http://img.visney.cn/img/nuxtPc/experice/banner.png'
        }
    }
}
</script>

<style>
/*banner start*/
    div#common-banner{
        height: 700px;
    }
    #common-banner {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 600px;
    }

    .common-banner-container {
        position: relative;
        width: 1200px;
        height: 100%;
        margin: 0 auto;
    }

    .common-banner-img {
        position: absolute;
        top: 0;
        left: 50%;
        overflow: hidden;
        width: 1920px;
        height: 100%;
        margin-left: -960px;
    }
/*banner start*/
</style>
