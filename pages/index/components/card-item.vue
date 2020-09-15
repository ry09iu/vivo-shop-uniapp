<template>
	<view class="card-item">
		<view class="img-wrap">
			<image class="img" :src="info.imageUrl" mode="aspectFit"></image>
		</view>
		<!-- <image class="img" :src="info.imageUrl" mode="aspectFit"></image> -->
		<text class="name">{{info.name}}</text>
		<text class="brief">{{info.brief}}</text>
		<text class="price-wrap"><text class="symbol">¥</text><text class="price">{{info.salePrice}}</text> </text>
	</view>
</template>

<script>
	export default {
		name: 'CardItem',
		props: {
			info: {
				type: Object,
				default: () => {}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.card-item {
		display: flex;
		flex-direction: column;

		.img-wrap {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 42vw;
			height: 42vw;
			border-radius: 10rpx;

			.img {
				width: 38vw;
				height: 38vw;
				border-radius: 10rpx;
			}
		}
		
		.img {
			width: 38vw;
			height: 38vw;
			border-radius: 10rpx;
		}

		.name {
			margin-top: 12rpx;
			width: 40vw;
			color: $uni-text-color;
			font-size: 26rpx;
			font-weight: bolder;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.brief,
		.price-wrap {
			margin: 6rpx 0 0 1vw;
			width: 40vw;
			color: $uni-text-color-assist;
			font-size: 22rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.price-wrap {
			width: 40vw;
			margin-top: 6rpx;
			color: $uni-text-color-sec;
			font-size: 20rpx;
			font-weight: bolder;

			.symbol {
				margin: 0 6rpx 0 10rpx;
				color: $my-color-primary;
				font-size: 18rpx;
			}

			.price {
				color: $my-color-primary;
				font-size: 28rpx;
			}
		}

	}
</style>
