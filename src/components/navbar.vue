<script setup>
import { Icon } from '@iconify/vue'; 
import markdownModal from './markdownModal.vue';
import { store } from '../main.js';
import { ref, onMounted } from 'vue';
const addElement = (evt) =>{
  store.commit('setVisible')
  store.commit('getParent',evt.target.getAttribute('parent'))
  console.log(store.state.parent)
}
let linkers = ref()

const titles = ["сведения об образовательной организации","актуальная информация",""]

onMounted(async()=>{
  linkers = await api.getLinkers()
})
</script>



<template>
    <div class="dropdown">
        <button class="dropbtn">ГЛАВНАЯ</button>
    </div>
    <div class="dropdown">
        <button class="dropbtn">СВЕДЕНИЯ ОБ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ</button>
        <div class="dropdown-content">
            <a href="/post">Link 1</a>
            <a href="/post">Link 2</a>
            <div class="add" parent="сведения об образовательной организации" @click = addElement><Icon icon="ic:baseline-add-circle"/>Добавить</div>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">АКТУАЛЬНАЯ ИНФОРМАЦИЯ</button>
        <div class="dropdown-content">
            <a href="/post">Link 1</a>
            <a href="/post">Link 2</a>
            <div class="add" parent="актуальная информация" @click = addElement><Icon icon="ic:baseline-add-circle"/>Добавить</div>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">ШКОЛЬНЫЕ ПРОЕКТЫ</button>
        <div class="dropdown-content">
            <a href="/post">Link 1</a>
            <a href="/post">Link 2</a>
            <div class="add" parent="1" @click = addElement><Icon icon="ic:baseline-add-circle"/>Добавить</div>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">НОВОСТИ</button>
    </div>
</template>

<style scoped>
  /* Dropdown Button */
.dropbtn {
    z-index: 1000;
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
    z-index: 1000;
    position: relative;
    display: inline-block;
    min-width: 160px;
  }

  
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    z-index: 1000;
    display: none;
    position: absolute;
    background-color: #c1170a;
    color: white;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  /* Links inside the dropdown */
  .dropdown-content a,.add {
    color: white;
    z-index: 1000;
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }
  
  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {background-color: #911000}
  .dropdown-content .add:hover{background-color: #911000;}
  
  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {display: block;}
  
  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {background-color: #911000;}
</style>
