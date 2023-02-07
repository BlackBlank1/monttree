import {createRouter, createWebHashHistory} from 'vue-router';
import Header from "@/views/Header/header.vue";
import Footer from "@/views/Footer/footer.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:"/header",
            component:Header
        },
        {
            path:"/footer",
            component:Footer
        }
    ]
});


export default router;