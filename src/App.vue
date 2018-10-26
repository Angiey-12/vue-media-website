<template>
  <div>
    <app-header></app-header>
    
    
    <router-view></router-view>
    <app-footer></app-footer>
    
 
</div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
    components:{
      appHeader:Header,
      appFooter:Footer,    
    }
}
</script>

<style>
body{
  background-color: whitesmoke;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

</style>
