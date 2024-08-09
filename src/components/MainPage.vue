<template>
  <div class="main-page">
    <HeaderComponent />
    <div class="main-content">
     
      <SidebarComponent /> 
      <div class="main-info">
       <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from './HeaderComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
</script>
<style >
.main-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.main-content {
  display: flex;
  flex: 1;
}

.main-info{
  margin-left:200px ;
  background-color: aqua;
}
</style>
