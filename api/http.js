let baseUrl = ""
// let baseUrl = "http://159.75.169.244:4200/api"
//通过环境来判断
if(process.env.NODE_ENV==='development'){
	baseUrl="https://apifoxmock.com/m1/4728220-0-default/api"
	// baseUrl="http://localhost:5173/api"
}else{
	baseUrl= "https://apifoxmock.com/m1/4728220-0-default/api"
}
export default function http(url, data = {}, method = 'GET') {
	//对外支持链式调用
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			method,
			header: {
				'token': uni.getStorageSync('token') || ''
			},
			success: (res) => {
				//http 的状态码
				if (res.statusCode == 200) {
					if (res.data.code == 1) {
						resolve(res.data.data)
					} else if (res.data.code == 0) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						reject(res.data.msg)
					}
				}
			},
			// 补充fail捕获网络异常，否则请求失败不会走reject
			fail: (err) => {
				reject(err)
			}
		})
	})
}