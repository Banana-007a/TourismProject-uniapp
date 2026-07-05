import  Mock  from "mockjs";
import pageApi from './mockData/pageApi.js'
Mock.mock(/api\/user\/getBanner/,'get',pageApi.getBanner)
Mock.mock(/api\/user\/getHomeList/,'get',pageApi.getHomeList)