import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import store from '@/store';
import "swiper/css/swiper.css";
import "./font-awesome/css/font-awesome.min.css"
import "./css/icomoon.css"
import "./bootstrap/css/bootstrap.min.css"
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');
