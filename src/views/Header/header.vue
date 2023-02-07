<template>
    <!-- header -->
    <div class="navbar-header" id="page1">
        <div style="width: 100%; position: fixed; z-index: 999; background: white">
            <div class="navbar-title">
                <img src="src/images/logo.png" alt="" style="height: 100%">
                <div style="flex-grow: 1"></div>
                <div class="title-info">
                    <a @click="Submit(1)"> Home </a>
                </div>
                <div class="title-info">
                    <a @click="Submit(2)"> About </a>
                </div>
                <div class="title-info">
                    <a @click="Submit(3)"> Products </a>
                </div>
                <div class="title-info">
                    <a @click="Submit(4)"> Contact </a>
                </div>
            </div>
        </div>

    </div>

    <!-- Carousel -->
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

    <!--  About  -->
    <div class="about-frame" id="page2">
        <div style="display: flex">
            <h1 style="font-size: 36px; margin-top: 70px; font-weight: inherit"> ABOUT US</h1>
        </div>
        <div>
            <hr>
        </div>
        <div style="display: flex; flex-direction: row; font-size: 18px; padding: 20px">
            <div style="display: flex; width: 547px; padding-right: 30px">
                <p>Monttree Precision Optical Co., Ltd founded in 2005. Monttree is an optical manufacturer, which
                    dedicates to high quality optics products , such as dome ,lens, prisms,mirrors, windows and etc. We
                    serves Laser, electronics, telecommunication, thermal imaging, infrared sensor for industrial,
                    medical and scientific research applications.</p>
            </div>
            <div style="display: flex; width: 547px">
                <p>Our skilled engineers can design and process optical products to meet your custom requirements. We
                    can provide you the most effective and timely help,and superior quality,low cost products.
                    We know well about ISO10110, US Military standard and DIN. Our products are fully complied with
                    these standards and we carry out strict quality control according to ISO 9001 quality management
                    system.
                </p>
            </div>
        </div>
    </div>

    <!-- Products  -->
    <div class="products-frame" id="page3">
        <!--   Title    -->
        <div class="products-title">
            <div>
                <h1 style="font-size: 40px; color: white;">OUR PRODUCTS</h1>
            </div>
            <div>
                <hr>
            </div>
        </div>
    </div>

    <!-- Dome -->
    <div class="dome">
        <div>
            <h2 style="font-size: 30px; margin-left: -550px">Dome</h2>
        </div>
        <div style="margin-left: -200px">
            <p style="font-size: 18px">Material: optical glass, fused silica, ZnSe, ZnS, germanium, silicon, sapphire,
                MgF2,
                polycarbanate and etc
                <br>Diameter size can be 500mm
                <br>Dia.150mm, the surface accuracy can be λ/30
                <br>Centering error can be less than 30 seconds
                <br>Surface quality can be 40-20 or better
            </p>
        </div>

        <div v-if="products.dome.length">
            <h1>
                {{ products.dome[0].name }}
            </h1>
        </div>

        <h1>{{ products.dome.length }}</h1>
        <h1>1111111111</h1>

        <!--products-images-->
        <div style="display: flex; flex-direction: row;">
            <div style="width: 255px; padding-right: 40px">
                <div style="display: flex; flex-direction: column">
                    <div style="margin-bottom: -20px; overflow: hidden; height: 200px" v-for="item in products.dome">
                        <!--                        <img src="src/images/products/dome_coated_bk7.jpg" alt="COATED BK7 dome" style="width: 100%">-->
                        <img :src="item.image" alt="" style="width: 100%">
                        <h1>{{ item.name }}</h1>
                    </div>
                    <div style="background: #3498db">
                        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                            <span style="color: white; font-weight: bold">COATED BK7 Dome</span>
                            <span style="color: white; font-size: 14px">We can meet dual wave band coating</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Footer -->
    <div id="page4">
        <div class="contact-outside">
            <div class="contact-title">
                <div>
                    <br>
                    <h1>THANKS FOR VISITING US</h1>
                </div>
                <div>
                    <hr>
                </div>
            </div>
        </div>
        <div class="contact">
            <div class="contact-content">
                <div>
                    <h1>MONTTREE PRECISION OPTICAL CO., LTD</h1>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>
                        <span class="icon icon-home"></span> NO.111 Meifeng Rd., Fuzhou,Fujian, China 350003<br/>
                        <span class="fa fa-envelope"></span> info<img src="src/images/at.png" style="width: 18px;">monttree.com
                        <br/>
                        <span class="icon icon-phone"></span> 86 591 83752442 <br/>
                        <i class="fa fa-fax"></i> 86 591 87899101 <br/>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-content">
                <div>
                    <h4 style="color: white; font-size: 18px">Copyright ©Monttree Precision Optical All Rights
                        Reserved</h4>
                </div>
                <div style="margin-top: -30px">
                    <p>
                        <a href="https://beian.miit.gov.cn/">闽ICP备17023185号</a><br>
                        <a href="https://beian.miit.gov.cn/" style="margin-left: 28px">工信部备案</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    import {mapState, useStore} from "vuex";
    import {toRaw} from "vue";
    import Products from "@/store/products";


    export default {
        name: "",
        mounted() {
            this.$store.dispatch('getProductsList');
            // var mySwiper = new Swiper(this.$refs.floorSwiper, {
            //     loop: true, // 循环模式选项
            //     // 如果需要分页器
            //     pagination: {
            //         el: '.swiper-pagination',
            //         clickable: true,
            //     },
            //
            //     // 如果需要前进后退按钮
            //     navigation: {
            //         nextEl: '.swiper-button-next',
            //         prevEl: '.swiper-button-prev',
            //     }
            // });
        },
        computed: {
            // products() {
            //     return this.$store.state.Products.products
            // }
            ...mapState({
                products: state => {
                    return state.Products.products;
                }
            })
            // ...mapState({
            //     products: state => {
                        // !不需要toRaw!
            //         let products = toRaw(state.Products);
            //         products = products.products;
            //         console.log(products)
            //         if (products && products.dome) {
            //             console.log(1111)
            //             return products
            //         } else {
            //             console.log(2222)
                        // 这个写法不对！
            //             return {dome: []}
            //         }
            //     }
            // })
        },
        watch: {
            products: {
                immediate: true,
                deep: true,
                handler() {
                    console.log("handler")
                        this.$nextTick(() => {
                            //在new swiper实例之前，页面中的结构必须要有
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
                            });
                        })
                }
            }
        },
        methods: {
            Submit(key) {
                // 获取点击的按钮对应页面的id
                var PageId = document.querySelector('#page' + key)
                // 使用平滑属性，滑动到上方获取的距离
                // 下方我只设置了top，当然 你也可以加上 left 让他横向滑动
                // widow 根据浏览器滚动条，如果你是要在某个盒子里面产生滑动，记得修改
                window.scrollTo({
                    'top': PageId.offsetTop,
                    'behavior': 'smooth'
                })
            }
        }
    }
