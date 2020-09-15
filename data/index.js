import banners from './banners.js'
import floorList from './floor_list.js'
import cateList from './cate_list.js'

const json = {
	banners,
	floorList,
	cateList
}

export default (name, loading = true) => {
	if (loading) {
		// uni.showLoading()
	}

	return new Promise(resolve => {
		setTimeout(() => {
			// uni.hideLoading()
			resolve(json[name])
		}, 500)
	})
}
