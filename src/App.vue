<template>

    <div class="App">
      <transition name="router-fade" mode="out-in">
  			<keep-alive>
  			    <router-view v-if="$route.meta.keepAlive"></router-view>
  			</keep-alive>
      	</transition>
      	<transition name="router-fade" mode="out-in">
  			<router-view v-if="!$route.meta.keepAlive"></router-view>
  		</transition>
    </div>


</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1,h2,h3,h4,h5,p{
  margin: 0;
  padding: 0;
}
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
a{
  text-align: center;
  text-decoration-line: none;
}
</style>
