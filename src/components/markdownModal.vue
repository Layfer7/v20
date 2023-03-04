<script setup>
import { ref , onMounted, onUnmounted} from 'vue';
import MdEditor from 'md-editor-v3';
import { Icon } from '@iconify/vue';
import 'md-editor-v3/lib/style.css';
import {store} from '../main.js'
import { api } from '../main.js';
defineProps(
  {
    name: String
  }
)

const text = ref('');
let postName = ref('');
const nameChange = (e) => postName = e.target.value
let content = ref('');
const contentChange = (text) => content = text;

const createLinker = async() => {
  try{
    await api.createLinker({title:postName,parent:store.state.parent},'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRvb3IiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTY3NzkyMDM3NiwiZXhwIjoxNjc4MDA2Nzc2fQ.onK9420loPa_6-K68Hfvifn4X04KuXP-dnCwLCvdD1c')
    console.log(123)
  }catch{
    console.log(store.state.parent)
  }

};

const width = ref(600);
    const height = ref(400);
    const isResizing = ref(false);
    const startX = ref(0);
    const startY = ref(0);

const close = () =>{
  store.commit("setInvisible")
}
function startResize(e) {
      isResizing.value = true;
      startX.value = e.clientX;
      startY.value = e.clientY;
    }

    function stopResize() {
      isResizing.value = false;
    }

    function resize(e) {
      if (isResizing.value) {
        const newWidth = width.value + (e.clientX - startX.value);
        const newHeight = height.value + (e.clientY - startY.value);
        width.value = newWidth > 100 ? newWidth : 100;
        height.value = newHeight > 100 ? newHeight : 100;
        startX.value = e.clientX;
        startY.value = e.clientY;
      }
    }
    onMounted(() => {
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', stopResize);
    });

    onUnmounted(() => {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize);
    });

</script>

<template>
  <div class="modalWindow" :style="{ width: width + 'px', height: height + 'px' }">
    <div class="modalTop">
      <div class="modalTopInfo">
        <h1>Создание елемента в {{ name }}</h1>
        <button type="button" class="btn-close" aria-label="Close" @click="close"></button>
      </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Название</span>
        <input type="text" class="form-control" placeholder="название елемента" aria-label="название" aria-describedby="basic-addon1" v-bind:value="postName" @change="nameChange">
      </div>
    </div>
    <div class="postName">
     
    </div>
    <md-editor v-model="text" language="en-US" no-prettier="true" @onChange="contentChange" toolbarsExclude = "['save','preview','htmlPreview','catalog','github']"/>
    <button type="button" class="btn btn-outline-success" @click="createLinker">Success</button>
    <div class="resize-handle" @mousedown="startResize"><Icon icon="ic:outline-arrow-drop-down" /></div>
  </div>
</template>


<style scoped>
h1{
  font-size: 30px;
}
.modalWindow{
  z-index: 1001;
  margin: auto;
  position:absolute;
  position: fixed;
  top: 25%;
  left: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 60vh;
  background-color: white;
  border-radius: 5px;
}
.modalTop{
  background-color:blueviolet;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:start;
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 5px;
}
.modalTopInfo{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.btn-outline-success{
  margin: 10px 0px;
}
</style>
