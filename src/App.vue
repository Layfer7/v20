<script setup>
import Header from './components/header.vue';
import Post from './components/post.vue';
import markdownModal from './components/markdownModal.vue';
import {store} from './main.js'

async function fetchData() {
  const res = await fetch('api');
  if (res.ok){

  }else{

  }
}


</script>

<template>
  <Header/>
  <markdownModal v-if="store.state.modalIsVisible" name="v"/>
  <router-view></router-view>

</template>

<style scoped>

</style>
