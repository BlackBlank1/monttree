<template>
    <!-- header wrap -->
    <div class="swiper-container" ref="floorSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="src/images/banner_1.jpg" alt="" style="height: 100%; width: 100%">
            </div>
            <div class="swiper-slide">
                <img src="src/images/banner_2.jpg" alt="" style="height: 100%; width: 100%">
            </div>
            <div class="swiper-slide">
                <img src="src/images/banner_3.jpg" alt="" style="height: 100%; width: 100%">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev" style="padding-left: 85px"></div>
        <div class="swiper-button-next" style="padding-right: 85px"></div>
    </div>


</template>

<script>
    import Swiper from "swiper";

    export default {
        name: "",
        mounted() {
            var mySwiper = new Swiper(this.$refs.floorSwiper, {
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',

                }
            })
        }
    }
</script>
<style>
    .swiper-container {
        height: 553px;
        display: flex;
        --swiper-theme-color: white;/* 设置Swiper风格 */
        --swiper-navigation-color: white;/* 单独设置按钮颜色 */
        --swiper-navigation-size: 30px;/* 设置按钮大小 */
    }
</style>



