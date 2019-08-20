<template lang="html">
	<header id='head_top'>
		<slot name='logo'></slot>
		<slot name='search'></slot>
		<section class="head_goback" v-if="goBack" @click="$router.go(-1)">
					<svg t="1564216021386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="885" width="20" height="20"><path d="M691.8656 172.544a32 32 0 0 0-45.2608-45.2096l-358.4 358.4a37.12 37.12 0 0 0 0 52.5312l358.4 358.4a32 32 0 0 0 45.2608-45.2608L352.4096 512l339.456-339.456z" fill="#5A5A68" p-id="886"></path></svg>
	 </section>
		<router-link class="head_login" to='/login' v-if='signinUp' >
				<span class="login_span">登录|注册</span>
		</router-link>
		<section class="title_head ellipsis" v-if="headTitle">
		            <span class="title_text">{{headTitle}}</span>
		</section>
		<slot name="edit"></slot>
		<slot name="msite-title"></slot>
		<slot name="changecity"></slot>
		<slot name="changeLogin"></slot>
</header>
</template>

<script>
// import {mapState, mapActions} from 'vuex'

export default {
	data(){
				return{
				}
		},
		props: ['signinUp', 'headTitle', 'goBack']
}
</script>

<style lang="css">

    #head_top{
        background-color: #3190e8;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
				width: 100%;
				height: 2rem;
    }
		.head_logo{
			left: .4rem;
    font-weight: 400;
    font-size: .7rem;
    color: #fff;
    width: 2.3rem;
    height: .7rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
		}
    .head_goback{
        left: 0.4rem;
				width: 0.6rem;
				height: 1rem;
        line-height: 2.2rem;
        margin-left: .4rem;
    }
    .head_login{
    	position: absolute;
			right: .55rem;
			font-size: .65rem;
			color: #fff;
			top: 50%;
			transform: translateY(-50%);
    }
		.login_span{
			font-size: .65rem;
				color: #fff;
		}
		.user_avatar{
				fill: #fff;
				width: .8rem;
				height: .8rem;
		}
    .title_head{
			position: absolute;
			top: 50%;
		    left: 50%;
		    transform: translate(-50%, -50%);
        width: 50%;
        color: #fff;
        text-align: center;
			}
			.title_text{
					font-size: 0.8rem;
					color: #fff;
					text-align: center;
					font-weight: bold;
			}
</style>
