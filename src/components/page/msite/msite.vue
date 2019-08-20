<template lang="html">
<div class="">
	<head-top signin-up='msite'>
    		<router-link :to="{path: 'search', query:{geohash}}" class="link_search" slot="search">
	    		<svg t="1564220562236" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2276" width="20" height="20"><path d="M883.9 810.8L710.7 628.1c38.2-52.3 59.7-114.8 61.5-180.9 2.3-86-29-167.8-88.2-230.2-59.2-62.5-139.2-98.1-225.2-100.4-86.1-2.3-167.8 29-230.2 88.2C166.1 264 130.5 344 128.2 430c-2.3 86 29 167.8 88.2 230.2 59.2 62.5 139.2 98.1 225.2 100.4 3 0.1 5.9 0.1 8.9 0.1 62.9 0 123.2-18 175-51.8l173.2 182.8c11.6 12.2 27.1 18.3 42.7 18.3 14.5 0 29-5.3 40.4-16.1 23.4-22.3 24.4-59.5 2.1-83.1zM444.1 664.4c-60.3-1.6-116.4-26.6-158-70.5-41.5-43.8-63.5-101.2-61.9-161.5 1.6-60.3 26.6-116.4 70.5-158 42.3-40.1 97.2-62 155.3-62 2.1 0 4.2 0 6.2 0.1 60.3 1.6 116.4 26.6 158 70.5 41.5 43.8 63.5 101.2 61.9 161.5-1.6 60.3-26.6 116.4-70.5 158-43.8 41.6-101.2 63.5-161.5 61.9z" p-id="2277"></path></svg>
    		</router-link>

			<router-link to="/home" slot="msite-title" class="msite_title">
				<span class="title_text ellipsis">{{msiteTitle}}</span>
			</router-link>
    	</head-top>
			<nav class="msite_nav">
    		<div class="swiper-container swiper-container-horizontal" v-if="foodTypes.length">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide food_types_container" v-for="(item, index) in foodTypes" :key="index">
		            		<router-link to="/home" v-for="foodItem in item" :key="foodItem.id" class="link_to_food">
	 <!-- :to="{path: '/food', query: {geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}" -->
	 										<figure>
		            				<img :src="imgBaseUrl + foodItem.image_url">
		            				<figcaption>{{foodItem.title}}</figcaption>
		            			</figure>
		            		</router-link>
		            </div>
		        </div>
		        <div class="swiper-pagination swiper-pagination-bullets" ></div>
		    </div>
				 <img src="../../image/fl.svg" class="fl_back animation_opactiy" v-else='1'>
		    <!-- <img src="../../images/fl.svg" class="fl_back animation_opactiy" v-else> -->
    	</nav>
			<div class="shop_list_container">
	    		<header class="shop_header">
						<svg t="1564549772544" class="icon shop_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4910" width="22" height="22"><path d="M354.5 687.6c15.3 0 27.8-12.4 27.8-27.8S369.9 632 354.5 632c-15.3 0-27.8 12.4-27.8 27.8s12.5 27.8 27.8 27.8z m437.3-214.8H496c-10.9 0-19.7 8.8-19.7 19.7v336.4c0 10.9 8.8 19.7 19.7 19.7h295.8c10.9 0 19.7-8.8 19.7-19.7V492.5c0.1-10.9-8.8-19.7-19.7-19.7z m-19.7 336.4H515.8v-297h256.4v297z m51-572.5l-605.9-0.7c-10.9 0-19.7 8.8-19.7 19.7 0 10.9 8.8 19.7 19.7 19.7l605.9 0.8c10.9 0 19.7-8.8 19.7-19.7 0.1-10.9-8.8-19.8-19.7-19.8z m87.3 652.1h-19.9V407.1c22.7-17.1 38.1-43.3 39.7-73.4-0.5-24.7-0.7-50.3-0.7-56.5 0-0.7 0.3-1.3 0.3-2 0-20.7-7-39.6-18.6-54.9l-69.6-112.6c-3.6-5.9-10.1-9.5-17-9.5H226c-6.2 0-12.1 2.9-15.9 7.8l-89.9 116.9-0.4 1.3c-11.2 15-17.8 33.6-17.9 53.7l-0.5 1.6v49.1c0 0.8 0 1.5 0.1 2.3 0.8 31 16.2 58.3 39.3 75.9V888h-20.9c-10.9 0-19.7 8.8-19.7 19.7 0 10.9 8.8 19.7 19.7 19.7h38.3c0.8 0.1 1.5 0.5 2.3 0.5h463l286.8 0.3c10.9 0 19.7-8.8 19.7-19.7 0.1-10.9-8.7-19.7-19.6-19.7z m-513.1-0.7H259.1V512.2h138.2v375.9z m453.7 0.4H623.5l-186.7-0.2V492.5c0-10.9-8.8-19.7-19.7-19.7H239.4c-10.9 0-19.7 8.8-19.7 19.7v395.6h-39.4V425.2c6.6 1.4 13.3 2.2 20.3 2.2 32.2 0 60.9-15.5 79-39.4 18.1 23.9 46.8 39.4 79 39.4s60.9-15.5 79-39.4c18.1 23.9 46.8 39.4 79 39.4s60.9-15.5 79-39.4c18.1 23.9 46.8 39.4 79 39.4 31.6 0 60.1-15 78.4-38.5 18.2 23.6 46.8 38.5 78.4 38.5 6.8 0 13.4-0.7 19.7-2v463.1z m39.2-560c-0.1 32.4-26.6 58.8-59 58.8-29.7 0-53.1-28.7-56.8-58.1-1.3-10-9.8-17.5-19.9-17.5-10.1 0-18.6 7.5-19.9 17.5-3.7 29.4-30.5 58.1-60.2 58.1-32.1 0-58.3-25.8-59-57.8v-1c0-11-9-20-20-20s-20 8.9-20 20c-0.1 32.4-26.6 58.8-59 58.8-32.1 0-58.3-25.8-59-57.8v-1c0-11-9-20-20-20s-20 8.9-20 20c-0.1 32.4-26.6 58.8-59 58.8-32.1 0-58.3-25.8-59-57.8v-1c0-11-9-20-20-20s-20 8.9-20 20c-0.1 32.4-26.6 58.8-59 58.8s-58.9-26.4-59-58.8c0-0.6 0-1.3-0.1-1.9V261l94.4-122.7h577.4l76.7 124 0.4 64.2c0.1 0.6 0 1.3 0 2z" p-id="4911"></path></svg>
	    		<span class="shop_header_title">附近商家</span>
	    	</header>
	    	<shop-list v-if="hasGetData" :geohash="geohash"></shop-list>
    	</div>
			<footNav></footNav>
