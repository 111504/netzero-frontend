<template>
  <header class="header">
    <div class="logo">
      <!-- <img src="#" alt="Company Logo"> -->
      <span>顧問有限公司</span>
    </div>
    <nav class="nav-menu">
      <ul>
        <li><a href="#">盤查</a></li>
        <li><a href="#">廠區</a></li>
        <li><a href="#">報表</a></li>
        <li><a href="#">管理</a></li>
      </ul>
    </nav>
    <div class="user-info">
      <span>語系</span>
      <span>您好 mhh-group.com</span>
      <a href="#">登出</a>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background-color: #f0f5fa;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  height: 100px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 50px; /* 根據需要調整標誌大小 */
  margin-right: 10px;
}

.nav-menu {
  flex-grow: 1;
  display: flex;
  justify-content: flex-start; /* 將導航菜單靠左顯示 */
}

.nav-menu ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin: 0 1rem;
}

.nav-menu a {
  text-decoration: none;
  color: #333;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 將用戶信息區塊靠右顯示 */
}

.user-info span {
  margin-right: 1rem;
}

.user-info a {
  text-decoration: none;
  color: #007bff;
}

.user-info a:hover {
  text-decoration: underline;
}
</style>
