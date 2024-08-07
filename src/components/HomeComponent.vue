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
      <el-table-column prop="file" label="File"></el-table-column>
       <el-table-column prop="emissions" label="Carbon Emissions (kg)" sortable></el-table-column>
      <el-table-column prop="file" label="File"></el-table-column>
       <el-table-column prop="emissions" label="Carbon Emissions (kg)" sortable></el-table-column>
      <el-table-column prop="file" label="File"></el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ElTable, ElTableColumn, ElInput } from 'element-plus';
import 'element-plus/dist/index.css';

const search = ref('');

const data = ref([
  { id: 1, month: 'January', peak: 0.000, halfPeak: 256124.000, offPeak: 0.000, totalUsage: 256124.000, description: '這是說明', emissions: 128574.248, file: '2024102251.pdf' },
  { id: 2, month: 'February', peak: 0.000, halfPeak: 220391.000, offPeak: 0.000, totalUsage: 220391.000, description: '這是說明', emissions: 110636.248, file: '2024102252.pdf' },
  { id: 3, month: 'March', peak: 0.000, halfPeak: 278819.000, offPeak: 0.000, totalUsage: 278819.000, description: '這是說明', emissions: 139967.138, file: '2024102253.pdf' },
  { id: 4, month: 'April', peak: 0.000, halfPeak: 271306.000, offPeak: 0.000, totalUsage: 271306.000, description: '這是說明', emissions: 136195.612, file: '2024102254.pdf' },
  { id: 5, month: 'May', peak: 0.000, halfPeak: 326821.000, offPeak: 0.000, totalUsage: 326821.000, description: '這是說明', emissions: 164064.142, file: '2024102255.pdf' },
  { id: 6, month: 'June', peak: 0.000, halfPeak: 313664.000, offPeak: 0.000, totalUsage: 313664.000, description: '這是說明', emissions: 157459.248, file: '2024102256.pdf' },
  { id: 7, month: 'July', peak: 0.000, halfPeak: 327087.000, offPeak: 0.000, totalUsage: 327087.000, description: '這是說明', emissions: 164964.142, file: '2024102257.pdf' },
  { id: 8, month: 'August', peak: 0.000, halfPeak: 348489.000, offPeak: 0.000, totalUsage: 348489.000, description: '這是說明', emissions: 174941.338, file: '2024102258.pdf' }
]);

const filteredData = computed(() => {
  return data.value.filter(item => {
    return item.month.toLowerCase().includes(search.value.toLowerCase()) ||
           item.description.toLowerCase().includes(search.value.toLowerCase());
  });
});
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
