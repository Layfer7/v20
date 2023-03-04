<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
  $(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
        autoplayTimeout:100,
    });
  });
});
</script>
<template>
    <div class="owl-carousel owl-theme" id="slider">
        <div class="slide"><img src="src\assets\tyan.jpeg" alt=""></div>
        <div class="slide"><img src="src\assets\tyan.jpeg" alt=""></div>
        <div class="slide"><img src="src\assets\tyan.jpeg" alt=""></div>
        <div class="slide"><img src="src\assets\tyan.jpeg" alt=""></div>
    </div>

</template>
<style scoped>
.owl-carousel{
    width: 100%;
    height: 130px;
}
</style>