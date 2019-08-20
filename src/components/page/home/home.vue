<template lang="html">
		<div class='home'>
	        <head-top signin-up='home'>
	            <span slot='logo' class="head_logo" @click='reload'>ele.me</span>
	        </head-top>
	        <nav class="city_nav">
	            <div class="city_tip">
	                <span>当前定位城市: </span>
	                <span>定位不准时，请在城市列表中选择</span>
	            </div>
							<router-link :to="'/city/' + Guesscity.id" class="guess_city">
							 <span>{{Guesscity.name}}</span>
							 <svg t="1564209985622" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3207" width="20" height="20"><path d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z" p-id="3208"></path></svg>
					 </router-link>
	        </nav>
					<section id="hot_city_container">
					 <h4 class="city_title">热门城市</h4>
					 <ul class="citylistul clear">
							 <router-link  tag="li" v-for="item in Hotcity" :to="'/city/' + item.id" :key="item.id">
									 {{item.name}}
							 </router-link>
					 </ul>
			 		</section>
					<section class="group_city_container">
            <ul class="letter_classify">
                <li v-for="(value, key, index) in sortgroupcity" :key="key"  class="letter_classify_li">
                    <h4 class="city_title">{{key}}
                        <span v-if="index == 0">（按字母排序）</span>
                    </h4>
                    <ul class="groupcity_name_container citylistul clear">
                        <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
                            {{item.name}}
                        </router-link>
                    </ul>
                </li>
            </ul>
        </section>
	</div>
</template>

<script>
import headTop from '@/components/header/header'
import axios from 'axios'
export default {
	name: 'Home',
	data () {
		return{
			Guesscity:'',
			Groupcity:{},
			Hotcity:[]
		}
	},
	created(){
			axios.get('https://elm.cangdu.org/v1/cities?type=guess')
			.then((response) => {
				this.Guesscity=response.data;
		  }).catch(response => {
			}),
			axios.get('https://elm.cangdu.org/v1/cities?type=group')
			.then((response) => {
				this.Groupcity=response.data;
		  })
			axios.get('https://elm.cangdu.org/v1/cities?type=hot')
			.then((response) => {
				this.Hotcity=response.data;
		  })
		},
		components:{
        headTop
    },
		computed:{
			sortgroupcity(){
			            let sortobj = {};
			            for (let i = 65; i <= 90; i++) {
			                if (this.Groupcity[String.fromCharCode(i)]) {
			                    sortobj[String.fromCharCode(i)] = this.Groupcity[String.fromCharCode(i)];
			                }
			            }
			            return sortobj
			        }
		},
		methods:{
			reload(){
				window.location.reload()
			}
		}

	}
</script>

<style lang="css">
.city_nav{
					padding-top: 2.35rem;
	        border-top: 1px solid #e4e4e4;
	        background-color: #fff;
	        margin-bottom: 0.4rem;
}
.city_tip{
					display: flex;
					justify-content: space-between;
          line-height: 1.45rem;
          padding: 0 0.45rem;
}
.city_tip	span:nth-of-type(1){
	font-size: 0.55em;
	color: #666;
}
.city_tip	span:nth-of-type(2){
	font-size: 0.475em;
	color: #9f9f9f;
						font-weight: 900;
	}

	#hot_city_container{
        background-color: #fff;
        margin-bottom: 0.4rem;
    }
		.guess_city{
								display: flex;
		 						justify-content: space-between;
		            align-items: center;
		            height: 1.5rem;
		            padding: 0 0.45rem;
		            border-top: 1px solid $e4e4e4;
		            border-bottom: 2px solid $e4e4e4;
								font: 0.75rem/1.8rem 'Microsoft YaHei';

							}
							.guess_city span:nth-of-type(1){
									 color: #3190e8;
							 }
							 .citylistul{
								 color: #333;
 							 	font-weight: 400;
     						box-sizing: border-box;
							 	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
							 }
  #hot_city_container .citylistul li{

						float: left;
            text-align: center;
            color: #3190e8;
            border-bottom: 0.025rem solid #e4e4e4;

						height: 1.75rem;
						width: 25%;
						font: .6rem/1.75rem 'Microsoft YaHei';
        }
.citylistul  li:nth-of-type(4n){
            border-right: none;
        }
    .city_title{
    	text-align: left;
    	list-style: none;
			    box-sizing: border-box;
        color: #666;
        font-weight: 400;
        text-indent: 0.45rem;
        border-top: 2px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
				 font: 0.55rem/1.45rem 'Helvetica Neue';
    }
		  .city_title span {
				font-size: 0.475em;
				color: #666;
		  }
    .letter_classify_li{
    	width: 100%;
        margin-bottom: 0.4rem;
        background-color: #fff;
        border-bottom: 1px solid #e4e4e4;
				box-sizing: border-box;

    }
		.groupcity_name_container li{
			border-bottom: 1px solid #e4e4e4;
			 font: .6rem/1.75rem 'Microsoft YaHei';
			 margin-bottom: 2px;
			 float: left;
			 width: 25%;
					display: block;
					text-align: center;
					overflow: hidden;
					color: #666;
				}

</style>
