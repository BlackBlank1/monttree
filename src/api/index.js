//当前这个模块：API进行统一管理
import requests from "./request";

export const reqProductsList = () => {
    //发请求:axios发请求返回结果Promise对象
    return requests({url:"/products", method:"get"});
};

export const reqCarouselList = () => {
    //发请求:axios发请求返回结果Promise对象
    return requests({url:"/carousel", method:"get"});
};

export const reqBackgroundList = () => {
    //发请求:axios发请求返回结果Promise对象
    return requests({url:"/background", method:"get"});
}
