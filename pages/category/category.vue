<template>
	<view v-if="!isLoading">
		<cate-menu :info="navigationList"></cate-menu>
	</view>
	<view class="home-bg" v-else>
		<image class="loading-bg" src="../../static/images/home/vivo.png" mode="aspectFit"></image>
	</view>
</template>

<script>
	import CateMenu from './components/cate-menu.vue'
	export default {
		components: {
			CateMenu
		},
		data() {
			return {
				isLoading: false,
				navigationList: []
			}
		},
		async onLoad() {
			this.isLoading = true;
			this.navigationList = await this.$api('cateList');
			this.isLoading = false;
			console.log('this.navigationList', this.navigationList);
		}
	}
</script>

<style lang="scss" scoped>
</style>
