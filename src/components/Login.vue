<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();
const login = () => {
  axios.post('/api/users/login', {
    username: username.value,
    password: password.value
  })
  .then(response => {
    // Handle successful login
     router.push('/dashboard'); // 跳轉到 Dashboard 頁面
  })
  .catch(error => {
    // Handle login error
     router.push('/dashboard'); // 即使發生錯誤也跳轉，僅供測試
  });
};
</script>
