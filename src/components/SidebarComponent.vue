<template>
  <aside class="sidebar">
    <ul>
       <li><router-link to="/">盤查資訊</router-link></li>
      <li><router-link to="/report">產生報表</router-link></li>
       <li><router-link to="/pdf">產生pdf</router-link></li>
    </ul>
  </aside>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  width: 150px;
  background-color: #f8f9fa;
  padding: 1rem;
  border-right: 1px solid #000000;
  height: 100vh;
  position: fixed;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin-bottom: 1rem;
}
.sidebar a {
  text-decoration: none;
  color: #000;
  
}
</style>
