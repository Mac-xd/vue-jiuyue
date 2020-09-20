import http from './http';
const baseURL = 'http://api.cms.liulongbin.top/api';
const lunbo = 'http://152.136.97.184:3000';
const url = 'http://152.136.97.184:5001/search';
export const listObj = {
    // 获取轮播图http://152.136.97.184:3000/getlunbo
    getLoopNews:() => http.get(`${lunbo}/getlunbo`),
    // 获取新闻列表  /api/getnewslist
    getnews:() => http.get(`${baseURL}/getnewslist`),
  
    
    // 请求嵌套不确定数据  递归组件
    getNav:() => http.get('http://localhost:3001/allData')
}

