import http from './http.js'

// 首页banner

export const getBanner = () => {
	return http('/user/getBanner')
}
// 首页瀑布流列表
export const getHomeList = () => {
	return http('/user/getHomeList')
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
