<template lang="html">
	<div class="loginContainer">
         <head-top :head-title="loginWay? '登录':'密码登录'" goBack="true">
             <!-- <div slot="changeLogin" class="change_login" @click="changeLoginWay">{{loginWay? "密码登录":"短信登录"}}</div> -->
         </head-top>
         <form class="loginForm" v-if="loginWay">
             <section class="input_container phone_number">
                 <input type="text" placeholder="账号密码随便输入" name="phone" maxlength="11" v-model="phoneNumber">
                 <button  :class="{right_phone_number:rightPhoneNumber}" v-show="!computedTime">获取验证码</button>
                 <button   v-show="computedTime">已发送({{computedTime}}s)</button>
             </section>
             <section class="input_container">
                 <input type="text" placeholder="验证码" name="mobileCode" maxlength="6" v-model="mobileCode">
             </section>
         </form>
         <form class="loginForm" v-else>
             <section class="input_container">
                 <input type="text" placeholder="账号" v-model.lazy="userAccount">
             </section>
             <section class="input_container">
                 <input v-if="!showPassword" type="password" placeholder="密码"  v-model="passWord">
                 <input v-else type="text" placeholder="密码"  v-model="passWord">
                 <div class="button_switch" :class="{change_to_text: showPassword}" @click='ShPasskey'>
                     <div class="circle_button" :class="{trans_to_right: showPassword}" @click='ShPasskey' ></div>
                     <span>abc</span>
                     <span>...</span>
                 </div>
             </section>
             <section class="input_container captcha_code_container">
                 <input type="text" placeholder="验证码" maxlength="4" v-model="codeNumber">
                 <div class="img_change_img">
                     <img v-show="captchaCodeImg" :src="captchaCodeImg">
                     <div class="change_img" @click='getCaptchaCode'>
                         <p>看不清</p>
                         <p>换一张</p>
                     </div>
                 </div>
             </section>
         </form>
         <p class="login_tips">
             温馨提示：未注册过的账号，登录时将自动注册
         </p>
         <p class="login_tips">
             注册过的用户可凭账号密码登录
         </p>
         <div class="login_container">登录</div>
         <router-link to="/forget" class="to_forget" v-if="!loginWay">重置密码？</router-link>
         <alert-tip v-if="showAlert" :showHide="showAlert" :alertText="alertText"></alert-tip>
     </div>
</template>

<script>
import headTop from '@/components/header/header'
import axios from 'axios'
export default {
	data(){
					 return {

							 loginWay: false, //登录方式，默认短信登录
							 showPassword: false, // 是否显示密码
							 phoneNumber: null, //电话号码
							 mobileCode: null, //短信验证码
							 validate_token: null, //获取短信时返回的验证值，登录时需要
							 computedTime: 0, //倒数记时
							 userInfo: null, //获取到的用户信息
							 userAccount: null, //用户名
							 passWord: null, //密码
							 captchaCodeImg: null, //验证码地址
							 codeNumber: null, //验证码
							 showAlert: false, //显示提示组件
							 alertText: null, //提示的内容
					 }
},
created(){
            this.getCaptchaCode();
        },
components:{
		headTop
},
methods:{
	getCaptchaCode() {
		axios.post('https://elm.cangdu.org/v1/captchas')
		.then((response) => {
			this.captchaCodeImg= response.data.code
		})
	},
	ShPasskey() {
		this.showPassword = !this.showPassword;
	}
	}
}
</script>

<style lang="css">
	.loginContainer{
			 padding-top: 1.95rem;
	 }
	 .loginContainer p, span, input{
			 font-family: Helvetica Neue,Tahoma,Arial;
	 }
	 .change_login{
			 position: absolute;
 		 		top: 50%;
	 			transform: translateY(-50%);
			 right: 0.75rem;
			 font-size: 7rem;

	 }
	 .loginForm{
			 background-color: #fff;
			 margin-top: .6rem;
			 }
			 .right_phone_number{
					 background-color: #4cd964;
			 }
			 .input_container{
			 	box-sizing: border-box;
					 display: flex;
					 height: 2.4rem;
					 justify-content: space-between;
					 padding: .6rem .8rem;
					 border-bottom: 1px solid #f1f1f1;
				 }
				 .input_container input{
					 	display: inline-block;
					     font-style: normal;
							 margin: 0;
							 padding: 0;
							 text-indent: 0px;
							 border: 0;
    			 			text-shadow: none;
					     list-style: none;
					     text-transform: none;
							 text-decoration: none;
     					text-align: start;
				 			font-size: .7rem;

					    font: 400 13.3333px Arial;
							outline: none;
				 }
				 .loginForm button{
							font-size: .65rem;

							font-family: Helvetica Neue,Tahoma,Arial;
							padding: .28rem .4rem;
							border: 1px;
							border-radius: 0.15rem;
					}
			 .phone_number{
					 padding: .3rem .8rem;
			 }
			 .img_change_img{
				 padding: 0;
		     margin: 0;
		     list-style: none;
		     font-style: normal;
		     text-decoration: none;
		     border: none;
		     color: #333;
		     font-weight: 400;
		     font-family: Microsoft Yahei;
		     box-sizing: border-box;
				 display: flex;
				 align-items: center;
				 }
					.img_change_img img{
							 width: 2.5rem;
							 height: 1.5rem;
							 margin-right: .2rem;
					 }
					 .change_img{
							 display: flex;
							 flex-direction: 'column';
							 flex-wrap: wrap;
							 width: 2rem;
							 justify-content: center;
							 color: #333;
							 font-weight: 400;
							 box-sizing: border-box;
						 }
						 .change_img p{
										font-size: .55rem;
										color: #666;
									}

						 .change_img p:nth-of-type(2){
								 color: #3b95e9;
								 margin-top: .2rem;
						 }
			 .captcha_code_container{
					 height: 2.4rem;
				  }
	 .login_tips{
			 font-size: .5rem;
			 color: red;
			 padding: .4rem .6rem;
			 line-height: .5rem;

	 }
	 .login_tips a{
				color: #3b95e9;
		}
	 .login_container{
			 margin: 0 .5rem 1rem;
			 font-size: .7rem;
			 color: #fff;
			 background-color: #4cd964;
			 padding: .5rem 0;
			 border: 1px;
			 border-radius: 0.15rem;
			 text-align: center;
	 }
	 .button_switch{
			 background-color: #ccc;
			 display: flex;
			 justify-content: center;
			 width: 2rem;
			 height: .7rem;
			 padding: 0 .2rem;
			 border: 1px;
			 border-radius: 0.5rem;
			 position: relative;
	 }
	 .button_switch span{
			 font-size: .45rem;
			 color: #fff;
			 transform: translateY(.05rem);
			 line-height: .6rem;
	 }
	 .button_switch span:nth-of-type(2){
			 transform: translateY(-.08rem);
	 }
	 .trans_to_right{
			 transform: translateX(1.3rem);
	 }
	 .circle_button{
			 transition: all .3s;
			 position: absolute;
			 top: -0.2rem;
			 z-index: 1;
			 left: -0.1rem;
			 width: 1.2rem;
			 height: 1.2rem;
			 box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.1);
			 background-color: #f1f1f1;
			 border-radius: 50%;
	 }
	 .change_to_text{
			 background-color: #4cd964;
	 }
	 .to_forget{
			 float: right;
			 font-size: .6rem;
			 color: #3b95e9;
			 margin-right: .3rem;
	 }
</style>
