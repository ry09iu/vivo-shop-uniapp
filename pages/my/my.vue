<template>
	<view class="my">
		<view class="header">
			<!-- <view class="nav">
				<text>我的</text>
			</view> -->
			<view class="user">
				<view class="left">
					<u-avatar :src="src" :size="120"></u-avatar>
					<view class="info">
						<text class="name">Ry09iu</text>
						<text>18812345678</text>
					</view>
				</view>
				<view class="right">
					<view>账号管理 <u-icon name="arrow-right" color="#cfcfcf" size="26"></u-icon>
					</view>
				</view>
			</view>

			<view class="order">
				<view class="top">
					<text class="title">我的订单</text>
					<view class="more">更多 <u-icon name="arrow-right" color="#cfcfcf" size="26"></u-icon>
					</view>
				</view>
				<view class="grid-list">
					<view class="grid-item-wrap" v-for="(item,index) in gridList" :key="index">
						<grid-menu-item class="grid-item" :info="item"></grid-menu-item>
					</view>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="menu-list">
				<view class="menu-item-wrap" v-for="(item,index) in menuList" :key="index">
					<menu-item class="menu-item" :info="item"></menu-item>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import GridMenuItem from './components/grid-menu-item.vue'
	import MenuItem from './components/menu-item.vue'
	export default {
		components: {
			GridMenuItem,
			MenuItem
		},
		data() {
			return {
				isLoading: false,
				navigationList: [],
				src: '/static/images/my/avator.png',
				gridList: [{
					img: '/static/images/my/pay.png',
					title: '待付款'
				}, {
					img: '/static/images/my/send.png',
					title: '待收货'
				}, {
					img: '/static/images/my/appraise.png',
					title: '待评价'
				}, {
					img: '/static/images/my/drawback.png',
					title: '退货/退款'
				}],
				menuList: [{
					img: '/static/images/my/coupon.png',
					title: '我的优惠券'
				}, {
					img: '/static/images/my/favorite.png',
					title: '我的收藏'
				}, {
					img: '/static/images/my/appraise2.png',
					title: '我的评价'
				}, {
					img: '/static/images/my/address1.png',
					title: '我的收货地址',
				}]
			}
		},
		async onLoad() {}
	}
</script>

<style lang="scss" scoped>
	.my {
		color: $uni-text-color;
		font-size: 26rpx;
	}
	
	.nav {
		padding: 44rpx 0 0;
		width: 100%;
		text-align: center;
		line-height: 100rpx;
		font-size: 38rpx;
	}

	.header {
		background-image: linear-gradient(#feefef, #fff);

		.user {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 120rpx 36rpx 36rpx;

			.left {
				display: flex;
				align-items: center;

				.info {
					display: flex;
					flex-direction: column;
					margin-left: 24rpx;
					color: #ccc;
					font-size: 24rpx;
				}

				.name {
					color: $uni-text-color;
					font-size: 32rpx;
					font-weight: bolder;
				}
			}

			.right {
				color: $uni-text-color-assist;
			}
		}

		.order {
			padding: 0 36rpx;

			.top {
				display: flex;
				justify-content: space-between;

				.title {
					font-size: 36rpx;
				}

				.more {
					color: $uni-text-color-assist;
				}
			}

			.grid-list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;
				width: 100%;
				padding: 42rpx 0;
			}

			.grid-item-wrap {
				flex: 1;
				width: 25%;
				min-width: 25%;
				max-width: 25%;
			}
		}
	}

	.content {
		margin-top: 36rpx;
		background: #FFFFFF;
		
		.menu-list {
			padding: 0 36rpx;
		}
	}
</style>
