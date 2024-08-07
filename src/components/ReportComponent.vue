<template>
  <div class="content">
    <!-- <ReportChart />
    <PieChart /> -->
    <!-- <BarChart /> -->
    <UpdateChart/>
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
  background-color: rgb(255, 255, 255);
  width: 100%;
}

</style>
