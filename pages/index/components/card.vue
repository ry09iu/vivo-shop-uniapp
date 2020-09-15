<template>
	<view class="card-wrap">
		<text class="title">— {{info.name}} —</text>
		<view class="list">
			<view class="item-wrap" v-for="(item,index) in info.positionList" :key="item.spuId">
				<card-item :info="item" />
			</view>
		</view>
		<u-line class="u-line" color="#efefef"></u-line>
		<view class="footer">
			<text class="more">查看更多 ></text>
		</view>
	</view>
</template>

<script>
	import CardItem from './card-item.vue'
	export default {
		name: 'CardList',
		components: {
			CardItem
		},
		props: {
			info: {
				type: Object,
				default: () => {}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.card-wrap {
		margin-top: 16rpx;
		background: #fff;
		text-align: center;

		.title {
			width: 100%;
			line-height: 84rpx;
			font-size: 30rpx;
		}

		.list {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;

			.item-wrap {
				flex: 1;
				padding: 32rpx;
				width: 50%;
				min-width: 50%;
				max-width: 50%;
			}
		}

		.footer {
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;

			.more {
				color: $uni-text-color-assist;
				font-size: 24rpx;
			}
		}
	}
</style>
