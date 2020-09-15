import banners from './banners.js'

const json = {
	banners,
}

export default (name, loading = true) => {
	if (loading) {
		uni.showLoading()
	}

	return new Promise(resolve => {
		setTimeout(() => {
			uni.hideLoading()
			resolve(json[name])
		}, 500)
	})
}
