<template>
  <div class="content">
    <div class="search-bar"> 
    <el-input v-model="search" placeholder="搜尋"></el-input>
    <el-input v-model="search" placeholder="電話"></el-input>
    <el-input v-model="search" placeholder="部門"></el-input>
    </div>
   
    <el-table :data="filteredData">
      <el-table-column prop="month" label="Month" sortable></el-table-column>
      <el-table-column prop="peak" label="Peak (kWh)" sortable></el-table-column>
      <el-table-column prop="halfPeak" label="Half-Peak (kWh)" sortable></el-table-column>
      <el-table-column prop="offPeak" label="Off-Peak (kWh)" sortable></el-table-column>
      <el-table-column prop="totalUsage" label="Total Usage (kWh)" sortable></el-table-column>
      <el-table-column prop="description" label="Description"></el-table-column>
      <el-table-column prop="emissions" label="Carbon Emissions (kg)" sortable></el-table-column>
      <el-table-column prop="file" label="File"></el-table-column>
       <el-table-column prop="emissions" label="Carbon Emissions (kg)" sortable></el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ElTable, ElTableColumn, ElInput } from 'element-plus';
import 'element-plus/dist/index.css';
import axios from 'axios';

const search = ref('');
const filteredData=ref('');



const fetchData =async()=>{
  try {
    const response=await axios.get('https://run.mocky.io/v3/64121b66-8da1-48ce-84c8-c487f989e7aa',{timeout:5000});
      if(response.data.code===200){
      filteredData.value = response.data.data; // 假設 API 返回一個數組
      console.log('回應=',chartData1.value)
     }
     else{
      // 處理後端返回的業務錯誤
      console.error('API Error',response.data.message)
     }
  } catch (error) {
      //技術錯誤
     if (error.code === 'ECONNABORTED') {
      console.error('Request timed out');
    } else {
      console.error('Failed to fetch data:', error.message);
    }
  }


}
fetchData()

</script>

<style scoped>
.content {
  margin-left: 200px; /* Sidebar width */
  padding: 1rem;
}

.search-bar{
    display: flex;
}
</style>
