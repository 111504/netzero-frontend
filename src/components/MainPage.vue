<template>
  <div class="main-page">
    <HeaderComponent />
    <div class="main-content">
      <SidebarComponent />
       <router-view />
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from './HeaderComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
</script>
<style scoped>
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
</style>
