<template>
	<view class="echarts-list">
		<navigator class="echarts" :url="'/pages/echarts/echarts/bar'">bar</navigator>
		<navigator class="echarts" :url="'/pages/echarts/echarts/pie'">pie</navigator>
		<navigator class="echarts" :url="'/pages/echarts/echarts/line'">line</navigator>
		<navigator class="echarts" :url="'/pages/echarts/echarts/bar'">bar</navigator>
		<navigator class="echarts" :url="'/pages/echarts/echarts/bar'">bar</navigator>
		<navigator class="echarts" :url="'/pages/echarts/echarts/bar'">bar</navigator>
		<navigator class="echarts" :url="'/pages/echarts/echarts/bar'">bar</navigator>
		<navigator class="echarts" :url="'/pages/echarts/echarts/bar'">bar</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		}
	}
</script>

<style scoped>
	.echarts-list{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 20rpx;
	}
	.echarts{
		margin: 30rpx 50rpx;
		display: block;
		width: 35%;
		height: 100rpx;
		background-color: #007AFF;
		text-align: center;
		line-height: 100rpx;
		font-size: 50rpx;
	}
	
</style>
