<template>
	<view class="content">
		<view class="text-area">
		</view>
		<image @click="changeImages" :src="image" mode="" style="width: 160rpx;height: 160rpx;border-radius: 80rpx;"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				image:''
			}
		},
		onLoad() {
			this.changeImages()
		},
		methods: {
			login(){
				// this.$http.request({
				// 	method: 'GET',
				//     url: 'mp',
				//     success: (res) => {
				// 		this.title = res.data.message
				//         console.log(res);
				//     }
				// });
			},
			changeImages(){
				uni.request({
					url:"https://api.uomg.com/api/rand.avatar?sort=动漫女&format=json",
					success:(res)=> {
						this.image = res.data.imgurl
					}
				})
			}
		},
		onShareAppMessage () {}
	}
</script>

<style scoped>
	
</style>
