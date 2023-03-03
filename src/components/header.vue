<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <header>
    <div class="headerTop">
      <div class="header__inner">
        <div class="header__inner__left">
          <a class="topBtn">
            
          </a>
        </div>
        <div class="header__inner__right">
          <a href="socBtn"></a>
          <a href="socBtn"></a>
          <a href="socBtn"></a>
          <a href="socBtn"></a>
        </div>

      </div>
    </div>
    <div class="headerMain">
      <div class="header__inner">
        <img src="" alt="">
        <div class="title">
          
        </div>
        <div class="contacts">

        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header{
  display:flex;
  flex-direction: column;
}
.headerTop {
  width: 100%;
  height: 60px;
  background-color: #0f5a35;;
}
.headerMain{
  width: 100%;
  min-height: 330px;
}
.headerMain .header__inner{

}
</style>
