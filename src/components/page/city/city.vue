<template lang="html">
	<div class="city_container">
        <head-top :head-title="cityname" :data='cityname' go-back='true'>

            <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
        </head-top>
        <form class="city_form" v-on:submit.prevent>
            <div>
                <input type="search" name="city" placeholder="输入学校、商务楼、地址" class="city_input input_style" required v-model='inputVaule'>
            </div>
            <div>
                <input type="submit" name="submit" class="city_submit input_style" @click='postadd' value="提交">
            </div>
        </form>
				<header v-if="historytitle" class="pois_search_history">搜索历史</header>
			 <ul class="getpois_ul">
					 <li v-for="(item, index) in placelist" @click='nextpage(index, item.geohash)' :key="index">
							 <h4 class="pois_name ellipsis">{{item.name,index}}</h4>
							 <p class="pois_address ellipsis">{{item.address}}</p>
					 </li>
			 </ul>
			 <footer v-if="historytitle&&placelist.length" class="clear_all_history" @click="clearAll">清空所有</footer>
			 <div class="search_none_place" v-if="placeNone">很抱歉！无搜索结果</div>
    </div>
</template>

<script>
import axios from 'axios'
import headTop from '@/components/header/header'
export default {
	data(){
		return{
                inputVaule:'', // 搜索地址
                cityid:'', // 当前城市id
                cityname:'', // 当前城市名字
                placelist:[], // 搜索城市列表
                placeHistory:[], // 历史搜索记录
                historytitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
                placeNone: false, // 搜索无结果，显示提示信息
            }
	},
	mounted(){
					 this.cityid = this.$route.params.cityid;
					 //获取当前城市名字
					 axios.get('https://elm.cangdu.org/v1/cities/'+this.cityid).then(res => {
						this.cityname = res.data.name;
					 })
					 this.initData();
			 },
			 components:{
		 		headTop
		 	},
			 methods:{
				 initData() {
					 
					 if (window.localStorage.getItem('placeHistory')) {
					 	this.placelist = JSON.parse(window.localStorage.getItem('placeHistory'));
					}else {
						this.placelist=[];
					}
				 },
				 postadd(){
					 if (this.inputVaule) {
					 	axios.get('https://elm.cangdu.org/v1/pois?city_id='+this.cityid+'&keyword='+this.inputVaule+'&type=search').then(res => {
							this.historytitle = false;
							this.placelist = res.data;
	            this.placeNone = res.data.length? false : true;
 					 })
					 }
				 },
				 nextpage(index, geohash){
                 let history = window.localStorage.getItem('placeHistory');

                 let choosePlace = this.placelist[index];

                 if (history) {
                     let checkrepeat = false;
                     this.placeHistory = JSON.parse(history);
                     this.placeHistory.forEach(item => {
                         if (item.geohash == geohash) {
                             checkrepeat = true;
                         }
                     })
                     if (!checkrepeat) {
                         this.placeHistory.push(choosePlace)
                     }
                 }else {
                     this.placeHistory.push(choosePlace)
                 }

									let content = JSON.stringify(this.placeHistory);

                 window.localStorage.setItem('placeHistory',content)
                 this.$router.push({path:'/msite', query:{geohash}})
             },
						 clearAll(){
							 window.localStorage.clear();
							 this.initData()
						 }
			 }
}
</script>

<style lang="css">
.city_container{
		padding-top: 2.35rem;
}
.change_city{
		right: 0.4rem;
		font-size: 0.6em;
		color: #fff;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
}
.city_form{

		background-color: #fff;
		border-top: 1px solid #4e4e4e;
		border-bottom: 1px solid #4e4e4e;
		padding-top: 0.4rem;
		}

.city_submit{
	height: 1em;
		background-color:#3190e8;
		font-size: 0.65em;
		color: #fff;
}
		.city_input{
				border: 1px solid #4e4e4e;
				padding: 0 0.3rem;
				@include sc(0.65rem, #333);
				font-size: 0.65em;
				color: #333;
		}
		.city_form	div{
					width: 90%;
					margin: 0 auto;
					text-align: center;

				}
				.input_style{
						border-radius: 0.1rem;
						margin-bottom: 0.4rem;
						width: 100%;
						height: 2em
				}
				.pois_search_history{
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        padding-left: 0.5rem;
        @include font(0.475rem, 0.8rem);
				font-size: 0.475rem;
				line-height: 0.8rem;
    }
		.getpois_ul li{
				margin: 0 auto;
				padding-top: 0.65rem;
				border-bottom: 1px solid #e4e4e4;
		}
		.getpois_ul li .pois_name{
				margin: 0 auto 0.35rem;
				width: 90%;
			 font-size: 0.65rem;
			 color: #333;
		}
		.getpois_ul li .pois_address{
				width: 90%;
				margin: 0 auto 0.55rem;
				font-size: 0.45rem;
				color: #999;
		}
    .getpois_ul{
        background-color: #fff;
        border-top: 1px solid #e4e4e4;
				text-align: left;
    }
    .search_none_place{
        margin: 0 auto;
				font-size: 0.65rem;
				line-height: 1.75rem;
        color: #333;
        background-color: #fff;
        text-indent: 0.5rem;
    }
    .clear_all_history{
				font-size: 0.75rem;
				color: #666;
        text-align: center;
        line-height: 2rem;
        background-color: #fff;
    }
</style>