</div>

</template>

<script>
import {mapMutations} from 'vuex'
import headTop from '@/components/header/header'
import footNav from '@/components/footer/footNav'
import shopList from '@/components/page/shop/shoplist'
import '@/components/fool/swiper.min.js'
import '@/components/style/swiper-3.4.2.min.css'
import axios from 'axios'

export default {
	data(){
			return {
					geohash: '', // city页面传递过来的地址geohash
					msiteTitle: '请选择地址...', // msite页面头部标题
					foodTypes: [], // 食品分类列表
					hasGetData: false, //是否已经获取地理位置数据，成功之后再获取商铺列表信息
					imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
			}
	},
	components: {
    	headTop,
			shopList,
			footNav
    },
	beforeMount(){

	 	if (!this.$route.query.geohash) {
			axios.get('https://elm.cangdu.org/v1/cities?type=guess')
					.then((res) => {
				this.geohash = res.data.latitude+','+res.data.longitude;
			})
	 	}else{
				this.geohash = this.$route.query.geohash
				axios.get('https://elm.cangdu.org/v2/pois/'+this.geohash)
						.then((res) => {
					this.msiteTitle = res.data.name;
				})
	 	}
	 axios.get('https://elm.cangdu.org/v2/pois/'+this.geohash)
				.then((res) => {
					this.SAVE_GEOHASH(this.geohash)
					this.RECORD_ADDRESS(res.data)

		})
			this.hasGetData = true;


	},
	mounted(){
		axios.get('https://elm.cangdu.org/v2/index_entry')
				.then((res) => {

					let resLength = res.data.length;
					let resArr = [...res.data]
					let	foodArr = []
					for (let i = 0, j = 0; i < resLength; i += 8, j++) {
    			foodArr[j] = resArr.splice(0, 8);
    		}
    		this.foodTypes = foodArr;
		}).then(()=>{
			new Swiper ('.swiper-container', {
    	loop: true,
    // 如果需要分页器
    	pagination: '.swiper-pagination',

  })
		})
	},
	methods: {
    	...mapMutations([
    		'RECORD_ADDRESS', 'SAVE_GEOHASH'
    	])
		}
}
</script>

<style lang="css">
@keyframes backOpacity{
	 0%   { opacity: 1 }
   25%  { opacity: .5 }
   50%  { opacity: 1 }
   75%  { opacity: .5 }
   100% { opacity: 1 }
}
.animation_opactiy{
    animation: backOpacity 1s ease-in-out infinite;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;}
.link_search{
	left: .8rem;
	width: .9rem;
	height: .9rem;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
.msite_title{
		position: absolute;
		top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
			width: 50%;
			color: #fff;
			text-align: center;
			margin-left: -0.5rem;
}
.msite_title .title_text{
		font-size: 0.8rem;
		color: #fff;
		text-align: center;
		display: block;
}
.msite_nav{
	padding-top: 2.1rem;
	box-sizing: border-box;
	background-color: #fff;
	border-bottom: 0.025rem solid #e4e4e4;
	height: 10.6rem;

	}
	.msite_nav .swiper-container{
		width: 100%;
		height: auto;
		padding-bottom: 0.6rem;
	}
	.msite_nav  .swiper-pagination{
				bottom: 0.2rem;
	}
.fl_back{
	width: 100%;
	height: 100%;
}
.food_types_container{
	display:flex;
	flex-wrap: wrap;
}
.link_to_food{
	width: 25%;
	padding: 0.3rem 0rem;
	display: flex;
	justify-content: center;
}
figure{
	margin: 0;
	padding: 0;
}
figure img{
	margin-bottom: 0.3rem;
	width: 1.8rem;
	height: 1.8rem;
}
figcaption{
	text-align: center;
	font-size: 0.55rem;
	color: #666;
}
.shop_list_container{
	margin-top: .4rem;
	border-top: 0.025rem solid #e4e4e4;
	background-color: #fff;
}
.shop_icon{
	fill: #999;
	margin-left: 0.6rem;
	vertical-align: middle;
	width: 0.6rem;
	height: 0.6rem;
}
.shop_header_title{
	color: #999;
	font-size: 0.55rem;
	line-height: 1.6rem;
}
</style>
