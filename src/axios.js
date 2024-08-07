import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // 替換為你的 API 基礎 URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

export default instance;
