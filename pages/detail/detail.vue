<template>
	<view class="detail">
		<up-navbar title="" bg-color="#00000000" :autoBack="true" left-icon-color="#fff"/>
		<view class="d-con">
			<image :src="detail.dt.img" mode="aspectFill"></image>
			<view class="d-content">
				<view class="j-con">
					<view class="tit" style="display: flex;">
						<text style="margin-right: 7rpx; font-size: 17;">{{detail.dt.title}}</text>
						<up-tag text="5A级景区" size="mini" shape="circle"></up-tag>
					</view>
					<view class="jj">
						<view style="width: 700;font-size: 14;">景区介绍：</view>
						<view class="nr">{{detail.dt.introduce}}</view>
					</view>
					<view class="j-con">
						<view class="jj">
							<text style="font-weight: 700; font-size: 14;">开放时间:</text>
							<text class="nr">{{detail.dt.times}}</text>
						</view>
					</view>
					<view class="j-con ls">
						<view class="tit" style="font-size: 34;">游玩推荐</view>
						<view class="jj tj-list">
						<view class="item" v-for="(item,index) in projectList" :key="index" @click="goLine(item)">
							<image :src="item.url" mode="aspectFill"></image>
							<view class="topFixed">
								{{item.tag}}
							</view>
							<view class="infos">
								<view class="tit">
									{{item.title}}
								</view>
								<view class="desc">
									<up-icon name="map" color="#9c9c9c" size="16"></up-icon>
									<view class="text">
										{{item.desc}}
									</view>
								</view>
							</view>
						</view>	
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {onLoad} from "@dcloudio/uni-app"
	import {ref,reactive} from "vue"
	import {Detailproject} from "/api/api.js"
	
	const projectList=ref([])
	const goLine=(item)=>{
		uni.navigateTo({
			url:`/pages/line/line?id=${item.id}`
		})
	}
	onLoad((opt)=>{
		Detailproject().then(res=>{
			projectList.value=res
			console.log(projectList.value);
		})
		JSON.parse(decodeURIComponent(opt.item))
		//console.log(JSON.parse(decodeURIComponent(opt.item)))
		detail.dt=JSON.parse(decodeURIComponent(opt.item))
	})
	const detail =reactive({
		dt:''
	})
</script>

<style lang="scss">
.detail{
	background-color: #f5f5f5;
	
	.d-con{
		image{
		width: 100%;
		height:600rpx;
		}
		.d-content{
			width: 100%;
			height: 700rpx;
			margin-top: -40rpx;
			background-color: #fff;
			padding:35rpx 30rpx;
			box-sizing: border-box;
			border-radius: 0 30rpx;
			position: relative;
			z-index: 9;
		}
		.j-con{
			margin-bottom: 30rpx;
			.tit{
				font-size: 36rpx;
				font-weight: 700;
				color: #111;
				margin-bottom: 30rpx;
			}
			.jj{
				.nr{
					font-size: 26rpx;
					color: #8a8a8a;
					line-height: 40rpx;
					
				}
			}
			.tj-list{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.item{
					position: relative;
					width: 48%;
					margin-bottom: 24rpx;
					box-shadow: 1px 2px 3px #e5e5e5;
					// border-radius: 0 20rpx;
					border-top-right-radius: 20rpx;
					border-top-left-radius:20rpx;
					overflow: hidden;
					.topFixed{
						position: absolute;
						top: 0;
						left: 0;
						border-top-left-radius:20rpx;
						border-bottom-right-radius:20rpx;
						background-color: #ffaa7f;
						color: #fff;
						text-align: center;
						font-size: 22rpx;
						padding: 5rpx 20rpx;
						box-sizing: border-box;
					}
					image{
						width: 100%;
						height: 200rpx;
					}
					.infos{
						padding: 10rpx 15rpx;
					}.tit{
						font-size: 20rpx;
						color: #111;
						font-weight: 700;
						margin-bottom: 15rpx;
						text-overflow: ellipsis;
					}
					.desc{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						.text{
							font-size: 26rpx;
							color: #8a8a8a;
							
						}
					}
				}
			}
		}
	}
}
</style>