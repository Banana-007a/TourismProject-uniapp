import http from './http.js'
// 本地 mock 数据 — 小程序端 Mock.js 无法拦截 wx.request，直接引入备用
import mockData from './mockData/pageApi.js'

// 首页banner
export const getBanner = () => {
	// #ifdef MP-WEIXIN
	return Promise.resolve(mockData.getBanner().data)
	// #endif
	// #ifndef MP-WEIXIN
	return http('/user/getBanner')
	// #endif
}

// 首页瀑布流列表
export const getHomeList = () => {
	// #ifdef MP-WEIXIN
	return Promise.resolve(mockData.getHomeList().data)
	// #endif
	// #ifndef MP-WEIXIN
	return http('/user/getHomeList')
	// #endif
}

// 登录
export const login = (code) => {
	return http('/login',{code},'POST')
}

// 获取用户信息
export const getUserInfo = () => {
	return http('/getUserInfo')
}

// 获取游玩项目
export const Detailproject = () => {
	return http('/detail/project')
}

//喜欢的项目
export const likeLike = () => {
	return http('/like/list')
}

// 项目详情
export const projectinfo = (data) => {
	return http('/project/info',data)
}
