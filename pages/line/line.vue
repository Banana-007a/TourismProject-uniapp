<template>
	<view class="line">
		<view class="maxBox">
			<!-- 同时判断location存在且数组长度为2，避免经纬度报错 -->
			<map 
				v-if="detailInfo.id && detailInfo.location?.length === 2" 
				style="width: 100%; height: 900rpx;" 
				:markers="detailInfo.markers || []" 
				:longitude="detailInfo.location[1]" 
				:latitude="detailInfo.location[0]" 
				:show-scale="true"
			></map>
		</view>
		<view class="infos">
			<view class="tit">
				当前游玩项目{{detailInfo.title}}
			</view>
			<view class="stars">
				<text>项目推荐：</text>
				<up-rate :count="count" v-model="detailInfo.count"></up-rate>
			</view>
			<view class="scrollview">
				<up-scroll-list :indicator="true" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
					<!-- 增加other数组兜底，防止undefined报错 -->
					<view 
						class="item" 
						v-for="(item,index) in detailInfo.other || []" 
						:key="item.id"
					>
						<image :src="item.url" mode="aspectFill"></image>
						<view class="title">{{item.title}}</view>
					</view>
				</up-scroll-list>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { projectinfo } from "../../api/api.js"

const detailInfo = ref({})
const count = ref(5)
onLoad((props) => {
	if (!props.id) return
	projectinfo({ id: props.id }).then((data) => {
		detailInfo.value = data
		console.log(data)
	}).catch(err => {
		console.log('接口请求失败', err)
	})
})
</script>

<style lang="scss">
.line {
	width: 100%;
}
.maxBox {
	width: 100%;
}
.infos {
	padding: 20rpx;
	box-sizing: border-box;
	.tit {
		font-size: 34rpx;
		font-weight: 600;
		color: #333;
	}
	.stars {
		font-size: 28rpx;
		margin: 20rpx 0 40rpx;
		display: flex;
	}
	.scrollview {
		width: 100%;
		// 横向滚动列表容器
		.item {
			width: 280rpx; /* 给item固定宽度，图片正常渲染 */
			margin-right: 20rpx;
			text-align: center;
			image {
				width: 100%;
				height: 200rpx;
				border-radius: 14rpx;
			}
			.title {
				font-size: 28rpx;
				font-weight: 600;
				color: #333;
				margin-top: 10rpx;
			}
		}
	}
}
</style>