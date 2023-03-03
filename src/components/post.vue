<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <main>
    <div class="sideBar">
        <ul>
            <li>
                hgdhjfj
            </li>
            <li>
                hgdhjfj
            </li>
            <li>
                hgdhjfj
            </li>
        </ul>
    </div>
    <div class="info">
        <div class="infoTitle">
            Документы
            <div class="redact"><Icon icon="ic:baseline-border-color" />Редактировать</div>
        </div>
    </div>
  </main>
</template>

<style scoped>
main{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:20px;
    min-height:calc(100vh - 450px);
}
.info{
    width: 80%;
    min-height: calc(80vh - 450px);
    background-color: #c7e3c7;
    border-radius: 3px;
}
.infoTitle{
    background-color: #535954;
    color: #fff;
    padding: 8px 18px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    line-height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.sideBar{
    width: 15%;
    display: flex;
    flex-direction: column;
    background-color: #0f5a35;
    padding:0px 0px;
}
ul{
    text-decoration: none;
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
}
li{
    width: 100%;
    min-height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
}
li:hover{
    background-color: #ff0000;
}
</style>
