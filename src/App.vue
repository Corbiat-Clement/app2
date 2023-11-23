<template>
  <div id="app" class="backg">
    <TheNavBar></TheNavBar>

    <router-view></router-view>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';


export default {
  name: 'App',
  components: {
    TheNavBar,

}
}
</script>

<style>
.backg {
    background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(186,243,255,1) 100%, rgba(100,235,255,1) 100%);
}
</style>
