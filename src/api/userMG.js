import axios from 'axios';
import {
  loginreq,
  req
} from './axiosFun';

const baseUrl = 'https://i.news.qq.com/trpc.qqnews_web.pc_base_srv.base_http_proxy/'
const baseUr2 = 'http://newscms.zyjjzsh.com/index.php?appid=1&appsecret=PHPCMF5CF8908813E36&'


// 登录接口
export const login = (params) => {
  return loginreq("post", "/api/login", params)
};
// 获取用户菜单
export const menu = (params) => {
  return axios.get("/api/menu?&token=" + localStorage.getItem('logintoken')).then(res => res.data)
};
// 退出接口
export const loginout = () => {
  return axios.delete("/api/login?&token=" + localStorage.getItem('logintoken')).then(res => res.data)
};

/**
 * 用户管理
 **/
// 用户管理-获取用户列表
export const userList = (params) => {
  return req("post", "/api/User/list", params)
};
// 用户管理-保存（添加编辑）
export const userSave = (params) => {
  return req("post", "/api/User/save", params)
};
// 用户管理-删除用户
export const userDelete = (params) => {
  return axios.delete("/api/User/delete?ids=" + params + "&token=" + localStorage.getItem('logintoken')).then(res => res.data)
};



//首页腾讯新闻
export const newslist1 = (params) => {
  return axios.get("https://i.news.qq.com/trpc.qqnews_web.kv_srv.kv_srv_http_proxy/list?sub_srv_id=24hours&srv_id=pc&offset=0&limit=20&strategy=1&ext={%22pool%22:[%22top%22],%22is_filter%22:7,%22check_type%22:true}").then(res => res.data)
};

export const newslist2 = (params) => {
  return axios.get(`${baseUrl}NinjaPageContentSync?pull_urls=news_top_2018`).then(res => res.data)
};


export const newslist3 = (params) => {
  return axios.get(`${baseUrl}NinjaPageContentSync?pull_urls=today_topic_2018`).then(res => res.data)
};




//cms站内新闻
export const newslistcms = (url) => {
  return axios.post(`${baseUr2}${url}`).then(res => res.data)
};

//内页列表

export const newslistnav = (url) => {
  return axios.post(`${baseUr2}${url}`).then(res => res.data)
};
