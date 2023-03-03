<script setup>
import { Icon } from '@iconify/vue';
</script>



<template>
    <div class="dropdown">
        <button class="dropbtn">ГЛАВНАЯ</button>
    </div>
    <div class="dropdown">
        <button class="dropbtn">СВЕДЕНИЯ ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ</button>
        <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#"><Icon icon="ic:baseline-add-circle" />Добавить</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">АКТУАЛЬНАЯ ИНФОРМАЦИЯ</button>
        <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#"><Icon icon="ic:baseline-add-circle" />Добавить</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">ШКОЛЬНЫЕ ПРОЕКТЫ</button>
        <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#"><Icon icon="ic:baseline-add-circle" />Добавить</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">НОВОСТИ</button>
    </div>
</template>

<style scoped>
  /* Dropdown Button */
.dropbtn {
    background-color: #c1170a;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    min-width: 100%;
    height: 100%;
    font-weight: 700;
  }
  
  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
    min-width: 160px;
  }

  
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #c1170a;
    color: white;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  /* Links inside the dropdown */
  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
  
  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {background-color: #911000}
  
  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {display: block;}
  
  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {background-color: #911000;}
</style>
