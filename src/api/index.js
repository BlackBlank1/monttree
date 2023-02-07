//当前这个模块：API进行统一管理
import requests from "./request";

export const reqProductsList = () => {
    //发请求:axios发请求返回结果Promise对象
    return requests({url:"/products", method:"get"});
}