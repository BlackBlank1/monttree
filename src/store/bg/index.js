import { reqBackgroundList } from "@/api";
//carousel模块的小仓库
const state = {
    background: {
        background: []
    }
};
const mutations = {
    GETBACKGROUNDLIST(state, background){
        state.background = background;
    },
};
const actions = {
    async getBackgroundList({commit}){
        let result = await reqBackgroundList();
        for (const key in result) {
            for (const it of result[key]) {
                it.image = "http://localhost:3000/images/bg/" + it.image;
                // console.log(it.image);
            }
        }
        commit("GETBACKGROUNDLIST", result);
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