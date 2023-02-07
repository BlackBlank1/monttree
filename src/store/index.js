import Vuex from 'vuex';

//引入仓库
import Products from './products'

//对外暴露store类的一个实例
// export default new Vuex.Store({
//     //实现Vuex仓库模块式开发存储数据
//     modules:{
//         Products,
//     }
// });

import { createStore } from "vuex";

export default createStore({
    modules:{
        Products
    }
});