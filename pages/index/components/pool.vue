<template>
	<view class="pool-item">
		<view class="img-wrap">
			<view class="label">2人团</view>
			<image class="img" :src="info.imageUrl" mode="aspectFit"></image>
		</view>
		<text class="name">{{info.name}}</text>
		<text class="brief">{{info.brief}}</text>
		<text class="price-wrap">拼团价: <text class="symbol">¥</text><text class="price">{{info.salePrice}}</text> </text>
	</view>
</template>

<script>
	export default {
		name: 'PoolItem',
		props: {
			info: {
				type: Object,
				default: () => {}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.pool-item {
		display: flex;
		flex-direction: column;
		width: 200rpx;

		.img-wrap {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 38vw;
			height: 38vw;
			background: $my-card-bg-color;
			border-radius: 10rpx;
			
			.img {
				width: 38vw;
				height: 38vw;
				border-radius: 10rpx;
			}
			
			.label {
				position: absolute;
				top: 0;
				left: 0;
				padding: 6rpx 14rpx;
				background: $my-card-label-color;
				color: #fff;
				font-size: 22rpx;
				border-top-left-radius: 10rpx;
				border-bottom-right-radius: 18rpx;
			}
		}

		.name {
			margin-top: 12rpx;
			width: 36vw;
			color: $uni-text-color;
			font-size: 24rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.brief,
		.price-wrap {
			margin: 6rpx 0 0 1vw;
			width: 36vw;
			color: $uni-text-color-assist;
			font-size: 20rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.price-wrap {
			width: 36vw;
			margin-top: 12rpx;
			color: $uni-text-color-sec;
			font-size: 20rpx;

			.symbol {
				margin: 0 6rpx 0 10rpx;
				color: $my-color-primary;
				font-size: 16rpx;
				font-weight: bolder;
			}

			.price {
				color: $my-color-primary;
				font-size: 28rpx;
			}
		}


	}
</style>
