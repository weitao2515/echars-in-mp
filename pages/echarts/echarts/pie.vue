<template>
	<view class="content">
		<view class="pie">
			<mpvue-echarts @onInit="onInit" canvasId="line" ref="lineChart"/>
		</view>
	</view>
</template>

<script>
	import * as echarts from '../../../components/echarts/echarts.simple.min.js';
	import mpvueEcharts from '../../../components/mpvue-echarts/src/echarts.vue';
	import {pie} from '../../../util/echarsOption.js'
	export default {
		data() {
			return {
				option:pie
			}
		},
		onLoad() {
		},
		methods: {
			onInit ({ width, height }) {
				let canvas = this.$refs.lineChart.canvas;
				echarts.setCanvasCreator(() => canvas);
				const chart = echarts.init(canvas, null, {
				    width: width,
				    height: height
				  })
			    canvas.setChart(chart)
			    chart.setOption(this.option)
			    return chart
			}
		},
		components: {
			mpvueEcharts
		},
		onShareAppMessage () {}
	}
</script>

<style scoped>
		
	.content{
	}
	.pie{
		width: 100%;
		height: 300px;
	}
</style>
