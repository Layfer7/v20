<script setup>
import { ref } from 'vue'
import Navbar from './navbar.vue';
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
        <img src="src\assets\logo.png" alt="logo">
        <div class="title">
          <strong>
            Муниципальное<br/>общеобразовательное<br/>бюджетное учреждение<br/>средняя<br/>общеобразовательная школа<br/>№8<br/>имени А.Г. Ломакина
          </strong>
        </div>
        <div class="contacts">  
          <div class="geolocation">
            347922, Ростовская область,<br/> г. Таганрог,<br/> пер. Некрасовский, 73
          </div>
          <div class="phone">
            +7 (8634) 39-31-65
          </div>
          <div class="mail">
            sch8@tagobr.ru
          </div>
        </div>
    </div>
    <nav>
      <Navbar/>
    </nav>
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
.headerTop .header__inner{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.headerMain{
  width: 100%;
  min-height: 330px;
  color:black;
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.title{
  color: #c1170a;
  font-size: 36px;
  line-height: 36px;
  text-align: center;
}
.logo{
  width: 140px;
  height: 140px;
}
.contacts{
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.contacts .geolocation{
  display: flex;
}
.geolocation ::before{
  content: "\f041";
}
nav{
  width: 100%;
  min-height: 60px;
  background-color: #c1170a;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
