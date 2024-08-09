<template>
  <div class="content">
    <!-- <ReportChart /> -->
    <PieChart />
    <!-- <BarChart />
    <UpdateChart/> -->
  </div>
</template>

<script setup>
import ReportChart from './report/ReportChart.vue'
import PieChart from './report/PieChart.vue'
import BarChart from './report/BarChart.vue'
import UpdateChart from './report/UpdateChart.vue'
</script>

<style >

.content {
  margin-left: 200px; /* Sidebar width */
  padding: 1rem;
  background-color: #2bde4c;
  width: 100vw;
  height: 500px;
}

</style>
