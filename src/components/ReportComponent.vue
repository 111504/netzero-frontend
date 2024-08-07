<template>
  <div class="content">
    <h2>產生報表</h2>
    <ReportChart />
    <PieChart />
    <BarChart />
  </div>
</template>

<script setup>
import ReportChart from './report/ReportChart.vue'
import PieChart from './report/PieChart.vue'
import BarChart from './report/BarChart.vue'
</script>

<style scoped>

.content {
  margin-left: 200px; /* Sidebar width */
  padding: 1rem;
}

</style>
