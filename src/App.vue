<script setup>
import Header from './components/header.vue';
import Post from './components/post.vue';

async function fetchData() {
  const res = await fetch('api');
  if (res.ok){

  }else{

  }
}


</script>

<template>
  <Header/>
  <router-view></router-view>
</template>

<style scoped>

</style>
