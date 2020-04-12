const BASS_URL = 'http://134.175.31.248:8080'
export const http = (options) =>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url : BASS_URL+options.url,
			method : options.method || 'GET',
			data: options.data || {},
			success:(res) => {
				if(res.data.code != 'success'){
					return uni.showToast({
						title:'获取数据失败'
					})
				}
				resolve(res)
			},
			fail:(err) => {
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})
}