import { reqCarouselList } from "@/api";
//carousel模块的小仓库
const state = {
    carousel: {
        carousel: []
    }
};
const mutations = {
    GETCAROUSELLIST(state, carousel){
        state.carousel = carousel;
    },
};
const actions = {
    async getCarouselList({commit}){
        let result = await reqCarouselList();
        for (const key in result) {
            for (const it of result[key]) {
                it.image = "http://localhost:3000/images/" + it.image;
                // console.log(it)
            }
        }
        commit("GETCAROUSELLIST", result);
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