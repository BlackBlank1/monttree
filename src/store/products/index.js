import { reqProductsList } from "@/api";
//search模块的小仓库
const state = {
    // 对象的字段都需要初始化
    products: {
        dome: [], // 避免一开始报错
        window: [],
        prism: [],
        lens: [],
        asperical_Lens: [],
        parabolic_Mirrors: []
    },
};
const mutations = {
    GETPRODUCTSLIST(state, products){
        state.products = products;
    },
};
const actions = {
    async getProductsList({commit}){
        let result = await reqProductsList();
        for (const key in result) {
            for (const it of result[key]) {
                it.image = "http://localhost:3000/images/products/" + it.image;
                // console.log(it)
            }
        }
        commit("GETPRODUCTSLIST", result);
    }
};

//getters简化数据
const getters = {
    //当前形参state，当前仓库中的state，并非大仓库中的那个state
};
export default {
    state,
    mutations,
    actions,
    getters
}