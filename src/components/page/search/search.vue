<template lang="html">
	<div class="paddingTop search_page">
	        <head-top head-title="搜索" goBack="true"></head-top>
					<form class="search_form">
            <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" v-model="searchValue" >
            <input type="submit" name="submit" class="search_submit" >
        </form>
	    </div>
</template>

<script>
import headTop from '@/components/header/header'
export default {
	data(){
		return{
						geohash: '', // msite页面传递过来的地址信息
            searchValue: '', // 搜索内容
            restaurantList: [], // 搜索返回的结果
            imgBaseUrl:'', // 图片域名地址
            searchHistory: [], // 搜索历史记录
            showHistory: true, // 是否显示历史记录，只有在返回搜索结果后隐藏
            emptyResult: false, // 搜索结果为空时显示
		}
	},
	components:{
		headTop
	},
	mounted(){
		console.log(this.$route.params.geohash);
        // this.geohash = this.$route.params.geohash;
    },
}
</script>

<style lang="css">
.search_page{
        margin-bottom: 2rem;
				padding-top: 1.95rem;
    }
    .search_form{
        background-color: #fff;
        padding: 0.5rem;
        display: flex;
    }
		.search_form input{
				height: 1.5rem;
		}
		.search_input{
				flex: 4;
				border: 0.025rem solid #e4e4e4;
				font-size: 0.65rem;
				color: #333;
				border-radius: 0.125rem;
				background-color: #f2f2f2;
				font-weight: bold;
				padding: 0 0.25rem;
		}
		.search_submit{
				flex: 1;
				border: 0.025rem solid $blue;
				margin-left: .2rem;
				font-size: 0.65rem;
				color: #fff;
				border-radius: 0.125rem;
				background-color: #3190e8;
				font-weight: bold;
				padding: 0 0.25rem;
		}
    .title_restaurant{
        font-size: 0.6rem;
        line-height: 2rem;
        text-indent: 0.5rem;
        font-weight: bold;
        color: #666;
    }
    .list_container{
        background-color: #fff;
    }
    .list_li{
        display: flex;
        justify-content: 'center';
        padding: 0.5rem;
        border-bottom: 0.025rem solid #e4e4e4;
    }
		.item_left{
				margin-right: 0.25rem;

		}
		.restaurant_img{
				width: 1.7rem;
				height: 1.7rem;
		}
		.item_right{
				font-size: 0.55rem;
				flex: 1;


		}
		.item_right_text{
				padding-bottom: 0.25rem;
				border-bottom: 0.025rem solid #e4e4e4;


		}
		.item_right_text p{
				line-height: .9rem;
		}
		.pay_icon{
				margin-bottom: -0.08rem;
		}
		.item_right_detail{
				margin-top: 0.25rem;

		}
		.item_right_detail li{
				font-size: 0;
		}
		.item_right_detail li span{
				font-size: .5rem;
				vertical-align: middle;
				display: inline-block;
				margin-bottom: 0.2rem;
		}
		.only_phone{
				color: #FF6000;
		}
		.activities_icon{
				font-size: .5rem;
				color: #fff;
				font-weight: bold;
				padding: .04rem;
				border-radius: 0.15rem;
				margin-right: 0.125rem;
		}
    .search_history{


    }
		.search_history .history_list{
				background-color: #fff;
				border-bottom: 0.025rem solid #e4e4e4;
				font-size: 0.7rem;
				line-height: 2rem;
				padding: 0 0.3rem;
				display: flex;
				justify-content: space-between;
				align-items: center;


		}
		.history_text{
				display: inline-block;
				width: 80%;
		}
		.delete_icon{
				@include wh(1rem, 1rem);
				width: 1rem;
				height: 1rem;
		}
		.clear_history{
				background-color: #fff;
				color: #3190e8;
				font-size: .7rem;
				line-height: 2rem;
				font-weight: bold;
				text-align: center;
		}
    .search_none{
        margin: 0 auto;
				font-size: 0.65rem;
				line-height: 1.75rem;
        color: #333;
        background-color: #fff;
        text-align: center;
        margin-top: 0.125rem;
    }
</style>
