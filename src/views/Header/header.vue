<template>
    <!-- header -->
    <div class="navbar-header" id="page1">
        <div style="width: 100%; position: fixed; z-index: 999; background: white; border: 1px solid #cccccc">
            <div class="navbar-title">
                <img src="/src/images/logo.png" alt="" style="height: 100%">
                <div style="flex-grow: 1"></div>
                <div class="title-info" @click="Submit(1)">
                    <span> Home </span>
                </div>
                <div class="title-info" @click="Submit(2)">
                    <span> About </span>
                </div>
                <div class="title-info">
                    <div class="topclick">
                        <div class="ltbox1" @click="Submit(3)">
                            <p>Products</p>
                        </div>
                        <ul class="ltbox2">
                            <li @click="Submit(5)">Dome</li>
                            <li @click="Submit(6)">Window</li>
                            <li @click="Submit(7)">Prism</li>
                            <li @click="Submit(8)">Lens</li>
                            <li style="height: 60px; display: flex; flex-direction: column;" @click="Submit(9)">
                                <div style="margin-bottom: -10px">
                                    Aspherical
                                </div>
                                <div>
                                    Lens
                                </div>
                            </li>
                            <li style="height: 60px; display: flex; flex-direction: column;"
                                @click="Submit(10)">
                                <div style="margin-bottom: -10px">
                                    Parabolic
                                </div>
                                <div>
                                    Mirrors
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="title-info" @click="Submit(4)">
                    <span> Contact </span>
                </div>
            </div>
        </div>

    </div>

    <!-- Carousel -->
    <div class="swiper-container" ref="floorSwiper" style="height: 610px">
        <div class="swiper-wrapper" style="margin-top: 30px">
            <div class="swiper-slide" v-for="item in carousel.carousel">
                <img :src="item.image" alt={{item.name}} style="height: 100%; width: 100%">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev" style="padding-left: 85px"></div>
        <div class="swiper-button-next" style="padding-right: 85px"></div>
    </div>

    <!--  About  -->
    <div style="margin-top: 10px" id="page2">
        <div class="container">
            <div style="margin-top: 10px">
                <br>
                <h1 class="centered col-lg-offset-5" style="margin-top: 20px">ABOUT US</h1>
                <hr style="margin-top: 20px;margin-bottom: 50px" class="hr-style">
                <div class="col-lg-6">
                    <p style="font-size: 18px">Monttree Precision Optical Co., Ltd founded in 2005. Monttree is an
                        optical manufacturer, which
                        dedicates to high quality optics products , such as dome ,lens, prisms,mirrors, windows and etc.
                        We
                        serves Laser, electronics, telecommunication, thermal imaging, infrared sensor for industrial,
                        medical and scientific research applications.</p>
                </div>
                <div class="col-lg-6">
                    <p style="font-size: 18px">Our skilled engineers can design and process optical products to meet
                        your custom requirements. We
                        can provide you the most effective and timely help,and superior quality,low cost products.
                        <br>We know well about ISO10110, US Military standard and DIN. Our products are fully complied
                        with
                        these standards and we carry out strict quality control according to ISO 9001 quality management
                        system.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Products bg -->
    <div class="products-bg" id="page3">
        <div class="products-title">
            <div>
                <h1 style="font-size: 40px; color: white;">OUR PRODUCTS</h1>
            </div>
            <div>
                <hr class="hr-style">
            </div>
        </div>
    </div>

    <!-- Dome -->
    <div class="dome" id="page5">
        <div class="col-lg-9 col-lg-offset-0">
            <h2 style="font-size: 30px;">Dome</h2>
        </div>
        <div class="col-lg-9 col-lg-offset-0">
            <p style="font-size: 18px">Material: optical glass, fused silica, ZnSe, ZnS, germanium, silicon, sapphire,
                MgF2,
                polycarbanate and etc
                <br>Diameter size can be 500mm
                <br>Dia.150mm, the surface accuracy can be λ/30
                <br>Centering error can be less than 30 seconds
                <br>Surface quality can be 40-20 or better
            </p>
        </div>

        <!--products-images-->
        <div style="display: flex; flex-direction: row; flex-wrap: wrap; margin-left: 185px; margin-top: 20px">
            <div style="display: flex; flex-direction: column; width: 255px; height: 264px;margin-left: 20px"
                 v-for="item in products.dome" id="products_box">
                <div style="overflow: hidden;width: 255px; height: 204px">
                    <img :src="item.image" :alt="item.name" style="width: 100%; height: 100%">
                </div>
                <div style="background: #3498db; height: 40px; display: flex; justify-content: center; align-items: center">
                    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                        <span style="color: white; font-weight: bold">{{ item.name }}</span>
                        <span style="color: white; font-size: 14px">{{ item.description }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Window   -->
    <div id="page6" class="greywrap" style="background-color: #f5f5f5; height: 651px; margin-top: 40px">
        <div class="container">
            <div style="display: flex; flex-direction: column; margin-top: 40px">
                <div class="col-lg-12">
                    <h2>Window</h2>
                    <p style="font-size: 18px">Material: BK7, quartz, fused silica , ZNSE, ZNS, germanium, silicon,
                        sapphire, MgF2, LiF, GaAs,
                        CaF2, BaF2 and etc
                        <br> We can process the window size to be 800mm
                        <br> The surface accuracy can be λ/30
                        <br> The parallelism can get to be +/-1 second
                        <br> The thickness can be 0.1mm
                        <br> Surface quality can be 40-20 or better
                    </p>
                </div>
                <div style="display: flex; flex-direction: row; flex-wrap: wrap; margin-top: 20px">
                    <div style="display: flex; flex-direction: column; width: 350px; height: 293px;margin-left: 15px"
                         v-for="item in products.window" id="products_box">
                        <div style="overflow: hidden;width: 350px; height: 253px">
                            <img :src="item.image" :alt="item.name" style="width: 100%; height: 100%">
                        </div>
                        <div style="background: #3498db; height: 50px; display: flex; justify-content: center; align-items: center">
                            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                                <span style="color: white; font-weight: bold">{{ item.name }}</span>
                                <span style="color: white; font-size: 14px">{{ item.description }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--  Prism  -->
    <div id="page7" class="whitewrap">
        <div class="container">
            <div style="display: flex; flex-wrap: wrap; flex-direction: column">
                <div class="col-lg-12">
                    <h2>Prism</h2>
                    <p style="font-size: 18px">Material: BK7, quartz, fused silica, ZNSE, ZNS, germanium, silicon,
                        sapphire, YAG, CaF2, BaF2,
                        SiC and etc
                        <br> The surface accuracy can be λ/30
                        <br> The angle toerlance can be +/-1 second
                        <br> Surfac qaulity can be 20-10 or better
                    </p>
                </div>
                <div style="display: flex; flex-direction: row; flex-wrap: wrap; margin-top: 20px">
                    <div style="display: flex; flex-direction: column; width: 255px; height: 264px;margin-left: 20px"
                         v-for="item in products.prism" id="products_box">
                        <div style="overflow: hidden;width: 255px; height: 190px" v-if="!item.description">
                            <img :src="item.image" :alt="item.name" style="width: 100%; height: 100%">
                        </div>
                        <div style="overflow: hidden;width: 255px; height: 150px" v-if="item.description">
                            <img :src="item.image" :alt="item.name" style="width: 100%; height: 100%">
                        </div>
                        <div style="background: #3498db; height: 40px; display: flex; justify-content: center; align-items: center"
                             v-if="!item.description">
                            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                                <span style="color: white; font-weight: bold">{{ item.name }}</span>
                                <div style="display: flex; flex-direction: column;padding: 0; margin: 0">
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description">{{ item.description }}</span>
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description2">{{ item.description2 }}</span>
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description3">{{ item.description3 }}</span>
                                </div>
                            </div>
                        </div>
                        <div style="background: #3498db; height: 80px; display: flex; justify-content: center; align-items: center"
                             v-if="item.description">
                            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                                <span style="color: white; font-weight: bold">{{ item.name }}</span>
                                <div style="display: flex; flex-direction: column;padding: 0; margin: 0">
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description">{{ item.description }}</span>
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description2">{{ item.description2 }}</span>
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description3">{{ item.description3 }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Lens  -->
    <div id="page8" class="greywrap" style="background-color: #f5f5f5; height: 850px; margin-top: 40px">
        <div class="container">
            <div style="display: flex; flex-direction: column; margin-top: 40px">
                <div class="col-lg-12">
                    <h2>Lens</h2>
                    <p style="font-size: 18px">Material: Schott glass, fused silica, ZNSE, ZNS, germanium, silicon,
                        sapphire, MgF2, LiF, GaAs,
                        CaF2, BaF2, polycarbanate, PMMA and etc
                        <br> We can process the lens size to be 500mm,
                        <br> The surface accuracy can be λ/30
                        <br> The cetering error can be less than 30 seconds or better
                        <br> The surface quality can be 20-10 or better
                    </p>
                </div>
                <div style="display: flex; flex-direction: row; flex-wrap: wrap; margin-top: 20px">
                    <div style="display: flex; flex-direction: column; width: 260px; height: 264px;margin-left: 20px"
                         v-for="item in products.lens" id="products_box">
                        <div style="overflow: hidden;width: 260px; height: 190px">
                            <img :src="item.image" :alt="item.name" style="width: 100%; height: 100%">
                        </div>
                        <div style="background: #3498db; height: 50px; display: flex; justify-content: center; align-items: center">
                            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                                <span style="color: white; font-weight: bold">{{ item.name }}</span>
                                <div style="display: flex; flex-direction: column;">
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description">{{ item.description }}</span>
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description2">{{ item.description2 }}</span>
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description3">{{ item.description3 }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Aspherical Lens  -->
    <div id="page9" class="whitewrap" style="height: 350px; margin-top: 40px">
        <div class="container">
            <div style="display: flex; flex-wrap: wrap; flex-direction: row">
                <div class="col-lg-6">
                    <h2>Aspherical Lens</h2>
                    <p style="font-size: 18px;">Material: optical glass, fused silica, germanium, silicon, PMMA and etc
                        <br> RMS less than λ/30
                        <br> S.D. can be 40-20
                    </p>
                </div>
                <div style="display: flex; flex-direction: row; flex-wrap: wrap;margin-left: 20px">
                    <div style="display: flex; flex-direction: column; width: 355px; height: 348px;margin-left: 20px"
                         v-for="item in products.asperical_Lens" id="products_box">
                        <div style="overflow: hidden;width: 355px; height: 288px">
                            <img :src="item.image" :alt="item.name" style="width: 100%; height: 100%">
                        </div>
                        <div style="background: #3498db; height: 50px; display: flex; justify-content: center; align-items: center">
                            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                                <span style="color: white; font-weight: bold">{{ item.name }}</span>
                                <div style="display: flex; flex-direction: column;">
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description">{{ item.description }}</span>
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description2">{{ item.description2 }}</span>
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description3">{{ item.description3 }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Parabolic Mirrors -->
    <div id="page10" class="greywrap" style="height: 450px; margin-top: 40px; background-color: #f5f5f5;">
        <div class="container">
            <div style="display: flex; flex-wrap: wrap; flex-direction: row; margin-top: 40px">
                <div class="col-lg-6">
                    <h2>Parabolic Mirrors</h2>
                    <p style="font-size: 18px">Material : CU, Al
                        <br> RMS can be less than λ/30
                    </p>
                </div>
                <div style="display: flex; flex-direction: row; flex-wrap: wrap;margin-left: 20px">
                    <div style="display: flex; flex-direction: column; width: 355px; height: 348px;margin-left: 20px"
                         v-for="item in products.parabolic_Mirrors" id="products_box">
                        <div style="overflow: hidden;width: 355px; height: 288px">
                            <img :src="item.image" :alt="item.name" style="width: 100%; height: 100%">
                        </div>
                        <div style="background: #3498db; height: 50px; display: flex; justify-content: center; align-items: center">
                            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                                <span style="color: white; font-weight: bold">{{ item.name }}</span>
                                <div style="display: flex; flex-direction: column;">
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description">{{ item.description }}</span>
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description2">{{ item.description2 }}</span>
                                    <span style="color: white; font-size: 14px"
                                          v-if="item.description3">{{ item.description3 }}</span>
                                </div>
                            </div>
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
                    <hr class="hr-style">
                </div>
            </div>
        </div>
        <div class="contact">
            <div class="contact-content">
                <div>
                    <h1>MONTTREE PRECISION OPTICAL CO., LTD</h1>
                </div>
                <div>
                    <h3 style="font-size: 24px">Contact</h3>
                    <p style="font-size: 18px">
                        <span class="icon icon-home"></span> NO.111 Meifeng Rd., Fuzhou,Fujian, China 350003<br/>
                        <span class="fa fa-envelope"></span> info<img src="/src/images/at.png" style="width: 18px;" alt="at.png">monttree.com
                        <br/>
                        <span class="icon icon-phone"></span> 86 591 83752442 <br/>
                        <i class="fa fa-fax"></i> 86 591 87899101 <br/>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-content">
                <div style="margin-top: 20px">
                    <h4 style="color: white; font-size: 18px">Copyright ©Monttree Precision Optical All Rights
                        Reserved</h4>
                </div>
                <div class="copyright">
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
            this.$store.dispatch('getCarouselList')
            this.$store.dispatch('getBackgroundList')
        },
        computed: {
            ...mapState({
                products: state => {
                    return state.Products.products;
                },
                carousel: state => {
                    return state.Carousel.carousel
                },
                // background: state => {
                //     // console.log(state.Background.background)
                //     return state.Background.background
                // },
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
            carousel: {
                handler() {
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
                var PageId = document.querySelector('#page' + key);
                // 使用平滑属性，滑动到上方获取的距离
                // 下方我只设置了top，当然 你也可以加上 left 让他横向滑动
                // widow 根据浏览器滚动条，如果你是要在某个盒子里面产生滑动，记得修改
                window.scrollTo({
                    'top': PageId.offsetTop - 50,
                    'behavior': 'smooth'
                })
            },
        }
    }
</script>

<!--Drop down box css-->
<style>

    .topclick {
        height: 50px;
        width: 100px;
        position: relative;
        display: inline-block;
    }

    .ltbox1 {
        width: 100px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        cursor: pointer; /*鼠标指针经过*/
    }

    .ltbox2 {
        width: 120px;
        margin-top: 2px;
        border-radius: 5px;
        background-color: white;
        display: none; /*使下拉菜单栏消失*/
        margin-left: -10px;
    }

    .ltbox2 li {
        height: 40px;
        width: 120px;
        line-height: 40px;
        display: flex; /*使下拉菜单栏显示*/
        justify-content: center;
        align-items: center;
        margin-left: -40px;
    }

    .ltbox2 li:hover {
        background-color: #cccccc;
    }

    .topclick:hover .ltbox2 {
        display: block;
    }
</style>

<style>

    .copyright a:hover {
        color: #3498db;
    }

    .title-info {
        cursor: pointer;
    }

    /* Header */
    .navbar-header {
        height: 50px;
        display: flex;
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
        margin: 0;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        align-items: center;
        font-size: 18px;
    }

    .title-info:hover {
        background: #cccccc;
    }


    /* Carousel */
    .swiper-container {
        height: 553px;
        display: flex;
        --swiper-theme-color: white; /* 设置Swiper风格 */
        --swiper-navigation-color: white; /* 单独设置按钮颜色 */
        --swiper-navigation-size: 30px; /* 设置按钮大小 */
        padding-top: 100px;
    }


    /* About */


    /* Products*/
    .products-bg {
        display: flex;
        background-image: url("/src/images/bg/divider1_1.jpg");
        height: 300px;
        align-items: center;
        justify-content: center;
        margin-top: 60px;
        margin-bottom: 20px;
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
        background-image: url("/src/images/bg/divider1_3.jpg") !important;
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

    .hr-style {
        display: flex;
        width: 600px;
        margin-top: 10px;
        border: 1px solid #cccccc !important;
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
        height: 117px;
    }

    .footer-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

</style>