</script>

<style scoped>

    /* Header */
    .navbar-header {
        height: 50px;
        display: flex;
        margin-top: -10px;
    }

    .navbar-title {
        height: 50px;
        background: white;
        border-collapse: collapse;
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        margin-left: 10%;
        margin-right: 10%;
    }

    .title-info {
        height: 50px;
        background: azure;
        margin: 0;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        align-items: center;
        font-size: 18px;
    }

    .title-info:hover {
        background: aqua;
    }


    /* Carousel */
    .swiper-container {
        height: 553px;
        display: flex;
        --swiper-theme-color: white; /* 设置Swiper风格 */
        --swiper-navigation-color: white; /* 单独设置按钮颜色 */
        --swiper-navigation-size: 30px; /* 设置按钮大小 */
    }


    /* About */
    .about-frame {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }


    /* Products*/
    .products-frame {
        display: flex;
        background-image: url("src/images/bg/divider1_1.jpg");
        height: 300px;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
    }

    .products-title {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .dome {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    /* Contact */
    .contact-outside {
        display: flex;
        height: 300px;
        background-image: url("src/images/bg/divider1_3.jpg");
    }

    .contact-title {
        font-size: 20px;
        align-items: center;
        color: white;
        display: flex;
        margin-left: 40px;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
    }

    hr {
        display: flex;
        width: 600px;
        margin-top: -10px;
    }

    .contact {
        height: 278px;
        display: flex;
        margin-left: 180px;
    }

    .contact-content {
        display: flex;
        flex-direction: column;
    }


    /* Footer */
    .footer {
        background: #2b2b2b;
    }

    .footer-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

</style>